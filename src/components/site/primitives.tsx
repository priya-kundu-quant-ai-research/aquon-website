import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * The site's shared building blocks. Every page is composed of these so the
 * rhythm (section padding, measure, eyebrow → heading → lead) stays identical
 * everywhere. Tone decides the surface and the text colours together, so a
 * dark section can never end up with navy text by accident.
 */

export type Tone = 'dark' | 'navy' | 'light' | 'gray' | 'band';

const toneClasses: Record<Tone, string> = {
  dark: 'bg-midnight text-cream',
  navy: 'bg-navy text-cream',
  light: 'bg-white text-navy',
  gray: 'bg-light-gray text-navy',
  band: 'bg-band text-navy',
};

export const isDark = (tone: Tone) => tone === 'dark' || tone === 'navy';

export function Section({
  tone = 'light',
  className,
  children,
  id,
  tight = false,
}: {
  tone?: Tone;
  className?: string;
  children: ReactNode;
  id?: string;
  tight?: boolean;
}) {
  return (
    <section
      id={id}
      data-tone={tone}
      className={cn(toneClasses[tone], tight ? 'py-16 md:py-20' : 'py-20 md:py-28', className)}
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-8">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, dark = false, className }: { children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <p className={cn('text-eyebrow uppercase mb-5', dark ? 'text-teal-bright' : 'text-teal-text', className)}>
      {children}
    </p>
  );
}

export function Heading({
  as: As = 'h2',
  size = 'heading-1',
  className,
  children,
}: {
  as?: 'h1' | 'h2' | 'h3';
  size?: 'display-xl' | 'display-l' | 'heading-1' | 'heading-2';
  className?: string;
  children: ReactNode;
}) {
  const sizeClass = {
    'display-xl': 'text-display-xl',
    'display-l': 'text-display-l',
    'heading-1': 'text-heading-1',
    'heading-2': 'text-heading-2',
  }[size];
  return <As className={cn('font-display', sizeClass, className)}>{children}</As>;
}

export function Lead({ children, dark = false, className }: { children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <p className={cn('text-body-l prose-measure', dark ? 'text-cream/75' : 'text-gray-text', className)}>{children}</p>
  );
}

/** Small, muted attribution under any number or quotation. */
export function SourceNote({ children, dark = false, className }: { children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <p className={cn('text-caption', dark ? 'text-cream-muted' : 'text-gray-text', className)}>{children}</p>
  );
}

/** A label that marks roadmap items. Gold outline: noticeable, not loud. */
export function InDevelopment({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] align-middle',
        dark ? 'border-gold/60 text-gold' : 'border-gold-deep text-navy bg-band'
      )}
    >
      In development
    </span>
  );
}

type ButtonVariant = 'gold' | 'outline' | 'text';

/**
 * Gold is the ONE main action in a section; everything else is outline or a
 * text link. Labels are always navy/ink on gold (never white).
 */
export function ButtonLink({
  href,
  children,
  variant = 'gold',
  dark = false,
  className,
  arrow = false,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  dark?: boolean;
  className?: string;
  arrow?: boolean;
}) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-md text-[15px] font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  const variants: Record<ButtonVariant, string> = {
    gold: dark
      ? 'h-12 px-6 bg-gold text-gold-ink hover:bg-[#FFCB33] focus-visible:ring-gold focus-visible:ring-offset-midnight'
      : 'h-12 px-6 bg-gold-deep text-navy hover:bg-gold focus-visible:ring-navy',
    outline: dark
      ? 'h-12 px-6 border border-cream/30 text-cream hover:border-cream/70 hover:bg-cream/5 focus-visible:ring-teal focus-visible:ring-offset-midnight'
      : 'h-12 px-6 border border-navy/25 text-navy hover:border-navy/60 hover:bg-navy/[0.03] focus-visible:ring-navy',
    text: dark
      ? 'text-teal-bright hover:text-cream focus-visible:ring-teal focus-visible:ring-offset-midnight'
      : 'text-teal-text hover:text-navy focus-visible:ring-navy',
  };
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
      {(arrow || variant === 'text') && (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
      )}
    </Link>
  );
}
