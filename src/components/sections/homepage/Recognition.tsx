import Link from 'next/link';
import { Zap, CheckCircle2, Repeat, Cpu, LineChart } from 'lucide-react';
import { SectionReveal } from '@/components/core/SectionReveal';
import type { LucideIcon } from 'lucide-react';

interface ImpactItem {
  icon: LucideIcon;
  lead: string;
  body: string;
}

/**
 * Home "demonstrated impact": what Aqua and Zeton have actually been shown to
 * do. Every numeral is from the binding claims list, and the 5–15× qualifier
 * travels with the number. Formal recognition (patent, programs, partnerships)
 * lives on the Company page instead; a one-line credential rail below links to
 * it so the Home page keeps the credibility signal without duplicating it.
 * No dollar figures anywhere.
 */
const items: ImpactItem[] = [
  {
    icon: Zap,
    lead: '5–15× faster',
    body: 'Against our own pre-Aqua implementation, on our own backtest, not a third-party system. The upper end depends on available cores.',
  },
  {
    icon: CheckCircle2,
    lead: 'Correct to one part in a billion',
    body: 'Every financial metric matched the reference across 36 of 36 configurations, with zero regressions.',
  },
  {
    icon: Repeat,
    lead: '546,000 solver calls',
    body: 'Made in a single ten-year backtest run.',
  },
  {
    icon: Cpu,
    lead: 'Validated on ARM and x86',
    body: 'Apple Silicon and AMD Zen2, across 441 automated tests.',
  },
  {
    icon: LineChart,
    lead: 'Our own capital, on our own platform',
    body: 'AQTF, our systematic strategy, runs live on Interactive Brokers through Zeton.',
  },
];

export const Recognition = () => {
  return (
    <section id="recognition" className="scroll-mt-24 py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionReveal className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-eyebrow uppercase text-vibrant-teal mb-3">Demonstrated impact</p>
          <h2 className="text-heading-1 text-deep-navy">Earned, not asserted.</h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <SectionReveal
                key={item.lead}
                delay={(i % 3) * 0.08}
                className="h-full rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-vibrant-teal/10">
                  <Icon className="h-5 w-5 text-vibrant-teal" strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3 className="text-heading-3 text-deep-navy mb-2">{item.lead}</h3>
                <p className="text-body text-neutral-600">{item.body}</p>
              </SectionReveal>
            );
          })}
        </div>

        {/* Credential rail: keeps the formal-recognition signal without duplicating
            the Company section. One quiet line, no cards. */}
        <SectionReveal delay={0.1} className="mt-10 text-center">
          <Link
            href="/company#recognition"
            className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-caption text-neutral-500 hover:text-deep-navy transition-colors"
          >
            <span>Patent filed</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span>NYU research spin-off</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span>START-UP NY</span>
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
};
