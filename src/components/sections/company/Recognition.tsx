'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Trophy, Landmark } from 'lucide-react';

const awards = [
  {
    icon: Award,
    title: 'NYU Tech Venture',
    subtitle: 'Spring 2025',
    description: 'Best Poster Award recognizing early research potential across NYU Entrepreneurial Lab..',
    amount: '$2,000',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Landmark,
    title: 'NSF I-Corps',
    subtitle: 'APPROVED',
    description: 'National Science Foundation Programs Approved. DoD Research Grant Application in progress.',
    label: '$50,000',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: Trophy,
    title: 'NYU TAC Award',
    subtitle: '2025',
    description: 'Technology, Acceleration, and Commercialization Award for product viability.',
    amount: '$65,000',
    color: 'from-pink-500 to-pink-600',
  },
];

export const Recognition = () => {
  return (
    <section className="py-20 bg-gradient-to-br white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
            Recognition & Momentum
          </h2>
          <p className="text-deep-navy text-xl font-semibold">
            Validated by Leading Innovation Programs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 h-full hover:bg-white/15 transition-all">
                  <CardContent className="p-8 text-center">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${award.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                      <IconComponent className="w-12 h-12 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-deep-navy mb-2">{award.title}</h3>
                    <p className="text-deep-navy/80 font-semibold mb-4">{award.subtitle}</p>
                    <p className="text-deep-navy/70 mb-6 leading-relaxed">{award.description}</p>
                    {award.amount && (
                      <p className={`text-4xl font-bold bg-gradient-to-r ${award.color} bg-clip-text text-transparent`}>
                        {award.amount}
                      </p>
                    )}
                    {award.label && (
                      <p className="text-yellow-600 font-bold text-4xl">{award.label}</p>
                    )}
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