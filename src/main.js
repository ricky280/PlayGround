import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import { World } from './world.js'
import { NavGrid } from './nav.js'
import { ZombieManager } from './zombies.js'
import { WeaponSystem, WEAPONS } from './weapons.js'
import { Particles, Decals } from './particles.js'
import { SoundEngine } from './audio.js'
import { makePowerupIcon, makeGlow } from './textures.js'

const $ = (id) => document.getElementById(id)
const isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0
const clamp = THREE.MathUtils.clamp

const POWERUPS = {
  maxammo: { name: 'MAX AMMO', color: 0xd8b24a, hud: '▮▮', sub: 'AMMUNITION RESTORED' },
  insta: { name: 'INSTA-KILL', color: 0xd84a2a, hud: '☠', sub: 'ONE SHOT. ONE KILL.' },
  double: { name: 'DOUBLE POINTS', color: 0xe0b93c, hud: '×2', sub: 'POINTS DOUBLED' },
  nuke: { name: 'KABOOM', color: 0x7ad06a, hud: '☢', sub: 'THE HORDE IS ASH' },
}

const ROUND_LINES = [
  'THEY ARE COMING', 'HOLD THE LINE', 'THE DEAD ARE HUNGRY', 'NO EXTRACTION',
  'THEY REMEMBER YOU', 'DO NOT STOP MOVING', 'THE BUNKER WILL FALL', 'MORE OF THEM',
]

class PowerupManager {
  constructor(scene, audio, game) {
    this.scene = scene
    this.audio = audio
    this.game = game
    this.items = []
    this.tex = {}
    for (const k of Object.keys(POWERUPS)) this.tex[k] = makePowerupIcon(k)
  }

  clear() {
    for (const it of this.items) this.scene.remove(it.group)
    this.items = []
  }

  maybeDrop(pos) {
    if (this.items.length >= 2) return
    if (Math.random() > 0.058) return
    const roll = Math.random()
    let kind = 'maxammo'
    if (roll < 0.28) kind = 'insta'
    else if (roll < 0.56) kind = 'double'
    else if (roll < 0.85) kind = 'maxammo'
    else kind = 'nuke'
    this.spawn(pos, kind)
  }

  spawn(pos, kind) {
    const info = POWERUPS[kind]
    const g = new THREE.Group()
    g.position.set(pos.x, 0, pos.z)
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this.tex[kind], color: 0xffffff, transparent: true, depthWrite: false,
      blending: THREE.AdditiveBlending,
    }))
    sprite.scale.setScalar(0.85)
    sprite.position.y = 1.0
    g.add(sprite)
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: makeGlow('#ffffff', '#ffffff'), color: info.color, transparent: true, opacity: 0.35,
      depthWrite: false, blending: THREE.AdditiveBlending,
    }))
    glow.scale.setScalar(1.7)
    glow.position.y = 1.0
    g.add(glow)
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.018, 5, 26), new THREE.MeshBasicMaterial({
      color: info.color, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false,
    }))
    ring.rotation.x = Math.PI / 2
    ring.position.y = 0.08
    g.add(ring)
    const light = new THREE.PointLight(info.color, 4, 5, 2)
    light.position.y = 1.0
    g.add(light)
    this.scene.add(g)
    this.items.push({ group: g, sprite, glow, ring, light, kind, t: 0, life: 26, phase: Math.random() * 6 })
  }

  update(dt, player) {
    for (let i = this.items.length - 1; i >= 0; i--) {
      const it = this.items[i]
      it.t += dt
      it.life -= dt
      it.group.position.y = Math.sin(it.t * 2.4 + it.phase) * 0.08
      it.sprite.position.y = 1.0 + Math.sin(it.t * 2.4 + it.phase) * 0.08
      it.glow.position.y = it.sprite.position.y
      it.ring.rotation.z += dt * 1.6
      it.ring.scale.setScalar(1 + Math.sin(it.t * 3) * 0.06)
      it.light.intensity = 3.5 + Math.sin(it.t * 4) * 1.2
      it.sprite.material.opacity = it.life < 4 ? Math.max(0.15, it.life / 4) : 1
      const d = Math.hypot(player.position.x - it.group.position.x, player.position.z - it.group.position.z)
      if (d < 1.4 && !player.dead) {
        this.game.applyPowerup(it.kind)
        this.scene.remove(it.group)
        this.items.splice(i, 1)
        continue
      }
      if (it.life <= 0) {
        this.scene.remove(it.group)
        this.items.splice(i, 1)
      }
    }
  }
}

