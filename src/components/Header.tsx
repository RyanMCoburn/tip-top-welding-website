import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import CTAButton from './CTAButton'
import ThemeToggle from './ThemeToggle'
import BrandLogo from './BrandLogo'
import { CONTACT, CTAS, NAV_LINKS } from '../data/siteContent'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `whitespace-nowrap text-xs font-medium tracking-wide transition-colors xl:text-sm ${
      isActive ? 'text-accent' : 'text-steel-300 hover:text-white'
    }`

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header-glass">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 md:gap-5 md:px-6 md:py-3 lg:px-8">
        <div className="min-w-0 shrink">
          <BrandLogo onNavigate={closeMenu} />
        </div>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-4 xl:gap-6 2xl:gap-7 xl:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.path} to={link.path} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ThemeToggle className="hidden sm:inline-flex" />
          <CTAButton href={CONTACT.tel} variant="primary" size="sm" className="hidden md:inline-flex">
            {CTAS.phone}
          </CTAButton>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-navy-700 text-steel-300 transition-all duration-300 hover:border-accent/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent xl:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-navy-700/60 bg-navy-950 px-4 py-4 xl:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-steel-500">Menu</span>
            <ThemeToggle />
          </div>
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block min-h-[48px] rounded-lg px-4 py-3 text-base font-medium leading-none ${
                      isActive ? 'bg-navy-800 text-accent' : 'text-steel-300 hover:bg-navy-800 hover:text-white'
                    }`
                  }
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid gap-2 border-t border-navy-700/60 pt-4">
            <CTAButton href={CONTACT.tel} fullWidth>
              {CTAS.phone}
            </CTAButton>
            <CTAButton href={CONTACT.sms} variant="outline" fullWidth>
              {CTAS.secondary}
            </CTAButton>
            <CTAButton to="/contact#quote-form" variant="secondary" fullWidth>
              {CTAS.primary}
            </CTAButton>
          </div>
        </nav>
      )}
    </header>
  )
}
