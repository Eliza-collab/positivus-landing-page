
import { useState } from 'react'

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'During the initial consultation, we will discuss your business goals, target audience, and current marketing challenges. This helps us understand your needs and develop a strategy that works for you.',
  },
  {
    number: '02',
    title: 'Research and Strategy Development',
    description:
      'We conduct research to understand your industry, competitors, and target audience. Based on our findings, we create a customized digital marketing strategy aligned with your business objectives.',
  },
  {
    number: '03',
    title: 'Implementation',
    description:
      'Our team puts the strategy into action by creating campaigns, developing content, and implementing the selected digital marketing solutions.',
  },
  {
    number: '04',
    title: 'Monitoring and Optimization',
    description:
      'We continuously monitor campaign performance, analyze results, and make improvements to ensure your marketing activities deliver the best possible outcomes.',
  },
  {
    number: '05',
    title: 'Reporting and Communication',
    description:
      'We provide regular reports and updates about your campaign performance, important results, and progress toward your business goals.',
  },
  {
    number: '06',
    title: 'Continual Improvement',
    description:
      'We continuously review our strategies, identify new opportunities, and make adjustments to help your business achieve sustainable long-term growth.',
  },
]

function ProcessCard({ step, isOpen, onToggle }) {
  return (
    <article
      className={`overflow-hidden rounded-[25px] border border-[#191A23] px-6 shadow-[0_5px_0_#191A23] transition-colors duration-300 md:px-10 ${
        isOpen ? 'bg-[#B9FF66]' : 'bg-[#F3F3F3]'
      }`}
    >
      {/* Accordion header */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-6 text-left md:py-8"
      >
        <div className="flex min-w-0 items-center gap-4 md:gap-6">
          <span className="text-3xl font-medium tracking-tight md:text-5xl">
            {step.number}
          </span>

          <h3 className="text-base font-medium leading-snug md:text-2xl">
            {step.title}
          </h3>
        </div>

        {/* Plus / Minus icon */}
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#191A23] bg-[#F3F3F3] text-2xl font-medium leading-none md:h-12 md:w-12 md:text-3xl">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {/* Expanded description */}
      {isOpen && (
        <div className="border-t border-[#191A23] py-6 md:py-7">
          <p className="max-w-4xl text-sm leading-7 md:text-base">
            {step.description}
          </p>
        </div>
      )}
    </article>
  )
}

export default function WorkingProcess() {
  // Initially, the first process is open.
  const [openStep, setOpenStep] = useState(0)

  const handleToggle = (index) => {
    setOpenStep(openStep === index ? -1 : index)
  }

  return (
    <section
      id="process"
      className="mx-auto max-w-300 px-6 py-16 md:px-10 md:py-24"
    >
      {/* Section heading */}
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
        <h2 className="w-fit shrink-0 rounded-md bg-[#B9FF66] px-2 py-1 text-3xl font-medium text-black md:text-4xl">
          Our Working Process
        </h2>

        <p className="max-w-105 text-sm leading-6">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      {/* Accordion cards */}
      <div className="space-y-5">
        {processSteps.map((step, index) => (
          <ProcessCard
            key={step.number}
            step={step}
            isOpen={openStep === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  )
}
