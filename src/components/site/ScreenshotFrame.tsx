import Image from 'next/image';
import { cn } from '@/lib/utils';

/**
 * A product screenshot in a thin browser frame.
 *
 * Until the demo v2 screens are captured, `src` is omitted and the frame draws
 * a quiet skeleton of Zeton's shell (the navy rail, the top bar, content
 * blocks) with a label naming the screen that goes here. The layout is final;
 * dropping a 1440 × 900 capture into `src` is the only change needed.
 *
 * Never put a backtest-results or performance screen here: on a public page a
 * returns chart is a hypothetical performance claim.
 */

type Theme = 'light' | 'dark';

export function ScreenshotFrame({
  label,
  src,
  alt,
  theme = 'light',
  className,
  priority = false,
}: {
  /** Which product screen belongs here, e.g. "Home · the daily loop". */
  label: string;
  src?: string;
  alt?: string;
  theme?: Theme;
  className?: string;
  priority?: boolean;
}) {
  const dark = theme === 'dark';
  return (
    <figure
      className={cn(
        'overflow-hidden rounded-xl border shadow-[0_24px_60px_-28px_rgba(6,22,28,0.45)]',
        dark ? 'border-white/10 bg-midnight-card' : 'border-navy/10 bg-white',
        className
      )}
    >
      {/* Window chrome */}
      <div
        className={cn(
          'flex h-8 items-center gap-1.5 border-b px-3',
          dark ? 'border-white/10 bg-[#152B3F]' : 'border-navy/10 bg-light-gray'
        )}
        aria-hidden="true"
      >
        {[0, 1, 2].map((i) => (
          <span key={i} className={cn('h-2.5 w-2.5 rounded-full', dark ? 'bg-white/15' : 'bg-navy/15')} />
        ))}
      </div>

      <div className="relative aspect-[16/10]">
        {src ? (
          <Image src={src} alt={alt ?? label} fill priority={priority} sizes="(min-width: 1024px) 900px, 100vw" className="object-cover object-top" />
        ) : (
          <ShellSkeleton label={label} dark={dark} />
        )}
      </div>
    </figure>
  );
}

function ShellSkeleton({ label, dark }: { label: string; dark: boolean }) {
  const block = dark ? 'bg-white/[0.06]' : 'bg-navy/[0.06]';
  const blockSoft = dark ? 'bg-white/[0.035]' : 'bg-navy/[0.035]';
  return (
    <div className={cn('absolute inset-0 flex', dark ? 'bg-midnight' : 'bg-white')} role="img" aria-label={`Screenshot placeholder: ${label}`}>
      {/* The navy rail */}
      <div className="flex w-[7%] min-w-6 flex-col items-center gap-3 bg-navy py-4">
        <span className="h-3 w-3 rounded-full bg-cream/80" />
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={cn('h-2 w-2 rounded-sm', i === 0 ? 'bg-gold' : 'bg-cream/25')} />
        ))}
      </div>
      <div className="flex flex-1 flex-col">
        {/* Top bar and the band of places */}
        <div className={cn('h-[8%] border-b', dark ? 'bg-[#152B3F] border-white/10' : 'bg-[#FFF1D1] border-navy/15')} />
        <div className={cn('flex h-[7%] items-end gap-4 border-b px-5', dark ? 'bg-[#122432] border-white/10' : 'bg-band border-navy/10')}>
          {[0, 1, 2].map((i) => (
            <span key={i} className={cn('mb-2 h-1.5 w-10 rounded-full', i === 0 ? 'bg-gold-deep' : blockSoft)} />
          ))}
        </div>
        {/* Content */}
        <div className="grid flex-1 grid-cols-3 gap-3 p-5">
          <div className={cn('col-span-2 rounded-md', block)} />
          <div className={cn('rounded-md', blockSoft)} />
          <div className={cn('rounded-md', blockSoft)} />
          <div className={cn('col-span-2 rounded-md', block)} />
        </div>
      </div>
      {/* The label */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <span
          className={cn(
            'rounded-md border px-3 py-1.5 font-mono text-[11px] tracking-wide backdrop-blur-sm',
            dark ? 'border-white/15 bg-midnight/80 text-cream-muted' : 'border-navy/15 bg-white/85 text-gray-text'
          )}
        >
          Screenshot · {label}
        </span>
      </div>
    </div>
  );
}
