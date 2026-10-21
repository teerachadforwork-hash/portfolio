import { GraduationCap, Target, Heart, User } from 'lucide-react';
import { personalInfo } from '../data/personal';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me better — my background, education, and what drives me."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: Bio & Education */}
          <AnimatedSection direction="left">
            <div className="space-y-6">
              {/* Personal Bio */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-400">
                    <User size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Who I Am
                  </h3>
                </div>
                <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                  {personalInfo.bio}
                </p>
              </div>

              {/* Education */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                    <GraduationCap size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Education
                  </h3>
                </div>
                <div className="flex items-start gap-4">
                  <img
                    src={personalInfo.education.logo}
                    alt={personalInfo.education.university}
                    className="h-14 w-14 shrink-0 rounded-xl object-contain"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      {personalInfo.education.university}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {personalInfo.education.faculty}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Major: {personalInfo.education.major}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-500">
                      {personalInfo.education.year} • {personalInfo.education.period}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-500">
                      Student ID: {personalInfo.education.studentId}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Interests & Career Goals */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-6">
              {/* Interests */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-50 text-pink-600 dark:bg-pink-500/10 dark:text-pink-400">
                    <Heart size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Interests
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.interests.map((interest) => (
                    <span
                      key={interest}
                      className="rounded-full bg-gradient-to-r from-primary-50 to-accent-50 px-4 py-2 text-sm font-medium text-primary-700 dark:from-primary-500/10 dark:to-accent-500/10 dark:text-primary-300"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Career Goals */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
                    <Target size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Career Goals
                  </h3>
                </div>
                <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                  {personalInfo.careerGoals}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">
                  <p className="text-2xl font-bold gradient-text">6+</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Certificates</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">
                  <p className="text-2xl font-bold gradient-text">6+</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Projects</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
