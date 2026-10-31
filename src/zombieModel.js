import * as THREE from 'three'
import { makeFlesh, makeCoat } from './textures.js'

const TAU = Math.PI * 2
const rnd = (a, b) => a + Math.random() * (b - a)

const GEO = {
  torso: new THREE.CapsuleGeometry(0.19, 0.42, 4, 10),
  coat: new THREE.CylinderGeometry(0.245, 0.34, 0.62, 12, 1, true),
  head: new THREE.SphereGeometry(0.17, 16, 14),
  skullCap: new THREE.SphereGeometry(0.174, 12, 8, 0, TAU, 0, Math.PI * 0.52),
  socket: new THREE.SphereGeometry(0.041, 8, 6),
  eye: new THREE.SphereGeometry(0.0115, 6, 5),
  armU: new THREE.CylinderGeometry(0.058, 0.049, 0.31, 7),
  armL: new THREE.CylinderGeometry(0.046, 0.036, 0.28, 7),
  hand: new THREE.SphereGeometry(0.058, 8, 6),
  finger: new THREE.CapsuleGeometry(0.011, 0.052, 2, 5),
  leg: new THREE.CylinderGeometry(0.083, 0.058, 0.84, 8),
  boot: new THREE.BoxGeometry(0.125, 0.1, 0.245),
  helmet: new THREE.SphereGeometry(0.183, 14, 9, 0, TAU, 0, Math.PI * 0.56),
  brim: new THREE.CylinderGeometry(0.21, 0.22, 0.024, 14, 1, true),
  belt: new THREE.BoxGeometry(0.43, 0.065, 0.3),
  buckle: new THREE.BoxGeometry(0.055, 0.05, 0.016),
  pouch: new THREE.BoxGeometry(0.095, 0.115, 0.07),
  shoulder: new THREE.SphereGeometry(0.088, 8, 6),
  plate: new THREE.BoxGeometry(0.34, 0.26, 0.06),
  tooth: new THREE.BoxGeometry(0.016, 0.022, 0.014),
  blood: new THREE.PlaneGeometry(0.14, 0.28),
  wound: new THREE.SphereGeometry(0.05, 7, 5),
  tatter: new THREE.BoxGeometry(0.075, 0.18, 0.018),
  button: new THREE.SphereGeometry(0.011, 6, 4),
  ear: new THREE.SphereGeometry(0.032, 6, 5),
  nose: new THREE.ConeGeometry(0.029, 0.07, 5),
}

const fleshTex = makeFlesh()
const coatTex = makeCoat()

function makeMouthTexture() {
  const c = document.createElement('canvas')
  c.width = c.height = 128
  const ctx = c.getContext('2d')
  ctx.clearRect(0, 0, 128, 128)
  const rand = (a, b) => a + Math.random() * (b - a)
  // torn lips
  ctx.fillStyle = 'rgba(52, 16, 12, 0.98)'
  ctx.beginPath()
  ctx.ellipse(64, 63, 42, 30, 0.04, 0, Math.PI * 2)
  ctx.fill()
  // split the lower lip open
  ctx.fillStyle = '#0a0303'
  ctx.beginPath()
  ctx.ellipse(64, 64, 33, 22, 0.02, 0, Math.PI * 2)
  ctx.fill()
  // upper gum
  ctx.fillStyle = '#48110e'
  ctx.beginPath()
  ctx.moveTo(31, 43)
  ctx.quadraticCurveTo(64, 38, 97, 44)
  ctx.lineTo(94, 55)
  ctx.quadraticCurveTo(64, 50, 34, 55)
  ctx.closePath()
  ctx.fill()
  // jagged upper teeth, with gaps
  for (let i = 0; i < 6; i++) {
    if (i === 2) continue
    const x = 35 + i * 10 + rand(-1.5, 1.5)
    const w = rand(5, 9)
    const h = rand(7, 14)
    ctx.fillStyle = i % 3 === 0 ? '#756b55' : '#94896d'
    ctx.beginPath()
    ctx.moveTo(x, 48)
    ctx.lineTo(x + w, 48 + rand(-1, 1))
    ctx.lineTo(x + w - rand(0, 2), 48 + h)
    ctx.lineTo(x + rand(0, 2), 48 + h - rand(0, 3))
    ctx.closePath()
    ctx.fill()
  }
  // lower teeth, fewer and darker
  for (let i = 0; i < 5; i++) {
    if (i === 1) continue
    const x = 38 + i * 11 + rand(-1, 1)
    const w = rand(4, 8)
    const h = rand(5, 10)
    ctx.fillStyle = '#625946'
    ctx.beginPath()
    ctx.moveTo(x, 80)
    ctx.lineTo(x + w, 80 + rand(-1, 1))
    ctx.lineTo(x + w - rand(0, 2), 80 - h)
    ctx.lineTo(x + rand(0, 2), 80 - h + rand(0, 2))
    ctx.closePath()
    ctx.fill()
  }
  // tongue and blood
  ctx.fillStyle = '#3d1110'
  ctx.beginPath()
  ctx.ellipse(61, 75, 16, 7, 0.12, 0, Math.PI * 2)
  ctx.fill()
  ctx.fillStyle = 'rgba(92, 8, 7, 0.9)'
  ctx.fillRect(46, 82, 4, 25)
  ctx.fillRect(73, 80, 3, 19)
  ctx.fillRect(57, 84, 2, 15)
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.minFilter = THREE.LinearFilter
  return tex
}

