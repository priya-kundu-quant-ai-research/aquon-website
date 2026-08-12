'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as Dialog from '@radix-ui/react-dialog';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Below `md` the header is otherwise a logo and nothing. This is the site's
 * only mobile navigation.
 *
 * Radix Dialog gives us the accessibility contract for free: focus is trapped
 * in the panel while open, Escape closes it, `aria-expanded`/`aria-controls`
 * sit on the trigger, and body scroll is locked. Navigation from the panel only
 * happens through the links and the CTA, so each of those closes the panel on
 * click — no route-watching effect needed.
 */

const navLinks = [
  { href: '/technology', label: 'Technology', accent: 'teal' },
  { href: '/zeton', label: 'Zeton', accent: 'purple' },
  { href: '/company', label: 'Company', accent: 'teal' },
] as const;

export const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <button
            type="button"
            aria-label="Open menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vibrant-teal"
          >
            <Menu className="h-6 w-6" />
          </button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
          <Dialog.Content className="fixed inset-y-0 right-0 z-[70] flex h-full w-[82%] max-w-sm flex-col bg-deep-navy shadow-2xl focus:outline-none data-[state=open]:animate-in data-[state=open]:slide-in-from-right data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right">
            <Dialog.Title className="sr-only">Site navigation</Dialog.Title>
            <Dialog.Description className="sr-only">
              Links to the main pages, plus a way to contact the team.
            </Dialog.Description>

            {/* Panel header */}
            <div className="flex h-20 items-center justify-between px-6">
              <span className="text-lg font-bold text-white">Aquon</span>
              <Dialog.Close asChild>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vibrant-teal"
                >
                  <X className="h-6 w-6" />
                </button>
              </Dialog.Close>
            </div>

            {/* Links */}
            <nav className="mt-2 flex flex-col gap-1 px-4">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                const activeColor =
                  link.accent === 'purple' ? 'text-rich-purple' : 'text-vibrant-teal';
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    className={cn(
                      'rounded-lg px-4 py-3 text-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vibrant-teal',
                      active ? `${activeColor} bg-white/5` : 'text-white hover:bg-white/5'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="mt-auto p-6">
              <Link
                href="/contact"
                onClick={close}
                className="flex w-full items-center justify-center rounded-md bg-vibrant-teal px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-vibrant-teal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-vibrant-teal"
              >
                Talk to us
              </Link>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};
