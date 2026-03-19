'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AnimatedInView, FadeIn } from '@/components/core/AnimatedInView';
import { motion } from 'framer-motion';
import { FileText, TrendingDown, Clock } from 'lucide-react';

const challenges = [
  {
    icon: FileText, // or FileText
    title: 'Manual Construction',
    description: 'Static model portfolios and manual allocation decisions limit your ability to scale personalized strategies.',
    color: 'text-vibrant-teal',
  },
  {
    icon: TrendingDown, // or TrendingDown
    title: 'Fragmented Analysis',
    description: 'Evaluating historical performance and risk across disparate tools slows down your decision-making process.',
    color: 'text-rich-purple',
  },
  {
    icon: Clock, // or Clock
    title: 'Reactive Monitoring',
    description: 'Without systematic drift detection, you risk missing critical rebalancing opportunities when market conditions shift.',
    color: 'text-gold',
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-deep-navy">
              The Three Challenges Draining Your Alpha
            </h2>
            <p className="text-deep-navy/70 text-lg max-w-3xl mx-auto">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-deep-navy">
              The Three Challenges Draining Your Alpha
            </h2>
            <p className="text-deep-navy text-lg max-w-3xl mx-auto">
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