'use client';

import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Target, Zap, Eye, MessageSquare, Check } from 'lucide-react';

/**
 * Modules are differentiated by icon only (§4.3): no per-module colour, no
 * status badges. Every module uses purple — purple is Zeton's. Descriptions are
 * verbatim from 02; the feature bullets are the approved decompositions of those
 * paragraphs (no new claims; no "live/today/already/available" in Z-Sight/Zee).
 */
const modules = [
  {
    id: 'z-studio',
    name: 'Z-Studio',
    tagline: 'Portfolio intelligence',
    description:
      'Construct and optimize portfolios, backtest before deploying, rebalance with full re-optimization and an approval step, with institutional risk analytics and versioning throughout.',
    icon: Target,
    features: [
      { title: 'Construct and optimize', description: 'Construct and optimize portfolios, and backtest before deploying.' },
      { title: 'Rebalance with oversight', description: 'Rebalance with full re-optimization and an approval step.' },
      { title: 'Risk analytics and versioning', description: 'Institutional risk analytics and versioning throughout.' },
    ],
  },
  {
    id: 'z-strike',
    name: 'Z-Strike',
    tagline: 'Execution intelligence',
    description:
      'Broker-agnostic execution, live on Interactive Brokers, with order slicing, real-time fill monitoring, cost and slippage simulation, and complete trade history.',
    icon: Zap,
    features: [
      { title: 'Broker-agnostic, live on IBKR', description: 'Broker-agnostic execution, live on Interactive Brokers.' },
      { title: 'Order slicing and fill monitoring', description: 'Order slicing with real-time fill monitoring.' },
      { title: 'Cost simulation and trade history', description: 'Cost and slippage simulation, and complete trade history.' },
    ],
  },
  {
    id: 'z-sight',
    name: 'Z-Sight',
    tagline: 'Market intelligence',
    description:
      'News aggregation and sentiment, technical and fundamental analysis, and instrument-level research reports, in the same workflow as the portfolios they affect.',
    icon: Eye,
    features: [
      { title: 'News and sentiment', description: 'News aggregation and sentiment.' },
      { title: 'Technical and fundamental analysis', description: 'Technical and fundamental analysis.' },
      { title: 'Research in-workflow', description: 'Instrument-level research reports, in the same workflow as the portfolios they affect.' },
    ],
  },
  {
    id: 'zee',
    name: 'Zee',
    tagline: 'AI copilot',
    description:
      'A conversational layer across the platform that explains what it sees, recommends next actions, and pre-fills the workflow so you review rather than assemble.',
    icon: MessageSquare,
    features: [
      { title: 'Explains', description: 'A conversational layer that explains what it sees across the platform.' },
      { title: 'Recommends', description: 'Recommends next actions.' },
      { title: 'Pre-fills', description: 'Pre-fills the workflow so you review rather than assemble.' },
    ],
  },
];

export const ModuleDeepDive = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 max-w-3xl mx-auto"
        >
          <h2 className="text-heading-1 text-deep-navy mb-4">Four workflows. One platform.</h2>
          <p className="text-body-l text-neutral-600">
            Zeton is organized as intelligence domains, each owning a stage of the investment
            workflow.
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
          <Tabs defaultValue="z-studio">
            {/* Tab list */}
            <TabsList className="flex h-auto w-full flex-wrap justify-center gap-2 bg-transparent p-0 mb-8">
              {modules.map((m) => {
                const Icon = m.icon;
                return (
                  <TabsTrigger
                    key={m.id}
                    value={m.id}
                    className={[
                      'flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold',
                      'data-[state=active]:bg-white data-[state=active]:border-rich-purple data-[state=active]:text-deep-navy data-[state=active]:shadow-md',
                      'data-[state=inactive]:bg-white/60 data-[state=inactive]:border-neutral-200 data-[state=inactive]:text-neutral-500',
                      'hover:bg-white hover:border-neutral-300 transition-all',
                    ].join(' ')}
                  >
                    <Icon size={16} strokeWidth={1.8} className="text-rich-purple" />
                    {m.name}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {/* Tab panels */}
            {modules.map((m) => {
              const Icon = m.icon;
              return (
                <TabsContent key={m.id} value={m.id} className="outline-none">
                  <div className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm">
                    {/* Module header */}
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 rounded-xl border-2 flex items-center justify-center flex-shrink-0 bg-rich-purple/10 border-rich-purple">
                        <Icon className="text-rich-purple" size={28} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-heading-2 text-deep-navy">{m.name}</h3>
                        <p className="text-rich-purple font-semibold text-sm">{m.tagline}</p>
                      </div>
                    </div>

                    <p className="text-body text-neutral-700 leading-relaxed mb-6">{m.description}</p>

                    <ul className="space-y-4">
                      {m.features.map((f) => (
                        <li key={f.title} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5 bg-rich-purple/10">
                            <Check className="text-rich-purple w-4 h-4" strokeWidth={3} />
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
      </div>
    </section>
  );
};
