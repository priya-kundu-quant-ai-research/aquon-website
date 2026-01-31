'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/lib/utils';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '/zeton', label: 'Platform' },
  { href: '/why-zeton', label: 'Why Zeton' },
  { href: '/technology', label: 'Technology' },
  { href: '/company', label: 'Company' },
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
          <img src={logoSrc} alt="Aquon logo" width={25} height={25} />
          <span className="text-2xl font-bold text-white">Aquon</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-white font-medium relative group transition-colors',
                pathname === link.href && 'text-vibrant-teal',
                'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-vibrant-teal',
                'after:w-0 after:transition-all after:duration-300',
                'hover:after:w-full',
                pathname === link.href && 'after:w-full'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
