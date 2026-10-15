'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Section, Eyebrow, Heading, Lead, ButtonLink } from '@/components/site/primitives';
import { ScreenshotFrame } from '@/components/site/ScreenshotFrame';
import { SectionReveal } from '@/components/core/SectionReveal';
import { cn } from '@/lib/utils';

/**
 * The answer: Zeton as one loop. Five steps; choosing one swaps the screen.
 * Screens come from the demo v2 walk once captured (see ScreenshotFrame). No
 * results or performance screens.
 */
const steps = [
  {
    key: 'build',
    name: 'Build',
    title: 'Build a strategy without writing code.',
    body: 'Describe it to Zee, the AI assistant, or assemble it visually from named, checked steps. A reviewer can read it without reading code.',
    screen: 'Guided model build',
    src: '/images/screens/studio-model-build.png',
  },
  {
    key: 'test',
    name: 'Test',
    title: 'Test it against history, honestly.',
    body: 'Week by week, using only what was known at the time. Try many settings in one run, save versions and compare them side by side.',
    screen: 'Versions · compare',
    src: '/images/screens/studio-backtest.png',
  },
  {
    key: 'tailor',
    name: 'Tailor',
    title: 'Fit it to every client.',
    body: 'Each client’s rules (exclusions, a cap on any holding, a limit on risk) are checked on their own portfolio, every time.',
    screen: 'A client portfolio and its rules',
    src: '/images/screens/portfolio-rebalancing-policy.png',
  },
  {
    key: 'approve',
    name: 'Approve',
    title: 'A person approves. Always.',
    body: 'The system proposes and a person releases. Every decision carries a record of who made it, on which version, and why.',
    screen: 'The approval step',
    src: '/images/screens/strike-rollout.png',
  },
  {
    key: 'monitor',
    name: 'Monitor',
    title: 'Watch every portfolio in one place.',
    body: 'Drift against target, rule breaches and scheduled reviews in a single queue, with the next rebalance proposed and waiting.',
    screen: 'Monitoring · drift',
    src: '/images/screens/home-light.png',
  },
] as const;

export function Lifecycle() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const step = steps[active];

  return (
    <Section tone="light">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <SectionReveal>
          <Eyebrow>The answer</Eyebrow>
          <Heading>One platform for the whole portfolio lifecycle.</Heading>
        </SectionReveal>
        <SectionReveal delay={0.05}>
          <Lead>
            Zeton runs every account as its own portfolio, from the first idea to the next rebalance.
            The system does the heavy lifting; your team makes the decisions.
          </Lead>
        </SectionReveal>
      </div>

      <SectionReveal delay={0.1} className="mt-14">
        {/* Step selector */}
        <div role="tablist" aria-label="The Zeton lifecycle" className="grid grid-cols-5 border-b border-hairline">
          {steps.map((s, i) => {
            const selected = i === active;
            return (
              <button
                key={s.key}
                role="tab"
                id={`step-${s.key}`}
                aria-selected={selected}
                aria-controls="lifecycle-panel"
                onClick={() => setActive(i)}
                className={cn(
                  'relative -mb-px flex flex-col items-start gap-1 border-b-2 px-1 pb-4 pt-2 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy sm:px-2',
                  selected ? 'border-gold-deep text-navy' : 'border-transparent text-gray-text hover:text-navy'
                )}
              >
                <span className="font-mono text-[11px] tabular">0{i + 1}</span>
                <span className="text-[15px] font-semibold sm:text-base">{s.name}</span>
              </button>
            );
          })}
        </div>

        <div id="lifecycle-panel" role="tabpanel" aria-labelledby={`step-${step.key}`} className="mt-10 grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={step.key}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 1 } : { opacity: 0, y: -8 }}
              transition={{ duration: reduced ? 0 : 0.25, ease: 'easeOut' }}
            >
              <h3 className="font-display text-heading-1 text-navy">{step.title}</h3>
              <p className="mt-5 text-body-l text-gray-text">{step.body}</p>
              <ButtonLink href="/zeton" variant="text" className="mt-8">
                Explore the platform
              </ButtonLink>
            </motion.div>
          </AnimatePresence>

          <ScreenshotFrame label={step.screen} src={'src' in step ? step.src : undefined} />
        </div>
      </SectionReveal>
    </Section>
  );
}
