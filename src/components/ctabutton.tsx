import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface CTAButtonProps {
  children: React.ReactNode
  variant?: Variant
  size?: Size
  href?: string
  to?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
  fullWidth?: boolean
  disabled?: boolean
  /** External http(s) links: same-tab navigation when false (default) */
  openInNewTab?: boolean
}

const variantStyles: Record<Variant, string> = {
  primary:
    'btn-cta-premium btn-cta-primary bg-accent text-white hover:bg-accent-hover font-semibold shadow-lg shadow-accent/25 min-h-[48px] hover:shadow-xl hover:shadow-accent/35',
  secondary:
    'btn-cta-premium bg-navy-800 text-white hover:bg-navy-700 font-semibold min-h-[48px] hover:shadow-lg border border-navy-700 hover:border-accent/35',
  outline:
    'btn-cta-premium border-2 border-steel-300/50 text-white hover:border-accent hover:text-accent bg-transparent min-h-[48px] hover:shadow-lg hover:shadow-accent/15 btn-cta-outline',
  ghost: 'btn-cta-premium text-steel-300 hover:text-white bg-transparent hover:shadow-md',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function CTAButton({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  className = '',
  type = 'button',
  fullWidth = false,
  disabled = false,
  openInNewTab = false,
}: CTAButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 btn-cta-premium disabled:pointer-events-none disabled:opacity-60'
  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`

  if (href) {
    const isHttp = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        {...(isHttp && openInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...(isHttp && !openInNewTab ? { rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  )
}
