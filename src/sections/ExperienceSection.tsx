import { experiences } from '../data/experience';
import TimelineItem from '../components/TimelineItem';
import SectionHeading from '../components/SectionHeading';

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-slate-50 py-20 lg:py-24 dark:bg-slate-800/50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="My journey through academic projects, research, and activities."
        />

        <div className="relative">
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
