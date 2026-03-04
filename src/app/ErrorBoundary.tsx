import { AlertTriangle } from 'lucide-react'
import { Component, type ErrorInfo, type ReactNode } from 'react'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Unhandled error captured by ErrorBoundary:', error, errorInfo)
  }

  private handleReload = () => {
    window.location.assign('/')
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex min-h-screen items-center py-16">
          <Container className="max-w-2xl">
            <div className="rounded-3xl border border-rose-300/60 bg-white/80 p-8 text-center shadow-xl shadow-rose-500/10 backdrop-blur dark:border-rose-900/60 dark:bg-slate-900/80">
              <AlertTriangle
                className="mx-auto mb-4 text-rose-600 dark:text-rose-400"
                aria-hidden="true"
                size={32}
              />
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                Something went wrong
              </h1>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                The application hit an unexpected error. Reload to continue.
              </p>
              <Button className="mt-6" onClick={this.handleReload} type="button" variant="primary">
                Reload Portfolio
              </Button>
            </div>
          </Container>
        </main>
      )
    }

    return this.props.children
  }
}
