// Illustrative 3D CFD scenes for the About Us simulation carousel (three.js), drawn in the same style as the
// stirred-reactor and cyclone views: wireframe equipment, a floor grid and fading flow trails coloured by
// speed or temperature. Kinematic models that show typical flow behaviour, not project data.
// mountSim3D(stage, THREE, kind) draws into stage's <canvas>, pauses while off screen and supports drag-to-rotate.

const VEL = [[0, [30, 64, 230]], [0.22, [0, 170, 255]], [0.42, [0, 220, 130]], [0.6, [140, 230, 40]], [0.78, [255, 200, 0]], [1, [255, 40, 20]]];
const HEAT = [[0, [60, 8, 4]], [0.25, [200, 40, 10]], [0.5, [255, 120, 20]], [0.75, [255, 205, 70]], [1, [255, 250, 225]]];
const ramp = (stops) => (v) => {
  v = Math.max(0, Math.min(1, v));
  for (let i = 1; i < stops.length; i++) {
    if (v <= stops[i][0]) {
      const a = stops[i - 1], b = stops[i], k = (v - a[0]) / (b[0] - a[0]);
      return [0, 1, 2].map((n) => (a[1][n] + (b[1][n] - a[1][n]) * k) / 255);
    }
  }
  return stops[stops.length - 1][1].map((n) => n / 255);
};
const velColor = ramp(VEL), heatColor = ramp(HEAT);
const BG = [7 / 255, 27 / 255, 58 / 255];
const smooth = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

const ghost = (T, color, opacity) => new T.MeshBasicMaterial({ color, transparent: true, opacity, side: T.DoubleSide, depthWrite: false });
const solid = (T, color) => new T.MeshBasicMaterial({ color });
const lineMat = (T, color, opacity) => new T.LineBasicMaterial({ color, transparent: true, opacity });

function ringPts(T, r, axis, at, n = 64) {
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const a = (i / n) * Math.PI * 2, c = r * Math.cos(a), s = r * Math.sin(a);
    pts.push(axis === 'x' ? new T.Vector3(at, c, s) : new T.Vector3(c, at, s));
  }
  return pts;
}
const ring = (T, r, axis, at, color = 0x7fb0f0, o = 0.8) => new T.Line(new T.BufferGeometry().setFromPoints(ringPts(T, r, axis, at)), lineMat(T, color, o));

// Longitudinal ribs on a cylinder along X (axis 'x') or Y (axis 'y').
function ribs(T, r, axis, a0, a1, n = 16) {
  const pts = [];
  for (let k = 0; k < n; k++) {
    const a = (k / n) * Math.PI * 2, c = r * Math.cos(a), s = r * Math.sin(a);
    if (axis === 'x') pts.push(new T.Vector3(a0, c, s), new T.Vector3(a1, c, s));
    else pts.push(new T.Vector3(c, a0, s), new T.Vector3(c, a1, s));
  }
  return new T.LineSegments(new T.BufferGeometry().setFromPoints(pts), lineMat(T, 0x3a5c8e, 0.55));
}

// Liquid body in a horizontal cylinder between two levels, extruded along X.
function band(T, R, yb, yt, x0, x1) {
  const s = new T.Shape();
  const a0 = Math.asin(Math.max(-1, yb / R)), a1 = Math.asin(Math.min(1, yt / R)), N = 24;
  for (let i = 0; i <= N; i++) { const a = a0 + ((a1 - a0) * i) / N; if (i) s.lineTo(R * Math.cos(a), R * Math.sin(a)); else s.moveTo(R * Math.cos(a), R * Math.sin(a)); }
  for (let i = 0; i <= N; i++) { const a = Math.PI - a1 + ((a1 - a0) * i) / N; s.lineTo(R * Math.cos(a), R * Math.sin(a)); }
  s.closePath();
  const g = new T.ExtrudeGeometry(s, { depth: x1 - x0, bevelEnabled: false, curveSegments: 4 });
  g.rotateY(Math.PI / 2); g.translate(x0, 0, 0);
  return g;
}

function floor(T, scene, size, y) {
  const grid = new T.GridHelper(size, 14, 0x2a4a7a, 0x1b3560); grid.position.y = y; scene.add(grid);
}

