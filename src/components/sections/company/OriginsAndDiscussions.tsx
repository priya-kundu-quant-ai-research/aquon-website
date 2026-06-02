'use client';

import { motion } from 'framer-motion';

export const Origins = () => {
  return (
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
            An NYU research spin-off.
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed">
            Aquon is built around Aqua, a numerical computation language developed at NYU and
            exclusively licensed to us. Beyond raw performance, Aqua gives the firm a controlled,
            audited, low-attack-surface numerical core — a structural advantage as institutional
            trust comes to depend on software supply-chain integrity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export const ActiveDiscussions = () => {
  return (
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
            Active discussions.
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed">
            On the partnership side, Aquon is in late-stage discussions with a Northeast US ETF
            sponsor regarding a design-partner arrangement around one of our systematic strategies,
            and in early-stage white-label discussions with an international broker regarding
            deployment to its client base.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
