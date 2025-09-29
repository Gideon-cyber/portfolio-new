'use client'

import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import { AppContext } from '@/app/providers'

interface BackButtonProps {
  className?: string
  ariaLabel?: string
  useHistoryBack?: boolean
}

export function BackButton({
  className = 'group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20',
  ariaLabel = 'Go back to articles',
  useHistoryBack = true,
}: BackButtonProps) {
  const router = useRouter()
  const { previousPathname } = useContext(AppContext)

  const handleClick = () => {
    if (useHistoryBack) {
      window.history.back()
    } else {
      previousPathname ? router.back() : router.push('/articles')
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={ariaLabel}
      className={className}
    >
      <svg
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"
      >
        <path
          d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

interface BackToArticlesButtonProps {
  className?: string
}

export function BackToArticlesButton({
  className = 'inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700',
}: BackToArticlesButtonProps) {
  return (
    <button onClick={() => window.history.back()} className={className}>
      Back to Articles
    </button>
  )
}
