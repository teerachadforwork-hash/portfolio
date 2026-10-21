import { Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/personal';
import ContactForm from '../components/ContactForm';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';

// Custom SVG icons for brand logos
function GitHubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: GitHubIcon,
    label: 'GitHub',
    value: personalInfo.social.github.replace('https://', ''),
    href: personalInfo.social.github,
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: personalInfo.social.linkedin.replace('https://', ''),
    href: personalInfo.social.linkedin,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personalInfo.location,
    href: undefined,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-slate-50 py-20 lg:py-24 dark:bg-slate-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a question or want to work together? Feel free to reach out!"
        />

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Contact Info */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="space-y-4">
              {contactDetails.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-400">
                    <item.icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block truncate text-sm text-slate-600 transition-colors hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
