import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllArticles, type ArticleWithSlug } from '@/lib/articles'
import { ArticleLayout } from '@/components/ArticleLayout'
import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { formatDate } from '@/lib/formatDate'
import { BackButton, BackToArticlesButton } from '@/components/BackButton'

interface PageProps {
  params: { slug: string }
}

async function getArticle(slug: string): Promise<ArticleWithSlug | null> {
  const articles = await getAllArticles()
  return articles.find((article) => article.slug === slug) || null
}

// For local MDX articles, we'll try to import them dynamically
async function getLocalArticleContent(slug: string) {
  try {
    const articleModule = await import(`../${slug}/page.mdx`)
    return {
      default: articleModule.default,
      article: articleModule.article,
    }
  } catch (error) {
    return null
  }
}

// Component to render Hashnode article content
function HashnodeArticleContent({ article }: { article: ArticleWithSlug }) {
  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <BackButton />
          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                {article.title}
              </h1>
              <time
                dateTime={(() => {
                  try {
                    return article.date
                      ? new Date(article.date).toISOString()
                      : undefined
                  } catch {
                    return undefined
                  }
                })()}
                className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                <span className="ml-3">{formatDate(article.date)}</span>
              </time>

              {/* Article metadata */}
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  Hashnode Article
                </span>
                {article.readTime && <span>{article.readTime} min read</span>}
                {article.views && (
                  <span>{article.views.toLocaleString()} views</span>
                )}
              </div>

              {article.tags && article.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            <Prose className="mt-8">
              <div className="not-prose">
                {article.coverImage && (
                  <div className="mb-6">
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      className="aspect-video w-full rounded-lg object-cover"
                    />
                  </div>
                )}

                <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-800">
                  <h3 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                    Article Preview
                  </h3>
                  <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {article.description}
                  </p>
                  <p className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">
                    This article was originally published on Hashnode. Click the
                    button below to read the full article with all formatting,
                    code examples, and interactive content.
                  </p>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                    >
                      Read Full Article on Hashnode
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                    <BackToArticlesButton />
                  </div>
                </div>
              </div>
            </Prose>
          </article>
        </div>
      </div>
    </Container>
  )
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const article = await getArticle(params.slug)

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      ...(article.coverImage && { images: [article.coverImage] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      ...(article.coverImage && { images: [article.coverImage] }),
    },
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const article = await getArticle(params.slug)

  if (!article) {
    notFound()
  }

  // If it's an external Hashnode article, show the preview/redirect page
  if (article.isExternal) {
    return <HashnodeArticleContent article={article} />
  }

  // For local MDX articles, try to load the content
  const localContent = await getLocalArticleContent(params.slug)

  if (!localContent) {
    notFound()
  }

  const { default: Content, article: articleMeta } = localContent

  // Merge article data with metadata from MDX file
  const fullArticle = {
    ...article,
    ...articleMeta,
  }

  return (
    <ArticleLayout article={fullArticle}>
      <Content />
    </ArticleLayout>
  )
}

// Generate static paths for all articles
export async function generateStaticParams() {
  const articles = await getAllArticles()

  return articles.map((article) => ({
    slug: article.slug,
  }))
}
