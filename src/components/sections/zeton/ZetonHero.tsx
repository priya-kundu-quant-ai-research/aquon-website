'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const ZetonHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-deep-navy via-deep-navy to-black overflow-hidden">
      {/* Purple-led treatment — this is the Zeton page, and purple is Zeton's. */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rich-purple rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-rich-purple rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-display-l text-white mb-6 max-w-4xl mx-auto">
            The investment operating system for the managers the giants can&apos;t serve.
          </h1>
          <p className="text-body-l text-white/80 mb-8 max-w-3xl mx-auto">
            Construct, execute, monitor and oversee. One platform, broker-agnostic, built on Aqua.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-rich-purple hover:bg-rich-purple/90 text-white font-semibold px-8 py-6 text-lg"
          >
            <Link href="/contact">
              Request platform access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