// Fading particle trails, as in the reactor view. colors: per particle [r,g,b] 0..1.
function trails(T, N, L, additive = false) {
  const hist = new Float32Array(N * L * 3), seg = new Float32Array(N * (L - 1) * 6), col = new Float32Array(N * (L - 1) * 6);
  const geo = new T.BufferGeometry();
  geo.setAttribute('position', new T.BufferAttribute(seg, 3).setUsage(T.DynamicDrawUsage));
  geo.setAttribute('color', new T.BufferAttribute(col, 3).setUsage(T.DynamicDrawUsage));
  const lines = new T.LineSegments(geo, new T.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.95, ...(additive ? { blending: T.AdditiveBlending, depthWrite: false } : {}) }));
  lines.frustumCulled = false; lines.renderOrder = 2;
  const base = additive ? [0, 0, 0] : BG;
  return {
    lines,
    reset(p, x, y, z) { for (let q = 0; q < L; q++) { const k = (p * L + q) * 3; hist[k] = x; hist[k + 1] = y; hist[k + 2] = z; } },
    push(p, x, y, z) {
      for (let q = L - 1; q > 0; q--) { const k = (p * L + q) * 3, j = k - 3; hist[k] = hist[j]; hist[k + 1] = hist[j + 1]; hist[k + 2] = hist[j + 2]; }
      const k = p * L * 3; hist[k] = x; hist[k + 1] = y; hist[k + 2] = z;
    },
    write(colors) {
      let w = 0;
      for (let p = 0; p < N; p++) {
        const c = colors[p];
        for (let q = 0; q < L - 1; q++) for (let e = 0; e < 2; e++) {
          const f = Math.pow(1 - (q + e) / (L - 1), 1.4), a = (p * L + q + e) * 3;
          seg[w] = hist[a]; seg[w + 1] = hist[a + 1]; seg[w + 2] = hist[a + 2];
          for (let n = 0; n < 3; n++) col[w + n] = base[n] + (c[n] - base[n]) * f;
          w += 3;
        }
      }
      geo.attributes.position.needsUpdate = true; geo.attributes.color.needsUpdate = true;
    },
  };
}

