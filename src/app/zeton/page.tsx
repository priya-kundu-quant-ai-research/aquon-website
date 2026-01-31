import { ZetonHero } from '@/components/sections/zeton/ZetonHero';
import { UnifiedWorkflow } from '@/components/sections/zeton/UnifiedWorkflow';
import { ModuleDeepDive } from '@/components/sections/zeton/ModuleDeepDive';
import { FinalCTA } from '@/components/sections/homepage/FinalCTA';

export default function ZetonPage() {
  return (
    <div className="pt-20">
      <ZetonHero />
      <UnifiedWorkflow />
      <ModuleDeepDive />
      <FinalCTA />
    </div>
  );
}