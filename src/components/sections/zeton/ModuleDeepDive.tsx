'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Target, Zap, Eye, Check } from 'lucide-react';

const modules = [
  {
    id: 'z-scope',
    name: 'Z-Scope',
    tagline: 'Portfolio Intelligence',
    description:
      'Design winning strategies faster than ever with AI-powered portfolio construction and rigorous backtesting.',
    icon: Target,
    accent: {
      text: 'text-vibrant-teal',
      border: 'border-vibrant-teal',
      bgSoft: 'bg-vibrant-teal/10',
    },
    features: [
      { title: 'AI-Powered Construction', description: 'Build optimal portfolios with machine learning assistance' },
      { title: 'Formal Verification', description: 'Mathematically verify strategy behavior before deployment' },
      { title: 'Advanced Backtesting', description: '10+ years of historical data with transaction cost modeling' },
    ],
  },
  {
    id: 'z-strike',
    name: 'Z-Strike',
    tagline: 'Execution Engine',
    description: 'Execute trades with precision and document every basis point of execution alpha you capture.',
    icon: Zap,
    accent: {
      text: 'text-rich-purple',
      border: 'border-rich-purple',
      bgSoft: 'bg-rich-purple/10',
    },
    features: [
      { title: 'Smart Order Routing', description: 'Automatically find the best execution venues' },
      { title: 'ZWAP & VWAP', description: 'Proprietary algorithms that outperform market benchmarks' },
      { title: 'Real-Time Analytics', description: 'Track and document execution performance live' },
    ],
  },
  {
    id: 'z-sight',
    name: 'Z-Sight',
    tagline: 'Market AI',
    description: 'Never miss an opportunity or risk with 24/7 AI-powered market monitoring and analysis.',
    icon: Eye,
    accent: {
      text: 'text-gold',
      border: 'border-gold',
      bgSoft: 'bg-gold/10',
    },
    features: [
      { title: 'Regime Detection', description: 'Identify market regime shifts before they impact performance' },
      { title: 'Anomaly Alerts', description: 'Get notified of unusual market behavior instantly' },
      { title: 'Continuous Intelligence', description: 'Real-time data analysis across all your positions' },
    ],
  },
];

export const ModuleDeepDive = () => {
  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="space-y-32">
          {modules.map((module, index) => {
            const IconComponent = module.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={[
                          'w-16 h-16 rounded-xl border-2 flex items-center justify-center',
                          module.accent.bgSoft,
                          module.accent.border,
                        ].join(' ')}
                      >
                        <IconComponent className={module.accent.text} size={32} strokeWidth={1.5} />
                      </div>

                      <div>
                        <h3 className="text-4xl font-bold text-deep-navy">{module.name}</h3>
                        <p className={`${module.accent.text} font-semibold`}>{module.tagline}</p>
                      </div>
                    </div>

                    <p className="text-xl text-neutral-700 mb-8 leading-relaxed">{module.description}</p>

                    <div className="space-y-6">
                      {module.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <div
                            className={[
                              'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1',
                              module.accent.bgSoft,
                            ].join(' ')}
                          >
                            <Check className={`${module.accent.text} w-5 h-5`} strokeWidth={3} />
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-deep-navy mb-1">{feature.title}</h4>
                            <p className="text-neutral-600">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <Card className="bg-white border-neutral-200">
                      {/* ✅ RESIZE THE HUGE WHITE BOX HERE: change p-8 (and optionally max-w) */}
                      <CardContent className="p-4">
                        {/* Optional: cap the card size on large screens */}
                        <div className="mx-auto max-w-sm">
                          <div className="aspect-square flex items-center justify-center">
                            <IconComponent
                              className={module.accent.text}
                              // ✅ icon size (also affects perceived box size)
                              size={160}
                              strokeWidth={0.5}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
