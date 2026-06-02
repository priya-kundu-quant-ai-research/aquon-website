'use client';

import { motion } from 'framer-motion';

export const CompanyHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-deep-navy to-black">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 max-w-4xl mx-auto">
            A fund and a platform, built on the same engine.
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Aquon is a deep-tech quant firm and an NYU research spin-off, building both sides of the
            systematic-investing stack.
          </p>
        </motion.div>
      </div>
    </section>
  );
};