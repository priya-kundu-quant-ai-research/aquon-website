'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { DollarSign, Heart, Truck, Wind, Brain, Shield } from 'lucide-react';

const industries = [
  {
    id: 'finance',
    icon: DollarSign,
    title: 'Finance',
    headline: 'Portfolio Optimization',
    focus:
      'Capital markets portfolio construction using Markowitz’s Efficient Frontier balances expected return against risk under real-world constraints, aiming to maximize return for a given risk or minimize risk for a target return — forming the foundation of modern portfolio optimization.',
    accent: '#14B8A6',
    iconColor: 'text-vibrant-teal',
    tint: 'from-vibrant-teal/18 to-vibrant-teal/5',
  },
  {
    id: 'healthcare',
    icon: Heart,
    title: 'Healthcare',
    headline: 'Resource Allocation in Crisis',
    focus:
      'Allocating scarce resources such as beds, staff, ventilators, and routing during crises requires constraint-aware optimization and rapid re-planning, prioritizing feasibility by meeting hard capacity and triage constraints while minimizing harm, delays, and system bottlenecks.',
    accent: '#EF4444',
    iconColor: 'text-red-500',
    tint: 'from-red-500/18 to-red-500/5',
  },
  {
    id: 'logistics',
    icon: Truck,
    title: 'Logistics',
    headline: 'Supply Chain Optimization',
    focus:
      'End-to-end routing, inventory, and distribution rely on transportation models as the structural backbone, while metaheuristics such as ant-colony approaches rapidly explore near-optimal routes when network complexity causes the solution space to expand dramatically.',
    accent: '#F97316',
    iconColor: 'text-orange-500',
    tint: 'from-orange-500/18 to-orange-500/5',
  },
  {
    id: 'energy',
    icon: Wind,
    title: 'Energy',
    headline: 'Grid & Generation Scheduling',
    focus:
      'Power generation planning and load balancing use linear programming and unit commitment to optimize cost, reliability, and demand response, with the central challenge being decisions about which generators operate over time while respecting ramp rates, reserve requirements, and fluctuating demand.',
    accent: '#22C55E',
    iconColor: 'text-green-500',
    tint: 'from-green-500/18 to-green-500/5',
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'AI/ML',
    headline: 'Training & Compute Allocation',
    focus:
      'Model training efficiency depends on gradient descent as a continuous optimization loop, where smarter step sizing, batching strategies, and resource-aware compute allocation significantly reduce training time and increase overall system throughput.',
    accent: '#3B82F6',
    iconColor: 'text-blue-500',
    tint: 'from-blue-500/18 to-blue-500/5',
  },
  {
    id: 'defense',
    icon: Shield,
    title: 'Defense',
    headline: 'Trajectory & Interception',
    focus:
      'Missile interception trajectory optimization selects feasible paths under strict timing, uncertainty, and safety constraints, treating the challenge primarily as a physics-bound feasibility problem where latency and reliability matter more than marginal objective improvements.',
    accent: '#A855F7',
    iconColor: 'text-purple-500',
    tint: 'from-purple-500/18 to-purple-500/5',
  },
];

