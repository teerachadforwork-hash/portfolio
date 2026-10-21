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
    title: 'Performance Evaluation of Machine Learning Techniques for Hypertension Classification Using Clinical Data',
    organization: 'Faculty of Informatics, MSU',
    period: '2025',
    description:
      'This study aims to evaluate the performance of various machine learning techniques in classifying hypertension using clinical data. The research focuses on comparing the accuracy and efficiency of different algorithms in predicting hypertension, providing insights into the most effective approaches for clinical decision support. The study utilizes a comprehensive dataset of clinical measurements, including blood pressure, heart rate, and other relevant health indicators, to train and evaluate the machine learning models.',
    highlights: [
      'Collected and preprocessed clinical data for model training and evaluation',
      'Applied various machine learning techniques to classify hypertension',
      'Evaluated and compared the performance of different algorithms',
    ],
    techStack: ['Google Colab', 'Python', 'Power BI', 'Scikit-learn'],
  },
  {
    id: 'exp-5',
    type: 'activity',
    title: 'Vice President of Information Technology Student Association',
    organization: 'Information Technology',
    period: '2023 — 2025',
    description:
      'Active Executive in student association activities.',
    highlights: [
      'Organized various student activities',
    ],
  },
];
