import { Github, Linkedin, Mail } from 'lucide-react'
import { PROFILE } from '../../lib/constants'
import { Container } from '../ui/Container'

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 py-8 dark:border-slate-800/70">
      <Container className="flex flex-col items-start justify-between gap-4 text-sm text-slate-600 dark:text-slate-300 sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}. Built with React, TypeScript, and Tailwind CSS.
        </p>
        <div className="flex items-center gap-3">
          <a
            aria-label="Visit Anthony's GitHub profile"
            className="rounded-full border border-slate-300/70 p-2 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
            href={PROFILE.github}
            rel="noreferrer"
            target="_blank"
          >
            <Github size={16} />
          </a>
          <a
            aria-label="Visit Anthony's LinkedIn profile"
            className="rounded-full border border-slate-300/70 p-2 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
            href={PROFILE.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            <Linkedin size={16} />
          </a>
          <a
            aria-label="Email Anthony"
            className="rounded-full border border-slate-300/70 p-2 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
            href={`mailto:${PROFILE.email}`}
          >
            <Mail size={16} />
          </a>
        </div>
      </Container>
    </footer>
  )
}
