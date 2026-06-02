'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Gauge } from 'lucide-react';

export const FirstProvingGround = () => {
  const targetRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // Orchestrate the sequence
  const aquaOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const zetonOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.35, 0.5, 0.7],
    [0, 1, 1, 0]
  );

  const zetonScale = useTransform(
    scrollYProgress,
    [0.15, 0.35, 0.5, 0.7],
    [0.92, 1, 1, 0.92]
  );

  const zetonY = useTransform(
    scrollYProgress,
    [0.15, 0.35, 0.5, 0.7],
    [40, 0, 0, -40]
  );

  const statsOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const statsY = useTransform(scrollYProgress, [0.5, 0.7], [20, 0]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-light-gray">
        {/* isolate ensures predictable stacking context for z-index layers */}
        <div className="container mx-auto px-6 relative isolate">
          {/* AQUA Logo/Symbol (Fading Out) */}
          <motion.div
            style={{ opacity: aquaOpacity }}
            className="absolute inset-0 z-0 flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="text-9xl font-bold text-vibrant-teal/20 mb-4"
              >
                AQUA
              </motion.div>
              <p className="text-xl text-neutral-600">
                The compiler technology powering the future...
              </p>
            </div>
          </motion.div>

          {/* ZETON UI Mockup (Fading In) */}
          <motion.div
            style={{
              opacity: zetonOpacity,
              scale: zetonScale,
              y: zetonY,
            }}
            className="relative z-10"
          >
            <div className="max-w-5xl mx-auto">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center mb-12"
              >
                <p className="text-vibrant-teal text-sm uppercase tracking-widest mb-4">
                  From Compiler to Capital Markets
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6">
                  Finance: The Perfect First Challenge.
                </h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  With 25 years of domain expertise in quantitative finance, capital markets
                  became the ideal proving ground for AQUA. Portfolio optimization is one of
                  the most computationally demanding challenges in finance. It's multi-layered,
                  constrained, and requires both speed and precision.
                </p>
              </motion.div>

              {/* ZETON UI Mockup */}
              <div className="bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden">
                {/* Header Bar */}
                <div className="bg-deep-navy px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold text-vibrant-teal">ZETON</div>
                    <div className="text-sm text-white/60">Portfolio OS</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-vibrant-teal/10 to-vibrant-teal/5 rounded-lg p-6 border border-vibrant-teal/20">
                      <div className="text-sm text-vibrant-teal font-semibold mb-2">Z-SCOPE</div>
                      <div className="text-2xl font-bold text-deep-navy mb-1">
                        Portfolio Intelligence
                      </div>
                      <div className="text-xs text-neutral-600">Active</div>
                    </div>

                    <div className="bg-gradient-to-br from-rich-purple/10 to-rich-purple/5 rounded-lg p-6 border border-rich-purple/20">
                      <div className="text-sm text-rich-purple font-semibold mb-2">Z-STRIKE</div>
                      <div className="text-2xl font-bold text-deep-navy mb-1">
                        Execution Engine
                      </div>
                      <div className="text-xs text-neutral-600">Running</div>
                    </div>

                    <div className="bg-gradient-to-br from-deep-navy/10 to-deep-navy/5 rounded-lg p-6 border border-deep-navy/20">
                      <div className="text-sm text-deep-navy font-semibold mb-2">Z-SIGHT</div>
                      <div className="text-2xl font-bold text-deep-navy mb-1">Market AI</div>
                      <div className="text-xs text-neutral-600">Monitoring</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Overlay (Fading In Last) */}
          <motion.div
            style={{ opacity: statsOpacity, y: statsY }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none"
          >
            {/* Stats Header */}
            <div className="text-center mb-10 px-4">
              <p className="text-vibrant-teal text-sm uppercase tracking-widest mb-4">
                The Real World Imapct
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
                ZETON proves what AQUA can do.
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                First we conquer Financial Computing and then go beyond the horizon.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full px-4">
              <div className="bg-vibrant-teal rounded-2xl p-8 text-center shadow-2xl">
                <TrendingUp className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="text-6xl font-bold text-white mb-2">5&ndash;15&times;</div>
                <div className="text-xl text-white/90 font-semibold mb-2">
                  Faster Portfolio Optimization
                </div>
                <div className="text-sm text-white/70">
                  End-to-end speedup on Zeton&apos;s 10-year backtest, with zero correctness regressions.
                </div>
              </div>

              <div className="bg-deep-navy rounded-2xl p-8 text-center shadow-2xl">
                <Gauge className="w-12 h-12 text-vibrant-teal mx-auto mb-4" />
                <div className="text-6xl font-bold text-white mb-2">1.3&ndash;1.9&times;</div>
                <div className="text-xl text-white/90 font-semibold mb-2">
                  Across General Workloads
                </div>
                <div className="text-sm text-white/70">
                  Consistent acceleration on broader numerical computing, hardware-agnostic by design.
                </div>
              </div>
            </div>
          </motion.div>
                  
          {/* Closing statement — stays in the same viewport */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="text-center text-lg md:text-2xl font-semibold text-deep-navy mt-6 md:mt-8 max-w-5xl mx-auto"
          >
            The principles that make ZETON revolutionary are universal.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
