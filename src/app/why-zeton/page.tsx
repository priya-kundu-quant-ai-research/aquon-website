import { WhyZetonHero } from '@/components/sections/why-zeton/WhyZetonHero';
import { ROICalculator } from '@/components/sections/why-zeton/ROICalculator';
// import { ComparisonTable } from '@/components/sections/why-zeton/ComparisonTable';
// import { QuantifiedImpact } from '@/components/sections/homepage/QuantifiedImpact';
import { FinalCTA } from '@/components/sections/homepage/FinalCTA';

export default function WhyZetonPage() {
  return (
    <div className="pt-20">
      <WhyZetonHero />
      {/* <QuantifiedImpact /> */}
      <ROICalculator />
      {/* <ComparisonTable /> */}
      <FinalCTA />
    </div>
  );
}