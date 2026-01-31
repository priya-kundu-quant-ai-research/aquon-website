'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface AnimatedInViewProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}

const containerVariants = {
  hidden: {},
  visible: (custom: { delay: number; stagger: number }) => ({
    transition: {
      staggerChildren: custom.stagger,
      delayChildren: custom.delay,
    },
  }),
};

export const AnimatedInView = ({
  children,
  className,
  delay = 0,
  stagger = 0.1,
}: AnimatedInViewProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      custom={{ delay, stagger }}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
};

// Child component for fade-in animations
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const FadeIn = ({ children }: { children: ReactNode }) => (
  <motion.div variants={itemVariants}>{children}</motion.div>
);