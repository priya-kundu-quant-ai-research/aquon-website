'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const AquaFinancialComputing = () => {
  return (
    <>
      {/* What Aqua is */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6">
              A computation engine for the math at the core of modern finance.
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Portfolio construction is one of the most computationally demanding problems in
              finance: multi-layered, heavily constrained, and dependent on solving large
              quadratic-programming workloads quickly and correctly. Aqua, a NYU-licensed adaptive
              numerical computation engine, is purpose-built for exactly these workloads. On
              Zeton&apos;s production 10-year backtest (over half a million solver calls per run)
              Aqua delivers{' '}
              <span className="font-semibold text-deep-navy">5x to 15x end-to-end speedups with zero
              correctness regressions</span>, matching reference results to within one part in a
              billion. Across general numerical workloads it delivers{' '}
              <span className="font-semibold text-deep-navy">1.3x to 1.9x</span>, and it does so while
              remaining hardware-agnostic: Aqua profiles the machine it runs on and adapts
              automatically, from a constrained cloud VM to a high-core workstation, with no
              configuration from the caller.
            </p>
            <p className="text-neutral-500 text-base leading-relaxed mt-5">
              Aqua can now generate hardware-specialized native code at runtime across different
              instruction sets: the same source, tuned to the silicon it lands on.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The trust moat */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6">
              Fast is not enough. It has to be trustworthy.
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Institutional trust in financial infrastructure increasingly depends on the integrity
              of the software supply chain beneath it. Reliance on broadly distributed open-source
              packages introduces material risk. Aqua is a proprietary, audited, low-attack-surface
              numerical core, a controlled foundation for the numbers your capital depends on. We
              expect this dimension of Aqua&apos;s defensibility to grow in importance over the
              coming years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why it's hard to copy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6">
              A multi-year research arc, exclusively licensed.
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Aqua emerged from a multi-year research program at NYU and is exclusively licensed to
              Aquon. It is not trivially reproducible, and it gets faster and safer with every cycle
              the platform funds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Where it runs */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6">
              Proven in the hardest place first.
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-4">
              With deep domain expertise in quantitative finance, capital markets were the ideal
              proving ground. Aqua powers Zeton; Zeton runs AQTF. The engine is validated by real
              capital, in live markets, every day.
            </p>
            <p className="text-neutral-500 text-base italic mb-8">
              The principles behind Aqua generalize beyond finance; finance is where we prove them
              first.
            </p>
            <Link href="/zeton">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-white"
              >
                Explore the platform
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};
