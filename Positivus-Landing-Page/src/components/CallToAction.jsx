
export default function CallToAction() {
  return (
    <section className="mx-auto max-w-300 px-6 py-16 md:px-10 md:py-20">
      <div className="relative flex min-h-62.5 items-center justify-between overflow-hidden rounded-[28px] bg-[#F3F3F3] px-7 py-10 md:px-10 lg:px-12">

        {/* Left content */}
        <div className="relative z-10 max-w-112.5">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Let’s make things happen
          </h2>

          <p className="mt-5 max-w-95 text-sm leading-5 text-[#191A23]">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex rounded-xl bg-[#191A23] px-6 py-4 text-sm text-white transition-colors hover:bg-[#33343D]"
          >
            Get your free proposal
          </a>
        </div>

        {/* Right decorative illustration */}
        <div className="absolute right-0 top-1/2 hidden w-[42%] -translate-y-1/2 sm:block lg:right-8">
          <svg
            viewBox="0 0 360 260"
            className="w-full"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Orbit lines */}
            <g
              fill="none"
              stroke="#191A23"
              strokeWidth="1"
              opacity="0.8"
            >
              <ellipse
                cx="180"
                cy="133"
                rx="112"
                ry="25"
              />
              <ellipse
                cx="180"
                cy="151"
                rx="112"
                ry="25"
              />
              <ellipse
                cx="180"
                cy="169"
                rx="112"
                ry="25"
              />
            </g>

            {/* Large outlined star */}
            <path
              d="M250 12 L261 65 L298 25 L278 79 L330 73 L284 103 L330 127 L275 125 L288 180 L251 138 L228 190 L229 133 L175 151 L217 111 L167 85 L223 85 L208 31 L243 68Z"
              fill="none"
              stroke="#191A23"
              strokeWidth="1"
            />

            {/* Black character */}
            <circle cx="156" cy="123" r="42" fill="#050505" />

            <ellipse cx="144" cy="116" rx="7" ry="13" fill="white" />
            <ellipse cx="167" cy="116" rx="7" ry="13" fill="white" />

            {/* Grey star */}
            <path
              d="M250 138 L264 166 L295 170 L272 191 L279 223 L250 208 L222 223 L228 192 L205 170 L236 166Z"
              fill="#D9D9D9"
            />

            {/* Green sparkle */}
            <path
              d="M144 182 L159 211 L187 226 L159 241 L144 269 L129 241 L101 226 L129 211Z"
              fill="#B9FF66"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
