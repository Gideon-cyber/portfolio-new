import { type Metadata } from 'next'
import Link from 'next/link'

import { FadeInWhenVisible } from '@/components/motion/FadeInWhenVisible'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function getValidDateTimeAttribute(dateString: string): string | undefined {
  if (!dateString) return undefined
  try {
    const date = new Date(dateString)
    return isNaN(date.getTime()) ? undefined : date.toISOString()
  } catch {
    return undefined
  }
}

function ArticleCard({ article }: { article: ArticleWithSlug }) {
  return (
    <FadeInWhenVisible>
      <article className="group relative border-b border-[#1A1A1A] py-8 first:border-t">
        <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:gap-8">
          {/* Date — desktop left column */}
          <time
            dateTime={getValidDateTimeAttribute(article.date)}
            className="flex-none text-xs font-medium tabular-nums tracking-widest text-[#525252] md:w-32"
          >
            {formatDate(article.date)}
          </time>

          {/* Content */}
          <div className="flex-1">
            <div className="flex flex-wrap items-start gap-2">
              <h2 className="font-[family-name:var(--font-syne)] text-xl font-bold text-[#F5F5F5] transition-colors group-hover:text-[#00D4FF]">
                <Link href={`/articles/${article.slug}`}>
                  <span className="absolute inset-0" aria-hidden="true" />
                  {article.title}
                </Link>
              </h2>
              {article.isExternal && (
                <span className="rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/5 px-2 py-0.5 text-xs font-medium text-[#00D4FF]">
                  Hashnode
                </span>
              )}
            </div>

            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#A1A1A1]">
              {article.description}
            </p>

            {article.tags && article.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {article.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#262626] bg-[#1A1A1A] px-2.5 py-0.5 text-xs text-[#525252]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-3 flex items-center gap-4">
              {article.readTime && (
                <span className="text-xs text-[#525252]">{article.readTime} min read</span>
              )}
              {article.views && (
                <span className="text-xs text-[#525252]">{article.views.toLocaleString()} views</span>
              )}
              <span className="ml-auto flex items-center gap-1 text-xs font-medium text-[#00D4FF] opacity-0 transition-opacity group-hover:opacity-100">
                {article.isExternal ? 'Read on Hashnode' : 'Read article'}
                <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </article>
    </FadeInWhenVisible>
  )
}

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Thoughts on software engineering, Web3 development, full-stack architecture, and technology — from my portfolio and Hashnode blog.',
}

export default async function ArticlesIndex() {
  const articles = await getAllArticles()

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24 pb-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <FadeInWhenVisible>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#00D4FF]">
            Writing
          </p>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.05}>
          <h1 className="mt-4 font-[family-name:var(--font-syne)] text-4xl font-extrabold leading-tight tracking-tight text-[#F5F5F5] sm:text-5xl">
            Writing on Software Engineering & Web3.
          </h1>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.1}>
          <p className="mt-4 text-base leading-relaxed text-[#A1A1A1]">
            Thoughts on software engineering, Web3, full-stack architecture, and technology trends — pulled from my portfolio and Hashnode blog.
          </p>
        </FadeInWhenVisible>

        {/* Articles */}
        <div className="mt-16">
          {articles.length === 0 ? (
            <FadeInWhenVisible delay={0.15}>
              <p className="text-sm text-[#525252]">
                No articles found. Check back soon!
              </p>
            </FadeInWhenVisible>
          ) : (
            articles.map((article) => (
              <ArticleCard
                key={`${article.isExternal ? 'hashnode' : 'local'}-${article.slug}`}
                article={article}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}
