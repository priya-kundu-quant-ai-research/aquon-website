import type { Metadata } from 'next';
import { ZetonHero } from '@/components/sections/zeton/ZetonHero';
import { UnifiedWorkflow } from '@/components/sections/zeton/UnifiedWorkflow';
import { ModuleDeepDive } from '@/components/sections/zeton/ModuleDeepDive';
import {
  ZetonProblem,
  ZetonValueProp,
  ZetonMarket,
  ZetonProofPoint,
} from '@/components/sections/zeton/ZetonNarrative';
import { FinalCTA } from '@/components/sections/homepage/FinalCTA';

export const metadata: Metadata = {
  title: 'Zeton: the investment operating system',
  description:
    'Zeton is the broker-agnostic, AI-native investment operating system for emerging managers, family offices, and RIAs. Construct, analyze, rebalance, execute, and oversee in one platform.',
};

export default function ZetonPage() {
  return (
    <div className="pt-20">
      <ZetonHero />
      <UnifiedWorkflow />
      <ZetonProblem />
      <ModuleDeepDive />
      <ZetonValueProp />
      <ZetonMarket />
      <ZetonProofPoint />
      <FinalCTA />
    </div>
  );
}
