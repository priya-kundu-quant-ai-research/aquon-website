'use client';

import { AnimatedCounter } from '@/components/core/AnimatedCounter';
import { AnimatedInView, FadeIn } from '@/components/core/AnimatedInView';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, ArrowRight, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const metrics = [
  { value: 2600, suffix: '%', label: 'Total Return (10-Year Backtest)' },
  { value: 2.25, suffix: '', label: 'Sharpe Ratio' },
  { value: 5.2, suffix: 'x', label: 'NASDAQ Outperformance' },
  { value: 82, suffix: '%', label: 'ZWAP Win Rate' },
];

export const QuantifiedImpact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-deep-navy">
          From Army to Platform. From Weeks to Minutes.
        </h2>

        {/* Before/After Comparison */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="bg-light-gray p-6 rounded-lg">
                <div className="flex justify-center gap-2 mb-4">
                  <Users className="w-8 h-8 text-neutral-600" />
                  <Users className="w-8 h-8 text-neutral-600" />
                  <Users className="w-8 h-8 text-neutral-600" />
                  <Users className="w-8 h-8 text-neutral-600" />
                </div>
                <p className="font-semibold text-deep-navy mb-2">Before</p>
                <p className="text-neutral-600 text-sm">Large team, weeks of work</p>
              </div>
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="flex flex-col items-center">
                <ArrowRight className="w-12 h-12 text-vibrant-teal mb-2" />
                <p className="text-vibrant-teal font-bold text-xl">60x Faster</p>
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center"
            >
              <div className="bg-vibrant-teal/10 p-6 rounded-lg border-2 border-vibrant-teal">
                <div className="flex justify-center gap-2 mb-4">
                  <Users className="w-8 h-8 text-vibrant-teal" />
                  <Zap className="w-8 h-8 text-vibrant-teal" />
                </div>
                <p className="font-semibold text-deep-navy mb-2">After</p>
                <p className="text-neutral-600 text-sm">One PM + Zeton, minutes</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Metrics Grid */}
        <AnimatedInView stagger={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <FadeIn key={index}>
                <Card className="bg-gradient-to-br from-deep-navy to-deep-navy/80 border-vibrant-teal/20 hover:border-vibrant-teal/50 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl md:text-5xl font-bold text-vibrant-teal mb-2">
                      <AnimatedCounter
                        from={0}
                        to={metric.value}
                        duration={2}
                        suffix={metric.suffix}
                        decimals={2}
                      />
                    </div>
                    <p className="text-sm text-white">{metric.label}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </AnimatedInView>

        {/* Closing Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-2xl font-semibold text-deep-navy"
        >
          We generate the alpha without the army.
        </motion.p>
      </div>
    </section>
  );
};