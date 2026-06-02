import { Hero } from '@/components/sections/homepage/Hero';
// import { Trilemma } from '@/components/sections/homepage/Trilemma';
import { IntroducingZeton } from '@/components/sections/homepage/IntroducingZeton';
import { QuantifiedImpact } from '@/components/sections/homepage/QuantifiedImpact';
import { AqtfBrief } from '@/components/sections/homepage/AqtfBrief';
import { TechnologyTeaser } from '@/components/sections/homepage/TechnologyTeaser';
import { FinalCTA } from '@/components/sections/homepage/FinalCTA';

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      {/* <Trilemma /> */}
      <IntroducingZeton />
      <QuantifiedImpact />
      <AqtfBrief />
      <TechnologyTeaser />
      <FinalCTA />
    </div>
  );
}