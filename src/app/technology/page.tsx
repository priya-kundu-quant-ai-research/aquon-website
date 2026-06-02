import type { Metadata } from 'next';
import { TippingPointHero } from '@/components/sections/technology/TippingPointHero';
import { AquaFinancialComputing } from '@/components/sections/technology/AquaFinancialComputing';
import { TechnologyFinalCTA } from '@/components/sections/technology/FinalCTA';

export const metadata: Metadata = {
  title: 'Aqua — a computation engine built for financial computing',
  description:
    'Aqua is Aquon’s proprietary, NYU-licensed computation engine, purpose-built for the quadratic-programming workloads behind modern portfolio construction — 5–15× faster with zero correctness regressions.',
};

export default function TechnologyPage() {
  return (
    <div className="pt-20">
      <TippingPointHero />
      <AquaFinancialComputing />
      <TechnologyFinalCTA />
    </div>
  );
}
