'use client';

import { SectionReveal } from '@/components/core/SectionReveal';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface FinalCTAProps {
  heading?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export const FinalCTA = ({
  // Defaults are claim-free and fund-free; pages pass their own copy.
  heading = 'Ready to see Zeton?',
  body = 'Talk to our team, or explore the platform built on Aqua.',
  primaryLabel = 'Talk to our team',
  primaryHref = '/contact',
  secondaryLabel = 'Explore Zeton',
  secondaryHref = '/zeton',
}: FinalCTAProps) => {
  return (
    <section className="py-12 bg-gradient-to-b from-deep-navy to-black">
      <div className="container mx-auto px-6">
        <SectionReveal className="max-w-4xl mx-auto text-center">
          <h2 className="text-heading-1 text-white mb-6">
            {heading}
          </h2>
          <p className="text-body-l text-white/70 mb-8 max-w-2xl mx-auto">
            {body}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={primaryHref} className="cursor-pointer">
              <Button size="lg" className="bg-vibrant-teal hover:bg-vibrant-teal/90 text-white font-semibold px-8 py-6 text-lg">
                {primaryLabel}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href={secondaryHref} className="cursor-pointer">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-deep-navy font-semibold px-8 py-6 text-lg"
              >
                {secondaryLabel}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
