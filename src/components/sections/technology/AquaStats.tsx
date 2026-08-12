'use client';

import { SectionReveal } from '@/components/core/SectionReveal';
import { Card, CardContent } from '@/components/ui/card';

/**
 * Stat tiles — split out of the old AquaFinancialComputing. Numbers are within
 * the 02 guardrails (5–15×, 1.3–1.9×, one part in a billion), shown statically:
 * no count-up, which would render intermediate off-list numbers. The third
 * tile's border and figure were purple; per §2.2 they are now deep-navy.
 */
export const AquaStats = () => {

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionReveal className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-heading-1 text-deep-navy mb-4">
            A computation engine for the math at the core of modern finance.
          </h2>
          <p className="text-body-l text-neutral-600 prose-measure mx-auto">
            Portfolio construction means solving large, heavily constrained optimization problems
            quickly and correctly. Aqua is built for exactly that. On Zeton&apos;s 10-year
            production backtest, over half a million solver calls, these are the results.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Tile 1 */}
          <SectionReveal delay={0.1} >
            <Card className="border-2 border-vibrant-teal/20 text-center h-full">
              <CardContent className="pt-8 pb-6">
                <p className="text-5xl font-extrabold text-vibrant-teal mb-1">5&ndash;15&times;</p>
                <p className="text-sm font-semibold text-deep-navy mt-2">faster</p>
                <p className="text-xs text-neutral-500 mt-1 leading-snug">
                  vs our own pre-Aqua implementation, on our own backtest, not a third-party system.
                  Upper end depends on available cores.
                </p>
              </CardContent>
            </Card>
          </SectionReveal>

          {/* Tile 2 */}
          <SectionReveal delay={0.2} >
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
          </SectionReveal>

          {/* Tile 3 — was purple, now deep-navy (§2.2) */}
          <SectionReveal delay={0.3} >
            <Card className="border-2 border-deep-navy/20 text-center h-full">
              <CardContent className="pt-8 pb-6">
                <p className="text-3xl font-extrabold text-deep-navy mb-1">1 in 1,000,000,000</p>
                <p className="text-sm font-semibold text-deep-navy mt-2">correctness parity</p>
                <p className="text-xs text-neutral-500 mt-1 leading-snug">
                  across 36 of 36 configurations, zero regressions
                </p>
              </CardContent>
            </Card>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};
