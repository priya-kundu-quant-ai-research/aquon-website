'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Award } from 'lucide-react';

const sections = [
  {
    icon: Target,
    title: 'Our Mission',
    bullets: [
      'Eliminate information leakage in portfolio management.',
      'Reduce operational inefficiency across the investment workflow.',
      'Deliver mathematically verified infrastructure for critical optimization decisions.',
      'Build systems on trust and correctness—not just speed.',
    ],
  },
  {
    icon: Eye,
    title: 'Our Vision',
    bullets: [
      'Give every investment firm institutional-grade technology without an institutional-grade team.',
      'Let portfolio managers focus on alpha generation—not tooling and validation.',
      'Automate strategy validation, execution, and monitoring with mathematical certainty.',
    ],
  },
  {
    icon: Award,
    title: 'Our Values',
    bullets: [
      'Trust first: precision, rigor, and uncompromising standards.',
      'Empower human expertise—technology augments, not replaces.',
      'Scientific innovation: apply cutting-edge computer science to real financial problems.',
      'Clarity, reliability, and measurable impact in every release.',
    ],
  },
];

export const Mission = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section, index) => {
              const IconComponent = section.icon;

              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.12 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-vibrant-teal/10 border border-vibrant-teal/30 flex items-center justify-center">
                      <IconComponent
                        className="w-6 h-6 text-vibrant-teal"
                        strokeWidth={1.75}
                      />
                    </div>

                    <h3 className="text-xl font-bold text-deep-navy">
                      {section.title}
                    </h3>
                  </div>

                  <ul className="space-y-3 text-neutral-700 leading-relaxed">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-vibrant-teal" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
