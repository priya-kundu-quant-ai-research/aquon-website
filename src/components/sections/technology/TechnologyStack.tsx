'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Layers, Code, Rocket } from 'lucide-react';

const layers = [
  {
    icon: Code,
    title: 'Your Financial Logic',
    description: 'Write strategies in a high-level, intuitive language designed for finance professionals.',
    items: ['Portfolio construction rules', 'Risk constraints', 'Execution parameters'],
  },
  {
    icon: Layers,
    title: 'Aqua Compiler',
    description: 'Our compiler transforms your logic into verified, optimized code.',
    items: ['Formal verification', 'Performance optimization', 'Error detection'],
  },
  {
    icon: Rocket,
    title: 'Production Deployment',
    description: 'Deploy with confidence knowing your strategy is mathematically proven.',
    items: ['Real-time execution', 'Monitoring & alerts', 'Performance tracking'],
  },
];

export const TechnologyStack = () => {
  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
            How Aqua Works
          </h2>
          <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
            A three-layer architecture that bridges the gap between financial logic and production code.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {layers.map((layer, index) => {
            const IconComponent = layer.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="bg-white border-neutral-200 hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      {/* Number Badge */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-vibrant-teal/10 border-2 border-vibrant-teal flex items-center justify-center">
                          <span className="text-2xl font-bold text-vibrant-teal">{index + 1}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-3">
                          <IconComponent className="w-8 h-8 text-vibrant-teal" strokeWidth={1.5} />
                          <h3 className="text-2xl font-bold text-deep-navy">{layer.title}</h3>
                        </div>
                        <p className="text-neutral-600 text-lg mb-4">{layer.description}</p>
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {layer.items.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-vibrant-teal" />
                              <span className="text-sm text-neutral-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Connecting Arrow */}
                {index < layers.length - 1 && (
                  <div className="flex justify-center py-4">
                    <div className="w-0.5 h-8 bg-vibrant-teal/30" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};