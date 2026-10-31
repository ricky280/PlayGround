import * as THREE from 'three'

function rng(seed = 1) {
  let t = seed >>> 0
  return () => {
    t += 0x6d2b79f5
    let r = Math.imul(t ^ (t >>> 15), 1 | t)
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r)
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296
  }
}

function canvas(size = 512) {
  const c = document.createElement('canvas')
  c.width = size
  c.height = size
  return c
}

function finish(c, repeatX = 1, repeatY = 1) {
  const tex = new THREE.CanvasTexture(c)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(repeatX, repeatY)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  return tex
}

function noiseLayer(ctx, size, amount, alpha, rand, scale = 1) {
  const img = ctx.getImageData(0, 0, size, size)
  const d = img.data
  for (let y = 0; y < size; y += scale) {
    for (let x = 0; x < size; x += scale) {
      const n = (rand() - 0.5) * amount
      for (let oy = 0; oy < scale; oy++) {
        for (let ox = 0; ox < scale; ox++) {
          const i = ((y + oy) * size + (x + ox)) * 4
          d[i] = Math.max(0, Math.min(255, d[i] + n))
          d[i + 1] = Math.max(0, Math.min(255, d[i + 1] + n))
          d[i + 2] = Math.max(0, Math.min(255, d[i + 2] + n))
          d[i + 3] = Math.max(d[i + 3], alpha * 255)
        }
      }
    }
  }
  ctx.putImageData(img, 0, 0)
}

function splotch(ctx, x, y, r, color, alpha = 0.3) {
  const g = ctx.createRadialGradient(x, y, 0, x, y, r)
  g.addColorStop(0, color.replace('ALPHA', String(alpha)))
  g.addColorStop(0.6, color.replace('ALPHA', String(alpha * 0.5)))
  g.addColorStop(1, color.replace('ALPHA', '0'))
  ctx.fillStyle = g
  ctx.fillRect(x - r, y - r, r * 2, r * 2)
}

export function makeConcrete(seed = 3) {
  const s = 512
  const c = canvas(s)
  const ctx = c.getContext('2d')
  const rand = rng(seed)
  ctx.fillStyle = '#4c4b46'
  ctx.fillRect(0, 0, s, s)
  noiseLayer(ctx, s, 34, 1, rand, 2)
  // coarse mottling
  for (let i = 0; i < 130; i++) {
    splotch(ctx, rand() * s, rand() * s, 12 + rand() * 80,
      rand() > 0.5 ? 'rgba(28,28,26,ALPHA)' : 'rgba(112,110,100,ALPHA)', 0.04 + rand() * 0.07)
  }
  // damp streaks
  for (let i = 0; i < 22; i++) {
    const x = rand() * s
    const w = 4 + rand() * 22
    const h = 40 + rand() * 220
    const g = ctx.createLinearGradient(0, 0, 0, h)
    g.addColorStop(0, 'rgba(20,22,20,0.28)')
    g.addColorStop(1, 'rgba(20,22,20,0)')
    ctx.fillStyle = g
    ctx.fillRect(x, rand() * (s - h), w, h)
  }
  // cracks
  ctx.strokeStyle = 'rgba(18,18,17,0.55)'
  for (let i = 0; i < 9; i++) {
    ctx.lineWidth = 0.6 + rand() * 1.4
    ctx.beginPath()
    let x = rand() * s
    let y = rand() * s
    ctx.moveTo(x, y)
    const steps = 8 + (rand() * 16) | 0
    for (let j = 0; j < steps; j++) {
      x += (rand() - 0.5) * 30
      y += 8 + rand() * 24
      ctx.lineTo(x, y)
    }
    ctx.stroke()
  }
  // pitting
  for (let i = 0; i < 500; i++) {
    ctx.fillStyle = `rgba(0,0,0,${0.05 + rand() * 0.14})`
    ctx.beginPath()
    ctx.arc(rand() * s, rand() * s, rand() * 2.2, 0, 7)
    ctx.fill()
  }
  return finish(c)
}

