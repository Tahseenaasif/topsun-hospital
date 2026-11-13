import React, { useState } from 'react';
import {
  Eye,
  Sparkles,
  Activity,
  MessageSquareCheck,
  ShieldCheck,
  ScanEye,
  Glasses,
  Target,
  Gauge,
  HeartPulse,
  ShieldAlert,
  Layers,
  AlertCircle,
  Flame,
  Droplets,
  Smile,
  Wind,
  CircleDot,
  EyeOff,
  SplitSquareVertical,
  Search,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';
import { ServiceItem } from '../data/servicesData';
import { getWhatsAppUrl } from '../data/hospitalInfo';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ElementType> = {
  Eye,
  Sparkles,
  Activity,
  MessageSquareCheck,
  ShieldCheck,
  ScanEye,
  Glasses,
  Target,
  Gauge,
  HeartPulse,
  ShieldAlert,
  Layers,
  AlertCircle,
  Flame,
  Droplets,
  Smile,
  Wind,
  CircleDot,
  EyeOff,
  SplitSquareVertical,
  Search,
  CheckCircle2,
};

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [expanded, setExpanded] = useState(false);
  const IconComponent = iconMap[service.iconName] || Eye;

  const typeColorClasses = {
    'Surgical Procedure': 'bg-accent-soft text-accent border-accent/20',
    'Clinical Evaluation': 'bg-primary-soft text-primary border-primary/20',
    'Specialist Consultation': 'bg-secondary-soft text-secondary border-secondary/20',
    'Diagnostic Screening': 'bg-blue-50 text-blue-700 border-blue-200',
  }[service.serviceType] || 'bg-slate-100 text-slate-700 border-slate-200';

  const whatsappInquiryUrl = getWhatsAppUrl(
    `Hello TOPSUN Hospital, I would like to inquire about the ${service.title} (${service.serviceType}) in Madhubani.`
  );

  return (
    <article className="flex flex-col bg-white rounded-3xl border border-slate-200/90 shadow-soft hover:shadow-premium hover:border-primary/30 transition-all duration-300 overflow-hidden group">
      {/* Service Photo Header */}
      {service.image && (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Floating Icon Pill */}
          <div className="absolute bottom-3 left-4 flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-white/95 backdrop-blur-xs text-primary flex items-center justify-center shadow-md">
              <IconComponent className="w-5 h-5" />
            </div>
            <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border shadow-xs backdrop-blur-xs ${typeColorClasses}`}>
              {service.serviceType}
            </span>
          </div>

          {service.isSurgical && (
            <div className="absolute top-3 right-3">
              <span className="text-[10px] font-extrabold text-white bg-accent px-2.5 py-0.5 rounded-full shadow-sm uppercase tracking-wider">
                Surgical
              </span>
            </div>
          )}
        </div>
      )}

      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          {!service.image && (
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-primary-soft text-primary flex items-center justify-center shrink-0">
                <IconComponent className="w-5 h-5" />
              </div>
              <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${typeColorClasses}`}>
                {service.serviceType}
              </span>
            </div>
          )}

          {/* Title & Short Description */}
          <h3 className="text-lg font-bold text-[#1C2434] group-hover:text-primary transition-colors mb-2">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-brandText-muted leading-relaxed mb-4">
            {service.shortDescription}
          </p>

          {/* Expandable Clinical Details */}
          {expanded && (
            <div className="pt-3 border-t border-slate-100 text-xs space-y-3 mb-4 animate-fade-in">
              <div>
                <p className="font-bold text-slate-700 mb-1">Clinical Scope:</p>
                <p className="text-slate-600 leading-normal">{service.fullDescription}</p>
              </div>
              {service.benefits.length > 0 && (
                <div>
                  <p className="font-bold text-slate-700 mb-1">Key Care Benefits:</p>
                  <ul className="space-y-1">
                    {service.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-center text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary mr-1.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {service.whoNeedsThis.length > 0 && (
                <div>
                  <p className="font-bold text-slate-700 mb-1">Recommended For:</p>
                  <p className="text-slate-500 italic">{service.whoNeedsThis.join(' • ')}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action Footer */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs font-bold text-primary hover:text-primary-dark flex items-center gap-1 focus:outline-none"
            aria-expanded={expanded}
          >
            <span>{expanded ? 'Hide Details' : 'View Scope'}</span>
            {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          <div className="flex items-center gap-2">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-emerald-50 text-secondary hover:bg-emerald-100 transition-colors"
              title="Inquire via WhatsApp"
              aria-label={`Inquire about ${service.title} on WhatsApp`}
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <Link
              to={`/contact?service=${encodeURIComponent(service.title)}#appointment`}
              className="px-3.5 py-1.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-light transition-colors"
            >
              Book Visit
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
