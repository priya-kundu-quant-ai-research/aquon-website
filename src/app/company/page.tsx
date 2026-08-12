import type { Metadata } from 'next';
import { CompanyHero } from '@/components/sections/company/CompanyHero';
import { CompanyStory } from '@/components/sections/company/CompanyStory';
import { Team } from '@/components/sections/company/Team';
import { Recognition } from '@/components/sections/company/Recognition';
import { FinalCTA } from '@/components/sections/homepage/FinalCTA';

export const metadata: Metadata = {
  title: 'Company',
  description: 'An NYU research problem that became an investment platform.',
};

export default function CompanyPage() {
  return (
    <div className="pt-20">
      <CompanyHero />
      <CompanyStory />
      <Team />
      <Recognition />
      <FinalCTA
        heading="Ready to see Zeton?"
        body="Talk to our team, or explore the platform built on Aqua."
        primaryLabel="Talk to our team"
        primaryHref="/contact"
        secondaryLabel="Explore Zeton"
        secondaryHref="/zeton"
      />
    </div>
  );
}
