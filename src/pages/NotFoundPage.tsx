import React from 'react';
import { Link } from 'react-router-dom';
import { EyeOff, Home, Phone } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { HOSPITAL_INFO } from '../data/hospitalInfo';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 text-center">
      <SEOHead
        title="Page Not Found – 404 | TOPSUN HOSPITAL"
        description="The page you are looking for does not exist. Return to TOPSUN HOSPITAL home page or contact our desk."
      />
      <div className="w-16 h-16 rounded-full bg-primary-soft text-primary flex items-center justify-center mb-4">
        <EyeOff className="w-8 h-8" />
      </div>
      <h1 className="text-3xl font-black text-[#1C2434] mb-2">404 - Page Not Found</h1>
      <p className="text-sm text-brandText-muted max-w-md mb-6 leading-relaxed">
        The requested page does not exist or may have been relocated. You can navigate back to the TOPSUN HOSPITAL home page or reach out to our team directly.
      </p>
      <div className="flex items-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center px-5 py-2.5 rounded-xl bg-primary text-white text-xs sm:text-sm font-bold hover:bg-primary-light transition-colors"
        >
          <Home className="w-4 h-4 mr-2" />
          <span>Back to Home</span>
        </Link>
        <a
          href={`tel:${HOSPITAL_INFO.primaryPhone}`}
          className="inline-flex items-center px-5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-bold hover:bg-slate-50 transition-colors"
        >
          <Phone className="w-4 h-4 mr-2 text-primary" />
          <span>Call Helpline</span>
        </a>
      </div>
    </div>
  );
};

