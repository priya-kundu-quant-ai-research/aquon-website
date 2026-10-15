import { cn } from '@/lib/utils';
import { SectionReveal } from '@/components/core/SectionReveal';

/**
 * Proof of progress: real, dated events only. Each one is documented in the
 * company base (licence, programme letters, patent filings). Shared by Home
 * and Company so the two can never disagree.
 */
export const milestones = [
  { when: 'Jun 2025', what: 'Patent application filed', detail: 'US provisional, filed through NYU. International (PCT) application followed in 2026.' },
  { when: 'Feb 2026', what: 'START-UP NY', detail: 'Approved to New York State’s START-UP NY program, sponsored by NYU.' },
  { when: 'Apr 2026', what: 'AQTF goes live', detail: 'Our own systematic strategy, and the genesis of Zeton’s requirements.' },
  { when: 'May 2026', what: 'NSF I-Corps', detail: 'Completed the National Science Foundation’s I-Corps program.' },
  { when: 'Aug 2026', what: 'Exclusive NYU licence', detail: 'Worldwide, in all fields, for the technology behind Aqua.' },
  { when: 'Sep 2026', what: 'Washington DC Soft Landing', detail: 'Accepted to the Washington DC Global Soft Landing Program, with a DC office.' },
  { when: 'Now', what: 'Zeton, redesigned', detail: 'The full portfolio lifecycle in one platform, ahead of client release.' },
] as const;

export function Milestones({ dark = false }: { dark?: boolean }) {
  return (
    <div className="relative">
      {/* The rail (desktop) */}
      <span
        aria-hidden="true"
        className={cn('absolute left-0 right-0 top-[7px] hidden h-px lg:block', dark ? 'bg-white/15' : 'bg-navy/15')}
      />
    <ol className="relative grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-7 lg:gap-x-5">
      {milestones.map((m, i) => {
        const now = m.when === 'Now';
        return (
          <li key={m.what} className="relative list-none">
            <SectionReveal delay={i * 0.05} y={12}>
              <span
                aria-hidden="true"
                className={cn(
                  'relative z-10 block h-[15px] w-[15px] rounded-full border-2',
                  now
                    ? dark
                      ? 'border-gold bg-gold'
                      : 'border-gold-deep bg-gold-deep'
                    : dark
                      ? 'border-teal-bright bg-midnight'
                      : 'border-teal-text bg-white'
                )}
              />
              <p className={cn('mt-4 font-mono text-[12px] uppercase tracking-[0.08em]', dark ? 'text-cream-muted' : 'text-gray-text')}>
                {m.when}
              </p>
              <p className={cn('mt-1.5 text-[15px] font-semibold leading-snug', dark ? 'text-cream' : 'text-navy')}>{m.what}</p>
              <p className={cn('mt-1.5 text-[13px] leading-relaxed', dark ? 'text-cream/65' : 'text-gray-text')}>{m.detail}</p>
            </SectionReveal>
          </li>
        );
      })}
    </ol>
    </div>
  );
}
