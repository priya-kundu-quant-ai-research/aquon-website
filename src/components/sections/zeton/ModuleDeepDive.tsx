'use client';

import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Target, Zap, Eye, MessageSquare, Check } from 'lucide-react';

/**
 * Modules are differentiated by icon only: no per-module colour, no status
 * badges. Every module uses purple. Descriptions are verbatim from 02; the
 * feature bullets are the approved decompositions (no new claims; no
 * "live/today/already/available" in Z-Sight/Zee). Each module now also carries
 * an abstract diagram of its role — shape only, no fabricated data.
 */
const PURPLE = '#8B3FBF';

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

/* Abstract role diagrams — shape only, no fabricated data, numbers or tickers. */
function ModuleVisual({ id }: { id: string }) {
  if (id === 'z-studio') {
    // construct & optimize: candidates converging to an optimum
    return (
      <svg viewBox="0 0 200 140" aria-hidden="true" className="w-full max-w-xs">
        {[46, 32, 18].map((r, i) => (
          <circle key={i} cx={100} cy={70} r={r} fill="none" stroke={PURPLE} strokeOpacity={0.22 + i * 0.12} />
        ))}
        <circle cx={100} cy={70} r={5} fill={PURPLE} />
        {[[38, 28], [168, 44], [150, 120], [34, 112]].map(([x, y], i) => (
          <g key={i}>
            <line x1={x} y1={y} x2={100} y2={70} stroke={PURPLE} strokeOpacity={0.25} strokeDasharray="3 3" />
            <circle cx={x} cy={y} r={4} fill={PURPLE} fillOpacity={0.5} />
          </g>
        ))}
      </svg>
    );
  }
  if (id === 'z-strike') {
    // order sliced and routed to the broker
    return (
      <svg viewBox="0 0 200 140" aria-hidden="true" className="w-full max-w-xs">
        <rect x={70} y={8} width={60} height={22} rx={6} fill={PURPLE} fillOpacity={0.12} stroke={PURPLE} />
        <text x={100} y={23} textAnchor="middle" fontSize="10" fill={PURPLE} fontWeight="600">Order</text>
        {[52, 84, 116, 148].map((x, i) => (
          <g key={i}>
            <line x1={100} y1={30} x2={x} y2={60} stroke={PURPLE} strokeOpacity={0.4} />
            <rect x={x - 9} y={60} width={18} height={10} rx={2} fill={PURPLE} fillOpacity={0.4} />
            <line x1={x} y1={70} x2={100} y2={104} stroke={PURPLE} strokeOpacity={0.4} />
          </g>
        ))}
        <rect x={64} y={104} width={72} height={22} rx={6} fill={PURPLE} fillOpacity={0.12} stroke={PURPLE} />
        <text x={100} y={119} textAnchor="middle" fontSize="10" fill={PURPLE} fontWeight="600">Broker</text>
      </svg>
    );
  }
  if (id === 'z-sight') {
    // signals converging into research
    return (
      <svg viewBox="0 0 200 140" aria-hidden="true" className="w-full max-w-xs">
        {['News', 'Technical', 'Fundamental'].map((lbl, i) => {
          const y = 26 + i * 44;
          return (
            <g key={lbl}>
              <rect x={8} y={y - 11} width={84} height={22} rx={6} fill={PURPLE} fillOpacity={0.1} stroke={PURPLE} strokeOpacity={0.5} />
              <text x={50} y={y + 3} textAnchor="middle" fontSize="9" fill={PURPLE}>{lbl}</text>
              <line x1={92} y1={y} x2={146} y2={70} stroke={PURPLE} strokeOpacity={0.35} />
            </g>
          );
        })}
        <circle cx={162} cy={70} r={22} fill={PURPLE} fillOpacity={0.14} stroke={PURPLE} />
        <text x={162} y={73} textAnchor="middle" fontSize="8.5" fill={PURPLE} fontWeight="600">Research</text>
      </svg>
    );
  }
  // zee: a conversational layer over the workflow panels
  return (
    <svg viewBox="0 0 200 140" aria-hidden="true" className="w-full max-w-xs">
      {[[18, 16], [112, 16], [18, 82], [112, 82]].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width={70} height={42} rx={6} fill="none" stroke={PURPLE} strokeOpacity={0.3} />
      ))}
      <rect x={58} y={48} width={84} height={44} rx={12} fill={PURPLE} fillOpacity={0.9} />
      {[80, 100, 120].map((cx) => (
        <circle key={cx} cx={cx} cy={70} r={3.5} fill="#fff" />
      ))}
    </svg>
  );
}

export const ModuleDeepDive = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <Tabs defaultValue="z-studio">
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

            {modules.map((m) => {
              const Icon = m.icon;
              return (
                <TabsContent key={m.id} value={m.id} className="outline-none">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm">
                    {/* Left: header, description, bullets */}
                    <div>
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

                    {/* Right: abstract role diagram */}
                    <div className="flex items-center justify-center rounded-2xl bg-rich-purple/[0.04] border border-rich-purple/10 p-6">
                      <ModuleVisual id={m.id} />
                    </div>
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
