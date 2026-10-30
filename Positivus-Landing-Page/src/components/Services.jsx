
const services = [
  {
    id: 1,
    title: 'Search engine optimization',
    highlight: 'green',
    background: 'bg-[#F3F3F3]',
    illustration: 'search',
    dark: false,
  },
  {
    id: 2,
    title: 'Pay-per-click advertising',
    highlight: 'white',
    background: 'bg-[#B9FF66]',
    illustration: 'ads',
    dark: false,
  },
  {
    id: 3,
    title: 'Social Media Marketing',
    highlight: 'white',
    background: 'bg-[#191A23]',
    illustration: 'social',
    dark: true,
  },
  {
    id: 4,
    title: 'Email Marketing',
    highlight: 'green',
    background: 'bg-[#F3F3F3]',
    illustration: 'email',
    dark: false,
  },
  {
    id: 5,
    title: 'Content Creation',
    highlight: 'white',
    background: 'bg-[#B9FF66]',
    illustration: 'content',
    dark: false,
  },
  {
    id: 6,
    title: 'Analytics and Tracking',
    highlight: 'green',
    background: 'bg-[#191A23]',
    illustration: 'analytics',
    dark: true,
  },
]

// Illustrations are made with SVG, so no external images are required.
function ServiceIllustration({ type }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  return (
    <svg
      viewBox="0 0 180 130"
      className="h-28 w-full max-w-38.75 md:h-32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {type === 'search' && (
        <g {...common}>
          <circle cx="75" cy="52" r="25" />
          <circle cx="75" cy="52" r="17" />
          <path d="M92 70 L112 91" strokeWidth="5" />
          <path d="M45 94 H112 M45 94 V80 M55 94 V83" />
          <circle cx="35" cy="100" r="10" />
          <path d="M35 90 V110 M25 100 H45 M30 95 L40 105 M40 95 L30 105" />
          <path d="M118 26 L118 47 M108 36 H128 M113 31 L123 41 M123 31 L113 41" />
          <path d="M130 70 L130 92 M119 81 H141" />
          <path d="M50 25 L55 30 L50 35 L45 30Z" />
          <path d="M148 17 L151 24 L158 27 L151 30 L148 37 L145 30 L138 27 L145 24Z" />
          <circle cx="148" cy="103" r="10" />
          <circle cx="145" cy="100" r="2" fill="currentColor" />
          <circle cx="152" cy="100" r="2" fill="currentColor" />
          <path d="M143 106 Q148 113 154 106" />
        </g>
      )}

      {type === 'ads' && (
        <g {...common}>
          <rect x="27" y="23" width="112" height="75" rx="8" />
          <path d="M27 38 H139" />
          <circle cx="37" cy="30" r="2" />
          <circle cx="46" cy="30" r="2" />
          <circle cx="55" cy="30" r="2" />
          <rect x="43" y="49" width="47" height="29" rx="4" />
          <rect x="102" y="49" width="23" height="29" rx="4" />
          <path d="M39 109 L50 109 L55 116 L45 116Z" />
          <path d="M18 110 H90 M120 108 H152" />
          <path d="M65 89 L80 89" />
          <path d="M92 42 Q112 12 147 25" />
          <path d="M142 20 L148 25 L140 29" />
          <path d="M75 42 L87 53 L80 56 L77 66 L70 52Z" fill="currentColor" />
          <path d="M70 45 L91 67" />
          <circle cx="152" cy="102" r="14" />
          <path d="M145 102 H159 M152 95 V109" />
        </g>
      )}

      {type === 'social' && (
        <g {...common}>
          <rect x="37" y="36" width="104" height="70" rx="5" />
          <path d="M37 51 H141" />
          <circle cx="45" cy="43" r="2" />
          <circle cx="52" cy="43" r="2" />
          <rect x="57" y="60" width="63" height="36" rx="3" />
          <circle cx="88" cy="77" r="16" />
          <circle cx="82" cy="73" r="2" fill="currentColor" />
          <circle cx="94" cy="73" r="2" fill="currentColor" />
          <path d="M81 83 Q88 90 96 83" />
          <rect x="17" y="57" width="22" height="22" rx="3" fill="white" />
          <path d="M23 64 Q27 59 30 64 Q33 59 35 64 Q35 68 29 73Z" fill="#191A23" stroke="none" />
          <rect x="123" y="18" width="22" height="22" rx="3" fill="white" />
          <path d="M128 25 Q132 20 134 25 Q138 20 140 25 Q140 29 134 34Z" fill="#191A23" stroke="none" />
          <rect x="130" y="52" width="22" height="22" rx="3" fill="white" />
          <path d="M135 59 Q139 54 141 59 Q145 54 147 59 Q147 63 141 68Z" fill="#191A23" stroke="none" />
          <rect x="54" y="109" width="79" height="13" fill="white" />
          <path d="M59 118 L62 112 L65 118 M70 112 L70 118 M76 112 L79 118 L82 112 M87 112 L87 118 M93 112 L96 118" />
        </g>
      )}

      {type === 'email' && (
        <g {...common}>
          <path d="M27 92 L59 38 L91 92 L123 38 L153 92" />
          <path d="M35 85 L60 52 L84 85 L108 52 L144 85" />
          <path d="M24 97 L45 90 L51 112 L29 119Z" />
          <path d="M29 98 L39 106 L45 90" />
          <path d="M124 22 Q143 12 153 28 Q160 46 146 65 Q137 76 126 69 Q115 55 124 22Z" fill="currentColor" />
          <path d="M128 33 Q137 38 148 32" />
          <path d="M124 74 L118 91 M145 76 L154 88" />
          <path d="M67 25 L73 12 L80 25 L73 38Z" />
          <path d="M102 96 L110 87 L117 96 L110 105Z" />
          <path d="M16 58 L23 51 L30 58 L23 65Z" />
          <path d="M95 19 L101 14 L107 19 L101 25Z" />
        </g>
      )}

      {type === 'content' && (
        <g {...common}>
          <rect x="28" y="19" width="104" height="28" rx="4" transform="rotate(-7 28 19)" fill="white" />
          <path d="M40 22 L115 13 M38 28 L106 19" />
          <circle cx="38" cy="24" r="2" fill="currentColor" />
          <rect x="53" y="48" width="102" height="27" rx="4" fill="white" />
          <path d="M64 59 H116 M64 66 H98" />
          <circle cx="64" cy="54" r="2" fill="currentColor" />
          <rect x="25" y="77" width="112" height="29" rx="4" fill="white" />
          <path d="M37 88 H104 M37 96 H90" />
          <circle cx="36" cy="83" r="2" fill="currentColor" />
          <rect x="74" y="107" width="79" height="14" rx="3" fill="currentColor" />
          <path d="M82 114 H126" stroke="white" />
          <path d="M158 20 L164 32 L176 38 L164 44 L158 56 L152 44 L140 38 L152 32Z" />
          <circle cx="19" cy="115" r="6" />
        </g>
      )}

      {type === 'analytics' && (
        <g {...common}>
          <rect x="20" y="23" width="104" height="75" rx="4" transform="rotate(-8 20 23)" fill="white" />
          <path d="M26 36 L120 23" />
          <circle cx="33" cy="30" r="2" fill="currentColor" />
          <circle cx="40" cy="29" r="2" fill="currentColor" />
          <path d="M39 49 H104 M39 56 H83" />
          <circle cx="70" cy="76" r="18" />
          <path d="M70 58 V76 L86 86" />
          <path d="M70 76 L54 86" />
          <rect x="82" y="45" width="79" height="61" rx="4" fill="white" />
          <path d="M89 57 H154 M89 64 H141" />
          <path d="M96 91 V78 M106 91 V70 M116 91 V82 M126 91 V73 M136 91 V65" />
          <rect x="35" y="99" width="65" height="23" rx="3" fill="white" />
          <path d="M44 114 L53 105 L62 110 L72 102 L87 108" />
        </g>
      )}
    </svg>
  )
}

