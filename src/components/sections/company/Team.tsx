'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const founder = {
  name: 'Carlos de Oliveira',
  role: 'Founder & CEO, Aquon',
  credentials: ['Faculty @ NYU', 'ex-Fidelity, ex-BNY Mellon, ex-Ameritrade'],
  image: '/images/carlos.png',
};

const advisors = [
  {
    name: 'Willie Bass',
    role: 'Business Advisor, Aquon',
    credentials: ['Managing Partner @ The WC Group', 'ex-EY, ex-KPMG, ex-BNY Mellon'],
    image: '/images/willie.jpg',
  },
  {
    name: 'Carlos Tomei',
    role: 'Technical Advisor, Aquon',
    credentials: ['Associate Professor @ PUC-Rio'],
    image: '/images/tomei.jpg',
  },
  {
    name: 'Karla Williams',
    role: 'Legal Advisor, Aquon',
    credentials: ['CPO at University of Michigan'],
    image: '/images/karla.jpeg',
  },
];

export const Team = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-2">
            Our Team
          </h2>
          <p className="text-neutral-600 text-base">
            Led by experts in compiler technology, financial systems, and optimization
          </p>
        </motion.div>

        {/* Grid constrained to viewport */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:max-h-[70vh]">
            
            {/* Founder */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-neutral-200 h-full">
                <CardContent className="p- flex flex-col items-center text-center gap-4">
                  
                  {/* Portrait image – capped */}
                  <div className="relative w-full max-w-[320px] h-[320px] rounded-2xl overflow-hidden bg-neutral-100">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      sizes="320px"
                      className="object-cover object-top"
                      priority
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-deep-navy mb-0.5">
                      {founder.name}
                    </h3>
                    <p className="text-vibrant-teal font-semibold mb-1.5">
                      {founder.role}
                    </p>
                    <div className="space-y-0.5">
                      {founder.credentials.map((cred, idx) => (
                        <p key={idx} className="text-neutral-600 text-xs">
                          {cred}
                        </p>
                      ))}
                    </div>
                  </div>

                </CardContent>
              </Card>
            </motion.div>

            {/* Advisors */}
            <div className="flex flex-col gap-4">
              {advisors.map((advisor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-neutral-200">
                    <CardContent className="p-3">
                      <div className="flex items-center gap-3">
                        
                        {/* Fixed thumbnail */}
                        <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-neutral-100 flex-shrink-0">
                          <Image
                            src={advisor.image}
                            alt={advisor.name}
                            fill
                            sizes="96px"
                            className="object-cover object-top"
                          />
                        </div>

                        <div>
                          <h3 className="text-base font-bold text-deep-navy leading-tight">
                            {advisor.name}
                          </h3>
                          <p className="text-vibrant-teal font-semibold text-xs mt-1">
                            {advisor.role}
                          </p>
                          <div className="mt-0.5 space-y-0.5">
                            {advisor.credentials.map((cred, idx) => (
                              <p
                                key={idx}
                                className="text-neutral-600 text-xs leading-tight"
                              >
                                {cred}
                              </p>
                            ))}
                          </div>
                        </div>

                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
