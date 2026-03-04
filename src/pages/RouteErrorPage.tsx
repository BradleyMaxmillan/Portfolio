import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'

export default function RouteErrorPage() {
  const error = useRouteError()

  let status = 'Unexpected Error'
  let message = 'Something went wrong while loading this page.'

  if (isRouteErrorResponse(error)) {
    status = `${error.status} ${error.statusText}`
    if (typeof error.data === 'string' && error.data.trim()) {
      message = error.data
    }
  } else if (error instanceof Error) {
    message = error.message
  }

  return (
    <main className="flex min-h-[70vh] items-center py-16">
      <Container className="max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-600 dark:text-rose-400">
          Route Error
        </p>
        <h1 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white">{status}</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">{message}</p>
        <div className="mt-8">
          <Button href="/" variant="primary">
            Back to Home
          </Button>
        </div>
      </Container>
    </main>
  )
}
