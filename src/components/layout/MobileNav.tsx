'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as Dialog from '@radix-ui/react-dialog';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Below `md` the header is otherwise a logo and nothing. Radix Dialog gives the
 * accessibility contract: focus trapped while open, Escape closes, scroll
 * locked. Each link closes the panel on click.
 */

const links = [
  { href: '/zeton', label: 'Platform' },
  { href: '/technology', label: 'Technology' },
  { href: '/company', label: 'Company' },
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-cream transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
          >
            <Menu className="h-6 w-6" />
          </button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
          <Dialog.Content className="fixed inset-y-0 right-0 z-[70] flex h-full w-[84%] max-w-sm flex-col bg-midnight shadow-2xl focus:outline-none data-[state=open]:animate-in data-[state=open]:slide-in-from-right data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right">
            <Dialog.Title className="sr-only">Site navigation</Dialog.Title>
            <Dialog.Description className="sr-only">Links to the main pages, plus a way to contact the team.</Dialog.Description>

            <div className="flex h-[72px] items-center justify-between border-b border-white/10 px-6">
              <Image src="/images/brand/aquon-wordmark-light.svg" alt="Aquon" width={909} height={286} className="h-7 w-auto" />
              <Dialog.Close asChild>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md text-cream transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                >
                  <X className="h-6 w-6" />
                </button>
              </Dialog.Close>
            </div>

            <nav className="mt-4 flex flex-col px-4" aria-label="Main">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'rounded-md px-4 py-3.5 text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal',
                      active ? 'bg-white/5 text-cream' : 'text-cream/75 hover:bg-white/5 hover:text-cream'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto p-6">
              <Link
                href="/contact"
                onClick={close}
                className="flex h-12 w-full items-center justify-center rounded-md bg-gold text-base font-semibold text-gold-ink transition-colors hover:bg-[#FFCB33] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
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
