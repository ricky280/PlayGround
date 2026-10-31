// Procedural fruit artwork. Everything is drawn with canvas paths so the game
// stays crisp at any resolution and needs no image assets.

export const FRUIT_TYPES = {
  watermelon: {
    r: 44,
    juice: '#ff3b5c',
    flesh: '#f43f5e',
    fleshLight: '#ff97a8',
    fleshDeep: '#c81e3f',
    rind: '#1d7a41',
    rindDark: '#0a3a1f',
    rindLight: '#46b96c',
    pith: '#f7ffe9',
    seeds: '#2a0d14',
    weight: 1.15,
  },
  orange: {
    r: 34,
    juice: '#ff9f1c',
    flesh: '#ffb340',
    fleshLight: '#ffd79a',
    fleshDeep: '#e8801a',
    rind: '#f08a1e',
    rindDark: '#b65a0c',
    rindLight: '#ffbe5c',
    pith: '#fff3d6',
    seeds: '#d9b16b',
    weight: 1,
  },
  apple: {
    r: 33,
    juice: '#e63946',
    flesh: '#fff3d6',
    fleshLight: '#fffdf4',
    fleshDeep: '#e8d3a8',
    rind: '#e0333f',
    rindDark: '#8c1420',
    rindLight: '#ff6b73',
    pith: '#fff8e6',
    seeds: '#3b2417',
    weight: 1,
  },
  lemon: {
    r: 30,
    juice: '#f7d642',
    flesh: '#fff0a8',
    fleshLight: '#fffbe0',
    fleshDeep: '#e6c94a',
    rind: '#f4d03f',
    rindDark: '#b8950d',
    rindLight: '#ffe873',
    pith: '#fffdf0',
    seeds: '#e8d27a',
    weight: 0.95,
  },
  kiwi: {
    r: 31,
    juice: '#8ed14f',
    flesh: '#8bd24a',
    fleshLight: '#c8f08a',
    fleshDeep: '#5f9e2c',
    rind: '#8a5a2b',
    rindDark: '#5a3615',
    rindLight: '#b07a45',
    pith: '#f3ffe0',
    seeds: '#1d2411',
    weight: 0.95,
  },
  plum: {
    r: 28,
    juice: '#9b3fbf',
    flesh: '#f3d9ff',
    fleshLight: '#fdf0ff',
    fleshDeep: '#d8a6ef',
    rind: '#7b2d8e',
    rindDark: '#45104f',
    rindLight: '#b45ad0',
    pith: '#f7e9ff',
    seeds: '#5b2a1a',
    weight: 0.9,
  },
};

export const FRUIT_IDS = Object.keys(FRUIT_TYPES);

export function randomFruitType() {
  return FRUIT_IDS[(Math.random() * FRUIT_IDS.length) | 0];
}

export function fruitRadius(type, scale = 1) {
  return FRUIT_TYPES[type].r * scale;
}

function circlePath(ctx, r) {
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
}

