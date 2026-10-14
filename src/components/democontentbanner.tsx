import { DEMO_CONTENT_BANNER } from '../data/sitecontent'

export default function DemoContentBanner({ className = '' }: { className?: string }) {
  return (
    <p
      className={`rounded-sm border border-accent/20 bg-accent/5 px-4 py-3 text-center text-sm text-steel-300 ${className}`}
      role="note"
    >
      {DEMO_CONTENT_BANNER}
    </p>
  )
}
