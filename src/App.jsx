import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import { navLinks, footerLinks } from './data/lumosData.js'

function App() {
  return (
    <div className="min-h-screen bg-[#f0f2f8] font-sans text-[#171c35]">
      <Navbar navLinks={navLinks} />

      <main className="mx-auto my-4 w-[95%] max-w-[1280px] md:my-6">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <Footer links={footerLinks} />
    </div>
  )
}

export default App