'use client';

import { motion } from 'framer-motion';
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
  heading = 'Ready to Stop Leaking Alpha?',
  body = "See how Zeton can transform your portfolio management operations. Request access and we'll walk you through the platform.",
  primaryLabel = 'Request platform access',
  primaryHref = '/contact',
  secondaryLabel = 'Explore Aqua',
  secondaryHref = '/technology',
}: FinalCTAProps) => {
  return (
    <section className="py-12 bg-gradient-to-b from-deep-navy to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-xl md:text-xl lg:text-5xl font-bold text-white mb-6">
            {heading}
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
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
        </motion.div>
      </div>
    </section>
  );
};
