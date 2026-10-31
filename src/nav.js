// Coarse A* navigation grid with line-of-sight smoothing.
class MinHeap {
  constructor() { this.items = [] }
  get size() { return this.items.length }
  push(node, priority) {
    const items = this.items
    items.push({ node, priority })
    let i = items.length - 1
    while (i > 0) {
      const p = (i - 1) >> 1
      if (items[p].priority <= items[i].priority) break
      const t = items[p]; items[p] = items[i]; items[i] = t
      i = p
    }
  }
  pop() {
    const items = this.items
    const top = items[0]
    const last = items.pop()
    if (items.length) {
      items[0] = last
      let i = 0
      for (;;) {
        const l = i * 2 + 1
        const r = l + 1
        let s = i
        if (l < items.length && items[l].priority < items[s].priority) s = l
        if (r < items.length && items[r].priority < items[s].priority) s = r
        if (s === i) break
        const t = items[s]; items[s] = items[i]; items[i] = t
        i = s
      }
    }
    return top ? top.node : -1
  }
}

export class NavGrid {
  constructor(bounds, cell, blockers, radius = 0.36) {
    this.bounds = bounds
    this.cell = cell
    this.radius = radius
    this.blockers = blockers
    this.cols = Math.ceil((bounds.maxX - bounds.minX) / cell)
    this.rows = Math.ceil((bounds.maxZ - bounds.minZ) / cell)
    this.blocked = new Uint8Array(this.cols * this.rows)
    this.rebuild()
  }

  setBlockers(blockers) {
    this.blockers = blockers
    this.rebuild()
  }

  rebuild() {
    const { minX, minZ } = this.bounds
    const { cell, cols, rows } = this
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = minX + (c + 0.5) * cell
        const z = minZ + (r + 0.5) * cell
        this.blocked[r * cols + c] = this.pointBlocked(x, z) ? 1 : 0
      }
    }
  }

  pointBlocked(x, z) {
    const rad = this.radius
    for (const b of this.blockers) {
      if (x > b.minX - rad && x < b.maxX + rad && z > b.minZ - rad && z < b.maxZ + rad) return true
    }
    return false
  }

  idx(c, r) { return r * this.cols + c }
  cellOf(x, z) {
    const c = Math.floor((x - this.bounds.minX) / this.cell)
    const r = Math.floor((z - this.bounds.minZ) / this.cell)
    return { c: Math.max(0, Math.min(this.cols - 1, c)), r: Math.max(0, Math.min(this.rows - 1, r)) }
  }
  worldOf(c, r) {
    return { x: this.bounds.minX + (c + 0.5) * this.cell, z: this.bounds.minZ + (r + 0.5) * this.cell }
  }

  nearestFree(c, r, maxRing = 8) {
    if (!this.blocked[this.idx(c, r)]) return { c, r }
    for (let ring = 1; ring <= maxRing; ring++) {
      for (let dr = -ring; dr <= ring; dr++) {
        for (let dc = -ring; dc <= ring; dc++) {
          if (Math.abs(dr) !== ring && Math.abs(dc) !== ring) continue
          const nc = c + dc
          const nr = r + dr
          if (nc < 0 || nr < 0 || nc >= this.cols || nr >= this.rows) continue
          if (!this.blocked[this.idx(nc, nr)]) return { c: nc, r: nr }
        }
      }
    }
    return { c, r }
  }

  findPath(sx, sz, gx, gz) {
    const start = this.cellOf(sx, sz)
    const goal = this.cellOf(gx, gz)
    const s = this.nearestFree(start.c, start.r, 3)
    const g = this.nearestFree(goal.c, goal.r, 5)
    const startIdx = this.idx(s.c, s.r)
    const goalIdx = this.idx(g.c, g.r)
    if (startIdx === goalIdx) return [{ x: gx, z: gz }]

    const n = this.cols * this.rows
    const gScore = new Float32Array(n).fill(Infinity)
    const came = new Int32Array(n).fill(-1)
    const closed = new Uint8Array(n)
    const heap = new MinHeap()
    gScore[startIdx] = 0
    heap.push(startIdx, 0)
    const { cols, rows } = this
    const gc = g.c
    const gr = g.r
    let found = false
    let guard = 0

    while (heap.size && guard++ < 9000) {
      const cur = heap.pop()
      if (cur === goalIdx) { found = true; break }
      if (closed[cur]) continue
      closed[cur] = 1
      const cc = cur % cols
      const cr = (cur / cols) | 0
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (!dc && !dr) continue
          const nc = cc + dc
          const nr = cr + dr
          if (nc < 0 || nr < 0 || nc >= cols || nr >= rows) continue
          const ni = nr * cols + nc
          if (this.blocked[ni] || closed[ni]) continue
          if (dc && dr && (this.blocked[cr * cols + nc] || this.blocked[nr * cols + cc])) continue
          const step = dc && dr ? 1.4142 : 1
          const ng = gScore[cur] + step
          if (ng < gScore[ni]) {
            gScore[ni] = ng
            came[ni] = cur
            const dx = Math.abs(nc - gc)
            const dz = Math.abs(nr - gr)
            const h = (dx + dz) + (1.4142 - 2) * Math.min(dx, dz)
            heap.push(ni, ng + h * 1.08)
          }
        }
      }
    }

    if (!found) return null
    const cells = []
    let cur = goalIdx
    let safety = 0
    while (cur !== -1 && safety++ < 4000) {
      cells.push(cur)
      if (cur === startIdx) break
      cur = came[cur]
    }
    cells.reverse()
    const points = cells.map((i) => this.worldOf(i % cols, (i / cols) | 0))
    // always finish at the exact goal if reachable
    if (points.length && this.lineClear(points[points.length - 1].x, points[points.length - 1].z, gx, gz)) {
      points.push({ x: gx, z: gz })
    }
    return this.smooth(points)
  }

  smooth(points) {
    if (points.length <= 2) return points
    const out = []
    let i = 0
    out.push(points[0])
    while (i < points.length - 1) {
      let best = i + 1
      for (let j = points.length - 1; j > i + 1; j--) {
        if (this.lineClear(points[i].x, points[i].z, points[j].x, points[j].z)) { best = j; break }
      }
      out.push(points[best])
      i = best
    }
    return out
  }

  lineClear(x1, z1, x2, z2) {
    const dx = x2 - x1
    const dz = z2 - z1
    const dist = Math.hypot(dx, dz)
    const steps = Math.max(1, Math.ceil(dist / 0.28))
    for (let i = 1; i < steps; i++) {
      const t = i / steps
      if (this.pointBlocked(x1 + dx * t, z1 + dz * t)) return false
    }
    return true
  }
}
