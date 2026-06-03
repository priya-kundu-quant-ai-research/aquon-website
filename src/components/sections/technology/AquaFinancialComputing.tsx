'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedCounter } from '@/components/core/AnimatedCounter';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

/* ── Hardware-profile bar chart ────────────────────────────────────────────── */
type Profile = {
  label: string;
  bars: { name: string; pct: number }[];
  note: string;
};

const profiles: Record<string, Profile> = {
  cloud: {
    label: 'Cloud server',
    bars: [
      { name: 'Cores used', pct: 45 },
      { name: 'Cache fit', pct: 60 },
      { name: 'Throughput', pct: 55 },
    ],
    note: 'Aqua detects constrained resources and selects a conservative parallel strategy.',
  },
  workstation: {
    label: 'Workstation',
    bars: [
      { name: 'Cores used', pct: 85 },
      { name: 'Cache fit', pct: 90 },
      { name: 'Throughput', pct: 95 },
    ],
    note: 'Aqua detects high-core availability and scales aggressively, with no config needed.',
  },
};

function HardwareProfileChart({ profileKey }: { profileKey: string }) {
  const profile = profiles[profileKey];
  return (
    <div className="mt-4 space-y-3">
      {profile.bars.map((bar) => (
        <div key={bar.name}>
          <div className="flex justify-between text-xs text-neutral-600 mb-1">
            <span>{bar.name}</span>
            <span>{bar.pct}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-neutral-200 overflow-hidden">
            <motion.div
              key={`${profileKey}-${bar.name}`}
              initial={{ width: 0 }}
              animate={{ width: `${bar.pct}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="h-full bg-vibrant-teal rounded-full"
            />
          </div>
        </div>
      ))}
      <p className="text-xs text-neutral-500 italic mt-3">{profile.note}</p>
    </div>
  );
}

/* ── Main component ─────────────────────────────────────────────────────────── */

export const AquaFinancialComputing = () => {
  const [profileKey, setProfileKey] = useState<'cloud' | 'workstation'>('cloud');
  const reduced = useReducedMotion() ?? false;

  return (
    <>
      {/* Section 1: Stat tiles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              A computation engine for the math at the core of modern finance.
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Portfolio construction means solving large, heavily constrained optimization problems
              quickly and correctly. Aqua is built for exactly that. On Zeton&apos;s 10-year
              production backtest, over half a million solver calls, these are the results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Tile 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="border-2 border-vibrant-teal/20 text-center h-full">
                <CardContent className="pt-8 pb-6">
                  <p className="text-5xl font-extrabold text-vibrant-teal mb-1">
                    5x{!reduced && <span className="text-3xl font-bold"> to </span>}
                    {reduced ? ' to ' : ''}
                    {!reduced
                      ? <AnimatedCounter from={5} to={15} suffix="x" className="text-5xl font-extrabold text-vibrant-teal" />
                      : '15x'
                    }
                  </p>
                  <p className="text-sm font-semibold text-deep-navy mt-2">faster</p>
                  <p className="text-xs text-neutral-500 mt-1 leading-snug">on production portfolio-optimization backtests</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tile 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-2 border-deep-navy/10 text-center h-full">
                <CardContent className="pt-8 pb-6">
                  <p className="text-5xl font-extrabold text-deep-navy mb-1">
                    1.3x{' '}
                    <span className="text-2xl font-bold">to 1.9x</span>
                  </p>
                  <p className="text-sm font-semibold text-deep-navy mt-2">across general workloads</p>
                  <p className="text-xs text-neutral-500 mt-1 leading-snug">consistent acceleration on broader numerical computing</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tile 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="border-2 border-rich-purple/20 text-center h-full">
                <CardContent className="pt-8 pb-6">
                  <p className="text-3xl font-extrabold text-rich-purple mb-1">
                    1 in 1,000,000,000
                  </p>
                  <p className="text-sm font-semibold text-deep-navy mt-2">correctness parity</p>
                  <p className="text-xs text-neutral-500 mt-1 leading-snug">results match reference to within one part in a billion, zero regressions</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Hardware adaptive toggle */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4 text-center">
              Built to run anywhere.
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed text-center mb-8">
              Aqua profiles the machine it runs on and adapts automatically, from a constrained
              cloud server to a high-core workstation, with no configuration from the caller.
            </p>

            {/* Toggle */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-6">
              <div
                className="flex justify-center gap-2 mb-6"
                role="group"
                aria-label="Select hardware profile"
              >
                {(['cloud', 'workstation'] as const).map((key) => (
                  <button
                    key={key}
                    onClick={() => setProfileKey(key)}
                    aria-pressed={profileKey === key}
                    className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vibrant-teal ${
                      profileKey === key
                        ? 'bg-vibrant-teal text-white shadow'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    {profiles[key].label}
                  </button>
                ))}
              </div>

              <HardwareProfileChart profileKey={profileKey} />

              <p className="text-[11px] text-center text-neutral-400 italic mt-4">
                Illustrative. Relative values, not benchmark data.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Trust moat */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6">
              Fast is not enough. It has to be trustworthy.
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Institutional trust increasingly depends on the integrity of the software supply
              chain beneath critical decisions. Aqua is a proprietary, audited, low-attack-surface
              numerical core, a controlled foundation for the numbers your capital depends on.
              We expect this dimension of Aqua&apos;s defensibility to grow in importance over the
              coming years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Where it runs + CTA */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6">
              Proven in the hardest place first.
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-3">
              Aqua powers Zeton. Zeton runs AQTF. The engine is validated by real capital in live
              markets every day.
            </p>
            <p className="text-neutral-500 text-base italic mb-8">
              Aqua can now generate hardware-specialized native code at runtime across different
              instruction sets: the same source, tuned to the silicon it lands on.
            </p>
            <Link href="/zeton#overview-video">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-white"
              >
                Explore the platform
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};
