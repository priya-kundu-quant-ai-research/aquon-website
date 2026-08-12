'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * The stack the whole company rests on: hardware at the base, Aqua above it,
 * Zeton on top. Reused on Technology (the architecture) and Company (the
 * hierarchy a visitor must be able to repeat). On entry the slabs settle into
 * place from the base up (slow, settled — Aquon character). Reduced motion
 * renders the built stack.
 *
 * Colour note: this diagram appears on Technology and Company, where purple is
 * not allowed, so it uses NO purple. Zeton is the clean light surface on top,
 * Aqua is teal (its own colour), hardware is neutral navy. Purple stays on the
 * actual Zeton surfaces (the Zeton page and the Home Zeton section).
 *
 * Meaning it carries, so the prose below it can shrink: Zeton runs on Aqua,
 * Aqua reads the hardware, and the hardware is ordinary commodity silicon.
 */

interface Layer {
  name: string;
  sub: string;
  className: string;
  subClassName: string;
}

// Top to bottom.
const layers: Layer[] = [
  {
    name: 'Zeton',
    sub: 'The investment platform you run',
    className: 'bg-white text-deep-navy border-neutral-200',
    subClassName: 'text-neutral-500',
  },
  {
    name: 'Aqua',
    sub: 'The computation engine underneath',
    className: 'bg-vibrant-teal text-deep-navy border-vibrant-teal/40',
    subClassName: 'text-deep-navy/70',
  },
  {
    name: 'Hardware',
    sub: 'Commodity CPUs · ARM and x86',
    className: 'bg-deep-navy text-white border-white/10',
    subClassName: 'text-white/65',
  },
];

interface Props {
  className?: string;
  caption?: string;
}

export const LayeredArchitecture = ({
  className,
  caption = 'Zeton runs on Aqua. Aqua reads the hardware and adapts to it.',
}: Props) => {
  const reduced = useReducedMotion();
  const total = layers.length;

  return (
    <figure
      className={className}
      role="img"
      aria-label="A three-layer stack: the Zeton platform on top, the Aqua engine in the middle, and commodity hardware (ARM and x86) at the base."
    >
      <div className="mx-auto flex w-full max-w-md flex-col gap-2.5">
        {layers.map((layer, i) => {
          // Reveal from the base upward: last item (hardware) first.
          const order = total - 1 - i;
          const indent = i * 14; // slight staircase for depth
          return (
            <motion.div
              key={layer.name}
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={reduced ? undefined : { duration: 0.5, delay: order * 0.12, ease: 'easeOut' }}
              style={{ marginLeft: indent, marginRight: 0 }}
              className={`flex items-baseline justify-between rounded-xl border px-5 py-4 shadow-sm ${layer.className}`}
            >
              <span className="text-heading-3 font-bold leading-none">{layer.name}</span>
              <span className={`text-caption ${layer.subClassName}`}>{layer.sub}</span>
            </motion.div>
          );
        })}
      </div>
      <figcaption className="mt-4 text-center text-caption text-neutral-500">{caption}</figcaption>
    </figure>
  );
};
