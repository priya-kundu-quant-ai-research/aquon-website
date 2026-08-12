'use client';

import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';
import { type ReactNode } from 'react';

interface SectionRevealProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  /** Seconds to delay the reveal, for staggering siblings. */
  delay?: number;
  /** Vertical travel distance in px. */
  y?: number;
}

/**
 * The one scroll-reveal used across the site. Replaces the ~40 hand-rolled
 * `initial={{opacity:0,y:20}} whileInView` copies, and — unlike them —
 * honours `prefers-reduced-motion`: when reduced, content renders in place
 * with no transform and no animation.
 */
export const SectionReveal = ({
  children,
  delay = 0,
  y = 20,
  className,
  ...rest
}: SectionRevealProps) => {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={reduced ? undefined : { duration: 0.6, delay, ease: 'easeOut' }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
