import * as THREE from 'three'
import {
  makeConcrete, makeFloor, makeWood, makeMetal, makeSandbag, makeDirt,
  makeBloodDecal, makeChalk, makeDust, makeGlow,
} from './textures.js'

const TAU = Math.PI * 2

function rnd(a = 0, b = 1) { return a + Math.random() * (b - a) }

function tiled(base, w, h, color = 0xffffff, scale = 2.6, opts = {}) {
  const tex = base.clone()
  tex.needsUpdate = true
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(Math.max(1, w / scale), Math.max(1, h / scale))
  const mat = new THREE.MeshStandardMaterial({
    map: tex,
    bumpMap: tex,
    bumpScale: opts.bump ?? 0.035,
    roughness: opts.roughness ?? 0.94,
    metalness: opts.metalness ?? 0.02,
    color,
  })
  return mat
}

export class World {
  constructor(scene, particles, additive) {
    this.scene = scene
    this.particles = particles
    this.additive = additive
    this.colliders = []
    this.navBlockers = []
    this.windows = []
    this.buys = []
    this.lights = []
    this.flickerLights = []
    this.fallingPlanks = []
    this.growingPlanks = []
    this.time = 0
    this.door = null
    this.firePos = new THREE.Vector3(-4.3, 1.0, 2.4)
    this.fireAcc = 0
    this.decals = []
    this.build()
  }

  collider(x, z, w, d, tag = 'wall') {
    const c = { minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2, tag }
    this.colliders.push(c)
    if (tag !== 'window') this.navBlockers.push(c)
    return c
  }

