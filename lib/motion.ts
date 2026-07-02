// Premium motion design system - Framer Motion variants
// Following high-end visual design skill principles

import { Variants, Transition } from "framer-motion";

// Easing curves that feel premium (never linear or ease-in-out)
export const easings = {
  expoOut: [0.16, 1, 0.3, 1],
  expoInOut: [0.87, 0, 0.13, 1],
  backOut: [0.34, 1.56, 0.64, 1],
  smooth: [0.45, 0, 0.55, 1],
  gentle: [0.4, 0, 0.2, 1],
} as const;

// Base transitions
export const transitions = {
  fast: { duration: 0.3, ease: easings.expoOut },
  default: { duration: 0.5, ease: easings.expoOut },
  slow: { duration: 0.7, ease: easings.expoOut },
  spring: { type: "spring", stiffness: 300, damping: 30 } as Transition,
  springSoft: { type: "spring", stiffness: 200, damping: 25 } as Transition,
} as const;

// Fade in from bottom (standard reveal)
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.default,
  },
};

// Fade in from bottom with more dramatic offset
export const fadeInUpLarge: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easings.expoOut },
  },
};

// Fade in with scale
export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.default,
  },
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.default,
  },
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.default,
  },
};

// Stagger children container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Stagger container with more delay
export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Fast stagger for smaller items
export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

// Individual stagger item
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easings.expoOut },
  },
};

// Hover scale effect
export const hoverScale = {
  scale: 1.02,
  transition: transitions.spring,
};

// Card hover with lift and glow
export const cardHover = {
  y: -4,
  transition: { duration: 0.4, ease: easings.expoOut },
};

// Magnetic button wrapper
export const magneticHover = {
  scale: 1.05,
  transition: transitions.spring,
};

// Page transition
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easings.expoOut },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: easings.expoOut },
  },
};

// Hero text reveal - line by line
export const heroLineReveal: Variants = {
  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: easings.expoOut,
      delay: i * 0.12,
    },
  }),
};

// Hero character animation
export const letterReveal: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easings.expoOut,
      delay: i * 0.03,
    },
  }),
};

// Floating animation for decorative elements
export const floatingAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Glow pulse for accents
export const glowPulse = {
  boxShadow: [
    "0 0 20px rgba(124,58,237,0.2)",
    "0 0 40px rgba(124,58,237,0.4)",
    "0 0 20px rgba(124,58,237,0.2)",
  ],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Viewport settings for scroll triggers
export const viewportSettings = {
  once: true,
  margin: "-100px",
  amount: 0.3,
};

// Reduced motion fallback (use in client-side effect only)
export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};
