import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import FeatureSection from './components/FeatureSection.jsx'
import ProgramSection from './components/ProgramSection.jsx'
import Footer from './components/Footer.jsx'
import { navLinks, features, programs, footerLinks } from './data/lumosData.js'

function App() {
  return (
    <div className="min-h-screen bg-[#f0f2f8] font-sans text-[#171c35]">
      <Navbar navLinks={navLinks} />

      <main className="mx-auto my-4 w-[95%] max-w-[1280px] md:my-6">
        <Hero
          title="Satu Bahasa,"
          highlight="Satu Juta Peluang"
          description="Belajar bahasa Inggris jadi lebih seru dan fleksibel. Mulai dari langkah kecil, tingkatkan kemampuanmu, dan buka sejuta peluang untuk masa depan."
        />

        <FeatureSection
          id="tkami"
          title="Kenapa Pilih Kami?"
          description="Belajar bahasa Inggris nggak harus ribet! Di sini, kamu bisa mulai dari nol, belajar kapan aja, dan jadi makin jago dengan cara yang simpel dan seru"
          items={features}
        />

        <ProgramSection
          id="program"
          title="Program Unggulan"
          description="Temukan pilihan program sesuai dengan tujuan belajar bahasa Inggrismu."
          items={programs}
        />
      </main>

      <Footer links={footerLinks} />
    </div>
  )
}

export default App
