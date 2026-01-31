'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const SocialProof = () => {
  // Single public-friendly line for partnerships
  const clients = ['Large GSE and Private Company Pilots'];

  return (
    // White background to match the rest of your site
    <section className="py-10 md:py-12 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Title (tighter spacing + smaller type) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-deep-navy mb-2">
            The New Standard in Portfolio Management
          </h2>
          <p className="text-deep-navy/70 text-base max-w-3xl mx-auto">
            Trusted by leading investment firms to power their portfolio operations.
          </p>
        </motion.div>

        {/* Client / Partnerships (compact + monochrome) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-8 md:mb-10"
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="px-4 py-2 rounded-md bg-[var(--color-deep-navy)] hover:bg-[var(--color-deep-navy)]/70 text-white font-semibold">
              {client}
            </div>
          ))}
        </motion.div>

        {/* Testimonial (tighter padding + black/white only) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-white border-black/15">
            <CardContent className="p-6 md:p-8">
              <Quote className="text-vibrant-teal w-8 h-8 mb-4" />

              <blockquote className="text-base md:text-lg text-deep-navy leading-relaxed mb-5 font-normal italic">
                "Zeton has transformed our portfolio construction process. What used to take
                our team two weeks now takes less than an hour. The backtesting rigor gives
                us confidence, and the execution quality is unmatched."
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border border-black/15 bg-white flex items-center justify-center text-black font-semibold text-sm">
                  JS
                </div>
                <div className="leading-tight">
                  <p className="text-black font-semibold">John Smith</p>
                  <p className="text-black/60 text-sm">CIO, Leading Investment Firm</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Optional: tiny footnote to clarify why logos aren't shown (still compact) */}
          <p className="text-center text-sm text-black/50 mt-3">
            Partner names available upon request.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
