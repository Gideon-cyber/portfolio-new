import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'

const projects = [
  {
    name: 'Cronkcro Web3 Website',
    description:
      'Lead Front-end Engineer for a decentralized meme-packed project built on the Cronos chain. Features cool NFT minting and innovative crypto experiences with community-driven culture.',
    link: {
      href: 'https://cronk-landingpage.vercel.app/',
      label: 'cronk-landingpage.vercel.app',
    },
    logo: logoCosmos,
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Web3'],
  },
  {
    name: 'NFTMetaPool Decentralized Web App',
    description:
      'Lead Front-end Engineer for ERA token minting platform funding disabled people worldwide. Scalable DApp with comprehensive Web3 integration and state management.',
    link: {
      href: 'https://staking-front-vandal-prog.vercel.app/home',
      label: 'staking-front-vandal-prog.vercel.app',
    },
    logo: logoHelioStream,
    technologies: [
      'React.js',
      'SCSS',
      'Redux',
      'Ether.js',
      'Web3.js',
      'Day.js',
    ],
  },
  {
    name: 'Start-up Sphere Crowdfunding Platform',
    description:
      'Decentralized crowdfunding web application where users connect wallets, create proposals, vote on ideas, and fund projects through blockchain interactions.',
    link: {
      href: 'https://startup-sphere.vercel.app/',
      label: 'startup-sphere.vercel.app',
    },
    logo: logoOpenShuttle,
    technologies: ['React.js', 'Tailwind CSS', 'Web3.js', 'Formik', 'Yup'],
  },
  {
    name: 'Temlio Unified Communications Platform',
    description:
      'Centralized messaging system unifying phone, email, SMS, and social media into one inbox. Built with React.js and Node.js, reducing platform context-switching by 100%.',
    link: { href: '#', label: 'Enterprise Solution' },
    logo: logoPlanetaria,
    technologies: ['React.js', 'Node.js', 'MongoDB', 'WebSocket'],
  },
  {
    name: 'AI-Powered Study Buddy Platform',
    description:
      'Cross-platform educational app with AI tutoring capabilities. Led team of 6 engineers, accelerating release velocity by 35% using React Native and React.js.',
    link: { href: '#', label: 'Stealth Startup' },
    logo: logoAnimaginary,
    technologies: ['React Native', 'React.js', 'AI/ML', 'REST APIs'],
  },
  {
    name: 'Fintech-as-a-Service (FAAS) Platform',
    description:
      'Scalable fintech integration platform enabling rapid client onboarding. Reduced integration time by 50% with optimized UX and component libraries.',
    link: { href: '#', label: 'Bytelabs Technologies' },
    logo: logoHelioStream,
    technologies: ['React.js', 'TypeScript', 'PostgreSQL', 'Microservices'],
  },
  {
    name: 'Decentralized Identity Authentication System',
    description:
      'Blockchain-based authentication using DID and OAuth2, reducing identity fraud attempts by 50%. Built with Web3 technologies and smart contracts.',
    link: { href: '#', label: 'Web3 Solution' },
    logo: logoCosmos,
    technologies: ['Solidity', 'Web3.js', 'Ether.js', 'DID', 'OAuth2'],
  },
  {
    name: 'Real-time Analytics Dashboard',
    description:
      'Business intelligence platform providing SMEs with key metrics visibility. Drove 50% more data-informed decisions with interactive visualizations.',
    link: { href: '#', label: 'Analytics Platform' },
    logo: logoOpenShuttle,
    technologies: ['React.js', 'D3.js', 'Node.js', 'Real-time APIs'],
  },
  {
    name: 'Customer Ticketing & Support System',
    description:
      'Intelligent ticketing module with status tracking, automated reminders, and smart assignment logic. Decreased unaddressed tickets by 95%.',
    link: { href: '#', label: 'Support System' },
    logo: logoAnimaginary,
    technologies: ['React.js', 'Node.js', 'MongoDB', 'WebSocket'],
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description:
    "Real-world applications I've built across fintech, edtech, telecoms, and Web3 industries.",
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Real-world applications I've built across industries."
      intro="Over 6+ years of professional development, I've architected and delivered scalable solutions across fintech, edtech, telecommunications, and Web3. Here are some key projects that showcase my technical expertise and business impact."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>

            {project.technologies && (
              <div className="mt-4">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
