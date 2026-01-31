'use client';

import { motion } from 'framer-motion';
import { Zap, Leaf, CheckCircle } from 'lucide-react';


export const Breakthrough = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-vibrant-teal text-sm uppercase tracking-widest mb-4">
            The Foundation
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy">
            A Compiler for the Post-Moore Era.
          </h2>
        </motion.div>

        {/* TWO CARD GRID */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

          {/* ================= HARDWARE LIMITS ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-2xl flex"
          >
            <div className="bg-gradient-to-br from-rich-purple to-deep-navy p-10 flex flex-col justify-between w-full">

              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Hardware Limits
                </h3>

                <p className="text-white/80 leading-relaxed mb-8">
                  Performance improvements are reaching a plateau for complex
                  optimization workloads.
                </p>
              </div>

              {/* Graph */}
              <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                <svg viewBox="0 0 640 260" className="w-full h-auto">
                  
                  {/* axes */}
                  <line x1="54" y1="18" x2="54" y2="230" stroke="rgba(255,255,255,0.55)" strokeWidth="3" />
                  <line x1="54" y1="230" x2="620" y2="230" stroke="rgba(255,255,255,0.55)" strokeWidth="3" />

                  {/* physical limit */}
                  <line
                    x1="54"
                    y1="92"
                    x2="620"
                    y2="92"
                    stroke="rgba(255,255,255,0.85)"
                    strokeWidth="3"
                    strokeDasharray="10 10"
                  />

                  <text
                    x="470"
                    y="75"
                    fill="rgba(255,255,255,0.9)"
                    fontSize="16"
                    fontWeight="700"
                    letterSpacing="0.06em"
                  >
                    PHYSICAL LIMITS
                  </text>

                  {/* area */}
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    d="M54 230
                       L54 190
                       C90 170, 120 150, 160 135
                       C220 110, 270 98, 320 104
                       C380 110, 430 94, 480 92
                       C530 90, 575 92, 620 92
                       L620 230
                       Z"
                    fill="rgba(45, 212, 191, 0.35)"
                    stroke="rgba(45, 212, 191, 0.9)"
                    strokeWidth="3"
                  />

                </svg>

                <p className="mt-4 text-sm text-white/70">
                  Moore&apos;s Law is slowing down.
                </p>
              </div>

            </div>
          </motion.div>

          {/* ================= SOLUTION ================= */}
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-light-gray to-white rounded-3xl p-10 shadow-2xl flex flex-col justify-between border border-neutral-100"
            >
            <div>
                <p className="text-vibrant-teal text-sm uppercase tracking-wide mb-3">
                The Solution
                </p>

                <h3 className="text-3xl font-bold text-deep-navy mb-6">
                Purpose-built for the New AI Era
                </h3>

                <p className="text-lg text-neutral-700 leading-relaxed">
                We built purpose-designed domain-specific languages that treat optimization
                models as <span className="font-semibold text-deep-navy">first-class objects</span>,
                enabling machines to compile smarter and deliver consistently superior outcomes; which are:
                </p>
            </div>
            {/* NEW BADGE LAYOUT */}
            <div className="mt-10">

            {/* Top row */}
            <div className="grid grid-cols-2 gap-4 mb-4">
                {[
                { label: 'High Performance', Icon: Zap },
                { label: 'Energy Efficient', Icon: Leaf },
                ].map(({ label, Icon }) => (
                <div
                    key={label}
                    className="flex items-center justify-center gap-3 rounded-full border border-vibrant-teal/25 bg-vibrant-teal/10 px-5 py-3"
                >
                    <Icon className="w-5 h-5 text-vibrant-teal" strokeWidth={2.2} />
                    <p className="text-sm font-semibold text-deep-navy">
                    {label}
                    </p>
                </div>
                ))}
            </div>

            {/* Bottom centered */}
            <div className="flex justify-center">
                <div className="flex items-center gap-3 rounded-full border border-vibrant-teal/25 bg-vibrant-teal/10 px-6 py-3">
                <CheckCircle className="w-5 h-5 text-vibrant-teal" strokeWidth={2.2} />
                <p className="text-sm font-semibold text-deep-navy">
                    Reliable Results
                </p>
                </div>
            </div>

            </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};
