import {
  FRUIT_TYPES,
  drawWhole,
  drawHalf,
  drawBomb,
  randomFruitType,
} from './fruits.js';

const TAU = Math.PI * 2;
const CHAIN_WINDOW = 1.8;
const MAX_LIVES = 3;
const BEST_KEY = 'bladechain.best';
const DISPLAY_FONT = '"Arial Black", "Helvetica Neue", "DejaVu Sans", system-ui, sans-serif';

const rnd = (a, b) => a + Math.random() * (b - a);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

function segDist2(ax, ay, bx, by, px, py) {
  const dx = bx - ax;
  const dy = by - ay;
  const len2 = dx * dx + dy * dy;
  let t = len2 ? ((px - ax) * dx + (py - ay) * dy) / len2 : 0;
  t = clamp(t, 0, 1);
  const x = ax + dx * t;
  const y = ay + dy * t;
  return (px - x) * (px - x) + (py - y) * (py - y);
}

function readBest() {
  try {
    return Number(localStorage.getItem(BEST_KEY)) || 0;
  } catch {
    return 0;
  }
}

function writeBest(value) {
  try {
    localStorage.setItem(BEST_KEY, String(value));
  } catch {
    /* ignore */
  }
}

export class Game {
  constructor(canvas, ui, sound) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d', { alpha: false });
    this.ui = ui;
    this.sound = sound;

    this.W = 0;
    this.H = 0;
    this.dpr = 1;
    this.G = 1600;
    this.time = 0;
    this.last = performance.now();
    this.freeze = false;
    this.freezeNow = 0;

    this.state = 'menu';
    this.score = 0;
    this.best = readBest();
    this.lives = MAX_LIVES;
    this.chain = 0;
    this.chainTimer = 0;
    this.nextArc = 4;
    this.maxChain = 0;
    this.slicedCount = 0;
    this.elapsed = 0;
    this.spawnTimer = 0;
    this.frenzyTimer = 32;
    this.slowTimer = 0;
    this.overTimer = 0;
    this.shake = 0;
    this.flash = null;
    this.banner = null;
    this.newBest = false;
    this.activePointer = null;
    this.pointerDown = false;

    this.fruits = [];
    this.halves = [];
    this.particles = [];
    this.floaters = [];
    this.arcs = [];
    this.slashes = [];
    this.splats = [];
    this.shockwaves = [];
    this.blasts = [];
    this.pending = [];
    this.bladePts = [];
    this.embers = [];
    this.ambient = [];
    this.ambientTimer = 0;

    this._hudScore = -1;
    this._hudLives = -1;
    this._hudChain = -1;
    this._hudMult = -1;
    this._hudArc = -1;

    this.bg = null;

    this.resize = this.resize.bind(this);
    this.loop = this.loop.bind(this);

