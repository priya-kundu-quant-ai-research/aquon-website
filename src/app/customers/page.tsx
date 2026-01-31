import { CustomersHero } from '@/components/sections/customers/CustomersHero';
import { CaseStudies } from '@/components/sections/customers/CaseStudies';
import { SocialProof } from '@/components/sections/homepage/SocialProof';
import { FinalCTA } from '@/components/sections/homepage/FinalCTA';

export default function CustomersPage() {
  return (
    <div className="pt-20">
      <CustomersHero />
      <CaseStudies />
      <SocialProof />
      <FinalCTA />
    </div>
  );
}