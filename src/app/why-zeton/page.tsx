import type { Metadata } from 'next';
import { WhyZetonHero } from '@/components/sections/why-zeton/WhyZetonHero';
import { ROICalculator } from '@/components/sections/why-zeton/ROICalculator';
import { FinalCTA } from '@/components/sections/homepage/FinalCTA';

export const metadata: Metadata = {
  title: 'Why Zeton — your workflow, transformed',
  description:
    'Where the hours go today — and where Zeton gives them back. A workflow comparison for emerging managers.',
};

export default function WhyZetonPage() {
  return (
    <div className="pt-20">
      <WhyZetonHero />
      <ROICalculator />
      <div className="container mx-auto px-6 pb-16 -mt-8">
        <p className="text-center text-sm text-neutral-500 italic max-w-3xl mx-auto">
          Illustrative estimates based on typical emerging-manager workflows; not a guarantee of
          results.
        </p>
      </div>
      <FinalCTA />
    </div>
  );
}
