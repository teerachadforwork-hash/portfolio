import { Heart } from 'lucide-react';
import { personalInfo, navLinks } from '../data/personal';
import SocialLinks from '../components/SocialLinks';

export default function Footer() {
  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
              <span className="gradient-text">&lt;</span>
              {personalInfo.name.first}
              <span className="gradient-text">/&gt;</span>
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {personalInfo.title}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-slate-900 dark:text-white">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-left text-sm text-slate-600 transition-colors hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-slate-900 dark:text-white">
              Connect
            </h4>
            <SocialLinks size={18} />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 flex flex-col items-center gap-2 border-t border-slate-200 pt-6 text-center dark:border-slate-800">
          <p className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-500">
            Made with <Heart size={14} className="text-red-500" /> by{' '}
            {personalInfo.name.first} {personalInfo.name.last}
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-600">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
