interface PlaceholderNoticeProps {
  children: React.ReactNode
  className?: string
}

/** Visible demo marker — use on sections with unverified placeholder content */
export default function PlaceholderNotice({ children, className = '' }: PlaceholderNoticeProps) {
  return (
    <p
      className={`rounded-sm border border-steel-600/30 bg-navy-800/60 px-4 py-2.5 text-center text-xs text-steel-500 ${className}`}
      role="note"
    >
      {children}
    </p>
  )
}
