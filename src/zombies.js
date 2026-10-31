import * as THREE from 'three'
import { buildZombieModel } from './zombieModel.js'

const TAU = Math.PI * 2
const rnd = (a, b) => a + Math.random() * (b - a)

const SPAWNS = {
  north: [new THREE.Vector3(-4.5, 0, -15), new THREE.Vector3(0, 0, -16), new THREE.Vector3(4.5, 0, -15)],
  west: [new THREE.Vector3(-16, 0, -6), new THREE.Vector3(-17, 0, -1), new THREE.Vector3(-16, 0, 2)],
  east: [new THREE.Vector3(16, 0, 0), new THREE.Vector3(17, 0, 5), new THREE.Vector3(16, 0, 8)],
}

let zombieId = 0

class Zombie {
  constructor(manager, window, stats) {
    this.manager = manager
    this.window = window
    this.stats = stats
    this.id = zombieId++
    this.type = stats.type
    this.hp = stats.hp
    this.maxHp = stats.hp
    this.speed = stats.speed
    this.damage = stats.damage
    this.scale = stats.scale
    this.state = 'rising'
    this.riseT = 0
    this.riseDur = 1.15
    this.attackCd = rnd(0.4, 1.2)
    this.attackWind = 0
    this.attackHit = false
    this.groanT = rnd(1, 7)
    this.phase = Math.random() * TAU
    this.flinch = 0
    this.deathT = 0
    this.sinkT = 0
    this.path = null
    this.pathT = 0
    this.pathIndex = 0
    this.targetPos = new THREE.Vector3()
    this.stuckT = 0
    this.lastPos = new THREE.Vector3()
    this.speedMul = 1
    this.direct = false

    const spawnList = SPAWNS[window.id] || SPAWNS.north
    const sp = spawnList[Math.floor(Math.random() * spawnList.length)]
    this.spawnPos = sp.clone().add(new THREE.Vector3(rnd(-2.2, 2.2), 0, rnd(-2.2, 2.2)))
    // outside approach point
    this.approach = window.center.clone().addScaledVector(window.normal, 1.75)
    this.inside = window.center.clone().addScaledVector(window.normal, -1.65)

    this.group = this.build()
    this.group.position.copy(this.spawnPos)
    this.group.position.y = -1.7
    this.group.scale.setScalar(this.scale)
    this.group.rotation.y = Math.atan2(window.normal.x, window.normal.z) + rnd(-0.3, 0.3)
    manager.scene.add(this.group)

    this.hitMeshes = []
    this.group.traverse((o) => {
      if (o.isMesh) {
        o.userData.zombie = this
        if (!o.userData.part) o.userData.part = 'limb'
        this.hitMeshes.push(o)
      }
    })
    manager.hitMeshes.push(...this.hitMeshes)

    manager.particles.burst(new THREE.Vector3(this.spawnPos.x, 0.1, this.spawnPos.z), new THREE.Vector3(0, 1, 0), 14, {
      color: new THREE.Color(0.28, 0.24, 0.17), size: 0.08, life: 1.0, spread: 1.8, gravity: -6,
    })
  }

  build() {
    return buildZombieModel(this)
  }

  takeDamage(dmg, isHead, point, dir) {
    if (this.state === 'dying' || this.state === 'dead') return false
    this.hp -= dmg
    this.flinch = 0.18
    this.manager.particles.burst(point, dir, isHead ? 16 : 9, {
      color: new THREE.Color(0.42, 0.03, 0.03), size: isHead ? 0.09 : 0.06, life: 0.8, spread: 1.4, push: 1.0,
    })
    if (isHead) {
      this.manager.particles.burst(point, dir, 6, {
        color: new THREE.Color(0.28, 0.02, 0.02), size: 0.13, life: 1.2, spread: 1.1, gravity: -12,
      })
    }
    if (this.hp <= 0) {
      this.die(isHead, dir)
      return true
    }
    return false
  }

  die(isHead, dir) {
    this.state = 'dying'
    this.deathT = 0
    this.manager.alive--
    this.manager.killed++
    for (const m of this.hitMeshes) {
      const i = this.manager.hitMeshes.indexOf(m)
      if (i >= 0) this.manager.hitMeshes.splice(i, 1)
    }
    this.hitMeshes = []
    const p = this.group.position.clone()
    p.y = 0.05
    this.manager.decals.add(p.x, 0.013, p.z, rnd(0.7, 1.4), Math.random() * TAU, 0.8)
    this.manager.particles.burst(new THREE.Vector3(p.x, 0.9, p.z), dir || new THREE.Vector3(0, 1, 0), 18, {
      color: new THREE.Color(0.35, 0.02, 0.02), size: 0.08, life: 1.1, spread: 2.0, push: 1.2,
    })
    this.manager.onKill(this, isHead)
  }