class Game {
  constructor() {
    this.canvas = $('game')
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.045, 140)
    this.camera.rotation.order = 'YXZ'
    this.baseFov = isTouch ? 80 : 75
    this.camera.fov = this.baseFov
    this.scene.add(this.camera)
    const fill = new THREE.PointLight(0xffe2b8, 1.25, 4, 2)
    fill.position.set(0, 0.12, -0.25)
    this.camera.add(fill)

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas, antialias: true, powerPreference: 'high-performance', stencil: false,
    })
    this.renderer.setPixelRatio(Math.min(devicePixelRatio || 1, isTouch ? 1.3 : 1.6))
    this.renderer.setSize(innerWidth, innerHeight)
    this.renderer.shadowMap.enabled = !isTouch
    this.renderer.shadowMap.type = THREE.PCFShadowMap
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.28
    this.renderer.outputColorSpace = THREE.SRGBColorSpace

    this.composer = new EffectComposer(this.renderer)
    this.composer.addPass(new RenderPass(this.scene, this.camera))
    this.bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.55, 0.55, 0.78)
    this.composer.addPass(this.bloom)
    this.composer.addPass(new OutputPass())
    this.bloomEnabled = true

    this.audio = new SoundEngine()
    this.particles = new Particles(this.scene, 1100, false)
    this.additive = new Particles(this.scene, 1000, true)
    this.world = new World(this.scene, this.particles, this.additive)
    this.decals = new Decals(this.scene, this.world.bloodTex, 48)
    this.nav = new NavGrid({ minX: -10.5, maxX: 10.5, minZ: -9.5, maxZ: 15.5 }, 0.5, this.world.navBlockers, 0.34)

    this.player = {
      position: new THREE.Vector3(0, 0, 5.6),
      velocity: new THREE.Vector3(),
      yaw: 0, pitch: -0.02,
      height: 1.68,
      health: 100, maxHealth: 100,
      lastDamage: -99,
      dead: false,
      sprinting: false,
      moving: false,
      bobT: 0,
      radius: 0.33,
    }
    this.lookDelta = new THREE.Vector2()
    this.recoilPitch = 0
    this.recoilYaw = 0
    this.shake = 0
    this.damageFlash = 0
    this.heartT = 0

    this.weapons = new WeaponSystem(this.camera, this.audio)
    this.zombies = new ZombieManager(
      this.scene, this.nav, this.world, this.audio, this.particles, this.additive, this.decals,
      {
        onKill: (z, head) => this.onKill(z, head),
        onPlayerDamage: (dmg, z) => this.onPlayerDamage(dmg, z),
        onNuke: () => this.onNuke(),
      }
    )
    this.powerups = new PowerupManager(this.scene, this.audio, this)

    this.state = 'menu'
    this.round = 1
    this.roundState = 'idle'
    this.roundClearT = 0
    this.points = 500
    this.stats = { kills: 0, headshots: 0, shots: 0, hits: 0 }
    this.instaT = 0
    this.doubleT = 0
    this.nuking = false
    this.boxT = 0
    this.repairCd = 0
    this.tracers = []
    this.time = 0
    this.menuT = 0
    this.fpsAccum = 0
    this.fpsFrames = 0
    this.lowFpsT = 0
    this.qualityReduced = false
    this.bannerTimer = null
    this.promptKey = ''
    this.toasts = []

    this.keys = {}
    this.fireHeld = false
    this.firePressed = false
    this.adsHeld = false
    this.interactHeld = false
    this.interactPressed = false
    this.lookLocked = false
    this.sensitivity = 1
    this.touchMove = new THREE.Vector2()
    this.touchLookId = null
    this.lastTouch = new THREE.Vector2()

    this.bindUI()
    this.bindInput()
    this.resize()
    addEventListener('resize', () => this.resize())

    this.clockLast = performance.now()
    this.loop = this.loop.bind(this)
    requestAnimationFrame(this.loop)

    if (isTouch) document.body.classList.add('touch')
    setTimeout(() => {
      $('loading').classList.add('done')
      document.body.classList.add('menu-open')
    }, 850)
  }

  bindUI() {
    $('deploy').addEventListener('click', () => {
      this.audio.init()
      this.audio.startAmbient()
      this.startGame()
    })
    $('resume').addEventListener('click', () => this.resume())
    $('retry').addEventListener('click', () => {
      $('gameover').classList.add('hidden')
      this.startGame()
    })
    $('menu-return').addEventListener('click', () => {
      $('gameover').classList.add('hidden')
      this.toMenu()
    })
    $('quit').addEventListener('click', () => {
      $('pause').classList.add('hidden')
      this.toMenu()
    })
    const sens = $('sens')
    sens.addEventListener('input', () => {
      this.sensitivity = Number(sens.value)
      $('sens-out').textContent = Number(sens.value).toFixed(2)
    })

    // touch
    const stick = $('stick-base')
    const knob = $('stick-knob')
    let stickId = null
    const stickMove = (e) => {
      const r = stick.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      let dx = e.clientX - cx
      let dy = e.clientY - cy
      const max = r.width * 0.36
      const d = Math.hypot(dx, dy)
      if (d > max) { dx = (dx / d) * max; dy = (dy / d) * max }
      knob.style.transform = `translate(${dx}px, ${dy}px)`
      this.touchMove.set(dx / max, dy / max)
    }
    stick.addEventListener('pointerdown', (e) => {
      e.preventDefault()
      stickId = e.pointerId
      stick.setPointerCapture(e.pointerId)
      stickMove(e)
    })
    stick.addEventListener('pointermove', (e) => {
      if (e.pointerId === stickId) stickMove(e)
    })
    const stickEnd = (e) => {
      if (e.pointerId !== stickId) return
      stickId = null
      this.touchMove.set(0, 0)
      knob.style.transform = ''
    }
    stick.addEventListener('pointerup', stickEnd)
    stick.addEventListener('pointercancel', stickEnd)

    const look = $('look-zone')
    look.addEventListener('pointerdown', (e) => {
      if (this.touchLookId !== null) return
      this.touchLookId = e.pointerId
      this.lastTouch.set(e.clientX, e.clientY)
      look.setPointerCapture(e.pointerId)
    })
    look.addEventListener('pointermove', (e) => {
      if (e.pointerId !== this.touchLookId) return
      const dx = e.clientX - this.lastTouch.x
      const dy = e.clientY - this.lastTouch.y
      this.lastTouch.set(e.clientX, e.clientY)
      this.player.yaw -= dx * 0.0042 * this.sensitivity
      this.player.pitch -= dy * 0.0036 * this.sensitivity
      this.player.pitch = clamp(this.player.pitch, -1.42, 1.42)
      this.lookDelta.x += dx
      this.lookDelta.y += dy
    })
    const lookEnd = (e) => {
      if (e.pointerId === this.touchLookId) this.touchLookId = null
    }
    look.addEventListener('pointerup', lookEnd)
    look.addEventListener('pointercancel', lookEnd)

    const holdBtn = (id, down, up) => {
      const b = $(id)
      b.addEventListener('pointerdown', (e) => { e.preventDefault(); b.classList.add('on'); down() })
      const end = (e) => { e.preventDefault(); b.classList.remove('on'); up && up() }
      b.addEventListener('pointerup', end)
      b.addEventListener('pointercancel', end)
      b.addEventListener('pointerleave', (e) => { if (e.buttons) end(e) })
    }
    $('btn-pause').addEventListener('click', (e) => {
      e.preventDefault()
      this.pause()
    })
    holdBtn('btn-fire', () => { this.fireHeld = true; this.firePressed = true }, () => { this.fireHeld = false })
    holdBtn('btn-ads', () => { this.adsHeld = !this.adsHeld; $('btn-ads').classList.toggle('on', this.adsHeld) })
    holdBtn('btn-reload', () => { this.weapons.startReload() })
    holdBtn('btn-use', () => { this.interactPressed = true })
    holdBtn('btn-swap', () => { this.weapons.swap() })

    this.canvas.addEventListener('click', () => {
      if (this.state === 'playing' && !isTouch && !this.lookLocked) this.requestLock()
    })
    document.addEventListener('pointerlockchange', () => {
      this.lookLocked = document.pointerLockElement === this.canvas
      if (!this.lookLocked && this.state === 'playing' && !isTouch) this.pause()
    })
  }

  bindInput() {
    document.addEventListener('keydown', (e) => {
      const k = e.key.toLowerCase()
      if (['w', 'a', 's', 'd', ' ', 'shift', 'r', 'f', 'q', 'e', '1', '2', 'escape'].includes(k)) e.preventDefault()
      if (this.keys[k]) {
        if (k === 'f') this.interactHeld = true
        return
      }
      this.keys[k] = true
      if (k === 'f') { this.interactPressed = true; this.interactHeld = true }
      if (k === 'r') this.weapons.startReload()
      if (k === 'q') this.weapons.swap()
      if (k === '1') this.weapons.select(0)
      if (k === '2' && this.weapons.inventory.length > 1) this.weapons.select(1)
      if (k === 'm') {
        this.muted = !this.muted
        this.audio.setEnabled(!this.muted)
        this.toast(this.muted ? 'AUDIO MUTED' : 'AUDIO ON')
      }
      if (k === 'escape') {
        if (this.state === 'playing' && isTouch) this.pause()
        else if (this.state === 'paused') this.resume()
      }
    })
    document.addEventListener('keyup', (e) => {
      const k = e.key.toLowerCase()
      this.keys[k] = false
      if (k === 'f') this.interactHeld = false
    })
    addEventListener('blur', () => { this.keys = {}; this.fireHeld = false; this.adsHeld = false })
    this.canvas.addEventListener('mousedown', (e) => {
      if (this.state !== 'playing') return
      if (!isTouch && !this.lookLocked) { this.requestLock(); return }
      if (e.button === 0) { this.fireHeld = true; this.firePressed = true }
      if (e.button === 2) this.adsHeld = true
    })
    addEventListener('mouseup', (e) => {
      if (e.button === 0) this.fireHeld = false
      if (e.button === 2) this.adsHeld = false
    })
    this.canvas.addEventListener('contextmenu', (e) => e.preventDefault())
    document.addEventListener('mousemove', (e) => {
      if (!this.lookLocked || this.state !== 'playing') return
      const dx = e.movementX || 0
      const dy = e.movementY || 0
      this.player.yaw -= dx * 0.0022 * this.sensitivity
      this.player.pitch -= dy * 0.0022 * this.sensitivity
      this.player.pitch = clamp(this.player.pitch, -1.42, 1.42)
      this.lookDelta.x += dx
      this.lookDelta.y += dy
    })
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.state === 'playing') this.pause()
    })
  }

  requestLock() {
    if (isTouch) return
    const p = this.canvas.requestPointerLock?.()
    if (p && p.catch) p.catch(() => {})
  }

  resize() {
    const w = innerWidth
    const h = innerHeight
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(w, h)
    this.composer.setSize(w, h)
    this.bloom.resolution.set(w, h)
    this.particles.resize(h * this.renderer.getPixelRatio())
    this.additive.resize(h * this.renderer.getPixelRatio())
  }

  startGame() {
    this.audio.init()
    this.audio.resume()
    this.audio.startAmbient()
    this.resetRun()
    this.state = 'playing'
    this.weapons.holder.visible = true
    this.player.dead = false
    $('menu').classList.add('hidden')
    $('pause').classList.add('hidden')
    $('gameover').classList.add('hidden')
    $('hud').classList.remove('hidden')
    if (isTouch) $('touch').classList.remove('hidden')
    document.body.classList.remove('menu-open')
    document.body.classList.add('playing')
    this.round = 1
    this.beginRound(1)
    this.requestLock()
    this.clockLast = performance.now()
  }

  resetRun() {
    this.world.reset()
    this.nav.setBlockers(this.world.navBlockers)
    this.zombies.reset()
    this.powerups.clear()
    this.weapons.reset()
    this.particles.clear?.()
    for (const t of this.tracers) this.scene.remove(t.line)
    this.tracers = []
    this.points = 500
    this.stats = { kills: 0, headshots: 0, shots: 0, hits: 0 }
    this.instaT = 0
    this.doubleT = 0
    this.boxT = 0
    this.repairCd = 0
    this.recoilPitch = 0
    this.recoilYaw = 0
    this.shake = 0
    this.damageFlash = 0
    const p = this.player
    p.position.set(0, 0, 5.6)
    p.velocity.set(0, 0, 0)
    p.yaw = 0
    p.pitch = -0.02
    p.health = 100
    p.dead = false
    p.lastDamage = -99
    p.bobT = 0
    this.roundState = 'active'
    this.roundClearT = 0
    this.updateHud()
  }

  toMenu() {
    this.state = 'menu'
    this.weapons.holder.visible = false
    this.zombies.roundActive = false
    this.zombies.reset()
    this.powerups.clear()
    this.world.reset()
    this.nav.setBlockers(this.world.navBlockers)
    this.weapons.reset()
    this.particles.clear?.()
    for (const t of this.tracers) this.scene.remove(t.line)
    this.tracers = []
    $('hud').classList.add('hidden')
    $('touch').classList.add('hidden')
    $('gameover').classList.add('hidden')
    $('pause').classList.add('hidden')
    $('menu').classList.remove('hidden')
    document.body.classList.add('menu-open')
    document.body.classList.remove('playing')
    if (document.pointerLockElement) document.exitPointerLock()
    this.audio.stopAmbient()
    this.menuT = 0
  }

  beginRound(n) {
    this.round = n
    this.roundState = 'active'
    this.zombies.startRound(n)
    this.zombies.spawnTimer = n === 1 ? 2.4 : 1.7
    this.audio.roundStart(n)
    this.showBanner('SURVIVE', `ROUND ${n}`, ROUND_LINES[(n - 1) % ROUND_LINES.length])
    this.updateHud()
  }

  pause() {
    if (this.state !== 'playing') return
    this.state = 'paused'
    $('pause').classList.remove('hidden')
    if (document.pointerLockElement) document.exitPointerLock()
    this.fireHeld = false
    this.adsHeld = false
  }

  resume() {
    if (this.state !== 'paused') return
    this.state = 'playing'
    $('pause').classList.add('hidden')
    this.requestLock()
    this.clockLast = performance.now()
  }

  showBanner(kicker, title, sub, hold = false) {
    $('banner-kicker').textContent = kicker
    const t = $('banner-title')
    t.textContent = title
    t.classList.toggle('blood', title.includes('DEAD') || title.includes('DIED') || title.includes('FALL'))
    $('banner-sub').textContent = sub || ''
    const b = $('banner')
    b.classList.remove('show', 'hold')
    void b.offsetWidth
    b.classList.add('show')
    if (hold) b.classList.add('hold')
    clearTimeout(this.bannerTimer)
    this.bannerTimer = setTimeout(() => b.classList.remove('show', 'hold'), hold ? 5600 : 3800)
  }

  toast(text, red = false) {
    const el = document.createElement('div')
    el.className = 'toast' + (red ? ' red' : '')
    el.textContent = text
    $('toast-stack').appendChild(el)
    setTimeout(() => {
      el.style.opacity = '0'
      el.style.transition = 'opacity 0.3s'
      setTimeout(() => el.remove(), 320)
    }, 2300)
  }

  addPoints(n, pos) {
    const amount = Math.round(n * (this.doubleT > 0 ? 2 : 1))
    this.points += amount
    const el = $('points')
    el.textContent = this.points
    el.classList.remove('bump')
    void el.offsetWidth
    el.classList.add('bump')
    setTimeout(() => el.classList.remove('bump'), 110)
    if (pos && this.additive) {
      this.additive.spawn(pos.x, 1.75, pos.z, 0, 0.7, 0, {
        color: new THREE.Color(1, 0.82, 0.4), size: 0.03, life: 0.45, gravity: 0.2, drag: 0.96, alpha: 0.9,
      })
    }
  }

  spend(n) {
    if (this.points < n) return false
    this.points -= n
    $('points').textContent = this.points
    return true
  }

  applyPowerup(kind) {
    const info = POWERUPS[kind]
    this.audio.powerup(kind)
    this.toast(info.name + ' — ' + info.sub)
    if (kind === 'maxammo') {
      for (const w of this.weapons.inventory) {
        w.reserve = w.def.reserveMax
        w.mag = w.def.magSize
      }
    } else if (kind === 'insta') {
      this.instaT = 30
    } else if (kind === 'double') {
      this.doubleT = 30
    } else if (kind === 'nuke') {
      this.nuking = true
      this.zombies.nuke()
      this.nuking = false
      const f = $('flash')
      f.style.transition = 'none'
      f.style.opacity = '0.95'
      requestAnimationFrame(() => {
        f.style.transition = 'opacity 0.9s ease-out'
        f.style.opacity = '0'
      })
    }
    this.updateHud()
  }

  onKill(z, isHead) {
    this.stats.kills++
    if (isHead) this.stats.headshots++
    this.addPoints(isHead ? 100 : 60, z.group.position)
    if (!this.nuking) this.powerups.maybeDrop(z.group.position)
    this.showHitmarker(true, isHead)
  }

  onNuke() {
    this.addPoints(400)
    this.toast('KABOOM — 400 BONUS')
  }

  onPlayerDamage(dmg, z) {
    if (this.state !== 'playing' || this.player.dead) return
    const p = this.player
    p.health -= dmg
    p.lastDamage = 0
    this.damageFlash = 1
    this.shake = Math.min(0.22, this.shake + 0.11)
    this.audio.hurt()
    if (p.health <= 0) {
      p.health = 0
      this.playerDie()
    }
    this.updateHud()
  }

  playerDie() {
    if (this.player.dead) return
    this.player.dead = true
    this.state = 'dying'
    this.zombies.roundActive = false
    this.audio.death()
    this.deathT = 0
    this.fireHeld = false
    this.adsHeld = false
    $('damage-vignette').style.opacity = '0.95'
    if (document.pointerLockElement) document.exitPointerLock()
  }

  showGameOver() {
    this.state = 'gameover'
    $('go-round').textContent = this.round
    $('go-kills').textContent = this.stats.kills
    $('go-headshots').textContent = this.stats.headshots
    $('go-points').textContent = this.points
    $('gameover').classList.remove('hidden')
    $('hud').classList.add('hidden')
    $('touch').classList.add('hidden')
    document.body.classList.remove('playing')
  }

  showHitmarker(kill, head) {
    const hm = $('hitmarker')
    hm.classList.remove('show', 'kill', 'head')
    void hm.offsetWidth
    if (kill) hm.classList.add('kill')
    if (head) hm.classList.add('head')
    hm.classList.add('show')
  }

  updateHud() {
    const ammo = this.weapons.currentAmmo()
    $('ammo-mag').textContent = ammo.mag
    $('ammo-reserve').textContent = ammo.reserve
    $('weapon-name').textContent = ammo.name
    $('ammo-mag').classList.toggle('low', ammo.mag <= Math.max(1, Math.floor(this.weapons.def.magSize * 0.25)))
    $('points').textContent = this.points
    $('round-number').textContent = this.round
    const slots = document.querySelectorAll('#weapon-slots .slot')
    slots.forEach((s, i) => {
      s.classList.toggle('active', i === this.weapons.current)
      s.style.opacity = this.weapons.inventory[i] ? '1' : '0.3'
    })
    const hp = clamp(this.player.health / this.player.maxHealth, 0, 1)
    $('health-fill').style.width = (hp * 100) + '%'
    $('health-fill').style.background = hp < 0.35 ? 'linear-gradient(90deg,#a11212,#e0442c)' : 'linear-gradient(90deg,#6d1712,#c0432f)'
    // round tally
    const tally = $('round-tally')
    if (tally.dataset.round !== String(this.round)) {
      tally.dataset.round = String(this.round)
      let html = ''
      const marks = Math.min(12, Math.max(1, Math.ceil(this.round / 2)))
      for (let i = 0; i < 12; i++) html += `<i class="${i < marks ? 'hot' : ''}"></i>`
      tally.innerHTML = html
    }
    const active = this.instaT > 0 ? 'insta' : this.doubleT > 0 ? 'double' : null
    if (active) {
      $('powerup-hud').classList.remove('hidden')
      const info = POWERUPS[active]
      $('pu-icon').textContent = info.hud
      $('pu-name').textContent = info.name
      const remain = active === 'insta' ? this.instaT : this.doubleT
      $('pu-timer-fill').style.width = clamp(remain / 30, 0, 1) * 100 + '%'
    } else {
      $('powerup-hud').classList.add('hidden')
    }
    $('objective-count').textContent = this.zombies.roundActive ? `${this.zombies.remaining} REMAIN` : ''
  }

  updateInteraction(dt) {
    const p = this.player
    let prompt = null
    let action = null
    let price = 0

    // window repair
    let nearWindow = null
    for (const w of this.world.windows) {
      const d = Math.hypot(p.position.x - w.center.x, p.position.z - w.center.z)
      if (d < 2.9 && w.boards < w.maxBoards) { nearWindow = w; break }
    }
    if (nearWindow) {
      prompt = 'REBUILD BARRIER'
      price = '+10'
      action = 'repair'
    } else if (this.world.door && !this.world.door.open) {
      const d = Math.hypot(p.position.x - 5.1, p.position.z - 8.3)
      if (d < 2.4) { prompt = 'OPEN THE ARMORY'; price = '750'; action = 'door' }
    }
    if (!prompt && this.boxT <= 0) {
      const d = Math.hypot(p.position.x - 7.0, p.position.z - 12.5)
      if (d < 2.5) { prompt = 'MYSTERY BOX'; price = '950'; action = 'box' }
    }
    if (!prompt) {
      const b = this.world.nearestBuy(p.position)
      if (b) {
        const owned = this.weapons.hasWeapon(b.id)
        const ammoPrice = Math.round(b.price * 0.5)
        prompt = owned ? 'BUY AMMO — ' + b.name : 'BUY ' + b.name
        price = owned ? ammoPrice : b.price
        action = 'buy'
        this.nearBuy = b
        this.nearBuyOwned = owned
        this.nearBuyPrice = price
      }
    }
    if (!prompt) { this.nearBuy = null; this.promptKey = '' }

    const key = prompt ? `${action}|${prompt}|${price}` : ''
    if (key !== this.promptKey) {
      this.promptKey = key
      const el = $('prompt')
      if (!prompt) {
        el.classList.add('hidden')
      } else {
        el.classList.remove('hidden')
        el.querySelector('.prompt-text').textContent = prompt
        el.querySelector('.prompt-price').textContent = price
        const numeric = Number(String(price).replace('+', ''))
        el.classList.toggle('denied', action !== 'repair' && this.points < numeric)
      }
    }
    if (prompt) {
      const el = $('prompt')
      const numeric = Number(String(price).replace('+', ''))
      el.classList.toggle('denied', action !== 'repair' && this.points < numeric)
      el.querySelector('.prompt-key').textContent = isTouch ? 'USE' : 'F'
    }

    // hold to repair
    this.repairCd = Math.max(0, this.repairCd - dt)
    if (action === 'repair' && (this.interactHeld || this.interactPressed) && this.repairCd <= 0) {
      if (this.world.repairBoard(nearWindow)) {
        this.repairCd = 0.55
        this.addPoints(10)
        this.audio.repair()
        this.particles.burst(nearWindow.center.clone().add(new THREE.Vector3(0, 1.6, 0)), nearWindow.normal, 5, {
          color: new THREE.Color(0.45, 0.34, 0.2), size: 0.035, life: 0.5, spread: 0.8, gravity: -6,
        })
      }
    }

    if (this.interactPressed && action && action !== 'repair') {
      if (action === 'door') {
        if (this.spend(750)) {
          this.world.openDoor()
          this.nav.setBlockers(this.world.navBlockers)
          this.audio.door()
          this.toast('ARMORY OPENED')
        } else this.toast('NOT ENOUGH POINTS', true)
      } else if (action === 'box') {
        if (this.spend(950)) {
          this.world.mysteryBox.open = true
          this.boxT = 1.5
          this.audio.box()
        } else this.toast('NOT ENOUGH POINTS', true)
      } else if (action === 'buy' && this.nearBuy) {
        const b = this.nearBuy
        if (this.nearBuyOwned) {
          const w = this.weapons.inventory.find((x) => x.id === b.id)
          if (w && w.reserve >= w.def.reserveMax) {
            this.toast('AMMO ALREADY FULL', true)
          } else if (this.spend(this.nearBuyPrice)) {
            w.reserve = w.def.reserveMax
            this.audio.purchase()
            this.toast('AMMO RESTOCKED')
          } else this.toast('NOT ENOUGH POINTS', true)
        } else {
          if (this.spend(b.price)) {
            this.weapons.addWeapon(b.id)
            this.audio.purchase()
            this.toast('ACQUIRED: ' + b.name)
            this.updateHud()
          } else this.toast('NOT ENOUGH POINTS', true)
        }
      }
    }
    this.interactPressed = false

    // mystery box reward
    if (this.boxT > 0) {
      this.boxT -= dt
      if (this.boxT <= 0) {
        const pool = ['mp40', 'thompson', 'trench', 'kar98k']
        if (Math.random() < 0.12) pool.push('wunder')
        const id = pool[Math.floor(Math.random() * pool.length)]
        this.weapons.addWeapon(id)
        this.toast('MYSTERY BOX: ' + WEAPONS[id].name)
        this.audio.powerup('insta')
        this.updateHud()
        setTimeout(() => { if (this.world.mysteryBox) this.world.mysteryBox.open = false }, 1200)
      }
    }
  }

  fireWeapon() {
    const def = this.weapons.def
    const w = this.weapons.tryFire()
    if (!w) return
    this.stats.shots++
    this.recoilPitch += def.kick * (this.weapons.adsAmount > 0.5 ? 0.7 : 1.2)
    this.recoilYaw += (Math.random() - 0.5) * def.kick * 0.8
    this.shake = Math.min(0.1, this.shake + def.kick * 0.6)

    const fwd = new THREE.Vector3()
    this.camera.getWorldDirection(fwd)
    const right = new THREE.Vector3().crossVectors(fwd, new THREE.Vector3(0, 1, 0)).normalize()
    const up = new THREE.Vector3().crossVectors(right, fwd).normalize()
    const spread = (this.weapons.adsAmount > 0.5 ? def.adsSpread : def.spread) +
      (this.player.moving ? 0.012 : 0) + (this.player.sprinting ? 0.02 : 0)

    const origin = this.camera.position.clone()
    const muzzle = new THREE.Vector3()
    if (this.weapons.view) this.weapons.view.muzzle.getWorldPosition(muzzle)
    else muzzle.copy(origin).addScaledVector(fwd, 0.5)

    let anyHit = false
    let anyKill = false
    let anyHead = false
    const raycaster = new THREE.Raycaster()
    const meshes = this.zombies.hitMeshes

    for (let i = 0; i < def.pellets; i++) {
      const dir = fwd.clone()
        .addScaledVector(right, (Math.random() - 0.5) * spread * 2)
        .addScaledVector(up, (Math.random() - 0.5) * spread * 2)
        .normalize()
      raycaster.set(origin, dir)
      raycaster.near = 0.05
      raycaster.far = def.range
      const hits = raycaster.intersectObjects(meshes, false)
      let end = origin.clone().addScaledVector(dir, def.range)
      if (hits.length) {
        const h = hits[0]
        const z = h.object.userData.zombie
        if (z && z.state !== 'dying' && z.state !== 'dead') {
          const part = h.object.userData.part || 'body'
          const isHead = part === 'head'
          let dmg = def.damage * (isHead ? def.headMult : part === 'limb' ? 0.76 : 1)
          if (this.instaT > 0) dmg = 999999
          anyHit = true
          end = h.point.clone()
          const killed = z.takeDamage(dmg, isHead, h.point, dir)
          if (killed) { anyKill = true; if (isHead) anyHead = true }
          this.addPoints(10, null)
          this.audio.hit(isHead)
          if (def.wonder) this.wunderSplash(h.point, z)
        }
      }
      const color = def.wonder ? 0x68ff8c : 0xffd9a0
      this.spawnTracer(muzzle, end, color)
    }

    if (anyHit) {
      this.stats.hits++
      this.showHitmarker(anyKill, anyHead)
    }
  }

  wunderSplash(point, source) {
    this.additive.burst(point, new THREE.Vector3(0, 1, 0), 34, {
      color: new THREE.Color(0.25, 1.0, 0.45), size: 0.14, life: 0.7, spread: 3.2, gravity: 0.2, drag: 0.92, alpha: 1,
    })
    for (const z of [...this.zombies.list]) {
      if (z === source || z.state === 'dying' || z.state === 'dead') continue
      const d = z.group.position.distanceTo(point)
      if (d < 3.4) {
        z.takeDamage(240, false, z.group.position.clone().setY(1.1), new THREE.Vector3(0, 1, 0))
      }
    }
  }

  spawnTracer(from, to, color = 0xffd9a0) {
    const geo = new THREE.BufferGeometry().setFromPoints([from, to])
    const mat = new THREE.LineBasicMaterial({
      color, transparent: true, opacity: 0.72, blending: THREE.AdditiveBlending, depthWrite: false,
    })
    const line = new THREE.Line(geo, mat)
    line.frustumCulled = false
    this.scene.add(line)
    this.tracers.push({ line, life: 0.055 })
  }

  updatePlayer(dt) {
    const p = this.player
    p.lastDamage += dt
    p.moving = false
    p.sprinting = false
    if (p.dead) return

    let f = 0
    let s = 0
    if (this.keys['w'] || this.keys['arrowup']) f += 1
    if (this.keys['s'] || this.keys['arrowdown']) f -= 1
    if (this.keys['d'] || this.keys['arrowright']) s += 1
    if (this.keys['a'] || this.keys['arrowleft']) s -= 1
    if (isTouch) { f += -this.touchMove.y; s += this.touchMove.x }
    const len = Math.hypot(f, s)
    if (len > 1) { f /= len; s /= len }
    const moving = len > 0.08
    p.moving = moving

    const ads = this.weapons.adsAmount > 0.5
    const sprint = (this.keys['shift'] || (isTouch && len > 0.9)) && f > 0.2 && !ads && !this.weapons.reloading
    p.sprinting = sprint
    const speed = sprint ? 6.1 : 4.15
    const sin = Math.sin(p.yaw)
    const cos = Math.cos(p.yaw)
    // forward = (-sin, -cos), right = (cos, -sin)
    const targetX = (-sin * f + cos * s) * speed
    const targetZ = (-cos * f - sin * s) * speed
    const accel = moving ? 14 : 18
    p.velocity.x += (targetX - p.velocity.x) * Math.min(1, dt * accel)
    p.velocity.z += (targetZ - p.velocity.z) * Math.min(1, dt * accel)
    if (Math.hypot(p.velocity.x, p.velocity.z) < 0.05) { p.velocity.x = 0; p.velocity.z = 0 }

    p.position.x += p.velocity.x * dt
    p.position.z += p.velocity.z * dt
    this.resolveCollisions()
    p.position.x = clamp(p.position.x, -10.2, 10.2)
    p.position.z = clamp(p.position.z, -9.2, 15.2)

    if (moving && !p.dead) {
      p.bobT += dt * (sprint ? 11.5 : 8.2)
      if (Math.sin(p.bobT) > 0.985) this.audio.footstep(sprint)
    }

    // health regen
    if (p.lastDamage > 4.4 && p.health < p.maxHealth) {
      p.health = Math.min(p.maxHealth, p.health + 20 * dt)
      this.updateHud()
    }
    // heartbeat
    if (p.health < 38 && p.health > 0) {
      this.heartT -= dt
      if (this.heartT <= 0) {
        this.heartT = 0.95
        this.audio.heartbeat(clamp(1 - p.health / 45, 0.3, 1))
      }
    }

    this.weapons.ads = this.adsHeld && !sprint
    this.weapons.update(dt, p, this.lookDelta)

    // shooting
    const def = this.weapons.def
    if (this.state === 'playing' && !p.dead) {
      if (def.auto ? this.fireHeld : this.firePressed) this.fireWeapon()
    }
    this.firePressed = false

    // recoil recovery
    this.recoilPitch *= Math.pow(0.002, dt)
    this.recoilYaw *= Math.pow(0.002, dt)
    this.shake = Math.max(0, this.shake - dt * 0.9)

    // fov
    const defAds = def.id === 'kar98k' ? 38 : def.id === 'wunder' ? 55 : 58
    let targetFov = this.baseFov
    if (ads) targetFov = defAds
    else if (sprint) targetFov = this.baseFov + 6
    this.camera.fov += (targetFov - this.camera.fov) * Math.min(1, dt * 10)
    this.camera.updateProjectionMatrix()

    // camera
    const bob = moving ? Math.sin(p.bobT) * (sprint ? 0.035 : 0.022) : 0
    const bobX = moving ? Math.cos(p.bobT * 0.5) * (sprint ? 0.02 : 0.012) : 0
    const roll = -s * 0.012 + (this.shake > 0 ? (Math.random() - 0.5) * this.shake : 0)
    this.camera.position.set(
      p.position.x + bobX + (this.shake > 0 ? (Math.random() - 0.5) * this.shake * 0.4 : 0),
      p.height + bob + (this.shake > 0 ? (Math.random() - 0.5) * this.shake * 0.3 : 0),
      p.position.z
    )
    this.camera.rotation.set(
      p.pitch + this.recoilPitch,
      p.yaw + this.recoilYaw,
      roll
    )
    this.lookDelta.multiplyScalar(0.82)
  }

  resolveCollisions() {
    const p = this.player
    const r = p.radius
    for (let iter = 0; iter < 2; iter++) {
      for (const c of this.world.colliders) {
        const cx = clamp(p.position.x, c.minX, c.maxX)
        const cz = clamp(p.position.z, c.minZ, c.maxZ)
        let dx = p.position.x - cx
        let dz = p.position.z - cz
        let d = Math.hypot(dx, dz)
        if (d < r) {
          if (d < 0.0001) {
            // center inside box: push out along shortest axis
            const left = p.position.x - c.minX
            const right = c.maxX - p.position.x
            const top = p.position.z - c.minZ
            const bottom = c.maxZ - p.position.z
            const m = Math.min(left, right, top, bottom)
            if (m === left) p.position.x = c.minX - r
            else if (m === right) p.position.x = c.maxX + r
            else if (m === top) p.position.z = c.minZ - r
            else p.position.z = c.maxZ + r
          } else {
            p.position.x = cx + (dx / d) * r
            p.position.z = cz + (dz / d) * r
          }
        }
      }
    }
  }

  updateTracers(dt) {
    for (let i = this.tracers.length - 1; i >= 0; i--) {
      const t = this.tracers[i]
      t.life -= dt
      t.line.material.opacity = Math.max(0, t.life / 0.055) * 0.72
      if (t.life <= 0) {
        this.scene.remove(t.line)
        t.line.geometry.dispose()
        t.line.material.dispose()
        this.tracers.splice(i, 1)
      }
    }
  }

  updateMenuCamera(dt) {
    this.menuT += dt
    const t = this.menuT
    const x = 1.8 + Math.sin(t * 0.12) * 0.5
    const z = 6.6 + Math.cos(t * 0.09) * 0.35
    this.camera.position.set(x, 1.78 + Math.sin(t * 0.17) * 0.03, z)
    this.camera.lookAt(-1.6, 1.48 + Math.sin(t * 0.11) * 0.06, -5.2)
    this.camera.fov = 72
    this.camera.updateProjectionMatrix()
  }

  update(dt) {
    this.time += dt
    if (this.state === 'menu') {
      this.weapons.holder.visible = false
      this.updateMenuCamera(dt)
      this.world.update(dt, this.time, this.player.position)
      this.particles.update(dt)
      this.additive.update(dt)
      this.decals.update(dt)
      this.updateTracers(dt)
      return
    }

    if (this.state === 'paused' || this.state === 'gameover') {
      this.world.update(dt * 0.2, this.time, this.player.position)
      this.particles.update(dt * 0.2)
      this.additive.update(dt * 0.2)
      this.decals.update(dt * 0.2)
      return
    }

    if (this.state === 'dying') {
      this.deathT += dt
      const t = Math.min(1, this.deathT / 1.4)
      this.camera.position.set(this.player.position.x, this.player.height * (1 - t) + 0.25, this.player.position.z)
      this.camera.rotation.set(this.player.pitch - t * 0.3, this.player.yaw, t * 1.1)
      this.zombies.update(dt, this.player)
      this.world.update(dt, this.time, this.player.position)
      this.particles.update(dt)
      this.additive.update(dt)
      this.decals.update(dt)
      this.updateTracers(dt)
      this.damageFlash = Math.max(0, this.damageFlash - dt * 0.5)
      $('damage-vignette').style.opacity = String(0.6 + this.damageFlash * 0.4)
      if (this.deathT > 1.6) this.showGameOver()
      return
    }

    // playing
    this.instaT = Math.max(0, this.instaT - dt)
    this.doubleT = Math.max(0, this.doubleT - dt)
    this.damageFlash = Math.max(0, this.damageFlash - dt * 2.6)
    $('damage-vignette').style.opacity = String(clamp((1 - this.player.health / this.player.maxHealth) * 0.7 + this.damageFlash * 0.35, 0, 0.92))

    this.updatePlayer(dt)
    this.updateInteraction(dt)
    this.zombies.update(dt, this.player)
    this.powerups.update(dt, this.player)
    this.world.update(dt, this.time, this.player.position)
    this.particles.update(dt)
    this.additive.update(dt)
    this.decals.update(dt)
    this.updateTracers(dt)
    this.updateHud()

    // crosshair spread
    const def = this.weapons.def
    const spread = (this.weapons.adsAmount > 0.5 ? def.adsSpread : def.spread)
    const chSpread = 8 + spread * 420 + (this.player.moving ? 7 : 0) + (this.player.sprinting ? 6 : 0)
    $('crosshair').style.setProperty('--spread', `${chSpread}px`)
    $('crosshair').style.opacity = this.weapons.adsAmount > 0.85 ? '0.35' : '1'

    // round flow
    if (this.zombies.roundComplete && this.roundState === 'active') {
      this.roundState = 'cleared'
      this.roundClearT = 5
      this.addPoints(100)
      this.audio.roundEnd()
      this.showBanner('SURVIVED', `ROUND ${this.round}`, 'THE HORDE FALLS BACK — FOR NOW', true)
      this.toast('ROUND CLEARED +100')
    } else if (this.roundState === 'cleared') {
      this.roundClearT -= dt
      if (this.roundClearT <= 0) this.beginRound(this.round + 1)
    }

    // adaptive quality
    this.fpsAccum += dt
    this.fpsFrames++
    if (this.fpsAccum > 1.5) {
      const fps = this.fpsFrames / this.fpsAccum
      this.fpsAccum = 0
      this.fpsFrames = 0
      if (fps < 30 && !this.qualityReduced) {
        this.lowFpsT++
        if (this.lowFpsT >= 2) {
          this.qualityReduced = true
          this.renderer.setPixelRatio(1)
          this.resize()
        }
      } else this.lowFpsT = 0
    }
  }

  render() {
    if (this.bloomEnabled) this.composer.render()
    else this.renderer.render(this.scene, this.camera)
  }

  loop(now) {
    requestAnimationFrame(this.loop)
    let dt = (now - this.clockLast) / 1000
    this.clockLast = now
    if (dt > 0.06) dt = 0.06
    if (dt < 0) dt = 0
    this.update(dt)
    this.render()
  }
}

const game = new Game()
window.__game = game
