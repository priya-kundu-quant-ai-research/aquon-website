import { Hero } from '@/components/sections/homepage/Hero';
import { TheStack } from '@/components/sections/homepage/TheStack';
import { Flywheel } from '@/components/sections/homepage/Flywheel';
import { IntroducingZeton } from '@/components/sections/homepage/IntroducingZeton';
import { AqtfBrief } from '@/components/sections/homepage/AqtfBrief';
import { AquaBrief } from '@/components/sections/homepage/AquaBrief';
import { QuantifiedImpact } from '@/components/sections/homepage/QuantifiedImpact';
import { ProofRow } from '@/components/sections/homepage/ProofRow';
import { HomeClosingCTA } from '@/components/sections/homepage/HomeClosingCTA';

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <TheStack />
      <Flywheel />
      <IntroducingZeton />
      <AqtfBrief />
      <AquaBrief />
      <QuantifiedImpact />
      <ProofRow />
      <HomeClosingCTA />
    </div>
  );
}
