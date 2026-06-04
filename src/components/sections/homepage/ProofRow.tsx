'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Wallet, GraduationCap, Handshake } from 'lucide-react';

const proofs = [
  {
    icon: Wallet,
    title: 'Live capital, live platform.',
    description: 'AQTF runs real money on Interactive Brokers, on Zeton, every trading day.',
  },
  {
    icon: GraduationCap,
    title: 'NYU research spin-off.',
    description:
      '~$132K in non-dilutive recognition across four competitive programs; Aqua exclusively licensed from NYU.',
  },
  {
    icon: Handshake,
    title: 'Partnerships in motion.',
    description:
      'Active discussions with an international broker (white-label) and a Northeast US ETF sponsor (design partner).',
  },
];

export const ProofRow = () => {
  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy">
            Earned, not asserted.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {proofs.map((proof, index) => {
            const Icon = proof.icon;
            return (
              <motion.div
                key={proof.title}
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
                    <h3 className="text-xl font-bold text-deep-navy mb-2">{proof.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{proof.description}</p>
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
