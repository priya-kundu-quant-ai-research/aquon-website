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
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionReveal className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-eyebrow uppercase text-vibrant-teal mb-3">One engine, many machines</p>
          <h2 className="text-heading-1 text-deep-navy mb-5">
            The same code, a different route on every machine.
          </h2>
          <p className="text-body-l text-neutral-600 mx-auto prose-measure">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Profile: what Aqua sees (qualitative, no invented numbers) */}
            <div className="rounded-2xl border border-neutral-200 bg-light-gray/40 p-6">
              <p className="text-eyebrow uppercase text-neutral-500 mb-4">Aqua profiles the machine</p>
              <div className="space-y-2.5">
                {profile.attrs.map((attr) => (
                  <div
                    key={attr.name}
                    className="flex items-center justify-between rounded-lg bg-white px-4 py-2.5 border border-neutral-200"
                  >
                    <span className="text-sm text-neutral-600">{attr.name}</span>
                    <motion.span
                      key={`${machineId}-${attr.name}`}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={reduced ? { duration: 0 } : { duration: 0.3, ease: 'easeOut' }}
                      className="rounded-md bg-vibrant-teal/10 px-2.5 py-0.5 text-sm font-semibold text-deep-navy"
                    >
                      {attr.value}
                    </motion.span>
                  </div>
                ))}
              </div>
              <p className="text-caption text-neutral-500 italic mt-4">{profile.note}</p>
            </div>

            {/* Route: the decision */}
            <div className="rounded-2xl border border-neutral-200 bg-light-gray/40 p-6">
              <p className="text-eyebrow uppercase text-neutral-500 mb-4">and routes the work</p>
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
