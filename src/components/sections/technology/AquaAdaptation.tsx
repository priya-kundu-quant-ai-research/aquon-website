'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionReveal } from '@/components/core/SectionReveal';
import { HardwareRouting, machines, type MachineId } from '@/components/visuals/HardwareRouting';
import { cn } from '@/lib/utils';

/**
 * "One engine, many machines" — the page's strongest visual. The hardware toggle
 * (profile bars) and the routing diagram are folded into one interaction: pick a
 * machine, Aqua profiles it (the bars), and a real decision happens at the
 * routing step (the flow re-routes). One selector drives both.
 *
 * The bars are illustrative relative values, not benchmark data (noted on the
 * page). No timing or speedup is attached to any route.
 */

// Qualitative profile only — no invented percentages or axis (§1.3). What Aqua
// reads is described the way the machine itself is described.
type Profile = { attrs: { name: string; value: string }[]; note: string };
const profiles: Record<MachineId, Profile> = {
  cloud: {
    attrs: [
      { name: 'Cores', value: 'Few' },
      { name: 'Cache', value: 'Small' },
      { name: 'Memory', value: 'Limited' },
    ],
    note: 'Aqua detects constrained resources and selects a conservative parallel strategy.',
  },
  workstation: {
    attrs: [
      { name: 'Cores', value: 'Many' },
      { name: 'Cache', value: 'Large' },
      { name: 'Memory', value: 'Ample' },
    ],
    note: 'Aqua detects high-core availability and scales aggressively, with no config needed.',
  },
};

export const AquaAdaptation = () => {
  const reduced = useReducedMotion();
  const [machineId, setMachineId] = useState<MachineId>('cloud');
  const profile = profiles[machineId];

  return (
    <section className="py-20 md:py-28 bg-light-gray">
      <div className="container mx-auto px-6">
        <SectionReveal className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-eyebrow uppercase text-teal-text mb-3">One engine, many machines</p>
          <h2 className="font-display text-heading-1 text-navy mb-5">
            The same code, a different route on every machine.
          </h2>
          <p className="text-body-l text-gray-text mx-auto prose-measure">
            Aqua profiles the hardware when it starts, classifies what it is working with, and routes
            each operation to the strategy that machine can run fastest. Pick a machine and watch the
            route change. The caller never writes a line of configuration.
          </p>
        </SectionReveal>

        {/* Unified selector */}
        <SectionReveal className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8" role="group" aria-label="Choose a machine">
            {machines.map((m) => {
              const selected = m.id === machineId;
              return (
                <button
                  key={m.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setMachineId(m.id)}
                  className={cn(
                    'rounded-xl border-2 px-4 py-3 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2',
                    selected ? 'border-teal-text bg-teal/10' : 'border-navy/10 bg-white hover:border-navy/25'
                  )}
                >
                  <span className="block text-sm font-bold text-navy">{m.name}</span>
                  <span className="block text-caption text-gray-text">{m.sub}</span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Profile: what Aqua sees (qualitative, no invented numbers) */}
            <div className="rounded-xl border border-navy/10 bg-white p-6">
              <p className="text-eyebrow uppercase text-gray-text mb-4">Aqua profiles the machine</p>
              <div className="space-y-2.5">
                {profile.attrs.map((attr) => (
                  <div
                    key={attr.name}
                    className="flex items-center justify-between rounded-lg bg-white px-4 py-2.5 border border-navy/10"
                  >
                    <span className="text-sm text-gray-text">{attr.name}</span>
                    <motion.span
                      key={`${machineId}-${attr.name}`}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={reduced ? { duration: 0 } : { duration: 0.3, ease: 'easeOut' }}
                      className="rounded-md bg-teal/15 px-2.5 py-0.5 text-sm font-semibold text-navy"
                    >
                      {attr.value}
                    </motion.span>
                  </div>
                ))}
              </div>
              <p className="text-caption text-gray-text italic mt-4">{profile.note}</p>
            </div>

            {/* Route: the decision */}
            <div className="rounded-xl border border-navy/10 bg-white p-6">
              <p className="text-eyebrow uppercase text-gray-text mb-4">and routes the work</p>
              <HardwareRouting
                detailed
                value={machineId}
                onValueChange={setMachineId}
                showSelector={false}
              />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
