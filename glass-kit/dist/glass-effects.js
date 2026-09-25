const jt = { duration: 1e3, strength: 2, width: 0.8, dispersion: 3.95, glow: 0.16, sheen: 0.03, stretch: 0.03, lift: 3, hoverScale: 1.027, travel: [0.25, 0.1, 0.35, 1], envelope: [{ t: 0, value: 0, ease: [0.32655218544944264, 0.3229977762708367, 0.6666666666666666, 1] }, { t: 0.15168551336815161, value: 0.16560486821207446, ease: [0.6722058096816348, 0.47763245741762356, 0.6666666666666666, 1] }, { t: 0.4671078257586241, value: 0.6027262121455464, ease: [0.3333333333333333, 0, 0.7080219660030812, 0.5933809039435681] }, { t: 0.65, value: 0.65, ease: [0.3143461192584396, 0.37022242172410774, 0.6666666666666666, 1] }, { t: 1, value: 0 }], radius: 0.9, highlightSize: 1, coreGlow: 0, coreDuration: 1120, ringSoftness: 1, stretchDuration: 1310, stretchDelay: 0, origin: { x: 0, y: 0.5 }, hoverOrigin: "entry", clickOrigin: "pointer", spectrum: [{ position: 0, color: "#ff1e00" }, { position: 0.2329296875, color: "#ffd26e" }, { position: 0.495, color: "#70e7e3" }, { position: 0.7195052083333333, color: "#824dff" }, { position: 1, color: "#e8c2ff" }], spectrumShift: [{ t: 0, value: -92.9844709325688, ease: [0.36634580377978937, 1, 0.6627300631314912, 0.7231238447929026] }, { t: 0.483781965578251, value: 8.433347588082881, ease: [0.2931044319278276, 0, 0.42620556798208975, 0.42442775053487414] }, { t: 1, value: 177.71173510359222 }], coreEnvelope: [{ t: 0, value: 0 }, { t: 0.14, value: 0.72 }, { t: 0.28, value: 1 }, { t: 0.65, value: 0.65 }, { t: 1, value: 0 }], coreMotion: { startScale: 1, releaseScale: 1, endScale: 1, contractStart: 0, contractCurve: [0, 0, 1, 1], expandCurve: [0, 0, 1, 1] }, stretchTravel: [0.25, 0.1, 0.35, 1], stretchEnvelope: [{ t: 0, value: 0 }, { t: 0.14, value: 0.72 }, { t: 0.28, value: 1 }, { t: 0.65, value: 0.65 }, { t: 1, value: 0 }], liftMotion: { duration: 540, delay: 0, curve: [0.25, 0.1, 0.14, 1], keyframes: [{ t: 0, value: 0 }, { t: 0.25, value: 0.25 }, { t: 0.5, value: 0.5 }, { t: 0.75, value: 0.75 }, { t: 1, value: 1 }], returnDuration: 240, returnCurve: [0.22, 0.61, 0.36, 1], returnKeyframes: [{ t: 0, value: 0 }, { t: 0.25, value: 0.25 }, { t: 0.5, value: 0.5 }, { t: 0.75, value: 0.75 }, { t: 1, value: 1 }] }, scaleMotion: { duration: 530, delay: 0, curve: [0.25, 0.1, 0.25, 1], keyframes: [{ t: 0, value: 0 }, { t: 0.25, value: 0.25 }, { t: 0.5, value: 0.5 }, { t: 0.75, value: 0.75 }, { t: 1, value: 1 }], returnDuration: 280, returnCurve: [0.22, 0.61, 0.36, 1], returnKeyframes: [{ t: 0, value: 0 }, { t: 0.25, value: 0.25 }, { t: 0.5, value: 0.5 }, { t: 0.75, value: 0.75 }, { t: 1, value: 1 }] }, warmup: { enabled: !1, start: 0.08, release: 0.78, previewDuration: 1e3, releaseFade: 336, strength: 3.5, width: 0.45, glow: 0.075, sheen: 0.2, coreGlow: 0.28, stretch: 3e-3, stretchY: 0, curve: [0.42, 0, 0.58, 1], coreEnvelope: [{ t: 0, value: 1 }, { t: 0.25, value: 1 }, { t: 0.5, value: 1 }, { t: 0.75, value: 1 }, { t: 1, value: 1 }] }, surface: { tintColor: "#EBE9E6", cornerRadius: null, refraction: 2, chromAberration: 0.645, edgeHighlight: 0.34, specular: 0.41, specularSharpness: 0.2, fresnel: 0.85, distortion: 1, zRadius: 17, opacity: 1, brightness: 1, shadowOpacity: 0.11, shadowSpread: 0, shadowCenterOpacity: 0.606, shadowCenterSpread: 2, videoShadowOpacity: 0.16, videoShadowSpread: 8, bevelMode: "pill", tintOpacity: 2, videoTintOpacity: 0.28, blur: 1.7, saturation: 1, shine: 1, edge: 1 } }, Kt = { duration: 2500, strength: 12, width: 0.61, dispersion: 3.9, glow: 0.09, sheen: 0.72, stretch: 0.02, lift: 0, hoverScale: 1, travel: [0.51, 0, 0.32, 1], envelope: [{ t: 0, value: 0 }, { t: 0.14, value: 0.72 }, { t: 0.28, value: 1 }, { t: 0.65, value: 0.65 }, { t: 1, value: 0 }], radius: 1.17, highlightSize: 0.81, coreGlow: 0.5, coreDuration: 770, ringSoftness: 1, stretchDuration: 1680, stretchDelay: 0, clickHighlightSize: 0.12, origin: { x: 0.5, y: 0 }, hoverOrigin: "fixed", clickOrigin: "pointer", spectrum: [{ position: 0, color: "#ff7664" }, { position: 0.16904947916666666, color: "#fff370" }, { position: 0.48973958333333334, color: "#70e7e3" }, { position: 0.8168359375, color: "#7495ff" }, { position: 1, color: "#d38aff" }], spectrumShift: [{ t: 0, value: -5.356282456234226 }, { t: 0.5009493607037449, value: 2.013691846458755 }, { t: 1, value: 4.172934846619057 }], coreEnvelope: [{ t: 0, value: 0, ease: [0.6743026044952511, 0.005498599139854103, 0.6666666666666666, 1] }, { t: 0.145345934790629, value: 0 }, { t: 0.28748319613539935, value: 0 }, { t: 0.5896128770060874, value: 0.40212665292574545 }, { t: 1, value: 0 }], coreMotion: { startScale: 1.71, releaseScale: 0.27, endScale: 1.6, contractStart: 0.22, contractCurve: [0.46, 0, 0.76, 1], expandCurve: [0.26, 0, 0.19, 1] }, stretchTravel: [0.51, 0, 0.32, 1], stretchEnvelope: [{ t: 0, value: 0 }, { t: 0.14, value: 0.72 }, { t: 0.28, value: 1 }, { t: 0.65, value: 0.65 }, { t: 1, value: 0 }], liftMotion: { duration: 360, delay: 0, curve: [0.22, 0.61, 0.36, 1], keyframes: [{ t: 0, value: 0 }, { t: 0.25, value: 0.25 }, { t: 0.5, value: 0.5 }, { t: 0.75, value: 0.75 }, { t: 1, value: 1 }], returnDuration: 240, returnCurve: [0.22, 0.61, 0.36, 1], returnKeyframes: [{ t: 0, value: 0 }, { t: 0.25, value: 0.25 }, { t: 0.5, value: 0.5 }, { t: 0.75, value: 0.75 }, { t: 1, value: 1 }] }, scaleMotion: { duration: 420, delay: 0, curve: [0.22, 0.61, 0.36, 1], keyframes: [{ t: 0, value: 0 }, { t: 0.25, value: 0.25 }, { t: 0.5, value: 0.5 }, { t: 0.75, value: 0.75 }, { t: 1, value: 1 }], returnDuration: 280, returnCurve: [0.22, 0.61, 0.36, 1], returnKeyframes: [{ t: 0, value: 0 }, { t: 0.25, value: 0.25 }, { t: 0.5, value: 0.5 }, { t: 0.75, value: 0.75 }, { t: 1, value: 1 }] }, warmup: { enabled: !0, start: 0.13, release: 0.54, previewDuration: 650, releaseFade: 140, strength: 3.5, width: 0.45, glow: 0.075, sheen: 0.2, coreGlow: 0.28, stretch: 3e-3, stretchY: 0.02, curve: [0.42, 0, 0.58, 1], coreEnvelope: [{ t: 0, value: 1 }, { t: 0.25, value: 1 }, { t: 0.5, value: 1 }, { t: 0.75, value: 0.65 }, { t: 1, value: 0.25 }] } }, st = {
  button: jt,
  quote: Kt
}, Qt = { duration: 700, strength: 5, width: 0.28, dispersion: 0.65, glow: 0.18, sheen: 0.2, stretch: 0.012, lift: 2, hoverScale: 1.025, travel: [0.25, 0.1, 0.35, 1], envelope: [{ t: 0, value: 0 }, { t: 0.14, value: 0.72 }, { t: 0.28, value: 1 }, { t: 0.65, value: 0.65 }, { t: 1, value: 0 }], radius: 1, highlightSize: 0.35, coreGlow: 0.4, coreDuration: 700, ringSoftness: 0.65, stretchDuration: 700, stretchDelay: 0, origin: { x: 0, y: 0.5 }, hoverOrigin: "entry", clickOrigin: "pointer", spectrum: [{ position: 0, color: "#ff7664" }, { position: 0.25, color: "#ffd26e" }, { position: 0.5, color: "#70e7e3" }, { position: 0.75, color: "#7495ff" }, { position: 1, color: "#d38aff" }], spectrumShift: [{ t: 0, value: 0 }, { t: 0.5, value: 80 }, { t: 1, value: 160 }], coreEnvelope: [{ t: 0, value: 0 }, { t: 0.14, value: 0.72 }, { t: 0.28, value: 1 }, { t: 0.65, value: 0.65 }, { t: 1, value: 0 }], coreMotion: { startScale: 1, releaseScale: 1, endScale: 1, contractStart: 0, contractCurve: [0, 0, 1, 1], expandCurve: [0, 0, 1, 1] }, stretchTravel: [0.25, 0.1, 0.35, 1], stretchEnvelope: [{ t: 0, value: 0 }, { t: 0.14, value: 0.72 }, { t: 0.28, value: 1 }, { t: 0.65, value: 0.65 }, { t: 1, value: 0 }], liftMotion: { duration: 360, delay: 0, curve: [0.22, 0.61, 0.36, 1], keyframes: [{ t: 0, value: 0 }, { t: 0.25, value: 0.25 }, { t: 0.5, value: 0.5 }, { t: 0.75, value: 0.75 }, { t: 1, value: 1 }], returnDuration: 240, returnCurve: [0.22, 0.61, 0.36, 1], returnKeyframes: [{ t: 0, value: 0 }, { t: 0.25, value: 0.25 }, { t: 0.5, value: 0.5 }, { t: 0.75, value: 0.75 }, { t: 1, value: 1 }] }, scaleMotion: { duration: 420, delay: 0, curve: [0.22, 0.61, 0.36, 1], keyframes: [{ t: 0, value: 0 }, { t: 0.25, value: 0.25 }, { t: 0.5, value: 0.5 }, { t: 0.75, value: 0.75 }, { t: 1, value: 1 }], returnDuration: 280, returnCurve: [0.22, 0.61, 0.36, 1], returnKeyframes: [{ t: 0, value: 0 }, { t: 0.25, value: 0.25 }, { t: 0.5, value: 0.5 }, { t: 0.75, value: 0.75 }, { t: 1, value: 1 }] }, warmup: { enabled: !1, start: 0.08, release: 0.78, previewDuration: 1e3, releaseFade: 210, strength: 3.5, width: 0.45, glow: 0.075, sheen: 0.2, coreGlow: 0.28, stretch: 3e-3, stretchY: 0, curve: [0.42, 0, 0.58, 1], coreEnvelope: [{ t: 0, value: 1 }, { t: 0.25, value: 1 }, { t: 0.5, value: 1 }, { t: 0.75, value: 1 }, { t: 1, value: 1 }] }, surface: { tintColor: null, cornerRadius: null, refraction: 0.35, chromAberration: 0.03, edgeHighlight: 0, specular: 0.08, fresnel: 0.15, distortion: 0, zRadius: 18, opacity: 1, brightness: 1, shadowOpacity: 0.16, shadowSpread: 8, shadowCenterOpacity: 0.288, shadowCenterSpread: 4, videoShadowOpacity: 0.16, videoShadowSpread: 8, bevelMode: "pill", tintOpacity: 1, videoTintOpacity: 1, blur: 2, saturation: 1, shine: 1, edge: 1, specularSharpness: 0.5 } }, Zt = { duration: 1150, strength: 14, width: 0.26, dispersion: 1.2, glow: 0.14, sheen: 0.16, stretch: 5e-3, lift: 0, hoverScale: 1, travel: [0.25, 0.1, 0.35, 1], envelope: [{ t: 0, value: 0 }, { t: 0.14, value: 0.72 }, { t: 0.28, value: 1 }, { t: 0.65, value: 0.65 }, { t: 1, value: 0 }], radius: 1.05, highlightSize: 0.32, coreGlow: 0.5, coreDuration: 280, ringSoftness: 0.65, stretchDuration: 1150, stretchDelay: 0, clickHighlightSize: 0.12, origin: { x: 0.5, y: 0 }, hoverOrigin: "fixed", clickOrigin: "pointer", spectrum: [{ position: 0, color: "#ff7664" }, { position: 0.25, color: "#ffd26e" }, { position: 0.5, color: "#70e7e3" }, { position: 0.75, color: "#7495ff" }, { position: 1, color: "#d38aff" }], spectrumShift: [{ t: 0, value: 0 }, { t: 0.5, value: 80 }, { t: 1, value: 160 }], coreEnvelope: [{ t: 0, value: 0 }, { t: 0.1, value: 1 }, { t: 0.28, value: 0.65 }, { t: 0.6, value: 0.12 }, { t: 1, value: 0 }], coreMotion: { startScale: 1.15, releaseScale: 0.55, endScale: 1.6, contractStart: 0.45, contractCurve: [0.42, 0, 0.58, 1], expandCurve: [0.16, 0.65, 0.3, 1] }, stretchTravel: [0.25, 0.1, 0.35, 1], stretchEnvelope: [{ t: 0, value: 0 }, { t: 0.14, value: 0.72 }, { t: 0.28, value: 1 }, { t: 0.65, value: 0.65 }, { t: 1, value: 0 }], liftMotion: { duration: 360, delay: 0, curve: [0.22, 0.61, 0.36, 1], keyframes: [{ t: 0, value: 0 }, { t: 0.25, value: 0.25 }, { t: 0.5, value: 0.5 }, { t: 0.75, value: 0.75 }, { t: 1, value: 1 }], returnDuration: 240, returnCurve: [0.22, 0.61, 0.36, 1], returnKeyframes: [{ t: 0, value: 0 }, { t: 0.25, value: 0.25 }, { t: 0.5, value: 0.5 }, { t: 0.75, value: 0.75 }, { t: 1, value: 1 }] }, scaleMotion: { duration: 420, delay: 0, curve: [0.22, 0.61, 0.36, 1], keyframes: [{ t: 0, value: 0 }, { t: 0.25, value: 0.25 }, { t: 0.5, value: 0.5 }, { t: 0.75, value: 0.75 }, { t: 1, value: 1 }], returnDuration: 280, returnCurve: [0.22, 0.61, 0.36, 1], returnKeyframes: [{ t: 0, value: 0 }, { t: 0.25, value: 0.25 }, { t: 0.5, value: 0.5 }, { t: 0.75, value: 0.75 }, { t: 1, value: 1 }] }, warmup: { enabled: !0, start: 0.08, release: 0.58, previewDuration: 650, releaseFade: 140, strength: 3.5, width: 0.45, glow: 0.075, sheen: 0.2, coreGlow: 0.28, stretch: 3e-3, stretchY: 0.02, curve: [0.42, 0, 0.58, 1], coreEnvelope: [{ t: 0, value: 1 }, { t: 0.25, value: 1 }, { t: 0.5, value: 1 }, { t: 0.75, value: 0.65 }, { t: 1, value: 0.25 }] } }, Jt = {
  button: Qt,
  quote: Zt
}, m = (e, t = 0, a = 1) => Math.min(a, Math.max(t, e)), we = (e) => {
  const t = m(e);
  return t * t * (3 - 2 * t);
}, oe = 0.68;
function xe(e, t = [0.22, 0.1, 0.25, 1]) {
  const a = m(e);
  if (a === 0 || a === 1) return a;
  const [i, r, n, o] = t, c = (f, l, u) => 3 * (1 - f) ** 2 * f * l + 3 * (1 - f) * f * f * u + f ** 3;
  let h = 0, s = 1;
  for (let f = 0; f < 22; f++) {
    const l = (h + s) / 2;
    c(l, m(i), m(n)) < a ? h = l : s = l;
  }
  return c((h + s) / 2, r, o);
}
function at(e, { zeroEnds: t = !0 } = {}) {
  const a = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : [])
    if (Number.isFinite(i?.t) && Number.isFinite(i?.value)) {
      const r = { value: m(i.value, 0, 2) };
      Array.isArray(i.ease) && i.ease.length === 4 && i.ease.every(Number.isFinite) && (r.ease = i.ease.map((n) => m(n))), a.set(m(i.t), r);
    }
  for (const i of [0, 1])
    t ? a.set(i, { ...a.get(i), value: 0 }) : a.has(i) || a.set(i, { value: 1 });
  return [...a].sort((i, r) => i[0] - r[0]).map(([i, r]) => ({ t: i, ...r }));
}
function Ue(e, t) {
  const a = m(e);
  if (!t?.length) return 0;
  if (a <= t[0].t) return t[0].value;
  for (let i = 1; i < t.length; i++) {
    const r = t[i], n = t[i - 1];
    if (a === r.t) return r.value;
    if (a <= r.t) {
      const o = (a - n.t) / Math.max(1e-6, r.t - n.t), c = n.ease ? xe(o, n.ease) : we(o);
      return n.value + (r.value - n.value) * c;
    }
  }
  return t.at(-1).value;
}
function Ke(e, t) {
  const a = m(e);
  return a === 0 || a === 1 ? 0 : Ue(a, t);
}
function er(e) {
  return e * Math.exp((1 - e * e) / 2);
}
function tr(e, t, a, i) {
  return Math.hypot(Math.max(a, e - a), Math.max(i, t - i));
}
function Dt(e) {
  return 0.015 + m(e, 0.05, 0.8) * 0.15;
}
function rr(e, t, a) {
  const i = Math.hypot(e, t);
  if (i < 1e-5 || i >= 1) return [0, 0];
  const r = we((1 - i) / 0.045) * we(i / 0.045), n = er((i - oe) / Dt(a)) * r;
  return [e / i * n, t / i * n];
}
const qe = (e) => Number.isFinite(e.coreDuration) && e.coreDuration > 0 ? e.coreDuration : e.duration, nt = (e) => Number.isFinite(e.warmup?.releaseFade) ? Math.max(0, e.warmup.releaseFade) : e.duration * 0.3, Ot = (e, t, a) => {
  const i = nt(t);
  return a && t.warmup?.enabled && i > 0 ? 1 - we(e / i) : 0;
}, Nt = (e, t) => t.warmup?.coreEnvelope?.length ? Ue(e, t.warmup.coreEnvelope) : 1;
function ir(e, t) {
  const a = qe(t), i = Number.isFinite(a) && a > 0 ? Math.min(120, a * 0.6) : 120;
  return we((Number.isFinite(e) ? e : 0) / i);
}
function Be(e) {
  return Math.max(e.duration, e.stretchDelay + e.stretchDuration, qe(e), e.warmup?.enabled ? nt(e) : 0);
}
function ar(e, t) {
  const a = m(e) * Be(t), i = m(a / t.duration), r = m((a - t.stretchDelay) / t.stretchDuration), n = m(a / qe(t));
  return { elapsed: a, optical: i, core: n, stretch: r, stretchEased: m(xe(r, t.stretchTravel)) };
}
function or(e, t, { kind: a = "quote", phase: i = "release", click: r = !1 } = {}) {
  const n = a === "quote" && i === "release" && r, o = Number.isFinite(e.clickHighlightSize) ? e.clickHighlightSize : Math.min(e.highlightSize, 0.12), c = n ? o : e.highlightSize;
  return Math.min(Math.max(1, t.width), Math.max(1, t.height)) * m(c, 0.05, 1) * 2;
}
function sr(e, t, { phase: a = "release", fromWarmup: i = !1, reducedMotion: r = !1 } = {}) {
  if (r || !t.coreMotion || a !== "warmup" && !i) return 1;
  const n = t.coreMotion, o = (d) => Number.isFinite(n[d]) ? m(n[d], 0.1, 3) : 1, c = (d) => Array.isArray(n[d]) && n[d].length === 4 && n[d].every(Number.isFinite) ? n[d] : [0, 0, 1, 1], h = m(Number.isFinite(e) ? e : 0);
  let s, f, l, u;
  if (a === "warmup") {
    const d = Number.isFinite(n.contractStart) ? m(n.contractStart, 0, 0.95) : 0;
    s = o("startScale"), f = o("releaseScale"), l = m((h - d) / (1 - d)), u = c("contractCurve");
  } else {
    const d = Math.max(qe(t), i && t.warmup?.enabled ? nt(t) : 0);
    s = o("releaseScale"), f = o("endScale"), l = m(h * Be(t) / Math.max(1, d)), u = c("expandCurve");
  }
  return l === 0 ? s : l === 1 ? f : s + (f - s) * m(xe(l, u));
}
function nr(e, t, { phase: a = "release", fromWarmup: i = !1 } = {}) {
  const r = Number.isFinite(t.warmup?.stretchY) ? m(t.warmup.stretchY, 0, 0.16) : 0;
  if (!r) return 0;
  const n = m(Number.isFinite(e) ? e : 0);
  return a === "warmup" ? r * we(xe(n, t.warmup.curve)) : r * Ot(n * Be(t), t, i);
}
function kt(e, t, a) {
  const i = Math.max(1, t.width), r = Math.max(1, t.height), n = m(a.x) * i, o = m(a.y) * r;
  return { x: n, y: o, maximumRadius: tr(i, r, n, o) * e.radius };
}
function zt(e) {
  return { radius: e, width: e * 2 / oe, height: e * 2 / oe };
}
function lr(e, t, a, i = t.origin) {
  const r = ar(e, t), n = m(xe(r.optical, t.travel)), o = kt(t, a, i);
  return {
    progress: m(e),
    ...r,
    travel: n,
    amplitude: Ke(r.optical, t.envelope),
    coreAmplitude: Ke(r.core, t.coreEnvelope || t.envelope),
    stretchAmplitude: Ke(r.stretchEased, t.stretchEnvelope),
    hue: Ue(r.optical, t.spectrumShift),
    ...o,
    ...zt(1 + n * Math.max(1, o.maximumRadius - 1))
  };
}
function cr(e, t, a = !1) {
  const i = Ot(e.elapsed, t, a), r = Ke(m(e.elapsed / qe(t)), t.coreEnvelope || t.envelope);
  return {
    coreAmount: m(t.coreGlow * r + t.warmup.coreGlow * Nt(1, t) * i),
    stretchAmount: t.stretch * e.stretchAmplitude + t.warmup.stretch * i
  };
}
function ur(e, t, a, i = t.origin) {
  const r = m(e), n = m(xe(r, t.warmup.curve)), o = kt(t, a, i), c = we(n);
  return {
    progress: r,
    travel: n,
    ...o,
    amplitude: Math.sin(Math.PI * n),
    build: c,
    core: c * Nt(r, t),
    hue: Ue(1 - n, t.spectrumShift),
    ...zt(1 + (1 - n) * Math.max(1, o.maximumRadius - 1))
  };
}
const dr = {
  tintOpacity: [0, 2, 1],
  blur: [0, 24, 2],
  saturation: [0, 3, 1],
  shine: [0, 2, 1],
  edge: [0, 2, 1],
  refraction: [0, 2, 0.35],
  chromAberration: [0, 1, 0.03],
  edgeHighlight: [0, 2, 0],
  specular: [0, 2, 0.08],
  specularSharpness: [0, 1, 0.5],
  fresnel: [0, 2, 0.15],
  distortion: [0, 1, 0],
  zRadius: [1, 100, 18],
  opacity: [0, 1, 1],
  brightness: [0.25, 2, 1],
  shadowOpacity: [0, 1, 0.16],
  shadowSpread: [0, 32, 8]
};
function Ie(e = {}) {
  const t = {};
  for (const [a, [i, r, n]] of Object.entries(dr)) t[a] = Number.isFinite(e[a]) ? m(e[a], i, r) : n;
  return t.videoTintOpacity = Number.isFinite(e.videoTintOpacity) ? m(e.videoTintOpacity, 0, 2) : t.tintOpacity, t.shadowCenterOpacity = Number.isFinite(e.shadowCenterOpacity) ? m(e.shadowCenterOpacity, 0, 2) : t.shadowOpacity * 18 / 10, t.shadowCenterSpread = Number.isFinite(e.shadowCenterSpread) ? m(e.shadowCenterSpread, 0, 32) : t.shadowSpread * 0.5, t.videoShadowOpacity = Number.isFinite(e.videoShadowOpacity) ? m(e.videoShadowOpacity, 0, 1) : t.shadowOpacity, t.videoShadowSpread = Number.isFinite(e.videoShadowSpread) ? m(e.videoShadowSpread, 0, 32) : t.shadowSpread, t.cornerRadius = Number.isFinite(e.cornerRadius) ? m(e.cornerRadius, 0, 100) : null, t.bevelMode = e.bevelMode === "dome" ? "dome" : "pill", t.tintColor = typeof e.tintColor == "string" && /^#[0-9a-fA-F]{6}$/.test(e.tintColor) ? e.tintColor : null, t;
}
function fr(e = 0.5) {
  return 18 * 6 ** (2 * m(Number.isFinite(e) ? e : 0.5, 0, 1) - 1);
}
function hr(e, t, a, i = { x: 0.5, y: 0.5 }) {
  const r = Math.max(t.width / e.width, t.height / e.height), n = t.left + (t.width - e.width * r) * i.x, o = t.top + (t.height - e.height * r) * i.y;
  return { x: (a.left - n) / r, y: (a.top - o) / r, width: a.width / r, height: a.height / r };
}
function pr(e, t, a = 1) {
  const i = Math.min(Math.max(1, a), 1.5, Math.sqrt(38e4 / Math.max(1, e * t)));
  return { width: Math.max(1, Math.round(e * i)), height: Math.max(1, Math.round(t * i)) };
}
function mr(e, t, a) {
  const i = Math.max(0, Math.floor(a * t.width / e.width) - 2), r = Math.max(0, Math.floor(a * t.height / e.height) - 2);
  return { x: i, y: r, width: t.width - 2 * i, height: t.height - 2 * r };
}
const _t = 4, Oe = 6;
function pt(e) {
  if (!Number.isFinite(e) || e <= 1e-3) return { center: 1, weights: new Float32Array(Oe), offsets: new Float32Array(Oe) };
  e = Math.min(_t, e);
  const t = Math.min(Oe * 2, Math.ceil(e * 3)), a = Array.from({ length: t + 1 }, (o, c) => Math.exp(-c * c / (2 * e * e))), i = a[0] + 2 * a.slice(1).reduce((o, c) => o + c, 0), r = new Float32Array(Oe), n = new Float32Array(Oe);
  for (let o = 1; o <= t; o += 2) {
    const c = a[o] / i, h = (a[o + 1] || 0) / i, s = c + h, f = (o - 1) / 2;
    r[f] = s, n[f] = s > 0 ? (o * c + (o + 1) * h) / s : 0;
  }
  return { center: a[0] / i, weights: r, offsets: n };
}
function vr(e, t, a, i = a) {
  let r = e, n = t;
  const o = [];
  for (; Math.max(a * r / e, i * n / t) > _t && (r > 1 || n > 1); )
    r = Math.max(1, Math.ceil(r / 2)), n = Math.max(1, Math.ceil(n / 2)), o.push({ width: r, height: n });
  const c = (h, s) => Math.sqrt(Math.max(0, h * h - (s * s - 1) / 12)) / s;
  return {
    levels: o,
    width: r,
    height: n,
    sigmaX: c(a, e / r),
    sigmaY: c(i, t / n)
  };
}
function gr(e, t, a, i) {
  const r = (c, h, s, f) => {
    const l = Math.max(0, Math.min(1, -c / h)), u = Math.max(0, Math.min(1, (s - c) / h)), d = [];
    return l > 0 && d.push([0, Math.min(1, s), 0, l * f]), u > l && d.push([Math.max(0, c + l * h), Math.min(s, (u - l) * h), l * f, (u - l) * f]), u < 1 && d.push([Math.max(0, s - 1), Math.min(1, s), u * f, (1 - u) * f]), d;
  }, n = r(e.x, e.width, t.width, a);
  return r(e.y, e.height, t.height, i).flatMap(([c, h, s, f]) => n.map(([l, u, d, p]) => [l, c, u, h, d, s, p, f]));
}
const ne = /* @__PURE__ */ new Set(), me = /* @__PURE__ */ new Set();
let q = null, Fe = 0, Ze = !1, mt = !1;
const yr = "attribute vec2 a; varying vec2 uv; void main(){uv=vec2(a.x*.5+.5,.5-a.y*.5);gl_Position=vec4(a,0.,1.);}", vt = "attribute vec2 a; varying vec2 uv; void main(){uv=a*.5+.5;gl_Position=vec4(a,0.,1.);}", br = `precision highp float;varying vec2 uv;uniform sampler2D image;uniform vec2 stepSize;
void main(){gl_FragColor=(texture2D(image,uv+stepSize)+texture2D(image,uv-stepSize)+texture2D(image,uv+vec2(stepSize.x,-stepSize.y))+texture2D(image,uv+vec2(-stepSize.x,stepSize.y)))*.25;}`, wr = `precision highp float;varying vec2 uv;uniform sampler2D image;uniform vec2 direction;uniform float center;uniform float weights[6],offsets[6];
void main(){vec4 color=texture2D(image,uv)*center;for(int i=0;i<6;i++){if(weights[i]>0.){vec2 delta=direction*offsets[i];color+=(texture2D(image,uv+delta)+texture2D(image,uv-delta))*weights[i];}}gl_FragColor=color;}`, xr = `precision highp float;
varying vec2 uv; uniform sampler2D image;
uniform vec2 size,body; uniform vec4 tint; uniform float bleed,radius,depth,refraction,aberration,edgeLight,specular,specularPower,fresnel,distortion,brightness,saturation,dome,hasVideo;
float outlineDistance(vec2 p){vec2 q=abs(p)-body*.5+radius;return length(max(q,0.))+min(max(q.x,q.y),0.)-radius;}
void main(){
 vec2 p=uv*size-vec2(bleed)-body*.5;
 // One separable height field, H*sqrt(1-uX^2)*sqrt(1-uY^2), rolls the two
 // axes together without choosing a closest side or a diagonal bisector.
 // u=t^2*(2-t) eases each circular roll into a genuinely flat center.
 float halfSpan=min(body.x,body.y)*.5;
 float band=max(1.,min(depth*mix(1.1,1.65,dome),halfSpan*mix(.72,.86,dome)));
 vec2 axis=sqrt(p*p+vec2(.25));
 vec2 t=clamp((axis-body*.5+band)/band,0.,1.);
 vec2 u=t*t*(2.-t);
 vec2 derivative=t*(4.-3.*t)*(p/axis)/band;
 vec2 circle=max(vec2(.0001),1.-u*u);
 float height=sqrt(circle.x*circle.y);
 float thickness=depth*mix(.55,.75,dome);
 // Homogeneous analytic gradient: multiplying by fX*fY avoids division by
 // a vanishing circle height. Normalize only after combining both axes.
 vec3 normal=normalize(vec3(thickness*u.x*derivative.x*circle.y,thickness*u.y*derivative.y*circle.x,height));
 float bend=1.-height;
 vec2 edgeWarp=normal.xy*(distortion*4.*bend);
 vec2 offset=(normal.xy*refraction*depth*.65+edgeWarp)/size;
 vec2 split=normal.xy*aberration*8./size;
 // A broad glossy reflection and bevel glow describe one curved cross-section,
 // rather than painting a narrow bright line at the component boundary.
 float facing=max(dot(normal,normalize(vec3(-.45,-.65,1.8))),0.);
 // A polished core sits inside a broad reflection; both use the same normal,
 // with less central lift and no border-aligned shine or extra brightness.
 float reflection=pow(facing,specularPower)*.27+pow(facing,specularPower/3.)*.11;
 // Height drop starts at fourth order; its square root brings polish in
 // earlier along the round roll while retaining zero slope at the flat join.
 float light=specular*reflection*(.16+.84*sqrt(bend));
 // Fresnel follows the actual rounded mask, not the rectangular height field.
 // Reuse its circular cross-section along the outline's inward distance, then
 // feather the final subpixel edge so the rounded clip cannot cut a bright cap.
 if(fresnel>.0001){
  float inset=max(0.,-outlineDistance(p));
  float rimT=clamp(1.-inset/band,0.,1.);
  float rimU=rimT*rimT*(2.-rimT);
  float rimSlope=thickness*rimU*rimT*(4.-3.*rimT)/band;
  float rimHeight=sqrt(max(.0001,1.-rimU*rimU));
  float rimZ=rimHeight/sqrt(rimHeight*rimHeight+rimSlope*rimSlope);
  light+=pow(1.-rimZ,2.)*fresnel*.55*smoothstep(0.,.6,inset);
 }
 light+=bend*edgeLight*.28*(.35+.65*facing);
 if(hasVideo>.5){
  vec3 color=texture2D(image,uv-offset).rgb;
  if(aberration>.0001){color.r=texture2D(image,uv-offset-split).r;color.b=texture2D(image,uv-offset+split).b;}
  float luma=dot(color,vec3(.2126,.7152,.0722));color=mix(vec3(luma),color,saturation)*brightness;color=mix(color,tint.rgb,tint.a);
  gl_FragColor=vec4(clamp(color+light,0.,1.),1.);
 }else{gl_FragColor=vec4(vec3(1.),clamp(light,0.,.8));}
}`;
function Bt(e = document.createElement("canvas")) {
  const t = e.getContext("webgl", { alpha: !0, premultipliedAlpha: !1, antialias: !1, preserveDrawingBuffer: !0 });
  if (!t) return null;
  const a = (p, v) => {
    const g = t.createShader(p);
    if (t.shaderSource(g, v), t.compileShader(g), !t.getShaderParameter(g, t.COMPILE_STATUS)) {
      const k = t.getShaderInfoLog(g);
      throw t.deleteShader(g), Error(`Glass material shader did not compile: ${k}`);
    }
    return g;
  }, i = [], r = [], n = [];
  let o;
  const c = (p, v, g) => {
    let k, E, T;
    try {
      if (k = a(t.VERTEX_SHADER, p), E = a(t.FRAGMENT_SHADER, v), T = t.createProgram(), i.push(T), t.attachShader(T, k), t.attachShader(T, E), t.bindAttribLocation(T, 0, "a"), t.linkProgram(T), !t.getProgramParameter(T, t.LINK_STATUS)) throw Error(`Glass material shader did not link: ${t.getProgramInfoLog(T)}`);
      return { program: T, uniforms: Object.fromEntries(g.map((x) => [x, t.getUniformLocation(T, x)])) };
    } finally {
      k && t.deleteShader(k), E && t.deleteShader(E);
    }
  }, h = () => {
    const p = t.createTexture();
    return r.push(p), t.bindTexture(t.TEXTURE_2D, p), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), p;
  };
  let s, f, l, u;
  try {
    s = c(yr, xr, ["image", "tint", "size", "body", "bleed", "radius", "depth", "refraction", "aberration", "edgeLight", "specular", "specularPower", "fresnel", "distortion", "brightness", "saturation", "dome", "hasVideo"]), f = c(vt, wr, ["image", "direction", "center", "weights[0]", "offsets[0]"]), l = c(vt, br, ["image", "stepSize"]), o = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, o), t.bufferData(t.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), t.STATIC_DRAW), t.enableVertexAttribArray(0), t.vertexAttribPointer(0, 2, t.FLOAT, !1, 0, 0), u = h();
    for (let p = 0; p < 2; p++) n.push({ texture: h(), framebuffer: t.createFramebuffer(), width: 0, height: 0 });
  } catch (p) {
    for (const v of i) t.deleteProgram(v);
    for (const v of r) t.deleteTexture(v);
    for (const v of n) t.deleteFramebuffer(v.framebuffer);
    throw o && t.deleteBuffer(o), p;
  }
  const d = { canvas: e, gl: t, ...s, gaussian: f, downsample: l, programs: i, textures: r, targets: n, buffer: o, texture: u, lost: !1 };
  return d.onLost = (p) => {
    if (p.preventDefault(), q === d) {
      d.lost = !0;
      for (const v of ne) v.fallback();
    }
  }, d.onRestored = () => {
    if (q === d) {
      It(d), q = null, Ze = !1;
      try {
        q = Bt(e);
      } catch (p) {
        _e(p);
        return;
      }
      if (!q) {
        _e();
        return;
      }
      for (const p of ne) p.visibilityChanged();
    }
  }, e.addEventListener("webglcontextlost", d.onLost), e.addEventListener("webglcontextrestored", d.onRestored), d;
}
function It(e) {
  if (!e) return;
  const { canvas: t, gl: a } = e;
  if (t.removeEventListener("webglcontextlost", e.onLost), t.removeEventListener("webglcontextrestored", e.onRestored), !e.lost) {
    for (const i of e.textures) a.deleteTexture(i);
    for (const i of e.targets) a.deleteFramebuffer(i.framebuffer);
    a.deleteBuffer(e.buffer);
    for (const i of e.programs) a.deleteProgram(i);
  }
}
function Sr(e, t, a, i) {
  const { gl: r } = e;
  if (r.bindFramebuffer(r.FRAMEBUFFER, t.framebuffer), t.width !== a || t.height !== i) {
    if (r.bindTexture(r.TEXTURE_2D, t.texture), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, a, i, 0, r.RGBA, r.UNSIGNED_BYTE, null), r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, t.texture, 0), r.checkFramebufferStatus(r.FRAMEBUFFER) !== r.FRAMEBUFFER_COMPLETE) throw Error("Glass material blur framebuffer is unavailable");
    t.width = a, t.height = i;
  }
  r.viewport(0, 0, a, i);
}
function Er(e, t, a, i) {
  if (i <= 1e-3) return e.texture;
  const { gl: r, targets: n } = e, o = [t.width, t.height, a.width, a.height, i].join(",");
  if (e.blurCache?.key !== o) {
    const u = vr(t.width, t.height, i * t.width / a.width, i * t.height / a.height);
    e.blurCache = { key: o, plan: u, kernels: [pt(u.sigmaX), pt(u.sigmaY)] };
  }
  const { plan: c, kernels: h } = e.blurCache;
  let s = e.texture, f = 0;
  const l = (u, d, p, v) => {
    const g = n[f];
    f = 1 - f, Sr(e, g, d, p), r.useProgram(u.program), r.bindTexture(r.TEXTURE_2D, s), r.uniform1i(u.uniforms.image, 0), v(u.uniforms), r.drawArrays(r.TRIANGLE_STRIP, 0, 4), s = g.texture;
  };
  for (const u of c.levels) l(e.downsample, u.width, u.height, (d) => r.uniform2f(d.stepSize, 0.25 / u.width, 0.25 / u.height));
  for (const [u, d, p] of [[h[0], 1 / c.width, 0], [h[1], 0, 1 / c.height]])
    l(e.gaussian, c.width, c.height, (v) => {
      r.uniform2f(v.direction, d, p), r.uniform1f(v.center, u.center), r.uniform1fv(v["weights[0]"], u.weights), r.uniform1fv(v["offsets[0]"], u.offsets);
    });
  return s;
}
function _e(e) {
  Ze = !0, e && !mt && (mt = !0, console.warn("Glass video renderer could not initialize; native glass remains active.", e));
  for (const t of ne) t.fallback();
}
function gt(e) {
  me.add(e), !Fe && !document.hidden && (Fe = requestAnimationFrame(() => {
    Fe = 0;
    const t = [...me];
    me.clear();
    for (const a of t) a.draw();
  }));
}
function yt() {
  for (const e of ne) e.visibilityChanged();
}
function bt() {
  for (const e of ne) e.invalidate();
}
function wt(e, t = 0.5) {
  return e?.endsWith("%") ? parseFloat(e) / 100 : { left: 0, top: 0, center: 0.5, right: 1, bottom: 1 }[e] ?? t;
}
function Mr(e, t, a, { video: i = null } = {}) {
  const r = document.createElement("canvas");
  r.className = "sr-button-material", r.setAttribute("aria-hidden", "true"), r.hidden = !0, (t.querySelector(".sr-button-content") || t).prepend(r);
  const n = r.getContext("2d"), o = document.createElement("canvas"), c = o.getContext("2d"), h = !!i || e.classList.contains("hero-apply"), s = i || (h ? e.closest(".hero")?.querySelector("video") : null), f = s?.poster ? new Image() : null, l = new Map(["--sr-material-radius", "--sr-material-opacity", "--sr-material-brightness", "--sr-shadow-opacity", "--sr-shadow-spread", "--sr-shadow-center-opacity", "--sr-shadow-center-spread"].map((C) => [C, e.style.getPropertyValue(C)]));
  let u = Ie(a.surface), d = !1, p = !1, v = 0, g = 0, k = -1 / 0, E = !1, T = !0, x = "", _ = getComputedStyle(e).borderTopLeftRadius;
  const A = matchMedia("(forced-colors: active)");
  function P() {
    return !p && d && !document.hidden && !A.matches && n && c && u.opacity > 0 && !Ze && !q?.lost && !E;
  }
  function D() {
    return s && P() && !s.paused && !s.ended;
  }
  function F() {
    v && s.cancelVideoFrameCallback(v), g && cancelAnimationFrame(g), v = g = 0;
  }
  function z() {
    if (!D() || v || g) return;
    const C = (B) => {
      v = g = 0, D() && (B - k >= 32 && (k = B, M.invalidate()), z());
    };
    s.requestVideoFrameCallback ? v = s.requestVideoFrameCallback(C) : g = requestAnimationFrame(C);
  }
  function S() {
    if (!P()) return;
    try {
      q || (q = Bt());
    } catch (Q) {
      _e(Q);
      return;
    }
    if (!q) {
      _e();
      return;
    }
    if (q.lost) {
      M.fallback();
      return;
    }
    const C = getComputedStyle(t), B = parseFloat(C.width) || t.offsetWidth, O = parseFloat(C.height) || t.offsetHeight;
    if (!B || !O) return;
    const H = getComputedStyle(e), V = Math.max(0, parseFloat(H.getPropertyValue("--sr-glass-bleed")) || 16), $ = { width: B + 2 * V, height: O + 2 * V }, w = pr($.width, $.height, devicePixelRatio), R = s ? e.getBoundingClientRect() : null, G = s?.getBoundingClientRect(), re = s ? getComputedStyle(s).objectPosition : "50% 50%", X = s ? [B, O, V, w.width, w.height, R.left - G.left, R.top - G.top, R.width, R.height, G.width, G.height, re].join(",") : "";
    if (!T && X === x) return;
    (r.width !== w.width || r.height !== w.height) && (r.width = w.width, r.height = w.height);
    const { gl: b, program: Ge, uniforms: J } = q;
    (q.canvas.width !== w.width || q.canvas.height !== w.height) && (q.canvas.width = w.width, q.canvas.height = w.height), b.bindTexture(b.TEXTURE_2D, q.texture);
    let ce = !1;
    const Pe = s?.paused && s.currentTime === 0 && !s.played.length, K = s?.readyState >= 2 && !Pe ? s : f?.complete && f.naturalWidth ? f : null;
    if (K) {
      (o.width !== w.width || o.height !== w.height) && (o.width = w.width, o.height = w.height);
      const Q = R.width / B, y = R.height / O, L = re.split(" "), N = { width: K.videoWidth || K.naturalWidth, height: K.videoHeight || K.naturalHeight }, U = hr(N, G, { left: R.left - V * Q, top: R.top - V * y, width: $.width * Q, height: $.height * y }, { x: wt(L[0]), y: wt(L[1]) });
      c.clearRect(0, 0, w.width, w.height);
      try {
        for (const ee of gr(U, N, w.width, w.height)) c.drawImage(K, ...ee);
        b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, o), ce = !0;
      } catch {
        E = !0, M.fallback();
        return;
      }
    } else b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, 1, 1, 0, b.RGBA, b.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
    let Ee = q.texture;
    if (ce)
      try {
        Ee = Er(q, w, $, u.blur);
      } catch (Q) {
        _e(Q);
        return;
      }
    b.bindFramebuffer(b.FRAMEBUFFER, null), b.viewport(0, 0, w.width, w.height), b.useProgram(Ge), b.bindTexture(b.TEXTURE_2D, Ee);
    const W = (H.getPropertyValue("--glass-tint").match(/[\d.]+/g) || []).map(Number);
    b.uniform4f(J.tint, (W[0] || 0) / 255, (W[1] || 0) / 255, (W[2] || 0) / 255, W[3] ?? 0), b.uniform1i(J.image, 0), b.uniform2f(J.size, $.width, $.height), b.uniform2f(J.body, B, O);
    const Le = u.cornerRadius ?? parseFloat(H.borderTopLeftRadius) ?? parseFloat(_);
    for (const [Q, y] of Object.entries({ bleed: V, radius: Math.max(0, Math.min(Le || 0, B / 2, O / 2)), depth: u.zRadius, refraction: u.refraction, aberration: u.chromAberration, edgeLight: u.edgeHighlight, specular: u.specular, specularPower: fr(u.specularSharpness), fresnel: u.fresnel, distortion: u.distortion, brightness: u.brightness, saturation: u.saturation, dome: u.bevelMode === "dome" ? 1 : 0, hasVideo: ce ? 1 : 0 })) b.uniform1f(J[Q], y);
    const fe = mr($, w, V);
    b.clearColor(0, 0, 0, 0), b.clear(b.COLOR_BUFFER_BIT), b.enable(b.SCISSOR_TEST), b.scissor(fe.x, fe.y, fe.width, fe.height);
    try {
      b.drawArrays(b.TRIANGLE_STRIP, 0, 4);
    } finally {
      b.disable(b.SCISSOR_TEST);
    }
    n.clearRect(0, 0, w.width, w.height), n.drawImage(q.canvas, 0, 0), r.hidden = !1, T = !1, x = X, r.dataset.source = ce ? "video" : "lighting", e.classList.toggle("sr-material-video-ready", ce);
  }
  const M = {
    draw: S,
    invalidate() {
      T = !0, P() && gt(M);
    },
    refreshBackdrop() {
      s && P() && gt(M);
    },
    fallback() {
      r.hidden = !0, e.classList.remove("sr-material-video-ready"), F(), me.delete(M);
    },
    update(C) {
      u = Ie(C.surface), u.cornerRadius === null ? e.style.removeProperty("--sr-material-radius") : e.style.setProperty("--sr-material-radius", `${u.cornerRadius}px`), e.style.setProperty("--sr-material-opacity", String(u.opacity)), e.style.setProperty("--sr-material-brightness", String(u.brightness)), e.style.setProperty("--sr-shadow-opacity", String(h ? u.videoShadowOpacity : u.shadowOpacity)), e.style.setProperty("--sr-shadow-spread", `${h ? u.videoShadowSpread : u.shadowSpread}px`), e.style.setProperty("--sr-shadow-center-opacity", String(h ? 0 : u.shadowCenterOpacity)), e.style.setProperty("--sr-shadow-center-spread", `${h ? 0 : u.shadowCenterSpread}px`), u.opacity <= 0 ? M.fallback() : (M.invalidate(), z());
    },
    visibilityChanged() {
      F(), document.hidden || (M.invalidate(), z());
    },
    destroy() {
      if (!p) {
        if (p = !0, F(), me.delete(M), Se.disconnect(), le.disconnect(), A.removeEventListener("change", Y), s) for (const C of te) s.removeEventListener(C, Y);
        f && (f.onload = null), r.remove(), e.classList.remove("sr-material-video-ready");
        for (const [C, B] of l)
          B ? e.style.setProperty(C, B) : e.style.removeProperty(C);
        ne.delete(M), ne.size || (document.removeEventListener("visibilitychange", yt), window.removeEventListener("resize", bt), Fe && cancelAnimationFrame(Fe), Fe = 0, me.clear(), It(q), q = null, Ze = !1);
      }
    }
  }, Y = (C) => {
    (C.type === "loadeddata" || C.type === "loadedmetadata") && (E = !1), A.matches && M.fallback(), F(), M.invalidate(), z();
  }, te = ["play", "pause", "ended", "seeked", "loadeddata", "loadedmetadata"];
  if (s) for (const C of te) s.addEventListener(C, Y);
  f && (f.onload = () => M.invalidate(), f.src = s.poster);
  const Se = new IntersectionObserver((C) => {
    d = C[0].isIntersecting, d ? (M.invalidate(), z()) : (me.delete(M), F());
  });
  Se.observe(e);
  const le = new ResizeObserver(() => M.invalidate());
  return le.observe(t), s && le.observe(s), A.addEventListener("change", Y), ne.size || (document.addEventListener("visibilitychange", yt), window.addEventListener("resize", bt, { passive: !0 })), ne.add(M), M.update(a), M;
}
const ue = (e) => Number.isFinite(e) ? Math.max(0, e) : 0, xt = (e) => Array.isArray(e) && e.length ? Math.max(0, ...e.map((t) => Math.min(2, ue(t?.value)))) : 2;
function $t(e = {}, t = {}) {
  const a = e.warmup || {}, i = Ie(e.surface), r = ue(e.dispersion), n = Math.max(
    (ue(e.strength) + r / 2) * xt(e.envelope),
    ue(a.strength) + r * 0.225
  ), o = ue(e.stretch) * xt(e.stretchEnvelope || e.envelope) + (a.enabled ? ue(a.stretch) : 0), c = Math.max(0.01, 1 - Math.max(o, ue(a.stretch)) * 0.3), h = ue(t.height) * (1 / c - 1), s = i.refraction * i.zRadius * 0.65 + i.chromAberration * 8 + i.distortion * 4 + (i.blur > 1e-3 ? 4 * i.blur + 2 : 0);
  return Math.max(16, Math.ceil(n + h + s + 3));
}
function Tr(e = {}, t = {}, a = !1) {
  const i = Ie(e.surface), r = a ? i.videoShadowOpacity : i.shadowOpacity, n = a ? i.videoShadowSpread : i.shadowSpread, o = r > 0 ? n + 38 : 0, c = !a && i.shadowCenterOpacity > 0 ? i.shadowCenterSpread + 18.5 : 0;
  return $t(e, t) + Math.ceil(Math.max(o, c));
}
const St = Jt, Ar = "http://www.w3.org/2000/svg", Qe = /* @__PURE__ */ new Set(), ge = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map(), Re = /* @__PURE__ */ new Set();
let ye = 0, Rr = 0, pe, Je, Ne;
function Fr(e) {
  return typeof MutationObserver != "function" ? () => {
  } : (Re.add(e), Ne || (Ne = new MutationObserver(() => {
    for (const t of Re) t.restore();
    for (const t of Re) t.capture();
    for (const t of Re) t.apply();
  }), Ne.observe(document.documentElement, { attributes: !0, attributeFilter: ["data-theme"] })), () => {
    Re.delete(e), Re.size || (Ne.disconnect(), Ne = null);
  });
}
function Ut(e) {
  ye = 0;
  for (const [t, a] of [...ge]) ge.has(t) && a(e);
  ge.size && (ye = requestAnimationFrame(Ut));
}
function Cr(e, t) {
  ge.set(e, t), ye || (ye = requestAnimationFrame(Ut));
}
function Ye(e) {
  ge.delete(e), !ge.size && ye && (cancelAnimationFrame(ye), ye = 0);
}
function qt() {
  if (document.hidden) for (const e of Qe) e.reset();
}
function Z(e, t = {}) {
  const a = document.createElementNS(Ar, e);
  for (const [i, r] of Object.entries(t)) a.setAttribute(i, String(r));
  return a;
}
function Pr() {
  pe || (pe = Z("svg", { width: 1, height: 1, "aria-hidden": "true", focusable: "false" }), pe.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:none;", Je = Z("defs"), pe.append(Je), document.body.append(pe), document.addEventListener("visibilitychange", qt));
}
function Et(e) {
  const t = Math.round(e * 1e3) / 1e3;
  if (Ae.has(t)) return Ae.get(t);
  const a = document.createElement("canvas");
  a.width = a.height = 192;
  const i = a.getContext("2d");
  if (!i) return null;
  const r = i.createImageData(192, 192);
  for (let c = 0; c < 192; c++) for (let h = 0; h < 192; h++) {
    const [s, f] = rr(h / 191 * 2 - 1, c / 191 * 2 - 1, t), l = (c * 192 + h) * 4;
    r.data[l] = Math.round(128 + m(s, -1, 1) * 127), r.data[l + 1] = Math.round(128 + m(f, -1, 1) * 127), r.data[l + 2] = 128, r.data[l + 3] = 255;
  }
  i.putImageData(r, 0, 0);
  const o = { url: a.toDataURL("image/png"), canvas: a };
  return Ae.size >= 12 && Ae.delete(Ae.keys().next().value), Ae.set(t, o), o;
}
function Mt(e, t, a = !1) {
  const i = { ...t, ...e, warmup: { ...t.warmup, ...e.warmup } };
  if (t.surface || e.surface) {
    const l = { ...t.surface, ...e.surface };
    if (a && e.surface) for (const u of ["videoTintOpacity", "shadowCenterOpacity", "shadowCenterSpread", "videoShadowOpacity", "videoShadowSpread"])
      Object.hasOwn(e.surface, u) || delete l[u];
    i.surface = Ie(l);
  }
  const r = Number.isFinite(e.duration) ? e.duration : t.duration, n = e.coreDuration ?? (Number.isFinite(e.duration) ? r : t.coreDuration);
  i.coreDuration = m(Number.isFinite(n) ? n : r, 80, 4e3), i.coreEnvelope = at(e.coreEnvelope || e.envelope || t.coreEnvelope || i.envelope);
  const o = e.warmup?.releaseFade ?? (Number.isFinite(e.duration) ? r * 0.3 : t.warmup?.releaseFade);
  i.warmup.releaseFade = m(Number.isFinite(o) ? o : r * 0.3, 0, 2e3);
  const c = e.warmup?.coreEnvelope ?? (Number.isFinite(e.duration) ? null : t.warmup?.coreEnvelope);
  i.warmup.coreEnvelope = at(c || [0, 0.25, 0.5, 0.75, 1].map((l) => ({ t: l, value: 1 })), { zeroEnds: !1 });
  const h = e.warmup?.stretchY ?? (Number.isFinite(e.duration) ? 0 : t.warmup?.stretchY);
  if (i.warmup.stretchY = Number.isFinite(h) ? m(h, 0, 0.16) : 0, t.clickHighlightSize !== void 0 || e.clickHighlightSize !== void 0) {
    const l = e.clickHighlightSize ?? (Number.isFinite(e.duration) ? Math.min(i.highlightSize ?? t.highlightSize, 0.12) : t.clickHighlightSize);
    i.clickHighlightSize = Number.isFinite(l) ? m(l, 0.05, 1) : 0.12;
  }
  const s = e.coreMotion ?? (Number.isFinite(e.duration) ? {} : t.coreMotion) ?? {};
  i.coreMotion = {};
  for (const l of ["startScale", "releaseScale", "endScale"]) i.coreMotion[l] = Number.isFinite(s[l]) ? m(s[l], 0.1, 3) : 1;
  i.coreMotion.contractStart = Number.isFinite(s.contractStart) ? m(s.contractStart, 0, 0.95) : 0;
  for (const l of ["contractCurve", "expandCurve"]) i.coreMotion[l] = Array.isArray(s[l]) && s[l].length === 4 && s[l].every(Number.isFinite) ? s[l].map((u) => m(u)) : [0, 0, 1, 1];
  const f = { duration: [200, 4e3], strength: [0, 64], width: [0.08, 0.8], radius: [0.2, 1.6], dispersion: [0, 8], glow: [0, 1], sheen: [0, 1], coreGlow: [0, 1], highlightSize: [0.05, 1], ringSoftness: [0.05, 1], stretch: [0, 0.08], stretchDuration: [200, 4e3], stretchDelay: [0, 2e3], lift: [0, 12], hoverScale: [1, 1.12] };
  for (const [l, [u, d]] of Object.entries(f)) i[l] = Number.isFinite(i[l]) ? m(i[l], u, d) : t[l];
  for (const l of ["travel", "stretchTravel"]) i[l] = Array.isArray(i[l]) && i[l].length === 4 && i[l].every(Number.isFinite) ? i[l].map((u) => m(u)) : [...t[l]];
  for (const l of ["envelope", "stretchEnvelope"]) i[l] = at(i[l] || t[l]);
  return i.origin = { x: m(i.origin?.x ?? t.origin.x), y: m(i.origin?.y ?? t.origin.y) }, i.spectrum = (i.spectrum || t.spectrum).map((l) => ({ ...l })).sort((l, u) => l.position - u.position), i.spectrumShift = (i.spectrumShift || t.spectrumShift).map((l) => ({ ...l, ...l.ease ? { ease: [...l.ease] } : {} })).sort((l, u) => l.t - u.t), i.warmup.curve = [...i.warmup.curve], i;
}
const Gt = (e, t) => `rgba(${parseInt(e.slice(1, 3), 16)},${parseInt(e.slice(3, 5), 16)},${parseInt(e.slice(5, 7), 16)},${t})`;
function Tt(e, t, a = null) {
  if (e.trim() === "transparent") return e;
  const i = e.trim().match(/^rgba?\(([^)]+)\)$/i)?.[1].trim().split(/[\s,/]+/);
  if (!i || i.length < 3 || i.length > 4) return e;
  const r = i.map((c, h) => Number.parseFloat(c) * (c.endsWith("%") ? h < 3 ? 2.55 : 0.01 : 1));
  if (r.some((c) => !Number.isFinite(c))) return e;
  const n = Number(m((r[3] ?? 1) * t).toFixed(6));
  return `rgba(${(a ? [1, 3, 5].map((c) => parseInt(a.slice(c, c + 2), 16)) : r.slice(0, 3)).join(",")},${n})`;
}
function At(e, t) {
  const a = Dt(t), i = Math.min(a * 2.5, 0.27), r = Math.min(a * 0.5, 0.99 - oe - i), n = (f) => `${(m(f) * 100).toFixed(3)}%`, o = e.spectrum.map((f) => {
    const l = 0.18 + Math.sin(Math.PI * f.position) * 0.72;
    return `${Gt(f.color, l.toFixed(3))} ${n(oe + (f.position * 2 - 1) * i)}`;
  }), c = `radial-gradient(circle closest-side, transparent ${n(oe - i - r)},${o.join(",")},transparent ${n(oe + i + r)})`, h = Math.min(a * (0.3 + e.ringSoftness * 1.6), (1 - oe - 5e-3) / 2.7), s = [[-2.7, 0], [-2, 0.02], [-1.3, 0.12], [-0.65, 0.45], [0, 0.94], [0.65, 0.45], [1.3, 0.12], [2, 0.02], [2.7, 0]].map(([f, l]) => `rgba(255,255,255,${l}) ${n(oe + h * f)}`);
  return { color: c, highlight: `radial-gradient(circle closest-side,${s.join(",")})` };
}
function Ht(e, { kind: t = "button", content: a, settings: i = {}, video: r = null, onProgress: n, renderer: o = null } = {}) {
  if (!(e instanceof HTMLElement)) throw new TypeError("A glass surface requires an HTMLElement.");
  if (!(a instanceof HTMLElement) || a === e || !e.contains(a)) throw new TypeError("content must be a child HTMLElement containing the pixels to refract.");
  const c = St[t] || St.button, h = !!r || e.classList.contains("hero-apply");
  let s = Mt(i, c, !0);
  const f = `sr-glass-${++Rr}`;
  let l = 0, u = !1, d = null, p = "", v, g = "", k = !0, E = { width: 1, height: 1 }, T = [], x, _, A, P;
  const D = /safari/i.test(navigator.userAgent) && !/chrome|chromium|android/i.test(navigator.userAgent), F = window.matchMedia("(prefers-reduced-motion: reduce)"), z = { filter: a.style.filter, transform: a.style.transform, transformOrigin: a.style.transformOrigin }, S = ["sr-glass-surface", ...t === "button" ? ["sr-glass-button"] : []].filter((y) => !e.classList.contains(y));
  getComputedStyle(e).position === "static" && S.push("sr-glass-positioned"), e.classList.add(...S);
  const M = a.classList.contains("sr-glass-content");
  a.classList.add("sr-glass-content");
  const Y = e.style.getPropertyValue("--sr-glass-lift"), te = e.style.getPropertyValue("--sr-glass-hover-scale"), le = t === "button" ? ["--glass-tint", "--glass-shine", "--glass-edge", "--glass-edge-base", "--glass-edge-fallback", "--sr-glass-blur", "--sr-glass-saturation", "--sr-glass-shine-strength", "--sr-glass-edge-strength"].map((y) => ({ name: y, value: e.style.getPropertyValue(y), priority: e.style.getPropertyPriority(y) })) : [];
  let C = null, B = null;
  const O = e.style.getPropertyValue("--sr-glass-bleed"), H = () => {
    for (const { name: y, value: L, priority: N } of le)
      L ? e.style.setProperty(y, L, N) : e.style.removeProperty(y);
  }, V = () => {
    if (t !== "button") return;
    const y = getComputedStyle(e);
    C = Object.fromEntries(["--glass-tint", "--glass-shine", "--glass-edge", "--glass-edge-base", "--glass-edge-fallback"].map((L) => [L, y.getPropertyValue(L).trim()]));
  }, $ = () => {
    if (!C) return;
    const y = s.surface || { tintColor: null, tintOpacity: 1, blur: 2, saturation: 1, shine: 1, edge: 1 }, L = h ? y.videoTintOpacity ?? y.tintOpacity : y.tintOpacity;
    e.style.setProperty("--glass-tint", Tt(C["--glass-tint"], L, y.tintColor));
    const N = Number.parseFloat(C["--glass-shine"]);
    e.style.setProperty("--glass-shine", String((Number.isFinite(N) ? N : 1) * y.shine));
    for (const U of ["--glass-edge", "--glass-edge-base", "--glass-edge-fallback"]) e.style.setProperty(U, Tt(C[U], y.edge));
    e.style.setProperty("--sr-glass-blur", `${y.blur}px`), e.style.setProperty("--sr-glass-saturation", String(y.saturation)), e.style.setProperty("--sr-glass-shine-strength", String(y.shine)), e.style.setProperty("--sr-glass-edge-strength", String(y.edge)), B?.update(s);
  };
  V();
  const w = t === "button" ? Fr({ restore: H, capture: V, apply: $ }) : () => {
  }, R = document.createElement("span");
  R.className = "sr-glass-fx", R.setAttribute("aria-hidden", "true");
  const G = document.createElement("span"), re = document.createElement("span"), X = document.createElement("span");
  G.className = "sr-glass-glow", re.className = "sr-glass-sheen", X.className = "sr-glass-core", X.hidden = !0, R.append(G, re, X), e.append(R), Pr();
  const b = Z("filter", { id: f, filterUnits: "userSpaceOnUse", primitiveUnits: "userSpaceOnUse", "color-interpolation-filters": "sRGB" });
  Je.append(b);
  function Ge() {
    v = s.dispersion > 1e-3, b.replaceChildren();
    const y = Z("feFlood", { "flood-color": "rgb(128,128,128)", result: "neutral" });
    x = Z("feImage", { preserveAspectRatio: "none", result: "mapImage" });
    const L = Z("feComposite", { in: "mapImage", in2: "neutral", operator: "over", result: "rawMap" }), N = Z("feColorMatrix", { in: "rawMap", type: "matrix", values: "1 0 0 0 -0.001960784314 0 1 0 0 -0.001960784314 0 0 1 0 0 0 0 0 1 0", result: "map" });
    b.append(y, x, L, N), T = [];
    const U = (ee) => {
      const j = Z("feDisplacementMap", { in: "SourceGraphic", in2: "map", scale: 0, xChannelSelector: "R", yChannelSelector: "G", result: ee });
      T.push(j), b.append(j);
    };
    if (v) {
      U("warpedR"), U("warpedG"), U("warpedB");
      for (const ee of ["R", "G", "B"]) {
        const j = Z("feComponentTransfer", { in: `warped${ee}`, result: `channel${ee}` });
        for (const ie of ["R", "G", "B"]) ie !== ee && j.append(Z(`feFunc${ie}`, { type: "linear", slope: 0, intercept: 0 }));
        j.append(Z("feFuncA", { type: "linear", slope: 0, intercept: 1 })), b.append(j);
      }
      b.append(
        Z("feBlend", { in: "channelR", in2: "channelG", mode: "screen", result: "redGreen" }),
        Z("feBlend", { in: "redGreen", in2: "channelB", mode: "screen", result: "rgb" }),
        Z("feComposite", { in: "rgb", in2: "warpedG", operator: "in" })
      );
    } else U("warped");
    p = "";
  }
  function J() {
    E = { width: Math.max(1, a.offsetWidth), height: Math.max(1, a.offsetHeight) };
    const y = t === "button" ? $t(s, E) : Math.ceil(Math.max(s.strength, s.warmup.strength) + s.dispersion + 3);
    t === "button" && e.style.setProperty("--sr-glass-bleed", `${y}px`);
    const L = t === "button" ? Tr(s, E, h) : y;
    b.setAttribute("x", -L), b.setAttribute("y", -L), b.setAttribute("width", E.width + L * 2), b.setAttribute("height", E.height + L * 2);
  }
  function ce() {
    _ = Et(s.width), A = Et(s.warmup.width), P = { release: At(s, s.width), warmup: At(s, s.warmup.width) }, p = g = "", k = !0, e.style.setProperty("--sr-glass-lift", `${s.lift}px`), e.style.setProperty("--sr-glass-hover-scale", String(s.hoverScale)), $();
  }
  function Pe() {
    o?.hide(), a.style.filter = z.filter || "none", a.style.transform = z.transform, a.style.transformOrigin = z.transformOrigin, R.classList.remove("sr-glass-visible");
    for (const y of [G, re, X]) y.style.opacity = "0";
    X.hidden || (X.hidden = !0), e.classList.remove("sr-glass-active"), B?.refreshBackdrop();
  }
  function K(y, L, N = "release", U = !1, { notify: ee = !0, click: j = !1 } = {}) {
    if (u) return;
    j = j && t === "quote" && N === "release", U = U && !j, d = { progress: m(y), origin: L, phase: N, fromWarmup: U, click: j };
    const ie = N === "warmup", I = ie ? ur(y, s, E, L) : lr(y, s, E, L), Me = ie ? s.warmup : s, { coreAmount: lt, stretchAmount: ct } = ie ? { coreAmount: s.warmup.coreGlow * I.core, stretchAmount: s.warmup.stretch * I.build } : cr(I, s, U), ut = nr(y, s, { phase: N, fromWarmup: U });
    if (!(I.amplitude > 1e-5 || lt > 1e-5 || Math.abs(ct) > 1e-6 || ut > 1e-6) || document.hidden) Pe();
    else {
      const he = F.matches, Te = he ? 0 : Me.strength * I.amplitude, He = he ? 0 : s.dispersion * I.amplitude * (ie ? 0.45 : 1), Xe = !he && (Te || He) ? ie ? A : _ : null;
      Xe && o?.render(I, Te, He, Xe.canvas) ? a.style.filter = z.filter || "none" : Xe ? (p !== N && (x.setAttribute("href", Xe.url), p = N), x.setAttribute("x", I.x - I.width / 2), x.setAttribute("y", I.y - I.height / 2), x.setAttribute("width", I.width), x.setAttribute("height", I.height), v ? [Te + He / 2, Te, Te - He / 2].forEach((ae, De) => T[De].setAttribute("scale", ae * 2)) : T[0].setAttribute("scale", Te * 2), D && (b.id = `${f}-${++l}`), a.style.filter = `url("#${b.id}")`) : (o?.hide(), a.style.filter = z.filter || "none");
      const rt = he ? 0 : ct, it = he ? 0 : ut, Yt = -E.height * it * (1 - L.y);
      a.style.transform = rt || it ? `${z.transform} translateY(${Yt}px) scale(${1 + rt}, ${1 - rt * 0.3 + it})`.trim() : z.transform, a.style.transformOrigin = `${L.x * 100}% ${L.y * 100}%`, e.classList.add("sr-glass-active"), R.classList.add("sr-glass-visible"), g !== N && (G.style.backgroundImage = P[N].color, re.style.backgroundImage = P[N].highlight, g = N);
      const dt = `translate3d(${I.x}px, ${I.y}px, 0) translate(-50%, -50%)`, ft = (he ? 0.45 : 1) * (j ? ir(I.elapsed, s) : 1);
      for (const [ae, De] of [[G, Me.glow], [re, Me.sheen]]) {
        const We = De * I.amplitude * ft;
        ae.style.opacity = String(We), We > 0 && (ae.style.width = `${I.width}px`, ae.style.height = `${I.height}px`, ae.style.transform = dt, ae === G && (G.style.filter = `hue-rotate(${I.hue.toFixed(3)}deg)`));
      }
      const Ve = m(lt) * ft;
      if (X.hidden !== Ve <= 0 && (X.hidden = Ve <= 0), X.style.opacity = String(Ve), Ve > 0) {
        if (k) {
          const We = s.spectrum.map((ht) => `${Gt(ht.color, 0.2)} ${(28 + ht.position * 58).toFixed(2)}%`).join(",");
          X.style.backgroundImage = `var(--sr-glass-core-light),radial-gradient(circle closest-side,transparent 12%,${We},transparent 100%)`, k = !1;
        }
        const ae = or(s, E, { kind: t, phase: N, click: j }), De = sr(y, s, { phase: N, fromWarmup: U, reducedMotion: he });
        X.style.width = `${ae}px`, X.style.height = `${ae}px`, X.style.transform = `${dt} scale(${De})`, X.style.filter = `hue-rotate(${I.hue.toFixed(3)}deg)`;
      }
    }
    B?.refreshBackdrop(), ee && typeof n == "function" && n({ ...d, mode: "ripple", active: ge.has(W) });
  }
  function Ee(y) {
    return { x: m(Number.isFinite(y?.x) ? y.x : s.origin.x), y: m(Number.isFinite(y?.y) ? y.y : s.origin.y) };
  }
  const W = {
    play({ x: y, y: L, fromWarmup: N = !1, click: U = !1 } = {}) {
      if (u || document.hidden) return;
      const ee = Ee({ x: y, y: L }), j = performance.now(), ie = F.matches ? Math.min(Be(s), 200) : Be(s);
      J(), K(0, ee, "release", N, { click: U }), Cr(W, (I) => {
        const Me = m((I - j) / ie);
        Me >= 1 && Ye(W), K(Me, ee, "release", N, { click: U });
      });
    },
    seek(y, L = s.origin, { fromWarmup: N = !1, click: U = !1 } = {}) {
      u || (Ye(W), Q || J(), K(Number.isFinite(y) ? y : 0, Ee(L), "release", N, { click: U }));
    },
    warmup(y, L = s.origin) {
      u || (Ye(W), Q || J(), K(Number.isFinite(y) ? y : 0, Ee(L), "warmup"));
    },
    update(y = {}) {
      u || (s = Mt(y, s), v !== s.dispersion > 1e-3 && Ge(), ce(), J(), d && K(d.progress, d.origin, d.phase, d.fromWarmup, { click: d.click }));
    },
    reset() {
      u || (Ye(W), d = null, Pe(), typeof n == "function" && n({ progress: 0, mode: "ripple", phase: "release", origin: { ...s.origin }, active: !1 }));
    },
    destroy() {
      u || (W.reset(), u = !0, o?.destroy(), Q?.disconnect(), window.removeEventListener("resize", Le), F.removeEventListener?.("change", fe), B?.destroy(), B = null, O ? e.style.setProperty("--sr-glass-bleed", O) : e.style.removeProperty("--sr-glass-bleed"), w(), H(), R.remove(), b.remove(), e.classList.remove(...S), M || a.classList.remove("sr-glass-content"), a.style.filter = z.filter, Y ? e.style.setProperty("--sr-glass-lift", Y) : e.style.removeProperty("--sr-glass-lift"), te ? e.style.setProperty("--sr-glass-hover-scale", te) : e.style.removeProperty("--sr-glass-hover-scale"), Qe.delete(W), Qe.size || (pe.remove(), pe = Je = null, document.removeEventListener("visibilitychange", qt)));
    },
    refreshMaterial() {
      B?.refreshBackdrop();
    },
    getSettings() {
      return structuredClone(s);
    }
  }, Le = () => {
    J(), d && K(d.progress, d.origin, d.phase, d.fromWarmup, { notify: !1, click: d.click });
  }, fe = () => W.reset(), Q = typeof ResizeObserver == "function" ? new ResizeObserver(Le) : null;
  return Q?.observe(a), Q || window.addEventListener("resize", Le, { passive: !0 }), F.addEventListener?.("change", fe), Ge(), ce(), J(), Pe(), Qe.add(W), o?.setRedraw(() => {
    d && !u && K(d.progress, d.origin, d.phase, d.fromWarmup, { notify: !1, click: d.click });
  }), t === "button" && (B = Mr(e, a, s, { video: r })), W;
}
function Lr(e, t, a) {
  const i = e.getBoundingClientRect(), r = e.offsetWidth, n = e.offsetHeight;
  t.width = Math.ceil(r * a), t.height = Math.ceil(n * a);
  const o = t.getContext("2d");
  o.scale(a, a);
  const c = getComputedStyle(e);
  o.fillStyle = c.backgroundColor, o.fillRect(0, 0, r, n);
  const h = e.querySelector(".quote-surface");
  if (h && (o.fillStyle = getComputedStyle(h).backgroundColor, o.fillRect(0, 0, r, n), getComputedStyle(h, "::after").content !== "none"))
    for (const [s, f, l] of [["--surface", n, n * 0.75997], ["--soft", 0, n * 0.24003]]) {
      const u = c.getPropertyValue(s).trim(), d = o.createLinearGradient(0, f, 0, l);
      d.addColorStop(0, u), d.addColorStop(1, "transparent"), o.fillStyle = d, o.fillRect(0, 0, r, n);
    }
  for (const s of e.querySelectorAll("blockquote, .quote-attribution p")) {
    const f = document.createTreeWalker(s, NodeFilter.SHOW_TEXT);
    for (let l = f.nextNode(); l; l = f.nextNode()) {
      const u = getComputedStyle(l.parentElement);
      o.font = `${u.fontStyle} ${u.fontWeight} ${u.fontSize} ${u.fontFamily}`, o.letterSpacing = "0px", o.fontKerning = "none", o.fillStyle = u.color, o.textBaseline = "alphabetic";
      const d = o.measureText("Mg").fontBoundingBoxAscent;
      if (!Number.isFinite(d)) throw Error("Quote font metrics unavailable");
      const p = document.createRange();
      for (let v = 0; v < l.length; v++) {
        p.setStart(l, v), p.setEnd(l, v + 1);
        const g = p.getBoundingClientRect();
        g.width > 0 && l.data[v].trim() && o.fillText(l.data[v], g.x - i.x, g.y - i.y + d);
      }
    }
  }
  for (const s of e.querySelectorAll(".quote-avatars img")) {
    if (!s.complete || !s.naturalWidth) throw Error("Quote avatar is not ready");
    const f = s.getBoundingClientRect(), l = f.x - i.x, u = f.y - i.y, d = Math.max(f.width / s.naturalWidth, f.height / s.naturalHeight), p = f.width / d, v = f.height / d;
    o.save(), o.beginPath(), o.ellipse(l + f.width / 2, u + f.height / 2, f.width / 2, f.height / 2, 0, 0, Math.PI * 2), o.clip(), o.drawImage(s, (s.naturalWidth - p) / 2, 0, p, v, l, u, f.width, f.height), o.restore();
  }
  return { width: r, height: n };
}
const Dr = `attribute vec2 position;varying vec2 uv;
void main(){uv=vec2(position.x*.5+.5,.5-position.y*.5);gl_Position=vec4(position,0.,1.);}`, Or = `precision highp float;varying vec2 uv;
uniform sampler2D source,map;uniform vec2 size,mapOrigin;uniform float diameter,strength,dispersion;
vec4 pixel(vec2 p){
 // This owned source has an opaque flat fill. Extend that fill at its edge
 // so split color samples cannot expose a colored seam at the fixed frame.
 return texture2D(source,p);
}
void main(){
 vec2 m=(uv*size-mapOrigin)/diameter+.5, d=vec2(0.);
 if(all(greaterThanEqual(m,vec2(0.)))&&all(lessThanEqual(m,vec2(1.))))
  d=texture2D(map,m).rg-vec2(128./255.);
 vec4 base=pixel(uv+d*(strength*2.)/size);
 float r=pixel(uv+d*((strength+dispersion*.5)*2.)/size).r;
 float b=pixel(uv+d*((strength-dispersion*.5)*2.)/size).b;
 gl_FragColor=vec4(r,base.g,b,base.a);
}`;
function Nr(e) {
  const t = e.getContext("webgl", { alpha: !0, premultipliedAlpha: !1, antialias: !1, preserveDrawingBuffer: !0 });
  if (!t || t.isContextLost()) return null;
  const a = [], i = [];
  let r, n;
  const o = () => {
    if (!t.isContextLost()) {
      for (const c of a) t.deleteShader(c);
      for (const c of i) t.deleteTexture(c);
      n && t.deleteBuffer(n), r && t.deleteProgram(r);
    }
  };
  try {
    const c = (l, u) => {
      const d = t.createShader(l);
      if (a.push(d), t.shaderSource(d, u), t.compileShader(d), !t.getShaderParameter(d, t.COMPILE_STATUS)) throw Error("Quote shader unavailable");
      return d;
    }, h = c(t.VERTEX_SHADER, Dr), s = c(t.FRAGMENT_SHADER, Or);
    if (r = t.createProgram(), t.attachShader(r, h), t.attachShader(r, s), t.bindAttribLocation(r, 0, "position"), t.linkProgram(r), !t.getProgramParameter(r, t.LINK_STATUS)) throw Error("Quote shader unavailable");
    t.useProgram(r), n = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, n), t.bufferData(t.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), t.STATIC_DRAW), t.enableVertexAttribArray(0), t.vertexAttribPointer(0, 2, t.FLOAT, !1, 0, 0);
    const f = Object.fromEntries(["source", "map", "size", "mapOrigin", "diameter", "strength", "dispersion"].map((l) => [l, t.getUniformLocation(r, l)]));
    for (let l = 0; l < 2; l++) {
      t.activeTexture(t.TEXTURE0 + l);
      const u = t.createTexture();
      i.push(u), t.bindTexture(t.TEXTURE_2D, u);
      for (const d of [t.TEXTURE_MIN_FILTER, t.TEXTURE_MAG_FILTER]) t.texParameteri(t.TEXTURE_2D, d, t.LINEAR);
      for (const d of [t.TEXTURE_WRAP_S, t.TEXTURE_WRAP_T]) t.texParameteri(t.TEXTURE_2D, d, t.CLAMP_TO_EDGE);
    }
    return t.uniform1i(f.source, 0), t.uniform1i(f.map, 1), { gl: t, uniforms: f, textures: i, dispose: o, maxSize: t.getParameter(t.MAX_TEXTURE_SIZE) };
  } catch {
    return o(), null;
  }
}
function kr(e) {
  if (typeof ResizeObserver != "function" || typeof IntersectionObserver != "function" || !e.querySelector("blockquote") || !e.querySelector(".quote-attribution")) return null;
  const t = document.createElement("canvas"), a = document.createElement("canvas");
  t.className = "sr-quote-gpu", t.setAttribute("aria-hidden", "true"), t.hidden = !0, t.style.cssText = "position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:2";
  const i = e.style.isolation;
  e.style.isolation = "isolate", e.append(t);
  let r = null, n = !1, o = !1, c = !1, h = !1, s = null, f = null, l = 0, u = !1, d = 0, p = () => {
  }, v = "", g = !1, k = 0, E = 0, T = 0, x = 0, _ = "";
  const A = window.matchMedia("(prefers-reduced-motion: reduce), (forced-colors: active)"), P = () => window.devicePixelRatio || 1, D = () => {
    t.hidden = !0;
  }, F = () => {
    o || (l++, n = !1, D(), !u && (h || r) && (u = !0, d = requestAnimationFrame(() => {
      d = 0, u = !1, z();
    })), p());
  };
  async function z() {
    if (A.matches) return;
    const O = l;
    try {
      if (await document.fonts.ready, await Promise.all([...e.querySelectorAll(".quote-avatars img")].map((X) => X.decode())), o || O !== l || c || A.matches) return;
      if (r ||= Nr(t), !r) {
        c = !0;
        return;
      }
      const H = e.offsetWidth, V = e.offsetHeight, $ = P();
      if (!H || !V || H * $ > r.maxSize || V * $ > r.maxSize || H * V * $ * $ > 16e6) return;
      const w = e.style.transform;
      e.style.transform = "none";
      try {
        f = Lr(e, a, $);
      } finally {
        e.style.transform = w;
      }
      t.width = a.width, t.height = a.height;
      const { gl: R, textures: G, uniforms: re } = r;
      if (R.viewport(0, 0, t.width, t.height), R.activeTexture(R.TEXTURE0), R.bindTexture(R.TEXTURE_2D, G[0]), R.texImage2D(R.TEXTURE_2D, 0, R.RGBA, R.RGBA, R.UNSIGNED_BYTE, a), R.uniform2f(re.size, f.width, f.height), R.getError() !== R.NO_ERROR) throw Error("Quote texture unavailable");
      k++, v = `${H}:${V}:${$}`, n = !0, p();
    } catch (H) {
      if (o || O !== l) return;
      _ = H.message, n = !1, D();
    }
  }
  const S = () => {
    v !== `${e.offsetWidth}:${e.offsetHeight}:${P()}` && F();
  }, M = new ResizeObserver(S);
  M.observe(e);
  const Y = new IntersectionObserver((O) => {
    h = O[0].isIntersecting, h && !n && !c && F();
  }, { rootMargin: "200px" });
  Y.observe(e);
  const te = new MutationObserver(F);
  te.observe(document.documentElement, { attributes: !0, attributeFilter: ["data-theme"] });
  const Se = new MutationObserver(F);
  Se.observe(e, { subtree: !0, childList: !0, characterData: !0, attributes: !0, attributeFilter: ["src", "srcset"] });
  const le = () => {
    const O = document.getSelection(), H = !!(O && !O.isCollapsed && (e.contains(O.anchorNode) || e.contains(O.focusNode)));
    H !== g && (g = H, H && D(), p());
  }, C = (O) => {
    T++, O.preventDefault(), n = !1, s = null, D(), p();
  }, B = () => {
    x++, r = null, c = !1, s = null, F();
  };
  return t.addEventListener("webglcontextlost", C), t.addEventListener("webglcontextrestored", B), document.addEventListener("selectionchange", le), A.addEventListener("change", F), document.fonts.addEventListener("loadingdone", F), e.addEventListener("load", F, !0), window.addEventListener("resize", S, { passive: !0 }), {
    setRedraw(O) {
      p = O;
    },
    render(O, H, V, $) {
      if (!n || g || A.matches || !r || r.gl.isContextLost())
        return D(), !1;
      const { gl: w, textures: R, uniforms: G } = r;
      if ($ !== s) {
        if (w.activeTexture(w.TEXTURE1), w.bindTexture(w.TEXTURE_2D, R[1]), w.texImage2D(w.TEXTURE_2D, 0, w.RGBA, w.RGBA, w.UNSIGNED_BYTE, $), w.getError() !== w.NO_ERROR)
          return n = !1, D(), !1;
        s = $;
      }
      return w.uniform2f(G.mapOrigin, O.x, O.y), w.uniform1f(G.diameter, O.width), w.uniform1f(G.strength, H), w.uniform1f(G.dispersion, V), w.drawArrays(w.TRIANGLE_STRIP, 0, 4), E++, t.hidden = !1, !0;
    },
    hide: D,
    refresh: F,
    diagnostics() {
      return { ready: n, sourceUploads: k, draws: E, losses: T, restores: x, lastError: _, lost: r?.gl.isContextLost(), width: t.width, height: t.height, selected: g, hidden: t.hidden };
    },
    destroy() {
      o || (o = !0, l++, cancelAnimationFrame(d), M.disconnect(), Y.disconnect(), te.disconnect(), Se.disconnect(), window.removeEventListener("resize", S), document.fonts.removeEventListener("loadingdone", F), document.removeEventListener("selectionchange", le), A.removeEventListener("change", F), e.removeEventListener("load", F, !0), t.removeEventListener("webglcontextlost", C), t.removeEventListener("webglcontextrestored", B), r?.dispose(), r = null, t.remove(), e.style.isolation = i, t.width = t.height = a.width = a.height = 1, p = () => {
      });
    }
  };
}
const Rt = [0, 0.25, 0.5, 0.75, 1].map((e) => ({ t: e, value: e })), Ft = [0.22, 0.61, 0.36, 1], zr = {
  lift: { duration: 360, returnDuration: 240 },
  scale: { duration: 420, returnDuration: 280 }
};
function Xt(e, t) {
  const a = e?.[`${t}Motion`] || {}, i = zr[t];
  return {
    duration: Math.max(1, a.duration ?? i.duration),
    delay: Math.max(0, a.delay ?? 0),
    curve: a.curve || Ft,
    keyframes: a.keyframes || Rt,
    returnDuration: Math.max(1, a.returnDuration ?? i.returnDuration),
    returnCurve: a.returnCurve || Ft,
    returnKeyframes: a.returnKeyframes || Rt
  };
}
const ve = (e) => e !== "leave";
function Vt(e, t = "enter") {
  return Math.max(...["lift", "scale"].map((a) => {
    const i = Xt(e, a);
    return ve(t) ? i.delay + i.duration : i.returnDuration;
  }));
}
function et(e, t, a, i) {
  const r = Xt(t, a), n = ve(i), o = m(e) * Vt(t, i), c = m((o - (n ? r.delay : 0)) / (n ? r.duration : r.returnDuration));
  if (c === 0 || c === 1) return c;
  const h = m(xe(c, n ? r.curve : r.returnCurve));
  return Ue(h, n ? r.keyframes : r.returnKeyframes);
}
function Ct(e, t, a = "enter") {
  const i = ve(a), r = et(e, t, "lift", a), n = et(e, t, "scale", a), o = i ? r : 1 - r, c = i ? n : 1 - n;
  return { lift: (t.lift || 0) * o, scale: 1 + ((t.hoverScale ?? 1) - 1) * c, liftProgress: o, scaleProgress: c };
}
const ze = /* @__PURE__ */ new Set(), Ce = /* @__PURE__ */ new Map();
let be = 0;
function Wt(e) {
  be = 0;
  for (const [t, a] of [...Ce]) Ce.has(t) && a(e);
  Ce.size && (be = requestAnimationFrame(Wt));
}
function _r(e, t) {
  Ce.set(e, t), be || (be = requestAnimationFrame(Wt));
}
function ke(e) {
  Ce.delete(e), !Ce.size && be && (cancelAnimationFrame(be), be = 0);
}
function Pt() {
  if (document.hidden) for (const e of ze) e.reset();
}
function Br(e, t, { onFrame: a } = {}) {
  if (!e?.style) throw new TypeError("Hover motion requires an element with a style declaration.");
  let i = structuredClone(t), r = !1, n = !1, o = { lift: 0, scale: 1, response: 0 }, c = null, h = null;
  const s = window.matchMedia("(prefers-reduced-motion: reduce)"), f = e.style.getPropertyValue("--sr-hover-lift"), l = e.style.getPropertyValue("--sr-hover-scale"), u = e.style.getPropertyValue("--sr-hover-elevation"), d = e.style.getPropertyValue("--sr-hover-border"), p = () => ({ lift: 0, scale: 1, response: 0 }), v = () => ({ lift: i.lift || 0, scale: i.hoverScale ?? 1, response: 1 });
  function g(x) {
    o = { lift: x.lift, scale: x.scale, response: x.response ?? x.liftProgress ?? 0 }, e.style.setProperty("--sr-hover-lift", `${Number(o.lift.toFixed(6))}px`), e.style.setProperty("--sr-hover-scale", String(Number(o.scale.toFixed(6))));
    const _ = (i.hoverScale ?? 1) - 1, A = s.matches ? 0 : m(i.lift ? o.lift / i.lift : _ ? (o.scale - 1) / _ : 0);
    e.style.setProperty("--sr-hover-elevation", String(Number(A.toFixed(6))));
    const P = s.matches ? Number(r) : i.lift || _ ? A : m(o.response);
    e.style.setProperty("--sr-hover-border", String(Number(P.toFixed(6)))), typeof a == "function" && a();
  }
  function k(x, _ = !1) {
    if (n) return;
    ke(E), c = null;
    const A = ve(x);
    r = A, _ && g(A ? p() : v());
    const P = { ...o }, D = A ? v() : p();
    if (s.matches || document.hidden || P.lift === D.lift && P.scale === D.scale && P.response === D.response) {
      h = null, g(D);
      return;
    }
    h = { phase: A ? "enter" : "leave", deterministic: _ };
    const F = performance.now(), z = Vt(i, x);
    _r(E, (S) => {
      const M = m((S - F) / z), Y = et(M, i, "lift", x), te = et(M, i, "scale", x);
      g({ lift: P.lift + (D.lift - P.lift) * Y, scale: P.scale + (D.scale - P.scale) * te, response: P.response + (D.response - P.response) * Y }), M >= 1 && (ke(E), h = null, g(D));
    });
  }
  const E = {
    enter() {
      !n && (!r || c) && k("enter");
    },
    leave() {
      !n && (r || c) && k("leave");
    },
    update(x) {
      n || (i = structuredClone(x), c ? g(s.matches ? ve(c.phase) ? v() : p() : Ct(c.progress, i, c.phase)) : h ? k(h.phase) : g(r ? v() : p()));
    },
    seek(x, _ = "enter") {
      n || (ke(E), h = null, c = { progress: m(Number.isFinite(x) ? x : 0), phase: ve(_) ? "enter" : "leave" }, r = ve(_), g(s.matches ? r ? v() : p() : Ct(c.progress, i, c.phase)));
    },
    play(x = "enter") {
      k(x, !0);
    },
    reset() {
      n || (ke(E), h = c = null, r = !1, g(p()));
    },
    destroy() {
      n || (E.reset(), n = !0, s.removeEventListener?.("change", T), f ? e.style.setProperty("--sr-hover-lift", f) : e.style.removeProperty("--sr-hover-lift"), l ? e.style.setProperty("--sr-hover-scale", l) : e.style.removeProperty("--sr-hover-scale"), u ? e.style.setProperty("--sr-hover-elevation", u) : e.style.removeProperty("--sr-hover-elevation"), d ? e.style.setProperty("--sr-hover-border", d) : e.style.removeProperty("--sr-hover-border"), ze.delete(E), ze.size || document.removeEventListener("visibilitychange", Pt));
    }
  }, T = () => {
    s.matches ? (ke(E), h = c = null, g(r ? v() : p())) : g(o);
  };
  return ze.size || document.addEventListener("visibilitychange", Pt), ze.add(E), s.addEventListener?.("change", T), g(p()), E;
}
const Lt = (e) => Math.max(0, Math.min(1, e));
function Ir(e, t, a, i = { x: 0, y: 0.5 }) {
  if (!Number.isFinite(t) || !Number.isFinite(a)) return { ...i };
  const r = [
    { distance: Math.abs(t - e.left), x: 0, y: 0.5 },
    { distance: Math.abs(e.right - t), x: 1, y: 0.5 },
    { distance: Math.abs(a - e.top), x: 0.5, y: 0 },
    { distance: Math.abs(e.bottom - a), x: 0.5, y: 1 }
  ];
  return r.sort((n, o) => n.distance - o.distance), { x: r[0].x, y: r[0].y };
}
function $r(e, t, a, i = 64) {
  const r = Math.max(1, t - i), n = Math.max(0, Math.min(e.bottom, t) - Math.max(e.top, i)), o = Lt(n / Math.max(1, Math.min(e.height, r))), c = Lt((o - a.start) / Math.max(1e-3, a.release - a.start));
  return { fraction: o, progress: c, visible: n > 0, release: o >= a.release };
}
const de = /* @__PURE__ */ new WeakMap(), $e = (e, t = {}) => {
  const a = structuredClone(e);
  for (const [i, r] of Object.entries(t))
    r !== void 0 && (a[i] = r && typeof r == "object" && !Array.isArray(r) ? $e(a[i] || {}, r) : structuredClone(r));
  return a;
}, tt = (e, t = "element") => {
  const a = typeof e == "string" ? document.querySelector(e) : e;
  if (!(a instanceof HTMLElement)) throw new TypeError(`Glass ${t} must be an HTMLElement or a matching selector.`);
  return a;
}, se = (e, t, a, i, r) => {
  e.addEventListener(t, a, i), r.push(() => e.removeEventListener(t, a, i));
};
function Ur(e, t) {
  const a = t.map((i) => [i, e.getAttribute(i)]);
  return () => a.forEach(([i, r]) => r === null ? e.removeAttribute(i) : e.setAttribute(i, r));
}
function ot(e, t) {
  const a = t.filter((i) => !e.classList.contains(i));
  return e.classList.add(...a), () => e.classList.remove(...a);
}
function qr(e, t) {
  const a = Object.keys(t).map((i) => [i, e.style.getPropertyValue(i), e.style.getPropertyPriority(i)]);
  for (const [i, r] of Object.entries(t)) e.style.setProperty(i, r);
  return () => a.forEach(([i, r, n]) => r ? e.style.setProperty(i, r, n) : e.style.removeProperty(i));
}
const je = (e) => {
  const t = document.createElement("span");
  return t.className = e, t;
};
function Vr() {
  return structuredClone(st);
}
function Gr(e, { video: t = null, lift: a = !0, settings: i = {} } = {}) {
  const r = tt(e);
  if (de.has(r)) return de.get(r);
  const n = t ? tt(t, "video") : null;
  if (n && !(n instanceof HTMLVideoElement)) throw new TypeError("Glass video must be a <video> element.");
  let o = $e(st.button, i), c = !1;
  const h = [], s = Ur(r, ["data-sr-glass-video"]);
  n && r.setAttribute("data-sr-glass-video", "");
  const f = ot(r, ["sr-glass-kit-button"]), l = qr(r, { padding: "0", background: "none" });
  let u = r.querySelector(":scope > .sr-button-visual");
  const d = !u;
  let p, v, g;
  if (d) {
    for (u = je("sr-button-visual"), p = je("sr-button-clip"), v = je("sr-button-content"); r.firstChild; ) v.append(r.firstChild);
    p.append(v), u.append(p), r.append(u);
  } else if (p = u.querySelector(":scope > .sr-button-clip"), v = p?.querySelector(":scope > .sr-button-content"), !p || !v)
    throw l(), f(), s(), new TypeError("Existing .sr-button-visual requires .sr-button-clip > .sr-button-content.");
  g = r.querySelector(":scope > .sr-button-hit-area");
  const k = !g;
  k && (g = je("sr-button-hit-area"), g.setAttribute("aria-hidden", "true"), r.append(g));
  const E = Ht(r, { kind: "button", content: u, settings: o, video: n });
  p.append(r.querySelector(":scope > .sr-glass-fx"));
  const T = () => a ? o : { ...o, lift: 0, hoverScale: 1 }, x = Br(r, T(), { onFrame: () => E.refreshMaterial() }), _ = () => !r.matches(':disabled,[aria-disabled="true"]'), A = () => {
    r.classList.remove("sr-glass-hovered"), x.leave();
  }, P = () => {
    E.reset(), x.reset(), r.classList.remove("sr-glass-hovered");
  }, D = (S) => {
    !_() || S.pointerType === "touch" || (r.classList.add("sr-glass-hovered"), x.enter(), E.play(o.hoverOrigin === "entry" ? Ir(r.getBoundingClientRect(), S.clientX, S.clientY, o.origin) : o.origin));
  };
  se(r, "pointerenter", D, void 0, h), se(r, "pointerleave", A, void 0, h), se(r, "blur", A, void 0, h), se(r, "focus", () => {
    r.matches(":focus-visible") && D({});
  }, void 0, h), se(r, "click", (S) => {
    if (!_()) return;
    const M = r.getBoundingClientRect(), Y = S.detail && o.clickOrigin === "pointer" ? { x: (S.clientX - M.left) / M.width, y: (S.clientY - M.top) / M.height } : o.origin;
    E.play(Y);
  }, !0, h), se(document, "visibilitychange", () => {
    document.hidden && P();
  }, void 0, h);
  const F = new IntersectionObserver((S) => {
    S[0].isIntersecting || P();
  });
  F.observe(r), h.push(() => F.disconnect());
  const z = {
    play(S = o.origin) {
      !c && _() && E.play(S);
    },
    reset() {
      c || P();
    },
    update(S) {
      c || (o = $e(o, S), E.update(o), x.update(T()));
    },
    destroy() {
      if (!c) {
        if (c = !0, h.forEach((S) => S()), x.destroy(), E.destroy(), r.classList.remove("sr-glass-hovered"), k && g.remove(), d) {
          for (; v.firstChild; ) r.insertBefore(v.firstChild, u);
          u.remove();
        }
        l(), f(), s(), de.delete(r);
      }
    }
  };
  return de.set(r, z), z;
}
function Hr(e, { content: t, headerOffset: a = 64, settings: i = {}, scroll: r = !0, safariGPU: n = !1 } = {}) {
  const o = tt(e);
  if (de.has(o)) return de.get(o);
  if (!Number.isFinite(a) || a < 0) throw new TypeError("headerOffset must be a nonnegative number.");
  let c = t ? tt(t, "content") : o.querySelector(":scope > .sr-quote-content");
  if (c && (c === o || !o.contains(c))) throw new TypeError("Quote content must be inside its frame.");
  const h = !c;
  if (h) {
    for (c = document.createElement("div"); o.firstChild; ) c.append(o.firstChild);
    o.append(c);
  }
  const s = ot(o, ["sr-glass-kit-quote"]), f = ot(c, ["sr-quote-content"]);
  let l = $e(st.quote, i), u = !1, d = !1, p = 0, v = !1;
  const g = [], k = /safari/i.test(navigator.userAgent) && !/chrome|chromium|android/i.test(navigator.userAgent), E = n && k ? kr(c) : null, T = Ht(o, { kind: "quote", content: c, settings: l, renderer: E }), x = () => {
    p && cancelAnimationFrame(p), p = 0;
  }, _ = () => {
    if (p = 0, v || !r || !u || d || document.hidden) return;
    const S = $r(o.getBoundingClientRect(), innerHeight, l.warmup, a);
    if (!S.visible) {
      T.reset();
      return;
    }
    S.release ? (d = !0, T.play({ ...l.origin, fromWarmup: l.warmup.enabled })) : l.warmup.enabled ? T.warmup(S.progress, l.origin) : T.reset();
  }, A = () => {
    !p && r && u && !d && !v && (p = requestAnimationFrame(_));
  }, P = () => {
    x(), d = !1, T.reset();
  }, D = new IntersectionObserver((S) => {
    u = S[0].isIntersecting, window.removeEventListener("scroll", A), u ? (r && window.addEventListener("scroll", A, { passive: !0 }), A()) : P();
  }, { rootMargin: `-${a}px 0px 0px 0px` });
  D.observe(o), g.push(() => {
    D.disconnect(), window.removeEventListener("scroll", A);
  }), se(window, "resize", A, { passive: !0 }, g), se(document, "visibilitychange", () => {
    document.hidden ? x() : A();
  }, void 0, g);
  const F = (S = l.origin) => {
    v || (x(), d = !0, T.play({ ...S, fromWarmup: !1, click: !0 }));
  };
  se(o, "click", (S) => {
    if (getSelection()?.toString() || S.target.closest?.('a,button,input,textarea,select,[contenteditable="true"]')) return;
    const M = o.getBoundingClientRect();
    F(S.detail && l.clickOrigin === "pointer" ? { x: (S.clientX - M.left) / M.width, y: (S.clientY - M.top) / M.height } : l.origin);
  }, void 0, g);
  const z = {
    play: F,
    reset() {
      v || P();
    },
    update(S) {
      v || (l = $e(l, S), T.update(l), A());
    },
    destroy() {
      if (!v) {
        if (v = !0, x(), g.forEach((S) => S()), T.destroy(), s(), f(), h) {
          for (; c.firstChild; ) o.insertBefore(c.firstChild, c);
          c.remove();
        }
        de.delete(o);
      }
    }
  };
  return de.set(o, z), z;
}
function Wr(e = document) {
  const t = [];
  try {
    for (const a of e.querySelectorAll("[data-glass-button]")) t.push(Gr(a, {
      video: a.getAttribute("data-glass-video") || null,
      lift: a.getAttribute("data-glass-lift") !== "off"
    }));
    for (const a of e.querySelectorAll("[data-glass-quote]")) t.push(Hr(a, {
      headerOffset: Number(a.getAttribute("data-glass-header-offset") ?? 64),
      safariGPU: a.hasAttribute("data-glass-quote-gpu")
    }));
  } catch (a) {
    throw t.forEach((i) => i.destroy()), a;
  }
  return { destroy() {
    t.forEach((a) => a.destroy());
  } };
}
export {
  Vr as getGlassPreset,
  Wr as mountGlass,
  Gr as mountGlassButton,
  Hr as mountGlassQuote
};
