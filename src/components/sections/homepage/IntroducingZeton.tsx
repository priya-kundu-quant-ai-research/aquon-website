'use client';

import { Card, CardContent } from '@/components/ui/card';
import { AnimatedInView, FadeIn } from '@/components/core/AnimatedInView';
import { motion } from 'framer-motion';
import { Target, Zap, Eye, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


const modules = [
  {
    id: 'z-scope',
    name: 'Z-Scope',
    tagline: 'Portfolio Intelligence',
    description:
      'Design and backtest winning strategies in minutes, not weeks. AI-powered construction with formal verification.',
    icon: Target,
    features: [
      'AI-powered portfolio construction',
      'Backtesting with formal verification',
      'Risk analysis and optimization',
    ],
  },
  {
    id: 'z-strike',
    name: 'Z-Strike',
    tagline: 'Execution Engine',
    description:
      'Execute trades with algorithmic precision and document your execution alpha. Smart routing that maximizes performance.',
    icon: Zap,
    features: [
      'Smart order routing',
      'Real-time execution analytics',
      'ZWAP and VWAP algorithms',
    ],
  },
  {
    id: 'z-sight',
    name: 'Z-Sight',
    tagline: 'Market AI',
    description:
      'Uncover opportunities and risks 24/7 with AI-powered monitoring. Never miss a regime shift or market anomaly.',
    icon: Eye,
    features: [
      'Real-time market intelligence',
      'Regime shift detection',
      'Anomaly detection and alerts',
    ],
  },
];

export const IntroducingZeton = () => {
  return (
    <section className="py-0 bg-light-gray">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-deep-navy">
              Meet Zeton: Your Complete Portfolio OS
            </h2>
            <p className="text-deep-navy text-lg max-w-3xl mx-auto">
              Three powerful modules working together to transform how you manage portfolios.
            </p>
          </div>
          </motion.div>
        </div>

        {/* Three Modules Grid */}
        <AnimatedInView stagger={0.2} className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {modules.map((module) => {
              const IconComponent = module.icon;
              return (
                <FadeIn key={module.id}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <Card className="bg-white border text-deep-navy h-full hover:shadow-xl transition-all">
                      <CardContent className="p-5=4">
                        <div className="flex items-start gap-3">
                          {/* Icon */}
                          <div className="w-12 rounded-xl bg-[color-mix(in_oklab,var(--color-vibrant-teal)_15%,white)] flex items-center justify-center shrink-0 self-stretch">
                            <IconComponent className="text-[var(--color-vibrant-teal)]" size={22} strokeWidth={1.5} />
                          </div>

                          {/* Text */}
                          <div className="flex flex-col justify-between">
                            <h3 className="text-lg font-bold text-deep-navy leading-tight">
                              {module.name}
                            </h3>
                            <p className="text-sm font-semibold text-deep-navy/60 leading-tight">
                              {module.tagline}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </AnimatedInView>

        {/* Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-2xl border-[var(--color-rich-purple)]/30 bg-white text-deep-navy p-8 md:p-8"
        >
          <h3 className="text-xl md:text-3xl font-bold text-deep-navy text-center mb-6">
            How They Work Together
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Step */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-black/5 border border-black/10 flex items-center justify-center mb-2">
                <Target className="text-deep-navy" size={26} strokeWidth={1.5} />
              </div>
              <p className="text-sm font-semibold text-deep-navy">Design Strategy</p>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center">
              <ArrowRight className="text-[var(--color-rich-purple)]/80 hidden md:block" size={24} />
              <div className="md:hidden w-0.5 h-8 bg-black/20" />
            </div>

            {/* Step */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-black/5 border border-black/10 flex items-center justify-center mb-2">
                <Zap className="text-deep-navy" size={26} strokeWidth={1.5} />
              </div>
              <p className="text-sm font-semibold text-deep-navy">Execute Trades</p>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center">
              <ArrowRight className="text-[var(--color-rich-purple)]/80 hidden md:block" size={24} />
              <div className="md:hidden w-0.5 h-8 bg-black/20" />
            </div>

            {/* Step */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-black/5 border border-black/10 flex items-center justify-center mb-2">
                <Eye className="text-deep-navy" size={26} strokeWidth={1.5} />
              </div>
              <p className="text-sm font-semibold text-deep-navy">Monitor & Adapt</p>
            </div>
          </div>

          <p className="text-deep-navy/70 text-center max-w-3xl mx-auto mt-5 text-md leading-relaxed">
            One seamless workflow from strategy design to execution to continuous monitoring, powered by the Aqua compiler for verified performance.
          </p>
        </motion.div>

        {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8 pb-16"
          >
            <Link href="/zeton">
              <Button variant="outline" size="lg"   className="bg-[var(--color-rich-purple)] hover:bg-[var(--color-rish-purple)]/70 text-white font-semibold px-8">
                Explore Zeton
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
      </div>
    </section>
  );
};