  update(dt, player) {
    if (this.state === 'dying') {
      this.deathT += dt
      const t = Math.min(1, this.deathT / 0.65)
      this.group.rotation.x = -t * 1.5
      this.group.position.y = -Math.max(0, this.deathT - 1.8) * 0.35
      if (this.deathT > 3.2) {
        this.state = 'dead'
        this.manager.scene.remove(this.group)
      }
      return
    }
    if (this.state === 'dead') return

    const pos = this.group.position
    const dx = player.position.x - pos.x
    const dz = player.position.z - pos.z
    const dist = Math.hypot(dx, dz)

    this.groanT -= dt
    if (this.groanT <= 0) {
      this.groanT = rnd(2.6, 7)
      const pitch = this.type === 'brute' ? 0.65 : this.type === 'runner' ? 1.28 : 1
      this.manager.audio.groan(dist, pitch * rnd(0.9, 1.1))
    }

    this.attackCd = Math.max(0, this.attackCd - dt)
    this.flinch = Math.max(0, this.flinch - dt)

    if (this.state === 'rising') {
      this.riseT += dt
      const t = Math.min(1, this.riseT / this.riseDur)
      const e = 1 - Math.pow(1 - t, 3)
      pos.y = -1.7 + e * 1.7
      if (t < 0.8 && Math.random() < 0.4) {
        this.manager.particles.spawn(pos.x + rnd(-0.3, 0.3), 0.05, pos.z + rnd(-0.3, 0.3), rnd(-0.4, 0.4), rnd(0.4, 1.1), rnd(-0.4, 0.4), {
          color: new THREE.Color(0.3, 0.26, 0.18), size: 0.07, life: 0.7, gravity: -7,
        })
      }
      if (t >= 1) {
        pos.y = 0
        this.state = 'approach'
      }
      return
    }

    if (this.state === 'approach') {
      const d = Math.hypot(this.approach.x - pos.x, this.approach.z - pos.z)
      if (d > 0.45) {
        this.moveToward(this.approach.x, this.approach.z, dt, this.speed * 1.05)
        this.animate(dt, this.speed, false)
      } else {
        this.state = 'boarding'
        this.attackCd = 0.2
      }
      return
    }

    if (this.state === 'boarding') {
      this.faceToward(this.window.center.x, this.window.center.z, dt, 8)
      this.animate(dt, 0.4, false)
      if (this.window.boards <= 0) {
        this.state = 'climb'
        this.climbT = 0
        this.climbStart = pos.clone()
        this.climbEnd = this.inside.clone()
        this.climbEnd.y = 0
        return
      }
      if (this.attackCd <= 0) {
        this.attackCd = this.type === 'brute' ? 1.1 : 1.7
        this.attackWind = 0.32
        this.attackHit = false
        this.manager.onBoardHit(this, this.window)
      }
      if (this.attackWind > 0) {
        this.attackWind -= dt
        this.animateAttack()
      }
      return
    }

    if (this.state === 'climb') {
      this.climbT += dt
      const t = Math.min(1, this.climbT / 0.95)
      const e = t * t * (3 - 2 * t)
      pos.x = THREE.MathUtils.lerp(this.climbStart.x, this.climbEnd.x, e)
      pos.z = THREE.MathUtils.lerp(this.climbStart.z, this.climbEnd.z, e)
      pos.y = Math.sin(t * Math.PI) * 1.15
      this.group.rotation.x = -Math.sin(t * Math.PI) * 0.5
      if (t >= 1) {
        pos.y = 0
        this.group.rotation.x = 0
        this.state = 'chase'
        this.pathT = 0
      }
      return
    }

    if (this.state === 'chase' || this.state === 'attack') {
      this.faceToward(player.position.x, player.position.z, dt, 6)

      if (dist < 1.35) {
        if (this.state !== 'attack') {
          this.state = 'attack'
          this.attackWind = 0.42
          this.attackHit = false
        }
      } else if (this.state === 'attack' && dist > 1.7) {
        this.state = 'chase'
      }

      if (this.state === 'attack') {
        this.attackWind -= dt
        if (this.attackWind <= 0 && !this.attackHit) {
          this.attackHit = true
          if (dist < 1.85) {
            this.manager.onPlayerDamage(this.damage, this)
          }
        }
        this.animateAttack()
        if (this.attackWind <= -0.25) {
          this.state = 'chase'
          this.attackCd = this.type === 'brute' ? 1.3 : 1.05
        }
        if (dist > 1.25) this.moveToward(player.position.x, player.position.z, dt, this.speed * 0.25)
      } else {
        this.pathT -= dt
        const needPath = !this.path || this.pathT <= 0
        if (needPath) {
          this.pathT = 0.55
          const direct = this.manager.nav.lineClear(pos.x, pos.z, player.position.x, player.position.z)
          this.direct = direct
          if (direct) {
            this.path = null
          } else {
            this.path = this.manager.nav.findPath(pos.x, pos.z, player.position.x, player.position.z)
            this.pathIndex = 0
          }
        }
        let tx = player.position.x
        let tz = player.position.z
        if (!this.direct && this.path && this.path.length) {
          while (this.pathIndex < this.path.length - 1) {
            const wp = this.path[this.pathIndex]
            if (Math.hypot(wp.x - pos.x, wp.z - pos.z) < 0.4) this.pathIndex++
            else break
          }
          const wp = this.path[Math.min(this.pathIndex, this.path.length - 1)]
          tx = wp.x
          tz = wp.z
        }
        this.moveToward(tx, tz, dt, this.speed)
        this.animate(dt, this.speed, false)
      }

      // separation
      this.separate(dt)
      return
    }
  }

