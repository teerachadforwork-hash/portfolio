// ============================================
// Projects Data — Edit this file to add your projects
// ============================================

export type ProjectCategory = 'all' | 'web' | 'mobile' | 'data' | 'ai';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  category: ProjectCategory[];
  techStack: string[];
  role: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projectFilters: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'data', label: 'Data' },
  { id: 'ai', label: 'AI / ML' },
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Otop website',
    description:
      'This website is intended to promote and sell local products from the community, connecting producers directly with consumers through an online platform. It aims to preserve local culture and traditions while supporting the local economy. The platform allows users to browse products, view detailed information, and purchase items directly, with seamless integration for payments and order management.',
    category: ['web'],
    techStack: ['html', 'tailwind', 'CSS', 'JavaScript', 'Bootstrap'],
    role: 'Fullstack Developer',
    liveUrl: 'https://otop-website-ji1y.vercel.app/',
    featured: true,
    image: '/images/img/otop.png',
    githubUrl: 'https://github.com/teerachadforwork-hash/OTOP-website',
  },
  {
    id: 'project-2',
    title: 'Dormitory web',
    description:
      'This website is designed to help manage dormitory operations more efficiently, making it easier for both administrators and residents to handle day-to-day tasks. It provides a centralized platform for managing resident information, room assignments, and service requests, aiming to improve convenience and organization in dormitory management.',
    category: ['web'],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    role: 'Fullstack Developer',
    githubUrl: 'https://github.com/teerachadforwork-hash/dormitory-web/tree/main',
    featured: true,
    image: '/images/img/dormitry.png',
  },
  {
    id: 'project-3',
    title: 'Agriculturist web',
    description:
      'This website is designed to help farmers and agricultural enthusiasts with information and resources related to agriculture. It provides a centralized platform for managing agricultural data, including crop information, weather conditions, and farming techniques, aiming to improve convenience and organization in agricultural management.',
    category: ['web'],
    techStack: ['HTML', 'Tailwind', 'CSS', 'JavaScript', 'Bootstrap'],
    role: 'Fullstack Developer',
    githubUrl: 'https://github.com/teerachadforwork-hash/Agriculturist-web',
    featured: true,
    image: '/images/img/farm.png',
  },
  {
    id: 'project-4',
    title: 'Flower website',
    description:
      'This website is designed to help florists and flower enthusiasts with information and resources related to flowers. It provides a centralized platform for managing flower data, including flower information, weather conditions, and farming techniques, aiming to improve convenience and organization in agricultural management.',
    category: ['web'],
    techStack: ['HTML', 'Tailwind', 'CSS', 'JavaScript', 'Bootstrap'],
    role: 'Fullstack Developer',
    githubUrl: 'https://github.com/teerachadforwork-hash/flowerwebsite/tree/main',
    featured: true,
    image: '/images/img/flowerw web.png',
  },
  {
    id: 'project-5',
    title: 'Hotel App',
    description:
      'This application is designed to help hotel administrators manage hotel operations more efficiently, making it easier for both administrators and guests to handle day-to-day tasks. It provides a centralized platform for managing hotel data, including room information, guest information, and service requests, aiming to improve convenience and organization in hotel management.',
    category: ['mobile'],
    techStack: ['Dart', 'Flutter', 'Android Studio', 'php'],
    role: 'Mobile Developer',
    githubUrl: 'https://github.com/teerachadforwork-hash/HotelApp',
    featured: true,
    image: '/images/img/hotelapp.png',
  },
];
