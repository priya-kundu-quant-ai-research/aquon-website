'use client';

import { motion } from 'framer-motion';

export const CustomersHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-deep-navy to-black">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
            Customer Success Stories
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            See how leading investment firms are transforming their operations with Zeton.
          </p>
        </motion.div>
      </div>
    </section>
  );
};