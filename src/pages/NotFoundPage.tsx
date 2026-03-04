import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container'

export default function NotFoundPage() {
  return (
    <main className="flex min-h-[70vh] items-center py-16">
      <Container className="max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-400">
          404 Error
        </p>
        <h1 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white">Page Not Found</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          The page you requested does not exist or may have moved.
        </p>
        <div className="mt-8">
          <Link
            className="inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400"
            to="/"
          >
            Back to Home
          </Link>
        </div>
      </Container>
    </main>
  )
}
