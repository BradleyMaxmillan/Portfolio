import { Card } from '../../components/ui/Card'
import { FadeIn } from '../../components/ui/FadeIn'
import { Section } from '../../components/ui/Section'
import { PROFILE } from '../../lib/constants'

const values = [
  {
    title: 'Engineering Mindset',
    description:
      'I design with long-term maintainability in mind, using modular architecture and clear naming to keep teams fast.',
  },
  {
    title: 'Problem-First Development',
    description:
      'I focus on solving clear user pain points before polishing implementation details or adding complexity.',
  },
  {
    title: 'Africa-Centered Innovation',
    description:
      'I build practical web and AI tools that respond to local constraints and opportunities in African communities.',
  },
]

export default function AboutSection() {
  return (
    <Section
      description={PROFILE.bio}
      eyebrow="About"
      id="about"
      title="Software Engineer in Training, Product Builder by Practice"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {values.map((value, index) => (
          <FadeIn delay={index * 0.08} key={value.title}>
            <Card className="h-full p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {value.description}
              </p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
