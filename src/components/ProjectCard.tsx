import { motion } from 'framer-motion';
import { ExternalLink, Layers } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

// GitHub SVG icon (brand icons removed from lucide-react)
function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

// Generate gradient background for projects without images
const gradients = [
  'from-blue-500 to-purple-600',
  'from-emerald-500 to-cyan-600',
  'from-orange-500 to-pink-600',
  'from-violet-500 to-indigo-600',
  'from-rose-500 to-orange-500',
  'from-cyan-500 to-blue-600',
];

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const gradient = gradients[index % gradients.length];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
    >
      {/* Image / Gradient Header */}
      <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${gradient}`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Layers size={48} className="text-white/50" />
          </div>
        )}
        {/* Category badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {project.category
            .filter((c) => c !== 'all')
            .map((cat) => (
              <span
                key={cat}
                className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
              >
                {cat.toUpperCase()}
              </span>
            ))}
        </div>
        {project.featured && (
          <span className="absolute top-3 right-3 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-yellow-900">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        {/* Role */}
        <p className="mb-3 text-xs font-semibold text-primary-600 dark:text-primary-400">
          {project.role}
        </p>

        {/* Tech Stack */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-auto flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
            >
              <GitHubIcon size={16} />
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110 dark:from-primary-400 dark:to-primary-500"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
