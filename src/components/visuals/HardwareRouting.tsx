'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * The whole product in one clean interaction: the same code takes a different
 * route on a different machine, with nothing configured by the caller. "Your
 * code" and "Aqua" never change; only the route on the right, chosen by Aqua,
 * swaps when you switch machines.
 *
 * Honest by construction: machines are qualitative (no invented spec sheets)
 * and no route carries a timing or a speedup — none of those numbers are on the
 * claims list. Keyboard operable; reduced motion swaps instantly; an aria-live
 * line states the route in text so nothing depends on the diagram.
 */

type MachineId = 'cloud' | 'workstation';

const machines: { id: MachineId; name: string; sub: string; routes: string[] }[] = [
  {
    id: 'cloud',
    name: 'Constrained cloud',
    sub: 'fewer cores, less cache',
    routes: ['Conservative parallelism', 'Cache-blocked kernels'],
  },
  {
    id: 'workstation',
    name: 'High-core workstation',
    sub: 'many cores, large cache',
    routes: ['Aggressive parallelism', 'Wide vectorization'],
  },
];

function Node({ title, sub, tone = 'plain' }: { title: string; sub: string; tone?: 'plain' | 'aqua' }) {
  return (
    <div
      className={cn(
        'rounded-xl border-2 px-4 py-2.5 text-center',
        tone === 'aqua' ? 'border-vibrant-teal bg-vibrant-teal/10' : 'border-neutral-200 bg-white'
      )}
    >
      <div className="text-sm font-bold text-deep-navy">{title}</div>
      <div className="text-caption text-neutral-500">{sub}</div>
    </div>
  );
}

interface Props {
  className?: string;
  detailed?: boolean;
}

export const HardwareRouting = ({ className, detailed = false }: Props) => {
  const reduced = useReducedMotion();
  const [machineId, setMachineId] = useState<MachineId>('cloud');
  const machine = machines.find((m) => m.id === machineId)!;

  return (
    <div className={className}>
      {/* Machine selector */}
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3" role="group" aria-label="Choose a machine">
        {machines.map((m) => {
          const selected = m.id === machineId;
          return (
            <button
              key={m.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setMachineId(m.id)}
              className={cn(
                'rounded-xl border-2 px-4 py-3 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vibrant-teal focus-visible:ring-offset-2',
                selected ? 'border-vibrant-teal bg-vibrant-teal/10' : 'border-neutral-200 bg-white hover:border-neutral-300'
              )}
            >
              <span className="block text-sm font-bold text-deep-navy">{m.name}</span>
              <span className="block text-caption text-neutral-500">{m.sub}</span>
            </button>
          );
        })}
      </div>

      {/* Clean flow: code -> Aqua -> the route for this machine */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3" aria-hidden="true">
        <Node title="Your code" sub="unchanged" />
        <ArrowRight className="mx-auto h-4 w-4 rotate-90 sm:rotate-0 text-neutral-300" />
        <Node title="Aqua" sub={detailed ? 'profiles · classifies · routes' : 'profiles the machine'} tone="aqua" />
        <ArrowRight className="mx-auto h-4 w-4 rotate-90 sm:rotate-0 text-vibrant-teal" />
        <div className="flex-1 space-y-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={machineId}
              initial={reduced ? false : { opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduced ? { opacity: 1 } : { opacity: 0, x: -8 }}
              transition={reduced ? { duration: 0 } : { duration: 0.28, ease: [0.65, 0, 0.35, 1] }}
              className="space-y-2"
            >
              {machine.routes.map((r) => (
                <div
                  key={r}
                  className="rounded-xl border-2 border-vibrant-teal bg-vibrant-teal/10 px-4 py-2.5 text-sm font-semibold text-deep-navy"
                >
                  {r}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Text equivalent + the load-bearing point */}
      <p aria-live="polite" className="mt-5 text-body text-neutral-600">
        On a <span className="font-semibold text-deep-navy">{machine.name.toLowerCase()}</span>, Aqua
        routes to {machine.routes[0].toLowerCase()} and {machine.routes[1].toLowerCase()}.
      </p>
      <p className="mt-1 text-caption text-neutral-500">
        Nothing is configured by the caller. Your code never changes; Aqua re-routes underneath.
      </p>
    </div>
  );
};
