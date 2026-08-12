'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { SectionReveal } from '@/components/core/SectionReveal';
import { ZetonWorkflow } from '@/components/visuals/ZetonWorkflow';

export const ZetonSection = () => {
  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: copy (mirrored vs the Aqua section) */}
          <SectionReveal className="flex flex-col">
            <p className="text-eyebrow uppercase text-rich-purple mb-3">The platform</p>
            <h2 className="text-heading-1 text-deep-navy mb-5">Zeton: the platform.</h2>
            <p className="text-body-l text-neutral-600 mb-8 prose-measure">
              Below the institutional tier, capable managers assemble spreadsheets, broker APIs and
              point tools to approximate what an Aladdin-class system does in one place. Zeton is that
              system, built for them: one platform, broker-agnostic, with an audit trail under every
              decision.
            </p>
            <div>
              <Button
                asChild
                size="lg"
                className="bg-rich-purple hover:bg-rich-purple/90 text-white font-semibold"
              >
                <Link href="/zeton">
                  Explore Zeton
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </SectionReveal>

          {/* Right: the four domains as one workflow */}
          <SectionReveal delay={0.1} className="w-full">
            <div className="rounded-2xl border border-rich-purple/15 bg-white p-5 sm:p-7">
              <ZetonWorkflow />
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};
