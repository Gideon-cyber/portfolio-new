import { type Metadata } from 'next'

import { FadeInWhenVisible } from '@/components/motion/FadeInWhenVisible'
import { CountUp } from '@/components/motion/CountUp'
import { ContactSection } from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'My professional journey through 6+ years of software engineering across fintech, edtech, telecoms, and Web3.',
}

const roles = [
  {
    company: 'Temlio Telecommunications',
    role: 'Software Engineer',
    period: 'Dec 2024 – Present',
    location: 'Remote · Lagos, Nigeria',
    accent: '#00D4FF',
    achievements: [
      'Engineered a centralized messaging system unifying phone, email, SMS, and social media into one inbox, reducing platform context-switching by 100%',
      'Developed a ticketing module with status tracking, reminders, and assignment logic that decreased unaddressed customer tickets by 95%',
      'Built real-time analytics dashboards giving SMEs visibility into key business metrics, driving 50% more data-informed decisions',
      'Architected call management features including recording, routing, and automated attendants, improving customer call handling efficiency by 40%',
    ],
    tags: ['React.js', 'Node.js', 'MongoDB', 'WebSocket', 'AWS'],
  },
  {
    company: 'Stealth Startup',
    role: 'Software Engineer',
    period: 'Jul 2023 – May 2025',
    location: 'Remote · Texas, USA',
    accent: '#00D4FF',
    achievements: [
      'Spearheaded the end-to-end development of an AI-powered Study Buddy platform across mobile and web, leading a team of 6 engineers and accelerating release velocity by 35%',
      'Architected a modular, scalable frontend system using React Native and React.js, reducing feature rollout time by 40%',
      'Established CI/CD pipelines (CircleCI) that cut deployment cycles from days to hours and reduced production bugs by 25%',
      'Leveraged analytics and A/B testing to drive a 20% increase in engagement and 15% longer session times',
    ],
    tags: ['React Native', 'React.js', 'CircleCI', 'REST APIs', 'AI/ML'],
  },
  {
    company: 'Bytelabs Technologies',
    role: 'Software Engineer',
    period: 'Sep 2022 – Dec 2024',
    location: 'Hybrid · Ibadan, Nigeria',
    accent: '#00D4FF',
    achievements: [
      'Rebuilt the customer dashboard with optimized UX, cutting onboarding time by 30% and increasing user retention by 15%',
      'Enhanced frontend performance via lazy loading, code splitting, and caching — improving Time-to-Interactive by 42%',
      'Led onboarding of 2 fintech clients onto the FAAS platform, slashing integration time by 50%',
      'Built reusable React component libraries, reducing development effort on new features by 25%',
    ],
    tags: ['React.js', 'TypeScript', 'PostgreSQL', 'Microservices'],
  },
  {
    company: 'DHELC Business Solutions',
    role: 'Software Engineer',
    period: 'Jun 2021 – Sep 2022',
    location: 'Ibadan, Nigeria',
    accent: '#00D4FF',
    achievements: [
      'Delivered major feature updates to internal platforms driven by real-time analytics, boosting user engagement by 27%',
      'Integrated Decentralized Identity (DID) + OAuth2 authentication, reducing identity fraud attempts by 50%',
      'Contributed to 99.5% uptime SLA by proactively debugging and resolving critical infrastructure issues',
      'Initiated customer feedback loops with 200+ users, sustaining a 57% competitive edge in adoption',
    ],
    tags: ['JavaScript', 'Web3.js', 'DID', 'OAuth2', 'Node.js'],
  },
]

