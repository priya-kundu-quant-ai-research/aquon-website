'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Clock, Hand, Eye } from 'lucide-react';
import { SectionReveal } from '@/components/core/SectionReveal';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

/**
 * "Three things have to be true at once" as three linked states, not three
 * paragraphs. Inspectability is the hardest to show and the most valuable, so it
 * gets a readable trace: operation → chosen path → reason. The trace is
 * structural (paths and reasons), never fabricated performance data — no
 * timings, no speedups. Aqua character: fast, snapping transitions.
 */

type Truth = { icon: LucideIcon; label: string; lead: string; body: string };
const truths: Truth[] = [
  {
    icon: Clock,
    label: 'Decides at runtime',
    lead: 'It decides at runtime.',
    body: 'The machine is discovered when the program starts, not assumed when the code was written.',
  },
  {
    icon: Hand,
    label: 'Asks nothing',
    lead: 'It asks nothing of the caller.',
    body: "No flags, no tuning, no hardware-specific branches in anyone's code.",
  },
  {
    icon: Eye,
    label: 'Stays inspectable',
    lead: 'It stays inspectable.',
    body: 'Every routing decision can be read back: which operation took which path, and why. In a regulated workflow, a faster answer you cannot explain is not an improvement.',
  },
];

const trace = [
  { op: 'solve()', path: 'cache-blocked', reason: 'working set exceeds cache' },
  { op: 'covariance()', path: 'wide vectorization', reason: 'vector unit present' },
  { op: 'rebalance()', path: 'conservative threads', reason: 'few cores detected' },
];

function Visual({ index }: { index: number }) {
  if (index === 0) {
    // Runtime: assumption at write-time gives way to discovery at start-time.
    return (
      <div className="space-y-3">
        <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white px-4 py-3 opacity-50">
          <span className="text-caption font-semibold text-neutral-400 line-through">When the code was written</span>
          <span className="text-caption text-neutral-400">machine assumed</span>
        </div>
        <div className="flex items-center gap-3 rounded-lg border-2 border-vibrant-teal bg-vibrant-teal/10 px-4 py-3">
          <span className="text-caption font-semibold text-deep-navy">When the program starts</span>
          <span className="text-caption text-deep-navy">machine discovered</span>
        </div>
      </div>
    );
  }
  if (index === 1) {
    // Nothing asked of the caller.
    return (
      <div className="rounded-lg border border-neutral-200 bg-deep-navy px-4 py-4">
        <code className="block font-mono text-sm text-vibrant-teal">result = solve(problem)</code>
        <div className="mt-3 flex flex-wrap gap-2">
          {['no flags', 'no tuning', 'no hardware branches'].map((t) => (
            <span key={t} className="rounded-md bg-white/10 px-2 py-0.5 font-mono text-[11px] text-white/80">
              {t}
            </span>
          ))}
        </div>
      </div>
    );
  }
  // Inspectable: a readable trace.
  return (
    <div className="rounded-lg border border-neutral-200 bg-deep-navy overflow-hidden">
      <div className="grid grid-cols-[auto_1fr_1fr] gap-x-4 px-4 py-2 border-b border-white/10 font-mono text-[11px] uppercase tracking-wide text-white/40">
        <span>operation</span>
        <span>path</span>
        <span>reason</span>
      </div>
      <div className="divide-y divide-white/5">
        {trace.map((row) => (
          <div key={row.op} className="grid grid-cols-[auto_1fr_1fr] gap-x-4 px-4 py-2 font-mono text-xs">
            <span className="text-white/80">{row.op}</span>
            <span className="text-vibrant-teal">{row.path}</span>
            <span className="text-white/50">{row.reason}</span>
          </div>
        ))}
      </div>
      <p className="px-4 py-2 text-[10px] italic text-white/35">Illustrative trace. Structure, not measured timings.</p>
    </div>
  );
}

export const AquaNovelty = () => {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        <SectionReveal className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-heading-1 text-deep-navy">Three things have to be true at once.</h2>
        </SectionReveal>

        <SectionReveal className="max-w-4xl mx-auto">
          {/* State selector */}
          <div role="tablist" aria-label="Aqua properties" className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6">
            {truths.map((t, i) => {
              const Icon = t.icon;
              const selected = i === active;
              return (
                <button
                  key={t.label}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(i)}
                  className={cn(
                    'flex items-center gap-2 rounded-xl border-2 px-4 py-3 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vibrant-teal focus-visible:ring-offset-2',
                    selected ? 'border-vibrant-teal bg-white shadow-sm' : 'border-transparent bg-white/60 hover:bg-white'
                  )}
                >
                  <Icon className={selected ? 'text-vibrant-teal' : 'text-neutral-400'} size={18} strokeWidth={1.8} aria-hidden="true" />
                  <span className={cn('text-sm font-semibold', selected ? 'text-deep-navy' : 'text-neutral-500')}>
                    {t.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active state */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center rounded-2xl border border-neutral-200 bg-white p-6 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduced ? { opacity: 1 } : { opacity: 0, x: -8 }}
                transition={reduced ? { duration: 0 } : { duration: 0.22, ease: [0.65, 0, 0.35, 1] }}
              >
                <h3 className="text-heading-3 text-deep-navy mb-2">{truths[active].lead}</h3>
                <p className="text-body text-neutral-600">{truths[active].body}</p>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={`v-${active}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduced ? { opacity: 1 } : { opacity: 0 }}
                transition={reduced ? { duration: 0 } : { duration: 0.22 }}
              >
                <Visual index={active} />
              </motion.div>
            </AnimatePresence>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1} className="max-w-3xl mx-auto text-center mt-10">
          <p className="text-body-l text-neutral-600 mx-auto prose-measure">
            Aqua also carries a declarative layer: you state what to optimize and the constraints it
            must respect, rather than how to compute it. That is the surface our patent application
            covers.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
};
