import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '../components/shared/Footer'
import { Navbar } from '../components/shared/Navbar'
import { ScrollProgress } from '../components/shared/ScrollProgress'
import { ScrollToTop } from '../components/shared/ScrollToTop'

export function AppLayout() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      return
    }

    const sectionId = location.hash.slice(1)
    const timerId = window.setTimeout(() => {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 80)

    return () => window.clearTimeout(timerId)
  }, [location.hash])

  useEffect(() => {
    if (location.hash) {
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.hash])

  return (
    <div className="relative min-h-screen text-slate-900 dark:text-slate-100">
      <ScrollProgress />
      <Navbar />
      <main id="content" className="relative pt-16" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
