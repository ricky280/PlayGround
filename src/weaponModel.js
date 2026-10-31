import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'
import { makeMuzzleFlash } from './textures.js'

const GUN = new THREE.MeshStandardMaterial({
  color: 0x52575b, metalness: 0.72, roughness: 0.38,
  emissive: 0x030405, emissiveIntensity: 0.5,
})
const GUN_DARK = new THREE.MeshStandardMaterial({
  color: 0x2c3033, metalness: 0.64, roughness: 0.5,
  emissive: 0x020304, emissiveIntensity: 0.45,
})
const STEEL = new THREE.MeshStandardMaterial({ color: 0x777c7e, metalness: 0.88, roughness: 0.26 })
const WOOD = new THREE.MeshStandardMaterial({ color: 0x70482b, roughness: 0.66, metalness: 0.03 })
const WOOD_DARK = new THREE.MeshStandardMaterial({ color: 0x4b2f1d, roughness: 0.74, metalness: 0.02 })
const GLOVE = new THREE.MeshStandardMaterial({ color: 0x211f1a, roughness: 0.96 })
const SLEEVE = new THREE.MeshStandardMaterial({ color: 0x3e4034, roughness: 0.98 })
const CUFF = new THREE.MeshStandardMaterial({ color: 0x2b2b23, roughness: 0.98 })
const BRASS = new THREE.MeshStandardMaterial({ color: 0xa98138, metalness: 0.9, roughness: 0.32 })
const GLOW = new THREE.MeshStandardMaterial({ color: 0x6cff8a, emissive: 0x39ff6a, emissiveIntensity: 3.8, roughness: 0.3 })

function rb(g, w, h, d, x, y, z, mat, radius = 0.008, rot = null) {
  const r = Math.min(radius, w * 0.45, h * 0.45, d * 0.45)
  const m = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 2, r), mat)
  m.position.set(x, y, z)
  if (rot) m.rotation.set(rot[0], rot[1], rot[2])
  m.castShadow = false
  m.receiveShadow = false
  g.add(m)
  return m
}

function cyl(g, r1, r2, len, x, y, z, mat, rot = null, seg = 10) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r1, r2, len, seg), mat)
  m.position.set(x, y, z)
  if (rot) m.rotation.set(rot[0], rot[1], rot[2])
  m.castShadow = false
  m.receiveShadow = false
  g.add(m)
  return m
}

function tube(g, from, to, r, mat, seg = 7) {
  const a = new THREE.Vector3(...from)
  const b = new THREE.Vector3(...to)
  const dir = b.clone().sub(a)
  const len = dir.length()
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 0.86, len, seg), mat)
  m.position.copy(a).addScaledVector(dir, 0.5)
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize())
  m.castShadow = false
  m.receiveShadow = false
  g.add(m)
  return m
}

function hand(g, x, y, z, rx = 0, ry = 0, rz = 0, scale = 1) {
  const h = new THREE.Group()
  h.position.set(x, y, z)
  h.rotation.set(rx, ry, rz)
  h.scale.setScalar(scale)

  const palm = new THREE.Mesh(new RoundedBoxGeometry(0.075, 0.047, 0.095, 2, 0.018), GLOVE)
  palm.rotation.z = Math.PI / 2
  h.add(palm)

  for (let i = 0; i < 4; i++) {
    const f = new THREE.Mesh(new THREE.CapsuleGeometry(0.0105, 0.055, 2, 5), GLOVE)
    f.position.set(-0.005, 0.006, -0.035 - i * 0.017)
    f.rotation.x = Math.PI / 2 - 0.32
    f.rotation.z = -0.06
    h.add(f)
  }
  const thumb = new THREE.Mesh(new THREE.CapsuleGeometry(0.011, 0.045, 2, 5), GLOVE)
  thumb.position.set(0.04, 0.028, 0.0)
  thumb.rotation.set(0.4, 0, 1.0)
  h.add(thumb)

  const cuff = new THREE.Mesh(new THREE.CylinderGeometry(0.047, 0.041, 0.045, 7), CUFF)
  cuff.position.set(0, -0.01, 0.068)
  cuff.rotation.x = Math.PI / 2
  h.add(cuff)

  g.add(h)
  return h
}

