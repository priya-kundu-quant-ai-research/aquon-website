'use client';

import { useEffect } from 'react';
import { SectionReveal } from '@/components/core/SectionReveal';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { TEAM_BIOS_COMPLETE } from '@/lib/flags';

type Person = {
  name: string;
  role: string;
  credentials: string[];
  image?: string;
};

// Carlos's title is CTO & CIO (02 decision). Credentials verbatim from 02.
const carlos: Person = {
  name: 'Carlos de Oliveira',
  role: 'Chief Technology Officer & Chief Investment Officer',
  credentials: [
    'PhD Mathematics, UC Berkeley',
    'MBA, NYU Stern',
    '25 years: Credit Suisse, BNY Mellon, TD Ameritrade, Fidelity',
    'Adjunct Faculty, NYU Tandon',
    "Named inventor on Aqua's patent application",
  ],
  image: '/images/carlos.png',
};

// Vaibhav's real bio and photo have arrived, so TEAM_BIOS_COMPLETE is now true
// and his card renders his real credentials, styled to match Carlos's. The
// placeholder machinery below stays in place as the guard if the flag ever
// reverts.
const vaibhav: Person = {
  name: 'Vaibhav',
  role: 'Chief Executive Officer',
  credentials: [
    'Emerging CRO Program, Columbia Business School',
    '30 years in fintech and consulting: Citi, DTCC, Bank of America, PNC, RBC, BMO',
    'Cutting-edge solutions across banking and capital markets',
    'GTM and revenue strategy for deep-tech and AI ventures',
  ],
  image: '/images/vaibhav.png',
};

// Length-matched, obviously-fake filler shown only while the flag is false.
const VAIBHAV_BIO_PLACEHOLDER: string[] = [
  'PLACEHOLDER: biography and credentials pending from Vaibhav.',
  'This card is intentionally incomplete and is not for production.',
  'TEAM_BIOS_COMPLETE is false; flip it only when his real bio arrives.',
  'No other person’s credentials may stand in for his here.',
  'Do not deploy this page while this placeholder is visible.',
];

// Advisors — verbatim from 02, in 02's order.
const advisors: Person[] = [
  {
    name: 'Willie Bass',
    role: 'Business Advisor',
    credentials: ['Managing Partner, The WC Group', 'ex-EY, ex-KPMG, ex-BNY Mellon'],
    image: '/images/willie.webp',
  },
  {
    name: 'Karla Williams',
    role: 'Legal Advisor',
    credentials: ['CPO, University of Michigan'],
    image: '/images/karla.webp',
  },
  {
    name: 'Carlos Tomei',
    role: 'Technical Advisor',
    credentials: ['Associate Professor, PUC-Rio'],
    image: '/images/tomei.jpg',
  },
];

const initials = (name: string) =>
  name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

function TeamMember({ person, isPlaceholder }: { person: Person; isPlaceholder: boolean }) {
  return (
    <Card className="border-neutral-200 h-full bg-white">
      <CardContent className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="relative w-32 h-32 flex-shrink-0 rounded-2xl overflow-hidden bg-neutral-100 flex items-center justify-center">
          {person.image ? (
            <Image
              src={person.image}
              alt={person.name}
              fill
              sizes="128px"
              className="object-cover object-top"
            />
          ) : (
            <span className="text-4xl font-bold text-deep-navy/40">{initials(person.name)}</span>
          )}
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-heading-3 text-deep-navy mb-0.5">{person.name}</h3>
          <p className="text-vibrant-teal font-semibold text-sm mb-3">{person.role}</p>

          {isPlaceholder ? (
            <div className="rounded-lg border-2 border-dashed border-error-red/60 bg-error-red/5 p-3">
              <p className="text-error-red text-xs font-bold uppercase tracking-wide mb-1">
                Placeholder: do not ship
              </p>
              <div className="space-y-0.5">
                {VAIBHAV_BIO_PLACEHOLDER.map((line, idx) => (
                  <p key={idx} className="text-neutral-500 text-xs italic">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ) : (
            <ul className="space-y-1">
              {person.credentials.map((cred, idx) => (
                <li key={idx} className="text-neutral-600 text-sm">
                  {cred}
                </li>
              ))}
            </ul>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export const Team = () => {
  useEffect(() => {
    if (!TEAM_BIOS_COMPLETE && process.env.NODE_ENV === 'development') {
      console.warn(
        "[Team] TEAM_BIOS_COMPLETE is false — Vaibhav's card is placeholder text. Do not deploy to production until his real bio lands and the flag is flipped."
      );
    }
  }, []);

  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        {/* Team — editorial two-up */}
        <SectionReveal className="text-center mb-10">
          <h2 className="text-heading-1 text-deep-navy">Team</h2>
        </SectionReveal>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <SectionReveal>
            <TeamMember person={vaibhav} isPlaceholder={!TEAM_BIOS_COMPLETE} />
          </SectionReveal>
          <SectionReveal delay={0.1} >
            <TeamMember person={carlos} isPlaceholder={false} />
          </SectionReveal>
        </div>

        {/* Advisors — three-up, compact */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-center text-heading-2 text-deep-navy mb-6">Advisors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {advisors.map((advisor, index) => (
              <SectionReveal key={advisor.name} delay={index * 0.1} >
                <Card className="border-neutral-200 h-full bg-white">
                  <CardContent className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-neutral-100 flex-shrink-0">
                        {advisor.image ? (
                          <Image
                            src={advisor.image}
                            alt={advisor.name}
                            fill
                            sizes="80px"
                            className="object-cover object-top"
                          />
                        ) : (
                          <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-deep-navy/40">
                            {initials(advisor.name)}
                          </span>
                        )}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-deep-navy leading-tight">
                          {advisor.name}
                        </h4>
                        <p className="text-vibrant-teal font-semibold text-xs mt-1">
                          {advisor.role}
                        </p>
                        <div className="mt-1 space-y-0.5">
                          {advisor.credentials.map((cred, idx) => (
                            <p key={idx} className="text-neutral-600 text-xs leading-tight">
                              {cred}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
