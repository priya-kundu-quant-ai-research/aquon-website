'use client';

import { motion } from 'framer-motion';

export const CompanyHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-deep-navy to-black">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-display-l text-white max-w-4xl mx-auto"
        >
          An NYU research problem that became an investment platform.
        </motion.h1>
      </div>
    </section>
  );
};
