import { SectionReveal } from '@/components/core/SectionReveal';

export const AquaApplication = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionReveal className="max-w-3xl mx-auto">
          <p className="text-eyebrow uppercase text-vibrant-teal mb-3 text-center">
            Current application · convex optimization
          </p>
          <h2 className="text-heading-1 text-deep-navy mb-8 text-center">
            Proven where the math is hardest.
          </h2>

          <p className="text-body-l text-neutral-600 mb-5 prose-measure mx-auto">
            Portfolio construction is a constrained optimization problem, solved over and over. A
            ten-year weekly walk-forward backtest makes more than half a million solver calls in a
            single run.
          </p>

          {/* Load-bearing concession (02): must not be cut. */}
          <p className="text-body-l text-neutral-700 mb-5 prose-measure mx-auto">
            <span className="font-semibold text-deep-navy">Aqua does not change that math.</span> It
            proposes no new formulation and no different risk model. It takes the solvers and
            estimators already trusted for the job and runs them substantially faster on the hardware
            in front of you.
          </p>

          <p className="text-body-l text-neutral-600 mb-8 prose-measure mx-auto">
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
