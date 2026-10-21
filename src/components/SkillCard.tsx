import { icons } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Skill } from '../data/skills';

interface SkillCardProps {
  skill: Skill;
  index: number;
  colorClass: string;
}

export default function SkillCard({ skill, index, colorClass }: SkillCardProps) {
  // Dynamically get icon from Lucide
  const IconComponent = icons[skill.icon as keyof typeof icons];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-lg hover:border-primary-200 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-primary-500/30"
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${colorClass} text-white shadow-lg`}
      >
        {IconComponent ? <IconComponent size={22} /> : <span className="text-lg">⚡</span>}
      </div>
      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
        {skill.name}
      </span>
    </motion.div>
  );
}
