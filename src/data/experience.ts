// ============================================
// Experience Data — Edit this file to add your experiences
// ============================================

export type ExperienceType = 'internship' | 'research' | 'university' | 'activity';

export interface Experience {
  id: string;
  type: ExperienceType;
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  techStack?: string[];
}

export const experienceTypeConfig: Record<ExperienceType, { label: string; color: string }> = {
  internship: { label: 'Internship', color: 'bg-blue-500' },
  research: { label: 'Research', color: 'bg-purple-500' },
  university: { label: 'University Project', color: 'bg-emerald-500' },
  activity: { label: 'Activity', color: 'bg-orange-500' },
};

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    type: 'university',
    title: 'Senior Project — AI-Powered Data Analysis',
    organization: 'Faculty of Informatics, MSU',
    period: '2026 — Present',
    description:
      'Developing an intelligent data analysis platform as a senior capstone project, applying machine learning techniques to automate data preprocessing and visualization.',
    highlights: [
      'Designed system architecture and database schema',
      'Implemented ML models for automated data classification',
      'Built interactive dashboard with React and Power BI integration',
    ],
    techStack: ['Python', 'React', 'TensorFlow', 'PostgreSQL'],
  },
  {
    id: 'exp-2',
    type: 'activity',
    title: 'IT Department Graduation Rehearsal',
    organization: 'Department of Information Technology, MSU',
    period: 'April 2026',
    description:
      'Participated in the department graduation rehearsal ceremony, collaborating with faculty and peers to prepare for the official graduation event.',
    highlights: [
      'Coordinated with department staff and classmates',
      'Demonstrated teamwork and organizational skills',
    ],
  },
  {
    id: 'exp-3',
    type: 'university',
    title: 'Web Application Development Project',
    organization: 'Faculty of Informatics, MSU',
    period: '2025',
    description:
      'Developed a full-stack web application for course registration and management as part of the Software Engineering course.',
    highlights: [
      'Collaborated in a team of 4 using Agile methodology',
      'Implemented RESTful API and responsive frontend',
      'Presented project to faculty panel',
    ],
    techStack: ['React', 'Node.js', 'MySQL', 'Git'],
  },
  {
    id: 'exp-4',
    type: 'research',
    title: 'Data Analytics Research',
    organization: 'Faculty of Informatics, MSU',
    period: '2025',
    description:
      'Conducted research on applying data analytics techniques to improve student academic performance prediction.',
    highlights: [
      'Collected and preprocessed academic performance data',
      'Applied statistical analysis and visualization techniques',
      'Produced research report with actionable recommendations',
    ],
    techStack: ['Python', 'Pandas', 'Power BI', 'Scikit-learn'],
  },
  {
    id: 'exp-5',
    type: 'activity',
    title: 'IT Student Community Activities',
    organization: 'Faculty of Informatics, MSU',
    period: '2023 — Present',
    description:
      'Active participant in department activities including workshops, hackathons, and community service projects.',
    highlights: [
      'Attended AI and Data Science workshops',
      'Participated in coding competitions',
      'Helped organize faculty open house events',
    ],
  },
];
