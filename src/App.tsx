import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetailPage from './pages/ServiceDetailPage'
import FAQ from './pages/FAQ'
import Projects from './pages/Projects'
import Gallery from './pages/Gallery'
import Store from './pages/Store'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetailPage />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="projects" element={<Projects />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="store" element={<Store />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
