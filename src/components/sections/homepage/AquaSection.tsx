'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { SectionReveal } from '@/components/core/SectionReveal';
import { HardwareRouting } from '@/components/visuals/HardwareRouting';

export const AquaSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <SectionReveal className="flex flex-col">
            <p className="text-eyebrow uppercase text-vibrant-teal mb-3">The engine</p>
            <h2 className="text-heading-1 text-deep-navy mb-5">Aqua: the engine.</h2>
            <p className="text-body-l text-neutral-600 mb-8 prose-measure">
              Most numerical software is written once and runs the same way everywhere: on a laptop,
              a cloud instance, a workstation. It is tuned for a machine nobody is actually using.
            </p>
            <div>
              <Button
                asChild
                size="lg"
                className="bg-vibrant-teal hover:bg-vibrant-teal/90 text-white font-semibold"
              >
                <Link href="/technology">
                  How Aqua works
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </SectionReveal>

          {/* Right: interactive hardware-adaptation diagram (carries what the
              second paragraph used to say) */}
          <SectionReveal delay={0.1} className="w-full">
            <div className="rounded-2xl border border-neutral-200 bg-light-gray/40 p-5 sm:p-7">
              <HardwareRouting />
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};