export function makeFloor(seed = 8) {
  const s = 512
  const c = canvas(s)
  const ctx = c.getContext('2d')
  const rand = rng(seed)
  ctx.fillStyle = '#24241f'
  ctx.fillRect(0, 0, s, s)
  const tiles = 4
  const step = s / tiles
  for (let y = 0; y < tiles; y++) {
    for (let x = 0; x < tiles; x++) {
      const v = 52 + rand() * 22
      ctx.fillStyle = `rgb(${v},${v - 2},${v - 8})`
      ctx.fillRect(x * step + 2, y * step + 2, step - 4, step - 4)
      // tile shading
      const g = ctx.createLinearGradient(x * step, y * step, x * step + step, y * step + step)
      g.addColorStop(0, 'rgba(255,255,255,0.05)')
      g.addColorStop(0.5, 'rgba(0,0,0,0)')
      g.addColorStop(1, 'rgba(0,0,0,0.22)')
      ctx.fillStyle = g
      ctx.fillRect(x * step + 2, y * step + 2, step - 4, step - 4)
      // scratches
      for (let i = 0; i < 14; i++) {
        ctx.strokeStyle = `rgba(${rand() > 0.5 ? '190,188,175' : '0,0,0'},${0.03 + rand() * 0.09})`
        ctx.lineWidth = 0.5 + rand()
        ctx.beginPath()
        const sx = x * step + 6 + rand() * (step - 12)
        const sy = y * step + 6 + rand() * (step - 12)
        ctx.moveTo(sx, sy)
        ctx.lineTo(sx + (rand() - 0.5) * 46, sy + (rand() - 0.5) * 46)
        ctx.stroke()
      }
    }
  }
  // grout noise and stains
  noiseLayer(ctx, s, 20, 1, rand, 2)
  for (let i = 0; i < 40; i++) {
    splotch(ctx, rand() * s, rand() * s, 10 + rand() * 60, 'rgba(10,10,8,ALPHA)', 0.05 + rand() * 0.12)
  }
  return finish(c)
}

export function makeWood(seed = 14) {
  const s = 512
  const c = canvas(s)
  const ctx = c.getContext('2d')
  const rand = rng(seed)
  ctx.fillStyle = '#3c2c1e'
  ctx.fillRect(0, 0, s, s)
  const planks = 6
  const ph = s / planks
  for (let p = 0; p < planks; p++) {
    const base = 48 + rand() * 22
    ctx.fillStyle = `rgb(${base + 14},${base - 4},${base - 18})`
    ctx.fillRect(0, p * ph + 1, s, ph - 2)
    // grain
    for (let i = 0; i < 26; i++) {
      const y = p * ph + 4 + rand() * (ph - 8)
      ctx.strokeStyle = `rgba(${rand() > 0.5 ? '20,13,8' : '110,82,55'},${0.08 + rand() * 0.2})`
      ctx.lineWidth = 0.5 + rand() * 1.6
      ctx.beginPath()
      ctx.moveTo(0, y)
      for (let x = 0; x < s; x += 32) {
        ctx.lineTo(x, y + Math.sin(x * 0.03 + i) * 2.4 + (rand() - 0.5) * 3)
      }
      ctx.stroke()
    }
    // knots
    if (rand() > 0.55) {
      const kx = 30 + rand() * (s - 60)
      const ky = p * ph + ph * (0.3 + rand() * 0.4)
      ctx.strokeStyle = 'rgba(20,12,7,0.5)'
      for (let k = 1; k < 4; k++) {
        ctx.beginPath()
        ctx.ellipse(kx, ky, 3 * k + rand() * 2, 1.5 * k + rand(), 0.2, 0, 7)
        ctx.stroke()
      }
    }
    // seam
    ctx.fillStyle = 'rgba(5,4,3,0.6)'
    ctx.fillRect(0, p * ph, s, 2)
    // nails
    for (let n = 0; n < 3; n++) {
      ctx.fillStyle = 'rgba(15,14,13,0.85)'
      ctx.beginPath()
      ctx.arc(20 + n * 230 + rand() * 20, p * ph + ph * 0.5, 2.2, 0, 7)
      ctx.fill()
    }
  }
  noiseLayer(ctx, s, 16, 1, rand, 2)
  return finish(c)
}