  animateAttack() {
    const k = this.attackWind > 0 ? Math.sin((1 - this.attackWind / 0.42) * Math.PI * 0.7) : Math.sin(Math.max(0, -this.attackWind) * 8)
    for (let i = 0; i < this.arms.length; i++) {
      const arm = this.arms[i]
      const side = i === 0 ? 1 : -1
      arm.rotation.x = 1.3 + k * 0.5
      arm.rotation.z = side * (0.13 + k * 0.2)
      if (this.elbows[i]) this.elbows[i].rotation.x = 0.34 - k * 0.16
    }
    this.torso.rotation.x = 0.12 - k * 0.16
    this.headMesh.rotation.x = -k * 0.14
  }

  animate(dt, speed, attacking) {
    this.phase += dt * (2.2 + speed * 1.4)
    const swing = Math.sin(this.phase) * 0.52
    this.legs[0].rotation.x = swing
    this.legs[1].rotation.x = -swing
    for (let i = 0; i < this.arms.length; i++) {
      this.arms[i].rotation.x = 1.3 + Math.sin(this.phase + i * 1.5) * 0.07
      this.arms[i].rotation.z = (i === 0 ? 1 : -1) * 0.13
      if (this.elbows[i]) this.elbows[i].rotation.x = 0.34 + Math.sin(this.phase + i * 1.5) * 0.04
    }
    this.torso.position.y = 0.94 + Math.abs(Math.sin(this.phase)) * 0.024
    this.torso.rotation.z = Math.sin(this.phase) * 0.035
    if (this.flinch > 0) {
      this.torso.rotation.x = 0.12 - this.flinch * 1.4
      this.headMesh.rotation.x = -this.flinch * 1.1
    } else {
      this.torso.rotation.x = 0.12 + Math.sin(this.phase * 0.5) * 0.015
      this.headMesh.rotation.x = Math.sin(this.phase * 0.43) * 0.035
    }
  }

  moveToward(tx, tz, dt, speed) {
    const pos = this.group.position
    let dx = tx - pos.x
    let dz = tz - pos.z
    const d = Math.hypot(dx, dz)
    if (d < 0.001) return
    dx /= d
    dz /= d
    let sp = speed * this.speedMul
    if (this.flinch > 0) sp *= 0.35
    pos.x += dx * sp * dt
    pos.z += dz * sp * dt
    // wall collision for safety
    const rad = 0.34 * this.scale
    for (const b of this.manager.nav.blockers) {
      if (pos.x > b.minX - rad && pos.x < b.maxX + rad && pos.z > b.minZ - rad && pos.z < b.maxZ + rad) {
        const cx = Math.max(b.minX, Math.min(pos.x, b.maxX))
        const cz = Math.max(b.minZ, Math.min(pos.z, b.maxZ))
        const ox = pos.x - cx
        const oz = pos.z - cz
        const od = Math.hypot(ox, oz) || 0.001
        pos.x = cx + (ox / od) * rad
        pos.z = cz + (oz / od) * rad
      }
    }
  }

  faceToward(tx, tz, dt, rate) {
    const target = Math.atan2(-(tx - this.group.position.x), -(tz - this.group.position.z))
    let diff = target - this.group.rotation.y
    while (diff > Math.PI) diff -= TAU
    while (diff < -Math.PI) diff += TAU
    this.group.rotation.y += diff * Math.min(1, dt * rate)
  }

  separate(dt) {
    const pos = this.group.position
    for (const other of this.manager.list) {
      if (other === this || other.state === 'dying' || other.state === 'dead' || other.state === 'rising') continue
      const dx = pos.x - other.group.position.x
      const dz = pos.z - other.group.position.z
      const d = Math.hypot(dx, dz)
      const min = 0.62 * this.scale
      if (d > 0.0001 && d < min) {
        const push = (min - d) * 0.5
        pos.x += (dx / d) * push
        pos.z += (dz / d) * push
      }
    }
  }
}

