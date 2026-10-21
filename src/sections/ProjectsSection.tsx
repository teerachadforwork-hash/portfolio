import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { projects, projectFilters, type ProjectCategory } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import { cn } from '../utils/cn';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="projects" className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projects"
          subtitle="A collection of projects I've worked on — from web apps to AI models."
        />

        {/* Filter Buttons */}
        <AnimatedSection className="mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {projectFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  'rounded-xl px-5 py-2.5 text-sm font-medium transition-all',
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25 dark:from-primary-400 dark:to-primary-500'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-slate-500 dark:text-slate-400 mt-8">
            No projects found in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
