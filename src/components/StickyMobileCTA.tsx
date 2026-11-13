import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HOSPITAL_INFO, getWhatsAppUrl } from '../data/hospitalInfo';

export const StickyMobileCTA: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl(
    'Hello TOPSUN Hospital, I would like to book an appointment for eye checkup/cataract consultation.'
  );

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:${HOSPITAL_INFO.primaryPhone}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-slate-100 text-primary font-medium text-[11px] active:bg-slate-200 transition-colors"
          aria-label={`Call Hospital at ${HOSPITAL_INFO.primaryPhone}`}
        >
          <Phone className="w-4 h-4 mb-0.5 text-primary" />
          <span>Call Now</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#25D366]/10 text-[#128C7E] font-medium text-[11px] active:bg-[#25D366]/20 transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 mb-0.5 text-[#25D366]" />
          <span>WhatsApp</span>
        </a>

        <Link
          to="/contact#appointment"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-primary text-white font-semibold text-[11px] active:bg-primary-dark transition-colors shadow-sm"
          aria-label="Book Appointment"
        >
          <Calendar className="w-4 h-4 mb-0.5 text-white" />
          <span>Book Visit</span>
        </Link>
      </div>
    </div>
  );
};

