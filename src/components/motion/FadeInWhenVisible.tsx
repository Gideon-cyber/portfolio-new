'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animation-variants'

interface FadeInWhenVisibleProps {
  children: React.ReactNode
  className?: string
  delay?: number
  once?: boolean
}

export function FadeInWhenVisible({
  children,
  className,
  delay = 0,
  once = true,
}: FadeInWhenVisibleProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
      variants={fadeUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
