'use client';

import { useEffect, useRef } from 'react';

/**
 * Ambient Canvas-2D animation behind the homepage hero. The concept is
 * optimization converging: ~60 teal points scattered in the field drift onto a
 * smooth curve, settle, then redistribute and converge again on a slow loop.
 *
 * Constraints (spec §3.1): Canvas 2D only (no new dependency), runs at
 * devicePixelRatio capped at 2, stops the RAF loop when off screen
 * (IntersectionObserver) or when the tab is hidden, and — under
 * prefers-reduced-motion — renders a single static converged frame with no loop.
 * The canvas never intercepts pointer events; hero text and CTAs sit above it.
 */
export const ConvergenceField = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const N = 60;
    const TEAL = '29,191,191';
    type P = { x: number; y: number; tx: number; ty: number };
    const pts: P[] = [];

    let width = 0;
    let height = 0;

    // Smooth curve parameters, re-rolled each convergence.
    let amp = 0.16;
    let freq = 1.6;
    let phase = 0;
    let mid = 0.5;

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    const rollCurve = () => {
      amp = rand(0.12, 0.22);
      freq = rand(1.1, 2.4);
      phase = rand(0, Math.PI * 2);
      mid = rand(0.42, 0.58);
    };

    const curveY = (nx: number) =>
      (mid + amp * Math.sin(nx * freq * Math.PI * 2 + phase)) * height;

    const seedPoints = () => {
      pts.length = 0;
      for (let i = 0; i < N; i++) {
        const x = (i / (N - 1)) * width;
        pts.push({ x, y: rand(0, height), tx: x, ty: rand(0, height) });
      }
    };

    const targetCurve = () => {
      for (const p of pts) {
        const nx = width ? Math.min(1, Math.max(0, p.x / width)) : 0;
        p.tx = p.x; // hold x, settle onto the curve in y
        p.ty = curveY(nx);
      }
    };

    const targetScatter = () => {
      for (const p of pts) {
        p.tx = rand(0, width);
        p.ty = rand(0, height);
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (pts.length === 0) seedPoints();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Faint line threaded through the points (left→right): a loose net while
      // scattered, a smooth curve once converged.
      const sorted = [...pts].sort((a, b) => a.x - b.x);
      ctx.strokeStyle = `rgba(${TEAL},0.10)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      sorted.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
      ctx.stroke();

      ctx.fillStyle = `rgba(${TEAL},0.5)`;
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // ── Reduced motion: one static converged frame, no loop ──────────────────
    if (reduce) {
      resize();
      rollCurve();
      targetCurve();
      for (const p of pts) {
        p.x = p.tx;
        p.y = p.ty;
      }
      draw();
      const onResizeStatic = () => {
        resize();
        targetCurve();
        for (const p of pts) {
          p.x = p.tx;
          p.y = p.ty;
        }
        draw();
      };
      window.addEventListener('resize', onResizeStatic);
      return () => window.removeEventListener('resize', onResizeStatic);
    }

    // ── Animated loop ────────────────────────────────────────────────────────
    type Phase = 'converge' | 'hold' | 'scatter';
    const DUR: Record<Phase, number> = { converge: 3.2, hold: 1.2, scatter: 2.4 };
    let currentPhase: Phase = 'converge';
    let phaseT = 0;
    let last = 0;
    let raf = 0;
    let running = false;

    const enter = (name: Phase) => {
      currentPhase = name;
      phaseT = 0;
      if (name === 'converge') {
        rollCurve();
        targetCurve();
      } else if (name === 'scatter') {
        targetScatter();
      }
      // 'hold' keeps the converged targets
    };

    const tick = (ts: number) => {
      if (!running) return;
      if (!last) last = ts;
      let dt = (ts - last) / 1000;
      last = ts;
      if (dt > 0.05) dt = 0.05; // clamp after a stall
      phaseT += dt;

      const tau = currentPhase === 'scatter' ? 0.7 : 0.5;
      const k = 1 - Math.exp(-dt / tau);
      for (const p of pts) {
        p.x += (p.tx - p.x) * k;
        p.y += (p.ty - p.y) * k;
      }
      draw();

      if (phaseT >= DUR[currentPhase]) {
        enter(currentPhase === 'converge' ? 'hold' : currentPhase === 'hold' ? 'scatter' : 'converge');
      }
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;
      running = true;
      last = 0;
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    resize();
    enter('converge');

    // Pause when off screen.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !document.hidden) start();
        else stop();
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    // Pause when the tab is hidden.
    const onVisibility = () => {
      if (document.hidden) stop();
      else if (canvas.getBoundingClientRect().bottom > 0) start();
    };
    document.addEventListener('visibilitychange', onVisibility);

    const onResize = () => resize();
    window.addEventListener('resize', onResize);

    return () => {
      stop();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
};
