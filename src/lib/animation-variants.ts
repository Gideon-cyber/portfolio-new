const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const noOp = { hidden: {}, visible: {} }

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

export const fadeUp = prefersReducedMotion
  ? noOp
  : {
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease },
      },
    }

export const fadeIn = prefersReducedMotion
  ? noOp
  : {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' as const },
      },
    }

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

export const staggerItem = prefersReducedMotion
  ? noOp
  : {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease },
      },
    }

export const slideInLeft = prefersReducedMotion
  ? noOp
  : {
      hidden: { opacity: 0, x: -60 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease },
      },
    }

export const slideInRight = prefersReducedMotion
  ? noOp
  : {
      hidden: { opacity: 0, x: 60 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease },
      },
    }

export const scaleIn = prefersReducedMotion
  ? noOp
  : {
      hidden: { opacity: 0, scale: 0.92 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease },
      },
    }

export const curtainVariants = prefersReducedMotion
  ? { initial: {}, animate: {}, exit: {} }
  : {
      initial: { scaleY: 0 },
      animate: { scaleY: 0 },
      exit: {
        scaleY: [0, 1, 1, 0],
        transition: {
          duration: 0.9,
          times: [0, 0.45, 0.55, 1],
          ease: 'easeInOut',
        },
      },
    }
