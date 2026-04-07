"use client";

// Tiny WebAudio synth — no assets, all procedural roast SFX.
let ctx: AudioContext | null = null;
let muted = false;

function getCtx() {
  if (typeof window === "undefined") return null;
  if (!ctx) ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}

export function setMuted(v: boolean) {
  muted = v;
}
export function isMuted() {
  return muted;
}

function tone(freq: number, dur: number, type: OscillatorType = "sine", vol = 0.15, when = 0) {
  const c = getCtx();
  if (!c || muted) return;
  const t = c.currentTime + when;
  const osc = c.createOscillator();
  const g = c.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(vol, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(g).connect(c.destination);
  osc.start(t);
  osc.stop(t + dur + 0.05);
}

// Crisp UI click
export function clickPop() {
  tone(880, 0.08, "triangle", 0.12);
  tone(1320, 0.06, "sine", 0.08, 0.01);
}

// Roast "wah-wah-waaah"
export function sadTrombone() {
  const notes = [392, 349.23, 311.13, 261.63];
  notes.forEach((f, i) => tone(f, 0.35, "sawtooth", 0.12, i * 0.18));
}

// Glitch zap
export function glitchZap() {
  const c = getCtx();
  if (!c || muted) return;
  for (let i = 0; i < 6; i++) {
    tone(200 + Math.random() * 1200, 0.05, "square", 0.07, i * 0.03);
  }
}

// Stadium-ish whoosh (white noise burst)
export function whoosh() {
  const c = getCtx();
  if (!c || muted) return;
  const buf = c.createBuffer(1, c.sampleRate * 0.4, c.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
  const src = c.createBufferSource();
  const g = c.createGain();
  const filt = c.createBiquadFilter();
  filt.type = "bandpass";
  filt.frequency.value = 800;
  src.buffer = buf;
  g.gain.value = 0.15;
  src.connect(filt).connect(g).connect(c.destination);
  src.start();
}

// Trophy sparkle
export function sparkle() {
  [1320, 1760, 2093, 2637].forEach((f, i) => tone(f, 0.18, "triangle", 0.1, i * 0.06));
}
