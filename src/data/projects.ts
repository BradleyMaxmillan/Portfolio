import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'campus-trader-platform',
    title: 'Campus Trader Platform',
    description:
      'A buyer-seller marketplace with dashboard analytics and visual insights into student trading activity.',
    longDescription:
      'Campus Trader combines secure product listings with analytics dashboards that visualize student engagement, category trends, and top-selling items. The platform uses reusable UI patterns and scalable MERN APIs to deliver both a smooth marketplace and insightful data visualizations for campus communities.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
    highlights: [
      'Secure student marketplace experience',
      'Category and sales trend visualization',
      'Scalable MERN architecture with dashboard analytics',
    ],
    githubUrl: 'https://github.com/BradleyMaxmillan/Campus-trade',
    imageLabel: 'Campus Trader',
    imageUrl: '/images/campus_trade.png',
  },
  {
    id: 'movies-discovery-website',
    title: 'Movies Discovery Website',
    description:
      'A responsive movie browsing platform with data-driven insights from API trends.',
    longDescription:
      'Movie Discovery fetches data from public movie APIs and provides visual insights into trending films, user ratings, and genre distributions. The platform emphasizes fast data rendering, responsive layouts, and dynamic visualization components built with React.',
    techStack: ['React', 'REST API', 'JavaScript'],
    highlights: [
      'Trending and searchable movie catalog',
      'API-powered visual analytics',
      'Mobile-first responsive design with data visualization',
    ],
    githubUrl: 'https://github.com/BradleyMaxmillan/Movie-Site',
    liveUrl: 'https://movie-site-two-mocha.vercel.app/',
    imageLabel: 'Movies Discovery',
    imageUrl: '/images/movie_site.png',
  },
  {
    id: 'library-management-system',
    title: 'Library Management System',
    description:
      'A MERN-based library system with dashboards for visualizing book activity and student engagement.',
    longDescription:
      'This system centralizes inventory and borrowing operations while providing interactive dashboards to visualize book circulation, student activity, and overdue trends. Administrators can quickly identify popular books and monitor performance metrics through data visualizations integrated in the dashboard.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
    highlights: [
      'Role-based access for admins and students',
      'Book circulation and engagement visualizations',
      'Scalable MERN stack with dashboard analytics',
    ],
    githubUrl: 'https://github.com/BradleyMaxmillan',
    imageLabel: 'Library System',
    imageUrl: '/images/library_system.png',
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    description:
      'A MERN stack application that visualizes personal expenses and budget trends through interactive dashboards.',
    longDescription:
      'Expense Tracker centralizes income and spending data while providing dynamic dashboards that visualize monthly expenses, category breakdowns, and budget vs actual comparisons. Built on the MERN stack, it emphasizes maintainable architecture, interactive charts, and real-time insights for personal financial management.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Prisma', 'Docker'],
    highlights: [
      'Interactive expense and budget dashboards',
      'Category-based spending visualizations',
      'Full MERN stack with Prisma & Docker',
    ],
    githubUrl: 'https://github.com/BradleyMaxmillan/Expense-Tracker',
    imageLabel: 'Expense Tracker',
    imageUrl: '/images/expense_site.png',
  },
  {
    id: 'school-management-system',
    title: 'School Management System (Under Development)',
    description:
      'A full-stack school management platform currently under development, focused on interactive dashboards and academic performance visualization.',
    longDescription:
      'School Management System is an ongoing MERN stack project designed to unify academic records, student profiles, and administrative workflows. The system emphasizes interactive dashboards, performance analytics, and scalable architecture. Current development focuses on real-time data visualization, role-based access control, and modular backend APIs.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Prisma', 'Docker'],
    highlights: [
      '🚧 Currently in active development',
      'Academic and attendance data visualizations',
      'Role-based dashboard architecture',
      'Containerized development with Docker',
    ],
    githubUrl: 'https://github.com/BradleyMaxmillan',
    imageLabel: 'School Dashboard',
    imageUrl: '/images/school_dashboard.png',
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    description:
      'A professional portfolio website showcasing projects, skills, and experience.',
    longDescription:
      'This Portfolio Website is built to demonstrate professional projects, technical skills, and software engineering experience. It features a clean, responsive design, interactive project cards, and smooth navigation between sections like About, Projects, and Contact. Built using modern React tooling with Tailwind CSS and optimized for deployment on Vercel.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    highlights: [
      'Responsive and mobile-friendly design',
      'Interactive project showcase with animations',
      'Optimized for modern web deployment',
      'Clean and modular code structure',
    ],
    githubUrl: 'https://github.com/BradleyMaxmillan/Portfolio',
    liveUrl: 'https://anthony-maxmillan-portfolio.vercel.app/',
    imageLabel: 'Portfolio',
    imageUrl: '/images/portfolio.png',
  },
]