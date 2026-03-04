export type Theme = 'light' | 'dark'

export type SectionId = 'home' | 'about' | 'skills' | 'projects' | 'contact'

export interface NavItem {
  id: SectionId
  label: string
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  techStack: string[]
  highlights: string[]
  githubUrl: string
  liveUrl?: string
  imageLabel: string
  imageUrl: string
  
}

export interface SkillCategory {
  id: string
  title: string
  skills: string[]
}
