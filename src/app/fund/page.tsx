import type { Metadata } from 'next';
import { FundHero } from '@/components/sections/fund/FundHero';
import { FundContent } from '@/components/sections/fund/FundContent';
import { FundCTA } from '@/components/sections/fund/FundCTA';

export const metadata: Metadata = {
  title: 'AQTF: the systematic fund we built our platform to run',
  description:
    'AQTF is Aquon’s own systematic, market-neutral fund, benchmarked to major US indices, hedged with ETFs, rebalanced weekly, and live on Interactive Brokers. Targeting $250M in assets under management.',
};

export default function FundPage() {
  return (
    <div className="pt-20">
      <FundHero />
      <FundContent />
      <FundCTA />
    </div>
  );
}
