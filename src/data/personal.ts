// ============================================
// Personal Information — Edit this file to customize your portfolio
// ============================================

export const personalInfo = {
  name: {
    first: 'Teerachad',
    last: 'Phoonphut',
    thai: 'ธีระชาติ พูลพัฒน์',
  },
  title: 'Personal Portfolio',
  subtitle: 'Information Technology',
  bio: 'Passionate IT student at Mahasarakham University with a strong interest in Data Analytics, Artificial Intelligence, and Web Development. I love turning data into actionable insights and building modern web applications that solve real-world problems.',
  location: 'Maha Sarakham, Thailand',
  email: 'teerachad.forwork@gmail.com',
  phone: '0983085298',
  resumeUrl: '#',
  social: {
    github: 'https://github.com/teerachadforwork-hash',
    linkedin: 'https://linkedin.com/in/teerachat-phoonphat-4653b5419',
  },
  profileImage: '/images/profile/Profile.jpeg',
  education: {
    university: 'Mahasarakham University (MSU)',
    faculty: 'Faculty of Informatics',
    major: 'Information Technology',
    studentId: '66011211005',
    year: '4th Year',
    gpa: '3.52',
    period: '2023 — Present',
    logo: '/images/certificates/MSULOGO.webp',
  },
  interests: [
    'Data Analytics',
    'Artificial Intelligence',
    'Machine Learning',
    'Web Development',
    'Cloud Computing',
    'UI/UX Design',
  ],
  careerGoals:
    'To become a skilled Data Analyst / AI Developer who can leverage technology to drive business decisions. I am seeking internship opportunities to apply my skills in real-world projects and continue growing as a technology professional.',
} as const;

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
] as const;
