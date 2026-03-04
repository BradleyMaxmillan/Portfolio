import { useCallback, useMemo, useState } from 'react'
import { FadeIn } from '../../components/ui/FadeIn'
import { Modal } from '../../components/ui/Modal'
import { Section } from '../../components/ui/Section'
import { projects } from '../../data/projects'
import type { Project } from '../../types'
import { ProjectCard } from './ProjectCard'
import { ProjectDetails } from './ProjectDetails'

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleOpenProject = useCallback((project: Project) => {
    setSelectedProject(project)
  }, [])

  const handleCloseProject = useCallback(() => {
    setSelectedProject(null)
  }, [])

  const projectCards = useMemo(
    () =>
      projects.map((project, index) => (
        <FadeIn delay={index * 0.06} key={project.id}>
          <ProjectCard onOpen={handleOpenProject} project={project} />
        </FadeIn>
      )),
    [handleOpenProject],
  )

  return (
    <Section
      description="Selected products showcasing full-stack development, API integration, and dashboard design."
      eyebrow="Projects"
      id="projects"
      title="Featured Work"
    >
      <div className="grid gap-5 md:grid-cols-2">{projectCards}</div>

      <Modal
        isOpen={selectedProject !== null}
        onClose={handleCloseProject}
        title={selectedProject?.title ?? 'Project Details'}
      >
        {selectedProject ? <ProjectDetails project={selectedProject} /> : null}
      </Modal>
    </Section>
  )
}
