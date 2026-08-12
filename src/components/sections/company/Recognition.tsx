import { SectionReveal } from '@/components/core/SectionReveal';
import { recognitionItems } from '@/components/sections/homepage/Recognition';

/**
 * Company Recognition — 02 specifies "the same content as the homepage
 * Recognition section." Reuses the shared six items (no dollar figures). The
 * old four award cards, the `amount` field, the yellow/pink/cyan gradient
 * circles and the malformed `p-` / `bg-gradient-to-br white` classes are gone;
 * treatment is teal and navy only. Heading is "Recognition" (§4.4).
 */
export const Recognition = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionReveal className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-heading-1 text-deep-navy">Recognition</h2>
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
