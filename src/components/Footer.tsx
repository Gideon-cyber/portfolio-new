import Link from 'next/link'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/articles', label: 'Articles' },
  { href: '/projects', label: 'Projects' },
]

export function Footer() {
  return (
    <footer className="border-t border-[#1A1A1A] bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link
            href="/"
            className="font-[family-name:var(--font-syne)] text-sm font-bold text-[#F5F5F5]"
          >
            Gideon<span className="text-[#00D4FF]">.</span>
          </Link>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#525252]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-[#00D4FF]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p className="text-sm text-[#525252]">
            &copy; {new Date().getFullYear()} Gideon Nwokpor
          </p>
        </div>
      </div>
    </footer>
  )
}
