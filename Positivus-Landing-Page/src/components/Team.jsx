
const teamMembers = [
  {
    id: 1,
    name: 'John Smith',
    role: 'CEO and Founder',
    initials: 'JS',
    color: 'bg-[#B9FF66]',
    description:
      '10+ years of experience in digital marketing. Expertise in strategy, leadership, and business growth.',
  },
  {
    id: 2,
    name: 'Jane Doe',
    role: 'Director of Operations',
    initials: 'JD',
    color: 'bg-[#E8D9FF]',
    description:
      'Experienced in managing projects, coordinating teams, and ensuring successful business operations.',
  },
  {
    id: 3,
    name: 'Michael Brown',
    role: 'Senior SEO Specialist',
    initials: 'MB',
    color: 'bg-[#D9E9FF]',
    description:
      '5+ years of experience in SEO, keyword research, and improving website search engine performance.',
  },
  {
    id: 4,
    name: 'Emily Johnson',
    role: 'PPC Manager',
    initials: 'EJ',
    color: 'bg-[#FFE2D5]',
    description:
      'Specialist in paid advertising campaigns, audience targeting, and campaign optimization.',
  },
  {
    id: 5,
    name: 'Brian Williams',
    role: 'Social Media Specialist',
    initials: 'BW',
    color: 'bg-[#FAD7E8]',
    description:
      'Passionate about social media strategy, content planning, and building online communities.',
  },
  {
    id: 6,
    name: 'Sarah Kim',
    role: 'Content Creator',
    initials: 'SK',
    color: 'bg-[#DDF5D7]',
    description:
      'Creative content specialist focused on storytelling, writing, and engaging digital experiences.',
  },
]

// LinkedIn icon
function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-current"
      aria-hidden="true"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52C22 2.68 21.31 2 20.45 2ZM8 18.5H5V9h3v9.5ZM6.5 7.7a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM19 18.5h-3v-4.6c0-1.1-.02-2.5-1.52-2.5-1.52 0-1.75 1.19-1.75 2.42v4.68h-3V9h2.88v1.3h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.61 2 3.61 4.6v5.14Z" />
    </svg>
  )
}

function TeamCard({ member }) {
  return (
    <article className="flex flex-col rounded-3xl border border-[#191A23] bg-white p-6 shadow-[0_5px_0_#191A23] md:p-7">

      {/* Member information */}
      <div className="flex items-start gap-3 border-b border-[#191A23] pb-5">

        {/* Profile placeholder */}
        <div
          className={`flex h-22.5 w-22.5 shrink-0 items-center justify-center rounded-xl text-3xl font-semibold text-[#191A23] ${member.color}`}
        >
          {member.initials}
        </div>

        <div className="min-w-0 flex-1 self-end">
          <h3 className="text-base font-semibold leading-tight">
            {member.name}
          </h3>

          <p className="mt-2 text-sm leading-5">
            {member.role}
          </p>
        </div>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          aria-label={`LinkedIn for ${member.name}`}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#191A23] text-[#B9FF66] transition hover:bg-[#B9FF66] hover:text-[#191A23]"
        >
          <LinkedInIcon />
        </a>
      </div>

      {/* Member description */}
      <p className="pt-5 text-sm leading-6 text-[#191A23]">
        {member.description}
      </p>
    </article>
  )
}

export default function Team() {
  return (
    <section
      id="team"
      className="mx-auto max-w-300 px-6 py-16 md:px-10 md:py-24"
    >

      {/* Section heading */}
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
        <h2 className="w-fit shrink-0 rounded-md bg-[#B9FF66] px-2 py-1 text-3xl font-medium text-black md:text-4xl">
          Team
        </h2>

        <p className="max-w-112.5 text-sm leading-6">
          Meet the skilled and experienced team behind our successful
          digital marketing strategies.
        </p>
      </div>

      {/* Team members grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <TeamCard
            key={member.id}
            member={member}
          />
        ))}
      </div>

      {/* See all team button */}
      <div className="mt-10 flex justify-end">
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-xl bg-[#191A23] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#33343D]"
        >
          See all team
        </a>
      </div>
    </section>
  )
}
