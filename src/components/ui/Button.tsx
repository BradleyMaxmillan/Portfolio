import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react'
import { cn } from '../../lib/cn'

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 dark:focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-50'

const variantStyles = {
  primary:
    'bg-sky-600 text-white shadow-lg shadow-sky-600/25 hover:-translate-y-0.5 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400',
  secondary:
    'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 hover:-translate-y-0.5 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400',
  ghost:
    'bg-slate-200/70 text-slate-900 hover:bg-slate-300/80 dark:bg-slate-800/80 dark:text-slate-100 dark:hover:bg-slate-700',
  outline:
    'border border-slate-300 bg-white/70 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800',
} as const

const sizeStyles = {
  sm: 'px-3.5 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
} as const

type Variant = keyof typeof variantStyles
type Size = keyof typeof sizeStyles

interface CommonProps {
  children: ReactNode
  className?: string
  variant?: Variant
  size?: Size
}

type AnchorButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

export type ButtonProps = AnchorButtonProps | NativeButtonProps

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children, ...rest } = props

  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className)

  if ('href' in rest && typeof rest.href === 'string') {
    const anchorProps = rest as AnchorButtonProps
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    )
  }

  const buttonProps = rest as NativeButtonProps
  const { type = 'button', ...nativeProps } = buttonProps

  return (
    <button className={classes} type={type} {...nativeProps}>
      {children}
    </button>
  )
}
