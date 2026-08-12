import { FileText, Landmark, Award, CheckCircle2, TrendingUp, Handshake } from 'lucide-react';
import { SectionReveal } from '@/components/core/SectionReveal';
import type { LucideIcon } from 'lucide-react';

export interface RecognitionItem {
  icon: LucideIcon;
  lead: string;
  body: string;
}

// Copy verbatim from 02 · Section 4 · Recognition. Programs are named, never
// priced — no dollar figures anywhere in this section. Shared with the Company
// page, which per 02 shows "the same content as the homepage Recognition".
export const recognitionItems: RecognitionItem[] = [
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
    icon: CheckCircle2,
    lead: 'Correctness before speed.',
    body: 'Across 36 production configurations, every financial metric matched the reference result to within one part in a billion, with zero correctness regressions.',
  },
  {
    icon: TrendingUp,
    lead: 'Our own capital, on our own platform.',
    body: 'AQTF, our systematic strategy, runs live on Interactive Brokers through Zeton. Our ideal customer sits in the founding team, so the platform is tested hardest by the person it was built for.',
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
          <p className="text-eyebrow uppercase text-vibrant-teal mb-3">Recognition</p>
          <h2 className="text-heading-1 text-deep-navy">Earned, not asserted.</h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {recognitionItems.map((item, i) => {
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
      </div>
    </section>
  );
};
