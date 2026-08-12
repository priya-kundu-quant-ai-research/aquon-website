'use client';

import { useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { SectionReveal } from '@/components/core/SectionReveal';

/* ZetonMotif — harvested from the retired ThreePillars: the workflow loop
   (Construct → Execute → Monitor → Optimize). Recoloured to purple, because
   on the homepage this is the Zeton section, and purple is Zeton's. */
function ZetonMotif({ reduced }: { reduced: boolean }) {
  const PURPLE = '#8B3FBF';
  const construct = { x: 60, y: 5, w: 80, h: 30, cx: 100, cy: 20 };
  const execute = { x: 5, y: 78, w: 75, h: 30, cx: 42, cy: 93 };
  const monitor = { x: 120, y: 78, w: 75, h: 30, cx: 157, cy: 93 };
  const optimize = { x: 60, y: 148, w: 80, h: 30, cx: 100, cy: 163 };

  const boxes = [
    { ...construct, label: 'Construct', delay: 0 },
    { ...execute, label: 'Execute', delay: 0.3 },
    { ...monitor, label: 'Monitor', delay: 0.6 },
    { ...optimize, label: 'Optimize', delay: 0.9 },
  ];

  return (
    <svg viewBox="0 0 200 188" aria-hidden="true" className="w-full">
      <defs>
        <marker id="zeton-arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={PURPLE} opacity="0.7" />
        </marker>
      </defs>

      {boxes.map((b) => (
        <g key={b.label}>
          <rect
            x={b.x}
            y={b.y}
            width={b.w}
            height={b.h}
            rx={6}
            fill={b.label === 'Construct' ? PURPLE : 'none'}
            fillOpacity={b.label === 'Construct' ? 0.12 : 0}
            stroke={PURPLE}
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
            x={b.cx}
            y={b.cy + 4}
            textAnchor="middle"
            fontSize="9"
            fontWeight={b.label === 'Construct' ? 'bold' : 'normal'}
            fill="#0D3D4D"
            fontFamily="sans-serif"
            opacity="0.8"
          >
            {b.label}
          </text>
        </g>
      ))}

      <path
        d={`M ${construct.cx},${construct.y + construct.h} C ${construct.cx},55 ${execute.cx},55 ${execute.cx},${execute.y}`}
        fill="none"
        stroke={PURPLE}
        strokeWidth="1.2"
        strokeOpacity="0.5"
        markerEnd="url(#zeton-arr)"
      />
      <line
        x1={execute.x + execute.w}
        y1={execute.cy}
        x2={monitor.x}
        y2={monitor.cy}
        stroke={PURPLE}
        strokeWidth="1.2"
        strokeOpacity="0.5"
        markerEnd="url(#zeton-arr)"
      />
      <path
        d={`M ${monitor.cx},${monitor.y + monitor.h} C ${monitor.cx},130 ${optimize.x + optimize.w},130 ${optimize.x + optimize.w},${optimize.y}`}
        fill="none"
        stroke={PURPLE}
        strokeWidth="1.2"
        strokeOpacity="0.5"
        markerEnd="url(#zeton-arr)"
      />
      <path
        d={`M ${optimize.x},${optimize.cy} C ${execute.cx},${optimize.cy} ${execute.cx},130 ${execute.cx},${execute.y + execute.h}`}
        fill="none"
        stroke={PURPLE}
        strokeWidth="1.2"
        strokeOpacity="0.5"
        markerEnd="url(#zeton-arr)"
      />
    </svg>
  );
}

export const ZetonSection = () => {
  const reduced = useReducedMotion() ?? false;

  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: copy (mirrored vs the Aqua section) */}
          <SectionReveal className="flex flex-col">
            <p className="text-eyebrow uppercase text-rich-purple mb-3">The platform</p>
            <h2 className="text-heading-1 text-deep-navy mb-5">Zeton: the platform.</h2>
            <p className="text-body-l text-neutral-600 mb-4 prose-measure">
              Below the institutional tier, capable managers assemble spreadsheets, broker APIs and
              point tools to approximate what an Aladdin-class system does in one place.
            </p>
            <p className="text-body-l text-neutral-600 mb-8 prose-measure">
              Zeton is that system, built for them: portfolio construction and optimization,
              execution, market intelligence and oversight. One platform, broker-agnostic, with an
              audit trail under every decision.
            </p>
            <div>
              <Button
                asChild
                size="lg"
                className="bg-rich-purple hover:bg-rich-purple/90 text-white font-semibold"
              >
                <Link href="/zeton">
                  Explore Zeton
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </SectionReveal>

          {/* Right: motif */}
          <SectionReveal delay={0.1} className="flex items-center justify-center">
            <div className="w-full max-w-xs rounded-2xl bg-white border border-rich-purple/15 p-8">
              <ZetonMotif reduced={reduced} />
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};
