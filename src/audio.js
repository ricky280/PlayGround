// Procedural audio engine — no samples, everything synthesized with WebAudio.
export class SoundEngine {
  constructor() {
    this.ctx = null
    this.master = null
    this.reverb = null
    this.enabled = true
    this.started = false
    this._lastGroan = 0
    this._lastStep = 0
    this._ambientNodes = []
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume()
      return
    }
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return
    const ctx = new AC()
    this.ctx = ctx
    const master = ctx.createGain()
    master.gain.value = 0.75
    const comp = ctx.createDynamicsCompressor()
    comp.threshold.value = -14
    comp.knee.value = 18
    comp.ratio.value = 5
    comp.attack.value = 0.004
    comp.release.value = 0.22
    master.connect(comp)
    comp.connect(ctx.destination)
    this.master = master

    // reverb impulse
    const seconds = 1.9
    const len = ctx.sampleRate * seconds
    const impulse = ctx.createBuffer(2, len, ctx.sampleRate)
    for (let ch = 0; ch < 2; ch++) {
      const data = impulse.getChannelData(ch)
      for (let i = 0; i < len; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6)
      }
    }
    const conv = ctx.createConvolver()
    conv.buffer = impulse
    const wet = ctx.createGain()
    wet.gain.value = 0.3
    conv.connect(wet)
    wet.connect(master)
    this.reverb = conv

    this.noise = this._makeNoise(2)
    this.started = true
  }

  _makeNoise(seconds = 2) {
    const ctx = this.ctx
    const len = Math.floor(ctx.sampleRate * seconds)
    const buf = ctx.createBuffer(1, len, ctx.sampleRate)
    const d = buf.getChannelData(0)
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1
    return buf
  }

  _now() { return this.ctx.currentTime }

  _noiseSource(loop = false) {
    const src = this.ctx.createBufferSource()
    src.buffer = this.noise
    src.loop = loop
    return src
  }

  _env(gain, t, attack, decay, peak, sustain = 0) {
    gain.gain.cancelScheduledValues(t)
    gain.gain.setValueAtTime(0.0001, t)
    gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, peak), t + attack)
    gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, sustain || 0.0001), t + attack + decay)
  }

  _send(node, wet = 0.25) {
    if (!this.reverb) return
    const g = this.ctx.createGain()
    g.gain.value = wet
    node.connect(g)
    g.connect(this.reverb)
  }

  setEnabled(v) {
    this.enabled = v
    if (this.master) this.master.gain.value = v ? 0.75 : 0
  }

  resume() {
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume()
  }

  startAmbient() {
    if (!this.ctx || this._ambient) return
    const ctx = this.ctx
    const bus = ctx.createGain()
    bus.gain.value = 0.0001
    bus.connect(this.master)
    bus.gain.exponentialRampToValueAtTime(0.34, this._now() + 3)
    this._ambient = bus

    // low bunker drone
    const drone = ctx.createGain()
    drone.gain.value = 0.055
    const lp = ctx.createBiquadFilter()
    lp.type = 'lowpass'
    lp.frequency.value = 140
    drone.connect(lp)
    lp.connect(bus)
    for (const [f, type] of [[41.2, 'sawtooth'], [61.8, 'sine'], [82.4, 'sine']]) {
      const o = ctx.createOscillator()
      o.type = type
      o.frequency.value = f
      const g = ctx.createGain()
      g.gain.value = 0.5
      o.connect(g)
      g.connect(drone)
      o.start()
      this._ambientNodes.push(o)
    }

    // wind / air
    const wind = this._noiseSource(true)
    const wf = ctx.createBiquadFilter()
    wf.type = 'lowpass'
    wf.frequency.value = 260
    wf.Q.value = 0.6
    const wg = ctx.createGain()
    wg.gain.value = 0.035
    wind.connect(wf)
    wf.connect(wg)
    wg.connect(bus)
    wind.start()
    this._ambientNodes.push(wind)

    const lfo = ctx.createOscillator()
    lfo.frequency.value = 0.08
    const lfoGain = ctx.createGain()
    lfoGain.gain.value = 0.02
    lfo.connect(lfoGain)
    lfoGain.connect(wg.gain)
    lfo.start()
    this._ambientNodes.push(lfo)
  }

  stopAmbient() {
    if (!this._ambient) return
    try {
      this._ambient.gain.exponentialRampToValueAtTime(0.0001, this._now() + 0.8)
      for (const n of this._ambientNodes) { try { n.stop(this._now() + 0.9) } catch {} }
    } catch {}
    this._ambient = null
    this._ambientNodes = []
  }

  shot(type = 'pistol') {
    if (!this.ctx || !this.enabled) return
    const ctx = this.ctx
    const t = this._now()
    const cfg = {
      pistol: { gain: 0.5, cut: 2400, decay: 0.18, thump: 130, crack: 0.35 },
      smg: { gain: 0.42, cut: 2800, decay: 0.13, thump: 150, crack: 0.3 },
      rifle: { gain: 0.72, cut: 1900, decay: 0.32, thump: 80, crack: 0.55 },
      shotgun: { gain: 0.8, cut: 1500, decay: 0.34, thump: 65, crack: 0.5 },
      wonder: { gain: 0.4, cut: 900, decay: 0.5, thump: 55, crack: 0.2 },
    }[type] || { gain: 0.5, cut: 2400, decay: 0.18, thump: 130, crack: 0.3 }

    // main noise blast
    const src = this._noiseSource()
    const bp = ctx.createBiquadFilter()
    bp.type = 'bandpass'
    bp.frequency.value = cfg.cut
    bp.Q.value = 0.7
    const g = ctx.createGain()
    this._env(g, t, 0.002, cfg.decay, cfg.gain)
    src.connect(bp)
    bp.connect(g)
    g.connect(this.master)
    this._send(g, 0.5)
    src.start(t)
    src.stop(t + cfg.decay + 0.1)

    // body thump
    const o = ctx.createOscillator()
    o.type = 'triangle'
    o.frequency.setValueAtTime(cfg.thump, t)
    o.frequency.exponentialRampToValueAtTime(cfg.thump * 0.45, t + 0.16)
    const og = ctx.createGain()
    this._env(og, t, 0.002, 0.2, cfg.gain * 0.55)
    o.connect(og)
    og.connect(this.master)
    this._send(og, 0.15)
    o.start(t)
    o.stop(t + 0.3)

    // crack transient
    const csrc = this._noiseSource()
    const hp = ctx.createBiquadFilter()
    hp.type = 'highpass'
    hp.frequency.value = 3200
    const cg = ctx.createGain()
    this._env(cg, t, 0.001, 0.045, cfg.crack)
    csrc.connect(hp)
    hp.connect(cg)
    cg.connect(this.master)
    csrc.start(t)
    csrc.stop(t + 0.08)

    if (type === 'wonder') {
      const osc = ctx.createOscillator()
      osc.type = 'sawtooth'
      osc.frequency.setValueAtTime(700, t)
      osc.frequency.exponentialRampToValueAtTime(90, t + 0.6)
      const wg = ctx.createGain()
      this._env(wg, t, 0.005, 0.55, 0.12)
      osc.connect(wg)
      wg.connect(this.master)
      this._send(wg, 0.8)
      osc.start(t)
      osc.stop(t + 0.7)
    }
  }

  dryFire() {
    if (!this.ctx) return
    const t = this._now()
    const src = this._noiseSource()
    const hp = this.ctx.createBiquadFilter()
    hp.type = 'highpass'
    hp.frequency.value = 1800
    const g = this.ctx.createGain()
    this._env(g, t, 0.001, 0.035, 0.18)
    src.connect(hp); hp.connect(g); g.connect(this.master)
    src.start(t); src.stop(t + 0.06)
  }

  _click(t, freq = 2000, gain = 0.15, decay = 0.03) {
    const src = this._noiseSource()
    const bp = this.ctx.createBiquadFilter()
    bp.type = 'bandpass'
    bp.frequency.value = freq
    bp.Q.value = 3
    const g = this.ctx.createGain()
    this._env(g, t, 0.001, decay, gain)
    src.connect(bp); bp.connect(g); g.connect(this.master)
    src.start(t); src.stop(t + decay + 0.05)
  }

  reload(type = 'pistol') {
    if (!this.ctx || !this.enabled) return
    const t = this._now()
    const long = type === 'rifle' || type === 'shotgun' || type === 'wonder'
    this._click(t + 0.05, 1300, 0.16, 0.04)
    this._click(t + 0.18, 800, 0.12, 0.06)
    this._click(t + (long ? 0.9 : 0.55), 1900, 0.2, 0.05)
    this._click(t + (long ? 1.15 : 0.8), 2600, 0.17, 0.04)
    if (long) this._click(t + 1.45, 600, 0.14, 0.08)
  }

  bolt() {
    if (!this.ctx) return
    const t = this._now()
    this._click(t, 1500, 0.18, 0.05)
    this._click(t + 0.12, 2200, 0.14, 0.04)
    this._click(t + 0.22, 900, 0.12, 0.06)
  }

  hit(head = false) {
    if (!this.ctx || !this.enabled) return
    const t = this._now()
    if (head) {
      const src = this._noiseSource()
      const lp = this.ctx.createBiquadFilter()
      lp.type = 'lowpass'
      lp.frequency.value = 900
      const g = this.ctx.createGain()
      this._env(g, t, 0.001, 0.14, 0.4)
      src.connect(lp); lp.connect(g); g.connect(this.master)
      src.start(t); src.stop(t + 0.2)
      const o = this.ctx.createOscillator()
      o.frequency.setValueAtTime(180, t)
      o.frequency.exponentialRampToValueAtTime(60, t + 0.12)
      const og = this.ctx.createGain()
      this._env(og, t, 0.001, 0.12, 0.25)
      o.connect(og); og.connect(this.master)
      o.start(t); o.stop(t + 0.16)
    } else {
      this._click(t, 420, 0.22, 0.055)
    }
  }

  groan(distance = 10, pitch = 1) {
    if (!this.ctx || !this.enabled) return
    const t = this._now()
    if (t - this._lastGroan < 0.12) return
    this._lastGroan = t
    const vol = Math.max(0.005, 0.3 * Math.pow(Math.max(0, 1 - distance / 32), 2))
    if (vol < 0.008) return
    const base = (62 + Math.random() * 40) * pitch
    const o = this.ctx.createOscillator()
    o.type = Math.random() > 0.4 ? 'sawtooth' : 'square'
    o.frequency.setValueAtTime(base, t)
    o.frequency.linearRampToValueAtTime(base * (0.8 + Math.random() * 0.5), t + 0.8)
    const vib = this.ctx.createOscillator()
    vib.frequency.value = 5 + Math.random() * 5
    const vg = this.ctx.createGain()
    vg.gain.value = base * 0.06
    vib.connect(vg); vg.connect(o.frequency)
    const f1 = this.ctx.createBiquadFilter()
    f1.type = 'bandpass'
    f1.frequency.value = 320 + Math.random() * 380
    f1.Q.value = 2.4
    const f2 = this.ctx.createBiquadFilter()
    f2.type = 'lowpass'
    f2.frequency.value = 1400
    const g = this.ctx.createGain()
    g.gain.setValueAtTime(0.0001, t)
    g.gain.exponentialRampToValueAtTime(vol, t + 0.18)
    g.gain.exponentialRampToValueAtTime(vol * 0.55, t + 0.65)
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.4 + Math.random() * 0.6)
    o.connect(f1); f1.connect(f2); f2.connect(g); g.connect(this.master)
    this._send(g, 0.5)
    o.start(t); vib.start(t)
    o.stop(t + 2.1); vib.stop(t + 2.1)
  }

  hurt() {
    if (!this.ctx || !this.enabled) return
    const t = this._now()
    const src = this._noiseSource()
    const lp = this.ctx.createBiquadFilter()
    lp.type = 'lowpass'
    lp.frequency.value = 500
    const g = this.ctx.createGain()
    this._env(g, t, 0.002, 0.25, 0.5)
    src.connect(lp); lp.connect(g); g.connect(this.master)
    src.start(t); src.stop(t + 0.3)
    const o = this.ctx.createOscillator()
    o.frequency.setValueAtTime(95, t)
    o.frequency.exponentialRampToValueAtTime(45, t + 0.25)
    const og = this.ctx.createGain()
    this._env(og, t, 0.002, 0.3, 0.3)
    o.connect(og); og.connect(this.master)
    o.start(t); o.stop(t + 0.35)
  }

  footstep(running = false) {
    if (!this.ctx || !this.enabled) return
    const t = this._now()
    if (t - this._lastStep < (running ? 0.22 : 0.32)) return
    this._lastStep = t
    const src = this._noiseSource()
    const bp = this.ctx.createBiquadFilter()
    bp.type = 'lowpass'
    bp.frequency.value = 240 + Math.random() * 130
    const g = this.ctx.createGain()
    this._env(g, t, 0.004, 0.09, running ? 0.16 : 0.1)
    src.connect(bp); bp.connect(g); g.connect(this.master)
    src.start(t); src.stop(t + 0.14)
  }

  purchase() {
    if (!this.ctx || !this.enabled) return
    const t = this._now()
    for (let i = 0; i < 3; i++) {
      const o = this.ctx.createOscillator()
      o.type = 'sine'
      o.frequency.value = [880, 1174, 1568][i]
      const g = this.ctx.createGain()
      g.gain.setValueAtTime(0.0001, t + i * 0.05)
      g.gain.exponentialRampToValueAtTime(0.08, t + i * 0.05 + 0.01)
      g.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.05 + 0.3)
      o.connect(g); g.connect(this.master)
      this._send(g, 0.3)
      o.start(t + i * 0.05); o.stop(t + i * 0.05 + 0.32)
    }
  }

  repair() {
    if (!this.ctx || !this.enabled) return
    const t = this._now()
    this._click(t, 260, 0.32, 0.07)
    this._click(t + 0.03, 1400, 0.12, 0.04)
  }

  door() {
    if (!this.ctx || !this.enabled) return
    const t = this._now()
    const o = this.ctx.createOscillator()
    o.type = 'sawtooth'
    o.frequency.setValueAtTime(70, t)
    o.frequency.exponentialRampToValueAtTime(160, t + 0.5)
    o.frequency.exponentialRampToValueAtTime(55, t + 1.1)
    const bp = this.ctx.createBiquadFilter()
    bp.type = 'bandpass'
    bp.frequency.value = 380
    bp.Q.value = 6
    const g = this.ctx.createGain()
    g.gain.setValueAtTime(0.0001, t)
    g.gain.exponentialRampToValueAtTime(0.2, t + 0.15)
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.2)
    o.connect(bp); bp.connect(g); g.connect(this.master)
    this._send(g, 0.5)
    o.start(t); o.stop(t + 1.3)
  }

  roundStart(round = 1) {
    if (!this.ctx || !this.enabled) return
    const t = this._now()
    const root = 55
    for (let i = 0; i < 3; i++) {
      const o = this.ctx.createOscillator()
      o.type = i === 0 ? 'sawtooth' : 'triangle'
      o.frequency.value = root * (1 + i * 0.5)
      const lp = this.ctx.createBiquadFilter()
      lp.type = 'lowpass'
      lp.frequency.setValueAtTime(300, t)
      lp.frequency.linearRampToValueAtTime(900, t + 1.6)
      const g = this.ctx.createGain()
      g.gain.setValueAtTime(0.0001, t)
      g.gain.exponentialRampToValueAtTime(0.075 / (i + 1), t + 0.5)
      g.gain.exponentialRampToValueAtTime(0.0001, t + 2.6)
      o.connect(lp); lp.connect(g); g.connect(this.master)
      this._send(g, 0.6)
      o.start(t); o.stop(t + 2.7)
    }
    // distant bell
    const b = this.ctx.createOscillator()
    b.type = 'sine'
    b.frequency.value = 440
    const bg = this.ctx.createGain()
    bg.gain.setValueAtTime(0.0001, t + 0.6)
    bg.gain.exponentialRampToValueAtTime(0.1, t + 0.65)
    bg.gain.exponentialRampToValueAtTime(0.0001, t + 3.2)
    b.connect(bg); bg.connect(this.master)
    this._send(bg, 0.9)
    b.start(t + 0.6); b.stop(t + 3.3)
  }

  roundEnd() {
    if (!this.ctx || !this.enabled) return
    const t = this._now()
    for (let i = 0; i < 3; i++) {
      const o = this.ctx.createOscillator()
      o.type = 'sine'
      o.frequency.value = [523.25, 659.25, 783.99][i]
      const g = this.ctx.createGain()
      g.gain.setValueAtTime(0.0001, t + i * 0.12)
      g.gain.exponentialRampToValueAtTime(0.07, t + i * 0.12 + 0.02)
      g.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.12 + 1.4)
      o.connect(g); g.connect(this.master)
      this._send(g, 0.7)
      o.start(t + i * 0.12); o.stop(t + i * 0.12 + 1.5)
    }
  }

  powerup(kind = 'insta') {
    if (!this.ctx || !this.enabled) return
    const t = this._now()
    const notes = kind === 'nuke' ? [440, 330, 220, 110] : [523, 659, 784, 1046]
    notes.forEach((f, i) => {
      const o = this.ctx.createOscillator()
      o.type = 'triangle'
      o.frequency.value = f
      const g = this.ctx.createGain()
      g.gain.setValueAtTime(0.0001, t + i * 0.07)
      g.gain.exponentialRampToValueAtTime(0.1, t + i * 0.07 + 0.015)
      g.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.07 + 0.5)
      o.connect(g); g.connect(this.master)
      this._send(g, 0.5)
      o.start(t + i * 0.07); o.stop(t + i * 0.07 + 0.55)
    })
  }

  box() {
    if (!this.ctx || !this.enabled) return
    const t = this._now()
    const notes = [784, 988, 1175, 1568, 1175, 1568]
    notes.forEach((f, i) => {
      const o = this.ctx.createOscillator()
      o.type = 'sine'
      o.frequency.value = f
      const g = this.ctx.createGain()
      g.gain.setValueAtTime(0.0001, t + i * 0.16)
      g.gain.exponentialRampToValueAtTime(0.06, t + i * 0.16 + 0.02)
      g.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.16 + 0.7)
      o.connect(g); g.connect(this.master)
      this._send(g, 0.6)
      o.start(t + i * 0.16); o.stop(t + i * 0.16 + 0.75)
    })
  }

  death() {
    if (!this.ctx || !this.enabled) return
    const t = this._now()
    const o = this.ctx.createOscillator()
    o.type = 'sawtooth'
    o.frequency.setValueAtTime(120, t)
    o.frequency.exponentialRampToValueAtTime(28, t + 2.2)
    const lp = this.ctx.createBiquadFilter()
    lp.type = 'lowpass'
    lp.frequency.value = 420
    const g = this.ctx.createGain()
    g.gain.setValueAtTime(0.0001, t)
    g.gain.exponentialRampToValueAtTime(0.25, t + 0.1)
    g.gain.exponentialRampToValueAtTime(0.0001, t + 2.4)
    o.connect(lp); lp.connect(g); g.connect(this.master)
    this._send(g, 0.8)
    o.start(t); o.stop(t + 2.5)
  }

  heartbeat(intensity = 0.5) {
    if (!this.ctx || !this.enabled) return
    const t = this._now()
    for (let i = 0; i < 2; i++) {
      const o = this.ctx.createOscillator()
      o.frequency.setValueAtTime(64, t + i * 0.18)
      o.frequency.exponentialRampToValueAtTime(38, t + i * 0.18 + 0.12)
      const g = this.ctx.createGain()
      g.gain.setValueAtTime(0.0001, t + i * 0.18)
      g.gain.exponentialRampToValueAtTime(0.12 * intensity, t + i * 0.18 + 0.015)
      g.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.18 + 0.22)
      o.connect(g); g.connect(this.master)
      o.start(t + i * 0.18); o.stop(t + i * 0.18 + 0.24)
    }
  }
}
