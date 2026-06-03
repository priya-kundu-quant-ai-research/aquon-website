'use client';

import { motion } from 'framer-motion';

export const Flywheel = () => {
  return (
    <section className="py-20 bg-deep-navy">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why the hybrid is the moat.
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Most asset managers can&apos;t build a platform. Most platform companies can&apos;t run a
            fund. Doing both, credibly, is the hard part and the durable advantage. The fund&apos;s
            live track record is the most credible signal that the platform works. The platform&apos;s
            growth funds the technology that keeps the fund competitive. Each side makes the other
            stronger.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
