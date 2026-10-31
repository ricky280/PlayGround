// Tiny synthesized sound engine — no audio files, no network.

export class Sound {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.noiseBuffer = null;
    this.muted = false;
    try {
      this.muted = localStorage.getItem('bladechain.muted') === '1';
    } catch {
      this.muted = false;
    }
    this.lastWhoosh = 0;
    this.lastChain = 0;
  }

  unlock() {
    if (!this.ctx) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      this.ctx = new Ctx();
      this.master = this.ctx.createGain();
      this.master.gain.value = this.muted ? 0 : 0.5;
      const comp = this.ctx.createDynamicsCompressor();
      comp.threshold.value = -18;
      comp.knee.value = 24;
      comp.ratio.value = 6;
      this.master.connect(comp);
      comp.connect(this.ctx.destination);
      this.buildNoise();
    }
    if (this.ctx.state === 'suspended') this.ctx.resume().catch(() => {});
  }

  buildNoise() {
    const len = this.ctx.sampleRate;
    const buffer = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < len; i += 1) data[i] = Math.random() * 2 - 1;
    this.noiseBuffer = buffer;
  }

  setMuted(muted) {
    this.muted = muted;
    try {
      localStorage.setItem('bladechain.muted', muted ? '1' : '0');
    } catch {
      /* storage may be unavailable */
    }
    if (this.master && this.ctx) {
      this.master.gain.setTargetAtTime(muted ? 0 : 0.5, this.ctx.currentTime, 0.02);
    }
    return this.muted;
  }

  toggle() {
    return this.setMuted(!this.muted);
  }

  tone({ freq, to, dur = 0.15, type = 'sine', gain = 0.12, delay = 0 }) {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(Math.max(20, freq), t);
    if (to) osc.frequency.exponentialRampToValueAtTime(Math.max(20, to), t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(g);
    g.connect(this.master);
    osc.start(t);
    osc.stop(t + dur + 0.03);
  }

  noise({ dur = 0.15, type = 'bandpass', freq = 1000, to, q = 1, gain = 0.15, delay = 0 }) {
    if (!this.ctx || this.muted || !this.noiseBuffer) return;
    const t = this.ctx.currentTime + delay;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.loop = true;
    const filter = this.ctx.createBiquadFilter();
    filter.type = type;
    filter.frequency.setValueAtTime(freq, t);
    if (to) filter.frequency.exponentialRampToValueAtTime(Math.max(40, to), t + dur);
    filter.Q.value = q;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(filter);
    filter.connect(g);
    g.connect(this.master);
    src.start(t);
    src.stop(t + dur + 0.03);
  }

  whoosh(intensity = 1) {
    if (!this.ctx || this.muted) return;
    const now = this.ctx.currentTime;
    if (now - this.lastWhoosh < 0.09) return;
    this.lastWhoosh = now;
    this.noise({ dur: 0.16, type: 'bandpass', freq: 420, to: 1700, q: 1.4, gain: 0.05 + 0.07 * intensity });
  }

  slice(radius = 34) {
    if (!this.ctx || this.muted) return;
    const low = 260 - radius * 2.4;
    this.noise({ dur: 0.13, type: 'highpass', freq: 900, to: 3200, q: 0.8, gain: 0.2 });
    this.tone({ freq: Math.max(90, low), to: Math.max(45, low * 0.4), dur: 0.13, type: 'sine', gain: 0.2 });
  }

  chain(level) {
    if (!this.ctx || this.muted) return;
    const now = this.ctx.currentTime;
    if (now - this.lastChain < 0.035) return;
    this.lastChain = now;
    const steps = [0, 2, 4, 7, 9, 12, 14, 16, 19, 21, 24];
    const step = steps[Math.min(level, steps.length - 1)];
    const freq = 520 * Math.pow(2, step / 12);
    this.tone({ freq, to: freq * 1.01, dur: 0.1, type: 'triangle', gain: 0.055 });
    this.tone({ freq: freq * 2, dur: 0.06, type: 'sine', gain: 0.025, delay: 0.01 });
  }

  zap() {
    if (!this.ctx || this.muted) return;
    this.tone({ freq: 1800, to: 160, dur: 0.2, type: 'sawtooth', gain: 0.09 });
    this.noise({ dur: 0.18, type: 'highpass', freq: 2600, to: 900, q: 0.7, gain: 0.12 });
    this.tone({ freq: 320, to: 640, dur: 0.1, type: 'square', gain: 0.04 });
  }

  bomb() {
    if (!this.ctx || this.muted) return;
    this.tone({ freq: 130, to: 32, dur: 0.7, type: 'sine', gain: 0.55 });
    this.tone({ freq: 70, to: 26, dur: 0.9, type: 'triangle', gain: 0.35 });
    this.noise({ dur: 0.65, type: 'lowpass', freq: 1600, to: 90, q: 0.6, gain: 0.4 });
    this.noise({ dur: 0.2, type: 'highpass', freq: 2200, gain: 0.18 });
  }

  miss() {
    if (!this.ctx || this.muted) return;
    this.tone({ freq: 220, to: 90, dur: 0.26, type: 'sine', gain: 0.18 });
    this.noise({ dur: 0.14, type: 'lowpass', freq: 500, to: 160, gain: 0.1 });
  }

  start() {
    if (!this.ctx || this.muted) return;
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
      this.tone({ freq: f, dur: 0.16, type: 'triangle', gain: 0.09, delay: i * 0.06 });
    });
  }

  over() {
    if (!this.ctx || this.muted) return;
    [392, 329.63, 261.63, 196].forEach((f, i) => {
      this.tone({ freq: f, dur: 0.36, type: 'sine', gain: 0.12, delay: i * 0.13 });
    });
    this.noise({ dur: 0.7, type: 'lowpass', freq: 700, to: 100, gain: 0.08, delay: 0.3 });
  }

  frenzy() {
    if (!this.ctx || this.muted) return;
    [440, 554.37, 659.25, 880, 1108.73].forEach((f, i) => {
      this.tone({ freq: f, dur: 0.12, type: 'square', gain: 0.04, delay: i * 0.055 });
    });
  }

  multi(count) {
    if (!this.ctx || this.muted) return;
    this.tone({ freq: 880, to: 1320, dur: 0.12, type: 'triangle', gain: 0.07 });
    if (count > 2) this.tone({ freq: 1320, to: 1760, dur: 0.12, type: 'triangle', gain: 0.06, delay: 0.06 });
  }

  ui() {
    if (!this.ctx || this.muted) return;
    this.tone({ freq: 660, to: 880, dur: 0.08, type: 'sine', gain: 0.06 });
  }
}