function ServiceCard({ service }) {
  const titleHighlight =
    service.highlight === 'green' ? 'bg-[#B9FF66]' : 'bg-white'

  return (
    <article
      className={`flex min-h-43.75 items-center justify-between gap-3 rounded-[22px] border border-[#191A23] px-5 py-5 shadow-[0_4px_0_#191A23] sm:px-6 md:min-h-47.5 md:px-7`}
      style={{}}
    >
      <div className="flex h-full min-w-0 flex-1 flex-col justify-between gap-5">
        <h3 className="max-w-47.5 text-base font-medium leading-[1.3] sm:text-lg">
          <span className={`box-decoration-clone rounded px-1 py-0.5 text-black ${titleHighlight}`}>
            {service.title}
          </span>
        </h3>

        <a
          href="#contact"
          className={`inline-flex w-fit items-center gap-2 text-xs ${
            service.dark ? 'text-white' : 'text-[#191A23]'
          }`}
        >
          <span
            className={`flex h-7 w-7 items-center justify-center rounded-full text-lg ${
              service.dark
                ? 'bg-white text-[#191A23]'
                : 'bg-[#191A23] text-[#B9FF66]'
            }`}
          >
            ↗
          </span>
          Learn more
        </a>
      </div>

      <div className="flex w-[44%] shrink-0 items-center justify-center">
        <ServiceIllustration type={service.illustration} />
      </div>
    </article>
  )
}

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-300 px-6 pb-20 pt-16 md:px-10"
    >
      {/* Section heading */}
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
        <h2 className="w-fit rounded-md bg-[#B9FF66] px-2 py-1 text-3xl font-medium text-black">
          Services
        </h2>

        <p className="max-w-125 text-sm leading-5">
          At our digital marketing agency, we offer a range of services to
          help businesses grow and succeed online. These services include:
        </p>
      </div>

      {/* Service cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-7">
        {services.map((service) => (
          <div
            key={service.id}
            className={`rounded-[22px] ${
              service.background
            } ${
              service.dark ? 'text-white' : 'text-[#191A23]'
            }`}
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </section>
  )
}
