'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AnimatedInView, FadeIn } from '@/components/core/AnimatedInView';
import { motion } from 'framer-motion';
import { TrendingDown, Zap, AlertCircle } from 'lucide-react';

const challenges = [
  {
    title: 'Bloated Overheads',
    description: 'Large analyst teams and slow decision cycles are compressing your margins.',
    icon: TrendingDown,
    color: 'text-vibrant-teal',
  },
  {
    title: 'Leaking Alpha',
    description: 'Outdated infrastructure and execution inefficiency leave performance on the table.',
    icon: Zap,
    color: 'text-rich-purple',
  },
  {
    title: 'Reactive Management',
    description: "Data overload and missed regime shifts -> you're always a step behind the market.",
    icon: AlertCircle,
    color: 'text-gold/80',
  },
];

        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              The Three Challenges Draining Your Alpha
            </h2>
            <p className="text-black/70 text-lg max-w-3xl mx-auto">
              Solving one isn't enough. You need a platform that solves all three.
            </p>
          </div>
          </motion.div>
        </div>

export const Trilemma = () => {
  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              The Three Challenges Draining Your Alpha
            </h2>
            <p className="text-black/70 text-lg max-w-3xl mx-auto">
              Solving one isn't enough. You need a platform that solves all three.
            </p>
          </div>
          </motion.div>
        </div>

        <AnimatedInView stagger={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => {
              const IconComponent = challenge.icon;
              return (
                <FadeIn key={index}>
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="bg-white border-neutral-200 h-full hover:shadow-xl transition-shadow">
                      <CardHeader>
                        <div className={`mb-4 ${challenge.color}`}>
                          <IconComponent className="w-12 h-12" strokeWidth={1.5} />
                        </div>
                        <CardTitle className="text-xl font-bold text-deep-navy">
                          {challenge.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-neutral-600">{challenge.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </AnimatedInView>
      </div>
    </section>
  );
};