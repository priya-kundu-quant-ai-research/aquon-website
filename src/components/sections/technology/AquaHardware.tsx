'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

/* Hardware-profile bar chart — kept from the old AquaFinancialComputing, per
   §3.3 (the diagram vocabulary stays). Illustrative note retained. */
type Profile = {
  label: string;
  bars: { name: string; pct: number }[];
  note: string;
};

const profiles: Record<string, Profile> = {
  cloud: {
    label: 'Cloud server',
    bars: [
      { name: 'Cores used', pct: 45 },
      { name: 'Cache fit', pct: 60 },
      { name: 'Throughput', pct: 55 },
    ],
    note: 'Aqua detects constrained resources and selects a conservative parallel strategy.',
  },
  workstation: {
    label: 'Workstation',
    bars: [
      { name: 'Cores used', pct: 85 },
      { name: 'Cache fit', pct: 90 },
      { name: 'Throughput', pct: 95 },
    ],
    note: 'Aqua detects high-core availability and scales aggressively, with no config needed.',
  },
};

function HardwareProfileChart({ profileKey }: { profileKey: string }) {
  const profile = profiles[profileKey];
  return (
    <div className="mt-4 space-y-3">
      {profile.bars.map((bar) => (
        <div key={bar.name}>
          <div className="flex justify-between text-xs text-neutral-600 mb-1">
            <span>{bar.name}</span>
            <span>{bar.pct}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-neutral-200 overflow-hidden">
            <motion.div
              key={`${profileKey}-${bar.name}`}
              initial={{ width: 0 }}
              animate={{ width: `${bar.pct}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="h-full bg-vibrant-teal rounded-full"
            />
          </div>
        </div>
      ))}
      <p className="text-xs text-neutral-500 italic mt-3">{profile.note}</p>
    </div>
  );
}

export const AquaHardware = () => {
  const [profileKey, setProfileKey] = useState<'cloud' | 'workstation'>('cloud');

  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-heading-1 text-deep-navy mb-4 text-center">Built to run anywhere.</h2>
          <p className="text-body-l text-neutral-600 text-center mb-8 prose-measure mx-auto">
            Aqua profiles the machine it runs on and adapts automatically, from a constrained cloud
            server to a high-core workstation, with no configuration from the caller.
          </p>

          <div className="bg-white rounded-2xl border border-neutral-200 p-6">
            <div
              className="flex justify-center gap-2 mb-6"
              role="group"
              aria-label="Select hardware profile"
            >
              {(['cloud', 'workstation'] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => setProfileKey(key)}
                  aria-pressed={profileKey === key}
                  className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vibrant-teal ${
                    profileKey === key
                      ? 'bg-vibrant-teal text-white shadow'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {profiles[key].label}
                </button>
              ))}
            </div>

            <HardwareProfileChart profileKey={profileKey} />

            <p className="text-[11px] text-center text-neutral-400 italic mt-4">
              Illustrative. Relative values, not benchmark data.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
