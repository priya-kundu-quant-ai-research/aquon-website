'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const Evidence = () => {
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
            A decade of validation. Now trading live.
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed mb-4">
            Before a dollar went to market, the strategy was tested the hard way. We ran a ten-year
            walk-forward backtest across the major US indices, rebalancing weekly under a risk-aware
            optimization objective. It produced consistently stronger risk-adjusted performance than
            the benchmarks it was measured against. That same engine now runs live on Interactive
            Brokers, where the real track record is being built in the open.
          </p>

          <p className="text-xs italic text-neutral-500 leading-relaxed mb-8 max-w-2xl mx-auto">
            Based on backtested results across the S&amp;P 500, NASDAQ 100, Dow Jones,
            and Russell 2000. Backtested performance does not reflect actual trading and is not
            indicative of future results. Detailed methodology and results are available to qualified
            parties on request.
          </p>

          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-white"
            >
              Request the methodology
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
