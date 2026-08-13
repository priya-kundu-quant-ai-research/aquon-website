import { Hero } from '@/components/sections/homepage/Hero';
import { AquaSection } from '@/components/sections/homepage/AquaSection';
import { ZetonSection } from '@/components/sections/homepage/ZetonSection';
import { Recognition } from '@/components/sections/homepage/Recognition';
import { Horizon } from '@/components/sections/homepage/Horizon';
import { HomeClosingCTA } from '@/components/sections/homepage/HomeClosingCTA';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero now carries the layered stack (Zeton on Aqua on hardware). */}
      <Hero />
      <ZetonSection />
      <AquaSection />
      <Recognition />
      <Horizon />
      <HomeClosingCTA />
    </div>
  );
}
