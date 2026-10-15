import { Cpu, Equal, Settings2 } from 'lucide-react';
import { Section, Eyebrow, Heading, Lead, SourceNote } from '@/components/site/primitives';
import { SectionReveal } from '@/components/core/SectionReveal';

/* ── What it means for a firm ────────────────────────────────────────── */

export function Outcomes() {
  const items = [
    {
      icon: Cpu,
      title: 'More portfolios on the same machines.',
      body: 'Aqua turns the hardware a firm already pays for into far more client portfolios served, which is what makes personalization affordable.',
    },
    {
      icon: Equal,
      title: 'The same answer, every time.',
      body: 'Aqua changes how fast an answer arrives, never the answer. Results match the reference to the last digit a computer stores.',
    },
    {
      icon: Settings2,
      title: 'Nothing to configure.',
      body: 'No tuning, no special hardware, no flags. Aqua discovers the machine when it starts and adapts on its own.',
    },
  ];
  return (
    <Section tone="light">
      <SectionReveal className="max-w-3xl">
        <Eyebrow>What it means for a firm</Eyebrow>
        <Heading>Personalization is a computing problem. Aqua makes it a cheap one.</Heading>
      </SectionReveal>
      <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <SectionReveal key={it.title} delay={i * 0.08} className="border-t border-navy/20 pt-6">
              <Icon className="h-5 w-5 text-teal-text" strokeWidth={1.8} aria-hidden="true" />
              <h3 className="mt-5 text-heading-3 text-navy">{it.title}</h3>
              <p className="mt-2.5 text-body text-gray-text">{it.body}</p>
            </SectionReveal>
          );
        })}
      </div>
    </Section>
  );
}

/* ── Measured ────────────────────────────────────────────────────────────
   Claims register (company/07). The three blocks are DIFFERENT workloads with
   different baselines; they are kept apart and labelled, and the page says
   they are not comparable. 5–15× carries all three of its conditions; 10.32×
   (§1 A1) is a component figure and is never stated as a product-level one;
   56.4M and 5.78× are §3's, measured at saturation. */

const blocks = [
  {
    workload: 'A platform workload',
    sub: 'Many clients, one date',
    rows: [
      ['56.4M', 'client accounts optimized per machine per hour, up from 9.75M'],
      ['5.78×', 'more client accounts served per machine'],
      ['17.3 → 6.6 ms', 'for the slowest single account'],
    ],
    note: '1,000 client accounts at full machine load, on three cloud machine types, against the same workload without Aqua.',
  },
  {
    workload: 'The engine, one operation',
    sub: 'In isolation',
    rows: [
      ['10.32×', 'CPU efficiency on a warm solver pool'],
      ['9.49–12.29×', 'held across a 15× range of machine sizes'],
      ['1.3–1.9×', 'on general numerical workloads, across 209 tests'],
    ],
    note: 'Against our own pre-Aqua implementation, at a small universe size. It shows the engineering is stable; it is one operation, not a firm’s whole workload.',
  },
  {
    workload: 'Our production backtest',
    sub: 'One strategy, ten years',
    rows: [
      ['5–15×', 'faster than the implementation it replaced'],
      ['36 of 36', 'configurations with every financial metric matching'],
    ],
    note: 'Against our own pre-Aqua implementation, not a third-party system. Not all of the gain is Aqua’s alone, and the upper end depends on available cores.',
  },
];

export function Measured() {
  return (
    <Section tone="dark">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
        <SectionReveal>
          <Eyebrow dark>Measured, not modelled</Eyebrow>
          <Heading className="text-cream">Correctness first. Then speed.</Heading>
        </SectionReveal>
        <SectionReveal delay={0.05}>
          <Lead dark>
            No timing counts until the answer is proven identical. Every figure below passed that gate
            first: results agree with the reference to within 2.4 × 10⁻¹⁶.
          </Lead>
        </SectionReveal>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {blocks.map((b, i) => (
          <SectionReveal key={b.workload} delay={i * 0.08} className="flex flex-col rounded-xl border border-white/10 bg-midnight-card p-8">
            <p className="text-eyebrow uppercase text-teal-bright">{b.workload}</p>
            <p className="mt-2 text-caption text-cream-muted">{b.sub}</p>
            <dl className="mt-8 space-y-6">
              {b.rows.map(([fig, label]) => (
                <div key={label}>
                  <dt className="font-display text-[2.4rem] leading-none tracking-[-0.02em] tabular text-cream">{fig}</dt>
                  <dd className="mt-2 text-body text-cream/75">{label}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-auto pt-8 text-caption text-cream-muted">{b.note}</p>
          </SectionReveal>
        ))}
      </div>

      <SourceNote dark className="mt-8">
        Three different workloads, measured separately against different baselines. The figures are not
        comparable with each other, and they measure computation, not investment returns.
      </SourceNote>
    </Section>
  );
}

/* ── IP ──────────────────────────────────────────────────────────────── */

export function Protected() {
  const facts = [
    ['Exclusive licence', 'Exclusive, worldwide and in all fields, with the right to sublicense. Executed with New York University in August 2026.'],
    ['Patent application filed', 'A US provisional application filed through NYU in June 2025, followed by an international (PCT) application in 2026.'],
    ['Invented here', 'Our CTO, Carlos de Oliveira, is a named inventor on the application.'],
  ];
  return (
    <Section tone="band" tight>
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionReveal>
          <Eyebrow>Protected</Eyebrow>
          <Heading>Born in NYU research. Licensed to Aquon alone.</Heading>
        </SectionReveal>
        <dl className="divide-y divide-navy/10 border-y border-navy/10">
          {facts.map(([t, d], i) => (
            <SectionReveal key={t} delay={i * 0.06}>
              <div className="grid gap-2 py-6 md:grid-cols-[13rem_1fr] md:gap-8">
                <dt className="text-heading-3 text-navy">{t}</dt>
                <dd className="text-body text-gray-text">{d}</dd>
              </div>
            </SectionReveal>
          ))}
        </dl>
      </div>
    </Section>
  );
}