export const TheHorizon = () => {
  const [selected, setSelected] = useState<string>('finance');

  const active = useMemo(
    () => industries.find((i) => i.id === selected) ?? industries[0],
    [selected]
  );

  return (
    <section className="relative bg-white overflow-hidden pt-10 md:pt-12 pb-4 md:pb-20">
      {/* soft background polish */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[360px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-vibrant-teal/15 via-rich-purple/10 to-vibrant-teal/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-rich-purple/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-vibrant-teal/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative flex flex-col">
        {/* Header (kept compact so everything fits in-viewport) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center"
        >
          <p className="text-vibrant-teal text-xs md:text-sm uppercase tracking-widest mt-12 mb-3">
            The Future of Optimization
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-deep-navy mb-3 md:mb-4">
            Finance is Just the Beginning.
          </h2>
          <p className="text-base md:text-xl text-neutral-600 max-w-3xl mx-auto">
            The principles that make ZETON revolutionary are universal.
          </p>
        </motion.div>

        {/* 3-panel layout: left column = two halves, right column = one tall panel */}
        <div className="mt-6 md:mt-8 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-6 items-stretch">
          {/* LEFT: two stacked halves */}
          <div className="min-h-0 flex flex-col gap-6 h-full">
            {/* Left top: industry list */}
            <div className="min-h-0 rounded-3xl border border-neutral-200/70 bg-white/70 backdrop-blur-sm shadow-[0_18px_60px_rgba(2,6,23,0.08)] overflow-hidden">
              <div className="p-4 md:p-5 border-b border-neutral-200/60">
                <div className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                  Industries
                </div>
                <div className="mt-2 text-sm text-neutral-600">
                  Select an industry to see the focus area.
                </div>
              </div>

              <div className="p-4 md:p-5 min-h-0">
                <div className="grid grid-cols-2 gap-2">
                  {industries.map((ind) => {
                    const Icon = ind.icon;
                    const isActive = ind.id === selected;

                    return (
                      <button
                        key={ind.id}
                        type="button"
                        onClick={() => setSelected(ind.id)}
                        className={[
                          'group relative flex items-center gap-3 rounded-2xl px-3 py-3 border text-left transition-all',
                          'bg-white/60 hover:bg-white/80',
                          isActive
                            ? 'border-vibrant-teal/45 shadow-[0_10px_30px_rgba(29,191,191,0.10)]'
                            : 'border-neutral-200/70',
                        ].join(' ')}
                      >
                        <span
                          className="h-10 w-10 rounded-xl flex items-center justify-center border"
                          style={{
                            background: `linear-gradient(135deg, ${ind.accent}18, rgba(255,255,255,0.75))`,
                            borderColor: `${ind.accent}33`,
                          }}
                        >
                          <Icon className={ind.iconColor} size={18} strokeWidth={1.8} />
                        </span>

                        <div className="min-w-0">
                          <div className="font-semibold text-deep-navy truncate">
                            {ind.title}
                          </div>
                          <div className="text-xs text-neutral-500 truncate">
                            {ind.headline}
                          </div>
                        </div>

                        {isActive && (
                          <span className="absolute -right-2 -top-2 h-5 w-5 rounded-full bg-vibrant-teal text-white text-[10px] flex items-center justify-center shadow">
                            ✓
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: focus area panel (tall) */}
          <div className="min-h-0 rounded-3xl border border-neutral-200/70 bg-white/70 backdrop-blur-sm shadow-[0_18px_60px_rgba(2,6,23,0.08)] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col"
              >
                {/* Header */}
                <div
                  className="p-5 md:p-6 border-b border-neutral-200/60"
                  style={{
                    background: `linear-gradient(135deg, ${active.accent}14, rgba(255,255,255,0.7))`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="h-12 w-12 rounded-2xl flex items-center justify-center border"
                      style={{
                        background: `linear-gradient(135deg, ${active.accent}22, rgba(255,255,255,0.6))`,
                        borderColor: `${active.accent}33`,
                      }}
                    >
                      <active.icon className={active.iconColor} size={22} strokeWidth={1.6} />
                    </div>

                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                        Focus area
                      </div>
                      <h3 className="mt-1 text-2xl md:text-3xl font-extrabold text-deep-navy">
                        {active.headline}
                      </h3>
                      <div className="mt-1 text-sm md:text-base text-neutral-600">
                        {active.title}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 md:p-6">
                  <p className="text-neutral-700 leading-relaxed text-base md:text-lg">
                    {active.focus}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Closing statement — stays in the same viewport */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="text-center text-lg md:text-2xl font-semibold text-deep-navy mt-6 md:mt-8 max-w-5xl mx-auto"
        >
          Wherever there's a complex optimization problem, AQUA can solve it faster, more
          efficiently, and more reliably than anything that came before.
        </motion.p>
      </div>
    </section>
  );
};
