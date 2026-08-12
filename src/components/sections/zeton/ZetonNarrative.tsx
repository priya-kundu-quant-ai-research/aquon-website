'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

// Copy verbatim from 02 · Zeton · Value.
const valueProps = [
  {
    title: 'Aladdin-class, without the nine-figure budget.',
    description:
      'The optimization, execution quality and oversight of an institutional system, without a seven-figure license.',
  },
  {
    title: 'Sell the kitchen, never the recipes.',
    description:
      'Licensees get the full platform; their strategies and data stay entirely their own.',
  },
  {
    title: 'Operator wins.',
    description:
      'Faster portfolio builds, fewer manual errors, continuous drift monitoring, better execution, and a clean audit trail for client reporting.',
  },
  {
    title: 'Proprietary core.',
    description: "Aqua, our NYU-originated engine, underpins the platform's speed and security.",
  },
];

export const ZetonValueProp = () => {
  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <h2 className="text-heading-1 text-deep-navy">
            Institutional capability at emerging-manager economics.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {valueProps.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-neutral-200 h-full bg-white">
                <CardContent>
                  <h3 className="text-heading-3 text-deep-navy mb-2">{point.title}</h3>
                  <p className="text-body text-neutral-600 leading-relaxed">{point.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
