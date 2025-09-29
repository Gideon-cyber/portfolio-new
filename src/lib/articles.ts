import glob from 'fast-glob'
import { getUserHashnodeArticles, type HashnodeArticle } from './hashnode'

interface Article {
  title: string
  description: string
  author: string
  date: string
}

export interface ArticleWithSlug extends Article {
  slug: string
  isExternal?: boolean
  url?: string
  readTime?: number
  views?: number
  tags?: string[]
  coverImage?: string
}

async function importArticle(
  articleFilename: string,
): Promise<ArticleWithSlug> {
  let { article } = (await import(`../app/articles/${articleFilename}`)) as {
    default: React.ComponentType
    article: Article
  }

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  }
}

function transformHashnodeArticle(
  hashnodeArticle: HashnodeArticle,
): ArticleWithSlug {
  return {
    title: hashnodeArticle.title,
    description: hashnodeArticle.description,
    author: 'Gideon Nwokpor',
    date: hashnodeArticle.date,
    slug: hashnodeArticle.slug,
    isExternal: true,
    url: hashnodeArticle.url,
    readTime: hashnodeArticle.readTime,
    views: hashnodeArticle.views,
    tags: hashnodeArticle.tags,
    coverImage: hashnodeArticle.coverImage,
  }
}

export async function getAllArticles(): Promise<ArticleWithSlug[]> {
  // Only get Hashnode articles (skip local MDX articles)
  let hashnodeArticles: ArticleWithSlug[] = []
  const hashnodeUsername = process.env.HASHNODE_USERNAME

  if (hashnodeUsername && hashnodeUsername !== 'your-username') {
    try {
      // console.log('Fetching Hashnode articles only...')
      const hashnodeData = await getUserHashnodeArticles(hashnodeUsername, 20)
      hashnodeArticles = hashnodeData.map(transformHashnodeArticle)
      // console.log(
      //   `Successfully fetched ${hashnodeArticles.length} Hashnode articles`,
      // )
    } catch (error) {
      console.error('Failed to fetch Hashnode articles:', error)
      console.log('No articles available due to Hashnode fetch error')
      // Return empty array if Hashnode fails
      return []
    }
  } else {
    console.log('Hashnode integration disabled - no username configured')
    return []
  }

  // Return only Hashnode articles sorted by date
  return hashnodeArticles.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
