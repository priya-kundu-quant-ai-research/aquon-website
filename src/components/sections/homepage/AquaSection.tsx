'use client';

import { useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { SectionReveal } from '@/components/core/SectionReveal';

/* AquaMotif — harvested from the retired ThreePillars. The Aqua particle field:
   a drifting lattice of teal points settling onto a smooth curve. */
function AquaMotif({ reduced }: { reduced: boolean }) {
  return (
    <svg viewBox="0 0 200 120" aria-hidden="true" className="w-full">
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

export const AquaSection = () => {
  const reduced = useReducedMotion() ?? false;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: motif */}
          <SectionReveal className="flex items-center justify-center order-last md:order-first">
            <div className="w-full max-w-md rounded-2xl bg-deep-navy/[0.03] border border-vibrant-teal/15 p-8">
              <AquaMotif reduced={reduced} />
            </div>
          </SectionReveal>

          {/* Right: copy */}
          <SectionReveal delay={0.1} className="flex flex-col">
            <p className="text-eyebrow uppercase text-vibrant-teal mb-3">The engine</p>
            <h2 className="text-heading-1 text-deep-navy mb-5">Aqua: the engine.</h2>
            <p className="text-body-l text-neutral-600 mb-4 prose-measure">
              Most numerical software is written once and runs the same way everywhere — on a
              laptop, a cloud instance, a workstation — which means it is tuned for a machine nobody
              is actually using.
            </p>
            <p className="text-body-l text-neutral-600 mb-8 prose-measure">
              Aqua reads the hardware it lands on and routes every operation to the strategy that
              machine can execute fastest. No configuration, no rewrite, no tuning by the caller.
            </p>
            <div>
              <Button
                asChild
                size="lg"
                className="bg-vibrant-teal hover:bg-vibrant-teal/90 text-white font-semibold"
              >
                <Link href="/technology">
                  How Aqua works
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};
