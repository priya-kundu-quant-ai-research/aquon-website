import Image from 'next/image';
import { Award, Building2, FileCheck2, GraduationCap, Handshake, Landmark } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section, Eyebrow, Heading, Lead } from '@/components/site/primitives';
import { SectionReveal } from '@/components/core/SectionReveal';

/* ── The story ─────────────────────────────────────────────────────────────
   🔴 AQTF is Zeton's GENESIS (Priya, 2026-10-08): it is where the platform's
   requirements came from. Never say it runs on Zeton or on Aqua (claims
   register §5), and never mention investors' capital or invite fund enquiries
   on a public page. */

const story = [
  {
    step: '01',
    label: 'Research',
    body: 'It started at NYU with a narrow technical observation: the numerical code behind portfolio construction was leaving most of the machine unused. Not because the mathematics was wrong, but because software written once and shipped everywhere is tuned for no machine in particular.',
  },
  {
    step: '02',
    label: 'Engine',
    body: 'That became Aqua, an engine that reads the machine and adapts to it. NYU filed the patent application, and licensed the technology to Aquon exclusively, worldwide.',
  },
  {
    step: '03',
    label: 'Genesis',
    body: 'Then we ran a desk. AQTF, our own systematic strategy, live since April 2026, showed us what a real portfolio desk needs: portfolios built daily, risk checked before every change, one place instead of stitched-together tools, and a process anyone can run the same way.',
  },
  {
    step: '04',
    label: 'Platform',
    body: 'Zeton is built from those requirements: the whole portfolio lifecycle in one platform, for every client a firm serves, running on Aqua.',
  },
];

