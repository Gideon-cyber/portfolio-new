'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface HorizontalScrollProps {
  children: React.ReactNode
  className?: string
}

export function HorizontalScroll({
  children,
  className = '',
}: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) return

    const isMobile = window.innerWidth < 768
    if (isMobile) return

    const container = containerRef.current
    const track = trackRef.current
    if (!container || !track) return

    const getScrollAmount = () => -(track.scrollWidth - window.innerWidth)

    const tween = gsap.to(track, {
      x: getScrollAmount,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1.2,
        start: 'top top',
        end: () => `+=${Math.abs(getScrollAmount())}`,
        invalidateOnRefresh: true,
      },
    })

    return () => {
      tween.kill()
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === container) t.kill()
      })
    }
  }, [])

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div
        ref={trackRef}
        className="flex gap-6 will-change-transform md:flex-nowrap flex-wrap"
      >
        {children}
      </div>
    </div>
  )
}
