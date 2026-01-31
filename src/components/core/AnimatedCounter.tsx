'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
  decimals?: number;

}

export const AnimatedCounter = ({
  from,
  to,
  duration = 1.5,
  className,
  suffix = '',
  decimals = 0,
}: AnimatedCounterProps) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => latest.toFixed(decimals));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration });
      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};