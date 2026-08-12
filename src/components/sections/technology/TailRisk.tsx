import { SHOW_TAIL_RISK } from '@/lib/flags';
import { SectionReveal } from '@/components/core/SectionReveal';

/**
 * Tail-risk section — built, shipped hidden. SHOW_TAIL_RISK is false, so this
 * renders nothing. Flipping the flag reveals the finished container below.
 *
 * ⚠️ NO CLAIMS LIVE HERE. The copy for this section is written against the
 * measured results when they exist — not before. The visible content
 * is deliberately skeleton scaffolding, not prose: nothing here asserts a
 * capability, a number, or a formulation. Going live is: replace the skeletons
 * with the approved copy and the real chart, then flip the flag. See 02 §
 * "Hidden section · tail-risk" and the claim guardrails.
 */
export const TailRisk = () => {
  if (!SHOW_TAIL_RISK) return null;

  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        <SectionReveal className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Copy column — skeleton until measured results exist */}
            <div>
              {/* PLACEHOLDER: eyebrow */}
              <div className="h-3 w-40 rounded bg-neutral-300/70 mb-5" aria-hidden="true" />
              {/* PLACEHOLDER: heading (two lines) */}
              <div className="space-y-3 mb-6" aria-hidden="true">
                <div className="h-8 w-full rounded bg-neutral-300/70" />
                <div className="h-8 w-3/4 rounded bg-neutral-300/70" />
              </div>
              {/* PLACEHOLDER: body copy */}
              <div className="space-y-2.5" aria-hidden="true">
                <div className="h-4 w-full rounded bg-neutral-200" />
                <div className="h-4 w-full rounded bg-neutral-200" />
                <div className="h-4 w-5/6 rounded bg-neutral-200" />
              </div>
            </div>

            {/* Visual column — chart frame, no data */}
            <div
              className="aspect-[4/3] rounded-2xl border border-neutral-200 bg-white"
              aria-hidden="true"
            />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
