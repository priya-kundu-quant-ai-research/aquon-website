'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Cpu, LayoutGrid, TrendingUp } from 'lucide-react';

const layers = [
  {
    name: 'Aqua',
    label: 'the engine',
    icon: Cpu,
    description: 'A NYU-licensed computation core built specifically for financial computing.',
  },
  {
    name: 'Zeton',
    label: 'the platform',
    icon: LayoutGrid,
    description: 'Aladdin-class portfolio operations for the managers the giants can’t serve.',
  },
  {
    name: 'AQTF',
    label: 'the fund',
    icon: TrendingUp,
    description: 'A systematic, market-neutral strategy, live on Interactive Brokers.',
  },
];

export const TheStack = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
            One firm. Three layers. One advantage.
          </h2>
          <p className="text-neutral-600 text-lg">
            Aquon is built as a stack. <span className="font-semibold text-deep-navy">Aqua</span>,
            our proprietary computation engine, powers{' '}
            <span className="font-semibold text-deep-navy">Zeton</span>, the investment operating
            system — and <span className="font-semibold text-deep-navy">AQTF</span>, our own
            systematic fund, runs live on Zeton every trading day. The fund proves the platform. The
            platform funds the engine. The engine keeps the fund ahead.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {layers.map((layer, index) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-2 border-vibrant-teal/20 h-full hover:shadow-xl transition-all">
                  <CardContent className="text-center">
                    <div className="w-14 h-14 rounded-2xl bg-vibrant-teal/10 flex items-center justify-center mx-auto mb-5">
                      <Icon className="text-vibrant-teal" size={28} strokeWidth={1.6} />
                    </div>
                    <h3 className="text-2xl font-bold text-deep-navy">
                      {layer.name} <span className="text-neutral-400 font-medium text-lg">— {layer.label}</span>
                    </h3>
                    <p className="text-neutral-600 mt-3 leading-relaxed">{layer.description}</p>
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
