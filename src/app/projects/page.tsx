import { type Metadata } from 'next'
import Image from 'next/image'

import { FadeInWhenVisible } from '@/components/motion/FadeInWhenVisible'
import { ContactSection } from '@/components/sections/ContactSection'
import logoTemlio from '@/images/logos/temlio_logo.png'
import logoBytelabs from '@/images/logos/bytelabs.png'
import logoDhelc from '@/images/logos/DHELC_logo.jpeg'
import logoStealthStartup from '@/images/logos/stealth_startup_logo.jpeg'
import logoCronkcro from '@/images/logos/cronkcro.webp'
import logoComlio from '@/images/logos/comlio.png'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    "Real-world applications I've built across fintech, edtech, telecoms, and Web3 industries.",
}

const projects = [
  {
    name: 'Cronkcro Web3 Website',
    description:
      'Lead Front-end Engineer for a decentralized meme project built on the Cronos chain. Features NFT minting and innovative crypto experiences with community-driven culture.',
    link: { href: 'https://cronk-landingpage.vercel.app/', label: 'Live Site' },
    logo: logoCronkcro,
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Web3'],
    category: 'Web3',
  },
  {
    name: 'NFTMetaPool DApp',
    description:
      'ERA token minting platform funding disabled people worldwide. Scalable DApp with comprehensive Web3 integration and state management.',
    link: {
      href: 'https://staking-front-vandal-prog.vercel.app/home',
      label: 'Live Site',
    },
    logo: logoOpenShuttle,
    tags: ['React.js', 'SCSS', 'Redux', 'Ether.js', 'Web3.js'],
    category: 'Web3',
  },
  {
    name: 'StartUp Sphere',
    description:
      'Decentralized crowdfunding platform where users connect wallets, create proposals, vote on ideas, and fund projects through blockchain interactions.',
    link: { href: 'https://startup-sphere.vercel.app/', label: 'Live Site' },
    logo: logoStealthStartup,
    tags: ['React.js', 'Tailwind CSS', 'Web3.js', 'Formik'],
    category: 'Web3',
  },
  {
    name: 'Temlio Unified Communications',
    description:
      'Centralized messaging system unifying phone, email, SMS, and social media into one inbox. Reduced platform context-switching by 100%.',
    link: { href: '#', label: 'Enterprise' },
    logo: logoTemlio,
    tags: ['React.js', 'Node.js', 'MongoDB', 'WebSocket'],
    category: 'Fintech',
  },
  {
    name: 'AI-Powered Study Buddy',
    description:
      'Cross-platform educational app with AI tutoring. Led team of 6, accelerating release velocity by 35% using React Native and React.js.',
    link: { href: '#', label: 'Stealth Startup' },
    logo: logoStealthStartup,
    tags: ['React Native', 'React.js', 'AI/ML', 'REST APIs'],
    category: 'EdTech',
  },
  {
    name: 'Fintech-as-a-Service Platform',
    description:
      'Scalable fintech integration platform enabling rapid client onboarding. Reduced integration time by 50% with optimized UX and component libraries.',
    link: { href: '#', label: 'Enterprise' },
    logo: logoBytelabs,
    tags: ['React.js', 'TypeScript', 'PostgreSQL', 'Microservices'],
    category: 'Fintech',
  },
  {
    name: 'Decentralized Identity Auth',
    description:
      'Blockchain-based authentication using DID and OAuth2, reducing identity fraud attempts by 50%. Built with Web3 technologies and smart contracts.',
    link: { href: '#', label: 'Web3 Solution' },
    logo: logoCronkcro,
    tags: ['Solidity', 'Web3.js', 'Ether.js', 'DID', 'OAuth2'],
    category: 'Web3',
  },
  {
    name: 'Real-time Analytics Dashboard',
    description:
      'Business intelligence platform for SMEs with key metrics visibility. Drove 50% more data-informed decisions with interactive visualizations.',
    link: { href: '#', label: 'Analytics' },
    logo: logoComlio,
    tags: ['React.js', 'D3.js', 'Node.js', 'Real-time APIs'],
    category: 'Analytics',
  },
  {
    name: 'Customer Ticketing System',
    description:
      'Intelligent ticketing module with status tracking, automated reminders, and smart assignment logic. Decreased unaddressed tickets by 95%.',
    link: { href: '#', label: 'Enterprise' },
    logo: logoDhelc,
    tags: ['React.js', 'Node.js', 'MongoDB', 'WebSocket'],
    category: 'Enterprise',
  },
]

const categoryColors: Record<string, string> = {
  Web3: 'text-[#00D4FF] border-[#00D4FF]/20 bg-[#00D4FF]/5',
  Fintech: 'text-emerald-400 border-emerald-400/20 bg-emerald-400/5',
  EdTech: 'text-violet-400 border-violet-400/20 bg-violet-400/5',
  Analytics: 'text-amber-400 border-amber-400/20 bg-amber-400/5',
  Enterprise: 'text-rose-400 border-rose-400/20 bg-rose-400/5',
}

export default function Projects() {
  return (
    <>
      <div className="min-h-screen bg-[#0A0A0A] pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <FadeInWhenVisible>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#00D4FF]">
              Portfolio
            </p>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.05}>
            <h1 className="mt-4 font-[family-name:var(--font-syne)] text-4xl font-extrabold leading-tight tracking-tight text-[#F5F5F5] sm:text-5xl">
              Real-World Applications Built Across Industries.
            </h1>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.1}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#A1A1A1]">
              From decentralized Web3 platforms to enterprise fintech systems — 9 projects built with modern stacks and measurable business impact.
            </p>
          </FadeInWhenVisible>

          {/* Grid */}
          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <FadeInWhenVisible key={project.name} delay={i * 0.05}>
                <article className="group flex h-full flex-col rounded-2xl border border-[#1A1A1A] bg-[#111111] p-6 transition-all duration-300 hover:border-[#00D4FF]/20 hover:bg-[#111111]/80">
                  {/* Logo + category */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-[#262626] bg-[#1A1A1A]">
                      <Image
                        src={project.logo}
                        alt={project.name}
                        width={32}
                        height={32}
                        className="h-8 w-8 rounded-lg object-cover"
                        unoptimized
                      />
                    </div>
                    <span
                      className={`rounded-full border px-2.5 py-1 text-xs font-medium ${categoryColors[project.category] ?? 'text-[#525252] border-[#262626] bg-[#1A1A1A]'}`}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-4 flex flex-1 flex-col">
                    <h2 className="font-[family-name:var(--font-syne)] text-base font-bold text-[#F5F5F5] transition-colors group-hover:text-[#00D4FF]">
                      {project.link.href !== '#' ? (
                        <a
                          href={project.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="before:absolute before:inset-0"
                        >
                          {project.name}
                        </a>
                      ) : (
                        project.name
                      )}
                    </h2>
                    <p className="relative mt-2 flex-1 text-sm leading-relaxed text-[#A1A1A1]">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#262626] bg-[#1A1A1A] px-2.5 py-0.5 text-xs text-[#525252]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    {project.link.href !== '#' && (
                      <div className="relative mt-4 flex items-center gap-1.5 text-xs font-medium text-[#00D4FF] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                          <path d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z" />
                        </svg>
                        {project.link.label}
                      </div>
                    )}
                  </div>
                </article>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </div>

      <ContactSection />
    </>
  )
}
