import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Gideon Nwokpor',
    default:
      'Gideon Nwokpor - Software Engineer, Full Stack Developer, and Web3 Innovator',
  },
  description:
    "I'm Gideon Nwokpor, a results-driven Software Engineer with over 6 years of experience architecting, building, and maintaining scalable web and mobile applications across fintech, edtech, telecommunications, e-commerce, and Web3 industries. I've guided teams of 5-15 members through 5+ product launches at high-growth technology startups.",
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