const mouthTex = makeMouthTexture()
const MOUTH_MAT = new THREE.MeshBasicMaterial({
  map: mouthTex, transparent: true, depthWrite: false,
  polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3,
})

const MATS = {
  coat: new THREE.MeshStandardMaterial({
    map: coatTex, color: 0x9a9284, roughness: 0.99, side: THREE.DoubleSide,
    emissive: 0x050403, emissiveIntensity: 0.32,
  }),
  coat2: new THREE.MeshStandardMaterial({
    map: coatTex, color: 0x6d675c, roughness: 0.99, side: THREE.DoubleSide,
    emissive: 0x040302, emissiveIntensity: 0.3,
  }),
  shirt: new THREE.MeshStandardMaterial({ map: coatTex, color: 0x57564e, roughness: 1 }),
  pants: new THREE.MeshStandardMaterial({
    map: coatTex, color: 0x615e55, roughness: 0.99,
    emissive: 0x030302, emissiveIntensity: 0.25,
  }),
  boot: new THREE.MeshStandardMaterial({ color: 0x15130f, roughness: 0.9 }),
  belt: new THREE.MeshStandardMaterial({ color: 0x211c16, roughness: 0.9 }),
  buckle: new THREE.MeshStandardMaterial({ color: 0x5b5445, metalness: 0.55, roughness: 0.55 }),
  pouch: new THREE.MeshStandardMaterial({ color: 0x30271b, roughness: 0.95 }),
  skin: [
    new THREE.MeshStandardMaterial({ map: fleshTex, bumpMap: fleshTex, bumpScale: 0.018, color: 0x7f8472, roughness: 0.95, emissive: 0x15120b, emissiveIntensity: 0.42 }),
    new THREE.MeshStandardMaterial({ map: fleshTex, bumpMap: fleshTex, bumpScale: 0.018, color: 0x857a6b, roughness: 0.95, emissive: 0x17120a, emissiveIntensity: 0.42 }),
    new THREE.MeshStandardMaterial({ map: fleshTex, bumpMap: fleshTex, bumpScale: 0.018, color: 0x737a6a, roughness: 0.95, emissive: 0x121208, emissiveIntensity: 0.42 }),
    new THREE.MeshStandardMaterial({ map: fleshTex, bumpMap: fleshTex, bumpScale: 0.018, color: 0x8a7c6b, roughness: 0.95, emissive: 0x17120a, emissiveIntensity: 0.42 }),
  ],
  skinDark: new THREE.MeshStandardMaterial({ map: fleshTex, color: 0x5f6454, roughness: 1 }),
  mouth: new THREE.MeshStandardMaterial({ color: 0x180706, roughness: 1 }),
  tongue: new THREE.MeshStandardMaterial({ color: 0x4d1714, roughness: 1 }),
  teeth: new THREE.MeshStandardMaterial({ color: 0x7e735d, roughness: 0.9 }),
  socket: new THREE.MeshStandardMaterial({ color: 0x080706, roughness: 1 }),
  hair: new THREE.MeshStandardMaterial({ color: 0x211c15, roughness: 1 }),
  eye: new THREE.MeshStandardMaterial({ color: 0xffd76a, emissive: 0xffb324, emissiveIntensity: 1.65, roughness: 0.2 }),
  eyeRed: new THREE.MeshStandardMaterial({ color: 0xff4a30, emissive: 0xff1a0a, emissiveIntensity: 2.1, roughness: 0.2 }),
  metal: new THREE.MeshStandardMaterial({ color: 0x3b3c37, metalness: 0.68, roughness: 0.6 }),
  metalDark: new THREE.MeshStandardMaterial({ color: 0x242521, metalness: 0.55, roughness: 0.68 }),
  wound: new THREE.MeshStandardMaterial({ color: 0x380705, roughness: 0.92, emissive: 0x190202, emissiveIntensity: 0.5 }),
  blood: new THREE.MeshBasicMaterial({ color: 0x430605, transparent: true, opacity: 0.8, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }),
  bloodDark: new THREE.MeshStandardMaterial({ color: 0x2c0604, roughness: 0.95 }),
}

