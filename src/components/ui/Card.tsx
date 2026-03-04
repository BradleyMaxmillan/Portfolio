import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-3xl border border-slate-200/70 bg-white/80 shadow-lg shadow-slate-900/5 backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-900/70 dark:shadow-black/20',
        className,
      )}
      {...props}
    />
  )
}
