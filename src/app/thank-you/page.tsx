import { type Metadata } from 'next'
import { Suspense } from 'react'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: "You're subscribed",
  description: 'Thanks for subscribing to my newsletter.',
}

async function ThankYouContent({
  searchParams,
}: {
  searchParams: Promise<{ source?: string }>
}) {
  const params = await searchParams
  const source = params.source

  let title = 'Thanks for subscribing.'
  let intro =
    "I'll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you'd want to hear about. You can unsubscribe at any time, no hard feelings."

  if (source === 'hashnode') {
    intro =
      "You've been successfully subscribed to my Hashnode newsletter! You'll receive updates whenever I publish new articles, insights into Web3 development, and tips on building scalable applications. You can unsubscribe at any time through the newsletter emails."
  } else if (source === 'local' || source === 'fallback') {
    intro =
      "Thank you for your interest in staying connected! I'll be in touch soon with updates on my latest projects, insights into Web3 development, and tips on building scalable applications."
  } else if (source === 'error') {
    title = 'Thanks for your interest!'
    intro =
      "There was a technical issue processing your subscription, but I've noted your interest. Please feel free to reach out to me directly through my social media channels in the meantime."
  }

  return <SimpleLayout title={title} intro={intro} />
}

export default function ThankYou({
  searchParams,
}: {
  searchParams: Promise<{ source?: string }>
}) {
  return (
    <Suspense
      fallback={
        <SimpleLayout
          title="Thanks for subscribing."
          intro="I'll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you'd want to hear about. You can unsubscribe at any time, no hard feelings."
        />
      }
    >
      <ThankYouContent searchParams={searchParams} />
    </Suspense>
  )
}

// import { SimpleLayout } from '@/components/SimpleLayout'

// export const metadata: Metadata = {
//   title: 'You’re subscribed',
//   description: 'Thanks for subscribing to my newsletter.',
// }

// export default function ThankYou() {
//   return (
//     <SimpleLayout
//       title="Thanks for subscribing."
//       intro="I’ll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you’d want to hear about. You can unsubscribe at any time, no hard feelings."
//     />
//   )
// }
