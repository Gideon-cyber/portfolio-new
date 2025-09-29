import { Container } from '@/components/Container'

export default function Loading() {
  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <div className="animate-pulse">
            {/* Back button skeleton */}
            <div className="mb-8 h-10 w-10 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            
            <article>
              <header className="flex flex-col">
                {/* Date skeleton */}
                <div className="order-first flex items-center">
                  <div className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <div className="ml-3 h-4 w-32 rounded bg-zinc-200 dark:bg-zinc-800" />
                </div>
                
                {/* Title skeleton */}
                <div className="mt-6 space-y-3">
                  <div className="h-8 w-3/4 rounded bg-zinc-200 dark:bg-zinc-800" />
                  <div className="h-8 w-1/2 rounded bg-zinc-200 dark:bg-zinc-800" />
                </div>
              </header>
              
              {/* Content skeleton */}
              <div className="mt-8 space-y-4">
                <div className="h-4 w-full rounded bg-zinc-200 dark:bg-zinc-800" />
                <div className="h-4 w-5/6 rounded bg-zinc-200 dark:bg-zinc-800" />
                <div className="h-4 w-4/5 rounded bg-zinc-200 dark:bg-zinc-800" />
                <div className="h-4 w-full rounded bg-zinc-200 dark:bg-zinc-800" />
                <div className="h-4 w-3/4 rounded bg-zinc-200 dark:bg-zinc-800" />
              </div>
            </article>
          </div>
        </div>
      </div>
    </Container>
  )
}