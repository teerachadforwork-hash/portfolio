import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X } from 'lucide-react';
import type { Achievement } from '../data/achievements';
import { achievementTypeConfig } from '../data/achievements';

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

export default function AchievementCard({ achievement, index }: AchievementCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const typeConfig = achievementTypeConfig[achievement.type];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        whileHover={{ y: -4 }}
        onClick={() => achievement.image && setIsModalOpen(true)}
        className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
      >
        {/* Image */}
        {achievement.image ? (
          <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-700">
            <img
              src={achievement.image}
              alt={achievement.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        ) : (
          <div className="flex h-32 items-center justify-center bg-gradient-to-br from-primary-500 to-accent-500">
            <Award size={40} className="text-white/60" />
          </div>
        )}

        {/* Content */}
        <div className="p-4">
          <div className="mb-2 flex items-center gap-2">
            <span
              className={`rounded-full ${typeConfig.color} px-2.5 py-0.5 text-xs font-semibold text-white`}
            >
              {typeConfig.label}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-500">
              {achievement.date}
            </span>
          </div>
          <h3 className="mb-1 text-sm font-bold leading-snug text-slate-900 dark:text-white">
            {achievement.title}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">{achievement.issuer}</p>
          {achievement.description && (
            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-2">
              {achievement.description}
            </p>
          )}
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && achievement.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-800"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              <img
                src={achievement.image}
                alt={achievement.title}
                className="max-h-[85vh] w-full object-contain"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {achievement.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {achievement.issuer} • {achievement.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
