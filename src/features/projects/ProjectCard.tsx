import { memo, type KeyboardEvent } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '../../types'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'

interface ProjectCardProps {
  project: Project
  onOpen: (project: Project) => void
}

function ProjectCardComponent({ project, onOpen }: ProjectCardProps) {
  const handleOpen = () => onOpen(project)

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleOpen()
    }
  }

  const isInDevelopment = project.highlights.includes('🚧 Currently in active development')

  return (
    <Card
      aria-label={`Open details for ${project.title}`}
      className="group h-full cursor-pointer overflow-hidden p-5 transition-transform hover:-translate-y-1"
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      {/* Project Image with gradient overlay */}
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-200/70 dark:border-slate-700">
        <img
          src={project.imageUrl}
          alt={project.imageLabel}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(255,255,255,0.18)_15%,transparent_35%,transparent_60%,rgba(255,255,255,0.2)_80%)]" />

        {/* Image label */}
        <span className="absolute bottom-2 left-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700 dark:bg-slate-900/80 dark:text-slate-200">
          {project.imageLabel}
        </span>

        {/* Status badge */}
        {isInDevelopment && (
          <Badge variant="warning" className="absolute top-2 right-2">
            In Development
          </Badge>
        )}
      </div>

      {/* Title and description */}
      <div className="mt-5 flex items-center gap-2">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {project.description}
      </p>

      {/* Tech stack badges */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((technology) => (
          <Badge key={technology}>{technology}</Badge>
        ))}
      </div>

      {/* GitHub & Live buttons */}
      <div className="mt-5 flex flex-wrap gap-2">
        <Button
          href={project.githubUrl}
          onClick={(event) => event.stopPropagation()}
          rel="noreferrer"
          size="sm"
          target="_blank"
          variant="outline"
        >
          <Github size={16} />
          GitHub
        </Button>
        {project.liveUrl && (
          <Button
            href={project.liveUrl}
            onClick={(event) => event.stopPropagation()}
            rel="noreferrer"
            size="sm"
            target="_blank"
            variant="secondary"
          >
            <ExternalLink size={16} />
            Live Demo
          </Button>
        )}
      </div>
    </Card>
  )
}

export const ProjectCard = memo(ProjectCardComponent)