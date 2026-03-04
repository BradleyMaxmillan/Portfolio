import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          animate={{ opacity: 1, y: 0 }}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-[65] inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-600 text-white shadow-xl shadow-sky-600/30 transition-colors hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400"
          exit={{ opacity: 0, y: 12 }}
          initial={{ opacity: 0, y: 12 }}
          onClick={scrollToTop}
          type="button"
        >
          <ArrowUp size={18} />
        </motion.button>
      ) : null}
    </AnimatePresence>
  )
}
