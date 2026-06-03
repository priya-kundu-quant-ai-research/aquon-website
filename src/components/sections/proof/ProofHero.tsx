'use client';

import { motion } from 'framer-motion';

export const ProofHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-deep-navy to-black">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
            Proof, not promises.
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            We&apos;re early. We&apos;d rather show you what&apos;s real than borrow someone
            else&apos;s logo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
