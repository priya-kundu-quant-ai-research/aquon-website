import { FileText, Landmark, Award, Handshake } from 'lucide-react';
import { SectionReveal } from '@/components/core/SectionReveal';
import type { LucideIcon } from 'lucide-react';

interface FormalItem {
  icon: LucideIcon;
  lead: string;
  body: string;
}

/**
 * Company "formal recognition": institutional credibility. Distinct from the
 * Home page's demonstrated-impact section (§3.2). Patent wording keeps the word
 * "application"; partnership wording is the approved copy, verbatim. Teal and
 * navy only, no dollar figures.
 */
const items: FormalItem[] = [
  {
    icon: FileText,
    lead: 'Patent filed.',
    body: "Aqua's core numerical methods are the subject of a patent application filed through NYU in June 2026, with our CTO among the named inventors.",
  },
  {
    icon: Landmark,
    lead: 'Built in the START-UP NY ecosystem.',
    body: "Operating out of NYU Future Labs with official START-UP NY status, providing state tax benefits and direct access to New York City's premier research community.",
  },
  {
    icon: Award,
    lead: 'Selected by four competitive programs.',
    body: 'NSF I-Corps, the NYU TAC Award 2026, NYU Summer Launchpad, and NYU Tech Venture.',
  },
  {
    icon: Handshake,
    lead: 'Partnerships.',
    body: 'Active deployment discussions underway with an international brokerage platform exploring white-label integration, alongside an established ETF sponsor serving as an early design partner. Names available under NDA.',
  },
];

export const Recognition = () => {
  return (
    <section id="recognition" className="scroll-mt-24 py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionReveal className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-heading-1 text-deep-navy">Recognition</h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <SectionReveal
                key={item.lead}
                delay={(i % 2) * 0.08}
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
      </div>
    </section>
  );
};
