import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
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

function Article({ article }: { article: ArticleWithSlug }) {
  const isExternal = article.isExternal

  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          <span className="flex items-center gap-2">
            {article.title}
            {isExternal && (
              <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Hashnode
              </span>
            )}
          </span>
        </Card.Title>

        <Card.Eyebrow
          as="time"
          dateTime={getValidDateTimeAttribute(article.date)}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>

        {article.tags && article.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {(article.readTime || article.views) && (
          <div className="mt-4 flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
            {article.readTime && <span>{article.readTime} min read</span>}
            {article.views && (
              <span>{article.views.toLocaleString()} views</span>
            )}
          </div>
        )}

        <Card.Cta>{isExternal ? 'Read on Hashnode' : 'Read article'}</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={getValidDateTimeAttribute(article.date)}
        className="mt-1 max-md:hidden"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'My thoughts on software engineering, Web3 development, full-stack architecture, and technology trends, from both my portfolio and Hashnode blog.',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
    <SimpleLayout
      title="Writing on software engineering, Web3, and technology."
      intro="My thoughts on software engineering, Web3 development, full-stack architecture, and technology trends. Articles are pulled from both my portfolio and Hashnode blog, sorted chronologically."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.length === 0 ? (
            <div className="text-center">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                No articles found. Check back soon for new content!
              </p>
            </div>
          ) : (
            articles.map((article) => (
              <Article
                key={`${article.isExternal ? 'hashnode' : 'local'}-${article.slug}`}
                article={article}
              />
            ))
          )}
        </div>
      </div>
    </SimpleLayout>
  )
}
