import type { Metadata } from 'next';
import { TippingPointHero } from '@/components/sections/technology/TippingPointHero';
import { AquaOverview } from '@/components/sections/technology/AquaOverview';
import { AquaNovelty } from '@/components/sections/technology/AquaNovelty';
import { AquaStats } from '@/components/sections/technology/AquaStats';
import { AquaHardware } from '@/components/sections/technology/AquaHardware';
import { AquaApplication } from '@/components/sections/technology/AquaApplication';
import { TailRisk } from '@/components/sections/technology/TailRisk';
import { AquaHorizon } from '@/components/sections/technology/AquaHorizon';
import { TechnologyFinalCTA } from '@/components/sections/technology/FinalCTA';

export const metadata: Metadata = {
  title: 'Aqua: the computation engine',
  description:
    'Aqua is Aquon’s computation engine. It reads the machine it runs on and adapts to it, at runtime, with nothing configured by the caller.',
};

export default function TechnologyPage() {
  return (
    <div className="pt-20">
      <TippingPointHero />
      <AquaOverview />
      <AquaNovelty />
      <AquaStats />
      <AquaHardware />
      <AquaApplication />
      <TailRisk />
      <AquaHorizon />
      <TechnologyFinalCTA />
    </div>
  );
}
