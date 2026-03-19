'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, TrendingUp, Zap } from 'lucide-react';
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
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
              Powered by Purpose-Built Architecture
            </h2>
            <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
              Zeton leverages a proprietary programming language designed 
              specifically for optimization workloads. Iterate on portfolio strategies 
              faster than traditional methods.
            </p>
          </motion.div>

          {/* Visual Flow - Keep existing 3-step diagram */}
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
                <h3 className="text-lg font-bold text-deep-navy mb-2">Portfolio Strategy</h3>
                <p className="text-sm text-neutral-600">
                  Define your objectives
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
                  <Zap className="text-vibrant-teal" size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-deep-navy mb-2">Aqua Optimizer</h3>
                <p className="text-sm text-neutral-600">
                  Rapid computation
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
                  <TrendingUp className="text-vibrant-teal" size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-deep-navy mb-2">Optimized Portfolios</h3>
                <p className="text-sm text-neutral-600">
                  Faster iteration
                </p>
              </div>
            </div>

            {/* Result Box */}
            <div className="mt-8 p-6 bg-vibrant-teal/5 rounded-xl border border-vibrant-teal/20">
              <p className="text-center text-neutral-700">
                <span className="font-semibold text-deep-navy">The result:</span> Run extensive 
                backtests and parameter searches in a fraction of the time, enabling you to 
                explore more strategies and make better-informed portfolio decisions.
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
              <Button variant="outline" size="lg" className="border-2 border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-white">
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