  box(w, h, d, x, y, z, mat, opts = {}) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
    m.position.set(x, y, z)
    m.castShadow = opts.castShadow ?? true
    m.receiveShadow = opts.receiveShadow ?? true
    if (opts.rotY) m.rotation.y = opts.rotY
    this.scene.add(m)
    if (opts.collide) this.collider(x, z, w + (opts.pad || 0), d + (opts.pad || 0), opts.tag)
    return m
  }

  build() {
    const scene = this.scene
    scene.background = new THREE.Color(0x05070a)
    scene.fog = new THREE.FogExp2(0x0a0d12, 0.021)

    this.texConcrete = makeConcrete()
    this.texFloor = makeFloor()
    this.texWood = makeWood()
    this.texMetal = makeMetal()
    this.texSand = makeSandbag()
    this.texDirt = makeDirt()
    this.bloodTex = makeBloodDecal()
    this.dustTex = makeDust()
    this.glowTex = makeGlow('#ffb765')

    const concrete = tiled(this.texConcrete, 8, 4, 0xd8d2c5)
    const concreteDark = tiled(this.texConcrete, 8, 4, 0x9c988e)
    const wood = tiled(this.texWood, 4, 2, 0xe2cfb2, 2)
    const metal = tiled(this.texMetal, 3, 2, 0xc4c8cb, 2, { metalness: 0.62, roughness: 0.55 })
    const metalDark = tiled(this.texMetal, 3, 2, 0x878c90, 2, { metalness: 0.7, roughness: 0.5 })
    const sand = tiled(this.texSand, 2, 1, 0xd3c8a6, 1.4)

    this.mats = { concrete, concreteDark, wood, metal, metalDark, sand }

    // ---------- floor & ceiling ----------
    const floorMat = tiled(this.texFloor, 18, 16, 0xd6d0c4, 2.4, { roughness: 0.82, metalness: 0.04, bump: 0.05 })
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(18.6, 16.6), floorMat)
    floor.rotation.x = -Math.PI / 2
    floor.position.set(0, 0, 0)
    floor.receiveShadow = true
    scene.add(floor)

    const armoryFloor = new THREE.Mesh(new THREE.PlaneGeometry(5.4, 5.4), floorMat.clone())
    armoryFloor.rotation.x = -Math.PI / 2
    armoryFloor.position.set(6.6, 0.002, 11.1)
    armoryFloor.receiveShadow = true
    scene.add(armoryFloor)

    const ceilMat = tiled(this.texConcrete, 18, 16, 0x7d7b74, 3)
    const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(18.6, 16.6), ceilMat)
    ceiling.rotation.x = Math.PI / 2
    ceiling.position.set(0, 4.2, 0)
    ceiling.receiveShadow = true
    scene.add(ceiling)
    const ceil2 = new THREE.Mesh(new THREE.PlaneGeometry(5.4, 5.4), ceilMat.clone())
    ceil2.rotation.x = Math.PI / 2
    ceil2.position.set(6.6, 4.2, 11.1)
    scene.add(ceil2)

    // ---------- walls ----------
    const H = 4.2
    // north wall z=-8.3 with window x[-1.2,1.2]
    this.wall(-5.25, -8.3, 8.1, 0.6, H, concrete)
    this.wall(5.25, -8.3, 8.1, 0.6, H, concrete)
    this.box(2.4, 1.2, 0.6, 0, 3.6, -8.3, concrete) // lintel
    this.box(2.4, 0.9, 0.6, 0, 0.45, -8.3, concrete) // sill
    this.collider(0, -8.3, 2.4, 0.6, 'window')
    // west wall x=-9.3 window z[-3.2,-0.8]
    this.wall(-9.3, -5.6, 0.6, 4.8, H, concrete)
    this.wall(-9.3, 3.6, 0.6, 8.8, H, concrete)
    this.box(0.6, 1.2, 2.4, -9.3, 3.6, -2, concrete)
    this.box(0.6, 0.9, 2.4, -9.3, 0.45, -2, concrete)
    this.collider(-9.3, -2, 0.6, 2.4, 'window')
    // east wall x=9.3 window z[1.8,4.2]
    this.wall(9.3, -3.1, 0.6, 9.8, H, concrete)
    this.wall(9.3, 6.1, 0.6, 3.8, H, concrete)
    this.box(0.6, 1.2, 2.4, 9.3, 3.6, 3, concrete)
    this.box(0.6, 0.9, 2.4, 9.3, 0.45, 3, concrete)
    this.collider(9.3, 3, 0.6, 2.4, 'window')
    // south wall z=8.3 with door x[4,6.2]
    this.wall(-2.5, 8.3, 13, 0.6, H, concrete)
    this.wall(7.6, 8.3, 2.8, 0.6, H, concrete)
    this.box(2.2, 1.0, 0.6, 5.1, 3.7, 8.3, concrete)
    // armory
    this.wall(3.9, 11.1, 0.6, 5.6, H, concreteDark)
    this.wall(6.6, 13.9, 5.4, 0.6, H, concreteDark)
    this.wall(9.3, 11.1, 0.6, 5.6, H, concreteDark)

    // baseboards
    this.box(18.4, 0.22, 0.16, 0, 0.11, -7.95, concreteDark, { castShadow: false })
    this.box(0.16, 0.22, 16.4, -8.95, 0.11, 0, concreteDark, { castShadow: false })
    this.box(0.16, 0.22, 16.4, 8.95, 0.11, 0, concreteDark, { castShadow: false })

    // ---------- ceiling beams & pipes ----------
    const beamMat = tiled(this.texWood, 4, 1, 0x4a3b2c, 2)
    for (let z = -7; z <= 7; z += 3.5) {
      this.box(18.4, 0.26, 0.34, 0, 4.02, z, beamMat, { castShadow: false })
    }
    for (let x = -7; x <= 7; x += 7) {
      this.box(0.22, 0.2, 16.4, x, 3.98, 0, metalDark, { castShadow: false })
    }
    const pipeMat = metal
    const pipe1 = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 17, 10), pipeMat)
    pipe1.rotation.z = Math.PI / 2
    pipe1.position.set(0, 3.72, -6.9)
    pipe1.castShadow = true
    scene.add(pipe1)
    const pipe2 = pipe1.clone()
    pipe2.position.set(-8.4, 3.6, 0)
    pipe2.rotation.set(Math.PI / 2, 0, 0)
    scene.add(pipe2)

    // ---------- pillars ----------
    for (const [x, z] of [[-4.9, -2.6], [4.9, -2.6], [-4.9, 3.6], [4.9, 3.6]]) {
      this.box(0.85, 4.2, 0.85, x, 2.1, z, concrete, { collide: true, tag: 'pillar' })
      this.box(1.15, 0.18, 1.15, x, 0.09, z, concreteDark)
      this.box(1.05, 0.16, 1.05, x, 3.9, z, concreteDark)
    }

    // ---------- windows / barricades ----------
    this.makeWindow('north', new THREE.Vector3(0, 0, -8.3), 0, new THREE.Vector3(0, 0, -1), new THREE.Vector3(0, 0, -10.6), new THREE.Vector3(0, 0, -6.7), wood)
    this.makeWindow('west', new THREE.Vector3(-9.3, 0, -2), Math.PI / 2, new THREE.Vector3(-1, 0, 0), new THREE.Vector3(-11.8, 0, -2), new THREE.Vector3(-7.0, 0, -2), wood)
    this.makeWindow('east', new THREE.Vector3(9.3, 0, 3), -Math.PI / 2, new THREE.Vector3(1, 0, 0), new THREE.Vector3(11.8, 0, 3), new THREE.Vector3(7.0, 0, 3), wood)

    // ---------- door ----------
    this.makeDoor(wood, metal)

    // ---------- props ----------
    this.crate(-6.6, 5.8, 1.15, 0.25, wood)
    this.crate(-6.5, 4.6, 0.9, -0.18, wood)
    this.crate(-6.5, 5.6, 0.7, 0.5, wood, 1.15)
    this.crate(6.4, -6.2, 1.2, -0.35, wood)
    this.crate(7.2, -5.2, 0.8, 0.2, wood)
    this.crate(-2.6, 7.2, 0.9, 0.1, wood)
    this.barrel(7.4, 1.2, metalDark)
    this.barrel(-7.2, -6.6, metalDark)
    this.barrel(2.9, 6.7, metalDark)
    this.barrel(4.8, 13.2, metalDark)

    this.sandbags(-2.4, -7.0, 0)
    this.sandbags(2.6, -7.0, 0)
    this.sandbags(-8.0, 1.4, Math.PI / 2)
    this.sandbags(8.0, 5.4, Math.PI / 2)
    this.sandbags(3.4, 7.0, 0)
    this.sandbags(8.2, 9.8, 0)

    this.table(-1.6, 6.4)
    this.radio(-1.6, 1.02, 6.4)

    // fire barrel
    this.makeFireBarrel()

    // mystery box
    this.makeMysteryBox()

    // wall buys
    this.makeWallBuy('kar98k', 'KAR98K', 500, new THREE.Vector3(-5.4, 0, -7.85), 0, metal, wood)
    this.makeWallBuy('mp40', 'MP40', 1000, new THREE.Vector3(8.85, 0, -4.6), -Math.PI / 2, metal, wood)
    this.makeWallBuy('trench', 'TRENCH GUN', 1200, new THREE.Vector3(-8.85, 0, 4.6), Math.PI / 2, metal, wood)
    this.makeWallBuy('thompson', 'THOMPSON', 1500, new THREE.Vector3(8.85, 0, 11.2), -Math.PI / 2, metal, wood)

    // ---------- graffiti & blood ----------
    this.graffiti('THEY HEAR YOU', 0.5, 2.2, -7.96, 0, 1.5, 1)
    this.graffiti('NO EXIT', -8.96, 2.4, 6.2, Math.PI / 2, 1.2, 1)
    this.graffiti('GOD IS DEAD', 8.96, 2.1, -6.3, -Math.PI / 2, 1.2, 1)
    this.graffiti('750', 5.1, 2.15, 8.4, Math.PI, 0.8, 1, '#d8a13c')
    this.graffiti('REPENT', -2.8, 2.6, -7.96, 0, 1.1, 1)

    for (let i = 0; i < 9; i++) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({
        map: this.bloodTex, transparent: true, depthWrite: false, opacity: 0.55 + Math.random() * 0.3,
        polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4,
      }))
      m.rotation.set(-Math.PI / 2, 0, Math.random() * TAU)
      m.position.set(rnd(-8.2, 8.2), 0.012, rnd(-7.2, 7.4))
      m.scale.setScalar(rnd(0.5, 1.9))
      scene.add(m)
      this.decals.push(m)
    }

    // ---------- lights ----------
    this.hemi = new THREE.HemisphereLight(0x9db2d2, 0x33271c, 1.45)
    scene.add(this.hemi)

    const ambient = new THREE.AmbientLight(0x59657a, 0.62)
    scene.add(ambient)

    const fillDir = new THREE.DirectionalLight(0xa2b2c8, 0.95)
    fillDir.position.set(9, 9, 12)
    fillDir.target.position.set(0, 1, 0)
    scene.add(fillDir)
    scene.add(fillDir.target)

    const frontFill = new THREE.DirectionalLight(0x9aa8c0, 0.55)
    frontFill.position.set(0, 8, 20)
    frontFill.target.position.set(0, 1, -2)
    scene.add(frontFill)
    scene.add(frontFill.target)

    const moon = new THREE.DirectionalLight(0xb4cdf0, 2.6)
    moon.position.set(-14, 19, -16)
    moon.target.position.set(0, 0, 0)
    moon.castShadow = true
    moon.shadow.mapSize.set(2048, 2048)
    moon.shadow.camera.left = -20
    moon.shadow.camera.right = 20
    moon.shadow.camera.top = 20
    moon.shadow.camera.bottom = -20
    moon.shadow.camera.near = 1
    moon.shadow.camera.far = 60
    moon.shadow.bias = -0.0004
    moon.shadow.normalBias = 0.025
    scene.add(moon)
    scene.add(moon.target)
    this.moon = moon

    this.bulb(-4.6, 2.0, 16, 0xffb066)
    this.bulb(4.2, -3.2, 14, 0xffa95c)
    this.bulb(-3.5, 4.8, 11, 0xffc07a)
    this.bulb(-7.6, -5.8, 12, 0xff9f55)
    this.bulb(6.6, 11.4, 14, 0xffb870)

    // armory work lamp
    const lamp = new THREE.PointLight(0xffd9a0, 10, 8, 2)
    lamp.position.set(8.4, 2.4, 12.4)
    scene.add(lamp)

    // window moonlight accents
    for (const w of this.windows) {
      const spot = new THREE.SpotLight(0x9fb8e0, 14, 22, 0.52, 0.9, 1.6)
      spot.position.copy(w.center).addScaledVector(w.normal, 2.2)
      spot.position.y = 3.4
      spot.target.position.copy(w.center).addScaledVector(w.normal, -5)
      spot.target.position.y = 0
      scene.add(spot)
      scene.add(spot.target)
    }

    // moon shafts are handled by the spot lights and dust
    this.shafts = []

    // ---------- dust ----------
    this.makeDust()

    // ---------- outside ----------
    this.makeOutside()

    // ---------- ambient audio props / objective markers ----------
    this.spawnGlow = []
  }

  wall(x, z, w, d, h, mat) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
    m.position.set(x, h / 2, z)
    m.castShadow = true
    m.receiveShadow = true
    this.scene.add(m)
    this.collider(x, z, w, d, 'wall')
    return m
  }

  makeWindow(id, center, rotY, normal, staging, inside, woodMat) {
    const group = new THREE.Group()
    group.position.copy(center)
    group.rotation.y = rotY
    this.scene.add(group)

    const frameMat = tiled(this.texMetal, 2.6, 2.2, 0x4f5254, 2, { metalness: 0.65, roughness: 0.5 })
    const postGeo = new THREE.BoxGeometry(0.14, 2.2, 0.26)
    for (const sx of [-1.28, 1.28]) {
      const p = new THREE.Mesh(postGeo, frameMat)
      p.position.set(sx, 1.95, 0)
      p.castShadow = true
      group.add(p)
    }
    const top = new THREE.Mesh(new THREE.BoxGeometry(2.7, 0.14, 0.3), frameMat)
    top.position.set(0, 3.02, 0)
    top.castShadow = true
    group.add(top)
    const sill = new THREE.Mesh(new THREE.BoxGeometry(2.9, 0.16, 0.5), this.mats.wood)
    sill.position.set(0, 0.9, 0)
    sill.castShadow = true
    sill.receiveShadow = true
    group.add(sill)

    const boardMat = tiled(this.texWood, 3, 0.3, 0x8b7254, 1.6)
    const plankGeo = new THREE.BoxGeometry(2.95, 0.23, 0.09)
    const planks = []
    for (let i = 0; i < 6; i++) {
      const p = new THREE.Mesh(plankGeo, boardMat)
      p.position.set(rnd(-0.12, 0.12), 1.12 + i * 0.31, rnd(-0.04, 0.06))
      p.rotation.z = rnd(-0.07, 0.07)
      p.castShadow = true
      p.receiveShadow = true
      group.add(p)
      planks.push(p)
    }
    // cross brace
    const brace = new THREE.Mesh(new THREE.BoxGeometry(0.16, 2.1, 0.06), boardMat)
    brace.position.set(-0.55, 1.85, 0.1)
    brace.rotation.z = 0.16
    brace.castShadow = true
    group.add(brace)

    const insideLight = new THREE.PointLight(0xffa060, 2.2, 5.5, 2)
    insideLight.position.copy(center).addScaledVector(normal, -0.9)
    insideLight.position.y = 2.15
    this.scene.add(insideLight)

    const w = {
      id, center, rotY, normal, staging, inside,
      group, planks, boards: 6, maxBoards: 6,
      repairProgress: 0,
    }
    this.windows.push(w)
    return w
  }

  breakBoard(w) {
    if (w.boards <= 0) return false
    const idx = w.boards - 1
    const plank = w.planks[idx]
    if (!plank) return false
    plank.visible = false
    w.boards--
    const p = new THREE.Vector3()
    plank.getWorldPosition(p)
    this.particles.burst(p, new THREE.Vector3(0, 0.2, 0), 12, {
      color: new THREE.Color(0.35, 0.26, 0.16), size: 0.055, life: 0.9, spread: 1.6, gravity: -7,
    })
    this.additive.burst(p, new THREE.Vector3(0, 0.1, 0), 4, {
      color: new THREE.Color(0.9, 0.7, 0.4), size: 0.04, life: 0.3, spread: 1.2, gravity: -2,
    })
    return true
  }

  repairBoard(w) {
    if (w.boards >= w.maxBoards) return false
    const idx = w.boards
    const plank = w.planks[idx]
    if (!plank) return false
    plank.visible = true
    plank.scale.set(0.2, 0.2, 0.2)
    this.growingPlanks.push({ mesh: plank, t: 0 })
    w.boards++
    return true
  }

  makeDoor(wood, metal) {
    const group = new THREE.Group()
    group.position.set(5.1, 0, 8.32)
    this.scene.add(group)
    const doorMesh = new THREE.Mesh(new THREE.BoxGeometry(2.2, 3.1, 0.16), tiled(this.texWood, 2.2, 3, 0x8f7657, 1.4))
    doorMesh.position.set(0, 1.55, 0)
    doorMesh.castShadow = true
    doorMesh.receiveShadow = true
    group.add(doorMesh)
    for (const y of [0.55, 1.55, 2.55]) {
      const band = new THREE.Mesh(new THREE.BoxGeometry(2.24, 0.12, 0.2), metal)
      band.position.set(0, y, 0.01)
      band.castShadow = true
      group.add(band)
    }
    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.02, 6, 12), metal)
    handle.position.set(0.72, 1.5, 0.13)
    group.add(handle)
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 0.55), new THREE.MeshBasicMaterial({
      map: makeChalk('750', 'BUY DOOR', { size: 86, color: '#e0b558' }), transparent: true, depthWrite: false,
    }))
    sign.position.set(0, 2.05, 0.11)
    group.add(sign)

    const blocker = this.collider(5.1, 8.32, 2.2, 0.3, 'door')
    this.door = { group, mesh: doorMesh, blocker, open: false, t: 0, sign }
  }

  openDoor() {
    if (!this.door || this.door.open) return false
    this.door.open = true
    this.door.sign.visible = false
    const i = this.colliders.indexOf(this.door.blocker)
    if (i >= 0) this.colliders.splice(i, 1)
    const j = this.navBlockers.indexOf(this.door.blocker)
    if (j >= 0) this.navBlockers.splice(j, 1)
    return true
  }

  crate(x, z, size, rot, woodMat, y = 0) {
    const g = new THREE.Group()
    g.position.set(x, y, z)
    g.rotation.y = rot
    this.scene.add(g)
    const body = new THREE.Mesh(new THREE.BoxGeometry(size, size, size), tiled(this.texWood, size, size, 0xa38a68, 1.2))
    body.position.y = size / 2
    body.castShadow = true
    body.receiveShadow = true
    g.add(body)
    const edgeMat = this.mats.metalDark
    for (const [sx, sz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) {
      const edge = new THREE.Mesh(new THREE.BoxGeometry(0.07, size + 0.02, 0.07), edgeMat)
      edge.position.set(sx * size / 2, size / 2, sz * size / 2)
      g.add(edge)
    }
    const label = new THREE.Mesh(new THREE.PlaneGeometry(size * 0.6, size * 0.3), new THREE.MeshBasicMaterial({
      map: makeChalk('AMMO', '', { size: 60, color: 'rgba(210,200,170,0.5)' }), transparent: true, opacity: 0.6, depthWrite: false,
    }))
    label.position.set(0, size * 0.55, size / 2 + 0.011)
    g.add(label)
    this.collider(x, z, size + 0.1, size + 0.1, 'prop')
    return g
  }

  barrel(x, z, mat) {
    const g = new THREE.Group()
    g.position.set(x, 0, z)
    this.scene.add(g)
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 1.05, 16), tiled(this.texMetal, 1.2, 1, 0x6a5a4a, 1.2, { metalness: 0.5, roughness: 0.65 }))
    body.position.y = 0.525
    body.castShadow = true
    body.receiveShadow = true
    g.add(body)
    for (const y of [0.2, 0.85]) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.43, 0.03, 5, 18), this.mats.metalDark)
      ring.rotation.x = Math.PI / 2
      ring.position.y = y
      g.add(ring)
    }
    this.collider(x, z, 0.9, 0.9, 'prop')
    return g
  }

  sandbags(x, z, rot) {
    const g = new THREE.Group()
    g.position.set(x, 0, z)
    g.rotation.y = rot
    this.scene.add(g)
    const bagGeo = new THREE.SphereGeometry(0.5, 8, 6)
    for (let layer = 0; layer < 3; layer++) {
      const n = layer === 2 ? 2 : 4
      for (let i = 0; i < n; i++) {
        const b = new THREE.Mesh(bagGeo, this.mats.sand)
        b.scale.set(0.62, 0.28, 0.4)
        b.position.set(-1.2 + i * 0.8 + (layer % 2) * 0.4, 0.2 + layer * 0.34, (Math.random() - 0.5) * 0.14)
        b.rotation.set(0, (Math.random() - 0.5) * 0.2, (Math.random() - 0.5) * 0.15)
        b.castShadow = true
        b.receiveShadow = true
        g.add(b)
      }
    }
    this.collider(x, z, 2.6, 0.9, 'prop')
    return g
  }

  table(x, z) {
    const g = new THREE.Group()
    g.position.set(x, 0, z)
    this.scene.add(g)
    const top = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.1, 0.95), tiled(this.texWood, 2, 1, 0xa28a6a, 1.2))
    top.position.y = 0.92
    top.castShadow = true
    top.receiveShadow = true
    g.add(top)
    for (const [sx, sz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.9, 0.09), this.mats.wood)
      leg.position.set(sx * 0.88, 0.45, sz * 0.38)
      leg.castShadow = true
      g.add(leg)
    }
    this.collider(x, z, 2.1, 1.05, 'prop')
    return g
  }

  radio(x, y, z) {
    const g = new THREE.Group()
    g.position.set(x, y, z)
    this.scene.add(g)
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.32, 0.24), this.mats.metalDark)
    body.position.y = 0.16
    body.castShadow = true
    g.add(body)
    const dial = new THREE.Mesh(new THREE.CircleGeometry(0.07, 12), new THREE.MeshStandardMaterial({ color: 0xc9a55a, emissive: 0x6a4a12, emissiveIntensity: 1.4 }))
    dial.position.set(-0.12, 0.19, 0.125)
    g.add(dial)
    const dial2 = dial.clone()
    dial2.position.x = 0.1
    g.add(dial2)
    const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.7, 5), this.mats.metal)
    ant.position.set(0.18, 0.55, 0)
    ant.rotation.z = -0.22
    g.add(ant)
    return g
  }

  makeFireBarrel() {
    const g = new THREE.Group()
    g.position.set(this.firePos.x, 0, this.firePos.z)
    this.scene.add(g)
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 1.05, 18, 1, true), new THREE.MeshStandardMaterial({
      map: this.texMetal, color: 0x6b3a24, metalness: 0.55, roughness: 0.62, side: THREE.DoubleSide,
    }))
    body.position.y = 0.525
    body.castShadow = true
    body.receiveShadow = true
    g.add(body)
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.56, 0.045, 6, 20), this.mats.metalDark)
    rim.rotation.x = Math.PI / 2
    rim.position.y = 1.04
    g.add(rim)
    const coals = new THREE.Mesh(new THREE.SphereGeometry(0.4, 12, 8), new THREE.MeshStandardMaterial({
      color: 0x2a0d05, emissive: 0xff4a0a, emissiveIntensity: 1.6, roughness: 1,
    }))
    coals.scale.y = 0.3
    coals.position.y = 0.72
    g.add(coals)
    const light = new THREE.PointLight(0xff7a2c, 16, 11, 2)
    light.position.set(this.firePos.x, 1.55, this.firePos.z)
    light.castShadow = false
    this.scene.add(light)
    this.fireLight = light
    this.collider(this.firePos.x, this.firePos.z, 1.2, 1.2, 'prop')
  }

  makeMysteryBox() {
    const g = new THREE.Group()
    g.position.set(7.0, 0, 12.5)
    g.rotation.y = -0.15
    this.scene.add(g)
    const baseMat = tiled(this.texWood, 1.4, 1, 0x7d6244, 1.1)
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.45, 0.9, 0.95), baseMat)
    body.position.y = 0.45
    body.castShadow = true
    body.receiveShadow = true
    g.add(body)
    const lid = new THREE.Group()
    lid.position.set(0, 0.9, -0.47)
    g.add(lid)
    const lidMesh = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.16, 1.0), baseMat)
    lidMesh.position.set(0, 0.06, 0.48)
    lidMesh.castShadow = true
    lid.add(lidMesh)
    const trimMat = this.mats.metalDark
    for (const sx of [-0.62, 0.62]) {
      const band = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.94, 1.0), trimMat)
      band.position.set(sx, 0.45, 0)
      g.add(band)
    }
    const qmat = new THREE.MeshBasicMaterial({
      map: makeChalk('?', '', { size: 180, color: '#e6c064' }), transparent: true, depthWrite: false,
    })
    const q = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.8), qmat)
    q.position.set(0, 0.52, 0.481)
    g.add(q)
    const light = new THREE.PointLight(0xffc46a, 4, 5, 2)
    light.position.set(0, 1.3, 0)
    g.add(light)
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 1.25, 3.2, 18, 1, true), new THREE.MeshBasicMaterial({
      color: 0xffc46a, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
    }))
    beam.position.set(0, 2.6, 0)
    g.add(beam)
    const blocker = this.collider(7.0, 12.5, 1.55, 1.05, 'prop')
    this.mysteryBox = { group: g, lid, light, beam, open: false, t: 0, q, blocker }
  }

  makeWallBuy(id, name, price, pos, rotY, metal, wood) {
    const g = new THREE.Group()
    g.position.copy(pos)
    g.rotation.y = rotY
    this.scene.add(g)

    // gun silhouette mounted on the wall
    const gun = new THREE.Group()
    gun.position.set(0, 2.15, 0.18)
    const barrelLen = id === 'trench' ? 0.85 : id === 'mp40' ? 0.62 : 0.95
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.03, barrelLen, 8), metal)
    barrel.rotation.z = Math.PI / 2
    barrel.position.set(-0.15 - barrelLen / 2, 0, 0)
    gun.add(barrel)
    const receiver = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.12, 0.12), metal)
    receiver.position.set(0, 0, 0)
    gun.add(receiver)
    const stock = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.15, 0.1), wood)
    stock.position.set(0.42, -0.03, 0)
    stock.rotation.z = 0.08
    gun.add(stock)
    if (id === 'mp40' || id === 'thompson') {
      const mag = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.26, 0.09), metal)
      mag.position.set(0.02, -0.19, 0)
      mag.rotation.z = 0.14
      gun.add(mag)
    }
    if (id === 'kar98k') {
      const scope = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.032, 0.26, 8), metal)
      scope.rotation.z = Math.PI / 2
      scope.position.set(-0.05, 0.1, 0)
      gun.add(scope)
    }
    gun.scale.setScalar(0.95)
    g.add(gun)

    const sign = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.8), new THREE.MeshBasicMaterial({
      map: makeChalk(name, String(price), { size: 54 }), transparent: true, depthWrite: false, opacity: 0.92,
    }))
    sign.position.set(0, 1.28, 0.04)
    g.add(sign)

    this.buys.push({
      id, name, price, pos: new THREE.Vector3(pos.x, 0, pos.z),
      rotY, sign, radius: 2.3,
    })
  }

  graffiti(text, x, y, z, rotY, w, h, color) {
    const mat = new THREE.MeshBasicMaterial({
      map: makeChalk(text, '', { size: 64, color: color || 'rgba(180, 30, 24, 0.8)' }),
      transparent: true, depthWrite: false, opacity: 0.62,
    })
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat)
    m.position.set(x, y, z)
    m.rotation.y = rotY
    this.scene.add(m)
    return m
  }

  bulb(x, z, intensity, color) {
    const g = new THREE.Group()
    g.position.set(x, 0, z)
    this.scene.add(g)
    const wire = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 1.1, 4), this.mats.metalDark)
    wire.position.y = 3.65
    g.add(wire)
    const shade = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.22, 10, 1, true), this.mats.metalDark)
    shade.position.y = 3.12
    shade.rotation.x = Math.PI
    g.add(shade)
    const bulbMat = new THREE.MeshStandardMaterial({ color: 0xffe1b0, emissive: color, emissiveIntensity: 3.2, roughness: 0.4 })
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.075, 8, 6), bulbMat)
    bulb.position.y = 3.06
    g.add(bulb)
    const light = new THREE.PointLight(color, intensity, 10, 2)
    light.position.set(x, 3.0, z)
    this.scene.add(light)
    this.flickerLights.push({ light, bulb: bulbMat, base: intensity, seed: Math.random() * 100, broken: Math.random() > 0.72 })
    this.lights.push(light)
  }

  makeShafts() {
    const mat = new THREE.MeshBasicMaterial({
      color: 0x9fb8e0, transparent: true, opacity: 0.035, blending: THREE.AdditiveBlending,
      depthWrite: false, side: THREE.DoubleSide,
    })
    const geo = new THREE.ConeGeometry(2.4, 8, 18, 1, true)
    const specs = [
      { pos: [0, 2.0, -4.0], rot: [-Math.PI / 2, 0, 0] },
      { pos: [-5.0, 2.0, -2.0], rot: [0, 0, Math.PI / 2] },
      { pos: [5.0, 2.0, 3.0], rot: [0, 0, -Math.PI / 2] },
    ]
    this.shafts = []
    for (const s of specs) {
      const m = new THREE.Mesh(geo, mat)
      m.position.set(...s.pos)
      m.rotation.set(...s.rot)
      this.scene.add(m)
      this.shafts.push(m)
    }
  }

  makeDust() {
    const count = 230
    const geo = new THREE.BufferGeometry()
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = rnd(-8.6, 8.6)
      pos[i * 3 + 1] = rnd(0.2, 4.0)
      pos[i * 3 + 2] = rnd(-7.6, 7.6)
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const mat = new THREE.PointsMaterial({
      map: this.dustTex, size: 0.032, transparent: true, opacity: 0.3, depthWrite: false,
      blending: THREE.AdditiveBlending, color: 0xffe2b0, sizeAttenuation: true,
    })
    this.dust = new THREE.Points(geo, mat)
    this.dust.frustumCulled = false
    this.scene.add(this.dust)
    this.dustPos = pos
  }

  makeOutside() {
    const groundMat = tiled(this.texDirt, 40, 40, 0x5a5a4c, 6, { roughness: 1, bump: 0.05 })
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(110, 110), groundMat)
    ground.rotation.x = -Math.PI / 2
    ground.position.y = -0.03
    ground.receiveShadow = true
    this.scene.add(ground)

    // distant tree silhouettes
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x16130f, roughness: 1 })
    const tree = (x, z, s) => {
      const g = new THREE.Group()
      g.position.set(x, 0, z)
      g.scale.setScalar(s)
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.3, 4.4, 6), trunkMat)
      trunk.position.y = 2.2
      trunk.rotation.z = rnd(-0.08, 0.08)
      g.add(trunk)
      for (let i = 0; i < 5; i++) {
        const br = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.1, rnd(1.4, 2.6), 5), trunkMat)
        br.position.set(rnd(-0.7, 0.7), rnd(2.4, 4.3), rnd(-0.4, 0.4))
        br.rotation.set(rnd(-0.9, 0.9), rnd(0, TAU), rnd(-0.8, 0.8))
        g.add(br)
      }
      this.scene.add(g)
    }
    for (let i = 0; i < 18; i++) {
      const a = rnd(0, TAU)
      const d = rnd(17, 38)
      tree(Math.cos(a) * d, Math.sin(a) * d, rnd(0.7, 1.5))
    }

    // fence / rubble outside
    for (let i = 0; i < 9; i++) {
      const x = -18 + i * 4.4
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.18, 2.2, 0.18), trunkMat)
      post.position.set(x, 1.1, -20 + rnd(-1.5, 1.5))
      post.rotation.z = rnd(-0.2, 0.2)
      this.scene.add(post)
    }
    const rubbleMat = this.mats.concreteDark
    for (let i = 0; i < 22; i++) {
      const a = rnd(0, TAU)
      const d = rnd(11, 20)
      const r = new THREE.Mesh(new THREE.DodecahedronGeometry(rnd(0.3, 1.0), 0), rubbleMat)
      r.position.set(Math.cos(a) * d, rnd(0, 0.4), Math.sin(a) * d)
      r.rotation.set(rnd(0, TAU), rnd(0, TAU), rnd(0, TAU))
      r.castShadow = true
      this.scene.add(r)
    }

    // moon glow far away
    const moon = new THREE.Mesh(new THREE.PlaneGeometry(14, 14), new THREE.MeshBasicMaterial({
      map: makeGlow('#cfe0ff', '#ffffff'), transparent: true, opacity: 0.55,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }))
    moon.position.set(-10, 15, -42)
    moon.lookAt(0, 2, 0)
    this.scene.add(moon)

    // dead shrub near windows
    for (const [x, z] of [[-3, -12], [3.5, -12], [-13, 2], [13, -1], [12, 7]]) {
      const bush = new THREE.Group()
      bush.position.set(x, 0, z)
      for (let i = 0; i < 7; i++) {
        const br = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.04, rnd(0.7, 1.5), 4), trunkMat)
        br.position.set(rnd(-0.4, 0.4), rnd(0.35, 0.7), rnd(-0.4, 0.4))
        br.rotation.set(rnd(-0.7, 0.7), rnd(0, TAU), rnd(-0.7, 0.7))
        bush.add(br)
      }
      this.scene.add(bush)
    }
  }

  getWindowById(id) { return this.windows.find((w) => w.id === id) }

  reset() {
    for (const w of this.windows) {
      for (const p of w.planks) {
        p.visible = true
        p.scale.set(1, 1, 1)
      }
      w.boards = w.maxBoards
    }
    this.growingPlanks = []
    if (this.door) {
      this.door.open = false
      this.door.t = 0
      this.door.group.position.y = 0
      this.door.group.visible = true
      this.door.sign.visible = true
      if (!this.colliders.includes(this.door.blocker)) this.colliders.push(this.door.blocker)
      if (!this.navBlockers.includes(this.door.blocker)) this.navBlockers.push(this.door.blocker)
    }
    if (this.mysteryBox) {
      this.mysteryBox.open = false
      this.mysteryBox.t = 0
      this.mysteryBox.lid.rotation.x = 0
      this.mysteryBox.beam.material.opacity = 0
      this.mysteryBox.light.intensity = 4
    }
  }

  update(dt, time, playerPos) {
    this.time += dt

    // flickering bulbs
    for (const f of this.flickerLights) {
      const n = Math.sin(time * 7.1 + f.seed) * Math.sin(time * 3.3 + f.seed * 2)
      let k = 0.9 + n * 0.1
      if (f.broken) {
        const burst = Math.sin(time * 23 + f.seed * 5) > 0.72 ? 1 : 0.18
        k = burst * (0.7 + Math.random() * 0.4)
      }
      f.light.intensity = f.base * k
      f.bulb.emissiveIntensity = 2.4 * k + 0.3
    }

    // fire
    const fl = 0.82 + Math.sin(time * 11) * 0.12 + Math.random() * 0.12
    if (this.fireLight) this.fireLight.intensity = 16 * fl
    this.fireAcc += dt
    const interval = 1 / 34
    while (this.fireAcc > interval) {
      this.fireAcc -= interval
      const p = this.firePos
      this.additive.spawn(
        p.x + rnd(-0.32, 0.32), p.y + 0.25, p.z + rnd(-0.32, 0.32),
        rnd(-0.18, 0.18), rnd(0.7, 1.5), rnd(-0.18, 0.18),
        {
          color: new THREE.Color().setHSL(rnd(0.02, 0.09), 1, rnd(0.45, 0.62)),
          size: rnd(0.18, 0.42), life: rnd(0.4, 0.85), gravity: 0.6, drag: 0.965, alpha: 0.55, fadePow: 1.8,
        }
      )
      if (Math.random() < 0.35) {
        this.particles.spawn(
          p.x + rnd(-0.3, 0.3), p.y + 1.0, p.z + rnd(-0.3, 0.3),
          rnd(-0.12, 0.12), rnd(0.4, 0.9), rnd(-0.12, 0.12),
          { color: new THREE.Color(0.16, 0.15, 0.14), size: rnd(0.25, 0.6), life: rnd(0.8, 1.6), gravity: 0.25, drag: 0.97, alpha: 0.25, fadePow: 1.4 }
        )
      }
    }

    // dust drift
    if (this.dust) {
      const p = this.dustPos
      for (let i = 0; i < p.length; i += 3) {
        p[i] += Math.sin(time * 0.3 + i) * 0.012 * dt
        p[i + 1] -= 0.018 * dt
        p[i + 2] += Math.cos(time * 0.23 + i) * 0.01 * dt
        if (p[i + 1] < 0.1) p[i + 1] = 4.0
      }
      this.dust.geometry.attributes.position.needsUpdate = true
    }

    // door animation
    if (this.door && this.door.open && this.door.t < 1) {
      this.door.t = Math.min(1, this.door.t + dt * 0.85)
      const e = 1 - Math.pow(1 - this.door.t, 3)
      this.door.group.position.y = e * 3.3
      if (this.door.t >= 1) this.door.group.visible = false
    }

    // box animation
    if (this.mysteryBox) {
      if (this.mysteryBox.open) {
        this.mysteryBox.t = Math.min(1, this.mysteryBox.t + dt * 1.2)
        const e = 1 - Math.pow(1 - this.mysteryBox.t, 3)
        this.mysteryBox.lid.rotation.x = -e * 1.9
        this.mysteryBox.beam.material.opacity = Math.sin(Math.min(1, this.mysteryBox.t) * Math.PI) * 0.13
        this.mysteryBox.light.intensity = 4 + e * 14
        if (Math.random() < 0.4) {
          this.additive.spawn(
            7.0 + rnd(-0.5, 0.5), 1.0 + rnd(0, 2.5), 12.5 + rnd(-0.5, 0.5),
            rnd(-0.1, 0.1), rnd(0.4, 1.2), rnd(-0.1, 0.1),
            { color: new THREE.Color(1, 0.75, 0.3), size: rnd(0.03, 0.09), life: rnd(0.6, 1.3), gravity: 0.2, drag: 0.97, alpha: 0.9 }
          )
        }
      } else {
        this.mysteryBox.t = Math.max(0, this.mysteryBox.t - dt)
        this.mysteryBox.lid.rotation.x = -this.mysteryBox.t * 1.9
        this.mysteryBox.beam.material.opacity = 0
        this.mysteryBox.light.intensity = 4
      }
    }

    // growing planks
    for (let i = this.growingPlanks.length - 1; i >= 0; i--) {
      const g = this.growingPlanks[i]
      g.t += dt * 6
      const e = Math.min(1, g.t)
      const s = 0.2 + e * 0.8
      g.mesh.scale.set(s, s, s)
      if (e >= 1) {
        g.mesh.scale.set(1, 1, 1)
        this.growingPlanks.splice(i, 1)
      }
    }

    // shaft shimmer
    for (const s of this.shafts) {
      s.material.opacity = 0.028 + Math.sin(time * 0.7 + s.position.x) * 0.008
    }

    // zombie proximity audio handled by game
  }

  nearestBuy(pos) {
    let best = null
    let bestD = Infinity
    for (const b of this.buys) {
      const d = Math.hypot(pos.x - b.pos.x, pos.z - b.pos.z)
      if (d < b.radius && d < bestD) { best = b; bestD = d }
    }
    return best
  }
}