function arm(g, handPos, elbowPos, shoulderPos, support = false) {
  const wrist = new THREE.Vector3(...handPos)
  const elbow = new THREE.Vector3(...elbowPos)
  const shoulder = new THREE.Vector3(...shoulderPos)
  const dir = wrist.clone().sub(elbow)
  const wrist2 = elbow.clone().addScaledVector(dir.normalize(), 0.055)
  tube(g, shoulder.toArray(), elbow.toArray(), support ? 0.05 : 0.056, SLEEVE, 8)
  tube(g, elbow.toArray(), wrist2.toArray(), support ? 0.042 : 0.047, SLEEVE, 8)
  // forearm wrap
  const mid = elbow.clone().lerp(wrist2, 0.45)
  const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.05, 0.05, 7), CUFF)
  ring.position.copy(mid)
  const d = wrist2.clone().sub(elbow)
  ring.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize())
  g.add(ring)
}

function addPistolArms(g) {
  hand(g, 0.005, -0.105, 0.055, -0.35, 0, 0.12, 1.05)
  hand(g, -0.024, -0.145, 0.06, -0.45, 0.16, -0.18, 0.94)
  arm(g, [0.055, -0.135, 0.09], [0.17, -0.4, 0.24], [0.31, -0.66, 0.5])
  arm(g, [-0.045, -0.16, 0.1], [-0.17, -0.41, 0.27], [-0.33, -0.67, 0.52], true)
}

function addRifleArms(g, supportZ = -0.3, supportY = -0.055) {
  hand(g, 0.006, -0.135, 0.13, -0.32, 0, 0.12, 1.02)
  hand(g, -0.01, supportY, supportZ, 0.25, 0, 0.12, 0.94)
  arm(g, [0.055, -0.16, 0.16], [0.18, -0.42, 0.3], [0.32, -0.68, 0.54])
  arm(g, [-0.055, supportY - 0.03, supportZ + 0.06], [-0.2, -0.37, supportZ + 0.2], [-0.35, -0.64, 0.4], true)
}

function addMuzzle(g, muzzle, x, y, z) {
  muzzle.position.set(x, y, z)
}

