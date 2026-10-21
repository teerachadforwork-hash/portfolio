import AnimatedSection from './AnimatedSection';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <AnimatedSection className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      <div
        className={`mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400 mx-auto">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
