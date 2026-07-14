'use client'

import dynamic from 'next/dynamic'
import { HeroContent } from './HeroContent'

const HeroBackground = dynamic(
  () =>
    import('./HeroBackground').then((mod) => ({ default: mod.HeroBackground })),
  { ssr: false, loading: () => null },
)

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0A0A0A]">
      {/* Three.js particle field — desktop only via CSS */}
      <div className="hidden lg:block">
        <HeroBackground />
      </div>

      {/* Grid line decoration */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#F5F5F5 1px, transparent 1px), linear-gradient(90deg, #F5F5F5 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Radial gradient focal point */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00D4FF] opacity-[0.04] blur-[100px]" />

      <HeroContent />
    </section>
  )
}
