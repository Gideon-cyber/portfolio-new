import { type Metadata } from 'next'
import Image from 'next/image'

import { FadeInWhenVisible } from '@/components/motion/FadeInWhenVisible'
import { ContactSection } from '@/components/sections/ContactSection'
import portraitImage from '@/images/Image4.jpeg'

export const metadata: Metadata = {
  title: 'About',
  description:
    "I'm Gideon Nwokpor. Software Engineer and Full Stack Developer with over 6 years of experience building scalable applications.",
}

const socialLinks = [
  {
    href: 'https://x.com/Gideon_cyber',
    label: 'X (Twitter)',
    handle: '@gidnwokpor',
  },
  {
    href: 'https://github.com/Gideon-cyber',
    label: 'GitHub',
    handle: 'Gideon-cyber',
  },
  {
    href: 'https://linkedin.com/in/gideon-nwokpor',
    label: 'LinkedIn',
    handle: 'gideon-nwokpor',
  },
  {
    href: 'mailto:gidnwokpor@gmail.com',
    label: 'Email',
    handle: 'gidnwokpor@gmail.com',
  },
]

const bio = [
  `Results-driven Software Engineer with over 6 years of experience architecting, building, and maintaining scalable web and mobile applications across fintech, edtech, telecommunications, e-commerce, and Web3 industries. I've guided teams of 5–15 members through 5+ product launches at high-growth technology startups.`,
  `My expertise spans modern JavaScript frameworks — React.js, Next.js, React Native — along with backend technologies including Node.js and databases like MongoDB, PostgreSQL, and Firestore. I have a strong background in Web3, working with Ethereum, smart contracts, and decentralized identity systems.`,
  `Currently at Temlio Telecommunications, where I engineered a centralized messaging system that reduced platform context-switching by 100% and developed ticketing modules that decreased unaddressed customer tickets by 95%.`,
  `When I'm not coding, I enjoy mentoring junior developers, contributing to open-source projects, and staying up-to-date with the latest in blockchain and AI. I hold a BSc in Biochemistry from the University of Ibadan — giving me a unique analytical lens on software problem-solving.`,
]

export default function About() {
  return (
    <>
      <div className="min-h-screen bg-[#0A0A0A] pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Page label */}
          <FadeInWhenVisible>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#00D4FF]">
              About Me
            </p>
          </FadeInWhenVisible>

          <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Left — text */}
            <div className="flex flex-col justify-center">
              <FadeInWhenVisible delay={0.05}>
                <h1 className="font-[family-name:var(--font-syne)] text-4xl font-extrabold leading-tight tracking-tight text-[#F5F5F5] sm:text-5xl">
                  Software Engineer. Web3 Builder. Problem Solver.
                </h1>
              </FadeInWhenVisible>

              <div className="mt-8 space-y-5">
                {bio.map((paragraph, i) => (
                  <FadeInWhenVisible key={i} delay={0.1 + i * 0.07}>
                    <p className="text-base leading-relaxed text-[#A1A1A1]">
                      {paragraph}
                    </p>
                  </FadeInWhenVisible>
                ))}
              </div>

              {/* Social links */}
              <FadeInWhenVisible delay={0.4}>
                <div className="mt-10 border-t border-[#1A1A1A] pt-10">
                  <h2 className="mb-5 text-xs font-semibold tracking-widest uppercase text-[#525252]">
                    Connect
                  </h2>
                  <ul className="space-y-3">
                    {socialLinks.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target={link.href.startsWith('mailto') ? undefined : '_blank'}
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between rounded-lg border border-[#1A1A1A] bg-[#111111] px-4 py-3 transition-colors hover:border-[#00D4FF]/30 hover:bg-[#00D4FF]/5"
                        >
                          <span className="text-sm font-medium text-[#A1A1A1] group-hover:text-[#F5F5F5]">
                            {link.label}
                          </span>
                          <span className="text-sm text-[#525252] group-hover:text-[#00D4FF]">
                            {link.handle}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInWhenVisible>
            </div>

            {/* Right — portrait */}
            <FadeInWhenVisible delay={0.15}>
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 -z-10 scale-75 rounded-full bg-[#00D4FF] opacity-[0.05] blur-3xl" />

                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={portraitImage}
                    alt="Gideon Nwokpor"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full object-cover"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
                </div>

                {/* Stat chips */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { value: '6+', label: 'Years' },
                    { value: '9+', label: 'Projects' },
                    { value: '4', label: 'Companies' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-[#1A1A1A] bg-[#111111] p-4 text-center"
                    >
                      <p className="font-[family-name:var(--font-syne)] text-2xl font-bold text-[#00D4FF]">
                        {stat.value}
                      </p>
                      <p className="mt-0.5 text-xs text-[#525252]">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>

      <ContactSection />
    </>
  )
}
