'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const TippingPointHero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: targetRef, 
    offset: ["start start", "end start"] 
  });

  // Transform path from steep curve to flat line
  const pathProgress = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section 
      ref={targetRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-deep-navy via-[#16213e] to-black overflow-hidden"
    >

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-vibrant-teal text-sm uppercase tracking-widest mb-6">
            The Challenge
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            When Hardware Stops Getting Faster,<br />
            <span className="text-vibrant-teal">Software Must Get Smarter.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Aqua is Aquon&apos;s proprietary computation engine, built specifically for financial
            computing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};