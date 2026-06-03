'use client';

import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
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
      { title: 'Construction and optimization', description: 'Build and optimize portfolios, then backtest before deployment' },
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
      { title: 'Cost and slippage simulation', description: 'Model execution cost before you commit capital' },
      { title: 'VWAP, TWAP, and ZWAP', description: "Standard algorithms plus Aquon's proprietary ZWAP" },
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
      { title: 'News and sentiment', description: 'Aggregated financial news with sentiment analysis' },
      { title: 'Technical and fundamental', description: 'Combined technical and fundamental analysis' },
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
          className="text-center mb-10 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
            Five workflows. One platform.
          </h2>
          <p className="text-neutral-600 text-lg">
            Zeton is organized as intelligence domains, each owning a stage of the investment
            workflow from construction through execution and oversight.
          </p>
        </motion.div>

        {/* Tabbed stage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <Tabs defaultValue="z-scope">
            {/* Tab list */}
            <TabsList className="flex h-auto w-full flex-wrap justify-center gap-2 bg-transparent p-0 mb-8">
              {modules.map((m) => {
                const Icon = m.icon;
                const isLive = m.status === 'live';
                return (
                  <TabsTrigger
                    key={m.id}
                    value={m.id}
                    className={[
                      'flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold',
                      'data-[state=active]:bg-white data-[state=active]:border-vibrant-teal data-[state=active]:text-deep-navy data-[state=active]:shadow-md',
                      'data-[state=inactive]:bg-white/60 data-[state=inactive]:border-neutral-200 data-[state=inactive]:text-neutral-500',
                      'hover:bg-white hover:border-neutral-300 transition-all',
                    ].join(' ')}
                  >
                    <Icon size={16} strokeWidth={1.8} className={m.accent.text} />
                    {m.name}
                    <span
                      className={[
                        'hidden sm:inline-flex text-[10px] uppercase tracking-wide font-semibold px-1.5 py-0.5 rounded-full border',
                        isLive
                          ? 'text-vibrant-teal border-vibrant-teal/40 bg-vibrant-teal/10'
                          : 'text-neutral-400 border-neutral-300 bg-neutral-100',
                      ].join(' ')}
                    >
                      {isLive ? 'Live' : 'Dev'}
                    </span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {/* Tab panels */}
            {modules.map((m) => {
              const Icon = m.icon;
              const isLive = m.status === 'live';
              return (
                <TabsContent key={m.id} value={m.id} className="outline-none">
                  <div className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm">
                    {/* Module header */}
                    <div className="flex items-center gap-4 mb-5">
                      <div className={`w-14 h-14 rounded-xl border-2 flex items-center justify-center flex-shrink-0 ${m.accent.bgSoft} ${m.accent.border}`}>
                        <Icon className={m.accent.text} size={28} strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-2xl font-bold text-deep-navy">{m.name}</h3>
                          <span className={[
                            'text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full border',
                            isLive
                              ? 'text-vibrant-teal border-vibrant-teal/40 bg-vibrant-teal/10'
                              : 'text-neutral-500 border-neutral-300 bg-neutral-100',
                          ].join(' ')}>
                            {isLive ? 'Live' : 'In development'}
                          </span>
                        </div>
                        <p className={`${m.accent.text} font-semibold text-sm`}>{m.tagline}</p>
                      </div>
                    </div>

                    <p className="text-neutral-700 text-base leading-relaxed mb-6">{m.description}</p>

                    <ul className="space-y-4">
                      {m.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5 ${m.accent.bgSoft}`}>
                            <Check className={`${m.accent.text} w-4 h-4`} strokeWidth={3} />
                          </div>
                          <div>
                            <span className="font-semibold text-deep-navy text-sm">{f.title}: </span>
                            <span className="text-neutral-600 text-sm">{f.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </motion.div>

        {/* Body footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl p-8 border border-neutral-200"
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
