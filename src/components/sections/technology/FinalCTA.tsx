'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const TechnologyFinalCTA = () => {
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
          <h2 className="text-heading-1 text-white mb-6">
            Ready to Unlock the Power of AQUA?
          </h2>
          <p className="text-body-l text-white/70 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re in finance or exploring optimization challenges in another industry,
            we&apos;d love to show you what&apos;s possible.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="cursor-pointer">
                <Button size="lg" className="bg-vibrant-teal hover:bg-vibrant-teal/90 text-white font-semibold px-8 py-6 text-lg">
                <Calendar className="mr-2 h-5 w-5" />
                Talk to Our Team
                </Button>
            </Link>
            <Link href="/zeton#overview-video" className="cursor-pointer">
                <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-deep-navy font-semibold px-8 py-6 text-lg"
                >
                Explore the platform
                <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};