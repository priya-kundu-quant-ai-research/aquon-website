import type { Metadata } from 'next';
import { ProofHero } from '@/components/sections/proof/ProofHero';
import { ProofBlocks } from '@/components/sections/proof/ProofBlocks';
import { FinalCTA } from '@/components/sections/homepage/FinalCTA';

export const metadata: Metadata = {
  title: 'Proof, not promises',
  description:
    'What’s real at Aquon: our own capital live on Interactive Brokers, ~$132K in independent recognition, exclusively licensed NYU IP, and partnerships in motion.',
};

export default function ProofPage() {
  return (
    <div className="pt-20">
      <ProofHero />
      <ProofBlocks />
      <FinalCTA
        heading="A fund and a platform, built on the same engine."
        body="Whether you want to run on the platform or explore the fund, we'd love to talk."
        primaryLabel="Talk to our team"
        primaryHref="/contact"
        secondaryLabel="Explore the platform"
        secondaryHref="/zeton"
      />
    </div>
  );
}
