import type { Metadata } from 'next';
import { CompanyHero } from '@/components/sections/company/CompanyHero';
import { Story } from '@/components/sections/company/Story';
import { Origins, ActiveDiscussions } from '@/components/sections/company/OriginsAndDiscussions';
import { Team } from '@/components/sections/company/Team';
import { Recognition } from '@/components/sections/company/Recognition';
import { FinalCTA } from '@/components/sections/homepage/FinalCTA';

export const metadata: Metadata = {
  title: 'About Aquon: a fund and a platform, built on the same engine',
  description:
    'Aquon is a deep-tech quant firm and NYU research spin-off building both sides of the systematic-investing stack: AQTF, our own fund, and Zeton, the platform beneath it.',
};

export default function CompanyPage() {
  return (
    <div className="pt-20">
      <CompanyHero />
      <Story />
      <Origins />
      <Team />
      <Recognition />
      {/* <ActiveDiscussions /> */}
      <FinalCTA
        heading="A fund and a platform, built on the same engine."
        body="Whether you want to run on the platform, explore the fund, or learn more about Aquon, we'd love to talk."
        primaryLabel="Talk to our team"
        primaryHref="/contact"
        secondaryLabel="Explore the platform"
        secondaryHref="/zeton"
      />
    </div>
  );
}
