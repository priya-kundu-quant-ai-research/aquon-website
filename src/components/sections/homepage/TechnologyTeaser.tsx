'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export const TechnologyTeaser = () => {
  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
              Powered by Aqua
            </h2>
            <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
              Our proprietary compiler turns complex financial logic into verified, 
              high-performance code that you can trust.
            </p>
          </motion.div>

          {/* Visual Flow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-12"
          >
            {/* Three Steps in One Line */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-vibrant-teal/10 border-2 border-vibrant-teal flex items-center justify-center mx-auto mb-4">
                  <Cpu className="text-vibrant-teal" size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-deep-navy mb-2">Financial Logic</h3>
                <p className="text-sm text-neutral-600">
                  Your strategies and rules
                </p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                <ArrowRight className="text-neutral-400 hidden md:block" size={32} />
                <div className="md:hidden w-0.5 h-12 bg-neutral-400" />
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-vibrant-teal/10 border-2 border-vibrant-teal flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-vibrant-teal" size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-deep-navy mb-2">Aqua Compiler</h3>
                <p className="text-sm text-neutral-600">
                  Formal verification
                </p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                <ArrowRight className="text-neutral-400 hidden md:block" size={32} />
                <div className="md:hidden w-0.5 h-12 bg-neutral-400" />
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-vibrant-teal/10 border-2 border-vibrant-teal flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-vibrant-teal" size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-deep-navy mb-2">Zeton Platform</h3>
                <p className="text-sm text-neutral-600">
                  Reliable execution
                </p>
              </div>
            </div>

            {/* Result Box */}
            <div className="mt-8 p-6 bg-vibrant-teal/10 rounded-xl border border-vibrant-teal/40">
              <p className="text-center text-neutral-700">
                <span className="font-semibold text-deep-navy">The result:</span> Strategies 
                that are mathematically verified before they ever touch real money.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <Link href="/technology">
              <Button variant="outline" size="lg"   className="bg-[var(--color-vibrant-teal)] hover:bg-[var(--color-vibrant-teal)]/70 text-white font-semibold px-8">
                Explore the Technology
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};