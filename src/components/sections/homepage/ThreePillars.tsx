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
      className="w-full"
    >
      {[0, 1, 2, 3].map((row) => (
        <g key={row} opacity={0.6 - row * 0.1}>
          {[0, 1, 2, 3, 4, 5, 6].map((col) => {
            const cx = col * 30 + 10;
            const cy = 20 + row * 25 + Math.sin((col + row) * 0.8) * 8;
            return (
              <circle key={col} cx={cx} cy={cy} r={3} fill="#1DBFBF" opacity={0.7}>
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
  // Layout (viewBox 0 0 200 188):
  //   Construct at top centre
  //   Curved arrow down into Execute (left)
  //   Execute → Monitor → Optimize → Execute  (clockwise triangle loop)

  const construct = { x: 60, y: 5, w: 80, h: 30, cx: 100, cy: 20 };
  const execute   = { x: 5,  y: 78, w: 75, h: 30, cx: 42,  cy: 93 };
  const monitor   = { x: 120, y: 78, w: 75, h: 30, cx: 157, cy: 93 };
  const optimize  = { x: 60, y: 148, w: 80, h: 30, cx: 100, cy: 163 };

  const boxes = [
    { ...construct, label: 'Construct', delay: 0 },
    { ...execute,   label: 'Execute',   delay: 0.3 },
    { ...monitor,   label: 'Monitor',   delay: 0.6 },
    { ...optimize,  label: 'Optimize',  delay: 0.9 },
  ];

  return (
    <svg viewBox="0 0 200 188" aria-hidden="true" className="w-full">
      <defs>
        <marker id="zeton-arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#1DBFBF" opacity="0.7" />
        </marker>
      </defs>

      {/* Boxes */}
      {boxes.map((b) => (
        <g key={b.label}>
          <rect
            x={b.x} y={b.y} width={b.w} height={b.h} rx={6}
            fill={b.label === 'Construct' ? '#1DBFBF' : 'none'}
            fillOpacity={b.label === 'Construct' ? 0.12 : 0}
            stroke="#1DBFBF"
            strokeWidth="1.5"
            strokeOpacity={reduced ? 0.6 : 0.5}
          >
            {!reduced && (
              <animate
                attributeName="stroke-opacity"
                values="0.3;0.8;0.3"
                dur={`${2 + b.delay}s`}
                repeatCount="indefinite"
                begin={`${b.delay}s`}
              />
            )}
          </rect>
          <text
            x={b.cx} y={b.cy + 4}
            textAnchor="middle" fontSize="9" fontWeight={b.label === 'Construct' ? 'bold' : 'normal'}
            fill="#0D3D4D" fontFamily="sans-serif" opacity="0.8"
          >
            {b.label}
          </text>
        </g>
      ))}

      {/* Construct → Execute (curved arrow) */}
      <path
        d={`M ${construct.cx},${construct.y + construct.h} C ${construct.cx},55 ${execute.cx},55 ${execute.cx},${execute.y}`}
        fill="none" stroke="#1DBFBF" strokeWidth="1.2" strokeOpacity="0.5"
        markerEnd="url(#zeton-arr)"
      />

      {/* Execute → Monitor (horizontal) */}
      <line
        x1={execute.x + execute.w} y1={execute.cy}
        x2={monitor.x} y2={monitor.cy}
        stroke="#1DBFBF" strokeWidth="1.2" strokeOpacity="0.5"
        markerEnd="url(#zeton-arr)"
      />

      {/* Monitor → Optimize (curved down-left) */}
      <path
        d={`M ${monitor.cx},${monitor.y + monitor.h} C ${monitor.cx},130 ${optimize.x + optimize.w},130 ${optimize.x + optimize.w},${optimize.y}`}
        fill="none" stroke="#1DBFBF" strokeWidth="1.2" strokeOpacity="0.5"
        markerEnd="url(#zeton-arr)"
      />

      {/* Optimize → Execute (curved up-left, closing the loop) */}
      <path
        d={`M ${optimize.x},${optimize.cy} C ${execute.cx},${optimize.cy} ${execute.cx},130 ${execute.cx},${execute.y + execute.h}`}
        fill="none" stroke="#1DBFBF" strokeWidth="1.2" strokeOpacity="0.5"
        markerEnd="url(#zeton-arr)"
      />
    </svg>
  );
}

function AqtfMotif({ reduced }: { reduced: boolean }) {
  const points = [10, 40, 55, 30, 75, 50, 105, 25, 135, 45, 165, 20, 190, 35];
  const pathD =
    `M ${points[0]},${points[1]} ` +
    points.slice(2).reduce((acc, v, i) => (i % 2 === 0 ? acc + ` L ${v},` : acc + `${v}`), '');

  return (
    <svg viewBox="0 0 200 80" aria-hidden="true" className="w-full">
      <path d={`${pathD} L 190,80 L 10,80 Z`} fill="#1DBFBF" fillOpacity="0.1" />
      <path
        d={pathD}
        fill="none"
        stroke="#1DBFBF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {!reduced && (
          <animate attributeName="stroke-dashoffset" values="400;0" dur="1.5s" fill="freeze" />
        )}
      </path>
      <line x1="10" y1="15" x2="190" y2="15" stroke="#8B3FBF" strokeWidth="1" strokeDasharray="4 3" strokeOpacity="0.4" />
      <text x="192" y="18" fontSize="7" fill="#8B3FBF" fontFamily="sans-serif" opacity="0.6">$250M</text>
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
        {/* Section header */}
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
        <div className="flex justify-center mb-10" role="tablist" aria-label="Product pillars">
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

        {/* Content stage: graphic left, copy right */}
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
              className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              {/* Left: motif */}
              <div className="flex items-center justify-center">
                <Motif reduced={reduced} />
              </div>

              {/* Right: title, copy, CTA */}
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-deep-navy mb-3">{pillar.title}</h3>
                <p className="text-neutral-600 text-lg leading-relaxed mb-6">{pillar.copy}</p>
                <div>
                  <Link href={pillar.href}>
                    <Button
                      size="lg"
                      className="bg-vibrant-teal hover:bg-vibrant-teal/90 text-white font-semibold"
                    >
                      {pillar.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
