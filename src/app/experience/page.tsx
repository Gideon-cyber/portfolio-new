import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ExperienceSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Role({
  role,
  company,
  date,
  location,
  achievements,
}: {
  role: string
  company: string
  date: string
  location: string
  achievements: string[]
}) {
  return (
    <Card as="article">
      <Card.Title as="h3">{role}</Card.Title>
      <Card.Eyebrow decorate>
        {company} • {location}
      </Card.Eyebrow>
      <Card.Eyebrow>{date}</Card.Eyebrow>
      <Card.Description>
        <ul className="mt-4 space-y-2">
          {achievements.map((achievement, index) => (
            <li
              key={index}
              className="text-sm text-zinc-600 dark:text-zinc-400"
            >
              • {achievement}
            </li>
          ))}
        </ul>
      </Card.Description>
    </Card>
  )
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
        {title}
      </h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {skills.join(', ')}
      </p>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'My professional journey through 6+ years of software engineering across fintech, edtech, telecoms, and Web3.',
}

export default function Experience() {
  return (
    <SimpleLayout
      title="My professional journey through software engineering."
      intro="Over 6+ years of experience architecting, building, and maintaining scalable web and mobile applications across fintech, edtech, telecommunications, e-commerce, and Web3 industries. I've guided teams of 5-15 members through 5+ product launches at high-growth technology startups."
    >
      <div className="space-y-20">
        <ExperienceSection title="Professional Experience">
          <Role
            role="Software Engineer"
            company="Temlio Telecommunications"
            date="Dec 2024 – Present"
            location="Remote, Lagos, Nigeria"
            achievements={[
              'Engineered a centralized messaging system unifying phone, email, SMS, and social media into one inbox, reducing platform context-switching by 100%',
              'Developed a ticketing module with status tracking, reminders, and assignment logic that decreased unaddressed customer tickets by 95%',
              'Built real-time analytics dashboards giving SMEs visibility into key business metrics, driving 50% more data-informed decisions',
              'Architectured call management features including recording, routing, and automated attendants, improving customer call handling efficiency by 40%',
              'Designed mobile and cloud-first infrastructure for data persistence and secure access, plus role-based permissions and customizable templates to support SME branding and governance',
            ]}
          />

          <Role
            role="Software Engineer"
            company="Stealth Startup"
            date="Jul 2023 – May 2025"
            location="Remote, Texas, USA"
            achievements={[
              'Spearheaded the end-to-end development of an AI-powered Study Buddy platform across mobile and web, leading a team of 6 engineers and accelerating release velocity by 35%',
              'Architectured a modular, scalable frontend system using React Native and React.js, reducing feature rollout time by 40% and supporting long-term maintainability',
              'Partnered with backend engineers to design and integrate high-performance REST APIs, ensuring seamless cross-platform synchronization with 99.9% uptime',
              'Established CI/CD pipelines (CircleCI) that cut deployment cycles from days to hours and reduced production bugs by 25%',
              'Conducted weekly code reviews and mentorship sessions, improving code quality and boosting junior developer productivity by 30%',
              'Leveraged analytics and A/B testing to address user friction points, driving a 20% increase in engagement and 15% longer session times',
            ]}
          />

          <Role
            role="Software Engineer"
            company="Bytelabs Technologies"
            date="Sep 2022 – Dec 2024"
            location="Hybrid, Ibadan, Nigeria"
            achievements={[
              'Rebuilt the customer dashboard with optimized UX and faster load times, cutting onboarding time by 30% and increasing user retention by 15%',
              'Enhanced frontend performance by implementing lazy loading, code splitting, and caching, improving Time-to-Interactive by 42%',
              "Played a key role in onboarding 2 fintech clients onto the company's FAAS (Fintech as a Service) platform, slashing integration time by 50% and enabling quicker go-to-market",
              'Built reusable React component libraries and design systems, standardizing the UI across products and reducing development effort on new features by 25%',
              'Collaborated with product managers to define feature scopes, aligning engineering with business goals and accelerating delivery of high-priority features by 20%',
            ]}
          />

          <Role
            role="Software Engineer"
            company="DHELC Business Solutions"
            date="Jun 2021 – Sep 2022"
            location="Ibadan, Nigeria"
            achievements={[
              'Delivered major feature updates to internal platforms driven by real-time analytics, boosting user engagement by 27%',
              'Integrated Decentralized Identity (DID) + OAuth2 authentication, strengthening data security and reducing identity fraud attempts by 50%',
              'Proactively supported infrastructure stability by debugging and resolving critical issues, contributing to 99.5% uptime SLA',
              'Initiated customer feedback loops with 200+ users, producing actionable insights that guided product iterations and sustained a 57% competitive edge in adoption',
            ]}
          />
        </ExperienceSection>

        <ExperienceSection title="Core Skills">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <SkillCategory
              title="Languages & Frameworks"
              skills={[
                'JavaScript',
                'TypeScript',
                'Dart',
                'Solidity',
                'Node.js',
                'React.js',
                'Next.js',
                'React Native',
                'Flutter',
                'Express.js',
              ]}
            />
            <SkillCategory
              title="Styling & UI"
              skills={['Tailwind CSS', 'Redux', 'Figma', 'Photoshop']}
            />
            <SkillCategory
              title="Databases & Storage"
              skills={['MongoDB', 'PostgreSQL', 'Firestore (Firebase)']}
            />
            <SkillCategory
              title="Web3 & Blockchain"
              skills={['Ether.js', 'Web3.js', 'Decentralized Identity (DID)']}
            />
            <SkillCategory
              title="Cloud & DevOps"
              skills={[
                'AWS',
                'Google Cloud Platform',
                'Git',
                'CircleCI',
                'Jest',
                'OAuth',
              ]}
            />
          </div>
        </ExperienceSection>

        <ExperienceSection title="Education">
          <Role
            role="Bachelor of Science in Biochemistry"
            company="University of Ibadan"
            date="2017 – 2023"
            location="Ibadan, Nigeria"
            achievements={[
              'Developed strong analytical and problem-solving skills through rigorous scientific methodology',
              'Applied systematic thinking and research approaches that translate well to software engineering',
              'Gained experience in data analysis and interpretation, valuable for understanding user metrics and system performance',
            ]}
          />
        </ExperienceSection>
      </div>
    </SimpleLayout>
  )
}
