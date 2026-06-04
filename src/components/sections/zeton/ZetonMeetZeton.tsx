'use client';

import { motion } from 'framer-motion';

export const ZetonMeetZeton = () => {
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
            Meet Zeton.
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed">
            Below the institutional tier, capable managers stitch together spreadsheets, broker
            APIs, and point tools to approximate what an Aladdin-class system does in one place.
            Zeton replaces that patchwork. It consolidates the entire workflow, from portfolio
            construction to execution and oversight, into a single platform organized as
            intelligence domains.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
