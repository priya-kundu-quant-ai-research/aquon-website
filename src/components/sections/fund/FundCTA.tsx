'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const FundCTA = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-deep-navy to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-xl md:text-xl lg:text-5xl font-bold text-white mb-6">
            Interested in the strategy?
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            AQTF is a private pilot open to a small number of qualified founding-client
            participants. Start a conversation with our team.
          </p>

          <div className="flex justify-center items-center">
            <Link href="/contact" className="cursor-pointer">
              <Button
                size="lg"
                className="bg-vibrant-teal hover:bg-vibrant-teal/90 text-white font-semibold px-8 py-6 text-lg"
              >
                Inquire about the pilot
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Compliance footer */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-[11px] leading-relaxed text-white/40 italic max-w-3xl mx-auto">
              AQTF is a private pilot and is not registered under the Investment Company Act of
              1940. This page is informational only and does not constitute investment advice, an
              offer to sell, or a solicitation of an offer to buy any security. Any participation is
              limited to qualified or accredited parties pursuant to applicable exemptions. Past
              performance, including any back-tested results, is not indicative of future results.
              Capital is at risk, including the possible loss of principal. Prospective participants
              should consult their own financial, legal, and tax advisors.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
