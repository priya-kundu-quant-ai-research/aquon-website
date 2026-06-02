'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const AquaBrief = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6">
            Speed you can measure. Trust you can audit.
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed mb-8">
            At the core of everything is Aqua, our NYU-licensed computation engine, purpose-built for
            the quadratic-programming workloads behind modern portfolio construction. Proprietary,
            audited, and low-attack-surface by design — a structural advantage as institutions
            scrutinize the integrity of the software beneath their capital.
          </p>
          <Link href="/technology">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-white"
            >
              Explore the technology
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
