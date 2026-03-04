import type { PropsWithChildren } from 'react'
import { ErrorBoundary } from './ErrorBoundary'
import { ThemeProvider } from '../hooks/useTheme'

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <ErrorBoundary>{children}</ErrorBoundary>
    </ThemeProvider>
  )
}
