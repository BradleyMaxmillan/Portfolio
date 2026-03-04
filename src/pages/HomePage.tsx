import { Suspense, lazy } from 'react'

const HeroSection = lazy(() => import('../features/hero/HeroSection'))
const AboutSection = lazy(() => import('../features/about/AboutSection'))
const SkillsSection = lazy(() => import('../features/skills/SkillsSection'))
const ProjectsSection = lazy(() => import('../features/projects/ProjectsSection'))
const ContactSection = lazy(() => import('../features/contact/ContactSection'))

function SectionFallback() {
  return (
    <section className="py-14" aria-hidden="true">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="h-7 w-44 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<SectionFallback />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <SkillsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ProjectsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ContactSection />
      </Suspense>
    </>
  )
}
