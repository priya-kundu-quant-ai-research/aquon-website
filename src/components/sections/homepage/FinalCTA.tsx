'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';


export const FinalCTA = () => {
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
            Ready to Stop Leaking Alpha?
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            See how Zeton can transform your portfolio management operations. 
            Schedule a personalized demo with our team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="cursor-pointer">
                <Button size="lg" className="bg-vibrant-teal hover:bg-vibrant-teal/90 text-white font-semibold px-8 py-6 text-lg">
                <Calendar className="mr-2 h-5 w-5" />
                Talk to Our Team
                </Button>
            </Link>
            <Link href="/technology" className="cursor-pointer">
                <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-deep-navy font-semibold px-8 py-6 text-lg"
                >
                Explore Aqua
                <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-white/60 text-sm mb-4">Trusted by leading investment firms</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/40 text-sm">
              <span>✓ SOC 2 Compli-ant</span>
              <span>✓ Bank-Grade Security</span>
              <span>✓ 99.9% Uptime</span>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};