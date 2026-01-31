import { CompanyHero } from '@/components/sections/company/CompanyHero';
import { Mission } from '@/components/sections/company/Mission';
import { Story } from '@/components/sections/company/Story';
import { Team } from '@/components/sections/company/Team';
import { Recognition } from '@/components/sections/company/Recognition';
import { FinalCTA } from '@/components/sections/homepage/FinalCTA';

export default function CompanyPage() {
  return (
    <div className="pt-20">
      <CompanyHero />
      <Story />
      <Mission />
      <Team />
      <Recognition />
      <FinalCTA />
    </div>
  );
}