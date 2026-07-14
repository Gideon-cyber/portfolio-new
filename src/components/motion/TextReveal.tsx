'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

interface TextRevealProps {
  children: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  className?: string
  delay?: number
  stagger?: number
  onComplete?: () => void
}

export function TextReveal({
  children,
  as: Tag = 'h1',
  className = '',
  delay = 0.1,
  stagger = 0.06,
  onComplete,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) {
      if (onComplete) onComplete()
      return
    }

    const container = containerRef.current
    if (!container) return

    const words = children.split(' ')
    container.innerHTML = words
      .map(
        (word) =>
          `<span class="word-wrapper" style="display:inline-block;overflow:hidden;vertical-align:bottom;margin-right:0.28em"><span class="word" style="display:inline-block">${word}</span></span>`,
      )
      .join('')

    const wordEls = container.querySelectorAll('.word')

    gsap.from(wordEls, {
      y: '110%',
      opacity: 0,
      duration: 0.9,
      stagger,
      delay,
      ease: 'power4.out',
      onComplete,
    })

    return () => {
      gsap.killTweensOf(wordEls)
    }
  }, [children, delay, stagger, onComplete])

  return (
    <Tag ref={containerRef as React.RefObject<HTMLElement & HTMLHeadingElement>} className={className}>
      {children}
    </Tag>
  )
}
