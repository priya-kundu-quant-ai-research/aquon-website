import { Lock, ArrowRight, Cpu } from 'lucide-react';
import { SectionReveal } from '@/components/core/SectionReveal';

/**
 * "Proven where the math is hardest." The concession "Aqua does not change that
 * math" is load-bearing and rendered in full. The before/after is structural,
 * not a performance chart: the mathematics is unchanged on the left, the
 * execution path is changed on the right. The 5–15× number keeps its qualifier.
 */
export const AquaApplication = () => {
  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        <SectionReveal className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-eyebrow uppercase text-vibrant-teal mb-3">
            Current application · convex optimization
          </p>
          <h2 className="text-heading-1 text-deep-navy mb-5">Proven where the math is hardest.</h2>
          <p className="text-body-l text-neutral-600 mx-auto prose-measure">
            Portfolio construction is a constrained optimization problem, solved over and over. A
            ten-year weekly walk-forward backtest makes more than half a million solver calls in a
            single run.
          </p>
        </SectionReveal>

        {/* Structural before/after: same math, different execution */}
        <SectionReveal className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-2 items-stretch">
            {/* The math: unchanged */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <div className="mb-4 flex items-center gap-2">
                <Lock className="h-4 w-4 text-neutral-500" aria-hidden="true" />
                <span className="text-eyebrow uppercase text-neutral-500">The mathematics · unchanged</span>
              </div>
              <ul className="space-y-2.5">
                {['Same formulation', 'Same solvers and estimators', 'Same risk model'].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-body text-deep-navy">
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center">
              <ArrowRight className="h-6 w-6 text-vibrant-teal rotate-90 md:rotate-0" aria-hidden="true" />
            </div>

            {/* The execution: changed */}
            <div className="rounded-2xl border-2 border-vibrant-teal bg-vibrant-teal/5 p-6">
              <div className="mb-4 flex items-center gap-2">
                <Cpu className="h-4 w-4 text-vibrant-teal" aria-hidden="true" />
                <span className="text-eyebrow uppercase text-vibrant-teal">The execution · changed</span>
              </div>
              <p className="text-body text-deep-navy">
                The same solvers, routed to the path the machine in front of you runs fastest, and run
                substantially faster because of it.
              </p>
            </div>
          </div>
        </SectionReveal>

        {/* Load-bearing concession + the claim */}
        <SectionReveal delay={0.1} className="max-w-3xl mx-auto mt-10">
          <p className="text-body-l text-neutral-700 mb-5 prose-measure mx-auto">
            <span className="font-semibold text-deep-navy">Aqua does not change that math.</span> It
            proposes no new formulation and no different risk model. It takes the solvers and
            estimators already trusted for the job and runs them substantially faster on the hardware
            in front of you.
          </p>
          <p className="text-body-l text-neutral-600 mb-6 prose-measure mx-auto">
            On our own production backtest that is{' '}
            <span className="font-semibold text-deep-navy">5 to 15 times faster</span> than the
            implementation it replaced, measured across 36 configurations, with every financial
            metric matching the reference to within one part in a billion and zero correctness
            regressions.
          </p>
          <p className="text-caption text-neutral-500 italic prose-measure mx-auto">
            Measured against our own pre-Aqua implementation on our own backtest, not against a
            third-party system. The upper end of the range is dependent on available cores.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
};
