import type { Metadata } from 'next';
import { ZetonHero } from '@/components/sections/zeton/ZetonHero';
import { ZetonOverview } from '@/components/sections/zeton/ZetonOverview';
import { UnifiedWorkflow } from '@/components/sections/zeton/UnifiedWorkflow';
import { ModuleDeepDive } from '@/components/sections/zeton/ModuleDeepDive';
import { ZetonValueProp } from '@/components/sections/zeton/ZetonNarrative';
import { FinalCTA } from '@/components/sections/homepage/FinalCTA';

export const metadata: Metadata = {
  title: 'Zeton: the investment operating system',
  description:
    'Construct, execute, monitor and oversee. One platform, broker-agnostic, built on Aqua.',
};

export default function ZetonPage() {
  return (
    <div className="pt-20">
      <ZetonHero />
      <ZetonOverview />
      <UnifiedWorkflow />
      <ModuleDeepDive />
      <ZetonValueProp />
      <FinalCTA
        heading="Ready to run on Zeton?"
        body="Request platform access, or see the engine underneath it."
        primaryLabel="Request platform access"
        primaryHref="/contact"
        secondaryLabel="How Aqua works"
        secondaryHref="/technology"
      />
    </div>
  );
}
