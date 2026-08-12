import { Clock, Hand, Eye } from 'lucide-react';
import { SectionReveal } from '@/components/core/SectionReveal';
import type { LucideIcon } from 'lucide-react';

interface Truth {
  icon: LucideIcon;
  lead: string;
  body: string;
}

// Copy verbatim from 02 · Technology · Novelty.
const truths: Truth[] = [
  {
    icon: Clock,
    lead: 'It decides at runtime.',
    body: 'The machine is discovered when the program starts, not assumed when the code was written.',
  },
  {
    icon: Hand,
    lead: 'It asks nothing of the caller.',
    body: "No flags, no tuning, no hardware-specific branches in anyone's code.",
  },
  {
    icon: Eye,
    lead: 'It stays inspectable.',
    body: 'Every routing decision can be read back: which operation took which path, and why. In a regulated workflow, a faster answer you cannot explain is not an improvement.',
  },
];

export const AquaNovelty = () => {
  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        <SectionReveal className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-heading-1 text-deep-navy">Three things have to be true at once.</h2>
        </SectionReveal>

        {/* Three-item layout, not cards: a divided editorial row. */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {truths.map((t, i) => {
            const Icon = t.icon;
            return (
              <SectionReveal
                key={t.lead}
                delay={i * 0.1}
                className="md:px-6 md:border-l md:first:border-l-0 border-neutral-300/70"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-vibrant-teal/10">
                  <Icon className="h-5 w-5 text-vibrant-teal" strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3 className="text-heading-3 text-deep-navy mb-2">{t.lead}</h3>
                <p className="text-body text-neutral-600">{t.body}</p>
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal delay={0.15} className="max-w-3xl mx-auto text-center mt-14">
          <p className="text-body-l text-neutral-600 mx-auto prose-measure">
            Aqua also carries a declarative layer: you state what to optimize and the constraints it
            must respect, rather than how to compute it. That is the surface our patent application
            covers.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
};
