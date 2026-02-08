'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Layers, Brain, Zap, Leaf, CheckCircle } from 'lucide-react';

const pillars = [
  {
    icon: TrendingUp,
    title: 'Statistical Foundations',
    text: 'Ensures mathematical correctness and absolute reliability in every optimization model. We don\'t just run fast, we run right.',
    color: 'from-vibrant-teal/20 to-vibrant-teal/5',
    iconColor: 'text-vibrant-teal',
  },
  {
    icon: Layers,
    title: 'MLIR Infrastructure',
    text: 'Provides the flexible, scalable framework for building our powerful, domain-specific compiler that adapts to any optimization challenge.',
    color: 'from-rich-purple/20 to-rich-purple/5',
    iconColor: 'text-rich-purple',
  },
  {
    icon: Brain,
    title: 'Domain Expertise',
    text: 'Deep knowledge of specific industries allows for advanced vectorization and specialized fine-tuning that generic solutions can\'t achieve.',
    color: 'from-deep-navy/20 to-deep-navy/5',
    iconColor: 'text-deep-navy',
  },
];

const outcomes = [
  { icon: Zap, label: 'High Performance' },
  { icon: Leaf, label: 'Energy Efficient' },
  { icon: CheckCircle, label: 'Reliable Results' },
];

export const InnovationArchitecture = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-light-gray to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-vibrant-teal text-sm uppercase tracking-widest mb-4">
            The Aquon Difference
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6">
            Three Pillars. One Breakthrough.
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Our innovation isn't a single technology. It's the fusion of three critical 
            disciplines that, together, unlock unprecedented performance.
          </p>
        </motion.div>

        {/* Three Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${pillar.color} backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all`}
              >
                <div className={`w-16 h-16 rounded-full bg-white/80 flex items-center justify-center mb-6 ${pillar.iconColor}`}>
                  <IconComponent size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-deep-navy mb-4">{pillar.title}</h3>
                <p className="text-neutral-700 leading-relaxed">{pillar.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};