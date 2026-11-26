import Hero from '../components/Hero.jsx'
import MentorSection from '../components/MentorSection.jsx'
import ProgramSection from '../components/ProgramSection.jsx'
import { programs } from '../data/lumosData.js'

function Home() {
  return (
    <>
      <Hero
        title="Satu Bahasa,"
        highlight="Satu Juta Peluang"
        description="Belajar bahasa Inggris jadi lebih seru dan fleksibel. Mulai dari langkah kecil, tingkatkan kemampuanmu, dan buka sejuta peluang untuk masa depan."
      />

      <MentorSection
        id="tkami"
        title="Mentor Kami"
        description="Kenali mentor yang siap mendampingi perjalanan belajar bahasa Inggrismu."
      />

      <ProgramSection
        id="program"
        title="Program Unggulan"
        description="Temukan pilihan program sesuai dengan tujuan belajar bahasa Inggrismu."
        items={programs}
      />
    </>
  )
}

export default Home