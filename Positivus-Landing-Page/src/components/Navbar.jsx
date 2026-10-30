const navLinks = [
  { label: 'About us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Use Cases', href: '#cases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
]

export default function Navbar() {
  return (
    <header className="mx-auto flex w-full max-w-300 items-center justify-between gap-6 px-6 py-7 lg:px-10">
      <a href="#home" className="flex shrink-0 items-center gap-2">
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path
            d="M2 2 L29 10 L20 16 L29 30 L2 22 L11 16 Z"
            fill="currentColor"
          />
        </svg>
        <span className="text-2xl font-semibold tracking-tight">
          Positivus
        </span>
      </a>

      <nav className="hidden items-center gap-6 xl:flex">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="whitespace-nowrap text-sm transition-colors hover:text-gray-500"
          >
            {link.label}
          </a>
        ))}

        <a
          href="#contact"
          className="whitespace-nowrap rounded-xl border border-[#191A23] px-5 py-3 text-sm transition-colors hover:bg-[#191A23] hover:text-white"
        >
          Request a quote
        </a>
      </nav>

      <a
        href="#contact"
        className="rounded-xl border border-[#191A23] px-3 py-2 text-sm xl:hidden"
      >
        Contact us
      </a>
    </header>
  )
}