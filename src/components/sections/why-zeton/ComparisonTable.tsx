'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const features = [
  { category: 'Portfolio Construction', feature: 'AI-Powered Strategy Design', zeton: true, inhouse: false, legacy: false },
  { category: 'Portfolio Construction', feature: 'Formal Verification', zeton: true, inhouse: false, legacy: false },
  { category: 'Portfolio Construction', feature: 'Advanced Backtesting', zeton: true, inhouse: true, legacy: true },
  { category: 'Execution', feature: 'Smart Order Routing', zeton: true, inhouse: false, legacy: true },
  { category: 'Execution', feature: 'Execution Alpha Documentation', zeton: true, inhouse: false, legacy: false },
  { category: 'Execution', feature: 'Real-Time Analytics', zeton: true, inhouse: true, legacy: false },
  { category: 'Monitoring', feature: '24/7 AI Monitoring', zeton: true, inhouse: false, legacy: false },
  { category: 'Monitoring', feature: 'Regime Shift Detection', zeton: true, inhouse: false, legacy: false },
  { category: 'Monitoring', feature: 'Anomaly Alerts', zeton: true, inhouse: true, legacy: false },
  { category: 'Integration', feature: 'Unified Platform', zeton: true, inhouse: false, legacy: false },
  { category: 'Integration', feature: 'Single Workflow', zeton: true, inhouse: false, legacy: false },
  { category: 'Support', feature: 'Implementation Support', zeton: true, inhouse: false, legacy: true },
];

export const ComparisonTable = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
            How Zeton Compares
          </h2>
          <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
            See why leading firms are choosing Zeton over building in-house or using legacy vendors.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-neutral-200">
                <th className="text-left py-4 px-6 font-bold text-deep-navy">Feature</th>
                <th className="text-center py-4 px-6">
                  <div className="font-bold text-vibrant-teal text-lg">Zeton</div>
                </th>
                <th className="text-center py-4 px-6">
                  <div className="font-semibold text-neutral-600">In-House</div>
                </th>
                <th className="text-center py-4 px-6">
                  <div className="font-semibold text-neutral-600">Legacy Vendors</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((item, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="border-b border-neutral-100 hover:bg-light-gray transition-colors"
                >
                  <td className="py-4 px-6 text-neutral-700">{item.feature}</td>
                  <td className="py-4 px-6 text-center">
                    {item.zeton ? (
                      <Check className="w-6 h-6 text-vibrant-teal mx-auto" strokeWidth={3} />
                    ) : (
                      <X className="w-6 h-6 text-neutral-300 mx-auto" strokeWidth={2} />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {item.inhouse ? (
                      <Check className="w-6 h-6 text-neutral-400 mx-auto" strokeWidth={2} />
                    ) : (
                      <X className="w-6 h-6 text-neutral-300 mx-auto" strokeWidth={2} />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {item.legacy ? (
                      <Check className="w-6 h-6 text-neutral-400 mx-auto" strokeWidth={2} />
                    ) : (
                      <X className="w-6 h-6 text-neutral-300 mx-auto" strokeWidth={2} />
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};