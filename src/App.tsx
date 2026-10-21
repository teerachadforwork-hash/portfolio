import { useTheme } from './hooks/useTheme';
import MainLayout from './layouts/MainLayout';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import AchievementsSection from './sections/AchievementsSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <MainLayout theme={theme} toggleTheme={toggleTheme}>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </MainLayout>
  );
}

export default App;