function gloss(ctx, r) {
  const g = ctx.createRadialGradient(-r * 0.36, -r * 0.42, r * 0.02, -r * 0.36, -r * 0.42, r * 0.95);
  g.addColorStop(0, 'rgba(255,255,255,0.5)');
  g.addColorStop(0.35, 'rgba(255,255,255,0.12)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.beginPath();
  ctx.arc(-r * 0.36, -r * 0.42, r * 0.95, 0, Math.PI * 2);
  ctx.fillStyle = g;
  ctx.fill();
}

function rim(ctx, r, color, width) {
  circlePath(ctx, r);
  ctx.lineWidth = width;
  ctx.strokeStyle = color;
  ctx.stroke();
}

// Deterministic little pseudo-random generator so fruit details are stable.
function seeded(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

function drawLeaf(ctx, x, y, r, angle) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.beginPath();
  ctx.ellipse(r * 0.32, 0, r * 0.38, r * 0.16, 0, 0, Math.PI * 2);
  const g = ctx.createLinearGradient(-r * 0.1, 0, r * 0.65, 0);
  g.addColorStop(0, '#2f8f45');
  g.addColorStop(1, '#6ed06a');
  ctx.fillStyle = g;
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(r * 0.62, 0);
  ctx.strokeStyle = 'rgba(20,80,30,0.55)';
  ctx.lineWidth = Math.max(1, r * 0.035);
  ctx.stroke();
  ctx.restore();
}

function drawStem(ctx, r, color = '#5a3a1e') {
  ctx.beginPath();
  ctx.moveTo(0, -r * 0.82);
  ctx.quadraticCurveTo(r * 0.12, -r * 1.02, r * 0.16, -r * 1.22);
  ctx.lineWidth = r * 0.12;
  ctx.lineCap = 'round';
  ctx.strokeStyle = color;
  ctx.stroke();
}

export function drawWhole(ctx, type, r, rot = 0) {
  const f = FRUIT_TYPES[type];
  if (!f) return;
  ctx.save();
  ctx.rotate(rot);

  if (type === 'lemon') {
    ctx.scale(1.12, 0.9);
  }

  const g = ctx.createRadialGradient(-r * 0.34, -r * 0.4, r * 0.08, 0, 0, r * 1.02);
  g.addColorStop(0, f.rindLight);
  g.addColorStop(0.55, f.rind);
  g.addColorStop(1, f.rindDark);

  circlePath(ctx, r);
  ctx.fillStyle = g;
  ctx.fill();

  // ---------------------------------------------------------- patterns
  ctx.save();
  circlePath(ctx, r);
  ctx.clip();

  if (type === 'watermelon') {
    for (let i = -3; i <= 3; i += 1) {
      const x = i * r * 0.31;
      ctx.beginPath();
      ctx.moveTo(x - r * 0.08, -r);
      ctx.quadraticCurveTo(x + r * 0.24, -r * 0.1, x - r * 0.04, r);
      ctx.lineWidth = r * 0.13;
      ctx.strokeStyle = 'rgba(7,48,25,0.62)';
      ctx.stroke();
    }
    const shade = ctx.createLinearGradient(0, -r, 0, r);
    shade.addColorStop(0, 'rgba(255,255,255,0.12)');
    shade.addColorStop(0.5, 'rgba(0,0,0,0)');
    shade.addColorStop(1, 'rgba(0,0,0,0.28)');
    ctx.fillStyle = shade;
    ctx.fillRect(-r, -r, r * 2, r * 2);
  } else if (type === 'orange') {
    const rnd = seeded(7);
    ctx.fillStyle = 'rgba(120,55,0,0.16)';
    for (let i = 0; i < 26; i += 1) {
      const a = rnd() * Math.PI * 2;
      const d = Math.sqrt(rnd()) * r * 0.88;
      ctx.beginPath();
      ctx.arc(Math.cos(a) * d, Math.sin(a) * d, r * 0.028, 0, Math.PI * 2);
      ctx.fill();
    }
    const shade = ctx.createLinearGradient(0, -r, 0, r);
    shade.addColorStop(0, 'rgba(255,255,255,0.16)');
    shade.addColorStop(0.55, 'rgba(0,0,0,0)');
    shade.addColorStop(1, 'rgba(90,35,0,0.3)');
    ctx.fillStyle = shade;
    ctx.fillRect(-r, -r, r * 2, r * 2);
  } else if (type === 'apple') {
    const shade = ctx.createLinearGradient(0, -r, 0, r);
    shade.addColorStop(0, 'rgba(255,255,255,0.22)');
    shade.addColorStop(0.45, 'rgba(0,0,0,0)');
    shade.addColorStop(1, 'rgba(70,0,10,0.34)');
    ctx.fillStyle = shade;
    ctx.fillRect(-r, -r, r * 2, r * 2);
    ctx.beginPath();
    ctx.moveTo(0, -r * 0.86);
    ctx.quadraticCurveTo(r * 0.02, -r * 0.45, 0, -r * 0.2);
    ctx.strokeStyle = 'rgba(70,0,10,0.28)';
    ctx.lineWidth = r * 0.09;
    ctx.stroke();
  } else if (type === 'kiwi') {
    const rnd = seeded(19);
    ctx.fillStyle = 'rgba(255,235,200,0.16)';
    for (let i = 0; i < 46; i += 1) {
      const a = rnd() * Math.PI * 2;
      const d = Math.sqrt(rnd()) * r * 0.94;
      ctx.beginPath();
      ctx.arc(Math.cos(a) * d, Math.sin(a) * d, r * 0.02, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = 'rgba(40,20,5,0.2)';
    for (let i = 0; i < 22; i += 1) {
      const a = rnd() * Math.PI * 2;
      const d = Math.sqrt(rnd()) * r * 0.9;
      ctx.beginPath();
      ctx.arc(Math.cos(a) * d, Math.sin(a) * d, r * 0.025, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (type === 'lemon') {
    const rnd = seeded(31);
    ctx.fillStyle = 'rgba(255,255,220,0.2)';
    for (let i = 0; i < 34; i += 1) {
      const a = rnd() * Math.PI * 2;
      const d = Math.sqrt(rnd()) * r * 0.92;
      ctx.beginPath();
      ctx.arc(Math.cos(a) * d, Math.sin(a) * d, r * 0.024, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (type === 'plum') {
    ctx.beginPath();
    ctx.moveTo(0, -r * 0.9);
    ctx.quadraticCurveTo(-r * 0.3, 0, 0, r * 0.9);
    ctx.strokeStyle = 'rgba(50,5,65,0.4)';
    ctx.lineWidth = r * 0.1;
    ctx.stroke();
    const shade = ctx.createLinearGradient(0, -r, 0, r);
    shade.addColorStop(0, 'rgba(255,255,255,0.18)');
    shade.addColorStop(0.5, 'rgba(0,0,0,0)');
    shade.addColorStop(1, 'rgba(35,0,45,0.3)');
    ctx.fillStyle = shade;
    ctx.fillRect(-r, -r, r * 2, r * 2);
  }

  ctx.restore();

  // ------------------------------------------------------------ details
  if (type === 'lemon') {
    ctx.beginPath();
    ctx.ellipse(r * 0.99, 0, r * 0.13, r * 0.07, 0, 0, Math.PI * 2);
    ctx.fillStyle = f.rindLight;
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(-r * 0.99, 0, r * 0.13, r * 0.07, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  if (type === 'apple') {
    drawStem(ctx, r);
    drawLeaf(ctx, r * 0.22, -r * 0.98, r, -0.5);
  } else if (type === 'orange') {
    drawLeaf(ctx, r * 0.1, -r * 0.9, r * 0.85, -0.9);
  } else if (type === 'plum') {
    drawStem(ctx, r, '#4a2a12');
  }

  gloss(ctx, r);
  rim(ctx, r, 'rgba(0,0,0,0.22)', Math.max(1.4, r * 0.045));

  ctx.restore();
}

function drawFleshPattern(ctx, type, r, f) {
  if (type === 'watermelon') {
    const seeds = [
      [-0.42, -0.3, 0.5], [-0.05, -0.5, 0.1], [0.34, -0.34, -0.4],
      [-0.22, -0.62, 0.9], [0.12, -0.2, -0.2], [0.52, -0.62, 0.6],
      [-0.6, -0.5, -0.7], [0.28, -0.74, 0.2], [-0.05, -0.76, 0.4],
    ];
    for (const [x, y, rot] of seeds) {
      ctx.save();
      ctx.translate(x * r, y * r);
      ctx.rotate(rot);
      ctx.beginPath();
      ctx.ellipse(0, 0, r * 0.045, r * 0.085, 0, 0, Math.PI * 2);
      ctx.fillStyle = f.seeds;
      ctx.fill();
      ctx.restore();
    }
  } else if (type === 'orange' || type === 'lemon') {
    const segs = type === 'orange' ? 9 : 8;
    ctx.strokeStyle = type === 'orange' ? 'rgba(255,245,215,0.8)' : 'rgba(255,255,255,0.85)';
    ctx.lineWidth = Math.max(1, r * 0.04);
    for (let i = 0; i < segs; i += 1) {
      const a = Math.PI + (i / segs) * Math.PI;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.2, Math.PI, Math.PI * 2);
    ctx.fillStyle = f.pith;
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.7)';
    ctx.lineWidth = Math.max(1, r * 0.03);
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.78, Math.PI, Math.PI * 2);
    ctx.stroke();
  } else if (type === 'kiwi') {
    ctx.beginPath();
    ctx.ellipse(0, -r * 0.06, r * 0.2, r * 0.17, 0, 0, Math.PI * 2);
    ctx.fillStyle = f.pith;
    ctx.fill();
    for (let i = 0; i < 11; i += 1) {
      const a = Math.PI + ((i + 0.5) / 11) * Math.PI;
      const d = r * 0.45;
      ctx.save();
      ctx.translate(Math.cos(a) * d, Math.sin(a) * d);
      ctx.rotate(a);
      ctx.beginPath();
      ctx.ellipse(0, 0, r * 0.022, r * 0.045, 0, 0, Math.PI * 2);
      ctx.fillStyle = f.seeds;
      ctx.fill();
      ctx.restore();
    }
    ctx.strokeStyle = 'rgba(255,255,255,0.32)';
    ctx.lineWidth = Math.max(1, r * 0.025);
    for (let i = 0; i < 14; i += 1) {
      const a = Math.PI + ((i + 0.25) / 14) * Math.PI;
      ctx.beginPath();
      ctx.moveTo(Math.cos(a) * r * 0.22, Math.sin(a) * r * 0.22);
      ctx.lineTo(Math.cos(a) * r * 0.82, Math.sin(a) * r * 0.82);
      ctx.stroke();
    }
  } else if (type === 'apple') {
    ctx.beginPath();
    ctx.ellipse(0, -r * 0.2, r * 0.2, r * 0.26, 0, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(160,120,70,0.4)';
    ctx.lineWidth = Math.max(1, r * 0.035);
    ctx.stroke();
    ctx.fillStyle = f.seeds;
    ctx.beginPath();
    ctx.ellipse(-r * 0.08, -r * 0.24, r * 0.03, r * 0.06, 0.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(r * 0.08, -r * 0.16, r * 0.03, r * 0.06, -0.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(230,210,170,0.5)';
    ctx.lineWidth = Math.max(1, r * 0.03);
    for (let i = 0; i < 6; i += 1) {
      const a = Math.PI + ((i + 0.5) / 6) * Math.PI;
      ctx.beginPath();
      ctx.moveTo(Math.cos(a) * r * 0.22, Math.sin(a) * r * 0.24);
      ctx.lineTo(Math.cos(a) * r * 0.75, Math.sin(a) * r * 0.75);
      ctx.stroke();
    }
  } else if (type === 'plum') {
    ctx.beginPath();
    ctx.ellipse(0, -r * 0.1, r * 0.16, r * 0.24, 0, 0, Math.PI * 2);
    ctx.fillStyle = f.seeds;
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.35)';
    ctx.lineWidth = Math.max(1, r * 0.03);
    for (let i = 0; i < 7; i += 1) {
      const a = Math.PI + ((i + 0.5) / 7) * Math.PI;
      ctx.beginPath();
      ctx.moveTo(Math.cos(a) * r * 0.2, Math.sin(a) * r * 0.2);
      ctx.lineTo(Math.cos(a) * r * 0.78, Math.sin(a) * r * 0.78);
      ctx.stroke();
    }
  }
}

export function drawHalf(ctx, type, r, rot = 0) {
  const f = FRUIT_TYPES[type];
  if (!f) return;
  ctx.save();
  ctx.rotate(rot);

  const bodyPath = () => {
    ctx.beginPath();
    ctx.arc(0, 0, r, Math.PI, Math.PI * 2);
    ctx.closePath();
  };

  bodyPath();
  ctx.save();
  ctx.clip();

  const g = ctx.createRadialGradient(-r * 0.25, -r * 0.35, r * 0.06, 0, 0, r * 1.12);
  g.addColorStop(0, f.fleshLight);
  g.addColorStop(0.55, f.flesh);
  g.addColorStop(1, f.fleshDeep);
  ctx.fillStyle = g;
  ctx.fillRect(-r, -r, r * 2, r);

  drawFleshPattern(ctx, type, r, f);

  // Rind band hugging the curved edge.
  ctx.beginPath();
  ctx.arc(0, 0, r - r * 0.075, Math.PI, Math.PI * 2);
  ctx.lineWidth = r * 0.15;
  ctx.strokeStyle = f.rind;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, r - r * 0.155, Math.PI, Math.PI * 2);
  ctx.lineWidth = Math.max(1.5, r * 0.035);
  ctx.strokeStyle = f.pith;
  ctx.stroke();

  // Subtle shading on the flat face.
  const shade = ctx.createLinearGradient(0, -r, 0, 0);
  shade.addColorStop(0, 'rgba(0,0,0,0)');
  shade.addColorStop(1, 'rgba(0,0,0,0.16)');
  ctx.fillStyle = shade;
  ctx.fillRect(-r, -r, r * 2, r);

  ctx.restore();

  // Bright cut edge.
  ctx.beginPath();
  ctx.moveTo(-r, 0);
  ctx.lineTo(r, 0);
  ctx.lineWidth = Math.max(1.5, r * 0.045);
  ctx.strokeStyle = f.fleshLight;
  ctx.globalAlpha = 0.85;
  ctx.stroke();
  ctx.globalAlpha = 1;

  bodyPath();
  ctx.strokeStyle = 'rgba(0,0,0,0.18)';
  ctx.lineWidth = Math.max(1, r * 0.03);
  ctx.stroke();

  ctx.restore();
}

export function drawBomb(ctx, r, time) {
  ctx.save();

  const pulse = 0.5 + 0.5 * Math.sin(time * 4);
  const halo = ctx.createRadialGradient(0, 0, r * 0.6, 0, 0, r * 1.6);
  halo.addColorStop(0, `rgba(255,60,80,${0.16 + pulse * 0.1})`);
  halo.addColorStop(1, 'rgba(255,60,80,0)');
  ctx.beginPath();
  ctx.arc(0, 0, r * 1.6, 0, Math.PI * 2);
  ctx.fillStyle = halo;
  ctx.fill();

  const g = ctx.createRadialGradient(-r * 0.38, -r * 0.42, r * 0.05, 0, 0, r * 1.05);
  g.addColorStop(0, '#5a6472');
  g.addColorStop(0.35, '#262d3a');
  g.addColorStop(1, '#080b11');
  circlePath(ctx, r);
  ctx.fillStyle = g;
  ctx.fill();

  // Red warning band.
  ctx.save();
  circlePath(ctx, r);
  ctx.clip();
  ctx.fillStyle = 'rgba(255,50,70,0.85)';
  ctx.fillRect(-r, r * 0.18, r * 2, r * 0.16);
  ctx.fillStyle = 'rgba(255,255,255,0.5)';
  ctx.fillRect(-r, r * 0.18, r * 2, r * 0.025);
  ctx.restore();

  // Fuse.
  ctx.beginPath();
  ctx.moveTo(r * 0.16, -r * 0.92);
  ctx.bezierCurveTo(r * 0.5, -r * 1.16, r * 0.16, -r * 1.36, r * 0.48, -r * 1.5);
  ctx.lineWidth = Math.max(2, r * 0.1);
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#8a6b45';
  ctx.stroke();

  // Spark.
  const sx = r * 0.48;
  const sy = -r * 1.5;
  const spark = ctx.createRadialGradient(sx, sy, 0, sx, sy, r * 0.4);
  spark.addColorStop(0, '#fffbe0');
  spark.addColorStop(0.3, '#ffcf5c');
  spark.addColorStop(1, 'rgba(255,100,20,0)');
  ctx.beginPath();
  ctx.arc(sx, sy, r * 0.4, 0, Math.PI * 2);
  ctx.fillStyle = spark;
  ctx.fill();

  for (let i = 0; i < 5; i += 1) {
    const a = time * 6 + i * 1.7;
    ctx.beginPath();
    ctx.arc(sx + Math.cos(a) * r * 0.22, sy + Math.sin(a * 1.3) * r * 0.22, r * 0.035, 0, Math.PI * 2);
    ctx.fillStyle = i % 2 ? '#ffcf5c' : '#ff8a1c';
    ctx.fill();
  }

  gloss(ctx, r);
  rim(ctx, r, 'rgba(0,0,0,0.5)', Math.max(1.4, r * 0.04));
  ctx.restore();
}
