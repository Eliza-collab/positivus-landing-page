import amazon from '../assets/amazon-logo.PNG'
import dribbble from '../assets/dribbble-logo.PNG'
import hubspot from '../assets/hubspot-logo.PNG'
import notion from '../assets/notion-logo.PNG'
import netflix from '../assets/Netflix-logo.png'
import zoom from '../assets/Zoom-logo.png'

const logos = [
  { name: 'Amazon', src: amazon },
  { name: 'Dribbble', src: dribbble },
  { name: 'HubSpot', src: hubspot },
  { name: 'Notion', src: notion },
  { name: 'Netflix', src: netflix },
  { name: 'Zoom', src: zoom },
]

export default function Logos() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 py-10 md:justify-between">
      {logos.map((logo) => (
        <img key={logo.name} src={logo.src} alt={logo.name} className="h-8 grayscale md:h-10" />
      ))}
    </section>
  )
}