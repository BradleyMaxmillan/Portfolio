import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { NAV_ITEMS, PROFILE } from '../../lib/constants'
import { cn } from '../../lib/cn'
import type { SectionId } from '../../types'
import { Container } from '../ui/Container'
import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.id), [])
  const activeSectionId = useScrollSpy(sectionIds, 'home')

  const scrollToSection = (sectionId: SectionId) => {
    const target = document.getElementById(sectionId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleSectionClick = (sectionId: SectionId) => {
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`)
    } else {
      scrollToSection(sectionId)
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed left-0 top-0 z-[60] w-full border-b border-slate-200/70 bg-slate-50/70 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/70">
      <Container className="flex h-16 items-center justify-between">
        <button
          className="text-left text-sm font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white"
          onClick={() => handleSectionClick('home')}
          type="button"
        >
          Anthony Maxmillan
        </button>

        <nav aria-label="Primary navigation" className="hidden items-center gap-2 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                activeSectionId === item.id
                  ? 'bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-white'
                  : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white',
              )}
              key={item.id}
              onClick={() => handleSectionClick(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/70 bg-white/70 text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:bg-slate-800 md:hidden"
            onClick={() => setIsMenuOpen((state) => !state)}
            type="button"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.nav
            animate={{ opacity: 1, height: 'auto' }}
            aria-label="Mobile navigation"
            className="border-t border-slate-200/70 bg-slate-50/95 dark:border-slate-800/70 dark:bg-slate-950/95 md:hidden"
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
          >
            <Container className="grid gap-2 py-4">
              {NAV_ITEMS.map((item) => (
                <button
                  className={cn(
                    'rounded-2xl px-4 py-2.5 text-left text-sm font-medium transition-colors',
                    activeSectionId === item.id
                      ? 'bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-white'
                      : 'text-slate-700 hover:bg-slate-200/70 dark:text-slate-300 dark:hover:bg-slate-800',
                  )}
                  key={item.id}
                  onClick={() => handleSectionClick(item.id)}
                  type="button"
                >
                  {item.label}
                </button>
              ))}
              <a
                className="rounded-2xl border border-slate-300/70 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200/70 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                href={`mailto:${PROFILE.email}`}
              >
                Email
              </a>
            </Container>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
