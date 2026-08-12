'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { PieChart, Zap, Eye, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

/**
 * The four domains of the platform as one connected workflow, not four
 * paragraphs. Selectable stages, calm sequential motion (Zeton character:
 * smooth, soft easing). Purple throughout, differentiated by icon only. No
 * fabricated numbers, tickers or portfolio values — structure only.
 *
 * Reduced motion: selection still works, transitions are instant.
 */

interface Stage {
  icon: LucideIcon;
  label: string;
  line: string;
}

const stages: Stage[] = [
  {
    icon: PieChart,
    label: 'Construct',
    line: 'Construct and optimize portfolios, then backtest before deploying.',
  },
  {
    icon: Zap,
    label: 'Execute',
    line: 'Broker-agnostic execution, live on Interactive Brokers.',
  },
  {
    icon: Eye,
    label: 'Analyze',
    line: 'Market intelligence in the same workflow as the portfolios it affects.',
  },
  {
    icon: ShieldCheck,
    label: 'Oversee',
    line: 'An approval step and an audit trail under every decision.',
  },
];

interface Props {
  className?: string;
}

export const ZetonWorkflow = ({ className }: Props) => {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-label="Zeton workflow stages"
        className="flex flex-col sm:flex-row items-stretch gap-2"
      >
        {stages.map((stage, i) => {
          const Icon = stage.icon;
          const selected = i === active;
          return (
            <div key={stage.label} className="flex flex-1 items-center gap-2">
              <button
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(i)}
                className={cn(
                  'flex w-full flex-col items-center gap-2 rounded-2xl border-2 px-3 py-4 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rich-purple focus-visible:ring-offset-2',
                  selected
                    ? 'border-rich-purple bg-rich-purple text-white shadow-lg shadow-rich-purple/20'
                    : 'border-rich-purple/20 bg-white text-deep-navy hover:border-rich-purple/50'
                )}
              >
                <span
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-xl',
                    selected ? 'bg-white/15' : 'bg-rich-purple/10'
                  )}
                >
                  <Icon
                    className={selected ? 'text-white' : 'text-rich-purple'}
                    size={22}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </span>
                <span className="text-sm font-bold">{stage.label}</span>
              </button>
              {/* Flow connector between stages (not after the last) */}
              {i < stages.length - 1 && (
                <span aria-hidden="true" className="hidden sm:block text-rich-purple/40">
                  ›
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Reveal line for the selected stage */}
      <div className="mt-5 min-h-[3.5rem] rounded-xl bg-rich-purple/5 px-5 py-4">
        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 1 } : { opacity: 0, y: -6 }}
            transition={reduced ? { duration: 0 } : { duration: 0.4, ease: 'easeOut' }}
            className="text-body text-deep-navy"
          >
            <span className="font-semibold">{stages[active].label}.</span>{' '}
            {stages[active].line}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};
