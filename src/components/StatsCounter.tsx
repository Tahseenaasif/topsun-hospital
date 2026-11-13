import React from 'react';
import { Eye, ShieldCheck, Award, Clock, Heart, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalInfo';

interface StatItem {
  icon: React.ElementType;
  value: string;
  label: string;
  sublabel: string;
}

const stats: StatItem[] = [
  {
    icon: Eye,
    value: '15,000+',
    label: 'Eyes Restored',
    sublabel: 'Successful cataract & sight operations',
  },
  {
    icon: Sparkles,
    value: '100%',
    label: 'Stitchless Phaco',
    sublabel: 'Sub-2.2mm micro-incision technique',
  },
  {
    icon: Clock,
    value: '15 Mins',
    label: 'Procedure Time',
    sublabel: 'Same-day walk-home daycare surgery',
  },
  {
    icon: ShieldCheck,
    value: '25+ Years',
    label: 'Combined Experience',
    sublabel: 'Under Dr. J.D. Mandal & Dr. Khurshid',
  },
];

export const StatsCounter: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-primary via-primary-dark to-[#150c33] text-white py-12 sm:py-16 relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-medical-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-xs hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 text-secondary-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                  {item.value}
                </div>
                <div className="text-sm font-bold text-emerald-300 mt-1">
                  {item.label}
                </div>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {item.sublabel}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

