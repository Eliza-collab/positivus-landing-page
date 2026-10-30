export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid max-w-300 grid-cols-1 items-center gap-10 px-6 pb-12 pt-5 md:px-10 lg:grid-cols-2 lg:gap-12"
    >
      {/* Left: Hero text */}
      <div className="max-w-125">
        <h1 className="text-4xl font-medium leading-[1.15] tracking-tight sm:text-5xl">
          Navigating the digital landscape for success
        </h1>

        <p className="mt-6 max-w-110 text-sm leading-6 text-[#191A23]">
          Our digital marketing agency helps businesses grow and succeed
          online through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>

        <a
          href="#contact"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#191A23] px-6 py-4 text-sm text-white transition-colors hover:bg-[#33343D]"
        >
          Book a consultation
        </a>
      </div>

      {/* Right: Custom megaphone illustration */}
      <div className="mx-auto w-full max-w-130">
        <svg
          viewBox="0 0 520 360"
          className="h-auto w-full"
          role="img"
          aria-label="Megaphone illustration representing digital marketing"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dots"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="#191A23" />
            </pattern>
          </defs>

          {/* Motion lines */}
          <g
            fill="none"
            stroke="#191A23"
            strokeWidth="1"
            opacity="0.75"
          >
            <ellipse
              cx="252"
              cy="213"
              rx="181"
              ry="39"
              transform="rotate(24 252 213)"
            />
            <ellipse
              cx="252"
              cy="213"
              rx="195"
              ry="48"
              transform="rotate(24 252 213)"
            />
            <ellipse
              cx="252"
              cy="213"
              rx="164"
              ry="30"
              transform="rotate(24 252 213)"
            />
            <path d="M105 94 Q145 111 185 126" />
            <path d="M92 116 Q140 137 176 149" />
          </g>

          {/* Decorative circles */}
          <circle cx="55" cy="65" r="14" fill="#050505" />
          <circle cx="88" cy="91" r="10" fill="#B9FF66" />
          <circle cx="335" cy="67" r="25" fill="#050505" />
          <circle cx="395" cy="61" r="23" fill="#B9FF66" />
          <circle cx="392" cy="135" r="22" fill="#050505" />
          <circle cx="383" cy="211" r="23" fill="#B9FF66" />

          {/* Heart icon */}
          <path
            d="M335 55 C323 41 307 55 335 78 C363 55 347 41 335 55Z"
            fill="white"
          />

          {/* Share icon */}
          <g stroke="#050505" strokeWidth="3" strokeLinecap="round">
            <path d="M386 61 L402 51 M386 61 L402 71" />
          </g>
          <g fill="#050505">
            <circle cx="384" cy="61" r="4" />
            <circle cx="404" cy="50" r="4" />
            <circle cx="404" cy="72" r="4" />
          </g>

          {/* Play icon */}
          <path d="M385 124 L385 146 L403 135 Z" fill="white" />

          {/* Location pin */}
          <path
            d="M383 194 C371 194 364 203 364 213 C364 226 383 243 383 243 C383 243 402 226 402 213 C402 203 395 194 383 194Z"
            fill="#B9FF66"
            stroke="#050505"
            strokeWidth="2"
          />
          <circle cx="383" cy="212" r="7" fill="#050505" />

          {/* Megaphone handle */}
          <path
            d="M205 191 L229 277 Q234 290 244 284 Q251 280 246 268 L226 188Z"
            fill="#050505"
            stroke="#050505"
            strokeWidth="2"
          />

          {/* Megaphone body */}
          <path
            d="M186 139 L275 95 Q289 89 296 105 L320 160 Q326 174 312 182 L222 224 Q207 230 199 214 L177 164 Q170 149 186 139Z"
            fill="#B9FF66"
            stroke="#050505"
            strokeWidth="2"
          />

          {/* Rear edge */}
          <path
            d="M177 147 L193 138 L218 220 L203 227 Q192 229 186 214 L170 169 Q166 156 177 147Z"
            fill="#050505"
            stroke="#050505"
            strokeWidth="2"
          />

          {/* Megaphone bell */}
          <path
            d="M275 95 Q297 39 326 50 Q354 61 378 116 Q395 153 375 167 Q355 181 320 160Z"
            fill="white"
            stroke="#050505"
            strokeWidth="2"
          />
          <path
            d="M320 160 Q340 175 358 171 Q379 167 378 147 Q374 113 349 80 Q330 55 311 62 Q299 67 291 88"
            fill="none"
            stroke="#050505"
            strokeWidth="1.5"
          />
          <path
            d="M320 160 L312 143 Q305 128 309 110 L322 79 Q338 91 351 118 Q364 146 354 164 Q340 168 320 160Z"
            fill="#B9FF66"
          />

          {/* Sparkles */}
          <path
            d="M75 251 L89 274 L111 288 L89 301 L75 324 L61 301 L39 288 L61 274Z"
            fill="#050505"
          />
          <path
            d="M275 300 L280 313 L293 318 L280 323 L275 336 L270 323 L257 318 L270 313Z"
            fill="#050505"
          />
          <circle cx="350" cy="301" r="7" fill="#B9FF66" />
        </svg>
      </div>
    </section>
  )
}