'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
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
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Headline */}
        <div className="mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white"
          >
            We don&apos;t just build the technology.{' '}
            <span className="text-vibrant-teal">We trade on it.</span>
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-3xl mx-auto"
        >
          The operating system for the next generation of systematic managers — anchored by our own
          fund, powered by our own computation engine.
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
              Talk to our team
            </Button>
          </Link>
          <Link href="/zeton" className="cursor-pointer">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-rich-purple text-rich-purple hover:bg-rich-purple hover:text-white font-semibold px-8 py-6 text-lg transition-all cursor-pointer"
            >
              Explore the platform
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
