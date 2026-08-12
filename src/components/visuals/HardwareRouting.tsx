'use client';

import { useId, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * The whole product in one interaction: the same code takes a different path on
 * a different machine, with nothing configured by the caller. The "Your code"
 * entry never changes; only the route underneath, chosen by Aqua, re-draws when
 * you switch machines. Fast, snapping motion (Aqua character).
 *
 * Honest by construction: machines are described qualitatively (no invented spec
 * sheets), and no path carries a timing or a speedup — none of those numbers are
 * on the claims list, so none appear here.
 *
 * Keyboard operable (native buttons), reduced-motion renders one path static with
 * the alternatives visible, and an aria-live line states the active route in text
 * so nothing depends on seeing the diagram.
 */

type MachineId = 'cloud' | 'workstation';

const machines: { id: MachineId; name: string; sub: string }[] = [
  { id: 'cloud', name: 'Constrained cloud', sub: 'fewer cores, less cache' },
  { id: 'workstation', name: 'High-core workstation', sub: 'many cores, large cache' },
];

const NODE_W = 148;
const NODE_H = 40;
type Strategy = { id: string; lines: [string, string]; x: number; y: number; machine: MachineId };
const strategies: Strategy[] = [
  { id: 'conservative', lines: ['Conservative', 'parallelism'], x: 8, y: 214, machine: 'cloud' },
  { id: 'cacheblocked', lines: ['Cache-blocked', 'kernels'], x: 8, y: 262, machine: 'cloud' },
  { id: 'aggressive', lines: ['Aggressive', 'parallelism'], x: 184, y: 214, machine: 'workstation' },
  { id: 'widevector', lines: ['Wide', 'vectorization'], x: 184, y: 262, machine: 'workstation' },
];

const AQUA_BOTTOM = { x: 170, y: 150 };
const nodeTop = (s: Strategy) => ({ x: s.x + NODE_W / 2, y: s.y });
const pathTo = (s: Strategy) => {
  const t = nodeTop(s);
  return `M ${AQUA_BOTTOM.x} ${AQUA_BOTTOM.y} C ${AQUA_BOTTOM.x} ${AQUA_BOTTOM.y + 34} ${t.x} ${t.y - 34} ${t.x} ${t.y}`;
};

const activeText = (m: MachineId) =>
  m === 'cloud'
    ? 'conservative parallelism and cache-blocked kernels'
    : 'aggressive parallelism and wide vectorization';

interface Props {
  className?: string;
  /** Technology gets the deeper version: the profile → classify → route steps. */
  detailed?: boolean;
}

export const HardwareRouting = ({ className, detailed = false }: Props) => {
  const reduced = useReducedMotion();
  const [machine, setMachine] = useState<MachineId>('cloud');
  const uid = useId();

  return (
    <div className={className}>
      {/* Machine selector */}
      <div
        className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
        role="group"
        aria-label="Choose a machine"
      >
        {machines.map((m) => {
          const selected = machine === m.id;
          return (
            <button
              key={m.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setMachine(m.id)}
              className={cn(
                'rounded-xl border-2 px-4 py-3 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vibrant-teal focus-visible:ring-offset-2',
                selected
                  ? 'border-vibrant-teal bg-vibrant-teal/10'
                  : 'border-neutral-200 bg-white hover:border-neutral-300'
              )}
            >
              <span className="block text-sm font-bold text-deep-navy">{m.name}</span>
              <span className="block text-caption text-neutral-500">{m.sub}</span>
            </button>
          );
        })}
      </div>

      {/* Diagram (decorative; the same information is in the buttons and the live line) */}
      <svg viewBox="0 0 340 310" className="w-full" aria-hidden="true">
        {/* Fixed segment: Your code → Aqua. This never changes. */}
        <line x1="170" y1="52" x2="170" y2="98" stroke="#1DBFBF" strokeWidth="2" />

        {/* Routing paths */}
        {strategies.map((s) => {
          const active = s.machine === machine;
          if (!active) {
            return (
              <path
                key={s.id}
                d={pathTo(s)}
                fill="none"
                stroke="#0D3D4D"
                strokeOpacity="0.1"
                strokeWidth="1.5"
              />
            );
          }
          return (
            <motion.path
              key={`${s.id}-${machine}`}
              d={pathTo(s)}
              fill="none"
              stroke="#1DBFBF"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={reduced ? false : { pathLength: 0, opacity: 0.4 }}
              animate={reduced ? undefined : { pathLength: 1, opacity: 1 }}
              transition={reduced ? undefined : { duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
            />
          );
        })}

        {/* Your code node (constant) */}
        <g>
          <rect x="112" y="12" width="116" height="40" rx="10" fill="#fff" stroke="#1DBFBF" strokeWidth="2" />
          <text x="170" y="30" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0D3D4D">
            Your code
          </text>
          <text x="170" y="44" textAnchor="middle" fontSize="9.5" fill="#0D3D4D" fillOpacity="0.55">
            unchanged
          </text>
        </g>

        {/* Aqua node */}
        <g>
          <rect x="95" y="98" width="150" height="52" rx="12" fill="#1DBFBF" fillOpacity="0.12" stroke="#1DBFBF" strokeWidth="2" />
          <text x="170" y="120" textAnchor="middle" fontSize="14" fontWeight="800" fill="#0D3D4D">
            Aqua
          </text>
          <text x="170" y="136" textAnchor="middle" fontSize="9.5" fill="#0D3D4D" fillOpacity="0.7">
            {detailed ? 'profiles · classifies · routes' : 'profiles the machine'}
          </text>
        </g>

        {/* Strategy nodes */}
        {strategies.map((s) => {
          const active = s.machine === machine;
          return (
            <g key={s.id}>
              <rect
                x={s.x}
                y={s.y}
                width={NODE_W}
                height={NODE_H}
                rx="10"
                fill={active ? '#1DBFBF' : '#fff'}
                fillOpacity={active ? 0.14 : 1}
                stroke={active ? '#1DBFBF' : '#0D3D4D'}
                strokeOpacity={active ? 1 : 0.15}
                strokeWidth={active ? 2 : 1.5}
              />
              <text
                x={s.x + NODE_W / 2}
                y={s.y + 17}
                textAnchor="middle"
                fontSize="11"
                fontWeight="600"
                fill="#0D3D4D"
                fillOpacity={active ? 1 : 0.4}
              >
                {s.lines[0]}
              </text>
              <text
                x={s.x + NODE_W / 2}
                y={s.y + 30}
                textAnchor="middle"
                fontSize="11"
                fontWeight="600"
                fill="#0D3D4D"
                fillOpacity={active ? 1 : 0.4}
              >
                {s.lines[1]}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Text equivalent + the load-bearing point */}
      <p id={`${uid}-live`} aria-live="polite" className="mt-4 text-body text-neutral-600">
        On a <span className="font-semibold text-deep-navy">{machines.find((m) => m.id === machine)!.name.toLowerCase()}</span>, Aqua routes to {activeText(machine)}.
      </p>
      <p className="mt-1 text-caption text-neutral-500">
        Nothing is configured by the caller. Your code never changes; Aqua re-routes underneath.
      </p>
    </div>
  );
};
