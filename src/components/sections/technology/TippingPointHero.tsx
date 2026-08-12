'use client';

import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from 'framer-motion';
import { useRef } from 'react';

/* viewBox units. preserveAspectRatio="none" stretches to the hero; strokes use
   vector-effect="non-scaling-stroke" so they stay uniform. */
const W = 100;
const H = 60;
const NPTS = 48;
const NORM = 1 - Math.exp(-3.2); // normalises the plateau to reach 1 at nx=1

/**
 * value(nx, p): at p=0 a steep, still-climbing growth ramp; at p=1 a curve that
 * rises then plateaus. Scrolling flattens one into the other — the literal
 * picture of "when hardware stops getting faster, software has to get smarter."
 */
function valueAt(nx: number, p: number) {
  const steep = Math.pow(nx, 1.7); // convex, accelerating — never levels off
  const plateau = (1 - Math.exp(-3.2 * nx)) / NORM; // concave, saturates to ~1
  return steep + (plateau - steep) * p;
}

function linePath(p: number) {
  let d = '';
  for (let i = 0; i <= NPTS; i++) {
    const nx = i / NPTS;
    const x = nx * W;
    const y = H - 3 - valueAt(nx, p) * (H - 8);
    d += i === 0 ? `M ${x.toFixed(2)} ${y.toFixed(2)}` : ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
  }
  return d;
}

const areaPath = (p: number) => `${linePath(p)} L ${W} ${H} L 0 ${H} Z`;

export const TippingPointHero = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  // Flatten over the first ~60% of the hero's scroll-out.
  const pathProgress = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const line: MotionValue<string> | string = useTransform(pathProgress, (p) => linePath(p));
  const area: MotionValue<string> | string = useTransform(pathProgress, (p) => areaPath(p));

  // Reduced motion renders the flattened end state, no scroll binding.
  const lineD = reduce ? linePath(1) : line;
  const areaD = reduce ? areaPath(1) : area;

  return (
    <section
      ref={targetRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-deep-navy via-[#16213e] to-black overflow-hidden"
    >
      {/* Scroll-linked growth-ramp → plateau curve, behind the content. */}
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] w-full"
      >
        <defs>
          <linearGradient id="tipping-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1DBFBF" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#1DBFBF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path d={areaD} fill="url(#tipping-fill)" />
        <motion.path
          d={lineD}
          fill="none"
          stroke="#1DBFBF"
          strokeOpacity="0.55"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-display-l text-white mb-8">
            When hardware stops getting faster,{' '}
            <span className="text-vibrant-teal">software has to get smarter.</span>
          </h1>
          <p className="text-body-l text-white/80 max-w-3xl mx-auto">
            Aqua is Aquon&apos;s computation engine. It reads the machine it runs on and adapts to
            it, at runtime, with nothing configured by the caller.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