/* ---------- Three-phase separator (oil & gas) ---------- */
function separator(T, scene) {
  const R = 1, L = 4.2, x0 = -L / 2, x1 = L / 2, yw = -0.32, yo = 0.12, xw = 1.15;
  scene.add(new T.Mesh(new T.CylinderGeometry(R, R, L, 48, 1, true).rotateZ(Math.PI / 2), ghost(T, 0x1d63c8, 0.08)));
  for (const s of [-1, 1]) { const cap = new T.Mesh(new T.SphereGeometry(R, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), ghost(T, 0x1d63c8, 0.08)); cap.rotation.z = -s * Math.PI / 2; cap.position.x = s * L / 2; scene.add(cap); }
  for (const x of [x0, x1]) scene.add(ring(T, R, 'x', x));
  scene.add(ribs(T, R, 'x', x0, x1));
  scene.add(new T.Mesh(band(T, R * 0.98, -R, yw, x0, xw), ghost(T, 0x1d6fe0, 0.22)));
  scene.add(new T.Mesh(band(T, R * 0.98, yw, yo, x0, xw), ghost(T, 0xd98a1a, 0.22)));
  scene.add(new T.Mesh(band(T, R * 0.98, -R, -0.42, xw + 0.04, x1), ghost(T, 0xd98a1a, 0.22)));
  scene.add(new T.Mesh(band(T, R * 0.98, -R, yo - 0.04, xw, xw + 0.04), ghost(T, 0x9fb3cf, 0.35)));
  const steel = solid(T, 0x9fb3cf);
  for (const [x, y] of [[-1.6, 1], [1.7, 1], [0.8, -1], [1.75, -1]]) { const n = new T.Mesh(new T.CylinderGeometry(0.09, 0.09, 0.45, 16), steel); n.position.set(x, y * (R + 0.1), 0); scene.add(n); }
  const defl = new T.Mesh(new T.BoxGeometry(0.06, 0.5, 0.7), ghost(T, 0x9fb3cf, 0.55)); defl.position.set(-1.35, 0.45, 0); scene.add(defl);
  for (const x of [-1.2, 1.2]) { const saddle = new T.Mesh(new T.BoxGeometry(0.22, 0.4, 1.3), ghost(T, 0x2a4a7a, 0.9)); saddle.position.set(x, -R - 0.12, 0); scene.add(saddle); }
  floor(T, scene, 5.5, -R - 0.32);

  const NG = 420, NL = 420, N = NG + NL, Lt = 18, tr = trails(T, N, Lt); scene.add(tr.lines);
  const P = [], C = new Array(N);
  const chord = (y) => Math.sqrt(Math.max(0, R * R - y * y)) * 0.9;
  const spawn = (i) => {
    const gas = i < NG;
    const p = gas ? { x: -1.6 + (Math.random() - 0.5) * 0.15, y: 0.9, z: (Math.random() - 0.5) * 0.15 }
      : { x: -1.45 + Math.random() * 0.2, y: yo - 0.05 - Math.random() * 0.1, z: (Math.random() - 0.5) * 0.9 };
    p.gas = gas; p.sz = (Math.random() - 0.5) * 2; p.sy = Math.random(); p.age = 0;
    P[i] = p; tr.reset(i, p.x, p.y, p.z);
  };
  for (let i = 0; i < N; i++) spawn(i);
  // Advance one particle; returns false when it left the vessel and was respawned.
  const move = (i, dt) => {
    {
      const p = P[i];
      let vx, vy, vz;
      if (p.gas) {
        // Gas: drops from the inlet onto the deflector, spreads and runs along the vapour space to the gas outlet.
        const k = smooth(-1.65, -1.05, p.x);
        vx = 0.35 + 1.5 * k;
        vy = -1.1 * (1 - k) + 1.2 * k * (0.2 + 0.55 * p.sy + yo - p.y) + (p.x > 1.45 ? 1.4 * smooth(1.45, 1.75, p.x) : 0);
        vz = 0.55 * p.sz * (1 - k) * 0.6 - 0.8 * p.z * k * 0.3 + (p.x > 1.45 ? -2 * p.z : 0);
      } else {
        // Liquid: a slow plume below the inlet that turns and travels towards the weir, droplets settling as it goes.
        const k = smooth(-1.4, -0.6, p.x);
        vx = 0.12 + 0.38 * k;
        vy = -0.55 * (1 - k) + (p.sy - 0.5) * 0.12 * k;
        vz = 0.25 * p.sz * (1 - k);
      }
      p.x += vx * dt; p.y += vy * dt; p.z += vz * dt; p.age += dt;
      if (p.gas && p.y < yo + 0.06) p.y = yo + 0.06;
      if (!p.gas && p.y > yo - 0.04) p.y = yo - 0.04;
      const ch = chord(p.y); if (Math.abs(p.z) > ch) p.z = Math.sign(p.z) * ch;
      if (p.y > R * 0.95) p.y = R * 0.95; if (p.y < -R * 0.92) p.y = -R * 0.92;
      const out = p.gas ? p.x > 1.8 || p.y > 1.02 : p.x > xw - 0.06 || p.age > 9;
      if (out) { spawn(i); return false; }
      C[i] = velColor(Math.hypot(vx, vy, vz) / 1.9);
      return true;
    }
  };
  const step = (dt) => {
    for (let i = 0; i < N; i++) if (move(i, dt)) tr.push(i, P[i].x, P[i].y, P[i].z);
    tr.write(C.map((c) => c ?? velColor(0.3)));
  };
  // Stagger start times so the flow fills the vessel instead of leaving the inlet as one clump.
  for (let i = 0; i < N; i++) { const n = Math.floor(Math.random() * (i < NG ? 90 : 300)); for (let k = 0; k < n; k++) move(i, 0.03); tr.reset(i, P[i].x, P[i].y, P[i].z); }
  for (let i = 0; i < 20; i++) step(0.03);
  return { update: (dt) => step(dt), halfW: 2.25, halfH: 1.55, el: 0.42, az: 0.75, target: [0, -0.05, 0] };
}

