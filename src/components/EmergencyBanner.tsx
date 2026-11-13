import React from 'react';
import { AlertCircle, Phone, Clock, ShieldAlert, ArrowRight } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalInfo';

export const EmergencyBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 via-rose-700 to-red-800 text-white py-2.5 px-4 text-xs font-medium border-b border-red-500 shadow-sm relative z-30">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
          </span>
          <span className="font-extrabold uppercase tracking-wide bg-white/20 px-2 py-0.5 rounded text-[10px]">
            Acute Eye Emergency
          </span>
          <span className="text-white/95 text-xs sm:text-[13px]">
            Sudden vision loss, chemical splash, or penetrating eye injury? Call our emergency on-call team immediately.
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${HOSPITAL_INFO.primaryPhone}`}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-red-700 font-black text-xs hover:bg-slate-100 transition-colors shadow-xs"
          >
            <Phone className="w-3.5 h-3.5 fill-red-700" />
            <span>Emergency: {HOSPITAL_INFO.primaryPhone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

