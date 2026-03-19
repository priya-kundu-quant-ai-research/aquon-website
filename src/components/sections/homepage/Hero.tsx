'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const rotatingWords = ['Intelligence.', 'Clarity.', 'Confidence.', 'Edge.', 'Efficiency.'];

export const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-deep-navy via-[#16213e] to-black overflow-hidden">

      {/* Background Animation */}
      <div className="absolute inset-0 opacity-0">
        <div className="absolute inset-0 bg-gradient-to-br from-rich-purple/20 to-vibrant-teal/20" />
        {/* Animated circles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-vibrant-teal rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rich-purple rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Animated Headline with Rotating Word */}
        <div className="mb-6">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Portfolio Management Built on{' '}
            </motion.span>
            <span className="inline-block min-w-[300px] md:min-w-[400px] text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-vibrant-teal inline-block"
                >
                  {rotatingWords[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-3xl mx-auto"
        >
          Powered by proprietary technology and an intuitive AI assistant.
          
          {/* Zeton is the portfolio intelligence platform designed to help financial advisors 
          design, evaluate, and manage portfolios with a systematic, data-driven approach.  */}
          <br />
          {/* <span className="text-vibrant-teal">
            Powered by proprietary technology and an intuitive AI assistant.
          </span> */}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/contact" className="cursor-pointer">
            <Button size="lg" className="bg-vibrant-teal hover:bg-vibrant-teal/90 text-white font-semibold px-8 py-6 text-lg">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Demo
            </Button>
          </Link>
          <Link href="/zeton" className="cursor-pointer">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-rich-purple text-rich-purple hover:bg-rich-purple hover:text-white font-semibold px-8 py-6 text-lg transition-all cursor-pointer"
            >
              Explore the Platform
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};