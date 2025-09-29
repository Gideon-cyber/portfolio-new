interface HashnodePost {
  id: string
  title: string
  brief: string
  slug: string
  publishedAt: string
  url: string
  readTimeInMinutes: number
  views: number
  tags: {
    name: string
  }[]
  coverImage?: {
    url: string
  }
}

interface HashnodeResponse {
  data?: {
    publication?: {
      posts?: {
        edges: {
          node: HashnodePost
        }[]
      }
    }
  }
  errors?: Array<{
    message: string
    locations?: Array<{
      line: number
      column: number
    }>
    path?: string[]
  }>
}

export interface HashnodeArticle {
  id: string
  title: string
  description: string
  slug: string
  date: string
  url: string
  readTime: number
  views: number
  tags: string[]
  coverImage?: string
}

const HASHNODE_API_URL = 'https://gql.hashnode.com'
const ACCESS_TOKEN = process.env.HASHNODE_ACCESS_TOKEN

const GET_POSTS_QUERY = `
  query GetPosts($host: String!, $first: Int!) {
    publication(host: $host) {
      posts(first: $first) {
        edges {
          node {
            id
            title
            brief
            slug
            publishedAt
            url
            readTimeInMinutes
            views
            tags {
              name
            }
            coverImage {
              url
            }
          }
        }
      }
    }
  }
`

export async function getHashnodeArticles(
  publicationHost: string,
  limit: number = 10,
): Promise<HashnodeArticle[]> {
  if (!ACCESS_TOKEN) {
    console.warn('Hashnode access token not provided')
    return []
  }

  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    }

    if (ACCESS_TOKEN) {
      headers['Authorization'] = `Bearer ${ACCESS_TOKEN}`
    }

    const response = await fetch(HASHNODE_API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query: GET_POSTS_QUERY,
        variables: {
          host: publicationHost,
          first: limit,
        },
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(
        `HTTP error! status: ${response.status}, body: ${errorText}`,
      )
    }

    const data: HashnodeResponse = await response.json()

    if (data.errors) {
      console.error('GraphQL errors:', data.errors)
      return []
    }

    if (!data.data?.publication?.posts?.edges) {
      return []
    }

    return data.data.publication.posts.edges.map(({ node }) => ({
      id: node.id,
      title: node.title,
      description: node.brief,
      slug: node.slug,
      date: node.publishedAt,
      url: node.url,
      readTime: node.readTimeInMinutes,
      views: node.views,
      tags: node.tags.map((tag) => tag.name),
      coverImage: node.coverImage?.url,
    }))
  } catch (error) {
    console.error('Error fetching Hashnode articles:', error)
    return []
  }
}

// Updated query to match Hashnode API v2 schema
const GET_USER_POSTS_QUERY = `
  query GetUserPosts($username: String!, $pageSize: Int!, $page: Int!) {
    user(username: $username) {
      posts(pageSize: $pageSize, page: $page) {
        totalDocuments
        edges {
          node {
            id
            title
            brief
            slug
            publishedAt
            url
            readTimeInMinutes
            views
            tags {
              name
            }
            coverImage {
              url
            }
          }
        }
      }
    }
  }
`

// Helper function to check if a user exists
async function checkUserExists(username: string): Promise<boolean> {
  if (!ACCESS_TOKEN) return false

  try {
    // console.log('Checking user existence for:', username)
    // console.log('API URL:', HASHNODE_API_URL)
    // console.log('Node.js version:', process.version)
    // console.log(
    //   'Environment:',
    //   typeof window === 'undefined' ? 'Server' : 'Client',
    // )

    const response = await fetch(HASHNODE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query: `query CheckUser($username: String!) { user(username: $username) { id } }`,
        variables: { username },
      }),
    })

    if (!response.ok) return false

    const data = await response.json()
    return !!data.data?.user
  } catch (error) {
    console.error('Error checking user existence:', error)
    if (error instanceof Error) {
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        cause: error.cause,
      })
    }
    return false
  }
}

export async function getUserHashnodeArticles(
  username: string,
  limit: number = 10,
): Promise<HashnodeArticle[]> {
  if (!ACCESS_TOKEN) {
    console.warn('Hashnode access token not provided')
    return []
  }

  // Check if fetch is available
  if (typeof fetch === 'undefined') {
    console.error('Fetch is not available in this environment')
    return []
  }

  // console.log('Fetching Hashnode articles for:', username)
  // console.log(
  //   'Environment check:',
  //   typeof window === 'undefined' ? 'Server-side' : 'Client-side',
  // )
  // console.log('Node.js version:', process.version)

  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    }

    if (ACCESS_TOKEN) {
      headers['Authorization'] = `Bearer ${ACCESS_TOKEN}`
    }

    // console.log('Making request to:', HASHNODE_API_URL)
    // console.log('With headers:', headers)

    const requestBody = JSON.stringify({
      query: GET_USER_POSTS_QUERY,
      variables: {
        username: username,
        pageSize: limit,
        page: 1,
      },
    })

    // console.log('Request body:', requestBody)

    const response = await fetch(HASHNODE_API_URL, {
      method: 'POST',
      headers,
      body: requestBody,
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(
        `HTTP error! status: ${response.status}, body: ${errorText}`,
      )
    }

    const data: any = await response.json()

    if (data.errors) {
      console.error('GraphQL errors:', data.errors)
      return []
    }

    if (!data.data?.user?.posts?.edges) {
      console.warn(`No posts found for user: ${username}`)
      return []
    }

    return data.data.user.posts.edges.map(
      ({ node }: { node: HashnodePost }) => ({
        id: node.id || '',
        title: node.title || 'Untitled',
        description: node.brief || '',
        slug: node.slug || '',
        date: node.publishedAt || new Date().toISOString(),
        url: node.url || '',
        readTime: node.readTimeInMinutes || 0,
        views: node.views || 0,
        tags: node.tags?.map((tag) => tag.name) || [],
        coverImage: node.coverImage?.url,
      }),
    )
  } catch (error) {
    console.error('Error fetching user Hashnode articles:', error)
    if (error instanceof Error) {
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack,
      })

      // If it's a network error, suggest disabling integration
      if (
        error.message.includes('fetch failed') ||
        error.message.includes('ENOTFOUND')
      ) {
        console.warn(
          'Network error detected. Consider checking your internet connection or disabling Hashnode integration by removing HASHNODE_USERNAME from environment variables.',
        )
      }
    }
    return []
  }
}
