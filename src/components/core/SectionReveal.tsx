'use client';

import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';
import { useEffect, useState, type ReactNode } from 'react';

interface SectionRevealProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  /** Seconds to delay the reveal, for staggering siblings. */
  delay?: number;
  /** Vertical travel distance in px. */
  y?: number;
}

/**
 * The one scroll-reveal used across the site. Replaces the ~40 hand-rolled
 * `initial={{opacity:0,y:20}} whileInView` copies, and honours
 * `prefers-reduced-motion`: when reduced, content reveals instantly on mount
 * (no scroll dependency, no animation).
 *
 * `initial` is kept identical for reduced and non-reduced so SSR and client
 * hydrate consistently; the reduced branch then uses `animate` (duration 0) to
 * land on the visible state immediately, rather than gating it behind
 * `whileInView`, which would leave content stuck at opacity 0.
 */
export const SectionReveal = ({
  children,
  delay = 0,
  y = 20,
  className,
  ...rest
}: SectionRevealProps) => {
  const reduced = useReducedMotion();
  // `mounted` keeps SSR and the first client render identical (both start at
  // `initial`), so no hydration mismatch; the reduced-motion reveal is applied
  // only after mount.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const shown = { opacity: 1, y: 0 };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={reduced && mounted ? shown : undefined}
      whileInView={reduced ? undefined : shown}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : delay, ease: 'easeOut' }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
