import { Hero } from '@/components/sections/homepage/Hero';
import { AquaSection } from '@/components/sections/homepage/AquaSection';
import { ZetonSection } from '@/components/sections/homepage/ZetonSection';
import { Recognition } from '@/components/sections/homepage/Recognition';
import { Horizon } from '@/components/sections/homepage/Horizon';
import { HomeClosingCTA } from '@/components/sections/homepage/HomeClosingCTA';
import { LayeredArchitecture } from '@/components/visuals/LayeredArchitecture';

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <AquaSection />

      {/* Connective element: Zeton stacks on Aqua stacks on hardware. One
          graphic between the two sections, so the stacking reads without a
          sentence about it. */}
      <section className="bg-white pb-12 md:pb-16">
        <div className="container mx-auto px-6">
          <LayeredArchitecture />
        </div>
      </section>

      <ZetonSection />
      <Recognition />
      <Horizon />
      <HomeClosingCTA />
    </div>
  );
}
