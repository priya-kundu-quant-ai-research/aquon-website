'use client';

import { Table2, Plug, Activity, Mail, ArrowRight, Layers } from 'lucide-react';
import { SectionReveal } from '@/components/core/SectionReveal';
import type { LucideIcon } from 'lucide-react';

/**
 * "What Zeton replaces" — the strongest before/after on the site, made
 * structural: the assembled parts (spreadsheet, broker API, a separate monitor,
 * email) as scattered disconnected pieces, resolving into one connected
 * platform. No invented metrics, so it is safe as well as persuasive. Purple.
 */

const parts: { icon: LucideIcon; label: string; rotate: string }[] = [
  { icon: Table2, label: 'Spreadsheet', rotate: '-rotate-3' },
  { icon: Plug, label: 'Broker API', rotate: 'rotate-2' },
  { icon: Activity, label: 'Monitoring tool', rotate: 'rotate-3' },
  { icon: Mail, label: 'Email', rotate: '-rotate-2' },
];

export const ZetonOverview = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionReveal className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-heading-1 text-deep-navy mb-5">What Zeton replaces.</h2>
          <p className="text-body-l text-neutral-600 mx-auto prose-measure">
            Emerging funds, family offices and independent RIAs run real strategies on assembled
            parts. The cost is allocation errors, undisciplined rebalancing, slippage, and an audit
            trail that has to be reconstructed after the fact. Their two options today are an
            institutional platform priced out of reach, or a patchwork that never quite adds up.
            Zeton is the third.
          </p>
        </SectionReveal>

        <SectionReveal
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-center"
          role="img"
          aria-label="Before: four disconnected tools (spreadsheet, broker API, a monitoring tool, and email). After: one connected Zeton platform."
        >
          {/* Before: assembled parts, disconnected */}
          <div className="rounded-2xl border border-dashed border-neutral-300 bg-light-gray/50 p-6">
            <p className="text-eyebrow uppercase text-neutral-400 mb-4 text-center">Today · assembled parts</p>
            <div className="grid grid-cols-2 gap-3">
              {parts.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.label}
                    className={`flex flex-col items-center gap-1.5 rounded-xl border border-dashed border-neutral-300 bg-white px-3 py-4 ${p.rotate}`}
                  >
                    <Icon className="h-5 w-5 text-neutral-400" strokeWidth={1.8} aria-hidden="true" />
                    <span className="text-caption text-neutral-500">{p.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <ArrowRight className="h-7 w-7 text-rich-purple rotate-90 md:rotate-0" aria-hidden="true" />
          </div>

          {/* After: one connected platform */}
          <div className="rounded-2xl border-2 border-rich-purple bg-rich-purple/5 p-6">
            <p className="text-eyebrow uppercase text-rich-purple mb-4 text-center">Zeton · one platform</p>
            <div className="rounded-xl bg-white border border-rich-purple/20 p-3">
              <div className="mb-3 flex items-center justify-center gap-2 text-rich-purple">
                <Layers className="h-4 w-4" aria-hidden="true" />
                <span className="text-sm font-bold">One connected workflow</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {parts.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={p.label}
                      className="flex flex-col items-center gap-1.5 rounded-lg bg-rich-purple/10 px-3 py-3"
                    >
                      <Icon className="h-5 w-5 text-rich-purple" strokeWidth={1.8} aria-hidden="true" />
                      <span className="text-caption font-medium text-deep-navy">{p.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
