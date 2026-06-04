'use client';

import { motion } from 'framer-motion';

/* ── Hedge diagram SVG ────────────────────────────────────────────────────── */
function HedgeDiagram() {
  return (
    <svg
      viewBox="0 0 380 80"
      aria-label="Long basket minus ETF hedge equals market-neutral exposure"
      role="img"
      className="w-full max-w-[420px] mx-auto mt-8"
    >
      {/* Long basket box */}
      <rect x="2" y="10" width="120" height="60" rx="8" fill="#0D3D4D" fillOpacity="0.08" stroke="#0D3D4D" strokeWidth="1.5" />
      <text x="62" y="35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0D3D4D" fontFamily="sans-serif">Long basket</text>
      <text x="62" y="50" textAnchor="middle" fontSize="8.5" fill="#0D3D4D" fontFamily="sans-serif" opacity="0.7">Optimized equity</text>
      <text x="62" y="62" textAnchor="middle" fontSize="8.5" fill="#0D3D4D" fontFamily="sans-serif" opacity="0.7">portfolios</text>

      {/* Minus sign */}
      <text x="143" y="45" textAnchor="middle" fontSize="22" fill="#0D3D4D" fontFamily="sans-serif" opacity="0.5">−</text>

      {/* ETF hedge box */}
      <rect x="162" y="10" width="120" height="60" rx="8" fill="#1DBFBF" fillOpacity="0.08" stroke="#1DBFBF" strokeWidth="1.5" />
      <text x="222" y="35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0D3D4D" fontFamily="sans-serif">ETF hedge</text>
      <text x="222" y="50" textAnchor="middle" fontSize="8.5" fill="#0D3D4D" fontFamily="sans-serif" opacity="0.7">Short hedges to</text>
      <text x="222" y="62" textAnchor="middle" fontSize="8.5" fill="#0D3D4D" fontFamily="sans-serif" opacity="0.7">neutralize exposure</text>

      {/* Equals sign */}
      <text x="303" y="45" textAnchor="middle" fontSize="22" fill="#0D3D4D" fontFamily="sans-serif" opacity="0.5">=</text>

      {/* Neutral exposure box */}
      <rect x="322" y="10" width="56" height="60" rx="8" fill="#1DBFBF" fillOpacity="0.15" stroke="#1DBFBF" strokeWidth="2" />
      <text x="350" y="37" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#0D3D4D" fontFamily="sans-serif">Market</text>
      <text x="350" y="48" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#0D3D4D" fontFamily="sans-serif">neutral</text>
    </svg>
  );
}

/* ── Target SVG ────────────────────────────────────────────────────────────── */
function TargetDiagram() {
  return (
    <svg
      viewBox="0 0 160 160"
      aria-label="$250M target"
      role="img"
      className="w-full max-w-[180px] mx-auto mt-8"
    >
      {/* Concentric rings */}
      {[70, 55, 40, 25].map((r, i) => (
        <circle
          key={r}
          cx="80"
          cy="80"
          r={r}
          fill="none"
          stroke="#1DBFBF"
          strokeWidth="1.5"
          strokeOpacity={0.15 + i * 0.12}
        />
      ))}
      {/* Crosshairs */}
      <line x1="80" y1="5" x2="80" y2="155" stroke="#1DBFBF" strokeWidth="1" strokeOpacity="0.2" />
      <line x1="5" y1="80" x2="155" y2="80" stroke="#1DBFBF" strokeWidth="1" strokeOpacity="0.2" />
      {/* Center dot */}
      <circle cx="80" cy="80" r="9" fill="#1DBFBF" fillOpacity="0.9" />
      {/* Target label */}
      <text x="80" y="134" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0D3D4D" fontFamily="sans-serif">$250M target</text>
    </svg>
  );
}

/* ── Component ─────────────────────────────────────────────────────────────── */

export const FundContent = () => {
  return (
    <>
      {/* We eat our own cooking (merged thesis + why it matters) */}
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
              We eat our own cooking.
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              AQTF is our own systematic strategy and the most demanding customer of our own
              technology. It builds optimized equity portfolios benchmarked to major US indices,
              hedged with ETFs to neutralize market exposure, rebalanced weekly, and executed
              through Interactive Brokers on the Zeton platform. Running real capital on the same
              system we license to others is the most credible proof it works.
            </p>
            <p className="text-neutral-500 text-sm mt-3 italic">
              Carlos serves as portfolio manager.
            </p>
            <HedgeDiagram />
          </motion.div>
        </div>
      </section>

      {/* Built to scale to $250M */}
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
              Built to scale to <span className="text-vibrant-teal">$250M</span>.
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              We are growing AQTF toward{' '}
              <span className="font-semibold text-deep-navy">$250M in assets under management</span>{' '}
              through a disciplined founding-client cohort. As the strategy formalizes, we expect to
              move toward a registered structure, most likely a private fund or a listed ETF.
            </p>
            <TargetDiagram />
          </motion.div>
        </div>
      </section>

      {/* Interested in participating */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6">
              Interested in participating?
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              AQTF is currently a private pilot among a small number of qualified founding-client
              participants. If you are a qualified or accredited party interested in the
              founding-client program, we&apos;d welcome a conversation.
            </p>
          </motion.div>
        </div>
      </section> */}
    </>
  );
};
