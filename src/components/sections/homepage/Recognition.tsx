'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, Cpu, LineChart } from 'lucide-react';
import { SectionReveal } from '@/components/core/SectionReveal';

/**
 * Home "demonstrated impact": what Aqua and Zeton have actually been shown to
 * do. Every numeral is from the binding claims list. The flagship pairs the
 * speed range with correctness, because speed without correctness is worthless
 * in this market and showing them together is the argument.
 *
 * The 5–15× is drawn as a BAND (a range), never a sampled series, and its
 * qualifier is rendered on the page, not in a tooltip. No dollar figures.
 */

/* The speed range as a band from a 1× (pre-Aqua) baseline. Endpoints only. */
function SpeedBand() {
  const reduced = useReducedMotion();
  return (
    <div>
      <p className="text-eyebrow uppercase text-vibrant-teal mb-2">Speed</p>
      <p className="text-deep-navy mb-1">
        <span className="text-display-l font-extrabold text-vibrant-teal">5–15×</span>{' '}
        <span className="text-heading-3 font-bold">faster</span>
      </p>

      <div className="mt-5 mb-3">
        <div className="flex justify-between text-caption text-neutral-500 mb-1.5">
          <span>1× pre-Aqua</span>
          <span>5×</span>
          <span className="ml-auto">15×</span>
        </div>
        <div className="relative h-3 rounded-full bg-neutral-200 overflow-hidden">
          {/* baseline tick at ~1/15 */}
          <span aria-hidden="true" className="absolute inset-y-0 left-[6.5%] w-0.5 bg-neutral-400" />
          {/* the range, 5x -> 15x, as a soft band */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-y-0 right-0 left-[33%] rounded-full bg-gradient-to-r from-vibrant-teal/60 to-vibrant-teal"
            initial={reduced ? false : { scaleX: 0 }}
            whileInView={reduced ? undefined : { scaleX: 1 }}
            viewport={{ once: true }}
            transition={reduced ? undefined : { duration: 0.7, ease: 'easeOut' }}
            style={{ transformOrigin: 'left' }}
          />
        </div>
      </div>

      <p className="text-caption text-neutral-500">
        Against our own pre-Aqua implementation, on our own backtest, not a third-party system. The
        upper end depends on available cores.
      </p>
    </div>
  );
}

function Correctness() {
  return (
    <div className="md:border-l md:border-neutral-200 md:pl-8">
      <p className="text-eyebrow uppercase text-vibrant-teal mb-2">Correctness</p>
      <p className="text-deep-navy mb-1">
        <span className="text-display-l font-extrabold text-deep-navy">1</span>{' '}
        <span className="text-heading-3 font-bold text-neutral-500">in a billion</span>
      </p>
      <p className="text-body text-neutral-600 mt-3">
        Every financial metric matched the reference to within one part in a billion.
      </p>
      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-vibrant-teal/10 px-3 py-1.5">
        <CheckCircle2 className="h-4 w-4 text-vibrant-teal" aria-hidden="true" />
        <span className="text-caption font-semibold text-deep-navy">
          36 of 36 configurations · zero regressions
        </span>
      </div>
    </div>
  );
}

/* Uniform density texture — repetition, not a chart, no axis. */
function SolverDensity() {
  return (
    <div className="h-full rounded-2xl border border-neutral-200 bg-white p-7">
      <div aria-hidden="true" className="mb-4 grid grid-cols-10 gap-1">
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-vibrant-teal/40" />
        ))}
      </div>
      <h3 className="text-heading-3 text-deep-navy mb-1">546,000 solver calls</h3>
      <p className="text-body text-neutral-600">Made in a single ten-year backtest run.</p>
    </div>
  );
}

function Platforms() {
  return (
    <div className="h-full rounded-2xl border border-neutral-200 bg-white p-7">
      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-vibrant-teal/10">
        <Cpu className="h-5 w-5 text-vibrant-teal" strokeWidth={1.8} aria-hidden="true" />
      </div>
      <h3 className="text-heading-3 text-deep-navy mb-2">Validated on ARM and x86</h3>
      <div className="mb-2 flex flex-wrap gap-2">
        <span className="rounded-md bg-light-gray px-2.5 py-1 text-caption font-semibold text-deep-navy">
          ARM · Apple Silicon
        </span>
        <span className="rounded-md bg-light-gray px-2.5 py-1 text-caption font-semibold text-deep-navy">
          x86 · AMD Zen2
        </span>
      </div>
      <p className="text-body text-neutral-600">Across 441 automated tests.</p>
    </div>
  );
}

function Aqtf() {
  return (
    <div className="h-full rounded-2xl border border-neutral-200 bg-white p-7">
      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-vibrant-teal/10">
        <LineChart className="h-5 w-5 text-vibrant-teal" strokeWidth={1.8} aria-hidden="true" />
      </div>
      <h3 className="text-heading-3 text-deep-navy mb-2">Our own capital, on our own platform</h3>
      <p className="text-body text-neutral-600">
        AQTF, our systematic strategy, runs live on Interactive Brokers through Zeton.
      </p>
    </div>
  );
}

export const Recognition = () => {
  return (
    <section id="recognition" className="scroll-mt-24 py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionReveal className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-eyebrow uppercase text-vibrant-teal mb-3">Demonstrated impact</p>
          <h2 className="text-heading-1 text-deep-navy">Earned, not asserted.</h2>
        </SectionReveal>

        {/* Flagship: speed paired with correctness */}
        <SectionReveal className="max-w-5xl mx-auto mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
            <SpeedBand />
            <Correctness />
          </div>
        </SectionReveal>

        {/* Supporting proof */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <SectionReveal delay={0}>
            <SolverDensity />
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <Platforms />
          </SectionReveal>
          <SectionReveal delay={0.16}>
            <Aqtf />
          </SectionReveal>
        </div>

        {/* Credential rail: formal recognition lives on the Company page. */}
        <SectionReveal delay={0.1} className="mt-10 text-center">
          <Link
            href="/company#recognition"
            className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-caption text-neutral-500 hover:text-deep-navy transition-colors"
          >
            <span>Patent filed</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span>NYU research spin-off</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span>START-UP NY</span>
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
};
