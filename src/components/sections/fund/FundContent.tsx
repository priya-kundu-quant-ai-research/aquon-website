'use client';

import { motion } from 'framer-motion';

export const FundContent = () => {
  return (
    <>
      {/* The thesis */}
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
              AQTF (the Aquon Traded Fund) is our own systematic strategy and the most
              demanding customer of our own technology. It is optimized equity portfolios
              benchmarked against major US indices (NASDAQ-100 and Dow Jones), paired with
              ETF-based short hedges to neutralize market exposure, rebalanced weekly, and
              executed through Interactive Brokers on Aquon&apos;s proprietary platform. Carlos
              serves as portfolio manager.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why it matters */}
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
              The most credible signal that the platform works.
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              A platform is only as believable as the capital that trusts it. AQTF runs real
              money, live, on the same system we license to other managers. Its track record is
              being built openly over the coming quarters, and every trading day it extends that
              record, it strengthens the case for the platform beneath it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The ambition */}
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
              Built to scale to <span className="text-vibrant-teal">$250M</span>.
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              We&apos;re building AQTF toward <span className="font-semibold text-deep-navy">$250M
              in assets under management</span>, growing through a disciplined founding-client
              cohort sourced from a deep institutional network. As the strategy formalizes, we
              expect to move toward a registered structure, most likely a private fund or a
              publicly listed ETF wrapper.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Invitation */}
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
              Interested in participating?
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              AQTF is currently a private pilot among a small number of qualified founding-client
              participants. If you are a qualified or accredited party interested in the
              founding-client program, we&apos;d welcome a conversation.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};
