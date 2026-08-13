import type { Metadata } from 'next';
import { TippingPointHero } from '@/components/sections/technology/TippingPointHero';
import { AquaAdaptation } from '@/components/sections/technology/AquaAdaptation';
import { AquaNovelty } from '@/components/sections/technology/AquaNovelty';
import { AquaStats } from '@/components/sections/technology/AquaStats';
import { AquaApplication } from '@/components/sections/technology/AquaApplication';
import { TailRisk } from '@/components/sections/technology/TailRisk';
import { AquaHorizon } from '@/components/sections/technology/AquaHorizon';
import { TechnologyFinalCTA } from '@/components/sections/technology/FinalCTA';
import { SectionReveal } from '@/components/core/SectionReveal';
import { LayeredArchitecture } from '@/components/visuals/LayeredArchitecture';

export const metadata: Metadata = {
  title: 'Aqua: the computation engine',
  description:
    'Aqua is Aquon’s computation engine. It reads the machine it runs on and adapts to it, at runtime, with nothing configured by the caller.',
};

export default function TechnologyPage() {
  return (
    <div className="pt-20">
      <TippingPointHero />
      <AquaAdaptation />
      <AquaNovelty />
      <AquaStats />
      <AquaApplication />

      {/* The stack: where Aqua sits. Reused from Home. */}
      {/* <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionReveal className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-heading-1 text-deep-navy">Aqua is the layer that makes the rest possible.</h2>
          </SectionReveal>
          <LayeredArchitecture />
        </div>
      </section> */}

      <TailRisk />
      {/* <AquaHorizon /> */}
      <TechnologyFinalCTA />
    </div>
  );
}
