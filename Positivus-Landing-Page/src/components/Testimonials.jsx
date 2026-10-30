
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    quote:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads. Their team is professional, responsive, and truly understands our business needs.',
    name: 'Sarah Kim',
    role: 'Marketing Director',
  },
  {
    id: 2,
    quote:
      'Positivus helped us improve our online presence and reach more customers. Their SEO and digital marketing strategies made a real difference to our business.',
    name: 'Michael Brown',
    role: 'CEO, Tech Solutions',
  },
  {
    id: 3,
    quote:
      'The team understood our goals and created campaigns that delivered great results. Communication was excellent throughout the entire process.',
    name: 'Emily Johnson',
    role: 'Founder, Creative Studio',
  },
  {
    id: 4,
    quote:
      'Working with Positivus has been a great experience. Their creativity, attention to detail, and commitment to results exceeded our expectations.',
    name: 'David Wilson',
    role: 'Business Owner',
  },
  {
    id: 5,
    quote:
      'Our social media engagement and customer reach improved significantly. I highly recommend their services to businesses looking to grow online.',
    name: 'Olivia Martin',
    role: 'Social Media Manager',
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const previousTestimonial = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    )
  }

  const nextTestimonial = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    )
  }

  const activeTestimonial = testimonials[activeIndex]

  return (
    <section
      id="testimonials"
      className="mx-auto max-w-300 px-6 py-16 md:px-10 md:py-24"
    >
      {/* Section heading */}
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
        <h2 className="w-fit rounded-md bg-[#B9FF66] px-2 py-1 text-3xl font-medium text-black md:text-4xl">
          Testimonials
        </h2>

        <p className="max-w-112.5 text-sm leading-6">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn
          More about Our Digital Marketing Services.
        </p>
      </div>

      {/* Testimonials container */}
      <div className="overflow-hidden rounded-[30px] bg-[#191A23] px-6 py-12 text-white md:px-12 md:py-16">

        {/* Speech bubble */}
        <div className="mx-auto max-w-187.5">
          <div className="relative rounded-[25px] border border-[#B9FF66] p-7 md:p-10">
            <p className="text-sm leading-7 md:text-base md:leading-8">
              “{activeTestimonial.quote}”
            </p>

            {/* Speech bubble pointer */}
            <div className="absolute -bottom-3.25 left-12 h-6 w-6 rotate-45 border-b border-r border-[#B9FF66] bg-[#191A23]" />
          </div>

          {/* Client information */}
          <div className="ml-12 mt-8">
            <h3 className="font-semibold text-[#B9FF66]">
              {activeTestimonial.name}
            </h3>

            <p className="mt-1 text-sm text-white">
              {activeTestimonial.role}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-14 flex items-center justify-between gap-4 border-t border-gray-700 pt-8">

          {/* Previous */}
          <button
            type="button"
            onClick={previousTestimonial}
            aria-label="Previous testimonial"
            className="rounded-full p-2 text-white transition hover:bg-gray-700"
          >
            <span className="text-3xl">←</span>
          </button>

          {/* Indicators */}
          <div className="flex items-center gap-3">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial ${index + 1}`}
                aria-current={activeIndex === index ? 'true' : undefined}
                className={`h-3 w-3 rounded-full transition-all ${
                  activeIndex === index
                    ? 'scale-125 bg-[#B9FF66]'
                    : 'bg-white'
                }`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="rounded-full p-2 text-white transition hover:bg-gray-700"
          >
            <span className="text-3xl">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
