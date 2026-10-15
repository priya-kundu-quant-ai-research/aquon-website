import { HomeHero } from '@/components/home/Hero';
import { Demand } from '@/components/home/Demand';
import { CerulliGap } from '@/components/home/CerulliGap';
import { Lifecycle } from '@/components/home/Lifecycle';
import { WhyAqua } from '@/components/home/WhyAqua';
import { WhoWeServe } from '@/components/home/WhoWeServe';
import { Section, Eyebrow, Heading, ButtonLink } from '@/components/site/primitives';
import { Milestones } from '@/components/site/Milestones';
import { ClosingCTA } from '@/components/site/ClosingCTA';
import { SectionReveal } from '@/components/core/SectionReveal';

/**
 * Home tells one story, top to bottom: the demand → the gap (Cerulli) → the
 * answer (Zeton) → why we can (Aqua) → who we serve → proof of progress → ask.
 * Source of truth for the copy: aquon base, website/06-october-refresh-plan.md.
 */
export default function Home() {
  return (
    <>
      <HomeHero />
      <Demand />
      <CerulliGap />
      <Lifecycle />
      <WhyAqua />
      <WhoWeServe />
      <Section tone="light">
        <SectionReveal className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Proof of progress</Eyebrow>
            <Heading>Built step by step, on the record.</Heading>
          </div>
          <ButtonLink href="/company" variant="text">
            About the company
          </ButtonLink>
        </SectionReveal>
        <Milestones />
      </Section>
      <ClosingCTA />
    </>
  );
}
