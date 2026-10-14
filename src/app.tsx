import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import Home from './pages/home'
import Services from './pages/services'
import ServiceDetailPage from './pages/servicedetailpage'
import FAQ from './pages/faq'
import Projects from './pages/projects'
import Gallery from './pages/gallery'
import Store from './pages/shop'
import About from './pages/about'
import Contact from './pages/contact'
import Privacy from './pages/privacy'
import Terms from './pages/terms'
import NotFound from './pages/notfound'

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
