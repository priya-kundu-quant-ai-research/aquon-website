'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { MobileNav } from '@/components/layout/MobileNav';

interface NavLink {
  href: string;
  label: string;
  accent: 'teal' | 'purple';
}

// Contact is a button, not a nav link — it is the only conversion path on the
// site. Zeton carries the purple accent (§2.2); the rest stay teal.
const navLinks: NavLink[] = [
  { href: '/technology', label: 'Technology', accent: 'teal' },
  { href: '/zeton', label: 'Zeton', accent: 'purple' },
  { href: '/company', label: 'Company', accent: 'teal' },
];

export const Header = () => {
  const pathname = usePathname();
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 50;

  // Always use the light/contrast-safe logo for a dark header
  const logoSrc = '/images/aquon-circle-logo.png';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300',
        // Always dark; add blur/shadow once scrolling
        isScrolled
          ? 'bg-deep-navy/80 backdrop-blur-md shadow-lg'
          : 'bg-deep-navy'
      )}
    >
      <div className="container mx-auto h-full flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={logoSrc}
            alt="Aquon logo"
            width={376}
            height={622}
            priority
            className="h-8 w-auto"
          />
          <span className="text-2xl font-bold text-white">Aquon</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            const isPurple = link.accent === 'purple';
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-white font-medium relative transition-colors rounded-sm',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-deep-navy',
                  'after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full',
                  isPurple
                    ? cn('hover:text-rich-purple after:bg-rich-purple focus-visible:ring-rich-purple', active && 'text-rich-purple after:w-full')
                    : cn('hover:text-vibrant-teal after:bg-vibrant-teal focus-visible:ring-vibrant-teal', active && 'text-vibrant-teal after:w-full')
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Button
            asChild
            className="bg-vibrant-teal hover:bg-vibrant-teal/90 text-white font-semibold"
          >
            <Link href="/contact">Talk to us</Link>
          </Button>
        </nav>

        {/* Mobile navigation (hamburger + panel), below md */}
        <MobileNav />
      </div>
    </header>
  );
};
