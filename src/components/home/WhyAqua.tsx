import { Section, Eyebrow, Heading, Lead, SourceNote, ButtonLink } from '@/components/site/primitives';
import { SectionReveal } from '@/components/core/SectionReveal';

/**
 * Why we can: Aqua. Figures from the claims register (company/07 §3–§4), each
 * with its condition. 5.78× is the per-account workload (many clients, one
 * date) and must never sit beside the backtest figures without saying they
 * are different workloads; this section shows only the per-account ones.
 */
const figures = [
  {
    figure: '5.78×',
    label: 'more client accounts served per machine',
    note: 'Per-account workload: 1,000 client accounts at full machine load, on three cloud machine types, against the same workload without Aqua.',
  },
  {
    figure: '95%',
    label: 'of the work reused across similar portfolios',
    note: 'Across 1,000 accounts the solver met just 49 distinct problem shapes, and reused 95.1% of its setup.',
  },
  {
    figure: 'Identical',
    label: 'results, to the last digit a computer stores',
    note: 'Agreement with the reference within 2.4 × 10⁻¹⁶. Aqua changes how fast the answer arrives, never the answer.',
  },
];

export function WhyAqua() {
  return (
    <Section tone="dark">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <SectionReveal>
          <Eyebrow dark>Why we can</Eyebrow>
          <Heading className="text-cream">Why the 1,000th account costs almost nothing.</Heading>
        </SectionReveal>
        <SectionReveal delay={0.05}>
          <Lead dark>
            Zeton is what firms use. Aqua, the engine beneath it, is what lets us serve every client
            individually and still run like software. It reads the machine it runs on and reuses work
            across the many similar portfolios a firm runs every day.
          </Lead>
        </SectionReveal>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-xl bg-white/10 md:grid-cols-3">
        {figures.map((f, i) => (
          <SectionReveal key={f.figure} delay={i * 0.08} className="bg-midnight-card p-8 md:p-10">
            <p className="font-display text-figure tabular text-cream">
              {f.figure === '5.78×' ? <span className="text-gold">{f.figure}</span> : f.figure}
            </p>
            <p className="mt-4 text-heading-3 text-cream">{f.label}</p>
            <p className="mt-4 text-caption text-cream-muted">{f.note}</p>
          </SectionReveal>
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-8 border-t border-white/10 pt-10 md:flex-row md:items-end md:justify-between">
        <p className="font-display text-heading-1 text-cream">
          Zeton runs on Aqua.
          <br />
          <span className="text-teal-bright">Aqua runs on what you already own.</span>
        </p>
        <ButtonLink href="/technology" variant="outline" dark arrow>
          How Aqua works
        </ButtonLink>
      </div>

      <SourceNote dark className="mt-8">
        Figures measure computation (time, cost and numerical accuracy), not investment returns. The
        gain applies where Zeton’s optimizer runs the solve.
      </SourceNote>
    </Section>
  );
}
