'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MagneticButton } from '@/components/motion/MagneticButton'
import { FadeInWhenVisible } from '@/components/motion/FadeInWhenVisible'

export function ContactSection() {
  return (
    <section className="relative overflow-hidden border-t border-[#262626] bg-[#0A0A0A] px-6 py-24 lg:px-8 lg:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00D4FF] opacity-[0.04] blur-[80px]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <FadeInWhenVisible>
          <p className="mb-4 text-sm font-medium tracking-[0.2em] uppercase text-[#00D4FF]">
            Get in Touch
          </p>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.1}>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl font-extrabold tracking-tight text-[#F5F5F5] sm:text-5xl lg:text-6xl">
            Let&apos;s Build Something Remarkable.
          </h2>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#A1A1A1]">
            Whether you&apos;re launching a fintech product, exploring Web3, or
            need a senior engineer to join your team — I&apos;d love to hear
            about it.
          </p>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton>
              <a
                href="mailto:gidnwokpor@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full bg-[#00D4FF] px-8 py-3.5 text-sm font-semibold text-[#0A0A0A] transition-all duration-300 hover:bg-[#00D4FF]/90"
              >
                Send a Message
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </MagneticButton>

            <MagneticButton>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-[#262626] px-8 py-3.5 text-sm font-medium text-[#A1A1A1] transition-all duration-300 hover:border-[#404040] hover:text-[#F5F5F5]"
              >
                Learn More
              </Link>
            </MagneticButton>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.4}>
          <p className="mt-8 text-xs text-[#525252]">
            gidnwokpor@gmail.com
          </p>
        </FadeInWhenVisible>
      </div>
    </section>
  )
}
