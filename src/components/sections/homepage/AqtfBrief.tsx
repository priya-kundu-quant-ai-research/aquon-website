'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const AqtfBrief = () => {
  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6">
            We eat our own cooking.
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed mb-8">
            AQTF is Aquon&apos;s own systematic fund: market-neutral, benchmarked to major US
            indices, hedged with ETFs, rebalanced weekly, and executed through Interactive Brokers.
            It runs on the same platform we license to others, which makes it our most demanding
            customer and our most credible proof. We&apos;re building toward{' '}
            <span className="font-semibold text-deep-navy">$250M in assets under management</span>.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-vibrant-teal hover:bg-vibrant-teal/90 text-white font-semibold"
            >
              Inquire about the pilot
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
