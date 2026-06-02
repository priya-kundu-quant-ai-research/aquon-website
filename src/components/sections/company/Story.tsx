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
            What we&apos;re building.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Story Content */}
            <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
              <p>
                Aquon operates as both a quantitative fund and a technology platform — running our own
                systematic strategies through AQTF and commercializing the platform beneath them to
                other emerging managers, family offices, and ETF issuers.
              </p>
              <p>
                The reference model is BlackRock&apos;s Aladdin at institutional scale and Numerai at
                venture pace: a credible operating fund anchoring a technology business beneath it,
                each side reinforcing the other.
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