'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Target, Zap, Eye, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

const modules = [
  {
    id: 'z-scope',
    name: 'Z-Scope',
    tagline: 'Portfolio Intelligence',
    icon: Target,
    features: [
      'Portfolio construction',
      'Backtesting & evaluation',
      'Drift monitoring',
    ],
  },
  {
    id: 'z-strike',
    name: 'Z-Strike',
    tagline: 'Execution Intelligence',
    icon: Zap,
    features: [
      'Broker-agnostic connectivity',
      'TWAP & VWAP execution',
      'Coordinated order placement',
    ],
  },
  {
    id: 'z-sight',
    name: 'Z-Sight',
    tagline: 'Market Intelligence',
    icon: Eye,
    features: [
      'Aggregated financial news',
      'Sentiment analysis',
      'Research summaries',
    ],
  },
];

export const IntroducingZeton = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 max-w-3xl text-center"
        >
          <p className="mb-2 text-md font-semibold uppercase tracking-[0.24em] text-deep-navy">
            Zeton in brief
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-deep-navy md:text-5xl">
            The investment operating system.
          </h2>
          <p className="mt-3 text-base leading-7 text-deep-navy">
            Zeton consolidates the full workflow (construct, analyze, rebalance, execute, oversee)
            into one platform, organized as intelligence domains.
          </p>
        </motion.div>

        {/* Modules */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {modules.map((module, index) => {
            const Icon = module.icon;

            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card className="border border-deep-navy bg-white hover:border-deep-navy/20 transition-all">
                  <CardContent className="flex flex-col p-">
                    <div className="mb-4 flex items-center gap-6">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-deep-navy bg-deep-navy/[0.03]">
                        <Icon className="text-deep-navy" size={20} strokeWidth={1.75} />
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold text-deep-navy leading-tight">
                          {module.name}
                        </h3>
                        <p className="mt-0.5 text-md font-medium text-deep-navy">
                          {module.tagline}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2 text-md text-deep-navy/70">
                      {module.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-vibrant-teal/90" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-4 max-w-6xl"
        >
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.35fr_0.95fr]">
            {/* Left: AI Card */}
            <Card className="border border-deep-navy bg-white hover:border-deep-navy transition-all">
              <CardContent className="p- md:p-">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-deep-navy bg-deep-navy/[0.03] px-3 py-1.5 text-md font-medium text-deep-navy">
                  <Sparkles size={14} className="text-vibrant-teal" />
                  Zee: AI Copilot
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-vibrant-teal to-rich-purple shadow-lg">
                    <MessageSquare className="text-white" size={24} strokeWidth={1.75} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold leading-tight text-deep-navy md:text-3xl">
                      Navigate complexity with simplicity
                    </h3>
                  </div>
                </div>

                <p className="mt-4 max-w-3xl text-base leading-7 text-deep-navy">
                  Ask questions, surface analytics, and move across the platform instantly with an AI interface built for investment workflows.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    'Natural language queries',
                    'Instant analytics',
                    'Guided workflows',
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-deep-navy bg-deep-navy/[0.03] px-3 py-1.5 text-md text-deep-navy"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Right: CTA Card */}
            <Card className="border border-rich-purple/25 bg-gradient-to-br from-rich-purple/10 to-white">
              <CardContent className="flex h-full flex-col justify-between p- md:p-">
                <div>
                  <p className="text-md font-semibold uppercase tracking-[0.18em] text-deep-navy">
                    Explore Zeton
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-deep-navy md:text-3xl">
                    How the platform works?
                  </h3>
                  <p className="mt-3 text-md leading-6 text-deep-navy/65 md:text-base">
                    Explore portfolio design, market intelligence, execution workflows, and the AI interface in one unified experience.
                  </p>
                </div>

                <div className="mt-5">
                  <Link href="/zeton" className="inline-flex">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-rich-purple text-rich-purple hover:bg-rich-purple hover:text-white font-semibold px-7 py-5 text-base transition-all"
                    >
                      Explore the Platform
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};