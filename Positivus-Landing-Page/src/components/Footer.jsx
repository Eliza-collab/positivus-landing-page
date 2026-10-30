
const footerLinks = [
  { label: 'About us', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Use Cases', href: '#cases' },
  { label: 'Team', href: '#team' },
  { label: 'Testimonials', href: '#testimonials' },
]

export default function Footer() {
  return (
    <footer className="mx-auto max-w-300 px-6 pb-6 md:px-10">

      <div className="rounded-t-[30px] bg-[#191A23] px-6 py-12 text-white md:px-12 md:py-14">

        {/* Footer top */}
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 text-2xl font-semibold">
            <span className="text-3xl">✦</span>
            Positivus
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-5 text-sm">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="underline underline-offset-4 transition hover:text-[#B9FF66]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#191A23] font-bold hover:bg-[#B9FF66]"
            >
              in
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#191A23] font-bold hover:bg-[#B9FF66]"
            >
              f
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#191A23] font-bold hover:bg-[#B9FF66]"
            >
              ◎
            </a>
          </div>
        </div>

        {/* Footer content */}
        <div className="my-10 grid grid-cols-1 gap-10 border-b border-gray-600 pb-10 md:grid-cols-2">

          {/* Contact details */}
          <div>
            <h3 className="mb-6 w-fit rounded-md bg-[#B9FF66] px-2 py-1 font-semibold text-[#191A23]">
              Contact us
            </h3>

            <div className="space-y-4 text-sm text-gray-200">
              <p>Email: info@example.com</p>
              <p>Phone: +250 000 000 000</p>
              <p>Address: Kigali, Rwanda</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col justify-center gap-4 rounded-xl bg-[#292A32] p-6 sm:flex-row">
            <input
              type="email"
              placeholder="Email address"
              aria-label="Newsletter email address"
              className="min-w-0 flex-1 rounded-xl border border-white bg-transparent px-5 py-4 text-sm text-white outline-none placeholder:text-gray-300 focus:border-[#B9FF66]"
            />

            <button
              type="button"
              onClick={() => alert('Newsletter subscription demo')}
              className="rounded-xl bg-[#B9FF66] px-6 py-4 text-sm font-medium text-[#191A23] transition hover:bg-white"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col gap-4 text-sm text-gray-300 md:flex-row md:items-center">
          <p>© 2026 Positivus. All Rights Reserved.</p>

          <a
            href="#privacy"
            className="underline underline-offset-4 hover:text-[#B9FF66]"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
