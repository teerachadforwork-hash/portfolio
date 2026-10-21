import { motion } from 'framer-motion';
import type { Experience } from '../data/experience';
import { experienceTypeConfig } from '../data/experience';

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export default function TimelineItem({ experience, index }: TimelineItemProps) {
  const typeConfig = experienceTypeConfig[experience.type];

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative flex gap-6 pb-10 last:pb-0"
    >
      {/* Timeline Line & Dot */}
      <div className="flex flex-col items-center">
        <div
          className={`z-10 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${typeConfig.color} ring-4 ring-white dark:ring-slate-900`}
        />
        <div className="w-0.5 flex-1 bg-slate-200 dark:bg-slate-700" />
      </div>

      {/* Content Card */}
      <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full ${typeConfig.color} px-3 py-1 text-xs font-semibold text-white`}
          >
            {typeConfig.label}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-500">
            {experience.period}
          </span>
        </div>

        <h3 className="mb-1 text-lg font-bold text-slate-900 dark:text-white">
          {experience.title}
        </h3>
        <p className="mb-3 text-sm font-medium text-primary-600 dark:text-primary-400">
          {experience.organization}
        </p>
        <p className="mb-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {experience.description}
        </p>

        {/* Highlights */}
        <ul className="mb-3 space-y-1.5">
          {experience.highlights.map((highlight, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
              {highlight}
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        {experience.techStack && experience.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {experience.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