export function makeMetal(seed = 21) {
  const s = 512
  const c = canvas(s)
  const ctx = c.getContext('2d')
  const rand = rng(seed)
  ctx.fillStyle = '#3b3d3f'
  ctx.fillRect(0, 0, s, s)
  for (let i = 0; i < 1400; i++) {
    ctx.strokeStyle = `rgba(${rand() > 0.5 ? '180,184,188' : '10,10,12'},${0.02 + rand() * 0.07})`
    ctx.lineWidth = 0.5 + rand()
    const y = rand() * s
    ctx.beginPath()
    ctx.moveTo(rand() * s, y)
    ctx.lineTo(rand() * s, y + (rand() - 0.5) * 2)
    ctx.stroke()
  }
  for (let i = 0; i < 26; i++) {
    splotch(ctx, rand() * s, rand() * s, 4 + rand() * 34, 'rgba(94,46,22,ALPHA)', 0.08 + rand() * 0.25)
  }
  // rivets
  for (let y = 40; y < s; y += 108) {
    for (let x = 40; x < s; x += 108) {
      const g = ctx.createRadialGradient(x - 2, y - 2, 0, x, y, 5)
      g.addColorStop(0, 'rgba(200,204,205,0.5)')
      g.addColorStop(0.6, 'rgba(80,82,84,0.5)')
      g.addColorStop(1, 'rgba(10,10,12,0.5)')
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.arc(x, y, 5, 0, 7)
      ctx.fill()
    }
  }
  return finish(c)
}

export function makeSandbag(seed = 33) {
  const s = 256
  const c = canvas(s)
  const ctx = c.getContext('2d')
  const rand = rng(seed)
  ctx.fillStyle = '#655f49'
  ctx.fillRect(0, 0, s, s)
  for (let y = 0; y < s; y += 6) {
    ctx.fillStyle = y % 12 === 0 ? 'rgba(30,28,20,0.25)' : 'rgba(150,142,112,0.13)'
    ctx.fillRect(0, y, s, 3)
  }
  for (let x = 0; x < s; x += 6) {
    ctx.fillStyle = x % 12 === 0 ? 'rgba(30,28,20,0.18)' : 'rgba(150,142,112,0.08)'
    ctx.fillRect(x, 0, 3, s)
  }
  noiseLayer(ctx, s, 26, 1, rand, 2)
  for (let i = 0; i < 12; i++) splotch(ctx, rand() * s, rand() * s, 8 + rand() * 30, 'rgba(38,32,20,ALPHA)', 0.12)
  return finish(c)
}

export function makeDirt(seed = 41) {
  const s = 512
  const c = canvas(s)
  const ctx = c.getContext('2d')
  const rand = rng(seed)
  ctx.fillStyle = '#23241d'
  ctx.fillRect(0, 0, s, s)
  noiseLayer(ctx, s, 30, 1, rand, 2)
  for (let i = 0; i < 200; i++) {
    const v = 30 + rand() * 55
    ctx.fillStyle = `rgba(${v},${v - 2},${v - 10},${0.15 + rand() * 0.4})`
    ctx.beginPath()
    ctx.ellipse(rand() * s, rand() * s, 1 + rand() * 7, 1 + rand() * 5, rand() * 3, 0, 7)
    ctx.fill()
  }
  for (let i = 0; i < 40; i++) splotch(ctx, rand() * s, rand() * s, 12 + rand() * 60, 'rgba(8,9,7,ALPHA)', 0.1)
  return finish(c)
}

