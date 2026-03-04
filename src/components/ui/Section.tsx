import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { Container } from './Container'

interface SectionProps {
  id: string
  title: string
  description?: string
  eyebrow?: string
  className?: string
  children: ReactNode
}

export function Section({
  id,
  title,
  description,
  eyebrow,
  className,
  children,
}: SectionProps) {
  return (
    <section className={cn('py-16 sm:py-20', className)} id={id}>
      <Container>
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base text-slate-600 dark:text-slate-300 sm:text-lg">{description}</p>
          ) : null}
        </div>
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  )
}