function add(parent, geo, mat, x, y, z, part, opts = {}) {
  const m = new THREE.Mesh(geo, mat)
  m.position.set(x, y, z)
  if (opts.rot) m.rotation.set(opts.rot[0], opts.rot[1], opts.rot[2])
  if (opts.scale) m.scale.set(opts.scale[0], opts.scale[1], opts.scale[2])
  m.castShadow = opts.shadow ?? true
  m.receiveShadow = true
  m.userData.part = part
  parent.add(m)
  return m
}

function makeHand(parent, x, y, z, rx, ry, rz, scale = 1) {
  const h = new THREE.Group()
  h.position.set(x, y, z)
  h.rotation.set(rx, ry, rz)
  h.scale.setScalar(scale)
  const palm = add(h, GEO.hand, MATS.skin[0], 0, 0, 0, 'limb', { scale: [0.85, 1.15, 0.72] })
  palm.castShadow = false
  for (let i = 0; i < 4; i++) {
    const f = add(h, GEO.finger, MATS.skin[0], (i - 1.5) * 0.022, -0.055, -0.02, 'limb')
    f.rotation.x = -0.35 + rnd(-0.12, 0.12)
    f.rotation.z = (i - 1.5) * 0.05
    f.castShadow = false
  }
  const thumb = add(h, GEO.finger, MATS.skin[0], 0.052, -0.012, 0.01, 'limb')
  thumb.rotation.z = 0.9
  thumb.castShadow = false
  parent.add(h)
  return h
}

