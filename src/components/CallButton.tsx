import React from 'react';
import { PhoneCall } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalInfo';

interface CallButtonProps {
  phone?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showIcon?: boolean;
  label?: string;
}

export const CallButton: React.FC<CallButtonProps> = ({
  phone = HOSPITAL_INFO.primaryPhone,
  variant = 'primary',
  size = 'md',
  className = '',
  showIcon = true,
  label,
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3.5 text-base',
  }[size];

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-light shadow-sm hover:shadow',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark shadow-sm hover:shadow',
    outline: 'border border-primary text-primary hover:bg-primary-soft',
    white: 'bg-white text-primary hover:bg-slate-50 shadow-sm',
  }[variant];

  return (
    <a
      href={`tel:${phone}`}
      className={`inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 active:scale-95 ${sizeClasses} ${variantClasses} ${className}`}
      aria-label={`Call TOPSUN Hospital at ${phone}`}
    >
      {showIcon && <PhoneCall className="w-4 h-4 mr-2 shrink-0" />}
      <span>{label || `Call ${phone}`}</span>
    </a>
  );
};

