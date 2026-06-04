'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Trophy, Landmark, Rocket } from 'lucide-react';

const awards = [
  {
    icon: Landmark,
    title: 'NSF I-Corps',
    subtitle: 'Federal Program',
    description: 'National Science Foundation customer-discovery program.',
    amount: '$50,000',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: Trophy,
    title: 'NYU TAC Award',
    subtitle: 'Fall 2025',
    description: 'Technology, Acceleration, and Commercialization Award for product viability.',
    amount: '$65,000',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: Rocket,
    title: 'NYU Summer Launchpad',
    subtitle: 'Summer 2026 Cohort',
    description: 'Selective accelerator supporting early-stage NYU ventures.',
    amount: '$15,000',
    color: 'from-vibrant-teal to-cyan-600',
  },
  {
    icon: Award,
    title: 'NYU Tech Venture',
    subtitle: 'Spring 2025',
    description: 'Tech Venture Poster Competition recognizing early research potential.',
    amount: '$2,000',
    color: 'from-cyan-500 to-cyan-600',
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
            ~$132,000 in non-dilutive recognition across four competitive selection processes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
                  <CardContent className="p- text-center">
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
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}

              {/* Context Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="md:col-span-2 lg:col-span-4 max-w-5xl mx-auto bg-gradient-to-r from-vibrant-teal/5 to-rich-purple/5 rounded-2xl p-8 border border-vibrant-teal/20"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-deep-navy mb-4">
                    Built in New York&apos;s Innovation Ecosystem
                  </h3>
                  <p className="text-neutral-700 leading-relaxed max-w-none mx-auto text-center">
                    As a <span className="font-semibold text-deep-navy">Startup NY company</span>, 
                    we benefit from New York State tax incentives that support our growth and long-term 
                    innovation. We are also an <span className="font-semibold text-deep-navy">NYU Future 
                      Labs company</span>, and now operate from our office at the NYU building,
                      at the center of one of New York&apos;s strongest technology and research communities.
                  </p>
                </div>
              </motion.div>
        </div>
      </div>
    </section>
  );
};