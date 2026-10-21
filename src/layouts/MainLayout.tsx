import type { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';

interface MainLayoutProps {
  children: ReactNode;
  theme: string;
  toggleTheme: () => void;
}

export default function MainLayout({ children, theme, toggleTheme }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-slate-50">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>{children}</main>
      <ScrollToTop />
    </div>
  );
}
