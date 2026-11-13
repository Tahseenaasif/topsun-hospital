import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { HOSPITAL_INFO, getWhatsAppUrl } from '../data/hospitalInfo';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappLink = getWhatsAppUrl(
    'Namaste TOPSUN Hospital, I would like to consult with an eye specialist / inquire about cataract surgery.'
  );

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-20 md:bottom-6 right-5 z-40 flex flex-col items-end pointer-events-none">
      {/* Mini Tooltip / Balloon on hover or toggle */}
      {showTooltip && (
        <div className="pointer-events-auto mb-2 bg-white text-[#1C2434] p-3.5 rounded-2xl shadow-floating border border-slate-100 max-w-xs text-xs animate-fade-in relative mr-1">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-slate-400 hover:text-slate-600 p-1"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="font-bold text-primary flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-secondary inline-block animate-ping" />
            <span>Chat with TOPSUN Hospital</span>
          </div>
          <p className="mt-1 text-brandText-muted leading-tight">
            Need quick cataract advice or OPD appointment? Speak directly with our care desk in Madhubani.
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="pointer-events-auto group flex items-center gap-2.5 bg-[#25D366] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-2xl hover:bg-[#20ba59] transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label={`Chat on WhatsApp with TOPSUN Hospital at ${HOSPITAL_INFO.whatsappNumber}`}
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-current text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-accent rounded-full border-2 border-white" />
        </div>
        <span className="hidden sm:inline-block font-bold text-sm tracking-wide">
          WhatsApp Us
        </span>
      </a>
    </aside>
  );
};

