import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './header'
import Footer from './footer'
import MobileCTA from './mobilecta'
import PageMeta from './pagemeta'
import LocalBusinessSchema from './localbusinessschema'

export default function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      let targetId = hash.slice(1)
      try { targetId = decodeURIComponent(targetId) } catch { /* Keep literal malformed fragments. */ }
      const el = document.getElementById(targetId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <div className="flex min-h-screen flex-col pb-[calc(4.75rem+env(safe-area-inset-bottom))] md:pb-0">
      <PageMeta />
      <LocalBusinessSchema />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  )
}
