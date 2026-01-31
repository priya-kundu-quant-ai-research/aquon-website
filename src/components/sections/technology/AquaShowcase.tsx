'use client';

import { motion } from 'framer-motion';
import {
  Sparkles,
  Workflow,
  Globe,
  ArrowRight,
  Zap,
  Code2,
  SlidersHorizontal,
} from 'lucide-react';

const flowNodes = [
  { title: 'Human Intent', sub: 'Goals & constraints', icon: SlidersHorizontal },
  { title: 'AQUA Model', sub: 'First-class objects', icon: Sparkles },
  { title: 'Compiler', sub: 'Transforms & optimizes', icon: Workflow },
  { title: 'Fast Code', sub: 'Deploy anywhere', icon: Code2 },
];

function FlowDiagram() {
  return (
    <div className="relative mx-auto max-w-5xl mt-10 mb-12">
      <div className="absolute inset-0 blur-2xl opacity-30">
        <div className="h-full w-full bg-gradient-to-r from-vibrant-teal/30 via-white/10 to-vibrant-teal/30 rounded-3xl" />
      </div>

      <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8">
        <div className="flex items-center justify-between gap-3 md:gap-6 flex-wrap md:flex-nowrap">
          {flowNodes.map((n, idx) => {
            const Icon = n.icon;
            return (
              <div key={n.title} className="flex items-center gap-3 md:gap-4 flex-1 min-w-[240px]">
                <div className="relative">
                  <div className="absolute inset-0 blur-xl bg-vibrant-teal/30 rounded-2xl" />
                  <div className="relative w-12 h-12 rounded-2xl bg-vibrant-teal/15 border border-vibrant-teal/30 flex items-center justify-center">
                    <Icon className="text-vibrant-teal" size={22} strokeWidth={1.6} />
                  </div>
                </div>

                <div className="leading-tight">
                  <div className="text-white font-semibold">{n.title}</div>
                  <div className="text-white/65 text-sm">{n.sub}</div>
                </div>

                {idx < flowNodes.length - 1 && (
                  <div className="hidden md:flex flex-1 justify-end pr-2">
                    <ArrowRight className="text-white/25" size={18} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* thin animated “current” line */}
        <motion.div
          className="mt-6 h-[2px] w-full rounded-full bg-gradient-to-r from-transparent via-vibrant-teal/60 to-transparent"
          animate={{ opacity: [0.35, 0.8, 0.35] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-white/70 text-sm">
          <span className="inline-flex items-center gap-2">
            <Zap className="text-vibrant-teal" size={16} strokeWidth={1.7} />
            Bridge human intent → machine execution
          </span>
        </div>
      </div>
    </div>
  );
}

export const AquaShowcase = () => {
  return (
    <section className="py-20 bg-deep-navy relative overflow-hidden">
      {/* animated dot grid */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 50%, rgba(29, 191, 191, 0.35) 1px, transparent 1px)',
            backgroundSize: '54px 54px',
          }}
          animate={{ backgroundPosition: ['0px 0px', '54px 54px'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-vibrant-teal text-sm uppercase tracking-widest mb-4">
            Introducing AQUA
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            The Universal Language of Optimization.
          </h2>

          {/* turned big paragraph into 2 shorter lines + emphasis pill */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              A purpose-built DSL where optimization models are{' '}
              <span className="text-white font-semibold">first-class objects</span>.
            </p>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mt-2">
              Like water: flexible in form, consistent in essence—flowing across any industry challenge.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-vibrant-teal/30 bg-vibrant-teal/10 px-4 py-2 text-white/80 text-sm">
              <span className="w-2 h-2 rounded-full bg-vibrant-teal" />
              Model → Transform → Generate → Deploy
            </div>
          </div>
        </motion.div>

        {/* Visual flow diagram */}
        <FlowDiagram />

        {/* Footer line: tighter + more “visual” */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.55 }}
          className="max-w-4xl mx-auto mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-4">
            {/* <Zap className="text-vibrant-teal" size={18} strokeWidth={1.7} /> */}
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              AQUA enables the compiler to <span className="text-white font-semibold">reason</span>,{' '}
              <span className="text-white font-semibold">transform</span>, and{' '}
              <span className="text-white font-semibold">generate</span> code — faster while leave less carbon footprint.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
