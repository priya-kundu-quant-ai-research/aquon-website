'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const Story = () => {
  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-12 text-center">
            About Aquon Inc.
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Story Content */}
            <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
              <p>
                Aquon Inc. builds trustworthy optimization infrastructure for high-impact decision systems. 
                We believe critical decisions from capital markets to energy grids to global supply chains deserve 
                computational foundations designed for trust, not just speed.
              </p>
              <p>
                Our approach embeds correctness, auditability, and reproducibility directly into computation through Aqua, 
                a new compiler class for decision systems. Our first product, Zeton, proves this technology in professional 
                asset management, where performance and trust are non-negotiable.
              </p>
              <p>
                Founded by quantitative researchers and engineers with deep experience in financial markets and compilers, 
                we’re building the future of decision systems, one verified line of code at a time.
              </p>
            </div>

            {/* Right: Logo */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md aspect-square bg-gradient-to-br from-light-gray to-white rounded-3xl flex items-center justify-center p-12 shadow-xl">
                {/* Placeholder for Aquon Logo - Replace with actual logo */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="/images/aquon-logo.png"
                        alt="Aquon Inc. logo"
                        width={200}
                        height={200}
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};