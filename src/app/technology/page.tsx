import type { Metadata } from 'next';
import { TippingPointHero } from '@/components/sections/technology/TippingPointHero';
import { AquaAdaptation } from '@/components/sections/technology/AquaAdaptation';
import { AquaNovelty } from '@/components/sections/technology/AquaNovelty';
import { TailRisk } from '@/components/sections/technology/TailRisk';
import { Outcomes, Measured, Protected } from '@/components/technology/TechSections';
import { ClosingCTA } from '@/components/site/ClosingCTA';

export const metadata: Metadata = {
  title: 'Aqua: the engine beneath Zeton',
  description:
    'Aqua reads the machine it runs on and adapts to it, so a firm can serve far more client portfolios on the hardware it already has. Exclusively licensed from NYU.',
};

export default function TechnologyPage() {
  return (
    <>
      <TippingPointHero />
      <Outcomes />
      <AquaAdaptation />
      <AquaNovelty />
      <Measured />
      <Protected />
      <TailRisk />
      <ClosingCTA
        heading="See what Aqua does for your book."
        body="Talk to us about running Zeton, or about licensing Aqua inside your own platform."
        primary={{ href: '/contact', label: 'Talk to us' }}
        secondary={{ href: '/zeton', label: 'See the platform' }}
      />
    </>
  );
}
