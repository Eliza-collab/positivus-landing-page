
import { useState } from 'react'

export default function Contact() {
  const [inquiryType, setInquiryType] = useState('Say Hi')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Demo submission: no backend is connected yet.
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-300 px-6 py-16 md:px-10 md:py-24"
    >
      {/* Section heading */}
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
        <h2 className="w-fit rounded-md bg-[#B9FF66] px-2 py-1 text-3xl font-medium text-black md:text-4xl">
          Contact Us
        </h2>

        <p className="max-w-112.5 text-sm leading-6">
          Connect with Us: Let's Discuss Your Digital Marketing Needs.
        </p>
      </div>

      {/* Contact form container */}
      <div className="relative overflow-hidden rounded-[30px] bg-[#F3F3F3] px-6 py-10 md:px-12 md:py-14">

        {/* Decorative illustration */}
        <div className="pointer-events-none absolute -right-25 top-1/2 hidden w-100 -translate-y-1/2 lg:block">
          <svg viewBox="0 0 400 400" className="w-full" fill="none">
            <path
              d="M200 40 L220 130 L310 90 L260 175 L350 200 L260 225 L310 310 L220 270 L200 360 L180 270 L90 310 L140 225 L50 200 L140 175 L90 90 L180 130Z"
              stroke="#191A23"
              strokeWidth="1.5"
            />
            <path
              d="M200 105 L220 165 L280 180 L220 195 L200 255 L180 195 L120 180 L180 165Z"
              fill="#B9FF66"
            />
            <path
              d="M100 100 L120 120 L100 140 L80 120Z"
              fill="#191A23"
            />
            <path
              d="M320 270 L330 290 L350 300 L330 310 L320 330 L310 310 L290 300 L310 290Z"
              fill="#B9FF66"
            />
          </svg>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="relative z-10 max-w-137.5 space-y-7"
        >
          {/* Inquiry type */}
          <div>
            <p className="mb-4 text-sm">Select your inquiry type:</p>

            <div className="flex flex-wrap gap-8">
              {['Say Hi', 'Get a Quote'].map((type) => (
                <label
                  key={type}
                  className="flex cursor-pointer items-center gap-3 text-sm"
                >
                  <input
                    type="radio"
                    name="inquiryType"
                    value={type}
                    checked={inquiryType === type}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="h-5 w-5 accent-[#B9FF66]"
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* Name */}
          <div>
            <label htmlFor="name" className="mb-2 block text-sm">
              Name
            </label>

            <input
              id="name"
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full rounded-xl border border-[#191A23] bg-white px-5 py-4 text-sm outline-none transition focus:ring-2 focus:ring-[#B9FF66]"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-2 block text-sm">
              Email*
            </label>

            <input
              id="email"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full rounded-xl border border-[#191A23] bg-white px-5 py-4 text-sm outline-none transition focus:ring-2 focus:ring-[#B9FF66]"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="mb-2 block text-sm">
              Message*
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              className="w-full resize-none rounded-xl border border-[#191A23] bg-white px-5 py-4 text-sm outline-none transition focus:ring-2 focus:ring-[#B9FF66]"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-[#191A23] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#33343D]"
          >
            Send Message
          </button>

          {/* Success message */}
          {submitted && (
            <p
              role="status"
              className="rounded-lg bg-[#B9FF66] p-4 text-sm text-[#191A23]"
            >
              Thank you, {formData.name}! Your demo form was submitted successfully.
              No message has been sent to a server.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
