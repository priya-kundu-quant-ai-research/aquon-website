'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

type Person = {
  name: string;
  role: string;
  credentials: string[];
  image?: string;
};

const team: Person[] = [
  {
    name: 'Carlos de Oliveira',
    role: 'Co-Founder, CIO & Portfolio Manager',
    credentials: [
      'PhD Mathematics, UC Berkeley and MBA, NYU Stern',
      '25 yrs: Credit Suisse, BNY Mellon, TD Ameritrade, Fidelity',
      'Adjunct Faculty, NYU Tandon',
    ],
    image: '/images/carlos.png',
  },
  {
    name: 'Priya',
    role: 'Co-Founder, Engineering & Operations',
    credentials: ['Co-inventor of Aqua and Zeton', "NYU Alumni MS Management of Technology 24'",
      "Completed NYU TVP Spring '25", 'NSF I-Corps program graduate'],
    image: '/images/priya.png',
  },
  {
    name: 'Nachiket',
    role: 'Founding Engineer',
    credentials: ['Co-inventor of Aqua and Zeton', "NYU Alumni MS Computer Engineering 24'"],
  },
  {
    name: 'Avina',
    role: 'Founding Engineer',
    credentials: ['Co-inventor of Aqua', "NYU Alumni MS Computer Engineering 25'"],
  },
];

const advisors: Person[] = [
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

const initials = (name: string) =>
  name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

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
            Building both sides of the systematic-investing stack: the fund and the platform.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {team.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-neutral-200 h-full">
                <CardContent className="flex flex-col items-center text-center gap-4">
                  <div className="relative w-full max-w-[220px] aspect-square rounded-2xl overflow-hidden bg-neutral-100 flex items-center justify-center">
                    {person.image ? (
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        sizes="220px"
                        className="object-cover object-top"
                      />
                    ) : (
                      <span className="text-4xl font-bold text-deep-navy/40">
                        {initials(person.name)}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-deep-navy mb-0.5">
                      {person.name}
                    </h3>
                    <p className="text-vibrant-teal font-semibold text-sm mb-1.5">
                      {person.role}
                    </p>
                    <div className="space-y-0.5">
                      {person.credentials.map((cred, idx) => (
                        <p key={idx} className="text-neutral-600 text-xs">
                          {cred}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Advisors */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center text-xl font-bold text-deep-navy mb-6">Advisors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-neutral-200 h-full">
                  <CardContent className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-neutral-100 flex-shrink-0">
                        {advisor.image ? (
                          <Image
                            src={advisor.image}
                            alt={advisor.name}
                            fill
                            sizes="96px"
                            className="object-cover object-top"
                          />
                        ) : (
                          <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-deep-navy/40">
                            {initials(advisor.name)}
                          </span>
                        )}
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
    </section>
  );
};
