// ============================================
// Skills Data — Edit this file to customize your skills
// ============================================

export interface Skill {
  name: string;
  icon: string; // Lucide icon name
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  color: string; // Tailwind color class
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    icon: 'Code2',
    color: 'from-blue-500 to-blue-600',
    skills: [
      { name: 'Python', icon: 'FileCode' },
      { name: 'JavaScript', icon: 'FileJson' },
      { name: 'TypeScript', icon: 'FileType' },
      { name: 'Java', icon: 'Coffee' },
      { name: 'C/C++', icon: 'Binary' },
      { name: 'PHP', icon: 'FileCode' },
    ],
  },
  {
    id: 'web',
    title: 'Web Development',
    icon: 'Globe',
    color: 'from-emerald-500 to-emerald-600',
    skills: [
      { name: 'HTML5', icon: 'Code' },
      { name: 'CSS3', icon: 'Palette' },
      { name: 'React', icon: 'Atom' },
      { name: 'Next.js', icon: 'SquareArrowRight' },
      { name: 'Tailwind CSS', icon: 'Wind' },
      { name: 'Node.js', icon: 'Server' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: 'Database',
    color: 'from-orange-500 to-orange-600',
    skills: [
      { name: 'MySQL', icon: 'Database' },
      { name: 'PostgreSQL', icon: 'Database' },
      { name: 'MongoDB', icon: 'Leaf' },
      { name: 'Firebase', icon: 'Flame' },
      { name: 'SQL Server', icon: 'Server' },
    ],
  },
  {
    id: 'data',
    title: 'Data Analytics',
    icon: 'BarChart3',
    color: 'from-purple-500 to-purple-600',
    skills: [
      { name: 'Power BI', icon: 'BarChart3' },
      { name: 'Excel', icon: 'Sheet' },
      { name: 'Pandas', icon: 'Table' },
      { name: 'NumPy', icon: 'Calculator' },
      { name: 'Data Visualization', icon: 'PieChart' },
      { name: 'Statistical Analysis', icon: 'TrendingUp' },
    ],
  },
  {
    id: 'ai',
    title: 'Machine Learning / AI',
    icon: 'Brain',
    color: 'from-pink-500 to-pink-600',
    skills: [
      { name: 'TensorFlow', icon: 'Cpu' },
      { name: 'Scikit-learn', icon: 'Cog' },
      { name: 'NLP', icon: 'MessageSquare' },
      { name: 'PyTorch', icon: 'Eye' },
      { name: 'Prompt Engineering', icon: 'Sparkles' },
      { name: 'LLMs', icon: 'Bot' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Technologies',
    icon: 'Wrench',
    color: 'from-cyan-500 to-cyan-600',
    skills: [
      { name: 'Git & GitHub', icon: 'GitBranch' },
      { name: 'VS Code', icon: 'Code2' },
      { name: 'Docker', icon: 'Container' },
      { name: 'Figma', icon: 'Figma' },
      { name: 'Postman', icon: 'Send' },
      { name: 'Linux', icon: 'Terminal' },
    ],
  },
];
