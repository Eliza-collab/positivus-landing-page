
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Brands from './components/Brands'
import Services from './components/Services'
import CallToAction from './components/CallToAction'
import CaseStudies from './components/CaseStudies'
import WorkingProcess from './components/WorkingProcess'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#191A23]">
      <Navbar />

      <main id="home">
        <Hero />
        <Brands />
        <Services />
        <CallToAction />
        <CaseStudies />
        <WorkingProcess />
        <Team />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
