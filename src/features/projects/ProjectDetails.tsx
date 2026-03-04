import { Badge } from '../../components/ui/Badge'
import type { Project } from '../../types'

interface ProjectDetailsProps {
  project: Project
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div>
      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {project.longDescription}
      </p>

      <h4 className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
        Highlights
      </h4>
      <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-700 dark:text-slate-200">
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <h4 className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
        Tech Stack
      </h4>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.techStack.map((technology) => (
          <Badge key={technology}>{technology}</Badge>
        ))}
      </div>
    </div>
  )
}