/* ---------- Rotary kiln burner flame (cement) ---------- */
function kiln(T, scene) {
  const R = 0.85, L = 5, x0 = -L / 2, x1 = L / 2, bed = -0.42;
  const g = new T.Group(); g.rotation.z = 0.035; scene.add(g);
  g.add(new T.Mesh(new T.CylinderGeometry(R, R, L, 48, 1, true).rotateZ(Math.PI / 2), ghost(T, 0x1d63c8, 0.07)));
  for (const x of [x0, x1]) g.add(ring(T, R, 'x', x));
  const spin = new T.Group(); spin.add(ribs(T, R, 'x', x0, x1, 18)); g.add(spin);
  const tyre = new T.MeshBasicMaterial({ color: 0x7fb0f0, transparent: true, opacity: 0.7 });
  for (const x of [-1.3, 1.3]) { const ty = new T.Mesh(new T.TorusGeometry(R + 0.06, 0.04, 8, 64), tyre); ty.rotation.y = Math.PI / 2; ty.position.x = x; g.add(ty); }
  g.add(new T.Mesh(band(T, R * 0.97, -R, bed, x0, x1), solid(T, 0x6b3f1d)));
  g.add(new T.Mesh(band(T, R * 0.975, bed - 0.02, bed, x0, x1), solid(T, 0xb06a2a)));
  const burner = new T.Mesh(new T.CylinderGeometry(0.075, 0.075, 1.2, 16).rotateZ(Math.PI / 2), solid(T, 0x9fb3cf)); burner.position.set(x0 + 0.05, 0.05, 0); g.add(burner);
  for (const x of [-1.3, 1.3]) { const roller = new T.Mesh(new T.BoxGeometry(0.3, 0.35, 1.1), ghost(T, 0x2a4a7a, 0.9)); roller.position.set(x, -R - 0.25, 0); g.add(roller); }
  floor(T, scene, 6, -R - 0.45);

  const N = 900, Lt = 16, tr = trails(T, N, Lt, true); g.add(tr.lines);
  const core = new T.Points(new T.BufferGeometry(), new T.PointsMaterial({ size: 0.09, vertexColors: true, transparent: true, depthWrite: false, blending: T.AdditiveBlending }));
  const NC = 500, cpos = new Float32Array(NC * 3), ccol = new Float32Array(NC * 3);
  core.geometry.setAttribute('position', new T.BufferAttribute(cpos, 3).setUsage(T.DynamicDrawUsage));
  core.geometry.setAttribute('color', new T.BufferAttribute(ccol, 3).setUsage(T.DynamicDrawUsage));
  core.frustumCulled = false; g.add(core);
  const CP = Array.from({ length: NC }, () => ({ a: Math.random(), ang: Math.random() * 6.283, rr: Math.sqrt(Math.random()) }));
  const tip = x0 + 0.6, P = [], C = new Array(N);
  const spawn = (i, any) => {
    const ang = Math.random() * 6.283, r = Math.sqrt(Math.random()) * 0.06;
    const p = { x: any ? tip + Math.random() * 4 : tip, y: 0.05 + r * Math.sin(ang), z: r * Math.cos(ang), ang, seed: Math.random() };
    P[i] = p; tr.reset(i, p.x, p.y, p.z);
  };
  for (let i = 0; i < N; i++) spawn(i, true);
  let tt = 0;
  const step = (dt) => {
    tt += dt; spin.rotation.x += dt * 0.35;
    for (let i = 0; i < N; i++) {
      const p = P[i], s = p.x - tip, dy = p.y - 0.05, r = Math.hypot(dy, p.z);
      const w = 0.12 + 0.11 * s;
      const u = 0.45 + 2.4 * Math.exp(-(r * r) / (w * w));
      const spread = 0.55 * (r + 0.02) / (w * 3) + 0.08;
      const sw = 0.25 * Math.sin(tt * 3 + p.seed * 9 + s * 2);
      p.x += u * dt;
      p.y += (spread * dy / (r + 1e-3) + sw * 0.4) * dt;
      p.z += (spread * p.z / (r + 1e-3) + sw * 0.3 * Math.cos(p.seed * 6)) * dt;
      if (p.y < bed + 0.04) p.y = bed + 0.04;
      const rr = Math.hypot(p.y, p.z); if (rr > R * 0.92) { p.y *= (R * 0.92) / rr; p.z *= (R * 0.92) / rr; }
      if (p.x > x1 - 0.05) { spawn(i, false); continue; }
      tr.push(i, p.x, p.y, p.z);
      const heat = Math.exp(-s / 2.6) * (0.55 + 0.45 * Math.exp(-(r * r) / (w * w * 1.5)));
      C[i] = heatColor(heat);
    }
    tr.write(C.map((c) => c ?? heatColor(0.5)));
    CP.forEach((p, i) => {
      p.a += dt * 0.9; if (p.a > 1) { p.a = 0; p.ang = Math.random() * 6.283; p.rr = Math.sqrt(Math.random()); }
      const rad = (0.03 + p.a * 0.32) * p.rr;
      cpos[i * 3] = tip + p.a * 1.8; cpos[i * 3 + 1] = 0.05 + rad * Math.sin(p.ang); cpos[i * 3 + 2] = rad * Math.cos(p.ang);
      const c = heatColor(1 - p.a * 0.7).map((v) => v * (1 - p.a * 0.6));
      ccol[i * 3] = c[0]; ccol[i * 3 + 1] = c[1]; ccol[i * 3 + 2] = c[2];
    });
    core.geometry.attributes.position.needsUpdate = true; core.geometry.attributes.color.needsUpdate = true;
  };
  for (let i = 0; i < 120; i++) step(0.03);
  return { update: (dt) => step(dt), halfW: 2.55, halfH: 1.45, el: 0.34, az: 0.9, target: [0, -0.1, 0] };
}

