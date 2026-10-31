import * as THREE from 'three'
import { buildViewModel } from './weaponModel.js'

export const WEAPONS = {
  m1911: {
    id: 'm1911', name: 'M1911', magSize: 8, reserveMax: 80, damage: 58, headMult: 2.6,
    rpm: 340, auto: false, spread: 0.012, adsSpread: 0.0018, reload: 1.25, pellets: 1,
    sound: 'pistol', kick: 0.014, range: 90, hip: [0.27, -0.245, -0.52], ads: [0, -0.145, -0.44],
  },
  kar98k: {
    id: 'kar98k', name: 'KAR98K', magSize: 5, reserveMax: 50, damage: 215, headMult: 2.4,
    rpm: 54, auto: false, spread: 0.0045, adsSpread: 0.0004, reload: 2.35, pellets: 1,
    sound: 'rifle', kick: 0.045, range: 120, bolt: 0.62, hip: [0.3, -0.27, -0.58], ads: [0, -0.135, -0.48],
  },
  mp40: {
    id: 'mp40', name: 'MP40', magSize: 32, reserveMax: 192, damage: 44, headMult: 2.2,
    rpm: 520, auto: true, spread: 0.024, adsSpread: 0.006, reload: 1.9, pellets: 1,
    sound: 'smg', kick: 0.009, range: 80, hip: [0.3, -0.27, -0.55], ads: [0, -0.14, -0.45],
  },
  thompson: {
    id: 'thompson', name: 'THOMPSON', magSize: 30, reserveMax: 180, damage: 52, headMult: 2.2,
    rpm: 620, auto: true, spread: 0.026, adsSpread: 0.007, reload: 2.1, pellets: 1,
    sound: 'smg', kick: 0.01, range: 80, hip: [0.3, -0.27, -0.55], ads: [0, -0.14, -0.45],
  },
  trench: {
    id: 'trench', name: 'TRENCH GUN', magSize: 6, reserveMax: 48, damage: 36, headMult: 1.7,
    rpm: 78, auto: false, spread: 0.06, adsSpread: 0.032, reload: 2.45, pellets: 8,
    sound: 'shotgun', kick: 0.038, range: 45, pump: 0.52, hip: [0.29, -0.26, -0.54], ads: [0, -0.14, -0.46],
  },
  wunder: {
    id: 'wunder', name: 'WUNDERSTRAHL', magSize: 3, reserveMax: 21, damage: 720, headMult: 1.3,
    rpm: 65, auto: false, spread: 0.002, adsSpread: 0.0008, reload: 2.7, pellets: 1,
    sound: 'wonder', kick: 0.05, range: 70, hip: [0.28, -0.24, -0.5], ads: [0, -0.14, -0.44], wonder: true,
  },
}

export class WeaponSystem {
  constructor(camera, audio) {
    this.camera = camera
    this.audio = audio
    this.holder = new THREE.Group()
    this.holder.position.set(0, 0, 0)
    camera.add(this.holder)
    this.viewLight = new THREE.PointLight(0xffc690, 1.9, 2.4, 2)
    this.viewLight.position.set(0.12, 0.16, 0.18)
    this.holder.add(this.viewLight)
    this.inventory = []
    this.current = 0
    this.view = null
    this.cooldown = 0
    this.reloading = false
    this.reloadT = 0
    this.reloadTotal = 0
    this.boltT = 0
    this.pumpT = 0
    this.switchT = 0
    this.ads = false
    this.adsAmount = 0
    this.recoil = 0
    this.recoilRot = 0
    this.flashT = 0
    this.bobT = 0
    this.swayX = 0
    this.swayY = 0
    this.lastLookX = 0
    this.lastLookY = 0
    this.addWeapon('m1911', true)
  }

  get weapon() { return this.inventory[this.current] || null }
  get def() { return this.weapon?.def || WEAPONS.m1911 }

