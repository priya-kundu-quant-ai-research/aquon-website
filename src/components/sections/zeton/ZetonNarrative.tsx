'use client';

import { Check } from 'lucide-react';
import { SectionReveal } from '@/components/core/SectionReveal';

// Copy verbatim from 02 · Zeton · Value.
const valueProps = [
  {
    title: 'Aladdin-class, without the nine-figure budget.',
    description:
      'The optimization, execution quality and oversight of an institutional system, without a seven-figure license.',
  },
  {
    title: 'Sell the kitchen, never the recipes.',
    description:
      'Licensees get the full platform; their strategies and data stay entirely their own.',
  },
  {
    title: 'Operator wins.',
    description:
      'Faster portfolio builds, fewer manual errors, continuous drift monitoring, better execution, and a clean audit trail for client reporting.',
  },
  {
    title: 'Proprietary core.',
    description: "Aqua, our NYU-originated engine, underpins the platform's speed and security.",
  },
];

const PURPLE = '#8B3FBF';
const NAVY = '#0D3D4D';

/* Capability × access positioning. Qualitative axes only: no price, no numbers,
   no named competitor. Zeton is the one point that is both capable and
   accessible. */
function PositioningPlot() {
  const points = [
    { x: 108, y: 66, label: 'Institutional platform', sub: 'capable, out of reach', tone: NAVY },
    { x: 250, y: 176, label: 'Assembled tools', sub: 'reachable, never adds up', tone: NAVY },
    { x: 250, y: 66, label: 'Zeton', sub: 'both', tone: PURPLE, highlight: true },
  ];
  return (
    <figure
      role="img"
      aria-label="A capability-versus-access plot. An institutional platform is high capability but low access; assembled tools are high access but low capability; Zeton is high on both."
    >
      <svg viewBox="0 0 320 240" className="w-full">
        {/* axes */}
        <line x1="52" y1="24" x2="52" y2="206" stroke={NAVY} strokeOpacity="0.25" strokeWidth="1.5" />
        <line x1="52" y1="206" x2="304" y2="206" stroke={NAVY} strokeOpacity="0.25" strokeWidth="1.5" />
        {/* axis titles */}
        <text x="18" y="115" fontSize="11" fontWeight="700" fill={NAVY} transform="rotate(-90 18 115)">Capability</text>
        <text x="178" y="232" textAnchor="middle" fontSize="11" fontWeight="700" fill={NAVY}>Access</text>
        <text x="56" y="20" fontSize="9" fill={NAVY} fillOpacity="0.5">High</text>
        <text x="56" y="203" fontSize="9" fill={NAVY} fillOpacity="0.5">Low</text>
        <text x="300" y="222" textAnchor="end" fontSize="9" fill={NAVY} fillOpacity="0.5">Broad</text>
        <text x="58" y="222" fontSize="9" fill={NAVY} fillOpacity="0.5">Limited</text>

        {points.map((p) => (
          <g key={p.label}>
            {p.highlight && <circle cx={p.x} cy={p.y} r={16} fill={PURPLE} fillOpacity="0.12" />}
            <circle cx={p.x} cy={p.y} r={p.highlight ? 8 : 6} fill={p.tone} fillOpacity={p.highlight ? 1 : 0.35} />
            <text
              x={p.x}
              y={p.highlight ? p.y - 16 : p.y - 12}
              textAnchor="middle"
              fontSize={p.highlight ? 12 : 10.5}
              fontWeight={p.highlight ? 800 : 600}
              fill={p.highlight ? PURPLE : NAVY}
            >
              {p.label}
            </text>
            <text x={p.x} y={p.highlight ? p.y + 26 : p.y + 20} textAnchor="middle" fontSize="8.5" fill={NAVY} fillOpacity="0.5">
              {p.sub}
            </text>
          </g>
        ))}
      </svg>
    </figure>
  );
}

export const ZetonValueProp = () => {
  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        <SectionReveal className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-heading-1 text-deep-navy">
            Institutional capability at emerging-manager economics.
          </h2>
        </SectionReveal>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
          <SectionReveal className="rounded-2xl border border-neutral-200 bg-white p-6">
            <PositioningPlot />
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <ul className="divide-y divide-neutral-200">
              {valueProps.map((point) => (
                <li key={point.title} className="flex gap-3 py-4 first:pt-0 last:pb-0">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-rich-purple/10">
                    <Check className="h-3.5 w-3.5 text-rich-purple" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-heading-3 text-deep-navy">{point.title}</h3>
                    <p className="text-body text-neutral-600 leading-relaxed">{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};
