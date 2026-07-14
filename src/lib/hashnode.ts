import Parser from 'rss-parser'

type HashnodeFeedItem = {
  title?: string
  link?: string
  pubDate?: string
  creator?: string
  categories?: string[]
  content?: string
  contentSnippet?: string
  'content:encoded'?: string
  enclosure?: { url?: string; type?: string }
  guid?: string
}

const parser = new Parser<Record<string, unknown>, HashnodeFeedItem>()

export interface HashnodeArticle {
  id: string
  title: string
  description: string
  slug: string
  date: string
  url: string
  readTime: number
  tags: string[]
  coverImage?: string
}

const WORDS_PER_MINUTE = 200

function estimateReadTime(html: string | undefined): number {
  if (!html) return 0
  const wordCount = html
    .replace(/<[^>]*>/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length
  return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE))
}

function slugFromLink(link: string): string {
  try {
    return new URL(link).pathname.replace(/^\/|\/$/g, '')
  } catch {
    return link
  }
}

function transformFeedItem(item: HashnodeFeedItem): HashnodeArticle | null {
  if (!item.title || !item.link) return null

  return {
    id: item.guid || item.link,
    title: item.title,
    description: item.contentSnippet?.slice(0, 200) || '',
    slug: slugFromLink(item.link),
    date: item.pubDate || new Date().toISOString(),
    url: item.link,
    readTime: estimateReadTime(item['content:encoded'] || item.content),
    tags: item.categories || [],
    coverImage: item.enclosure?.url,
  }
}

export async function getUserHashnodeArticles(
  rssUrl: string,
  limit: number = 10,
): Promise<HashnodeArticle[]> {
  if (!rssUrl) {
    console.warn('Hashnode RSS feed URL not provided')
    return []
  }

  try {
    const feed = await parser.parseURL(rssUrl)

    return feed.items
      .map(transformFeedItem)
      .filter((article): article is HashnodeArticle => article !== null)
      .slice(0, limit)
  } catch (error) {
    console.error('Error fetching Hashnode RSS feed:', error)
    return []
  }
}
