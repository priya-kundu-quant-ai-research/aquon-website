import Link from 'next/link';
import Image from 'next/image';

const columns = [
  {
    title: 'Product',
    links: [
      { href: '/zeton', label: 'Zeton platform' },
      { href: '/technology', label: 'Aqua engine' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/company', label: 'About' },
      { href: '/contact', label: 'Contact' },
      { href: '/contact?interest=investors', label: 'Investor relations' },
    ],
  },
  {
    title: 'Follow',
    links: [
      { href: 'https://www.linkedin.com/company/aquon-ai-inc/about/', label: 'Aquon on LinkedIn', external: true },
      { href: 'https://www.linkedin.com/company/zeton-ai/about/', label: 'Zeton on LinkedIn', external: true },
    ],
  },
] as const;

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-midnight text-cream">
      <div className="mx-auto max-w-[1200px] px-6 pb-10 pt-16 md:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <Image src="/images/brand/aquon-wordmark-light.svg" alt="Aquon" width={909} height={286} className="h-8 w-auto" />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-muted">
              Portfolios built for each client, at scale. An NYU research spin-out.
            </p>
            <p className="mt-6 text-sm text-cream/80">New York · Washington, DC</p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-eyebrow uppercase text-cream-muted">{col.title}</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    {'external' in l ? (
                      <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-cream/80 transition-colors hover:text-teal-bright">
                        {l.label}
                      </a>
                    ) : (
                      <Link href={l.href} className="text-cream/80 transition-colors hover:text-teal-bright">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-cream-muted md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Aquon AI, Inc. All rights reserved.</p>
          <p>Aqua is exclusively licensed to Aquon AI, Inc. by New York University.</p>
        </div>
      </div>
    </footer>
  );
};