    window.addEventListener('resize', this.resize);
    window.addEventListener('orientationchange', this.resize);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.state === 'playing') this.pause();
    });
    window.addEventListener('blur', () => {
      if (this.state === 'playing') this.pause();
    });

    this.resize();
    this.seedAmbient();
    this.updateHud(true);
    this.updateMenuBest();
    document.body.classList.toggle('muted', this.sound.muted);

    this.bindInput();
    requestAnimationFrame(this.loop);
  }

  // ------------------------------------------------------------- layout

  resize() {
    const rect = this.canvas.getBoundingClientRect();
    this.W = Math.max(320, Math.round(rect.width || window.innerWidth));
    this.H = Math.max(320, Math.round(rect.height || window.innerHeight));
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = Math.round(this.W * this.dpr);
    this.canvas.height = Math.round(this.H * this.dpr);
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    this.G = this.H * 1.85;
    this.fruitScale = clamp(Math.sqrt(this.W * this.H) / 1000, 0.88, 1.4);
    this.buildBackground();
    this.buildEmbers();
  }

  buildBackground() {
    const { W, H, dpr } = this;
    const c = document.createElement('canvas');
    c.width = Math.max(1, Math.round(W * dpr));
    c.height = Math.max(1, Math.round(H * dpr));
    const g = c.getContext('2d');
    g.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Night sky.
    const sky = g.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, '#04060c');
    sky.addColorStop(0.42, '#0a1220');
    sky.addColorStop(0.72, '#101d31');
    sky.addColorStop(1, '#16202e');
    g.fillStyle = sky;
    g.fillRect(0, 0, W, H);

    // Stars.
    const starRnd = this.seededRng(91);
    for (let i = 0; i < 110; i += 1) {
      const x = starRnd() * W;
      const y = starRnd() * H * 0.68;
      const r = starRnd() * 1.3 + 0.25;
      const a = starRnd() * 0.55 + 0.08;
      g.beginPath();
      g.arc(x, y, r, 0, TAU);
      g.fillStyle = `rgba(214,235,255,${a})`;
      g.fill();
    }

    // Moon and its haze.
    const mx = W * 0.78;
    const my = H * 0.19;
    const mr = Math.min(W, H) * 0.085;
    const halo = g.createRadialGradient(mx, my, mr * 0.4, mx, my, mr * 5);
    halo.addColorStop(0, 'rgba(198,224,255,0.2)');
    halo.addColorStop(0.4, 'rgba(150,190,255,0.06)');
    halo.addColorStop(1, 'rgba(150,190,255,0)');
    g.fillStyle = halo;
    g.beginPath();
    g.arc(mx, my, mr * 5, 0, TAU);
    g.fill();

    const moon = g.createRadialGradient(mx - mr * 0.35, my - mr * 0.35, mr * 0.1, mx, my, mr);
    moon.addColorStop(0, '#fdfbf1');
    moon.addColorStop(0.7, '#e8eef8');
    moon.addColorStop(1, '#b9c9dd');
    g.beginPath();
    g.arc(mx, my, mr, 0, TAU);
    g.fillStyle = moon;
    g.fill();

    const craterRnd = this.seededRng(7);
    g.fillStyle = 'rgba(140,160,185,0.18)';
    for (let i = 0; i < 7; i += 1) {
      const a = craterRnd() * TAU;
      const d = craterRnd() * mr * 0.7;
      const cr = mr * (0.05 + craterRnd() * 0.12);
      g.beginPath();
      g.arc(mx + Math.cos(a) * d, my + Math.sin(a) * d, cr, 0, TAU);
      g.fill();
    }

    // Mountain ridges.
    this.drawRidge(g, H * 0.735, H * 0.13, '#0a1422', 41);
    this.drawRidge(g, H * 0.795, H * 0.1, '#081019', 67);
    this.drawTorii(g, W * 0.5, H * 0.82, Math.min(W, H) / 900, 'rgba(5, 10, 16, 0.92)');

    // Bamboo clusters framing the scene.
    this.drawBambooCluster(g, W * 0.055, H * 0.98, Math.min(H * 0.62, 560), 1, 11);
    this.drawBambooCluster(g, W * 0.12, H * 0.98, Math.min(H * 0.5, 460), 0.72, 23);
    this.drawBambooCluster(g, W * 0.945, H * 0.98, Math.min(H * 0.58, 520), 1, 37);
    this.drawBambooCluster(g, W * 0.875, H * 0.98, Math.min(H * 0.46, 430), 0.68, 53);

    // Ground haze.
    const fog = g.createLinearGradient(0, H * 0.68, 0, H);
    fog.addColorStop(0, 'rgba(20,34,52,0)');
    fog.addColorStop(0.55, 'rgba(16,28,44,0.55)');
    fog.addColorStop(1, 'rgba(7,12,20,0.96)');
    g.fillStyle = fog;
    g.fillRect(0, H * 0.68, W, H * 0.32);

    // Warm lantern glow on the left, cool glow on the right.
    const warm = g.createRadialGradient(W * 0.14, H * 0.58, 0, W * 0.14, H * 0.58, H * 0.35);
    warm.addColorStop(0, 'rgba(255,140,50,0.055)');
    warm.addColorStop(1, 'rgba(255,140,50,0)');
    g.fillStyle = warm;
    g.fillRect(0, 0, W, H);

    // Vignette.
    const vig = g.createRadialGradient(W * 0.5, H * 0.44, Math.min(W, H) * 0.25, W * 0.5, H * 0.48, Math.max(W, H) * 0.78);
    vig.addColorStop(0, 'rgba(0,0,0,0)');
    vig.addColorStop(0.65, 'rgba(0,0,0,0.22)');
    vig.addColorStop(1, 'rgba(0,0,0,0.72)');
    g.fillStyle = vig;
    g.fillRect(0, 0, W, H);

    // Subtle top sheen.
    const top = g.createLinearGradient(0, 0, 0, H * 0.3);
    top.addColorStop(0, 'rgba(120,180,255,0.05)');
    top.addColorStop(1, 'rgba(120,180,255,0)');
    g.fillStyle = top;
    g.fillRect(0, 0, W, H * 0.3);

    this.bg = c;
  }

  seededRng(seed) {
    let s = seed >>> 0;
    return () => {
      s = (s * 1664525 + 1013904223) >>> 0;
      return s / 4294967296;
    };
  }

  drawRidge(g, baseY, height, color, seed) {
    const { W } = this;
    const rand = this.seededRng(seed);
    g.beginPath();
    g.moveTo(-10, baseY);
    const peaks = 7;
    for (let i = 0; i <= peaks; i += 1) {
      const x = (W / peaks) * i;
      const h = height * (0.35 + rand() * 0.65);
      g.lineTo(x - W / peaks / 2, baseY - h * 0.55);
      g.lineTo(x, baseY - h);
    }
    g.lineTo(W + 10, baseY);
    g.lineTo(W + 10, this.H + 10);
    g.lineTo(-10, this.H + 10);
    g.closePath();
    g.fillStyle = color;
    g.fill();
  }

  drawTorii(g, x, baseY, scale, color) {
    const w = 260 * scale;
    const h = 250 * scale;
    g.save();
    g.fillStyle = color;

    // Pillars.
    g.fillRect(x - w * 0.3, baseY - h * 0.92, w * 0.075, h * 0.92);
    g.fillRect(x + w * 0.225, baseY - h * 0.92, w * 0.075, h * 0.92);

    // Curved top lintel.
    g.beginPath();
    g.moveTo(x - w * 0.52, baseY - h * 0.9);
    g.quadraticCurveTo(x, baseY - h * 1.08, x + w * 0.52, baseY - h * 0.9);
    g.lineTo(x + w * 0.47, baseY - h * 0.81);
    g.quadraticCurveTo(x, baseY - h * 0.97, x - w * 0.47, baseY - h * 0.81);
    g.closePath();
    g.fill();

    // Lower tie beam.
    g.fillRect(x - w * 0.38, baseY - h * 0.73, w * 0.76, h * 0.045);
    g.fillRect(x - w * 0.025, baseY - h * 0.79, w * 0.05, h * 0.07);

    // Stone feet.
    g.fillRect(x - w * 0.34, baseY - h * 0.05, w * 0.16, h * 0.05);
    g.fillRect(x + w * 0.185, baseY - h * 0.05, w * 0.16, h * 0.05);
    g.restore();
  }

  drawBambooCluster(g, x, baseY, height, scale, seed) {    const rand = this.seededRng(seed);
    const stalks = 5;
    for (let s = 0; s < stalks; s += 1) {
      const ox = x + (rand() - 0.5) * 70 * scale;
      const h = height * (0.55 + rand() * 0.55);
      const w = (7 + rand() * 6) * scale;
      const lean = (rand() - 0.5) * 0.16;
      const topX = ox + Math.sin(lean) * h;
      const topY = baseY - Math.cos(lean) * h;

      g.save();
      g.strokeStyle = '#050d0c';
      g.fillStyle = '#050d0c';
      g.lineCap = 'round';

      // Stalk.
      g.beginPath();
      g.moveTo(ox, baseY);
      g.quadraticCurveTo(ox + Math.sin(lean) * h * 0.4, baseY - h * 0.5, topX, topY);
      g.lineWidth = w;
      g.stroke();

      // Nodes.
      const nodes = Math.max(3, Math.floor(h / 68));
      for (let n = 1; n < nodes; n += 1) {
        const t = n / nodes;
        const nx = ox + (topX - ox) * t;
        const ny = baseY + (topY - baseY) * t;
        g.beginPath();
        g.moveTo(nx - w * 0.9, ny);
        g.lineTo(nx + w * 0.9, ny);
        g.lineWidth = Math.max(1.5, w * 0.22);
        g.stroke();
      }

      // Leaves.
      const leaves = 6 + Math.floor(rand() * 5);
      for (let l = 0; l < leaves; l += 1) {
        const t = 0.55 + rand() * 0.48;
        const lx = ox + (topX - ox) * t;
        const ly = baseY + (topY - baseY) * t;
        const side = rand() > 0.5 ? 1 : -1;
        const len = (28 + rand() * 46) * scale;
        const ang = lean + side * (0.55 + rand() * 0.8);
        g.save();
        g.translate(lx, ly);
        g.rotate(ang);
        g.beginPath();
        g.moveTo(0, 0);
        g.quadraticCurveTo(len * 0.55, -len * 0.2, len, 0);
        g.quadraticCurveTo(len * 0.55, len * 0.14, 0, 0);
        g.fill();
        g.restore();
      }
      g.restore();
    }
  }

  buildEmbers() {
    const rand = this.seededRng(1234);
    this.embers = [];
    const count = Math.round(clamp((this.W * this.H) / 26000, 18, 48));
    for (let i = 0; i < count; i += 1) {
      this.embers.push({
        x: rand() * this.W,
        y: rand() * this.H,
        r: 0.7 + rand() * 1.8,
        vy: -(6 + rand() * 18),
        vx: (rand() - 0.5) * 8,
        phase: rand() * TAU,
        speed: 0.4 + rand() * 1.1,
        alpha: 0.15 + rand() * 0.45,
        warm: rand() > 0.35,
      });
    }
  }

  // -------------------------------------------------------------- input

  bindInput() {
    const canvas = this.canvas;

    canvas.addEventListener('pointerdown', (event) => {
      this.sound.unlock();
      if (this.state !== 'playing') return;
      if (this.activePointer === null) this.activePointer = event.pointerId;
      if (event.pointerId !== this.activePointer) return;
      this.pointerDown = true;
      this.pushBladePoint(event.clientX, event.clientY);
      event.preventDefault();
    }, { passive: false });

    window.addEventListener('pointermove', (event) => {
      if (this.state !== 'playing') return;
      if (event.pointerType !== 'mouse') {
        if (!this.pointerDown || event.pointerId !== this.activePointer) return;
        event.preventDefault();
      }
      this.pushBladePoint(event.clientX, event.clientY);
    }, { passive: false });

    const release = (event) => {
      if (event.pointerId === this.activePointer) {
        this.activePointer = null;
        this.pointerDown = false;
      }
    };
    window.addEventListener('pointerup', release);
    window.addEventListener('pointercancel', release);
    canvas.addEventListener('pointerleave', () => {
      this.pointerDown = false;
    });
    canvas.addEventListener('contextmenu', (event) => event.preventDefault());
  }

  pushBladePoint(clientX, clientY) {
    if (this.state !== 'playing') return;
    const rect = this.canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const now = performance.now();
    const prev = this.bladePts[this.bladePts.length - 1];

    if (prev && (now - prev.t > 90 || Math.hypot(x - prev.x, y - prev.y) > 300)) {
      this.bladePts.length = 0;
    }

    this.bladePts.push({ x, y, t: now });
    if (this.bladePts.length > 26) this.bladePts.shift();

    if (!prev) return;
    const dist = Math.hypot(x - prev.x, y - prev.y);
    const dt = Math.max(8, now - prev.t);
    const speed = (dist / dt) * 1000;
    if (dist < 2 || speed < 220) return;

    this.slash(prev, { x, y }, speed);

    if (speed > 650) {
      this.sound.whoosh(clamp(speed / 1900, 0, 1));
      if (Math.random() < 0.5) {
        this.addParticle(x, y, rnd(-40, 40), rnd(-40, 40), rnd(1, 2.6), this.bladeColor(), rnd(0.18, 0.4), 0, 0.94);
      }
    }
  }

  slash(a, b) {
    const angle = Math.atan2(b.y - a.y, b.x - a.x);

    // Bombs take priority: touching one ends the slice.
    for (const fruit of this.fruits) {
      if (!fruit.bomb) continue;
      const rr = fruit.r * 0.88;
      if (segDist2(a.x, a.y, b.x, b.y, fruit.x, fruit.y) < rr * rr) {
        this.explode(fruit);
        return;
      }
    }

    const hits = [];
    for (const fruit of this.fruits) {
      if (fruit.bomb || fruit.sliced) continue;
      const rr = fruit.r * 0.96;
      if (segDist2(a.x, a.y, b.x, b.y, fruit.x, fruit.y) < rr * rr) hits.push(fruit);
    }
    if (!hits.length) return;

    for (const fruit of hits) {
      this.sliceFruit(fruit, angle, { x: fruit.x, y: fruit.y }, 0);
    }

    if (hits.length > 1) {
      const midX = hits.reduce((s, f) => s + f.x, 0) / hits.length;
      const midY = hits.reduce((s, f) => s + f.y, 0) / hits.length;
      this.addFloater(midX, midY - 26, `MULTI ×${hits.length}`, '#ffe066', 22);
      this.sound.multi(hits.length);
      if (hits.length >= 3) this.addBanner(`MULTI ×${hits.length}`, 'CLEAN CUT', '#ffe066');
    }
  }

  // ------------------------------------------------------------ gameplay

  multiplier() {
    return 1 + Math.floor(this.chain / 3);
  }

  bladeColor() {
    if (this.chain >= 12) return '#f472b6';
    if (this.chain >= 8) return '#fbbf24';
    if (this.chain >= 4) return '#22d3ee';
    return '#7dd3fc';
  }

  sliceFruit(fruit, angle, point, depth) {
    if (fruit.sliced) return;
    fruit.sliced = true;
    this.slicedCount += 1;
    this.chain += 1;
    this.chainTimer = CHAIN_WINDOW;
    this.maxChain = Math.max(this.maxChain, this.chain);

    const mult = this.multiplier();
    const gain = 10 * mult;
    this.score += gain;

    const cut = angle + rnd(-0.12, 0.12);
    this.spawnHalves(fruit, cut);
    this.spawnJuice(fruit, cut, point);
    this.addSplash(fruit, point);

    this.addFloater(fruit.x, fruit.y - fruit.r * 0.4, `+${gain}`, fruit.type ? FRUIT_TYPES[fruit.type].fleshLight : '#fff', 17 + Math.min(12, mult * 1.4));
    this.addSlash(fruit.x, fruit.y, cut, fruit.r * 2.6);

    this.sound.slice(fruit.r);
    if (this.chain >= 2) this.sound.chain(this.chain);

    const pulsed = this.ui.chainCount;
    pulsed.classList.remove('pulse');
    void pulsed.offsetWidth;
    pulsed.classList.add('pulse');

    if (this.chain === 5 || (this.chain > 0 && this.chain % 10 === 0)) {
      this.addBanner(`CHAIN ${this.chain}`, mult > 1 ? `SCORE ×${mult}` : 'KEEP IT ALIVE', '#ffcf5c');
    } else if (this.banner && this.banner.text.startsWith('CHAIN ')) {
      this.banner.text = `CHAIN ${this.chain}`;
      this.banner.sub = `SCORE ×${mult}`;
    }

    if (depth === 0 && this.chain >= this.nextArc) {
      const threshold = this.nextArc;
      if (this.fireArc(point || { x: fruit.x, y: fruit.y }, depth + 1)) {
        this.nextArc = threshold + 4;
      }
    }

    this.updateHud();
  }

  fireArc(from, depth) {
    let target = null;
    let best = Infinity;
    const maxDist = Math.min(this.W, this.H) * 0.62;
    for (const fruit of this.fruits) {
      if (fruit.bomb || fruit.sliced) continue;
      const d = (fruit.x - from.x) ** 2 + (fruit.y - from.y) ** 2;
      if (d < best && d < maxDist * maxDist) {
        best = d;
        target = fruit;
      }
    }
    if (!target) return;

    const to = { x: target.x, y: target.y };
    this.arcs.push(this.makeArc(from, to));
    this.sound.zap();
    this.addFloater(target.x, target.y - target.r * 0.5, 'ARC!', '#7df9ff', 20);
    this.addShockwave(from.x, from.y, 10, 62, '#7df9ff', 0.28);
    this.addParticle(from.x, from.y, rnd(-60, 60), rnd(-60, 60), 3, '#bff8ff', 0.3, 0, 0.9);
    this.sliceFruit(target, rnd(0, TAU), to, depth);
    return true;
  }

  makeArc(from, to) {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const len = Math.hypot(dx, dy) || 1;
    const nx = -dy / len;
    const ny = dx / len;
    const pts = [];
    const segments = 9;
    for (let i = 0; i <= segments; i += 1) {
      const t = i / segments;
      const edge = i === 0 || i === segments;
      const amp = edge ? 0 : (Math.random() * 2 - 1) * len * 0.075 * (1 - Math.abs(t - 0.5) * 0.9);
      pts.push({ x: from.x + dx * t + nx * amp, y: from.y + dy * t + ny * amp });
    }
    const mid = pts[5];
    const branch = [{ x: mid.x, y: mid.y }];
    for (let i = 1; i <= 3; i += 1) {
      const t = i / 3;
      branch.push({
        x: mid.x + nx * (12 + Math.random() * 34) * t + dx * 0.06 * t,
        y: mid.y + ny * (12 + Math.random() * 34) * t + dy * 0.06 * t,
      });
    }
    return { pts, branch, life: 0.32, max: 0.32 };
  }

  spawnHalves(fruit, cut) {
    const nx = Math.cos(cut - Math.PI / 2);
    const ny = Math.sin(cut - Math.PI / 2);
    for (const side of [1, -1]) {
      const speed = rnd(90, 210);
      this.halves.push({
        type: fruit.type,
        r: fruit.r,
        x: fruit.x + nx * side * fruit.r * 0.1,
        y: fruit.y + ny * side * fruit.r * 0.1,
        vx: fruit.vx * 0.35 + nx * side * speed + rnd(-25, 25),
        vy: fruit.vy * 0.35 + ny * side * speed - rnd(20, 80),
        rot: side > 0 ? cut : cut + Math.PI,
        vr: rnd(-4.5, 4.5),
        life: 3,
        max: 3,
      });
    }
  }

  spawnJuice(fruit, cut, point) {
    const f = FRUIT_TYPES[fruit.type];
    const px = point?.x ?? fruit.x;
    const py = point?.y ?? fruit.y;
    const count = Math.round(clamp(fruit.r * 0.55, 14, 30));
    for (let i = 0; i < count; i += 1) {
      const a = cut + rnd(-1.9, 1.9);
      const speed = rnd(40, 430);
      const color = Math.random() < 0.7 ? f.juice : f.fleshLight;
      this.addParticle(
        px + rnd(-fruit.r * 0.3, fruit.r * 0.3),
        py + rnd(-fruit.r * 0.3, fruit.r * 0.3),
        Math.cos(a) * speed,
        Math.sin(a) * speed - rnd(20, 120),
        rnd(1.8, 6.5),
        color,
        rnd(0.4, 1.05),
        this.G * 0.75,
        0.985,
      );
    }
    // A few slow droplets for depth.
    for (let i = 0; i < 5; i += 1) {
      this.addParticle(px, py, rnd(-60, 60), rnd(-150, -40), rnd(2, 4), f.fleshDeep, rnd(0.6, 1.2), this.G * 0.6, 0.99);
    }
  }

  addSplash(fruit, point) {
    const f = FRUIT_TYPES[fruit.type];
    const px = point?.x ?? fruit.x;
    const py = point?.y ?? fruit.y;
    const blobs = [];
    const count = 4 + ((Math.random() * 3) | 0);
    for (let i = 0; i < count; i += 1) {
      blobs.push({
        dx: rnd(-fruit.r * 1.15, fruit.r * 1.15),
        dy: rnd(-fruit.r * 0.9, fruit.r * 0.9),
        rx: rnd(fruit.r * 0.18, fruit.r * 0.55),
        ry: rnd(fruit.r * 0.12, fruit.r * 0.4),
        rot: rnd(0, TAU),
      });
    }
    this.splats.push({ x: px, y: py, color: f.juice, blobs, life: 7, max: 7 });
    if (this.splats.length > 26) this.splats.shift();
  }

  addSlash(x, y, angle, len) {
    this.slashes.push({ x, y, angle, len, life: 0.2, max: 0.2 });
  }

  addFloater(x, y, text, color, size) {
    this.floaters.push({ x, y, text, color, size, life: 0.95, max: 0.95, vy: -62, drift: rnd(-12, 12) });
    if (this.floaters.length > 24) this.floaters.shift();
  }

  addParticle(x, y, vx, vy, r, color, life, gravity, drag) {
    if (this.particles.length > 460) return;
    this.particles.push({ x, y, vx, vy, r, color, life, max: life, gravity, drag });
  }

  addShockwave(x, y, startR, endR, color, life) {
    this.shockwaves.push({ x, y, r: startR, startR, endR, color, life, max: life });
  }

  addBanner(text, sub, color) {
    this.banner = { text, sub, color, life: 1.25, max: 1.25 };
  }

  explode(bomb) {
    if (this.state !== 'playing') return;
    const x = bomb.x;
    const y = bomb.y;
    bomb.sliced = true;

    this.chain = 0;
    this.chainTimer = 0;
    this.nextArc = 4;
    this.slowTimer = 0.55;
    this.shake = Math.max(this.shake, 26);
    this.flash = { color: '255, 110, 40', life: 0.42, max: 0.42 };
    this.sound.bomb();
    this.addBanner('BOMB!', 'STRIKE LOST', '#ff4d5e');
    this.blasts.push({
      x,
      y,
      r: 24,
      maxR: Math.min(this.W, this.H) * 0.34,
      life: 0.62,
      max: 0.62,
    });
    this.addShockwave(x, y, 24, Math.min(this.W, this.H) * 0.36, '#ff8a3d', 0.55);
    this.addShockwave(x, y, 10, Math.min(this.W, this.H) * 0.2, '#fff3c4', 0.32);

    for (let i = 0; i < 44; i += 1) {
      const a = rnd(0, TAU);
      const speed = rnd(120, 780);
      this.addParticle(
        x,
        y,
        Math.cos(a) * speed,
        Math.sin(a) * speed,
        rnd(1.5, 5.5),
        Math.random() < 0.55 ? '#ffcf5c' : (Math.random() < 0.6 ? '#ff6b35' : '#ff3b4e'),
        rnd(0.35, 0.95),
        this.G * 0.5,
        0.96,
      );
    }
    for (let i = 0; i < 16; i += 1) {
      const a = rnd(0, TAU);
      const speed = rnd(20, 150);
      this.addParticle(x, y, Math.cos(a) * speed, Math.sin(a) * speed - 40, rnd(8, 20), 'rgba(40,45,55,0.55)', rnd(0.6, 1.4), -30, 0.97);
    }

    // Blast wave destroys nearby fruit without scoring.
    const radius = Math.min(this.W, this.H) * 0.32;
    for (const fruit of this.fruits) {
      if (fruit === bomb || fruit.bomb || fruit.sliced) continue;
      if (Math.hypot(fruit.x - x, fruit.y - y) < radius) {
        fruit.sliced = true;
        this.spawnJuice(fruit, rnd(0, TAU), { x: fruit.x, y: fruit.y });
        this.addSplash(fruit, { x: fruit.x, y: fruit.y });
      }
    }

    this.lives -= 1;
    this.shake = Math.max(this.shake, 22);
    this.updateHud();

    if (this.lives <= 0) {
      this.endGame();
    }
  }

  missFruit(fruit) {
    if (this.state !== 'playing') return;
    this.chain = 0;
    this.chainTimer = 0;
    this.nextArc = 4;
    this.lives -= 1;
    this.shake = Math.max(this.shake, 9);
    this.flash = { color: '255, 60, 80', life: 0.32, max: 0.32 };
    this.sound.miss();
    this.addFloater(fruit.x, Math.min(this.H - 90, fruit.y), 'MISS', '#ff6b7a', 26);
    this.addBanner('STRIKE', `${Math.max(0, this.lives)} LEFT`, '#ff6b7a');
    this.updateHud();
    if (this.lives <= 0) this.endGame();
  }

  endGame() {
    if (this.state !== 'playing') return;
    this.state = 'over';
    this.slowTimer = 1.05;
    this.overTimer = 1.4;
    this.pointerDown = false;
    this.activePointer = null;
    this.bladePts.length = 0;
    this.saveBest();
    this.sound.over();
    this.updateHud();
  }

  saveBest() {
    this.newBest = this.score > this.best;
    if (this.newBest) {
      this.best = this.score;
      writeBest(this.best);
    }
    this.updateMenuBest();
  }

  showOver() {
    this.ui.finalScore.textContent = this.score.toLocaleString('en-US');
    this.ui.statSliced.textContent = String(this.slicedCount);
    this.ui.statChain.textContent = String(this.maxChain);
    this.ui.statBest.textContent = this.best.toLocaleString('en-US');
    this.ui.newBest.hidden = !this.newBest;
    this.ui.over.hidden = false;
    document.body.dataset.state = 'over';
  }

  // ----------------------------------------------------------- run states

  start() {
    this.resetRun();
    this.state = 'playing';
    this.ui.menu.hidden = true;
    this.ui.over.hidden = true;
    this.ui.pause.hidden = true;
    document.body.dataset.state = 'playing';
    this.sound.start();
    this.addBanner('SLICE!', 'BUILD THE CHAIN', '#ffcf5c');
    this.spawnTimer = 0.3;
    this.pending.push({ t: 0.15, bomb: false }, { t: 0.55, bomb: false });
    this.updateHud(true);
  }

  resetRun() {
    this.fruits.length = 0;
    this.halves.length = 0;
    this.particles.length = 0;
    this.floaters.length = 0;
    this.arcs.length = 0;
    this.slashes.length = 0;
    this.splats.length = 0;
    this.shockwaves.length = 0;
    this.blasts.length = 0;
    this.pending.length = 0;
    this.ambient.length = 0;
    this.bladePts.length = 0;
    this.score = 0;
    this.lives = MAX_LIVES;
    this.chain = 0;
    this.chainTimer = 0;
    this.nextArc = 4;
    this.maxChain = 0;
    this.slicedCount = 0;
    this.elapsed = 0;
    this.spawnTimer = 0.3;
    this.frenzyTimer = 27;
    this.slowTimer = 0;
    this.overTimer = 0;
    this.shake = 0;
    this.flash = null;
    this.banner = null;
    this.newBest = false;
    this.pointerDown = false;
    this.activePointer = null;
    this.ui.newBest.hidden = true;
    this.updateHud(true);
  }

  pause() {
    if (this.state !== 'playing') return;
    this.state = 'paused';
    this.pointerDown = false;
    this.activePointer = null;
    this.bladePts.length = 0;
    this.ui.pause.hidden = false;
    document.body.dataset.state = 'paused';
    this.sound.ui();
  }

  resume() {
    if (this.state !== 'paused') return;
    this.state = 'playing';
    this.last = performance.now();
    this.ui.pause.hidden = true;
    document.body.dataset.state = 'playing';
    this.sound.ui();
  }

  toMenu() {
    this.state = 'menu';
    this.ui.menu.hidden = false;
    this.ui.over.hidden = true;
    this.ui.pause.hidden = true;
    document.body.dataset.state = 'menu';
    this.resetRun();
    this.seedAmbient();
    this.updateMenuBest();
    this.sound.ui();
  }

  seedAmbient() {
    this.ambient.length = 0;
    for (let i = 0; i < 7; i += 1) {
      this.spawnAmbient(true);
    }
    this.ambientTimer = 1;
  }

  spawnAmbient(spread = false) {
    const type = randomFruitType();
    const scale = rnd(0.8, 1.15);
    const r = FRUIT_TYPES[type].r * scale * this.fruitScale;
    const edge = Math.random() < 0.65;
    const x = this.W * (edge
      ? (Math.random() < 0.5 ? rnd(0.04, 0.19) : rnd(0.81, 0.96))
      : rnd(0.15, 0.85));
    this.ambient.push({
      type,
      r,
      x,
      y: spread ? rnd(-this.H * 0.1, this.H * 0.9) : this.H + r + 30,
      vx: rnd(-10, 10),
      vy: rnd(-34, -14),
      rot: rnd(0, TAU),
      vr: rnd(-0.5, 0.5),
      phase: rnd(0, TAU),
      alpha: rnd(0.5, 0.82),
    });
  }

  // ------------------------------------------------------------- updates

  loop(now) {
    const realDt = Math.min((now - this.last) / 1000, 0.1);
    this.last = now;
    if (!this.freeze) this.update(realDt);
    this.draw(this.freeze ? this.freezeNow : now);
    requestAnimationFrame(this.loop);
  }

  update(realDt) {
    this.time += realDt;

    const slow = this.slowTimer > 0;
    if (slow) this.slowTimer = Math.max(0, this.slowTimer - realDt);
    const dt = slow ? realDt * 0.28 : realDt;

    if (this.shake > 0) {
      this.shake = Math.max(0, this.shake - (this.shake * 7 + 10) * realDt);
    }
    if (this.flash) {
      this.flash.life -= realDt;
      if (this.flash.life <= 0) this.flash = null;
    }
    if (this.banner) {
      this.banner.life -= realDt;
      if (this.banner.life <= 0) this.banner = null;
    }

    this.updateEmbers(dt);
    this.updateBlade(realDt);

    if (this.state === 'menu') {
      this.updateAmbient(dt);
      this.ambientTimer -= dt;
      if (this.ambientTimer <= 0) {
        this.ambientTimer = rnd(0.9, 1.8);
        this.spawnAmbient();
      }
      this.updateParticles(dt);
      this.updateSplats(dt);
      return;
    }

    if (this.state === 'paused') return;

    if (this.state === 'playing') {
      this.elapsed += dt;
      this.chainTimer -= dt;
      if (this.chain > 0 && this.chainTimer <= 0) {
        this.chain = 0;
        this.chainTimer = 0;
        this.nextArc = 4;
        this.updateHud();
      }

      this.spawnTimer -= dt;
      if (this.spawnTimer <= 0) this.spawnWave();

      this.frenzyTimer -= dt;
      if (this.frenzyTimer <= 0) {
        this.frenzyTimer = rnd(30, 38);
        this.startFrenzy();
      }

      for (const item of this.pending) item.t -= dt;
      const ready = this.pending.filter((item) => item.t <= 0);
      this.pending = this.pending.filter((item) => item.t > 0);
      for (const item of ready) this.spawnFruit(item.bomb);
    }

    this.updateFruits(dt);
    this.updateHalves(dt);
    this.updateParticles(dt);
    this.updateFloaters(dt);
    this.updateArcs(dt);
    this.updateSlashes(dt);
    this.updateSplats(dt);
    this.updateShockwaves(dt);
    this.updateBlasts(dt);

    if (this.state === 'over' && this.overTimer > 0) {
      this.overTimer -= realDt;
      if (this.overTimer <= 0) this.showOver();
    }
  }

  updateEmbers(dt) {
    for (const e of this.embers) {
      e.y += e.vy * dt;
      e.x += (e.vx + Math.sin(this.time * e.speed + e.phase) * 7) * dt;
      if (e.y < -10) {
        e.y = this.H + 10;
        e.x = Math.random() * this.W;
      }
      if (e.x < -10) e.x = this.W + 10;
      if (e.x > this.W + 10) e.x = -10;
    }
  }

  updateAmbient(dt) {
    for (const fruit of this.ambient) {
      fruit.y += fruit.vy * dt;
      fruit.x += (fruit.vx + Math.sin(this.time * 0.7 + fruit.phase) * 12) * dt;
      fruit.rot += fruit.vr * dt;
    }
    this.ambient = this.ambient.filter((fruit) => fruit.y > -fruit.r * 2.5);
  }

  updateBlade() {
    const now = performance.now();
    if (this.bladePts.length) {
      this.bladePts = this.bladePts.filter((p) => now - p.t < 200);
    }
  }

  spawnWave() {
    const t = this.elapsed;
    this.spawnTimer = Math.max(0.5, 1.25 - t * 0.011);
    const roll = Math.random();
    let count = 1;
    if (roll < 0.3) count = 2;
    if (t > 16 && roll < 0.12) count = 3;

    const bombChance = t < 7 ? 0 : Math.min(0.2, 0.025 + (t - 7) * 0.0032);
    for (let i = 0; i < count; i += 1) {
      this.pending.push({ t: i * 0.11, bomb: Math.random() < bombChance });
    }
    if (t > 34 && Math.random() < 0.18) {
      this.pending.push({ t: 0.06, bomb: false });
    }
  }

  startFrenzy() {
    this.addBanner('FRUIT FRENZY', 'NO BOMBS · GO WIDE', '#7df9ff');
    this.sound.frenzy();
    const count = 7;
    for (let i = 0; i < count; i += 1) {
      this.pending.push({ t: i * 0.09, bomb: false });
    }
  }

  spawnFruit(isBomb) {
    const type = randomFruitType();
    const scale = rnd(0.88, 1.12);
    const r = isBomb ? 30 * this.fruitScale : FRUIT_TYPES[type].r * scale * this.fruitScale;
    const x = rnd(this.W * 0.1, this.W * 0.9);
    const y = this.H + r + rnd(10, 90);
    const apexY = rnd(this.H * 0.1, this.H * (isBomb ? 0.44 : 0.38));
    const rise = Math.max(120, y - apexY);
    const vy = -Math.sqrt(2 * this.G * rise);
    const tApex = Math.max(0.2, -vy / this.G);
    const targetX = this.W * 0.5 + rnd(-this.W * 0.32, this.W * 0.32);
    let vx = (targetX - x) / tApex;
    vx = clamp(vx, -this.W * 0.28, this.W * 0.28);

    this.fruits.push({
      type: isBomb ? null : type,
      bomb: isBomb,
      r,
      x,
      y,
      vx,
      vy,
      rot: rnd(0, TAU),
      vr: rnd(-2.8, 2.8),
      entered: false,
      sliced: false,
      dead: false,
    });
  }

  updateFruits(dt) {
    for (const fruit of this.fruits) {
      if (fruit.sliced) continue;
      fruit.vy += this.G * dt;
      fruit.x += fruit.vx * dt;
      fruit.y += fruit.vy * dt;
      fruit.rot += fruit.vr * dt;
      if (!fruit.entered && fruit.y < this.H * 0.88) fruit.entered = true;
      if (fruit.entered && fruit.vy > 0 && fruit.y - fruit.r > this.H + 40) {
        fruit.dead = true;
      }
    }

    if (this.state === 'playing') {
      for (const fruit of this.fruits) {
        if (fruit.dead && !fruit.sliced && !fruit.bomb) this.missFruit(fruit);
      }
    }

    this.fruits = this.fruits.filter((fruit) => !fruit.sliced && !fruit.dead);
  }

  updateHalves(dt) {
    for (const half of this.halves) {
      half.vy += this.G * 0.82 * dt;
      half.x += half.vx * dt;
      half.y += half.vy * dt;
      half.rot += half.vr * dt;
      half.life -= dt;
    }
    this.halves = this.halves.filter(
      (half) => half.life > 0 && half.y - half.r < this.H + 120,
    );
  }

  updateParticles(dt) {
    for (const p of this.particles) {
      p.vy += p.gravity * dt;
      p.vx *= p.drag;
      p.vy *= p.drag;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.life -= dt;
    }
    this.particles = this.particles.filter((p) => p.life > 0 && p.y < this.H + 80);
  }

  updateFloaters(dt) {
    for (const f of this.floaters) {
      f.y += f.vy * dt;
      f.x += f.drift * dt;
      f.vy *= 0.97;
      f.life -= dt;
    }
    this.floaters = this.floaters.filter((f) => f.life > 0);
  }

  updateArcs(dt) {
    for (const arc of this.arcs) arc.life -= dt;
    this.arcs = this.arcs.filter((arc) => arc.life > 0);
  }

  updateSlashes(dt) {
    for (const slash of this.slashes) slash.life -= dt;
    this.slashes = this.slashes.filter((slash) => slash.life > 0);
  }

  updateSplats(dt) {
    for (const splat of this.splats) splat.life -= dt;
    this.splats = this.splats.filter((splat) => splat.life > 0);
  }

  updateShockwaves(dt) {
    for (const wave of this.shockwaves) {
      wave.life -= dt;
      const t = 1 - wave.life / wave.max;
      wave.r = wave.startR + (wave.endR - wave.startR) * (1 - (1 - t) * (1 - t));
    }
    this.shockwaves = this.shockwaves.filter((wave) => wave.life > 0);
  }

  updateBlasts(dt) {
    for (const blast of this.blasts) {
      blast.life -= dt;
      const t = 1 - blast.life / blast.max;
      blast.r = blast.maxR * (0.2 + 0.8 * (1 - (1 - t) * (1 - t)));
    }
    this.blasts = this.blasts.filter((blast) => blast.life > 0);
  }

  // -------------------------------------------------------------- render

  draw(now) {
    const ctx = this.ctx;
    const { W, H } = this;

    ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);

    ctx.save();
    if (this.shake > 0.4) {
      ctx.translate(rnd(-this.shake, this.shake) * 0.5, rnd(-this.shake, this.shake) * 0.5);
    }

    if (this.bg) ctx.drawImage(this.bg, 0, 0, W, H);

    this.drawEmbers(ctx);
    this.drawSplats(ctx);

    if (this.state === 'menu') {
      for (const fruit of this.ambient) {
        ctx.save();
        ctx.globalAlpha = fruit.alpha;
        ctx.translate(fruit.x, fruit.y);
        drawWhole(ctx, fruit.type, fruit.r, fruit.rot);
        ctx.restore();
      }
    }

    for (const fruit of this.fruits) {
      if (fruit.sliced) continue;
      ctx.save();
      ctx.translate(fruit.x, fruit.y);
      if (fruit.bomb) {
        drawBomb(ctx, fruit.r, this.time);
      } else {
        drawWhole(ctx, fruit.type, fruit.r, fruit.rot);
      }
      ctx.restore();
    }

    for (const half of this.halves) {
      ctx.save();
      ctx.globalAlpha = clamp(half.life / 0.5, 0, 1);
      ctx.translate(half.x, half.y);
      drawHalf(ctx, half.type, half.r, half.rot);
      ctx.restore();
    }

    this.drawParticles(ctx);
    this.drawBlasts(ctx);
    this.drawShockwaves(ctx);
    this.drawArcs(ctx);
    this.drawSlashes(ctx);

    if (this.state === 'playing' || this.state === 'paused') {
      this.drawBlade(ctx, now);
    }

    this.drawFloaters(ctx);
    this.drawBanner(ctx);

    ctx.restore();

    if (this.flash) {
      const a = (this.flash.life / this.flash.max) * 0.28;
      ctx.fillStyle = `rgba(${this.flash.color}, ${a})`;
      ctx.fillRect(0, 0, W, H);
    }
  }

  drawEmbers(ctx) {
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    for (const e of this.embers) {
      const flicker = 0.6 + 0.4 * Math.sin(this.time * e.speed * 3 + e.phase);
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.r, 0, TAU);
      ctx.fillStyle = e.warm
        ? `rgba(255,190,110,${e.alpha * flicker * 0.5})`
        : `rgba(120,220,255,${e.alpha * flicker * 0.35})`;
      ctx.fill();
    }
    ctx.restore();
  }

  drawSplats(ctx) {
    for (const splat of this.splats) {
      const alpha = clamp(splat.life / splat.max, 0, 1) * 0.42;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = splat.color;
      for (const blob of splat.blobs) {
        ctx.save();
        ctx.translate(splat.x + blob.dx, splat.y + blob.dy);
        ctx.rotate(blob.rot);
        ctx.beginPath();
        ctx.ellipse(0, 0, blob.rx, blob.ry, 0, 0, TAU);
        ctx.fill();
        ctx.restore();
      }
      ctx.restore();
    }
  }

  drawParticles(ctx) {
    ctx.save();
    for (const p of this.particles) {
      const a = clamp(p.life / p.max, 0, 1);
      ctx.globalAlpha = a;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * (0.4 + a * 0.6), 0, TAU);
      ctx.fill();
    }
    ctx.restore();
  }

  drawBlasts(ctx) {
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    for (const blast of this.blasts) {
      const a = clamp(blast.life / blast.max, 0, 1);
      const r = Math.max(1, blast.r);
      const g = ctx.createRadialGradient(blast.x, blast.y, 0, blast.x, blast.y, r);
      g.addColorStop(0, `rgba(255,252,235,${a * 0.95})`);
      g.addColorStop(0.22, `rgba(255,214,110,${a * 0.85})`);
      g.addColorStop(0.5, `rgba(255,110,45,${a * 0.5})`);
      g.addColorStop(1, 'rgba(150,30,10,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(blast.x, blast.y, r, 0, TAU);
      ctx.fill();
    }
    ctx.restore();
  }

  drawShockwaves(ctx) {
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    for (const wave of this.shockwaves) {
      const a = clamp(wave.life / wave.max, 0, 1);
      ctx.globalAlpha = a * 0.55;
      ctx.beginPath();
      ctx.arc(wave.x, wave.y, wave.r, 0, TAU);
      ctx.lineWidth = 3 + a * 11;
      ctx.strokeStyle = wave.color;
      ctx.shadowBlur = 24;
      ctx.shadowColor = wave.color;
      ctx.stroke();
    }
    ctx.restore();
  }

  drawArcs(ctx) {
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    for (const arc of this.arcs) {
      const a = clamp(arc.life / arc.max, 0, 1);
      const points = arc.pts;
      for (const pass of [0, 1]) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i += 1) {
          ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.strokeStyle = pass === 1 ? `rgba(235,255,255,${a})` : `rgba(80,220,255,${a * 0.5})`;
        ctx.lineWidth = pass === 1 ? 2.2 : 10;
        ctx.shadowBlur = pass === 1 ? 16 : 26;
        ctx.shadowColor = '#4de1ff';
        ctx.stroke();
      }
      if (arc.branch) {
        ctx.beginPath();
        ctx.moveTo(arc.branch[0].x, arc.branch[0].y);
        for (let i = 1; i < arc.branch.length; i += 1) {
          ctx.lineTo(arc.branch[i].x, arc.branch[i].y);
        }
        ctx.strokeStyle = `rgba(160,245,255,${a * 0.8})`;
        ctx.lineWidth = 1.4;
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#4de1ff';
        ctx.stroke();
      }
    }
    ctx.restore();
  }

  drawSlashes(ctx) {
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    for (const slash of this.slashes) {
      const t = 1 - slash.life / slash.max;
      const a = 1 - t;
      const len = slash.len * (0.6 + t * 0.8);
      ctx.save();
      ctx.translate(slash.x, slash.y);
      ctx.rotate(slash.angle);
      const grad = ctx.createLinearGradient(-len / 2, 0, len / 2, 0);
      grad.addColorStop(0, 'rgba(255,255,255,0)');
      grad.addColorStop(0.5, `rgba(255,255,255,${a})`);
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2 + a * 5;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(-len / 2, 0);
      ctx.lineTo(len / 2, 0);
      ctx.stroke();
      ctx.restore();
    }
    ctx.restore();
  }

  drawBlade(ctx, now) {
    const pts = this.bladePts.filter((p) => now - p.t < 180);
    if (pts.length < 2) return;
    const color = this.bladeColor();

    const left = [];
    const right = [];
    for (let i = 0; i < pts.length; i += 1) {
      const p = pts[i];
      const prev = pts[Math.max(0, i - 1)];
      const next = pts[Math.min(pts.length - 1, i + 1)];
      const dx = next.x - prev.x;
      const dy = next.y - prev.y;
      const len = Math.hypot(dx, dy) || 1;
      const nx = -dy / len;
      const ny = dx / len;
      const age = clamp((now - p.t) / 180, 0, 1);
      const strength = 1 - age;
      const w = 1.5 + 8.5 * strength;
      left.push({ x: p.x + nx * w, y: p.y + ny * w });
      right.push({ x: p.x - nx * w, y: p.y - ny * w });
    }

    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Glowing ribbon body.
    ctx.beginPath();
    ctx.moveTo(left[0].x, left[0].y);
    for (let i = 1; i < left.length; i += 1) ctx.lineTo(left[i].x, left[i].y);
    for (let i = right.length - 1; i >= 0; i -= 1) ctx.lineTo(right[i].x, right[i].y);
    ctx.closePath();
    ctx.fillStyle = this.hexToRgba(color, 0.26);
    ctx.shadowBlur = 22;
    ctx.shadowColor = color;
    ctx.fill();

    // Bright core line.
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length; i += 1) ctx.lineTo(pts[i].x, pts[i].y);
    ctx.lineWidth = 2.6;
    ctx.strokeStyle = 'rgba(255,255,255,0.92)';
    ctx.shadowBlur = 12;
    ctx.shadowColor = color;
    ctx.stroke();

    // Blade tip.
    const tip = pts[pts.length - 1];
    const glow = ctx.createRadialGradient(tip.x, tip.y, 0, tip.x, tip.y, 24);
    glow.addColorStop(0, 'rgba(255,255,255,0.95)');
    glow.addColorStop(0.32, this.hexToRgba(color, 0.6));
    glow.addColorStop(1, this.hexToRgba(color, 0));
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(tip.x, tip.y, 24, 0, TAU);
    ctx.fill();
    ctx.restore();
  }

  drawFloaters(ctx) {
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (const f of this.floaters) {
      const t = 1 - f.life / f.max;
      const a = f.life > 0.3 ? 1 : f.life / 0.3;
      const scale = 1 + 0.18 * (1 - Math.min(1, t * 5));
      ctx.globalAlpha = a;
      ctx.font = `900 ${Math.round(f.size * scale)}px ${DISPLAY_FONT}`;
      ctx.lineWidth = 4;
      ctx.strokeStyle = 'rgba(3,6,12,0.65)';
      ctx.strokeText(f.text, f.x, f.y);
      ctx.fillStyle = f.color;
      ctx.shadowBlur = 14;
      ctx.shadowColor = f.color;
      ctx.fillText(f.text, f.x, f.y);
      ctx.shadowBlur = 0;
    }
    ctx.restore();
  }

  drawBanner(ctx) {
    if (!this.banner) return;
    const b = this.banner;
    const t = 1 - b.life / b.max;
    const pop = 1 + 0.22 * Math.max(0, 1 - t * 6);
    const alpha = b.life < 0.28 ? b.life / 0.28 : 1;
    const size = clamp(this.W * 0.058, 26, 52);
    const y = this.H * 0.275;

    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.translate(this.W / 2, y);
    ctx.scale(pop, pop);
    ctx.font = `900 ${Math.round(size)}px ${DISPLAY_FONT}`;
    ctx.lineWidth = 8;
    ctx.strokeStyle = 'rgba(3,6,12,0.7)';
    ctx.strokeText(b.text, 0, 0);
    const grad = ctx.createLinearGradient(0, -size / 2, 0, size / 2);
    grad.addColorStop(0, '#ffffff');
    grad.addColorStop(0.55, b.color);
    grad.addColorStop(1, b.color);
    ctx.fillStyle = grad;
    ctx.shadowBlur = 26;
    ctx.shadowColor = b.color;
    ctx.fillText(b.text, 0, 0);
    ctx.shadowBlur = 0;

    if (b.sub) {
      ctx.font = `800 ${Math.round(clamp(size * 0.22, 10, 14))}px ${DISPLAY_FONT}`;
      ctx.fillStyle = 'rgba(255,255,255,0.82)';
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(0,0,0,0.8)';
      ctx.fillText(b.sub, 0, size * 0.72);
    }
    ctx.restore();
  }

  hexToRgba(hex, alpha) {
    const value = hex.replace('#', '');
    const full = value.length === 3 ? value.split('').map((c) => c + c).join('') : value;
    const num = parseInt(full, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  // ----------------------------------------------------------------- hud

  updateHud(force = false) {
    const ui = this.ui;
    if (force || this._hudScore !== this.score) {
      this._hudScore = this.score;
      ui.score.textContent = this.score.toLocaleString('en-US');
      ui.score.classList.remove('bump');
      void ui.score.offsetWidth;
      ui.score.classList.add('bump');
    }
    if (force || this._hudLives !== this.lives) {
      this._hudLives = this.lives;
      ui.lives.forEach((el, index) => {
        el.classList.toggle('lost', index >= this.lives);
      });
      ui.livesEl.setAttribute('aria-label', `${this.lives} of 3 strikes remaining`);
    }
    if (force || this._hudChain !== this.chain) {
      this._hudChain = this.chain;
      ui.chainCount.textContent = String(this.chain);
      ui.chainBlock.classList.toggle('hot', this.chain >= 8);
    }
    const mult = this.multiplier();
    if (force || this._hudMult !== mult) {
      this._hudMult = mult;
      ui.chainMult.textContent = `×${mult}`;
    }
    const arcIn = this.chain > 0 ? Math.max(0, this.nextArc - this.chain) : 0;
    const hint = this.chain > 0
      ? (arcIn > 0 ? `ARC IN ${arcIn} LINK${arcIn === 1 ? '' : 'S'}` : 'ARC READY')
      : '4 LINKS → LIGHTNING ARC';
    if (force || ui.chainHint.textContent !== hint) {
      ui.chainHint.textContent = hint;
    }
    ui.chainFill.style.width = `${clamp(this.chainTimer / CHAIN_WINDOW, 0, 1) * 100}%`;
  }

  updateMenuBest() {
    this.ui.menuBest.textContent = this.best.toLocaleString('en-US');
    this.ui.hudBest.textContent = this.best.toLocaleString('en-US');
  }
}
