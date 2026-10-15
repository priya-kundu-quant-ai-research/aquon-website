import { Section, Eyebrow, Heading, Lead, SourceNote } from '@/components/site/primitives';
import { SectionReveal } from '@/components/core/SectionReveal';

/**
 * The demand, in the industry's own numbers. Every figure is from Cerulli,
 * "Customized at Scale" (Oct 2025), quoting its Affluent Investor Tracker and
 * Advisor Research. Do not add a figure that is not in that report.
 */
const stats = [
  { figure: '78%', text: 'of affluent investors say it is important that their accounts are customized to their specific situation.' },
  { figure: '69%', text: 'say it is important that their provider helps them reduce their tax bill.' },
  { figure: '47%', text: 'of financial advisors already offer tax planning, and see it as a differentiator.' },
];

export function Demand() {
  return (
    <Section tone="light">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <SectionReveal>
          <Eyebrow>The demand</Eyebrow>
          <Heading>Every client wants a portfolio built for them.</Heading>
          <Lead className="mt-6">
            Investors now expect the personalization they get everywhere else, and advisors
            increasingly win clients on it, especially on taxes. Customization has stopped being a
            perk for the largest accounts. It is becoming the baseline.
          </Lead>
        </SectionReveal>

        <div>
          <dl className="divide-y divide-hairline border-y border-hairline">
            {stats.map((s, i) => (
              <SectionReveal key={s.figure} delay={i * 0.08}>
                <div className="grid grid-cols-[7.5rem_1fr] items-baseline gap-6 py-7 md:grid-cols-[9.5rem_1fr]">
                  <dt className="font-display text-figure tabular text-teal-text">{s.figure}</dt>
                  <dd className="text-body-l text-navy">{s.text}</dd>
                </div>
              </SectionReveal>
            ))}
          </dl>
          <SourceNote className="mt-4">
            Cerulli Associates, <em>Customized at Scale: A Framework for Next-Generation Advisory
            Platforms</em> (October 2025), drawing on the Cerulli Affluent Investor Tracker and
            Cerulli advisor research.
          </SourceNote>
        </div>
      </div>
    </Section>
  );
}
