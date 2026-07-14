'use client'

import { useRef, useCallback } from 'react'
import { gsap } from 'gsap'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number
}

export function MagneticButton({
  children,
  className = '',
  strength = 0.35,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const isTouchDevice = window.matchMedia('(hover: none)').matches
      if (isTouchDevice) return

      const rect = ref.current!.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distX = (e.clientX - centerX) * strength
      const distY = (e.clientY - centerY) * strength

      gsap.to(ref.current, {
        x: distX,
        y: distY,
        duration: 0.3,
        ease: 'power2.out',
      })
    },
    [strength],
  )

  const handleMouseLeave = useCallback(() => {
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.5)',
    })
  }, [])

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${className}`}
    >
      {children}
    </div>
  )
}
