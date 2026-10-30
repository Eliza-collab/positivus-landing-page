
const caseStudies = [
  {
    id: 1,
    description:
      'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
  },
  {
    id: 2,
    description:
      'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
  },
  {
    id: 3,
    description:
      'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
  },
]

function CaseStudyCard({ study }) {
  return (
    <article className="flex flex-col items-start gap-5">
      <p className="text-sm leading-normal text-[#F3F3F3]">
        {study.description}
      </p>

      <a
        href="#contact"
        className="group inline-flex items-center gap-2 text-sm font-medium text-[#B9FF66] transition-colors hover:text-white"
      >
        Learn more

        <span className="text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </span>
      </a>
    </article>
  )
}

export default function CaseStudies() {
  return (
    <section
      id="cases"
      className="mx-auto max-w-300 px-6 pb-20 pt-10 md:px-10 md:pb-28"
    >
      {/* Section heading */}
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
        <h2 className="w-fit shrink-0 rounded-md bg-[#B9FF66] px-2 py-1 text-3xl font-medium text-black md:text-4xl">
          Case Studies
        </h2>

        <p className="max-w-112.5 text-sm leading-5">
          Explore Real-Life Examples of Our Proven Digital Marketing
          Success through Our Case Studies
        </p>
      </div>

      {/* Case studies container */}
      <div className="rounded-[28px] bg-[#191A23] px-7 py-9 text-white md:px-10 md:py-11 lg:px-9">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`flex ${
                index !== 0
                  ? 'border-t border-gray-500 pt-8 md:border-l md:border-t-0 md:pl-8 md:pt-0'
                  : ''
              } ${
                index !== 2
                  ? 'md:pr-8'
                  : ''
              }`}
            >
              <CaseStudyCard study={study} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
