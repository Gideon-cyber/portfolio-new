'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    // Always runs after first render — refs are guaranteed valid here
    const isTouchDevice = window.matchMedia('(hover: none)').matches
    if (isTouchDevice) return

    setEnabled(true)
    setVisible(true)

    const dot = dotRef.current!
    const ring = ringRef.current!

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 })

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1, ease: 'power2.out' })
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.35, ease: 'power2.out' })

      const target = e.target as HTMLElement
      setIsPointer(!!(
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor-pointer]')
      ))
    }

    const onMouseLeave = () => setVisible(false)
    const onMouseEnter = () => setVisible(true)

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
    }
  }, [])

  // Always in DOM so refs are valid on first effect run.
  // Hidden on touch devices via display:none, hidden before mouse enters via opacity.
  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full transition-[width,height,background-color,opacity] duration-150"
        style={{
          display: enabled ? 'block' : 'none',
          width: isPointer ? '8px' : '6px',
          height: isPointer ? '8px' : '6px',
          backgroundColor: isPointer ? '#00D4FF' : '#F5F5F5',
          opacity: visible ? 1 : 0,
        }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border transition-[width,height,border-color,background-color,opacity] duration-200"
        style={{
          display: enabled ? 'block' : 'none',
          width: isPointer ? '48px' : '36px',
          height: isPointer ? '48px' : '36px',
          borderColor: isPointer ? '#00D4FF' : 'rgba(245,245,245,0.4)',
          backgroundColor: isPointer ? 'rgba(0,212,255,0.06)' : 'transparent',
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  )
}
