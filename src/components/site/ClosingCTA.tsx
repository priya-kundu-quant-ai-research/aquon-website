import { ButtonLink } from '@/components/site/primitives';
import { SectionReveal } from '@/components/core/SectionReveal';

/** The closing band on every page: two paths, firms and investors. */
export function ClosingCTA({
  heading = 'See personalization at scale, working.',
  body = 'Talk to us about running Zeton for your firm, or about investing in Aquon.',
  primary = { href: '/contact', label: 'Talk to us' },
  secondary = { href: '/contact?interest=investors', label: 'Investor relations' },
}: {
  heading?: string;
  body?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-cream">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 -top-40 h-[480px] w-[640px] rounded-full bg-teal/10 blur-[120px]" />
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-20 md:flex-row md:items-end md:justify-between md:px-8 md:py-24">
        <SectionReveal className="max-w-2xl">
          <h2 className="font-display text-display-l text-cream">{heading}</h2>
          <p className="mt-5 text-body-l text-cream/75">{body}</p>
        </SectionReveal>
        <SectionReveal delay={0.1} className="flex flex-wrap gap-3">
          <ButtonLink href={primary.href} dark>
            {primary.label}
          </ButtonLink>
          <ButtonLink href={secondary.href} variant="outline" dark>
            {secondary.label}
          </ButtonLink>
        </SectionReveal>
      </div>
    </section>
  );
}
