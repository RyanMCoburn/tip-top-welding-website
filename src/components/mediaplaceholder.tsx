import { PLACEHOLDER_LAUNCH_NOTE, PLACEHOLDER_PHOTO_LABEL } from '../data/images'

interface MediaPlaceholderProps {
  label?: string
  aspect?: '4/3' | '16/9' | '16/10' | 'square'
  compact?: boolean
  className?: string
}

const aspectClasses = {
  '4/3': 'aspect-[4/3]',
  '16/9': 'aspect-[16/9]',
  '16/10': 'aspect-[16/10]',
  square: 'aspect-square',
} as const

/** Honest premium placeholder — no stock photos that imply completed Tip Top work */
export default function MediaPlaceholder({
  label = PLACEHOLDER_PHOTO_LABEL,
  aspect = '4/3',
  compact = false,
  className = '',
}: MediaPlaceholderProps) {
  return (
    <div
      className={`placeholder-metal relative flex flex-col items-center justify-center overflow-hidden rounded-xl border ${aspectClasses[aspect]} ${
        compact ? 'max-h-44 sm:max-h-none' : 'max-h-52 sm:max-h-none'
      } ${className}`}
      role="img"
      aria-label={`${label}. ${PLACEHOLDER_LAUNCH_NOTE}`}
    >
      <div className="relative z-10 flex flex-col items-center gap-3 px-4 py-6 text-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-navy-700/80 bg-navy-900/40">
          <svg
            className="h-5 w-5 text-steel-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-steel-400">{label}</p>
          <p className="mt-1.5 max-w-[16rem] text-[11px] leading-relaxed text-steel-500">
            {PLACEHOLDER_LAUNCH_NOTE}
          </p>
        </div>
      </div>
    </div>
  )
}
