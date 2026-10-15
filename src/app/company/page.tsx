import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';
import { Section, Eyebrow, Heading } from '@/components/site/primitives';
import { Milestones } from '@/components/site/Milestones';
import { Story, Team, Recognition, Locations } from '@/components/company/CompanySections';
import { ClosingCTA } from '@/components/site/ClosingCTA';
import { SectionReveal } from '@/components/core/SectionReveal';

export const metadata: Metadata = {
  title: 'Company',
  description:
    'An NYU research spin-out building Zeton, the portfolio operating system, on Aqua, an engine exclusively licensed from NYU.',
};

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Aquon"
        title={
          <>
            An NYU research problem that became a{' '}
            <span className="text-teal-bright">portfolio platform.</span>
          </>
        }
        lead="Aquon builds Zeton, the portfolio operating system for investment firms, and Aqua, the engine beneath it."
      />
      <Story />
      <Section tone="dark">
        <SectionReveal className="mb-14 max-w-3xl">
          <Eyebrow dark>Milestones</Eyebrow>
          <Heading className="text-cream">Built step by step, on the record.</Heading>
        </SectionReveal>
        <Milestones dark />
      </Section>
      <Team />
      <Recognition />
      <Locations />
      <ClosingCTA />
    </>
  );
}
