'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const ZetonHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-deep-navy via-deep-navy to-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vibrant-teal rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rich-purple rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
            The Zeton Platform
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            A unified operating system for portfolio management that combines intelligence, 
            execution, and insight into one seamless workflow.
          </p>
        </motion.div>
      </div>
    </section>
  );
};