export class ZombieManager {
  constructor(scene, nav, world, audio, particles, additive, decals, callbacks) {
    this.scene = scene
    this.nav = nav
    this.world = world
    this.audio = audio
    this.particles = particles
    this.additive = additive
    this.decals = decals
    this.callbacks = callbacks
    this.list = []
    this.hitMeshes = []
    this.round = 1
    this.total = 0
    this.spawned = 0
    this.alive = 0
    this.killed = 0
    this.roundActive = false
    this.roundComplete = false
    this.spawnTimer = 0
    this.maxAlive = 8
    this.stats = null
    this.nukeT = 0
  }

  reset() {
    for (const z of this.list) {
      if (z.state !== 'dead') this.scene.remove(z.group)
    }
    this.list = []
    this.hitMeshes = []
    this.round = 1
    this.total = 0
    this.spawned = 0
    this.alive = 0
    this.killed = 0
    this.roundActive = false
    this.roundComplete = false
  }

  startRound(round) {
    this.round = round
    this.total = Math.min(72, Math.round(4 + round * 2 + Math.pow(round, 1.32)))
    this.spawned = 0
    this.alive = 0
    this.killed = 0
    this.roundComplete = false
    this.roundActive = true
    this.spawnTimer = 0.9
    this._brutesSpawned = false
    this.maxAlive = Math.min(28, 6 + Math.floor(round * 1.7))
    this.stats = {
      hp: 100 * (1 + 0.16 * (round - 1)) + Math.pow(round, 1.5) * 1.2,
      speed: 1.15 + Math.min(2.1, round * 0.075),
      damage: 18 + Math.min(28, round * 1.4),
      runnerChance: round >= 5 ? Math.min(0.42, (round - 4) * 0.05) : 0,
      brutes: round % 5 === 0 ? Math.floor(round / 5) : 0,
    }
  }

  get remaining() { return Math.max(0, this.total - this.killed) }

  spawnOne() {
    const w = this.world.windows[Math.floor(Math.random() * this.world.windows.length)]
    const s = this.stats
    let type = 'normal'
    if (s.brutes > 0 && this.spawned >= Math.floor(this.total * 0.55) && !this._brutesSpawned) {
      type = 'brute'
      this._brutesSpawned = true
    } else if (Math.random() < s.runnerChance) {
      type = 'runner'
    }
    const scale = type === 'brute' ? 1.42 : type === 'runner' ? 0.93 : rnd(0.92, 1.08)
    const hp = s.hp * (type === 'brute' ? 5.2 : type === 'runner' ? 0.72 : 1) * rnd(0.92, 1.08)
    const speed = s.speed * (type === 'brute' ? 0.82 : type === 'runner' ? 1.62 : 1) * rnd(0.92, 1.08)
    const damage = s.damage * (type === 'brute' ? 2.2 : 1)
    const z = new Zombie(this, w, { type, hp, speed, damage, scale })
    this.list.push(z)
    this.spawned++
    this.alive++
  }

  onBoardHit(z, w) {
    this.world.breakBoard(w)
    this.audio.repair()
    // small shake impulse on the boards
    this.particles.burst(w.center.clone().add(new THREE.Vector3(0, 1.2, 0)), w.normal, 4, {
      color: new THREE.Color(0.35, 0.28, 0.18), size: 0.04, life: 0.5, spread: 1.0, gravity: -5,
    })
  }

  onPlayerDamage(dmg, z) {
    this.callbacks.onPlayerDamage(dmg, z)
  }

  onKill(z, isHead) {
    this.callbacks.onKill(z, isHead)
  }

  nuke() {
    for (const z of [...this.list]) {
      if (z.state === 'dying' || z.state === 'dead') continue
      z.hp = 1
      z.die(false, new THREE.Vector3(0, 1, 0))
    }
    this.callbacks.onNuke()
  }

  update(dt, player) {
    if (!this.roundActive) return
    if (this.spawned < this.total && this.alive < this.maxAlive) {
      this.spawnTimer -= dt
      if (this.spawnTimer <= 0) {
        this.spawnOne()
        this.spawnTimer = Math.max(0.32, 1.55 - this.round * 0.07) * rnd(0.7, 1.25)
      }
    }
    for (const z of this.list) z.update(dt, player)
    // cleanup dead
    for (let i = this.list.length - 1; i >= 0; i--) {
      if (this.list[i].state === 'dead') this.list.splice(i, 1)
    }
    if (this.spawned >= this.total && this.alive <= 0 && !this.roundComplete) {
      this.roundComplete = true
      this.roundActive = false
    }
  }

  resetBruteFlag() { this._brutesSpawned = false }
}