/* ---------- Bubble column reactor (chemical process) ---------- */
function bubbleColumn(T, scene) {
  const R = 0.8, yBot = -1.8, yTop = 1.8, yLiq = 1.3;
  scene.add(new T.Mesh(new T.CylinderGeometry(R, R, yTop - yBot, 48, 1, true), ghost(T, 0x1d63c8, 0.08)));
  scene.add(ring(T, R, 'y', yBot)); scene.add(ring(T, R, 'y', yTop)); scene.add(ring(T, R * 0.99, 'y', yLiq, 0x7fc4ff, 0.9));
  scene.add(ribs(T, R, 'y', yBot, yTop));
  const disc = new T.Mesh(new T.CircleGeometry(R, 48).rotateX(-Math.PI / 2), ghost(T, 0x0e2a52, 0.75)); disc.position.y = yBot; scene.add(disc);
  const grid = new T.GridHelper(2 * R, 10, 0x2a4a7a, 0x1b3560); grid.position.y = yBot + 0.005; scene.add(grid);
  const sp = new T.Mesh(new T.TorusGeometry(0.42, 0.035, 8, 48), solid(T, 0xff6b00)); sp.rotation.x = Math.PI / 2; sp.position.y = yBot + 0.15; scene.add(sp);
  const feed = new T.Mesh(new T.CylinderGeometry(0.04, 0.04, 0.6, 12), solid(T, 0x9fb3cf)); feed.position.set(0.42, yBot - 0.15, 0); scene.add(feed);

  const NB = 240, bubbles = new T.InstancedMesh(new T.SphereGeometry(1, 14, 10), new T.MeshBasicMaterial({ color: 0xdbeafe, transparent: true, opacity: 0.5, depthWrite: false }), NB);
  bubbles.frustumCulled = false; scene.add(bubbles);
  const B = Array.from({ length: NB }, () => ({ y: yBot + 0.15 + Math.random() * (yLiq - yBot - 0.2), th: Math.random() * 6.283, s: 0.025 + Math.random() * 0.045, o: Math.random() * 0.15, ph: Math.random() * 6.283 }));
  const d = new T.Object3D();
  const N = 900, Lt = 18, tr = trails(T, N, Lt); scene.add(tr.lines);
  const yc = (yBot + yLiq) / 2 - 0.05, C = new Array(N);
  const P = Array.from({ length: N }, () => ({ u: 0.25 + Math.random() * 0.75, phi: Math.random() * 6.283, th: Math.random() * 6.283, w: 0.55 + Math.random() * 0.35 }));
  const at = (p) => { const r = R * (0.47 + 0.38 * p.u * Math.cos(p.phi)), y = yc + 1.28 * p.u * Math.sin(p.phi); return [r * Math.cos(p.th), y, r * Math.sin(p.th)]; };
  P.forEach((p, i) => { const [x, y, z] = at(p); tr.reset(i, x, y, z); });
  let tt = 0;
  const step = (dt) => {
    tt += dt;
    B.forEach((b, i) => {
      b.y += (0.75 + b.s * 5) * dt;
      if (b.y > yLiq) { b.y = yBot + 0.15; b.th = Math.random() * 6.283; b.o = Math.random() * 0.15; }
      const k = smooth(yBot + 0.15, yBot + 0.95, b.y);
      const cx = 0.2 * Math.sin(b.y * 1.7 - tt * 0.9), cz = 0.2 * Math.cos(b.y * 1.3 - tt * 0.75);
      const sx = 0.42 * Math.cos(b.th), sz = 0.42 * Math.sin(b.th);
      const px = sx + (cx + b.o * Math.cos(b.th + b.ph) - sx) * k, pz = sz + (cz + b.o * Math.sin(b.th + b.ph) - sz) * k;
      d.position.set(px + 0.02 * Math.sin(tt * 5 + b.ph), b.y, pz); d.scale.setScalar(b.s); d.updateMatrix(); bubbles.setMatrixAt(i, d.matrix);
    });
    bubbles.instanceMatrix.needsUpdate = true;
    P.forEach((p, i) => {
      p.phi -= p.w * dt; p.th += 0.18 * dt;
      const [x, y, z] = at(p); tr.push(i, x, y, z);
      C[i] = velColor(0.15 + 0.85 * p.u * Math.abs(Math.cos(p.phi)));
    });
    tr.write(C);
  };
  for (let i = 0; i < 60; i++) step(0.03);
  return { update: (dt) => step(dt), halfW: 1.15, halfH: 2.35, el: 0.28, az: 0.4, target: [0, 0, 0] };
}