export function Story() {
  return (
    <Section tone="light">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionReveal className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>Our story</Eyebrow>
          <Heading>From a research problem to a platform, in four moves.</Heading>
          <p className="mt-8 border-l-2 border-gold-deep pl-5 text-body-l text-navy">
            Aqua is why it is different. AQTF is where it came from. Zeton is what we build for firms.
          </p>
        </SectionReveal>
        <ol className="space-y-0">
          {story.map((s, i) => (
            <li key={s.label} className="border-t border-navy/15 py-8 first:border-t-0 first:pt-0 lg:first:pt-2">
              <SectionReveal delay={i * 0.05} className="grid gap-3 md:grid-cols-[8rem_1fr] md:gap-8">
                <div>
                  <p className="font-mono text-[12px] text-gray-text tabular">{s.step}</p>
                  <p className="mt-1 font-display text-heading-2 text-navy">{s.label}</p>
                </div>
                <p className="text-body-l text-gray-text">{s.body}</p>
              </SectionReveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/* ── Team ──────────────────────────────────────────────────────────────────
   From the AQZ Investor Deck and Executive Overview (Oct 01). Priya is not
   listed (her decision, 2026-10-08). */

type Person = { name: string; role: string; bio: string[]; image?: string };

const founders: Person[] = [
  {
    name: 'Vaibhav Sharma',
    role: 'Co-founder & Chief Executive Officer',
    bio: [
      '30 years across banking, capital markets and fintech infrastructure.',
      'Delivered trading and risk platforms (Murex, Calypso, FIS) for Citi, Bank of America, RBC, Deutsche Bank and DTCC.',
      'Emerging CRO Program, Columbia Business School.',
    ],
    image: '/images/vaibhav.png',
  },
  {
    name: 'Carlos de Oliveira, PhD',
    role: 'Co-founder & Chief Technology Officer',
    bio: [
      '30+ years leading quantitative architecture at Renaissance Technologies, Credit Suisse, Fidelity, BNY Mellon and TD Ameritrade.',
      'PhD Mathematics, UC Berkeley · MBA, NYU Stern · Adjunct Faculty, NYU Tandon.',
      'Named inventor on Aqua’s patent application.',
    ],
    image: '/images/carlos.png',
  },
];

const advisors: Person[] = [
  { name: 'Carlos Tomei', role: 'Technical Advisor', bio: ['Emeritus Professor, PUC-Rio'], image: '/images/tomei.jpg' },
  { name: 'Willie Bass', role: 'Business Advisor', bio: ['Managing Partner, The WC Group · ex-EY, KPMG, BNY Mellon'], image: '/images/willie.webp' },
  { name: 'Javier Vicente', role: 'Quantitative Advisor', bio: ['A career at BNY'], image: '/images/javier.jpg' },
  { name: 'Karla Williams', role: 'Legal Advisor', bio: ['CPO, University of Michigan'], image: '/images/karla.webp' },
];

const initials = (name: string) =>
  name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

function Portrait({ person, size }: { person: Person; size: 'lg' | 'sm' }) {
  const box = size === 'lg' ? 'h-28 w-28 md:h-32 md:w-32' : 'h-16 w-16';
  return (
    <div className={`relative ${box} flex-none overflow-hidden rounded-lg bg-light-gray`}>
      {person.image ? (
        <Image src={person.image} alt={person.name} fill sizes={size === 'lg' ? '128px' : '64px'} className="object-cover object-top grayscale-[15%]" />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-navy/45">{initials(person.name)}</span>
      )}
    </div>
  );
}

export function Team() {
  return (
    <Section tone="gray">
      <SectionReveal className="grid gap-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow>Leadership</Eyebrow>
          <Heading>Built by people who have run institutional systems, and a desk.</Heading>
        </div>
        <Lead>
          Decades inside the trading and risk systems our customers depend on, together with the
          research that makes Zeton economical.
        </Lead>
      </SectionReveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {founders.map((p, i) => (
          <SectionReveal key={p.name} delay={i * 0.08} className="flex flex-col gap-6 rounded-xl border border-navy/10 bg-white p-8 sm:flex-row">
            <Portrait person={p} size="lg" />
            <div>
              <h3 className="font-display text-heading-2 text-navy">{p.name}</h3>
              <p className="mt-1 text-[14px] font-semibold text-teal-text">{p.role}</p>
              <ul className="mt-4 space-y-2">
                {p.bio.map((b) => (
                  <li key={b} className="text-[15px] leading-relaxed text-gray-text">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal className="mt-16">
        <h3 className="border-b border-navy/20 pb-4 text-eyebrow uppercase text-gray-text">Advisors</h3>
        <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {advisors.map((a) => (
            <li key={a.name} className="flex items-center gap-4 border-b border-navy/10 py-6">
              <Portrait person={a} size="sm" />
              <div>
                <p className="text-[15px] font-semibold text-navy">{a.name}</p>
                <p className="text-[13px] font-medium text-teal-text">{a.role}</p>
                <p className="mt-0.5 text-[13px] leading-snug text-gray-text">{a.bio[0]}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-body text-gray-text">
          With an engineering team building the platform, its deployment and the Aqua integration.
        </p>
      </SectionReveal>
    </Section>
  );
}

/* ── Recognition ──────────────────────────────────────────────────────── */

const recognition: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: FileCheck2,
    title: 'Exclusive NYU licence',
    body: 'Exclusive, worldwide and in all fields, for the technology behind Aqua. Executed August 2026.',
  },
  {
    icon: Award,
    title: 'Patent application filed',
    body: 'Aqua’s core numerical methods are the subject of a patent application filed through NYU, with our CTO among the named inventors.',
  },
  {
    icon: Landmark,
    title: 'START-UP NY',
    body: 'Approved in February 2026 to New York State’s START-UP NY program, sponsored by New York University.',
  },
  {
    icon: Building2,
    title: 'Washington DC Global Soft Landing',
    body: 'Accepted in September 2026 by the Washington DC Economic Partnership, with office space in DC and introductions to strategic partners.',
  },
  {
    icon: GraduationCap,
    title: 'Selected by competitive programs',
    body: 'NSF I-Corps (completed May 2026), the NYU TAC Award 2026, NYU Summer Launchpad and NYU Tech Venture.',
  },
  {
    icon: Handshake,
    title: 'Early conversations',
    body: 'Under way with banks, wealth platforms, a turnkey asset management platform and a family-office network. Names under NDA.',
  },
];

export function Recognition() {
  return (
    <Section tone="light">
      <SectionReveal className="max-w-3xl">
        <Eyebrow>Recognition and traction</Eyebrow>
        <Heading>Licensed, selected, and in conversation.</Heading>
      </SectionReveal>
      <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
        {recognition.map((r, i) => {
          const Icon = r.icon;
          return (
            <SectionReveal key={r.title} delay={(i % 3) * 0.06} className="bg-white p-8">
              <Icon className="h-5 w-5 text-teal-text" strokeWidth={1.8} aria-hidden="true" />
              <h3 className="mt-5 text-heading-3 text-navy">{r.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-gray-text">{r.body}</p>
            </SectionReveal>
          );
        })}
      </div>
    </Section>
  );
}

/* ── Where we are ─────────────────────────────────────────────────────── */

export function Locations() {
  const places = [
    { city: 'New York', note: 'Our home: an NYU research spin-out, in New York State’s START-UP NY program.' },
    { city: 'Washington, DC', note: 'Through the Washington DC Global Soft Landing Program.' },
  ];
  return (
    <Section tone="band" tight>
      <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        <SectionReveal>
          <Eyebrow>Where we are</Eyebrow>
          <Heading size="heading-1">Two cities, one team.</Heading>
        </SectionReveal>
        <div className="grid gap-8 sm:grid-cols-2">
          {places.map((p, i) => (
            <SectionReveal key={p.city} delay={i * 0.08} className="border-t-2 border-gold-deep pt-5">
              <p className="font-display text-heading-2 text-navy">{p.city}</p>
              <p className="mt-2 text-body text-gray-text">{p.note}</p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
