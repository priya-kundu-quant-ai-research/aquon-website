import { TippingPointHero } from '@/components/sections/technology/TippingPointHero';
import { Breakthrough } from '@/components/sections/technology/Breakthrough';
import { InnovationArchitecture } from '@/components/sections/technology/InnovationArchitecture';
import { AquaShowcase } from '@/components/sections/technology/AquaShowcase';
import { FirstProvingGround } from '@/components/sections/technology/FirstProvingGround';
import { TheHorizon } from '@/components/sections/technology/TheHorizon';
import { TechnologyFinalCTA } from '@/components/sections/technology/FinalCTA';

export default function TechnologyPage() {
  return (
    <div className="pt-20">
      <TippingPointHero />
      <Breakthrough />
      <InnovationArchitecture />
      <AquaShowcase />
      <FirstProvingGround />
      <TheHorizon />
      <TechnologyFinalCTA />
    </div>
  );
}