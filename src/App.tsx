import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Celebrations from './pages/Celebrations'
import Accommodation from './pages/Accommodation'
import RoomDetail from './pages/RoomDetail'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meni" element={<Menu />} />
          <Route path="/proslave" element={<Celebrations />} />
          <Route path="/smestaj" element={<Accommodation />} />
          <Route path="/smestaj/:slug" element={<RoomDetail />} />
          <Route path="/galerija" element={<Gallery />} />
          <Route path="/o-nama" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
