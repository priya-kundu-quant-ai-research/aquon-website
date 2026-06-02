'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Wallet, GraduationCap, Handshake } from 'lucide-react';

const blocks = [
  {
    icon: Wallet,
    title: 'Our own capital.',
    description:
      'AQTF runs real money, live on Interactive Brokers, on Zeton — multiple client accounts, automated weekly rebalancing, optimized index strategies. The platform’s first and toughest customer is us.',
  },
  {
    icon: GraduationCap,
    title: 'Independent recognition.',
    description:
      '~$132K non-dilutive across NSF I-Corps, NYU TAC, NYU Summer Launchpad, and NYU Tech Venture — plus exclusively licensed IP from NYU.',
  },
  {
    icon: Handshake,
    title: 'Partners in motion.',
    description:
      'Active discussions with an international broker (white-label) and a Northeast US ETF sponsor (design partner). Named on request, under NDA.',
  },
];

export const ProofBlocks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {blocks.map((block, index) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-neutral-200 h-full">
                  <CardContent>
                    <div className="w-14 h-14 rounded-2xl bg-vibrant-teal/10 flex items-center justify-center mb-5">
                      <Icon className="text-vibrant-teal" size={28} strokeWidth={1.6} />
                    </div>
                    <h3 className="text-xl font-bold text-deep-navy mb-2">{block.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{block.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
