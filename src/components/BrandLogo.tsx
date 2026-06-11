import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BRAND } from '../config/brand'
import { IMAGE_PATHS } from '../data/images'
import { useTheme } from '../context/ThemeProvider'

interface BrandLogoProps {
  className?: string
  onNavigate?: () => void
}

export default function BrandLogo({ className = '', onNavigate }: BrandLogoProps) {
  const { theme } = useTheme()
  const [logoFailed, setLogoFailed] = useState(false)
  const logoSrc = theme === 'light' ? IMAGE_PATHS.logo.light : IMAGE_PATHS.logo.dark

  return (
    <Link
      to="/"
      className={`brand-logo group inline-flex max-w-full min-w-0 items-center ${className}`}
      onClick={onNavigate}
      aria-label={`${BRAND.legalName} — home`}
    >
      {!logoFailed ? (
        <div className="brand-logo-wrap flex h-11 max-w-[11.5rem] shrink-0 items-center justify-center rounded-lg border border-navy-700/80 bg-navy-950/80 px-2 py-1 shadow-sm transition-all duration-300 group-hover:border-accent/35 group-hover:shadow-md group-hover:shadow-accent/12 sm:h-12 sm:max-w-[12.5rem] sm:px-2.5 lg:max-w-[13.5rem]">
          <img
            src={logoSrc}
            alt={BRAND.logo.alt}
            className="h-9 w-auto max-h-9 max-w-full object-contain object-left sm:h-10 sm:max-h-10"
            width={216}
            height={48}
            onError={() => setLogoFailed(true)}
          />
        </div>
      ) : (
        <div className="flex min-w-0 flex-col gap-0.5 py-0.5">
          <span className="truncate text-sm font-bold leading-tight tracking-tight text-white sm:text-base">
            {BRAND.name}
          </span>
          <span className="truncate text-[10px] uppercase leading-tight tracking-widest text-steel-500 sm:text-[11px]">
            {BRAND.headerTagline}
          </span>
        </div>
      )}
    </Link>
  )
}
