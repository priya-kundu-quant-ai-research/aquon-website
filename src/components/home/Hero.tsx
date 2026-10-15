import Image from 'next/image';
import { ButtonLink } from '@/components/site/primitives';
import { ScreenshotFrame } from '@/components/site/ScreenshotFrame';
import { SectionReveal } from '@/components/core/SectionReveal';

/** The credentials a reader can verify. Dated in the Milestones section. */
export const credentials = [
  'NYU research spin-out',
  'Exclusive worldwide NYU licence',
  'Patent application filed',
  'START-UP NY',
  'Washington DC Global Soft Landing',
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-midnight pt-[72px] text-cream">
      {/* Depth, not decoration: one soft navy field behind the product. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[720px] w-[900px] rounded-full bg-navy/50 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 px-6 pb-16 pt-16 md:px-8 md:pt-24 lg:grid-cols-[1.15fr_1fr] lg:pb-24">
        <SectionReveal>
          <div className="mb-6 flex items-center gap-4">
            <Image src="/images/brand/zeton-wordmark-light.svg" alt="Zeton" width={2845} height={815} priority className="h-8 w-auto" />
            <span className="h-5 w-px bg-cream/25" aria-hidden="true" />
            <p className="text-eyebrow uppercase text-teal-bright">The portfolio operating system</p>
          </div>
          <h1 className="font-display text-display-xl text-cream lg:text-[clamp(2.6rem,4.4vw,4.1rem)]">
            Portfolios built for each&nbsp;client.
            <br />
            <span className="text-teal-bright">At scale.</span>
          </h1>
          <p className="mt-7 max-w-[34rem] text-body-l text-cream/75">
            Zeton lets investment firms run every account as its own portfolio, under its own
            rules, from one platform, without the cost that has kept personalization for the
            largest clients.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/contact" dark>
              Talk to us
            </ButtonLink>
            <ButtonLink href="/zeton" variant="outline" dark>
              See the platform
            </ButtonLink>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15} className="lg:-mr-24">
          <ScreenshotFrame label="Home · the daily loop" src="/images/screens/home-dark.png" alt="Zeton Home: every client ranked by what is at stake, with drift against target" theme="dark" priority />
        </SectionReveal>
      </div>

      {/* Credential strip */}
      <div className="relative border-t border-white/10">
        <ul className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-8 gap-y-3 px-6 py-6 text-[13px] text-cream-muted md:px-8">
          {credentials.map((c, i) => (
            <li key={c} className="flex items-center gap-8">
              {i > 0 && <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-cream/25 sm:block" />}
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
