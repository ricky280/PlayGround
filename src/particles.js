import * as THREE from 'three'

const VERT = /* glsl */`
  attribute float aSize;
  attribute float aAlpha;
  attribute vec3 aColor;
  varying float vAlpha;
  varying vec3 vColor;
  uniform float uHeight;
  void main() {
    vColor = aColor;
    vAlpha = aAlpha;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = clamp(aSize * uHeight * 0.42 / max(0.2, -mv.z), 1.0, 120.0);
    gl_Position = projectionMatrix * mv;
  }
`

const FRAG = /* glsl */`
  varying float vAlpha;
  varying vec3 vColor;
  void main() {
    vec2 p = gl_PointCoord - 0.5;
    float d = length(p);
    if (d > 0.5) discard;
    float a = vAlpha * smoothstep(0.5, 0.08, d);
    gl_FragColor = vec4(vColor, a);
  }
`

export class Particles {
  constructor(scene, max = 900, additive = false) {
    this.max = max
    this.scene = scene
    this.cursor = 0
    this.pos = new Float32Array(max * 3)
    this.vel = new Float32Array(max * 3)
    this.col = new Float32Array(max * 3)
    this.size = new Float32Array(max)
    this.alpha = new Float32Array(max)
    this.life = new Float32Array(max)
    this.maxLife = new Float32Array(max)
    this.grav = new Float32Array(max)
    this.drag = new Float32Array(max)
    this.baseSize = new Float32Array(max)
    this.fadePow = new Float32Array(max)
    for (let i = 0; i < max; i++) this.pos[i * 3 + 1] = -999

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage))
    geo.setAttribute('aColor', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage))
    geo.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage))
    geo.setAttribute('aAlpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage))
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 2, 0), 40)

    this.material = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms: { uHeight: { value: 900 } },
      transparent: true,
      depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    })
    this.points = new THREE.Points(geo, this.material)
    this.points.frustumCulled = false
    this.points.renderOrder = additive ? 3 : 2
    scene.add(this.points)
    this.geo = geo
  }

  resize(height) {
    this.material.uniforms.uHeight.value = height
  }

  spawn(x, y, z, vx, vy, vz, opt = {}) {
    const i = this.cursor
    this.cursor = (this.cursor + 1) % this.max
    const i3 = i * 3
    this.pos[i3] = x; this.pos[i3 + 1] = y; this.pos[i3 + 2] = z
    this.vel[i3] = vx; this.vel[i3 + 1] = vy; this.vel[i3 + 2] = vz
    const c = opt.color || new THREE.Color(0.7, 0.05, 0.04)
    this.col[i3] = c.r; this.col[i3 + 1] = c.g; this.col[i3 + 2] = c.b
    const s = opt.size ?? 0.07
    this.size[i] = s
    this.baseSize[i] = s
    this.alpha[i] = opt.alpha ?? 1
    this.maxLife[i] = opt.life ?? 0.7
    this.life[i] = this.maxLife[i]
    this.grav[i] = opt.gravity ?? -9.5
    this.drag[i] = opt.drag ?? 0.86
    this.fadePow[i] = opt.fadePow ?? 1.4
  }

  burst(position, normal, count, opt = {}) {
    const color = opt.color || new THREE.Color(0.55, 0.03, 0.03)
    for (let i = 0; i < count; i++) {
      const spread = opt.spread ?? 1.2
      let vx = (Math.random() - 0.5) * spread + (normal?.x || 0) * (opt.push ?? 1.5)
      let vy = Math.random() * spread * 0.9 + 0.5 + (normal?.y || 0) * (opt.push ?? 1.5)
      let vz = (Math.random() - 0.5) * spread + (normal?.z || 0) * (opt.push ?? 1.5)
      const c = color.clone().offsetHSL(0, (Math.random() - 0.5) * 0.12, (Math.random() - 0.5) * 0.16)
      this.spawn(
        position.x + (Math.random() - 0.5) * 0.12,
        position.y + (Math.random() - 0.5) * 0.12,
        position.z + (Math.random() - 0.5) * 0.12,
        vx, vy, vz,
        {
          color: c,
          size: (opt.size ?? 0.07) * (0.5 + Math.random()),
          life: (opt.life ?? 0.75) * (0.55 + Math.random() * 0.8),
          gravity: opt.gravity ?? -9.5,
          drag: opt.drag ?? 0.9,
          alpha: opt.alpha ?? 0.95,
          fadePow: 1.1,
        }
      )
    }
  }

  update(dt) {
    const { max, pos, vel, life, maxLife, size, baseSize, alpha, grav, drag } = this
    for (let i = 0; i < max; i++) {
      if (life[i] <= 0) {
        if (alpha[i] !== 0) alpha[i] = 0
        continue
      }
      life[i] -= dt
      if (life[i] <= 0) {
        alpha[i] = 0
        pos[i * 3 + 1] = -999
        continue
      }
      const i3 = i * 3
      vel[i3 + 1] += grav[i] * dt
      const d = Math.pow(drag[i], dt * 60)
      vel[i3] *= d
      vel[i3 + 1] *= d
      vel[i3 + 2] *= d
      pos[i3] += vel[i3] * dt
      pos[i3 + 1] += vel[i3 + 1] * dt
      pos[i3 + 2] += vel[i3 + 2] * dt
      if (pos[i3 + 1] < 0.03) {
        pos[i3 + 1] = 0.03
        vel[i3 + 1] *= -0.18
        vel[i3] *= 0.6
        vel[i3 + 2] *= 0.6
      }
      const t = life[i] / maxLife[i]
      alpha[i] = Math.pow(t, this.fadePow[i])
      size[i] = baseSize[i] * (0.6 + t * 0.6)
    }
    this.geo.attributes.position.needsUpdate = true
    this.geo.attributes.aColor.needsUpdate = true
    this.geo.attributes.aSize.needsUpdate = true
    this.geo.attributes.aAlpha.needsUpdate = true
  }
}

export class Decals {
  constructor(scene, texture, max = 42) {
    this.scene = scene
    this.texture = texture
    this.max = max
    this.items = []
    this.cursor = 0
    this.geo = new THREE.PlaneGeometry(1, 1)
  }

  add(x, y, z, scale = 1, rot = Math.random() * Math.PI * 2, opacity = 0.85) {
    let mesh
    if (this.items.length < this.max) {
      const mat = new THREE.MeshBasicMaterial({
        map: this.texture, transparent: true, depthWrite: false,
        opacity, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4,
      })
      mesh = new THREE.Mesh(this.geo, mat)
      this.items.push({ mesh, life: 30 })
      this.scene.add(mesh)
    } else {
      const it = this.items[this.cursor]
      this.cursor = (this.cursor + 1) % this.max
      mesh = it.mesh
      it.life = 30
      mesh.material.opacity = opacity
      mesh.visible = true
    }
    mesh.position.set(x, y, z)
    mesh.rotation.set(-Math.PI / 2, 0, rot)
    mesh.scale.setScalar(scale)
  }

  update(dt) {
    for (const it of this.items) {
      if (it.life > 0) {
        it.life -= dt
        if (it.life < 6) it.mesh.material.opacity = Math.max(0, it.life / 6) * 0.85
        if (it.life <= 0) it.mesh.visible = false
      }
    }
  }
}
