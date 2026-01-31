'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Clock, DollarSign, Quote } from 'lucide-react';

const caseStudies = [
  {
    company: 'Mid-Sized Hedge Fund',
    aum: '$2B AUM',
    results: [
      { icon: DollarSign, label: 'Cost Reduction', value: '65%' },
      { icon: Clock, label: 'Time Saved', value: '400 hrs/mo' },
      { icon: TrendingUp, label: 'Performance Uplift', value: '0.8%' },
    ],
    quote: 'Zeton allowed us to reduce our analyst team by 60% while improving our strategy development time by 10x.',
    author: 'Chief Investment Officer',
  },
  {
    company: 'Long-Only Asset Manager',
    aum: '$5B AUM',
    results: [
      { icon: DollarSign, label: 'Annual Savings', value: '$1.2M' },
      { icon: Clock, label: 'Faster Deployment', value: '20x' },
      { icon: TrendingUp, label: 'Sharpe Improvement', value: '0.4' },
    ],
    quote: 'The formal verification gives us confidence that our strategies will perform exactly as expected in production.',
    author: 'Head of Quantitative Research',
  },
];

export const CaseStudies = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
            Real Results from Real Firms
          </h2>
          <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
            Our customers are achieving measurable improvements in cost, efficiency, and performance.
          </p>
        </motion.div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="border-neutral-200">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-deep-navy mb-1">{study.company}</h3>
                    <p className="text-vibrant-teal font-semibold">{study.aum}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {study.results.map((result, idx) => {
                      const IconComponent = result.icon;
                      return (
                        <div key={idx} className="text-center">
                          <IconComponent className="w-8 h-8 text-vibrant-teal mx-auto mb-2" />
                          <p className="text-3xl font-bold text-deep-navy mb-1">{result.value}</p>
                          <p className="text-sm text-neutral-600">{result.label}</p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="bg-light-gray rounded-lg p-6">
                    <Quote className="w-8 h-8 text-vibrant-teal mb-3" />
                    <p className="text-lg text-neutral-700 italic mb-3">"{study.quote}"</p>
                    <p className="text-sm text-neutral-600 font-semibold">— {study.author}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};