import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { SectionReveal } from '@/components/core/SectionReveal';

/**
 * Closing CTA — a single path, not the old fund/platform fork. Heading and body
 * are authored microcopy (02 gives no verbatim copy for the closing CTA); they
 * assert no numbers or capabilities, only the conversion prompt.
 */
export const HomeClosingCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-deep-navy to-black">
      <div className="container mx-auto px-6">
        <SectionReveal className="max-w-4xl mx-auto text-center">
          <h2 className="text-heading-1 text-white mb-6">Ready to see Zeton?</h2>
          <p className="text-body-l text-white/70 mb-8 max-w-2xl mx-auto">
            Talk to our team, or explore the platform built on Aqua.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-vibrant-teal hover:bg-vibrant-teal/90 text-white font-semibold px-8 py-6 text-lg"
            >
              <Link href="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Talk to our team
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-deep-navy font-semibold px-8 py-6 text-lg"
            >
              <Link href="/zeton">
                Explore Zeton
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
