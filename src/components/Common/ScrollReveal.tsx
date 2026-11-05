import React, { useRef } from 'react';
import { LazyMotion, domAnimation, m, useReducedMotion, useScroll, useTransform } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  scrollProgress?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  delay = 0,
  staggerChildren = 0.1,
  scrollProgress = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const variants = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      y: prefersReducedMotion ? 0 : 8,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.4,
        ease: [0.22, 1, 0.36, 1] as const,
        delayChildren: prefersReducedMotion ? 0 : delay,
        staggerChildren: prefersReducedMotion ? 0 : staggerChildren,
      },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={ref}
        className={`relative w-full ${className ?? ''}`}
        initial={prefersReducedMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={variants}
      >
        {scrollProgress && !prefersReducedMotion && (
          <m.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-70"
            style={{ scaleX }}
          />
        )}
        {children}
      </m.div>
    </LazyMotion>
  );
};

export const RevealItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const variants = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      y: prefersReducedMotion ? 0 : 6,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.35,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <m.div
      className={className}
      variants={variants}
    >
      {children}
    </m.div>
  );
};