export function buildZombieModel(zombie) {
  const g = new THREE.Group()
  const isBrute = zombie.type === 'brute'
  const isRunner = zombie.type === 'runner'
  const skin = MATS.skin[Math.floor(Math.random() * MATS.skin.length)]
  const coatMat = isBrute ? MATS.coat2 : MATS.coat
  const eyeMat = isRunner || isBrute ? MATS.eyeRed : MATS.eye
  const tall = isBrute ? 1.06 : isRunner ? 0.98 : 1

  // ---------- legs ----------
  zombie.legs = []
  for (const sx of [-1, 1]) {
    const pivot = new THREE.Group()
    pivot.position.set(sx * 0.135, 0.94, 0)
    const leg = add(pivot, GEO.leg, MATS.pants, 0, -0.42, 0, 'limb')
    leg.scale.set(1, tall, 1)
    add(pivot, new THREE.BoxGeometry(0.14, 0.09, 0.14), MATS.boot, 0, -0.83, -0.01, 'limb', { shadow: false })
    const boot = add(pivot, GEO.boot, MATS.boot, 0, -0.88, -0.05, 'limb')
    boot.rotation.x = -0.03
    // gaiters / torn trouser cuff
    add(pivot, new THREE.CylinderGeometry(0.068, 0.073, 0.12, 7), MATS.pants, 0, -0.73, 0, 'limb', { shadow: false })
    g.add(pivot)
    zombie.legs.push(pivot)
  }

  // pelvis under the coat
  add(g, new THREE.CylinderGeometry(0.2, 0.22, 0.16, 10), MATS.pants, 0, 0.97, 0, 'body', { scale: [1, 1, 0.82] })

  // ---------- upper body, hinged at the waist ----------
  const body = new THREE.Group()
  body.position.y = 0.94
  g.add(body)
  zombie.torso = body

  const torso = add(body, GEO.torso, skin, 0, 0.24, 0, 'body', { scale: [1.02, tall, 0.84] })
  torso.rotation.x = 0.03

  const coat = add(body, GEO.coat, coatMat, 0, 0.09, 0, 'body', { scale: [1, tall, 0.92] })
  coat.rotation.y = rnd(-0.06, 0.06)

  // open coat lapels
  for (const sx of [-1, 1]) {
    const lapel = add(body, new THREE.BoxGeometry(0.1, 0.36, 0.026), coatMat, sx * 0.105, 0.25, -0.19, 'body', {
      rot: [0.02, 0, sx * 0.2],
    })
    lapel.castShadow = false
  }
  // ragged hem
  for (let i = 0; i < 11; i++) {
    const a = (i / 11) * TAU + rnd(-0.12, 0.12)
    const r = 0.3
    const t = add(body, GEO.tatter, coatMat, Math.sin(a) * r, -0.245 - rnd(0, 0.045), Math.cos(a) * r * 0.92, 'body', {
      rot: [rnd(-0.12, 0.12), a, rnd(-0.16, 0.16)],
    })
    t.scale.y = rnd(0.65, 1.35)
    t.castShadow = false
  }

  // belt, buckle, pouches
  add(body, GEO.belt, MATS.belt, 0, 0.005, 0, 'body', { scale: [1, 1, 0.88] })
  add(body, GEO.buckle, MATS.buckle, 0, 0.008, -0.142, 'body', { shadow: false })
  for (const sx of [-0.155, 0.155]) {
    const pouch = add(body, GEO.pouch, MATS.pouch, sx, -0.07, -0.15, 'body', { rot: [0.1, sx * 0.3, 0] })
    pouch.scale.y = rnd(0.9, 1.15)
  }

  // shoulder pads / coat shoulders
  for (const sx of [-1, 1]) {
    add(body, GEO.shoulder, coatMat, sx * 0.245, 0.445, 0, 'body', { scale: [1.15, 0.9, 1] })
  }

  // collar and neck
  add(body, new THREE.CylinderGeometry(0.155, 0.195, 0.1, 10), coatMat, 0, 0.53, 0, 'body')
  add(body, new THREE.CylinderGeometry(0.063, 0.075, 0.12, 7), skin, 0, 0.6, -0.015, 'head', { shadow: false })

  // buttons and a diagonal strap
  for (let i = 0; i < 3; i++) add(body, GEO.button, MATS.buckle, 0.02, 0.11 + i * 0.1, -0.2, 'body', { shadow: false })
  const strap = add(body, new THREE.BoxGeometry(0.055, 0.5, 0.022), MATS.belt, -0.08, 0.25, -0.195, 'body', { rot: [0, 0, -0.32] })
  strap.castShadow = false

  // chest wound / blood
  const wound = add(body, GEO.wound, MATS.wound, rnd(-0.09, 0.09), rnd(0.28, 0.38), -0.185, 'body', {
    scale: [1.1, 0.55, 0.5],
  })
  wound.castShadow = false
  const blood = add(body, GEO.blood, MATS.blood, rnd(-0.08, 0.08), 0.2, -0.205, 'body', {
    rot: [0, 0, rnd(-0.35, 0.35)],
  })
  blood.castShadow = false

  // ---------- head ----------
  const head = new THREE.Group()
  head.position.set(0, 0.72, -0.015)
  body.add(head)
  zombie.headMesh = head

  const skull = add(head, GEO.head, skin, 0, 0, -0.018, 'head', { scale: [0.92, 1.04, 0.95] })
  skull.rotation.x = -0.03

  // brow ridge and sunken eye sockets
  for (const sx of [-1, 1]) {
    add(head, new THREE.BoxGeometry(0.088, 0.026, 0.05), MATS.skinDark, sx * 0.062, 0.058, -0.135, 'head', {
      rot: [0.05, 0, sx * 0.14], shadow: false,
    })
    const socket = add(head, GEO.socket, MATS.socket, sx * 0.061, 0.025, -0.146, 'head', {
      scale: [1.02, 0.88, 0.55], shadow: false,
    })
    socket.rotation.z = sx * 0.1
    add(head, GEO.eye, eyeMat, sx * 0.061, 0.028, -0.172, 'head', { shadow: false })
    // cheekbone
    add(head, new THREE.BoxGeometry(0.055, 0.035, 0.04), MATS.skinDark, sx * 0.087, -0.018, -0.128, 'head', {
      rot: [0, sx * 0.2, 0], shadow: false,
    })
    // ear
    add(head, GEO.ear, skin, sx * 0.156, -0.005, -0.005, 'head', { scale: [0.55, 1, 0.8], shadow: false })
  }

  const nose = add(head, new THREE.ConeGeometry(0.036, 0.085, 6), MATS.skinDark, 0, -0.008, -0.19, 'head', { rot: [-Math.PI / 2, 0, 0], shadow: false })
  nose.scale.set(0.85, 1, 0.8)

  // torn, open mouth with irregular teeth
  add(head, new THREE.BoxGeometry(0.118, 0.06, 0.03), MATS.mouth, 0, -0.087, -0.152, 'head', { shadow: false })
  const jaw = add(head, new THREE.BoxGeometry(0.12, 0.052, 0.105), skin, 0, -0.125, -0.123, 'head', {
    rot: [0.22, 0, 0], shadow: false,
  })
  jaw.scale.x = 0.94
  add(head, new THREE.BoxGeometry(0.125, 0.018, 0.032), MATS.skinDark, 0, -0.058, -0.167, 'head', { shadow: false })
  add(head, new THREE.BoxGeometry(0.11, 0.014, 0.03), MATS.skinDark, 0, -0.116, -0.163, 'head', { shadow: false })
  add(head, new THREE.BoxGeometry(0.058, 0.014, 0.038), MATS.tongue, 0, -0.092, -0.168, 'head', { shadow: false })
  const mouthOverlay = new THREE.Mesh(new THREE.PlaneGeometry(0.15, 0.15), MOUTH_MAT)
  mouthOverlay.position.set(0, -0.088, -0.186)
  mouthOverlay.userData.part = 'head'
  head.add(mouthOverlay)
  const mouthBlood = add(head, new THREE.PlaneGeometry(0.062, 0.15), MATS.blood, rnd(-0.005, 0.02), -0.12, -0.188, 'head', {
    rot: [0, 0, rnd(-0.2, 0.2)],
  })
  mouthBlood.castShadow = false

  // hair / helmet
  const hasHelmet = isBrute || (!isRunner && Math.random() > 0.38)
  if (hasHelmet) {
    const helmet = add(head, GEO.helmet, MATS.metal, 0, 0.135, -0.005, 'head', { rot: [-0.08, rnd(-0.08, 0.08), rnd(-0.04, 0.04)] })
    helmet.castShadow = true
    const brim = add(head, GEO.brim, MATS.metalDark, 0, 0.096, -0.012, 'head', { rot: [-0.04, 0, 0] })
    brim.castShadow = false
    // dented crown strap
    add(head, new THREE.BoxGeometry(0.03, 0.012, 0.36), MATS.metalDark, 0, 0.31, -0.005, 'head', {
      rot: [0.08, 0, 0], shadow: false,
    }).scale.set(1, 1, 0.9)
  } else {
    add(head, GEO.skullCap, MATS.hair, 0, 0.045, -0.018, 'head', { scale: [0.96, 0.78, 0.98], shadow: false })
    if (Math.random() > 0.45) {
      add(head, new THREE.BoxGeometry(0.14, 0.11, 0.03), MATS.hair, 0, 0.03, -0.145, 'head', { rot: [-0.1, 0, 0], shadow: false })
    }
  }

  // ---------- arms ----------
  zombie.arms = []
  zombie.elbows = []
  for (const sx of [-1, 1]) {
    const pivot = new THREE.Group()
    pivot.position.set(sx * 0.255, 0.43, -0.015)
    pivot.rotation.x = 1.3
    pivot.rotation.z = sx * -0.13
    body.add(pivot)

    add(pivot, new THREE.CylinderGeometry(0.067, 0.054, 0.15, 7), coatMat, 0, -0.065, 0, 'limb')
    add(pivot, GEO.armU, skin, 0, -0.17, 0, 'limb')
    // torn sleeve edge
    add(pivot, new THREE.CylinderGeometry(0.062, 0.058, 0.05, 7), coatMat, 0, -0.27, 0, 'limb', { shadow: false })

    const elbow = new THREE.Group()
    elbow.position.y = -0.31
    elbow.rotation.x = 0.34
    pivot.add(elbow)
    add(elbow, GEO.armL, skin, 0, -0.13, 0, 'limb')
    makeHand(elbow, 0, -0.29, -0.008, 0.1, 0, 0, 0.88)

    zombie.arms.push(pivot)
    zombie.elbows.push(elbow)
  }

  // brute armour
  if (isBrute) {
    const plate = add(body, GEO.plate, MATS.metal, 0, 0.29, -0.195, 'body', { rot: [0.04, 0, 0] })
    plate.scale.set(1, 1, 0.9)
    for (const sx of [-1, 1]) {
      add(body, new THREE.BoxGeometry(0.15, 0.09, 0.2), MATS.metalDark, sx * 0.255, 0.455, 0, 'body', { rot: [0, 0, sx * -0.22] })
    }
  }

  // scattered blood spatter
  for (let i = 0; i < 2; i++) {
    const splat = add(body, new THREE.PlaneGeometry(rnd(0.05, 0.11), rnd(0.08, 0.18)), MATS.blood,
      rnd(-0.15, 0.15), rnd(0.05, 0.35), -0.205, 'body', { rot: [0, 0, rnd(-0.6, 0.6)] })
    splat.castShadow = false
  }

  return g
}
