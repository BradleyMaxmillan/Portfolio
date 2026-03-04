import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Container } from '../../components/ui/Container'
import { FadeIn } from '../../components/ui/FadeIn'
import { PROFILE } from '../../lib/constants'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28" id="home">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
              {PROFILE.title}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mt-5 text-4xl font-black leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Building scalable products and practical AI experiences.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              I am {PROFILE.name}, a software engineering student focused on delivering robust
              web applications and AI-driven solutions that solve real-world African challenges.
            </p>
          </FadeIn>

          <FadeIn className="mt-8 flex flex-wrap items-center gap-3" delay={0.3}>
            <Button href="#projects" size="lg" variant="primary">
              Explore Projects
              <ArrowUpRight size={18} />
            </Button>
            <Button href="#contact" size="lg" variant="outline">
              Let&apos;s Build Something Great
            </Button>
          </FadeIn>

          <FadeIn className="mt-6 flex items-center gap-3" delay={0.4}>
            <a
              aria-label="Anthony's GitHub"
              className="rounded-full border border-slate-300/70 p-2 text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              href={PROFILE.github}
              rel="noreferrer"
              target="_blank"
            >
              <Github size={18} />
            </a>
            <a
              aria-label="Anthony's LinkedIn"
              className="rounded-full border border-slate-300/70 p-2 text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              href={PROFILE.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              <Linkedin size={18} />
            </a>
            <a
              aria-label="Email Anthony"
              className="rounded-full border border-slate-300/70 p-2 text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              href={`mailto:${PROFILE.email}`}
            >
              <Mail size={18} />
            </a>
          </FadeIn>
        </div>

        <FadeIn delay={0.35}>
          <div className="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-white/90 via-cyan-50/70 to-emerald-50/80 p-8 shadow-2xl shadow-slate-900/5 dark:border-slate-700 dark:from-slate-900/90 dark:via-sky-950/50 dark:to-emerald-950/30">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Focus Areas
            </p>
            <ul className="mt-6 grid gap-4 text-sm text-slate-700 dark:text-slate-200">
              <li className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 dark:border-slate-700 dark:bg-slate-900/70">
                Scalable MERN architecture and clean component systems.
              </li>
              <li className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 dark:border-slate-700 dark:bg-slate-900/70">
                Data-driven UX focused on accessibility and performance.
              </li>
              <li className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 dark:border-slate-700 dark:bg-slate-900/70">
                AI experimentation for practical local impact.
              </li>
            </ul>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
