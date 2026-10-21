// ============================================
// Achievements Data — Edit this file to add your achievements
// ============================================

export type AchievementType = 'certificate' | 'award' | 'publication' | 'conference' | 'training';

export interface Achievement {
  id: string;
  type: AchievementType;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  image?: string;
  credentialUrl?: string;
}

export const achievementTypeConfig: Record<AchievementType, { label: string; color: string }> = {
  certificate: { label: 'Certificate', color: 'bg-blue-500' },
  award: { label: 'Award', color: 'bg-yellow-500' },
  publication: { label: 'Publication', color: 'bg-purple-500' },
  conference: { label: 'Conference', color: 'bg-emerald-500' },
  training: { label: 'Training', color: 'bg-pink-500' },
};

export const achievements: Achievement[] = [
  {
    id: 'ach-1',
    type: 'certificate',
    title: 'AI Prompt: วิธีการคุยกับ AI',
    issuer: 'MSU Library (สำนักวิทยบริการ)',
    date: 'November 2025',
    description: 'Completed training on AI Prompt Engineering — how to effectively communicate with AI systems.',
    image: 'public/images/certificates/Ai Prompt certificate.jpeg',
  },
  {
    id: 'ach-2',
    type: 'certificate',
    title: 'Claude 101',
    issuer: 'Anthropic',
    date: '2025',
    description: 'Completed the Claude 101 course covering fundamentals of working with Claude AI.',
    image: 'public/images/certificates/ClaudeAi certificate.jpeg',
  },
  {
    id: 'ach-3',
    type: 'certificate',
    title: 'Power BI for Beginners',
    issuer: 'Thai MOOC (Microsoft Thailand)',
    date: 'April 2026',
    description: 'Completed the Power BI for Beginners course (2 hours) covering data visualization and business intelligence fundamentals.',
    image: 'public/images/certificates/PowerBi Certificate.jpeg',
  },
  {
    id: 'ach-4',
    type: 'certificate',
    title: 'MSU English Exit Exam — CEFR B2',
    issuer: 'Mahasarakham University',
    date: 'February 2026',
    description: 'Achieved CEFR Level B2 with overall score of 61 in the MSU English Exit Examination.',
    image: 'public/images/certificates/English Certificate.jpeg',
  },
  {
    id: 'ach-5',
    type: 'certificate',
    title: 'Digital Literacy Exit Exam — Good',
    issuer: 'Computer Center, Mahasarakham University',
    date: 'February 2026',
    description: 'Scored 75/100 (Good level) in the Digital Literacy Exit Examination.',
    image: 'public/images/certificates/digital Exeam Certificate.jpeg',
  },
  {
    id: 'ach-6',
    type: 'training',
    title: 'IT Department Graduation Rehearsal',
    issuer: 'Department of Information Technology, MSU',
    date: 'April 2026',
    description: 'Participated in the Information Technology department graduation rehearsal ceremony.',
    image: 'public/images/certificates/RoleStudentFor Infomatics.jpeg',
  },
  {
    id: 'ach-7',
    type: 'training',
    title: 'AI Plus Project',
    issuer: 'Department of Information Technology, MSU',
    date: '2026',
    description: 'AI Plus Project is a project that aims to develop AI applications to solve real-world problems. It is a project that is implemented by students in the Information Technology department, MSU. The project is a collaborative project between students and faculty members in the Information Technology department, MSU.',
    image: 'public/images/certificates/aiplus.jpg',
  },
  {
    id: 'ach-8',
    type: 'training',
    title: 'AI Tools and AI Agent Workshop',
    issuer: 'MSU Library (สำนักวิทยบริการ)',
    date: '2026',
    description: 'Completed training on AI Prompt Engineering — how to effectively communicate with AI systems.',
    image: 'public/images/certificates/aitools.jpg',
  },
];