export function makeBloodDecal(seed = 51) {
  const s = 256
  const c = canvas(s)
  const ctx = c.getContext('2d')
  const rand = rng(seed)
  ctx.clearRect(0, 0, s, s)
  ctx.fillStyle = 'rgba(52,4,4,0.85)'
  ctx.beginPath()
  ctx.ellipse(s / 2, s / 2, 40 + rand() * 20, 28 + rand() * 16, rand() * 3, 0, 7)
  ctx.fill()
  for (let i = 0; i < 70; i++) {
    const a = rand() * Math.PI * 2
    const d = 20 + rand() * 105
    const r = 0.8 + rand() * (rand() > 0.9 ? 8 : 3.5)
    ctx.fillStyle = `rgba(${40 + rand() * 30},${2 + rand() * 6},${2 + rand() * 5},${0.4 + rand() * 0.5})`
    ctx.beginPath()
    ctx.ellipse(s / 2 + Math.cos(a) * d, s / 2 + Math.sin(a) * d, r, r * (0.5 + rand()), rand() * 3, 0, 7)
    ctx.fill()
  }
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

export function makeGlow(color = '#ffcf88', inner = '#ffffff') {
  const s = 128
  const c = canvas(s)
  const ctx = c.getContext('2d')
  const col = new THREE.Color(color)
  const mid = `rgba(${Math.round(col.r * 255)},${Math.round(col.g * 255)},${Math.round(col.b * 255)},0.35)`
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2)
  g.addColorStop(0, inner)
  g.addColorStop(0.22, color)
  g.addColorStop(0.55, mid)
  g.addColorStop(1, 'rgba(0,0,0,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, s, s)
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

export function makeSmoke() {
  const s = 128
  const c = canvas(s)
  const ctx = c.getContext('2d')
  const g = ctx.createRadialGradient(s / 2, s / 2, 2, s / 2, s / 2, s / 2)
  g.addColorStop(0, 'rgba(210,205,195,0.55)')
  g.addColorStop(0.45, 'rgba(150,148,142,0.22)')
  g.addColorStop(1, 'rgba(90,90,90,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, s, s)
  return new THREE.CanvasTexture(c)
}

export function makeMuzzleFlash() {
  const s = 128
  const c = canvas(s)
  const ctx = c.getContext('2d')
  ctx.translate(s / 2, s / 2)
  const g = ctx.createRadialGradient(0, 0, 0, 0, 0, s / 2)
  g.addColorStop(0, 'rgba(255,255,235,1)')
  g.addColorStop(0.18, 'rgba(255,220,130,0.95)')
  g.addColorStop(0.45, 'rgba(255,140,40,0.4)')
  g.addColorStop(1, 'rgba(255,90,10,0)')
  ctx.fillStyle = g
  for (let i = 0; i < 8; i++) {
    ctx.save()
    ctx.rotate((i / 8) * Math.PI * 2 + 0.2)
    ctx.beginPath()
    ctx.moveTo(0, -5)
    ctx.lineTo(s * 0.46, 0)
    ctx.lineTo(0, 5)
    ctx.closePath()
    ctx.globalAlpha = 0.55
    ctx.fill()
    ctx.restore()
  }
  ctx.beginPath()
  ctx.arc(0, 0, s * 0.16, 0, 7)
  ctx.fill()
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

export function makeChalk(text, sub = '', opts = {}) {
  const w = 512
  const h = 256
  const c = canvas(512)
  c.width = w
  c.height = h
  const ctx = c.getContext('2d')
  ctx.clearRect(0, 0, w, h)
  ctx.textAlign = 'center'
  ctx.fillStyle = opts.color || 'rgba(226, 219, 197, 0.92)'
  ctx.font = `600 ${opts.size || 64}px Oswald, Arial Narrow, sans-serif`
  ctx.fillText(text, w / 2, h * 0.44)
  if (sub) {
    ctx.fillStyle = 'rgba(216, 161, 60, 0.92)'
    ctx.font = '600 40px Oswald, Arial Narrow, sans-serif'
    ctx.fillText(sub, w / 2, h * 0.72)
  }
  // rough chalk erosion
  ctx.globalCompositeOperation = 'destination-out'
  const rand = rng(77 + text.length)
  for (let i = 0; i < 500; i++) {
    ctx.fillStyle = `rgba(0,0,0,${0.2 + rand() * 0.7})`
    ctx.beginPath()
    ctx.arc(rand() * w, rand() * h, 0.4 + rand() * 1.8, 0, 7)
    ctx.fill()
  }
  ctx.globalCompositeOperation = 'source-over'
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

export function makePowerupIcon(kind) {
  const s = 128
  const c = canvas(s)
  const ctx = c.getContext('2d')
  ctx.translate(s / 2, s / 2)
  const col = { maxammo: '#d8b24a', insta: '#d84a2a', double: '#e0b93c', nuke: '#7ad06a' }[kind] || '#d8b24a'
  ctx.strokeStyle = col
  ctx.fillStyle = col
  ctx.lineWidth = 7
  ctx.shadowColor = col
  ctx.shadowBlur = 18
  if (kind === 'maxammo') {
    for (let i = 0; i < 3; i++) {
      const x = -26 + i * 26
      ctx.beginPath()
      ctx.roundRect(x - 7, -28, 14, 52, 3)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(x, -28, 7, Math.PI, 0)
      ctx.stroke()
    }
  } else if (kind === 'insta') {
    ctx.beginPath()
    ctx.arc(0, 0, 30, 0, 7)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(-11, -7, 5, 0, 7)
    ctx.arc(11, -7, 5, 0, 7)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(-13, 12)
    ctx.lineTo(0, 20)
    ctx.lineTo(13, 12)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(-30, -20)
    ctx.lineTo(-42, -34)
    ctx.moveTo(30, -20)
    ctx.lineTo(42, -34)
    ctx.stroke()
  } else if (kind === 'double') {
    ctx.font = '700 62px Oswald, Arial Narrow, sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('x2', 0, 2)
  } else if (kind === 'nuke') {
    for (let i = 0; i < 3; i++) {
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.arc(0, 0, 34, -Math.PI / 2 + i * 2.094, -Math.PI / 2 + (i + 0.65) * 2.094)
      ctx.closePath()
      ctx.fill()
    }
    ctx.beginPath()
    ctx.arc(0, 0, 8, 0, 7)
    ctx.fillStyle = '#0a0b0c'
    ctx.fill()
  }
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

export function makeDust() {
  const s = 64
  const c = canvas(s)
  const ctx = c.getContext('2d')
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2)
  g.addColorStop(0, 'rgba(255,246,220,0.7)')
  g.addColorStop(0.4, 'rgba(255,240,200,0.18)')
  g.addColorStop(1, 'rgba(255,230,180,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, s, s)
  return new THREE.CanvasTexture(c)
}

export function makeGrungeOverlay(seed = 5) {
  const s = 512
  const c = canvas(s)
  const ctx = c.getContext('2d')
  const rand = rng(seed)
  ctx.clearRect(0, 0, s, s)
  for (let i = 0; i < 400; i++) {
    ctx.fillStyle = `rgba(0,0,0,${rand() * 0.06})`
    ctx.beginPath()
    ctx.arc(rand() * s, rand() * s, 1 + rand() * 14, 0, 7)
    ctx.fill()
  }
  return new THREE.CanvasTexture(c)
}

export function makeFlesh(seed = 91) {
  const s = 256
  const c = canvas(s)
  const ctx = c.getContext('2d')
  const rand = rng(seed)
  ctx.fillStyle = '#6f7260'
  ctx.fillRect(0, 0, s, s)
  noiseLayer(ctx, s, 34, 1, rand, 2)
  for (let i = 0; i < 40; i++) {
    splotch(ctx, rand() * s, rand() * s, 4 + rand() * 26, 'rgba(46,38,34,ALPHA)', 0.12 + rand() * 0.22)
  }
  for (let i = 0; i < 14; i++) {
    splotch(ctx, rand() * s, rand() * s, 2 + rand() * 10, 'rgba(74,12,8,ALPHA)', 0.25 + rand() * 0.35)
  }
  // veins
  ctx.strokeStyle = 'rgba(40,34,42,0.28)'
  for (let i = 0; i < 12; i++) {
    ctx.lineWidth = 0.6 + rand() * 1.2
    ctx.beginPath()
    let x = rand() * s, y = rand() * s
    ctx.moveTo(x, y)
    for (let j = 0; j < 8; j++) {
      x += (rand() - 0.5) * 24
      y += (rand() - 0.5) * 24
      ctx.lineTo(x, y)
    }
    ctx.stroke()
  }
  return finish(c)
}

export function makeCoat(seed = 92) {
  const s = 256
  const c = canvas(s)
  const ctx = c.getContext('2d')
  const rand = rng(seed)
  ctx.fillStyle = '#3b372e'
  ctx.fillRect(0, 0, s, s)
  noiseLayer(ctx, s, 28, 1, rand, 2)
  for (let i = 0; i < 55; i++) {
    splotch(ctx, rand() * s, rand() * s, 5 + rand() * 30, rand() > 0.7 ? 'rgba(52,16,10,ALPHA)' : 'rgba(16,14,10,ALPHA)', 0.1 + rand() * 0.25)
  }
  // tears
  ctx.fillStyle = 'rgba(8,7,6,0.55)'
  for (let i = 0; i < 12; i++) {
    const x = rand() * s
    const y = rand() * s
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + rnd(-14, 14), y + rnd(6, 24))
    ctx.lineTo(x + rnd(-18, 18), y + rnd(4, 18))
    ctx.closePath()
    ctx.fill()
  }
  return finish(c)
}

function rnd(a, b) { return a + Math.random() * (b - a) }
