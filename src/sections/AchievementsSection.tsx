import { achievements } from '../data/achievements';
import AchievementCard from '../components/AchievementCard';
import SectionHeading from '../components/SectionHeading';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Achievements & Certificates"
          subtitle="Certifications, training, and accomplishments throughout my academic journey."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
