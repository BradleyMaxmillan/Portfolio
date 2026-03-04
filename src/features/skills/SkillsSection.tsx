import { Badge } from '../../components/ui/Badge'
import { Card } from '../../components/ui/Card'
import { FadeIn } from '../../components/ui/FadeIn'
import { Section } from '../../components/ui/Section'
import { skills } from '../../data/skills'

export default function SkillsSection() {
  return (
    <Section
      description="A practical toolkit for full-stack product development and modern frontend engineering."
      eyebrow="Skills"
      id="skills"
      title="Technical Capabilities"
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {skills.map((category, index) => (
          <FadeIn delay={index * 0.08} key={category.id}>
            <Card className="h-full p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{category.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
