'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedCounter } from '@/components/core/AnimatedCounter';

/**
 * Stat tiles — split out of the old AquaFinancialComputing. Numbers are within
 * the 02 guardrails (5–15×, 1.3–1.9×, one part in a billion). The third tile's
 * border and figure were purple; per §2.2 they are now deep-navy.
 */
export const AquaStats = () => {
  const reduced = useReducedMotion() ?? false;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-heading-1 text-deep-navy mb-4">
            A computation engine for the math at the core of modern finance.
          </h2>
          <p className="text-body-l text-neutral-600 prose-measure mx-auto">
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
                  {!reduced ? (
                    <AnimatedCounter
                      from={5}
                      to={15}
                      suffix="x"
                      className="text-5xl font-extrabold text-vibrant-teal"
                    />
                  ) : (
                    '15x'
                  )}
                </p>
                <p className="text-sm font-semibold text-deep-navy mt-2">faster</p>
                <p className="text-xs text-neutral-500 mt-1 leading-snug">
                  vs our own pre-Aqua implementation, on our own backtest, not a third-party system.
                  Upper end depends on available cores.
                </p>
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
                  1.3x <span className="text-2xl font-bold">to 1.9x</span>
                </p>
                <p className="text-sm font-semibold text-deep-navy mt-2">across general workloads</p>
                <p className="text-xs text-neutral-500 mt-1 leading-snug">
                  across 209 tests on five hardware configurations
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tile 3 — was purple, now deep-navy (§2.2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border-2 border-deep-navy/20 text-center h-full">
              <CardContent className="pt-8 pb-6">
                <p className="text-3xl font-extrabold text-deep-navy mb-1">1 in 1,000,000,000</p>
                <p className="text-sm font-semibold text-deep-navy mt-2">correctness parity</p>
                <p className="text-xs text-neutral-500 mt-1 leading-snug">
                  across 36 of 36 configurations, zero regressions
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