  addWeapon(id, select = true, full = true) {
    const def = WEAPONS[id]
    if (!def) return null
    const inst = { id, def, mag: full ? def.magSize : 0, reserve: full ? def.reserveMax : 0 }
    let idx = this.inventory.findIndex((w) => w.id === id)
    if (idx === -1) {
      if (this.inventory.length < 2) {
        this.inventory.push(inst)
        idx = this.inventory.length - 1
      } else {
        idx = this.current
        this.inventory[idx] = inst
      }
    } else {
      // already owned -> refill
      this.inventory[idx].mag = def.magSize
      this.inventory[idx].reserve = def.reserveMax
    }
    if (select) this.select(idx)
    return this.inventory[idx]
  }

  hasWeapon(id) { return this.inventory.some((w) => w.id === id) }

  select(idx) {
    if (idx === this.current && this.view) return
    this.current = idx
    this.reloading = false
    this.reloadT = 0
    this.boltT = 0
    this.pumpT = 0
    this.switchT = 0.42
    if (this.view) this.holder.remove(this.view.group)
    this.view = buildViewModel(this.def.id)
    this.view.group.scale.setScalar(0.62)
    this.holder.add(this.view.group)
    this.view.group.position.set(...this.def.hip)
    this.view.group.visible = true
    this.applyWeaponMaterials()
  }

  applyWeaponMaterials() {}

  reset() {
    for (const child of [...this.holder.children]) {
      if (child !== this.viewLight) this.holder.remove(child)
    }
    this.inventory = []
    this.current = 0
    this.view = null
    this.cooldown = 0
    this.reloading = false
    this.reloadT = 0
    this.boltT = 0
    this.pumpT = 0
    this.switchT = 0
    this.ads = false
    this.adsAmount = 0
    this.recoil = 0
    this.recoilRot = 0
    this.addWeapon('m1911', true)
  }

  swap() {
    if (this.inventory.length < 2 || this.switchT > 0.15) return false
    this.select((this.current + 1) % this.inventory.length)
    return true
  }

  startReload() {
    const w = this.weapon
    if (!w || this.reloading || this.switchT > 0) return false
    if (w.mag >= w.def.magSize || w.reserve <= 0) return false
    this.reloading = true
    this.reloadT = 0
    this.reloadTotal = w.def.reload
    this.audio.reload(w.def.sound)
    return true
  }

  tryFire() {
    const w = this.weapon
    if (!w) return null
    if (this.cooldown > 0 || this.reloading || this.switchT > 0 || this.boltT > 0 || this.pumpT > 0) return null
    if (w.mag <= 0) {
      this.audio.dryFire()
      this.cooldown = 0.25
      return null
    }
    w.mag--
    this.cooldown = 60 / w.def.rpm
    this.recoil = Math.min(0.14, this.recoil + w.def.kick * 3.2)
    this.recoilRot = Math.min(0.22, this.recoilRot + w.def.kick * 2.6)
    this.flashT = 0.055
    this.audio.shot(w.def.sound)
    if (w.def.bolt) this.boltT = w.def.bolt
    if (w.def.pump) this.pumpT = w.def.pump
    return w
  }

  reloadFinished() {
    const w = this.weapon
    if (!w) return
    const need = w.def.magSize - w.mag
    const take = Math.min(need, w.reserve)
    w.mag += take
    w.reserve -= take
  }