const BUILDERS = { separator, kiln, bubble: bubbleColumn };

export function mountSim3D(stage, T, kind) {
  const canvas = stage.querySelector('canvas');
  const build = BUILDERS[kind];
  if (!canvas || !build) return false;
  let renderer;
  try { renderer = new T.WebGLRenderer({ canvas, antialias: true, alpha: true }); } catch { return false; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  const scene = new T.Scene(), camera = new T.PerspectiveCamera(38, 1, 0.1, 100);
  const sim = build(T, scene);
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let dragAz = 0, dragEl = 0, dragging = false, lx = 0, ly = 0, t = 0, last = performance.now(), visible = true, dist = 7;
  const draw = () => {
    const a = sim.az + 0.45 * Math.sin(t * 0.16) + dragAz, el = sim.el + dragEl, [tx, ty, tz] = sim.target;
    camera.position.set(tx + dist * Math.sin(a) * Math.cos(el), ty + dist * Math.sin(el), tz + dist * Math.cos(a) * Math.cos(el));
    camera.lookAt(tx, ty, tz);
    renderer.render(scene, camera);
  };
  canvas.addEventListener('pointerdown', (e) => { dragging = true; lx = e.clientX; ly = e.clientY; canvas.setPointerCapture(e.pointerId); });
  canvas.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    dragAz -= (e.clientX - lx) * 0.006; dragEl = Math.max(-0.4, Math.min(0.8, dragEl + (e.clientY - ly) * 0.004));
    lx = e.clientX; ly = e.clientY; if (reduce) draw();
  });
  const end = () => { dragging = false; };
  canvas.addEventListener('pointerup', end); canvas.addEventListener('pointercancel', end);
  const resize = () => {
    const w = stage.clientWidth, h = stage.clientHeight; if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.fov = camera.aspect < 0.9 ? 42 : 36; camera.updateProjectionMatrix();
    const tanH = Math.tan((camera.fov * Math.PI) / 360);
    dist = Math.max(sim.halfH / tanH, sim.halfW / (tanH * camera.aspect)) * 1.08;
    draw();
  };
  new ResizeObserver(resize).observe(stage);
  new IntersectionObserver((e) => { visible = e[0].isIntersecting; last = performance.now(); }).observe(stage);
  resize();
  const loop = (now) => {
    const dt = Math.min((now - last) / 1000, 0.05); last = now;
    if (visible && !document.hidden) { if (!reduce) { t += dt; sim.update(dt, t); if (!dragging) { dragAz *= 0.995; dragEl *= 0.995; } } draw(); }
    requestAnimationFrame(loop);
  };
  requestAnimationFrame((n) => { last = n; requestAnimationFrame(loop); });
  return true;
}
