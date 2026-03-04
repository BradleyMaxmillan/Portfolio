import type { SkillCategory } from '../types'

export const skills: SkillCategory[] = [
  {
    id: 'data-analytics',
    title: 'Data & Analytics',
    skills: [
      'Python (Beginner)',
      'Python (Intermediate)',
      'NumPy',
      'Matplotlib',
      'SPSS',
      'Excel',
      'Data Visualization',
      'Statistical Analysis',
    ],
  },
  {
    id: 'backend',
    title: 'Backend & DevOps',
    skills: [
      'Node.js',
      'Express',
      'REST APIs',
      'MongoDB',
      'MySQL',
      'Prisma',
      'Docker',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Accessibility',
    ],
  },
  {
    id: 'workflow',
    title: 'Workflow & Architecture',
    skills: [
      'Git & GitHub',
      'Clean Architecture',
      'Performance Optimization',
      'UI/UX Thinking',
    ],
  },
]