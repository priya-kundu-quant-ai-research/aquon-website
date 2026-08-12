'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ConvergenceField } from '@/components/sections/homepage/ConvergenceField';
import { LayeredArchitecture } from '@/components/visuals/LayeredArchitecture';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-deep-navy via-[#16213e] to-black overflow-hidden">
      {/* Ambient optimization-converging animation, behind the content. */}
      <ConvergenceField />

      <div className="relative z-10 container mx-auto px-6 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: headline, subhead, CTAs */}
          <div className="text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-display-xl text-white mb-6"
            >
              Quantitative portfolio math engineered{' '}
              <span className="text-vibrant-teal">at hardware speed.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-body-l text-neutral-300 mb-10 max-w-xl"
            >
              Aquon builds Aqua, a computation engine that adapts to the machine it runs on, and
              Zeton, the investment platform built on top of it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-vibrant-teal hover:bg-vibrant-teal/90 text-white font-semibold px-8 py-6 text-lg"
              >
                <Link href="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Talk to our team
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-deep-navy font-semibold px-8 py-6 text-lg"
              >
                <Link href="/zeton">
                  Explore Zeton
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right: the stack (Zeton on Aqua on hardware) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="w-full"
          >
            <LayeredArchitecture onDark />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
