import { Section, Eyebrow, Heading, Lead, SourceNote, InDevelopment } from '@/components/site/primitives';
import { SectionReveal } from '@/components/core/SectionReveal';

/**
 * The gap, in Cerulli's words. The "implementation status" lines are quoted
 * EXACTLY from Exhibits 6A–6B (one typo, "propritary", silently corrected).
 * Note the first row is asset LOCATION, not allocation: some decks misname it.
 * Tax-aware items are roadmap and carry the In development label (Priya,
 * 2026-10-08). The research was sponsored by Parametric; we cite it, we do not
 * imply its endorsement.
 */
const rows = [
  {
    process: 'Asset location optimization',
    found: 'Limited deployment with many platforms defaulting to a single account management structure due to complexity or supervision concerns.',
    answer: 'A portfolio can hold a whole household, with every member’s rules checked together.',
    roadmap: 'Tax-aware asset location across a household’s accounts.',
  },
  {
    process: 'Multi-account rebalancing',
    found: 'Very limited automation deployment; engineering frequently exceeds proprietary capabilities.',
    answer: 'Every account is optimized under its own constraints at each rebalance. The system proposes; a person releases it.',
  },
  {
    process: 'Tax budgeting',
    found: 'Rare instances of automated multi-year budgeting processes in place; firms are commonly struggling with implementation.',
    answer: null,
    roadmap: 'Lot-level harvesting and multi-year transitions, sequenced against a stated tax budget.',
  },
];

export function CerulliGap() {
  return (
    <Section tone="band">
      {/* Headline left, the finding beside it in a card (as The answer sets its lead), so the section reads in one view */}
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionReveal>
          <Eyebrow>The gap</Eyebrow>
          <Heading>The industry’s own research names the gap.</Heading>
        </SectionReveal>
        <SectionReveal delay={0.05}>
          <div className="rounded-xl border border-navy/10 bg-white/70 p-7 md:p-8">
            <Lead>
              Cerulli benchmarked nine process solutions for customized portfolios, drawing on interviews
              with 26 industry executives. Three show the thinnest deployment. Each is, underneath, an
              optimization run for every household or every account.
            </Lead>
            <p className="mt-4 text-body-l font-semibold text-navy">That is exactly what Zeton is built to do.</p>
          </div>
        </SectionReveal>
      </div>

      <SectionReveal delay={0.1} className="mt-12">
        {/* Column headings (desktop) */}
        <div className="hidden grid-cols-[1fr_1.4fr_1.4fr] gap-10 border-b border-navy/20 pb-3 text-eyebrow uppercase text-gray-text md:grid">
          <span>Process</span>
          <span>What Cerulli found</span>
          <span>How Zeton answers</span>
        </div>

        <div className="divide-y divide-navy/10">
          {rows.map((r) => (
            <div key={r.process} className="grid gap-4 py-8 md:grid-cols-[1fr_1.4fr_1.4fr] md:gap-10">
              <h3 className="font-display text-heading-2 text-navy">{r.process}</h3>

              <blockquote className="relative pl-5 text-body text-navy/80">
                <span aria-hidden="true" className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full bg-gold-deep/70" />
                <span className="mb-1 block text-eyebrow uppercase text-gray-text md:hidden">What Cerulli found</span>
                “{r.found}”
              </blockquote>

              <div className="space-y-3 text-body text-navy">
                <span className="block text-eyebrow uppercase text-gray-text md:hidden">How Zeton answers</span>
                {r.answer && <p>{r.answer}</p>}
                {r.roadmap && (
                  <p className="text-navy/85">
                    <InDevelopment /> <span className="ml-1">{r.roadmap}</span>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <SourceNote className="mt-6 border-t border-navy/20 pt-4">
          Cerulli Associates, <em>Customized at Scale: A Framework for Next-Generation Advisory
          Platforms</em> (October 2025), Exhibits 6A–6B. The research was sponsored by Parametric.
          Implementation status quoted verbatim.
        </SourceNote>
      </SectionReveal>
    </Section>
  );
}