  update(dt, player, lookDelta) {
    const w = this.weapon
    if (!w) return
    this.cooldown = Math.max(0, this.cooldown - dt)
    this.boltT = Math.max(0, this.boltT - dt)
    this.pumpT = Math.max(0, this.pumpT - dt)
    this.flashT = Math.max(0, this.flashT - dt)
    this.switchT = Math.max(0, this.switchT - dt)
    this.recoil *= Math.pow(0.0009, dt)
    this.recoilRot *= Math.pow(0.0006, dt)

    if (this.reloading) {
      this.reloadT += dt
      if (this.reloadT >= this.reloadTotal) {
        this.reloading = false
        this.reloadFinished()
      }
    }

    const adsTarget = this.ads && !this.reloading && this.switchT <= 0 ? 1 : 0
    this.adsAmount += (adsTarget - this.adsAmount) * Math.min(1, dt * 13)

    // sway from look movement
    this.swayX += (-lookDelta.x * 0.0009 - this.swayX) * Math.min(1, dt * 9)
    this.swayY += (-lookDelta.y * 0.0009 - this.swayY) * Math.min(1, dt * 9)
    this.swayX = THREE.MathUtils.clamp(this.swayX, -0.035, 0.035)
    this.swayY = THREE.MathUtils.clamp(this.swayY, -0.03, 0.03)

    const speed = Math.hypot(player.velocity.x, player.velocity.z)
    const moving = speed > 0.4
    if (moving) this.bobT += dt * (player.sprinting ? 12.5 : 8.5)
    const bobAmt = moving ? (player.sprinting ? 0.017 : 0.01) : 0
    const bobX = Math.cos(this.bobT) * bobAmt * (1 - this.adsAmount * 0.8)
    const bobY = Math.abs(Math.sin(this.bobT)) * bobAmt * (1 - this.adsAmount * 0.8)

    const hip = w.def.hip
    const ads = w.def.ads
    const a = this.adsAmount
    const aspect = this.camera.aspect || 1.6
    const hipX = hip[0] * THREE.MathUtils.clamp(aspect / 1.4, 0.25, 1)
    const viewScale = aspect < 0.8 ? 0.5 : 0.62
    if (Math.abs(this.view.group.scale.x - viewScale) > 0.001) this.view.group.scale.setScalar(viewScale)
    let px = THREE.MathUtils.lerp(hipX, ads[0], a) + this.swayX + bobX
    let py = THREE.MathUtils.lerp(hip[1], ads[1], a) + this.swayY + bobY - (aspect < 0.8 ? 0.025 : 0)
    let pz = THREE.MathUtils.lerp(hip[2], ads[2], a) + this.recoil * 0.55

    let rx = this.recoilRot * 0.7
    let ry = this.swayX * 1.6
    let rz = 0

    // reload animation
    if (this.reloading) {
      const t = Math.min(1, this.reloadT / this.reloadTotal)
      const k = Math.sin(Math.min(1, t * 1.25) * Math.PI)
      py -= k * 0.16
      rx += k * 0.55
      rz += k * 0.22
      pz += k * 0.06
    }
    // switching
    if (this.switchT > 0) {
      const k = Math.sin((this.switchT / 0.42) * Math.PI)
      py -= k * 0.3
      rx += k * 0.4
    }
    // bolt / pump
    if (this.boltT > 0) {
      const k = Math.sin((1 - this.boltT / w.def.bolt) * Math.PI)
      rz += k * 0.16
      ry += k * 0.1
      if (this.view.boltPart) this.view.boltPart.rotation.z = -0.5 + k * 0.9
    } else if (this.view.boltPart) {
      this.view.boltPart.rotation.z = -0.5
    }
    if (this.pumpT > 0) {
      const k = Math.sin((1 - this.pumpT / w.def.pump) * Math.PI)
      pz += k * 0.07
      rx += k * 0.1
      if (this.view.pumpPart) this.view.pumpPart.position.z = -0.48 + k * 0.12
    } else if (this.view.pumpPart) {
      this.view.pumpPart.position.z = -0.48
    }

    const g = this.view.group
    g.position.set(px, py, pz)
    g.rotation.set(rx, ry, rz)

    // muzzle flash
    const fs = this.view.flashSprite
    if (this.flashT > 0) {
      fs.material.opacity = Math.min(1, this.flashT / 0.03)
      fs.scale.setScalar(0.26 + Math.random() * 0.28)
      fs.material.rotation = Math.random() * Math.PI * 2
      this.view.flashLight.intensity = 7
    } else {
      fs.material.opacity = 0
      this.view.flashLight.intensity = 0
    }
  }

  currentAmmo() {
    const w = this.weapon
    return w ? { mag: w.mag, reserve: w.reserve, name: w.def.name, id: w.id } : { mag: 0, reserve: 0, name: '', id: '' }
  }
}
