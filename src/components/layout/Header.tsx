'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/lib/utils';
import { MobileNav } from '@/components/layout/MobileNav';

export const navLinks = [
  { href: '/zeton', label: 'Platform' },
  { href: '/technology', label: 'Technology' },
  { href: '/company', label: 'Company' },
] as const;

export const Header = () => {
  const pathname = usePathname();
  const scrolled = useScrollPosition() > 24;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 h-[72px] transition-[background-color,border-color] duration-300',
        scrolled
          ? 'border-b border-white/10 bg-midnight/90 backdrop-blur-md'
          : 'border-b border-transparent bg-midnight'
      )}
    >
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6 md:px-8">
        <Link href="/" className="flex items-center gap-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal">
          <Image src="/images/brand/aquon-wordmark-light.svg" alt="Aquon" width={909} height={286} priority className="h-8 w-auto" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'relative rounded-sm py-1 text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal',
                  'after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-gold after:transition-all after:duration-300',
                  active ? 'text-cream after:w-full' : 'text-cream/70 after:w-0 hover:text-cream'
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="inline-flex h-10 items-center rounded-md bg-gold px-5 text-[15px] font-semibold text-gold-ink transition-colors hover:bg-[#FFCB33] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-midnight"
          >
            Talk to us
          </Link>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
};
