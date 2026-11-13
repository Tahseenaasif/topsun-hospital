import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  badgeHindi?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  badgeColor?: 'primary' | 'secondary' | 'accent';
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeHindi,
  title,
  subtitle,
  align = 'center',
  badgeColor = 'primary',
  light = false,
}) => {
  const badgeClasses = {
    primary: 'bg-primary-soft text-primary border-primary/20',
    secondary: 'bg-secondary-soft text-secondary border-secondary/20',
    accent: 'bg-accent-soft text-accent border-accent/20',
  }[badgeColor];

  return (
    <div className={`mb-10 sm:mb-14 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-2xl'}`}>
      {(badge || badgeHindi) && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border mb-3 ${badgeClasses}`}>
          {badge && <span>{badge}</span>}
          {badgeHindi && <span className="font-hindi normal-case font-bold text-secondary">{badgeHindi}</span>}
        </div>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
          light ? 'text-white' : 'text-[#1C2434]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3.5 text-base sm:text-lg leading-relaxed ${
            light ? 'text-slate-200' : 'text-brandText-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