const skills = [
  {
    category: 'Languages & Frameworks',
    items: ['JavaScript', 'TypeScript', 'Dart', 'Solidity', 'Node.js', 'React.js', 'Next.js', 'React Native', 'Flutter', 'Express.js'],
  },
  {
    category: 'Styling & UI',
    items: ['Tailwind CSS', 'SCSS', 'Redux', 'Figma', 'Photoshop'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'Firestore (Firebase)'],
  },
  {
    category: 'Web3 & Blockchain',
    items: ['Ether.js', 'Web3.js', 'Solidity', 'DID', 'NFT Minting'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Google Cloud Platform', 'Git', 'CircleCI', 'Jest', 'OAuth'],
  },
]

export default function Experience() {
  return (
    <>
      <div className="min-h-screen bg-[#0A0A0A] pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <FadeInWhenVisible>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#00D4FF]">
              Career
            </p>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.05}>
            <h1 className="mt-4 font-[family-name:var(--font-syne)] text-4xl font-extrabold leading-tight tracking-tight text-[#F5F5F5] sm:text-5xl">
              My Professional Journey
            </h1>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.1}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#A1A1A1]">
              6+ years building scalable products across fintech, edtech, telecoms, and Web3 — leading teams and shipping impact.
            </p>
          </FadeInWhenVisible>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { end: 6, suffix: '+', label: 'Years Experience' },
              { end: 9, suffix: '+', label: 'Projects Shipped' },
              { end: 4, suffix: '', label: 'Companies' },
              { end: 5, suffix: '+', label: 'Product Launches' },
            ].map((stat, i) => (
              <FadeInWhenVisible key={stat.label} delay={0.1 + i * 0.05}>
                <div className="rounded-2xl border border-[#1A1A1A] bg-[#111111] p-5">
                  <p className="font-[family-name:var(--font-syne)] text-3xl font-bold text-[#00D4FF]">
                    <CountUp end={stat.end} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-sm text-[#525252]">{stat.label}</p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>

          {/* Experience roles */}
          <div className="mt-20 space-y-6">
            <FadeInWhenVisible>
              <h2 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-[#F5F5F5]">
                Professional Experience
              </h2>
            </FadeInWhenVisible>

            {roles.map((role, i) => (
              <FadeInWhenVisible key={role.company} delay={i * 0.07}>
                <article className="group rounded-2xl border border-[#1A1A1A] bg-[#111111] p-6 transition-colors hover:border-[#00D4FF]/20">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-[#F5F5F5] group-hover:text-[#00D4FF] transition-colors">
                        {role.role}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-[#A1A1A1]">
                        {role.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-[#00D4FF]">{role.period}</p>
                      <p className="mt-0.5 text-xs text-[#525252]">{role.location}</p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {role.achievements.map((a, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed text-[#A1A1A1]">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-[#00D4FF]/50" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {role.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#262626] bg-[#1A1A1A] px-3 py-1 text-xs font-medium text-[#A1A1A1]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </FadeInWhenVisible>
            ))}
          </div>

          {/* Skills */}
          <div className="mt-20">
            <FadeInWhenVisible>
              <h2 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-[#F5F5F5]">
                Core Skills
              </h2>
            </FadeInWhenVisible>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((group, i) => (
                <FadeInWhenVisible key={group.category} delay={i * 0.06}>
                  <div className="rounded-2xl border border-[#1A1A1A] bg-[#111111] p-5">
                    <h3 className="text-xs font-semibold tracking-widest uppercase text-[#00D4FF]">
                      {group.category}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[#262626] bg-[#1A1A1A] px-3 py-1 text-xs text-[#A1A1A1]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mt-20">
            <FadeInWhenVisible>
              <h2 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-[#F5F5F5]">
                Education
              </h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.08}>
              <div className="mt-6 rounded-2xl border border-[#1A1A1A] bg-[#111111] p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-[#F5F5F5]">
                      Bachelor of Science in Biochemistry
                    </h3>
                    <p className="mt-1 text-sm text-[#A1A1A1]">University of Ibadan</p>
                  </div>
                  <p className="text-sm font-medium text-[#00D4FF]">2017 – 2023</p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#525252]">
                  Developed strong analytical and problem-solving skills through rigorous scientific methodology — a unique lens that translates directly into systematic software engineering.
                </p>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>

      <ContactSection />
    </>
  )
}
