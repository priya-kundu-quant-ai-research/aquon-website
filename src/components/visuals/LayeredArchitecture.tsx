'use client';

import { useMounted } from '@/hooks/useMounted';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * The stack the whole company rests on: hardware at the base, Aqua above it,
 * Zeton on top. On entry the slabs settle into place from the base up (slow,
 * settled — Aquon character). Reduced motion renders the built stack.
 *
 * Colour note: uses NO purple (it can appear on non-Zeton pages). Zeton is the
 * clean light surface on top, Aqua is teal, hardware is neutral. Purple stays on
 * the actual Zeton surfaces. `onDark` adapts the palette for dark grounds (the
 * hero), where the navy hardware slab would otherwise disappear.
 */

interface Layer {
  name: string;
  sub: string;
  light: string;
  lightSub: string;
  dark: string;
  darkSub: string;
}

// Top to bottom.
const layers: Layer[] = [
  {
    name: 'Zeton',
    sub: 'The investment platform you run',
    light: 'bg-white text-deep-navy border-neutral-200',
    lightSub: 'text-neutral-500',
    dark: 'bg-white text-deep-navy border-white/20',
    darkSub: 'text-neutral-500',
  },
  {
    name: 'Aqua',
    sub: 'The computation engine underneath',
    light: 'bg-vibrant-teal text-deep-navy border-vibrant-teal/40',
    lightSub: 'text-deep-navy/70',
    dark: 'bg-vibrant-teal text-deep-navy border-vibrant-teal/40',
    darkSub: 'text-deep-navy/70',
  },
  {
    name: 'Hardware',
    sub: 'Commodity CPUs · ARM and x86',
    light: 'bg-deep-navy text-white border-white/10',
    lightSub: 'text-white/65',
    dark: 'bg-white/10 text-white border-white/25',
    darkSub: 'text-white/60',
  },
];

interface Props {
  className?: string;
  caption?: string;
  onDark?: boolean;
}

export const LayeredArchitecture = ({
  className,
  caption = 'Zeton runs on Aqua. Aqua reads the hardware and adapts to it.',
  onDark = false,
}: Props) => {
  const reduced = useReducedMotion();
  const mounted = useMounted();
  const total = layers.length;

  return (
    <figure
      className={className}
      role="img"
      aria-label="A three-layer stack: the Zeton platform on top, the Aqua engine in the middle, and commodity hardware (ARM and x86) at the base."
    >
      <div className="mx-auto flex w-full max-w-md flex-col gap-2.5">
        {layers.map((layer, i) => {
          const order = total - 1 - i; // reveal base-up
          const indent = i * 14;
          return (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, y: 18 }}
              animate={reduced && mounted ? { opacity: 1, y: 0 } : undefined}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : order * 0.12, ease: 'easeOut' }}
              style={{ marginLeft: indent, marginRight: 0 }}
              className={`flex items-baseline justify-between rounded-xl border px-5 py-4 shadow-sm ${
                onDark ? layer.dark : layer.light
              }`}
            >
              <span className="text-heading-3 font-bold leading-none">{layer.name}</span>
              <span className={`text-caption ${onDark ? layer.darkSub : layer.lightSub}`}>
                {layer.sub}
              </span>
            </motion.div>
          );
        })}
      </div>
      <figcaption className={`mt-4 text-center text-caption ${onDark ? 'text-white/60' : 'text-neutral-500'}`}>
        {caption}
      </figcaption>
    </figure>
  );
};