export function buildViewModel(id) {
  const g = new THREE.Group()
  const muzzle = new THREE.Object3D()
  const flashSprite = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeMuzzleFlash(), color: 0xffffff, transparent: true, opacity: 0,
    blending: THREE.AdditiveBlending, depthWrite: false, depthTest: false,
  }))
  flashSprite.scale.setScalar(0.4)
  const flashLight = new THREE.PointLight(0xffb060, 0, 3.5, 2)
  const shellPort = new THREE.Object3D()
  let boltPart = null
  let pumpPart = null

  if (id === 'm1911') {
    // frame and slide
    rb(g, 0.057, 0.052, 0.23, 0, -0.032, -0.105, GUN_DARK, 0.009)
    rb(g, 0.061, 0.062, 0.305, 0, 0.012, -0.125, GUN, 0.012)
    rb(g, 0.064, 0.018, 0.31, 0, 0.045, -0.125, GUN_DARK, 0.005)
    // barrel / bushing
    cyl(g, 0.017, 0.017, 0.075, 0, 0.012, -0.298, STEEL, [Math.PI / 2, 0, 0], 12)
    cyl(g, 0.024, 0.024, 0.022, 0, 0.012, -0.264, GUN, [Math.PI / 2, 0, 0], 12)
    // grip
    rb(g, 0.059, 0.165, 0.093, 0, -0.112, 0.04, GUN_DARK, 0.013, [0.26, 0, 0])
    rb(g, 0.01, 0.13, 0.073, -0.032, -0.115, 0.042, WOOD_DARK, 0.005, [0.26, 0, 0])
    rb(g, 0.01, 0.13, 0.073, 0.032, -0.115, 0.042, WOOD_DARK, 0.005, [0.26, 0, 0])
    // trigger guard and trigger
    const guard = new THREE.Mesh(new THREE.TorusGeometry(0.037, 0.0065, 5, 12, Math.PI), GUN_DARK)
    guard.position.set(0, -0.058, 0.005)
    guard.rotation.set(0, Math.PI / 2, Math.PI)
    g.add(guard)
    rb(g, 0.012, 0.035, 0.01, 0, -0.058, 0.005, STEEL, 0.004, [0.3, 0, 0])
    // hammer, sights, ejection port, serrations
    rb(g, 0.024, 0.038, 0.03, 0, 0.045, 0.055, GUN_DARK, 0.006, [-0.35, 0, 0])
    rb(g, 0.01, 0.016, 0.024, 0, 0.067, -0.255, GUN_DARK, 0.003)
    rb(g, 0.03, 0.013, 0.02, 0, 0.067, 0.045, GUN_DARK, 0.003)
    rb(g, 0.033, 0.022, 0.065, 0.032, 0.022, -0.075, GUN_DARK, 0.004)
    for (let i = 0; i < 4; i++) rb(g, 0.004, 0.045, 0.007, 0.031, 0.01, 0.01 + i * 0.014, STEEL, 0.001)
    // lanyard loop
    const loop = new THREE.Mesh(new THREE.TorusGeometry(0.018, 0.004, 4, 8), GUN_DARK)
    loop.position.set(0.03, -0.13, 0.09)
    loop.rotation.y = Math.PI / 2
    g.add(loop)
    addMuzzle(g, muzzle, 0, 0.012, -0.34)
    shellPort.position.set(0.04, 0.03, -0.07)
    addPistolArms(g)
  } else if (id === 'kar98k') {
    rb(g, 0.088, 0.12, 0.44, 0, -0.015, 0.22, WOOD, 0.018, [0.03, 0, 0])
    rb(g, 0.078, 0.105, 0.56, 0, 0.005, -0.31, WOOD, 0.016)
    rb(g, 0.067, 0.077, 0.24, 0, 0.07, -0.03, GUN_DARK, 0.01)
    cyl(g, 0.0155, 0.0155, 0.78, 0, 0.074, -0.66, STEEL, [Math.PI / 2, 0, 0], 12)
    cyl(g, 0.021, 0.021, 0.06, 0, 0.074, -1.04, GUN_DARK, [Math.PI / 2, 0, 0], 12)
    // bolt and handle
    boltPart = rb(g, 0.026, 0.026, 0.17, 0.058, 0.074, -0.1, STEEL, 0.006, [0, 0, -0.45])
    cyl(g, 0.011, 0.011, 0.1, 0.11, 0.06, -0.04, STEEL, [0, 0, -1.1], 8)
    const boltKnob = new THREE.Mesh(new THREE.SphereGeometry(0.023, 8, 6), STEEL)
    boltKnob.position.set(0.15, 0.045, -0.01)
    g.add(boltKnob)
    // scope
    cyl(g, 0.036, 0.036, 0.27, 0, 0.145, -0.16, GUN_DARK, [Math.PI / 2, 0, 0], 14)
    cyl(g, 0.044, 0.044, 0.03, 0, 0.145, -0.3, GUN, [Math.PI / 2, 0, 0], 14)
    cyl(g, 0.043, 0.043, 0.025, 0, 0.145, -0.02, GUN, [Math.PI / 2, 0, 0], 14)
    rb(g, 0.055, 0.045, 0.06, 0, 0.115, -0.08, GUN_DARK, 0.006)
    rb(g, 0.055, 0.045, 0.06, 0, 0.115, -0.24, GUN_DARK, 0.006)
    // sights / stock details
    rb(g, 0.008, 0.03, 0.02, 0, 0.1, -0.94, GUN_DARK, 0.002)
    rb(g, 0.03, 0.012, 0.03, 0, 0.09, 0.06, GUN_DARK, 0.003)
    rb(g, 0.092, 0.035, 0.03, 0, 0.052, 0.41, GUN_DARK, 0.006, [0.06, 0, 0])
    addMuzzle(g, muzzle, 0, 0.074, -1.08)
    shellPort.position.set(0.065, 0.075, -0.06)
    addRifleArms(g, -0.31, -0.035)
  } else if (id === 'mp40') {
    rb(g, 0.074, 0.095, 0.36, 0, 0.018, -0.045, GUN, 0.012)
    rb(g, 0.062, 0.065, 0.18, 0, 0.012, 0.21, GUN_DARK, 0.01)
    cyl(g, 0.017, 0.017, 0.31, 0, 0.03, -0.38, STEEL, [Math.PI / 2, 0, 0], 12)
    cyl(g, 0.027, 0.027, 0.055, 0, 0.03, -0.55, GUN_DARK, [Math.PI / 2, 0, 0], 10)
    rb(g, 0.05, 0.23, 0.078, 0, -0.15, -0.005, GUN_DARK, 0.012, [0.12, 0, 0])
    rb(g, 0.046, 0.15, 0.07, 0, -0.1, 0.14, GUN_DARK, 0.012, [0.22, 0, 0])
    rb(g, 0.042, 0.075, 0.1, 0, -0.11, 0.19, WOOD_DARK, 0.01, [0.18, 0, 0])
    rb(g, 0.056, 0.04, 0.12, 0, -0.06, -0.28, GUN_DARK, 0.008)
    // folding stock
    tube(g, [0.055, -0.015, 0.3], [0.075, -0.02, 0.52], 0.012, STEEL)
    tube(g, [-0.055, -0.015, 0.3], [-0.075, -0.02, 0.52], 0.012, STEEL)
    rb(g, 0.17, 0.06, 0.025, 0, -0.018, 0.53, GUN_DARK, 0.006)
    rb(g, 0.012, 0.035, 0.02, 0, 0.085, -0.52, GUN_DARK, 0.003)
    rb(g, 0.03, 0.012, 0.02, 0, 0.082, -0.18, GUN_DARK, 0.003)
    addMuzzle(g, muzzle, 0, 0.03, -0.59)
    shellPort.position.set(0.06, 0.05, 0.0)
    addRifleArms(g, -0.27, -0.045)
  } else if (id === 'thompson') {
    rb(g, 0.078, 0.105, 0.4, 0, 0.01, -0.02, GUN, 0.014)
    rb(g, 0.066, 0.09, 0.18, 0, 0.0, 0.26, GUN_DARK, 0.012)
    cyl(g, 0.019, 0.019, 0.39, 0, 0.025, -0.42, STEEL, [Math.PI / 2, 0, 0], 12)
    cyl(g, 0.028, 0.028, 0.09, 0, 0.025, -0.56, GUN_DARK, [Math.PI / 2, 0, 0], 10)
    // Cutts compensator slots
    for (let i = 0; i < 3; i++) rb(g, 0.05, 0.008, 0.012, 0, 0.055, -0.55 - i * 0.02, GUN_DARK, 0.002)
    // foregrip and stock
    rb(g, 0.05, 0.12, 0.06, 0, -0.1, -0.2, WOOD, 0.012, [0.06, 0, 0])
    rb(g, 0.074, 0.11, 0.3, 0, -0.025, 0.31, WOOD, 0.015, [0.02, 0, 0])
    rb(g, 0.052, 0.2, 0.082, 0, -0.14, -0.015, GUN_DARK, 0.012, [0.14, 0, 0])
    rb(g, 0.046, 0.13, 0.07, 0, -0.105, 0.16, GUN_DARK, 0.011, [0.24, 0, 0])
    rb(g, 0.012, 0.038, 0.02, 0, 0.087, -0.45, GUN_DARK, 0.003)
    rb(g, 0.03, 0.012, 0.02, 0, 0.085, -0.12, GUN_DARK, 0.003)
    addMuzzle(g, muzzle, 0, 0.025, -0.62)
    shellPort.position.set(0.065, 0.055, 0.02)
    addRifleArms(g, -0.22, -0.06)
  } else if (id === 'trench') {
    rb(g, 0.075, 0.09, 0.38, 0, 0.0, -0.02, GUN_DARK, 0.012)
    for (const sx of [-0.018, 0.018]) {
      cyl(g, 0.0145, 0.0145, 0.7, sx, 0.035, -0.51, STEEL, [Math.PI / 2, 0, 0], 12)
      cyl(g, 0.019, 0.019, 0.045, sx, 0.035, -0.86, GUN_DARK, [Math.PI / 2, 0, 0], 10)
    }
    rb(g, 0.072, 0.11, 0.38, 0, -0.005, 0.25, WOOD, 0.016, [0.03, 0, 0])
    rb(g, 0.072, 0.075, 0.24, 0, -0.045, -0.36, WOOD, 0.014)
    pumpPart = rb(g, 0.075, 0.068, 0.18, 0, -0.065, -0.47, WOOD_DARK, 0.013)
    rb(g, 0.06, 0.11, 0.16, 0, -0.075, 0.13, WOOD_DARK, 0.012, [0.24, 0, 0])
    rb(g, 0.01, 0.025, 0.02, 0, 0.08, -0.82, GUN_DARK, 0.002)
    addMuzzle(g, muzzle, 0, 0.035, -0.92)
    shellPort.position.set(0.06, 0.035, -0.05)
    addRifleArms(g, -0.43, -0.075)
  } else if (id === 'wunder') {
    rb(g, 0.105, 0.13, 0.4, 0, 0.0, 0.0, GUN_DARK, 0.018)
    rb(g, 0.075, 0.09, 0.18, 0, 0.0, 0.25, GUN_DARK, 0.014)
    cyl(g, 0.04, 0.04, 0.34, 0, 0.02, -0.36, GUN, [Math.PI / 2, 0, 0], 14)
    cyl(g, 0.055, 0.055, 0.055, 0, 0.02, -0.54, GLOW, [Math.PI / 2, 0, 0], 14)
    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.062, 0.01, 5, 16), GLOW)
      ring.position.set(0, 0.02, -0.2 - i * 0.1)
      g.add(ring)
    }
    rb(g, 0.055, 0.19, 0.085, 0, -0.14, 0.07, GUN_DARK, 0.012, [0.16, 0, 0])
    rb(g, 0.045, 0.12, 0.07, 0, -0.1, 0.18, WOOD_DARK, 0.01, [0.22, 0, 0])
    cyl(g, 0.018, 0.018, 0.17, 0, 0.14, 0.08, GLOW, [0.15, 0, 0], 10)
    cyl(g, 0.026, 0.026, 0.08, 0, 0.14, 0.17, GUN_DARK, [0.15, 0, 0], 10)
    // brass fittings
    for (const z of [-0.12, 0.12]) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.062, 0.008, 4, 12), BRASS)
      ring.position.set(0, 0.0, z)
      g.add(ring)
    }
    addMuzzle(g, muzzle, 0, 0.02, -0.59)
    shellPort.position.set(0.07, 0.05, 0.02)
    addRifleArms(g, -0.26, -0.06)
  }

  g.add(muzzle)
  flashSprite.position.copy(muzzle.position)
  flashSprite.position.z -= 0.02
  g.add(flashSprite)
  flashLight.position.copy(muzzle.position)
  g.add(flashLight)

  return { group: g, muzzle, flashSprite, flashLight, boltPart, pumpPart, shellPort }
}
