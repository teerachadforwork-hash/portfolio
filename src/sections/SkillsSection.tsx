import { useState } from 'react';
import { icons } from 'lucide-react';
import { skillCategories } from '../data/skills';
import SkillCard from '../components/SkillCard';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import { cn } from '../utils/cn';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const active = skillCategories.find((c) => c.id === activeCategory) ?? skillCategories[0];

  return (
    <section id="skills" className="bg-slate-50 py-20 lg:py-24 dark:bg-slate-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Tools and technologies I work with across different domains."
        />

        {/* Category Tabs */}
        <AnimatedSection className="mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {skillCategories.map((cat) => {
              const IconComponent = icons[cat.icon as keyof typeof icons];
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    'inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all',
                    activeCategory === cat.id
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25 dark:from-primary-400 dark:to-primary-500'
                      : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'
                  )}
                >
                  {IconComponent && <IconComponent size={16} />}
                  {cat.title}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {active.skills.map((skill, index) => (
            <SkillCard
              key={`${active.id}-${skill.name}`}
              skill={skill}
              index={index}
              colorClass={active.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
