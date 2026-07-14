'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

import avatarImage from '@/images/Image8.jpeg'

function CloseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <li>
      <PopoverButton
        as={Link}
        href={href}
        className="block py-3 text-base text-[#F5F5F5] transition-colors hover:text-[#00D4FF]"
      >
        {children}
      </PopoverButton>
    </li>
  )
}

function MobileNavigation(
  props: React.ComponentPropsWithoutRef<typeof Popover>,
) {
  return (
    <Popover {...props}>
      <PopoverButton className="group flex items-center gap-2 rounded-full border border-[#262626] bg-[#111111]/90 px-4 py-2 text-sm font-medium text-[#F5F5F5] backdrop-blur-sm transition hover:border-[#404040]">
        Menu
        <ChevronDownIcon className="h-auto w-2 stroke-[#A1A1A1] group-hover:stroke-[#F5F5F5]" />
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm duration-200 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      />
      <PopoverPanel
        focus
        transition
        className="fixed inset-x-4 top-8 z-50 origin-top rounded-2xl border border-[#262626] bg-[#111111] p-8 duration-200 data-closed:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      >
        <div className="flex flex-row-reverse items-center justify-between">
          <PopoverButton aria-label="Close menu" className="-m-1 p-1">
            <CloseIcon className="h-6 w-6 text-[#A1A1A1]" />
          </PopoverButton>
          <h2 className="text-sm font-medium text-[#525252]">Navigation</h2>
        </div>
        <nav className="mt-6">
          <ul className="-my-1 divide-y divide-[#1A1A1A]">
            <MobileNavItem href="/about">About</MobileNavItem>
            <MobileNavItem href="/experience">Experience</MobileNavItem>
            <MobileNavItem href="/articles">Articles</MobileNavItem>
            <MobileNavItem href="/projects">Projects</MobileNavItem>
          </ul>
        </nav>
      </PopoverPanel>
    </Popover>
  )
}

function NavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const isActive = usePathname() === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 text-sm transition-colors duration-200',
          isActive
            ? 'text-[#00D4FF]'
            : 'text-[#A1A1A1] hover:text-[#F5F5F5]',
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-[#00D4FF]/0 via-[#00D4FF]/50 to-[#00D4FF]/0" />
        )}
      </Link>
    </li>
  )
}

function DesktopNavigation(props: React.ComponentPropsWithoutRef<'nav'>) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full border border-[#262626] bg-[#111111]/80 px-3 text-sm font-medium backdrop-blur-sm">
        <NavItem href="/about">About</NavItem>
        <NavItem href="/experience">Experience</NavItem>
        <NavItem href="/articles">Articles</NavItem>
        <NavItem href="/projects">Projects</NavItem>
      </ul>
    </nav>
  )
}

export function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-[#1A1A1A] bg-[#0A0A0A]/85 backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo / name */}
        <Link
          href="/"
          className="font-[family-name:var(--font-syne)] text-sm font-bold text-[#F5F5F5] transition-colors hover:text-[#00D4FF]"
        >
          Gideon<span className="text-[#00D4FF]">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex">
          <DesktopNavigation className="pointer-events-auto" />
        </div>

        {/* Right: avatar + mobile nav */}
        <div className="flex items-center gap-4">
          {/* Avatar — show on non-home pages */}
          {!isHomePage && (
            <Link href="/" aria-label="Home">
              <Image
                src={avatarImage}
                alt="Gideon"
                width={36}
                height={36}
                className="rounded-full border border-[#262626] object-cover"
                priority
              />
            </Link>
          )}

          <div className="pointer-events-auto md:hidden">
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  )
}
