'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { FlaskConical, Cpu, Layers, TrendingUp } from 'lucide-react';
import { SectionReveal } from '@/components/core/SectionReveal';
import { LayeredArchitecture } from '@/components/visuals/LayeredArchitecture';
import type { LucideIcon } from 'lucide-react';

/**
 * "The story" as a progression, not a wall of prose: research → engine →
 * platform → proving ground. A scroll-linked rail fills as you move through it
 * (transform only). Copy is the approved 02 story, distributed across the four
 * stages. No dates or timeline markers. Reduced motion renders the filled rail
 * and all stages. Aquon character: slow, settled reveals.
 */

type Stage = { icon: LucideIcon; label: string; body: string };
const stages: Stage[] = [
  {
    icon: FlaskConical,
    label: 'Research',
    body: 'It started from a narrow technical observation: the numerical code behind portfolio construction was leaving most of the machine unused. Not because the mathematics was wrong, but because software written once and shipped everywhere cannot know what hardware it will land on.',
  },
  {
    icon: Cpu,
    label: 'Engine',
    body: 'That became Aqua, an engine that reads the machine and adapts to it. At NYU, it became a patent application.',
  },
  {
    icon: Layers,
    label: 'Platform',
    body: 'An engine on its own proves nothing. So we built the thing that would test it hardest: Zeton, a full investment platform.',
  },
  {
    icon: TrendingUp,
    label: 'Proving ground',
    body: 'AQTF, our own systematic strategy, runs real capital through it. Our ideal customer sits in our founding team, which means the platform is stress-tested by the person it was built for long before anyone else sees it.',
  },
];

export const CompanyStory = () => {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end center'] });
  const fill = useTransform(scrollYProgress, [0, 0.85], [0, 1]);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionReveal className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-eyebrow uppercase text-vibrant-teal mb-3">The story</p>
          <h2 className="text-heading-1 text-deep-navy">A research problem, in four moves.</h2>
        </SectionReveal>

        {/* Scroll-linked progression */}
        <div ref={ref} className="relative mx-auto max-w-2xl">
          <div aria-hidden="true" className="absolute left-4 top-4 bottom-4 w-px bg-neutral-200" />
          <motion.div
            aria-hidden="true"
            style={{ scaleY: reduced ? 1 : fill }}
            className="absolute left-4 top-4 bottom-4 w-px origin-top bg-vibrant-teal"
          />

          <div className="space-y-10">
            {stages.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <SectionReveal key={stage.label} delay={i * 0.05} className="relative flex gap-5">
                  <div className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-vibrant-teal bg-white">
                    <Icon className="h-4 w-4 text-vibrant-teal" strokeWidth={2} aria-hidden="true" />
                  </div>
                  <div className="pt-0.5">
                    <p className="text-eyebrow uppercase text-vibrant-teal mb-1">{stage.label}</p>
                    <p className="text-body-l text-neutral-600">{stage.body}</p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>

        {/* The relationship: summary line + the reused stack */}
        <SectionReveal className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-heading-2 text-deep-navy mb-10">
            Zeton is what we commercialize. Aqua is why it is different. AQTF is how we know it works.
          </p>
          <LayeredArchitecture caption="Zeton, the platform we commercialize, runs on Aqua, our engine, which runs on ordinary hardware." />
        </SectionReveal>
      </div>
    </section>
  );
};
