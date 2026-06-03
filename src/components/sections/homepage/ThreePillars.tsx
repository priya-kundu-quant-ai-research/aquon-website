'use client';

import { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const pillars = [
  {
    id: 'aqua',
    label: 'Aqua',
    title: 'Aqua, the engine.',
    copy: 'A computation engine built for financial computing: faster optimization, audited and secure by design.',
    cta: 'Explore the technology',
    href: '/technology',
    Motif: AquaMotif,
  },
  {
    id: 'zeton',
    label: 'Zeton',
    title: 'Zeton, the platform.',
    copy: 'An Aladdin-class investment operating system for the managers the giants overlook.',
    cta: 'Explore the platform',
    href: '/zeton#overview-video',
    Motif: ZetonMotif,
  },
  {
    id: 'aqtf',
    label: 'AQTF',
    title: 'AQTF, the fund.',
    copy: 'Our own systematic, market-neutral strategy, live on Interactive Brokers.',
    cta: 'Inquire about the pilot',
    href: '/fund',
    Motif: AqtfMotif,
  },
];

/* ── SVG Motifs ─────────────────────────────────────────────────────────── */

function AquaMotif({ reduced }: { reduced: boolean }) {
  return (
    <svg
      viewBox="0 0 200 120"
      aria-hidden="true"
      className="w-full max-w-[220px] mx-auto"
    >
      {/* Waveform / sine-like lattice */}
      {[0, 1, 2, 3].map((row) => (
        <g key={row} opacity={0.6 - row * 0.1}>
          {[0, 1, 2, 3, 4, 5, 6].map((col) => {
            const cx = col * 30 + 10;
            const cy = 20 + row * 25 + Math.sin((col + row) * 0.8) * 8;
            return (
              <circle
                key={col}
                cx={cx}
                cy={cy}
                r={reduced ? 4 : 3}
                fill="#1DBFBF"
                opacity={0.7}
              >
                {!reduced && (
                  <animate
                    attributeName="cy"
                    values={`${cy};${cy - 6};${cy}`}
                    dur={`${1.8 + col * 0.15}s`}
                    repeatCount="indefinite"
                    begin={`${col * 0.12}s`}
                  />
                )}
              </circle>
            );
          })}
        </g>
      ))}
      {/* Connecting lines */}
      <polyline
        points="10,30 40,22 70,35 100,18 130,28 160,20 190,32"
        fill="none"
        stroke="#1DBFBF"
        strokeWidth="1.5"
        strokeOpacity="0.4"
      />
    </svg>
  );
}

function ZetonMotif({ reduced }: { reduced: boolean }) {
  const panels = [
    { x: 20, y: 10, w: 70, h: 40, label: 'Construct' },
    { x: 110, y: 10, w: 70, h: 40, label: 'Execute' },
    { x: 20, y: 65, w: 70, h: 40, label: 'Monitor' },
    { x: 110, y: 65, w: 70, h: 40, label: 'Oversee' },
  ];
  return (
    <svg viewBox="0 0 200 120" aria-hidden="true" className="w-full max-w-[220px] mx-auto">
      {panels.map((p, i) => (
        <g key={i}>
          <rect
            x={p.x}
            y={p.y}
            width={p.w}
            height={p.h}
            rx={6}
            fill="none"
            stroke="#1DBFBF"
            strokeWidth="1.5"
            strokeOpacity={reduced ? 0.5 : 0.4}
          >
            {!reduced && (
              <animate
                attributeName="stroke-opacity"
                values="0.3;0.7;0.3"
                dur={`${2 + i * 0.4}s`}
                repeatCount="indefinite"
                begin={`${i * 0.3}s`}
              />
            )}
          </rect>
          <text
            x={p.x + p.w / 2}
            y={p.y + p.h / 2 + 4}
            textAnchor="middle"
            fontSize="9"
            fill="#0D3D4D"
            fontFamily="sans-serif"
            opacity="0.7"
          >
            {p.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function AqtfMotif({ reduced }: { reduced: boolean }) {
  const points = [10, 40, 55, 30, 75, 50, 105, 25, 135, 45, 165, 20, 190, 35];
  const pathD = `M ${points[0]},${points[1]} ` +
    points.slice(2).reduce((acc, v, i) => i % 2 === 0 ? acc + ` L ${v},` : acc + `${v}`, '');

  return (
    <svg viewBox="0 0 200 80" aria-hidden="true" className="w-full max-w-[220px] mx-auto">
      {/* Shaded area under line */}
      <path
        d={`${pathD} L 190,80 L 10,80 Z`}
        fill="#1DBFBF"
        fillOpacity="0.1"
      />
      {/* Main line */}
      <path
        d={pathD}
        fill="none"
        stroke="#1DBFBF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {!reduced && (
          <animate
            attributeName="stroke-dashoffset"
            values="400;0"
            dur="1.5s"
            fill="freeze"
          />
        )}
      </path>
      {/* Target level */}
      <line x1="10" y1="15" x2="190" y2="15" stroke="#8B3FBF" strokeWidth="1" strokeDasharray="4 3" strokeOpacity="0.4" />
      <text x="195" y="18" fontSize="7" fill="#8B3FBF" fontFamily="sans-serif" opacity="0.6">$250M</text>
    </svg>
  );
}

/* ── Component ───────────────────────────────────────────────────────────── */

export const ThreePillars = () => {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion() ?? false;
  const pillar = pillars[active];
  const { Motif } = pillar;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-3">
            One engine. One platform. One fund.
          </h2>
          <p className="text-neutral-500 text-lg">Each one makes the other two stronger.</p>
        </motion.div>

        {/* Segmented control */}
        <div
          className="flex justify-center mb-8"
          role="tablist"
          aria-label="Product pillars"
        >
          <div className="flex gap-2 p-1 bg-neutral-100 rounded-xl">
            {pillars.map((p, i) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={active === i}
                aria-controls={`pillar-panel-${p.id}`}
                id={`pillar-tab-${p.id}`}
                onClick={() => setActive(i)}
                className={`px-7 py-2.5 rounded-lg font-semibold text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vibrant-teal ${
                  active === i
                    ? 'bg-vibrant-teal text-white shadow'
                    : 'text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content stage */}
        <div
          id={`pillar-panel-${pillar.id}`}
          role="tabpanel"
          aria-labelledby={`pillar-tab-${pillar.id}`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={pillar.id}
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 1 } : { opacity: 0, y: -8 }}
              transition={{ duration: reduced ? 0 : 0.25 }}
              className="max-w-xl mx-auto text-center"
            >
              <div className="mb-6">
                <Motif reduced={reduced} />
              </div>
              <h3 className="text-2xl font-bold text-deep-navy mb-3">{pillar.title}</h3>
              <p className="text-neutral-600 text-lg leading-relaxed mb-6">{pillar.copy}</p>
              <Link href={pillar.href}>
                <Button
                  size="lg"
                  className="bg-vibrant-teal hover:bg-vibrant-teal/90 text-white font-semibold"
                >
                  {pillar.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
