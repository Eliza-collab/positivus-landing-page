const brands = [
  { name: 'amazon', style: 'font-extrabold tracking-tight' },
  { name: 'dribbble', style: 'font-serif font-bold italic' },
  { name: 'HubSpot', style: 'font-bold tracking-tight' },
  { name: 'Notion', style: 'font-bold tracking-tight' },
  { name: 'NETFLIX', style: 'font-black tracking-tight' },
  { name: 'zoom', style: 'font-bold tracking-tight' },
]

export default function Brands() {
  return (
    <section
      aria-label="Brand names"
      className="mx-auto flex max-w-300 flex-wrap items-center justify-between gap-x-8 gap-y-6 px-6 pb-8 pt-8 md:px-10"
    >
      {brands.map((brand) => (
        <span
          key={brand.name}
          className={`text-xl text-[#777777] grayscale sm:text-2xl ${brand.style}`}
        >
          {brand.name}
        </span>
      ))}
    </section>
  )
}