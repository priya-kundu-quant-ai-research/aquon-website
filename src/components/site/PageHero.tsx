import { type ReactNode } from 'react';
import { SectionReveal } from '@/components/core/SectionReveal';
import { cn } from '@/lib/utils';

/** The dark opening band of every inner page. Clears the fixed header. */
export function PageHero({
  eyebrow,
  brand,
  title,
  lead,
  children,
  className,
}: {
  eyebrow: string;
  /** a logo set before the eyebrow, as the home hero sets Zeton's */
  brand?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn('relative overflow-hidden bg-midnight pt-[72px] text-cream', className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 -top-24 h-[620px] w-[820px] rounded-full bg-navy/45 blur-[120px]"
      />
      <div className="relative mx-auto max-w-[1200px] px-6 pb-16 pt-16 md:px-8 md:pb-20 md:pt-24">
        <SectionReveal className="max-w-3xl">
          {brand ? (
            <div className="mb-6 flex items-center gap-4">
              {brand}
              <span className="h-5 w-px bg-cream/25" aria-hidden="true" />
              <p className="text-eyebrow uppercase text-teal-bright">{eyebrow}</p>
            </div>
          ) : (
            <p className="text-eyebrow uppercase text-teal-bright mb-6">{eyebrow}</p>
          )}
          <h1 className="font-display text-display-l text-cream">{title}</h1>
          {lead && <p className="mt-7 max-w-[38rem] text-body-l text-cream/75">{lead}</p>}
        </SectionReveal>
        {children}
      </div>
    </section>
  );
}
