import Image from 'next/image';
import { Check } from 'lucide-react';
import { Section, Eyebrow, Heading, Lead, InDevelopment } from '@/components/site/primitives';
import { ScreenshotFrame } from '@/components/site/ScreenshotFrame';
import { SectionReveal } from '@/components/core/SectionReveal';
import { cn } from '@/lib/utils';

/* ── The three Z's ───────────────────────────────────────────────────────
   Wording rules: Z-Strike says multi-broker by design and IBKR tested end to
   end (Priya, 2026-10-08), never "live on IBKR". Nothing here says trades
   happen on their own: a person approves every order. */

const modules = [
  {
    name: 'Z-Studio',
    role: 'Build and prove',
    title: 'Where a strategy becomes a portfolio.',
    body: 'Design a model, test it against history and get back each client’s target portfolio, in one place, without writing code.',
    points: [
      'Describe a strategy to Zee, or build it visually from named, checked steps',
      'Backtests that use only what was known at the time, with missing data called out, not guessed',
      'Versions you can save, branch and compare side by side',
    ],
    screen: 'Z-Studio · the firm’s library',
    src: '/images/screens/studio-library.png',
  },
  {
    name: 'Z-Sight',
    role: 'Research',
    title: 'Research tied to what you hold.',
    body: 'Every company, fund and market carries a dossier with its data, its relationships, its signals and your own notes.',
    points: [
      'See how news about one company reaches the holdings it touches',
      'Bring in your own documents and decide what enters your research',
      'Go back to any past date and see the world as it was then',
    ],
    screen: 'Z-Sight · a company dossier',
    src: '/images/screens/sight-map-dark.png',
    theme: 'dark' as const,
  },
  {
    name: 'Z-Strike',
    role: 'Put it to work',
    title: 'From approved portfolio to the market.',
    body: 'Turn an approved allocation into a trade list, send it through your broker, and watch every portfolio against its target.',
    points: [
      'Built for multi-broker connectivity; our Interactive Brokers integration is tested end to end',
      'Drift against target and proposed rebalances, ranked in one queue',
      'Nothing trades on its own: every order is released by a person',
    ],
    screen: 'Z-Strike · monitoring',
    src: '/images/screens/strike-monitoring.png',
  },
];

