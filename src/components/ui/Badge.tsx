import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type BadgeVariant = 'default' | 'secondary' | 'warning' | 'success'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  children: ReactNode
}

export function Badge({ variant = 'default', className, children, ...props }: BadgeProps) {
  const variantClasses: Record<BadgeVariant, string> = {
    default: 'bg-slate-100/70 text-slate-700 dark:bg-slate-800/70 dark:text-slate-200',
    secondary: 'bg-blue-100/70 text-blue-700 dark:bg-blue-800/70 dark:text-blue-200',
    warning: 'bg-yellow-100/70 text-yellow-800 dark:bg-yellow-900/70 dark:text-yellow-200',
    success: 'bg-green-100/70 text-green-800 dark:bg-green-900/70 dark:text-green-200',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-slate-300/70 px-3 py-1 text-xs font-medium',
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}