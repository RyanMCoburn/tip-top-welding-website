import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import MobileCTA from './MobileCTA'
import PageMeta from './PageMeta'
import LocalBusinessSchema from './LocalBusinessSchema'

export default function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
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