export function ThreeZs() {
  return (
    <Section tone="light">
      <SectionReveal className="max-w-3xl">
        <Eyebrow>The platform</Eyebrow>
        <Heading>Three workspaces. One record.</Heading>
        <Lead className="mt-6">
          Research, construction and execution usually live in separate tools, stitched together by
          hand. In Zeton they share one record, so every decision can be traced from the idea to the
          trade.
        </Lead>
      </SectionReveal>

      <div className="mt-20 space-y-24 md:space-y-32">
        {modules.map((m, i) => (
          <div key={m.name} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionReveal className={cn(i % 2 === 1 && 'lg:order-2')}>
              <div className="flex items-center gap-3">
                <Image src="/images/brand/zeton-mark-dark.svg" alt="" width={607} height={1015} className="h-6 w-auto" />
                <span className="text-[15px] font-semibold text-navy">{m.name}</span>
                <span className="text-[15px] text-gray-text">· {m.role}</span>
              </div>
              <h3 className="mt-5 font-display text-heading-1 text-navy">{m.title}</h3>
              <p className="mt-5 text-body-l text-gray-text">{m.body}</p>
              <ul className="mt-8 space-y-4">
                {m.points.map((p) => (
                  <li key={p} className="flex gap-3 text-body text-navy">
                    <Check className="mt-1 h-4 w-4 flex-none text-teal-text" strokeWidth={2.25} aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </SectionReveal>
            <SectionReveal delay={0.1} className={cn(i % 2 === 1 && 'lg:order-1')}>
              <ScreenshotFrame label={m.screen} src={m.src} theme={'theme' in m ? m.theme : 'light'} />
            </SectionReveal>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ── Every account, its own optimization ─────────────────────────────── */

export function EveryAccount() {
  return (
    <Section tone="band">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <SectionReveal>
          <Eyebrow>Personalization at scale</Eyebrow>
          <Heading>Every account, its own optimization.</Heading>
          <Lead className="mt-6">
            Client rules are not exceptions handled by hand. Exclusions, a cap on any single holding,
            a limit on risk: each is checked on that client’s own portfolio, at every rebalance.
            Constrained clients stay in the program instead of being moved to “custom”.
          </Lead>
        </SectionReveal>
        <SectionReveal delay={0.1} className="flex flex-col justify-center border-l-2 border-gold-deep pl-8">
          <p className="font-display text-display-l text-navy">
            K models.
            <br />
            N accounts.
            <br />
            <span className="text-teal-text">N optimizations.</span>
          </p>
          <p className="mt-6 text-body text-gray-text">
            Sixty strategies cost the same to operate as twelve. The account, not the model, carries
            the personalization.
          </p>
        </SectionReveal>
      </div>
    </Section>
  );
}

/* ── Zee ─────────────────────────────────────────────────────────────── */

export function Zee() {
  const rules = [
    { lead: 'It explains first.', body: 'Zee writes your strategy back in plain English before it builds anything, and shows its sources.' },
    { lead: 'It says what it cannot do.', body: 'When a request can’t be met, Zee says so, rather than quietly doing something else.' },
    { lead: 'It never acts on its own.', body: 'Zee proposes and pre-fills. A person reviews and presses the button, every time.' },
  ];
  return (
    <Section tone="dark">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <SectionReveal>
          <Eyebrow dark>Zee · the AI in Zeton</Eyebrow>
          <Heading className="text-cream">An AI that proposes. A person who decides.</Heading>
          <dl className="mt-10 space-y-7">
            {rules.map((r) => (
              <div key={r.lead} className="border-l border-white/15 pl-6">
                <dt className="text-heading-3 text-cream">{r.lead}</dt>
                <dd className="mt-1.5 text-body text-cream/70">{r.body}</dd>
              </div>
            ))}
          </dl>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <ScreenshotFrame label="Zee · the assistant panel" src="/images/screens/zee-on-rollout-dark.png" alt="Zee, the assistant panel: it reads and stages, and never acts on its own" theme="dark" />
        </SectionReveal>
      </div>
    </Section>
  );
}

/* ── The value, two ways ─────────────────────────────────────────────── */

export function Value() {
  const columns = [
    {
      title: 'Value through personalization',
      items: [
        ['Customization stops being an exception.', 'Because every account is its own optimization, it is no longer handled by hand.'],
        ['Constrained clients stay in-program.', 'Exclusions, low-basis positions and concentration limits are rules, not reasons to move an account out.'],
        ['A new segment becomes reachable.', 'Personalized portfolios for accounts that were below the economic floor.'],
      ],
    },
    {
      title: 'Value through operating efficiency',
      items: [
        ['One login, every portfolio.', 'Each portfolio, its drift and its next optimization, in one place.'],
        ['Strategies in minutes, not quarters.', 'Change the universe, the objective or a rule, and rerun the full history straight away.'],
        ['Audit-ready by construction.', 'Named steps, versioned history and recorded approvals: any past portfolio can be reproduced.'],
      ],
    },
  ];
  return (
    <Section tone="light">
      <SectionReveal className="max-w-3xl">
        <Eyebrow>What firms gain</Eyebrow>
        <Heading>We don’t sell better investment decisions. We make good ones affordable for every client.</Heading>
      </SectionReveal>
      <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
        {columns.map((c, i) => (
          <SectionReveal key={c.title} delay={i * 0.08}>
            <h3 className="border-b border-navy/20 pb-4 text-eyebrow uppercase text-teal-text">{c.title}</h3>
            <dl className="divide-y divide-hairline">
              {c.items.map(([lead, body]) => (
                <div key={lead} className="py-6">
                  <dt className="text-heading-3 text-navy">{lead}</dt>
                  <dd className="mt-1.5 text-body text-gray-text">{body}</dd>
                </div>
              ))}
            </dl>
          </SectionReveal>
        ))}
      </div>
    </Section>
  );
}

/* ── What's next (roadmap, labelled) ─────────────────────────────────── */

export function WhatsNext() {
  const items = [
    { title: 'Tax-aware construction', body: 'Lot-level harvesting, tax-aware asset location and multi-year transitions, sequenced against a stated tax budget.' },
    { title: 'White-label for platforms', body: 'Zeton inside a TAMP’s or a wealth platform’s own frame, for every adviser on it.' },
    { title: 'A direct API', body: 'Zeton’s construction and optimization, called from a firm’s own systems.' },
  ];
  return (
    <Section tone="gray" tight>
      <SectionReveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <Eyebrow>What’s next</Eyebrow>
          <Heading size="heading-1">On the roadmap.</Heading>
        </div>
      </SectionReveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <SectionReveal key={it.title} delay={i * 0.08} className="rounded-xl border border-navy/10 bg-white p-8">
            <InDevelopment />
            <h3 className="mt-5 font-display text-heading-2 text-navy">{it.title}</h3>
            <p className="mt-3 text-body text-gray-text">{it.body}</p>
          </SectionReveal>
        ))}
      </div>
    </Section>
  );
}
