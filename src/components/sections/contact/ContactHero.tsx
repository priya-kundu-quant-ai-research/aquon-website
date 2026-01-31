'use client';

import { motion } from 'framer-motion';

export const ContactHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-deep-navy to-black">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Let's Start a Conversation
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Whether you're ready for a demo or just have a question, we're here to help.
          </p>
        </motion.div>
      </div>
    </section>
  );
};