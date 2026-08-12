'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SectionReveal } from '@/components/core/SectionReveal';

/**
 * Home "demonstrated impact": three proofs, from the binding claims list only.
 * Speed (5–15×), correctness (one part in a billion), and consistent gains on
 * general workloads (1.3–1.9×). The 5–15× is a range shown as a band, never a
 * sampled series, and its qualifier is on the page. No dollar figures. Formal
 * recognition (patent, programs, partnerships) lives on the Company page; the
 * credential rail below links to it and shares this frame.
 */

/* The speed range as a band from a 1× (pre-Aqua) baseline. Endpoints only. */
function SpeedBand() {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div className="mt-4">
      <div className="flex justify-between text-caption text-neutral-500 mb-1.5">
        <span>1× pre-Aqua</span>
        <span>5×</span>
        <span>15×</span>
      </div>
      <div className="relative h-2.5 rounded-full bg-neutral-200 overflow-hidden">
        <span aria-hidden="true" className="absolute inset-y-0 left-[6.5%] w-0.5 bg-neutral-400" />
        <motion.div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 left-[33%] rounded-full bg-gradient-to-r from-vibrant-teal/60 to-vibrant-teal"
          initial={{ scaleX: 0 }}
          animate={reduced && mounted ? { scaleX: 1 } : undefined}
          whileInView={reduced ? undefined : { scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduced ? 0 : 0.7, ease: 'easeOut' }}
          style={{ transformOrigin: 'left' }}
        />
      </div>
    </div>
  );
}

export const Recognition = () => {
  return (
    <section id="recognition" className="scroll-mt-24 py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionReveal className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-eyebrow uppercase text-vibrant-teal mb-3">Demonstrated impact</p>
          <h2 className="text-heading-1 text-deep-navy">Earned, not asserted.</h2>
        </SectionReveal>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Speed */}
          <SectionReveal className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm">
            <p className="text-eyebrow uppercase text-vibrant-teal mb-2">Speed</p>
            <p className="text-deep-navy">
              <span className="text-display-l font-extrabold text-vibrant-teal">5–15×</span>{' '}
              <span className="text-heading-3 font-bold">faster</span>
            </p>
            <SpeedBand />
            <p className="mt-3 text-caption text-neutral-500">
              Against our own pre-Aqua implementation, on our own backtest, not a third-party system.
              The upper end depends on available cores.
            </p>
          </SectionReveal>

          {/* Correctness */}
          <SectionReveal delay={0.08} className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm">
            <p className="text-eyebrow uppercase text-vibrant-teal mb-2">Correctness</p>
            <p className="text-deep-navy">
              <span className="text-display-l font-extrabold text-deep-navy">1</span>{' '}
              <span className="text-heading-3 font-bold text-neutral-500">in a billion</span>
            </p>
            <p className="mt-4 text-body text-neutral-600">
              Every financial metric matched the reference to within one part in a billion.
            </p>
            <div className="mt-auto pt-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-vibrant-teal/10 px-3 py-1.5">
                <CheckCircle2 className="h-4 w-4 text-vibrant-teal" aria-hidden="true" />
                <span className="text-caption font-semibold text-deep-navy">
                  36 of 36 configurations · zero regressions
                </span>
              </span>
            </div>
          </SectionReveal>

          {/* General workloads */}
          <SectionReveal delay={0.16} className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm">
            <p className="text-eyebrow uppercase text-vibrant-teal mb-2">General workloads</p>
            <p className="text-deep-navy">
              <span className="text-display-l font-extrabold text-deep-navy">1.3–1.9×</span>{' '}
              <span className="text-heading-3 font-bold text-neutral-500">faster</span>
            </p>
            <p className="mt-4 text-body text-neutral-600">
              Consistent acceleration on broader numerical computing.
            </p>
            <p className="mt-auto pt-4 text-caption text-neutral-500">
              Across 209 tests on five hardware configurations.
            </p>
          </SectionReveal>
        </div>

        {/* Credential rail: formal recognition lives on the Company page. */}
        <SectionReveal delay={0.1} className="mt-8 text-center">
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
