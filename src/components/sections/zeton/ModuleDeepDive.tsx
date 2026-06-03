'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Target, Zap, Eye, MessageSquare, Check } from 'lucide-react';

const modules = [
  {
    id: 'z-scope',
    name: 'Z-Scope',
    tagline: 'Portfolio Intelligence',
    status: 'live',
    description:
      'Portfolio construction and optimization, backtesting, drift monitoring, and full re-optimization rebalancing, with plan review and approval, institutional risk analytics, and versioning for a complete audit trail.',
    icon: Target,
    accent: {
      text: 'text-vibrant-teal',
      border: 'border-vibrant-teal',
      bgSoft: 'bg-vibrant-teal/10',
    },
    features: [
      { title: 'Construction & optimization', description: 'Build and optimize portfolios, then backtest before deployment' },
      { title: 'Rebalancing with oversight', description: 'Full re-optimization rebalancing with plan review and approval' },
      { title: 'Institutional risk analytics', description: 'Sharpe, VaR, volatility, and max drawdown, with full versioning' },
    ],
  },
  {
    id: 'z-strike',
    name: 'Z-Strike',
    tagline: 'Execution Intelligence',
    status: 'live',
    description:
      'Broker-agnostic execution, live on Interactive Brokers, with order slicing, real-time fill monitoring, cost and slippage simulation, and full trade history.',
    icon: Zap,
    accent: {
      text: 'text-rich-purple',
      border: 'border-rich-purple',
      bgSoft: 'bg-rich-purple/10',
    },
    features: [
      { title: 'Broker-agnostic, live on IBKR', description: 'Order slicing with real-time fill monitoring and full trade history' },
      { title: 'Cost & slippage simulation', description: 'Model execution cost before you commit capital' },
      { title: 'VWAP, TWAP & ZWAP', description: 'Standard algorithms plus Aquon’s proprietary ZWAP' },
    ],
  },
  {
    id: 'z-sight',
    name: 'Z-Sight',
    tagline: 'Market Intelligence',
    status: 'in development',
    description:
      'News aggregation, sentiment, technical and fundamental analysis, and instrument-level research reports.',
    icon: Eye,
    accent: {
      text: 'text-gold',
      border: 'border-gold',
      bgSoft: 'bg-gold/10',
    },
    features: [
      { title: 'News & sentiment', description: 'Aggregated financial news with sentiment analysis' },
      { title: 'Technical & fundamental', description: 'Combined technical and fundamental analysis' },
      { title: 'Research reports', description: 'Instrument-level research at your fingertips' },
    ],
  },
  {
    id: 'zee',
    name: 'Zee',
    tagline: 'AI Copilot',
    status: 'in development',
    description:
      'A conversational assistant across the platform that explains, recommends, and pre-fills actions.',
    icon: MessageSquare,
    accent: {
      text: 'text-deep-navy',
      border: 'border-deep-navy',
      bgSoft: 'bg-deep-navy/10',
    },
    features: [
      { title: 'Explains', description: 'Answers questions about your portfolios and the platform' },
      { title: 'Recommends', description: 'Surfaces next-best actions in context' },
      { title: 'Pre-fills actions', description: 'Drafts the workflow so you just review and approve' },
    ],
  },
];

export const ModuleDeepDive = () => {
  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
            Five workflows. One platform.
          </h2>
          <p className="text-neutral-600 text-lg">
            Zeton is organized as intelligence domains, each owning a stage of the investment
            workflow, from construction through execution and oversight.
          </p>
        </motion.div>

        <div className="space-y-32">
          {modules.map((module, index) => {
            const IconComponent = module.icon;
            const isEven = index % 2 === 0;
            const isLive = module.status === 'live';

            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={[
                          'w-16 h-16 rounded-xl border-2 flex items-center justify-center',
                          module.accent.bgSoft,
                          module.accent.border,
                        ].join(' ')}
                      >
                        <IconComponent className={module.accent.text} size={32} strokeWidth={1.5} />
                      </div>

                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-4xl font-bold text-deep-navy">{module.name}</h3>
                          <span
                            className={[
                              'text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full border',
                              isLive
                                ? 'text-vibrant-teal border-vibrant-teal/40 bg-vibrant-teal/10'
                                : 'text-neutral-500 border-neutral-300 bg-neutral-100',
                            ].join(' ')}
                          >
                            {isLive ? 'Live' : 'In development'}
                          </span>
                        </div>
                        <p className={`${module.accent.text} font-semibold`}>{module.tagline}</p>
                      </div>
                    </div>

                    <p className="text-xl text-neutral-700 mb-8 leading-relaxed">{module.description}</p>

                    <div className="space-y-6">
                      {module.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <div
                            className={[
                              'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1',
                              module.accent.bgSoft,
                            ].join(' ')}
                          >
                            <Check className={`${module.accent.text} w-5 h-5`} strokeWidth={3} />
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-deep-navy mb-1">{feature.title}</h4>
                            <p className="text-neutral-600">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <Card className="bg-white border-neutral-200">
                      <CardContent className="p-4">
                        <div className="mx-auto max-w-sm">
                          <div className="aspect-square flex items-center justify-center">
                            <IconComponent
                              className={module.accent.text}
                              size={160}
                              strokeWidth={0.5}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Body footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mt-24 bg-white rounded-2xl p-8 border border-neutral-200"
        >
          <p className="text-neutral-700 leading-relaxed text-center">
            Multi-client capital management (ownership, injections and withdrawals, and a full
            capital-events ledger) and an optional market-neutral ETF short hedge are built in. The
            platform runs on a modular, containerized microservices architecture, is broker-agnostic
            by design, and is built on a multi-asset data model. Equities today, with the foundation
            already in place to extend to additional asset classes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
