'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { TextReveal } from '@/components/motion/TextReveal'
import { MagneticButton } from '@/components/motion/MagneticButton'
import portraitImage from '@/images/portrait.jpg'

const socialLinks = [
  {
    href: 'https://github.com/Gideon-cyber',
    label: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    href: 'https://linkedin.com/in/gideonnwokpor',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: 'https://x.com/gidnwokpor',
    label: 'X',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.213 5.567 5.951-5.567zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export function HeroContent() {
  return (
    <div className="relative z-10 flex min-h-screen w-full items-center">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-0">
          {/* Left column — text */}
          <div className="flex flex-col justify-center pt-24 pb-12 lg:py-32">
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 text-sm font-medium tracking-[0.2em] uppercase text-[#00D4FF]"
            >
              Software Engineer · Web3 · Fintech
            </motion.p>

            {/* Headline */}
            <div className="overflow-hidden">
              <TextReveal
                as="h1"
                delay={0.4}
                stagger={0.07}
                className="font-[family-name:var(--font-syne)] text-5xl font-extrabold leading-[1.05] tracking-tight text-[#F5F5F5] sm:text-6xl lg:text-7xl xl:text-8xl"
              >
                Building the Web's Next Chapter.
              </TextReveal>
            </div>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-lg text-base leading-relaxed text-[#A1A1A1]"
            >
              6 years shipping across fintech, Web3, and enterprise—leading teams,
              architecting systems, and obsessing over craft from pixel to
              infrastructure.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <MagneticButton>
                <Link
                  href="/projects"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#00D4FF] px-7 py-3 text-sm font-semibold text-[#0A0A0A] transition-all duration-300 hover:bg-[#00D4FF]/90"
                >
                  View Work
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
                </Link>
              </MagneticButton>

              <MagneticButton>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-[#262626] px-7 py-3 text-sm font-medium text-[#A1A1A1] transition-all duration-300 hover:border-[#404040] hover:text-[#F5F5F5]"
                >
                  About Me
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="mt-10 flex items-center gap-5"
            >
              {socialLinks.map((link) => (
                <MagneticButton key={link.label} strength={0.5}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-[#525252] transition-colors duration-200 hover:text-[#00D4FF]"
                  >
                    {link.icon}
                  </a>
                </MagneticButton>
              ))}
            </motion.div>
          </div>

          {/* Right column — portrait */}
          <div className="relative hidden lg:flex lg:items-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[80vh] w-full max-w-md"
            >
              {/* Glow effect behind image */}
              <div className="absolute inset-0 -z-10 scale-90 rounded-full bg-[#00D4FF] opacity-[0.06] blur-3xl" />

              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src={portraitImage}
                  alt="Gideon Nwokpor"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 0vw, 40vw"
                />
                {/* Gradient overlay bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
              </div>

              {/* Floating stat cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute -left-8 top-1/3 rounded-xl border border-[#262626] bg-[#111111]/90 px-4 py-3 backdrop-blur-sm"
              >
                <p className="font-[family-name:var(--font-syne)] text-2xl font-bold text-[#00D4FF]">
                  6+
                </p>
                <p className="text-xs text-[#A1A1A1]">Years Experience</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="absolute -right-6 bottom-1/3 rounded-xl border border-[#262626] bg-[#111111]/90 px-4 py-3 backdrop-blur-sm"
              >
                <p className="font-[family-name:var(--font-syne)] text-2xl font-bold text-[#00D4FF]">
                  9+
                </p>
                <p className="text-xs text-[#A1A1A1]">Projects Shipped</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs tracking-[0.2em] uppercase text-[#525252]">
              Scroll
            </span>
            <div className="h-10 w-px bg-gradient-to-b from-[#525252] to-transparent" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
