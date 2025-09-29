interface NewsletterSubscription {
  email: string
}

interface HashnodeNewsletterResponse {
  data?: {
    subscribeToNewsletter?: {
      status: string
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

const HASHNODE_API_URL = 'https://gql.hashnode.com'
const ACCESS_TOKEN = process.env.HASHNODE_ACCESS_TOKEN
const PUBLICATION_HOST = process.env.HASHNODE_PUBLICATION_HOST

const SUBSCRIBE_TO_NEWSLETTER_MUTATION = `
  mutation SubscribeToNewsletter($input: SubscribeToNewsletterInput!) {
    subscribeToNewsletter(input: $input) {
      status
    }
  }
`

export async function subscribeToHashnodeNewsletter(
  email: string,
): Promise<{ success: boolean; message: string }> {
  if (!ACCESS_TOKEN) {
    console.warn('Hashnode access token not provided')
    return {
      success: false,
      message: 'Newsletter service is not properly configured',
    }
  }

  if (!PUBLICATION_HOST) {
    console.warn('Hashnode publication host not provided')
    return {
      success: false,
      message: 'Newsletter service is not properly configured',
    }
  }

  try {
    const response = await fetch(HASHNODE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query: SUBSCRIBE_TO_NEWSLETTER_MUTATION,
        variables: {
          input: {
            email,
            publicationHost: PUBLICATION_HOST,
          },
        },
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(
        `HTTP error! status: ${response.status}, body: ${errorText}`,
      )
    }

    const data: HashnodeNewsletterResponse = await response.json()

    if (data.errors) {
      console.error('GraphQL errors:', data.errors)
      return {
        success: false,
        message: data.errors[0]?.message || 'Failed to subscribe to newsletter',
      }
    }

    if (data.data?.subscribeToNewsletter?.status === 'SUCCESS') {
      return {
        success: true,
        message: 'Successfully subscribed to newsletter!',
      }
    }

    return {
      success: false,
      message: 'Failed to subscribe to newsletter',
    }
  } catch (error) {
    console.error('Error subscribing to Hashnode newsletter:', error)
    return {
      success: false,
      message: 'An error occurred while subscribing to newsletter',
    }
  }
}

// Fallback function for when Hashnode integration is not available
export async function subscribeToLocalNewsletter(
  email: string,
): Promise<{ success: boolean; message: string }> {
  // This could be integrated with other newsletter services like ConvertKit, Mailchimp, etc.
  // For now, we'll just log it and return success
  console.log(`Newsletter subscription for email: ${email}`)

  // You could also save this to a database or send to another service
  return {
    success: true,
    message: "Thank you for subscribing! We'll be in touch soon.",
  }
}
