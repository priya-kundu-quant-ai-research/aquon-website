import { Section, Eyebrow, Heading, Lead, SourceNote } from '@/components/site/primitives';
import { SectionReveal } from '@/components/core/SectionReveal';

/** Cerulli's three access personas (Exhibit 9) and how Zeton reaches each. */
const personas = [
  {
    name: 'Growth-oriented boutiques',
    size: 'Under $100B',
    who: 'Independent RIAs, IBDs and bank trusts',
    how: 'Outsource',
    body: 'Reached through the TAMPs, custodians and model platforms they already rely on. One platform running Zeton carries every firm on it.',
  },
  {
    name: 'Emerging enterprise',
    size: '$100B to $1T',
    who: 'Regional broker-dealers, banks and the largest RIAs',
    how: 'Partner and integrate',
    body: 'Home offices that will not build this themselves, and cannot outsource it wholesale, need a process-solution partner inside their advisor platform.',
  },
  {
    name: 'Enterprise scale',
    size: 'Over $1T',
    who: 'The largest wirehouses and broker-dealers',
    how: 'Build or buy',
    body: 'They have built their own platforms. What they lack is a lower cost per optimization as personalization moves down-market: Aqua, licensed inside their platform.',
  },
];

export function WhoWeServe() {
  return (
    <Section tone="gray">
      <SectionReveal className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <Eyebrow>Who we serve</Eyebrow>
          <Heading>One platform, three ways in.</Heading>
        </div>
        <Lead>
          We start with independent RIAs and the platforms that serve them, and grow with the firms
          that are bringing personalization to every client.
        </Lead>
      </SectionReveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {personas.map((p, i) => (
          <SectionReveal key={p.name} delay={i * 0.08} className="flex flex-col rounded-xl border border-navy/10 bg-white p-8">
            <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-gray-text">{p.size}</p>
            <h3 className="mt-3 font-display text-heading-2 text-navy">{p.name}</h3>
            <p className="mt-2 text-caption text-gray-text">{p.who}</p>
            <p className="mt-6 inline-flex w-fit items-center rounded-full bg-navy px-3 py-1 text-[12px] font-semibold text-cream">
              {p.how}
            </p>
            <p className="mt-5 text-body text-navy/85">{p.body}</p>
          </SectionReveal>
        ))}
      </div>

      <SourceNote className="mt-6">
        Personas: Cerulli Associates, <em>Customized at Scale</em> (October 2025), Exhibit 9.
        Single-family offices and hedge funds are served directly and sit outside this retail-wealth
        frame.
      </SourceNote>
    </Section>
  );
}
