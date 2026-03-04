import type { ElementType, HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType
  children: ReactNode
}

export function Container({
  as: Component = 'div',
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component className={cn('mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8', className)} {...props}>
      {children}
    </Component>
  )
}
