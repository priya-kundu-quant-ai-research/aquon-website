'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const HomeClosingCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-deep-navy to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Two ways to work with Aquon.
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            <span className="font-semibold text-white">Run on our platform</span> to bring
            Aladdin-class operations to your practice, or{' '}
            <span className="font-semibold text-white">invest in the strategy</span> by inquiring about
            the AQTF founding-client pilot.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/zeton" className="cursor-pointer">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-deep-navy font-semibold px-8 py-6 text-lg"
              >
                Explore Zeton
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact" className="cursor-pointer">
              <Button
                size="lg"
                className="bg-vibrant-teal hover:bg-vibrant-teal/90 text-white font-semibold px-8 py-6 text-lg"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Talk to our team
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
