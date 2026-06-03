import { Hero } from '@/components/sections/homepage/Hero';
import { ThreePillars } from '@/components/sections/homepage/ThreePillars';
import { Flywheel } from '@/components/sections/homepage/Flywheel';
import { Evidence } from '@/components/sections/homepage/Evidence';
import { ProofRow } from '@/components/sections/homepage/ProofRow';
import { HomeClosingCTA } from '@/components/sections/homepage/HomeClosingCTA';

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <ThreePillars />
      <Flywheel />
      <Evidence />
      <ProofRow />
      <HomeClosingCTA />
    </div>
  );
}
