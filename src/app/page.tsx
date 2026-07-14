import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'

import { HeroSection } from '@/components/hero/HeroSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { FadeInWhenVisible } from '@/components/motion/FadeInWhenVisible'
import logoTemlio from '@/images/logos/temlio_logo.png'
import logoBytelabs from '@/images/logos/bytelabs.png'
import logoDhelc from '@/images/logos/DHELC_logo.jpeg'
import logoStealthStartup from '@/images/logos/stealth_startup_logo.jpeg'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { subscribeToNewsletter } from '@/app/actions/newsletter'

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <FadeInWhenVisible>
      <article className="group relative border-b border-[#1A1A1A] py-8 first:border-t">
        <div className="flex flex-col gap-3">
          <p className="text-xs font-medium tracking-widest uppercase text-[#525252]">
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </p>
          <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-[#F5F5F5] transition-colors group-hover:text-[#00D4FF]">
            <Link href={`/articles/${article.slug}`}>
              <span className="absolute inset-0" />
              {article.title}
            </Link>
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-[#A1A1A1]">
            {article.description}
          </p>
          <p className="mt-1 flex items-center gap-1 text-xs font-medium text-[#00D4FF]">
            Read article
            <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 transition-transform group-hover:translate-x-0.5">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </p>
        </div>
      </article>
    </FadeInWhenVisible>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string
  end: string
}

const resume: Role[] = [
  {
    company: 'Temlio Telecommunications',
    title: 'Software Engineer',
    logo: logoTemlio,
    start: 'Dec 2024',
    end: 'Present',
  },
  {
    company: 'Stealth Startup',
    title: 'Software Engineer',
    logo: logoStealthStartup,
    start: 'Jul 2023',
    end: 'May 2025',
  },
  {
    company: 'Bytelabs Technologies',
    title: 'Software Engineer',
    logo: logoBytelabs,
    start: 'Sep 2022',
    end: 'Dec 2024',
  },
  {
    company: 'DHELC Business Solutions',
    title: 'Software Engineer',
    logo: logoDhelc,
    start: 'Jun 2021',
    end: 'Sep 2022',
  },
]

function NewsletterForm() {
  return (
    <form
      action={subscribeToNewsletter}
      className="rounded-2xl border border-[#1A1A1A] bg-[#111111] p-6"
    >
      <h3 className="font-[family-name:var(--font-syne)] text-base font-bold text-[#F5F5F5]">
        Stay in the Loop
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[#A1A1A1]">
        Get updates on my latest projects, Web3 insights, and engineering deep
        dives.
      </p>
      <div className="mt-5 flex gap-2">
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          aria-label="Email address"
          required
          className="min-w-0 flex-1 rounded-lg border border-[#262626] bg-[#0A0A0A] px-4 py-2.5 text-sm text-[#F5F5F5] placeholder-[#525252] outline-none transition-colors focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/30"
        />
        <button
          type="submit"
          className="rounded-lg bg-[#00D4FF] px-4 py-2.5 text-sm font-semibold text-[#0A0A0A] transition-colors hover:bg-[#00D4FF]/90"
        >
          Join
        </button>
      </div>
    </form>
  )
}

export default async function Home() {
  const articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <HeroSection />

      {/* Articles + Sidebar */}
      <section className="border-t border-[#1A1A1A] bg-[#0A0A0A] px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_360px] lg:gap-12">
            {/* Articles */}
            <div>
              <FadeInWhenVisible>
                <div className="flex items-center justify-between">
                  <h2 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-[#F5F5F5]">
                    Latest Writing
                  </h2>
                  <Link
                    href="/articles"
                    className="text-sm text-[#00D4FF] transition-colors hover:text-[#00D4FF]/80"
                  >
                    View all →
                  </Link>
                </div>
              </FadeInWhenVisible>

              {articles.length > 0 ? (
                articles.map((article) => (
                  <Article key={article.slug} article={article} />
                ))
              ) : (
                <FadeInWhenVisible delay={0.1}>
                  <p className="mt-8 text-sm text-[#525252]">
                    Articles coming soon.{' '}
                    <a
                      href="https://hashnode.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00D4FF] hover:underline"
                    >
                      Follow on Hashnode
                    </a>
                  </p>
                </FadeInWhenVisible>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <FadeInWhenVisible>
                <NewsletterForm />
              </FadeInWhenVisible>

              {/* Work history */}
              <FadeInWhenVisible delay={0.1}>
                <div className="rounded-2xl border border-[#1A1A1A] bg-[#111111] p-6">
                  <h3 className="font-[family-name:var(--font-syne)] text-base font-bold text-[#F5F5F5]">
                    Work History
                  </h3>
                  <ol className="mt-5 space-y-5">
                    {resume.map((role, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="flex h-9 w-9 flex-none items-center justify-center overflow-hidden rounded-full border border-[#262626] bg-[#1A1A1A]">
                          <Image
                            src={role.logo}
                            alt={role.company}
                            width={28}
                            height={28}
                            className="h-7 w-7 rounded-full object-cover"
                            unoptimized
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-[#F5F5F5] truncate">
                            {role.company}
                          </p>
                          <p className="text-xs text-[#A1A1A1]">{role.title}</p>
                        </div>
                        <p className="flex-none text-xs text-[#525252]">
                          {role.end === 'Present' ? (
                            <span className="text-[#00D4FF]">Now</span>
                          ) : (
                            role.end
                          )}
                        </p>
                      </li>
                    ))}
                  </ol>
                  <Link
                    href="/experience"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-[#262626] py-2.5 text-sm font-medium text-[#A1A1A1] transition-colors hover:border-[#404040] hover:text-[#F5F5F5]"
                  >
                    View full experience
                    <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
