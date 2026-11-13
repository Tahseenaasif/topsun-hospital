import React from 'react';
import { Link } from 'react-router-dom';
import {
  Eye,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ExternalLink,
  ChevronRight,
  Heart,
} from 'lucide-react';
import { HOSPITAL_INFO, getWhatsAppUrl } from '../data/hospitalInfo';
import { DOCTORS_DATA } from '../data/doctorsData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#150c33] text-slate-300 pt-16 pb-24 md:pb-12 border-t border-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Column 1: Hospital Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-md">
                <Eye className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">TOPSUN </span>
                <span className="text-xl font-bold text-slate-200 tracking-tight">HOSPITAL</span>
                <p className="text-[11px] font-semibold text-secondary-light tracking-wide uppercase">
                  Advance Eye Care Centre
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-3">
              <p className="font-hindi text-emerald-300 font-bold text-sm">
                {HOSPITAL_INFO.tagline}
              </p>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-secondary-light" />
                <span>Govt. Reg. No: <strong>{HOSPITAL_INFO.regNumber}</strong></span>
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Specialized ophthalmology hospital in Madhubani providing compassionate, advanced cataract surgery (phacoemulsification) and comprehensive eye healthcare.
            </p>

            <div className="pt-1 flex items-center gap-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/20 text-[#25D366] text-xs font-semibold hover:bg-[#25D366]/30 transition-colors"
              >
                <span>WhatsApp Desk</span>
              </a>
              <a
                href={`tel:${HOSPITAL_INFO.primaryPhone}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-soft text-primary-light text-xs font-semibold hover:bg-white/15 transition-colors"
              >
                <Phone className="w-3 h-3" />
                <span>Call Hospital</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links & Cataract */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-secondary pl-2.5">
              Cataract & Eye Care
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  to="/cataract-surgery"
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 text-white font-medium"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-secondary" />
                  <span>Cataract Surgery (Phaco)</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Comprehensive Eye Exam</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Diabetic Eye Screening</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Glaucoma & Eye Pressure</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Pediatric Eye Checkup</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Refractive Error Assessment</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Medical Team */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-primary-light pl-2.5">
              Medical Team
            </h4>
            <ul className="space-y-3 text-xs">
              {DOCTORS_DATA.map((doc) => (
                <li key={doc.id} className="border-b border-slate-800/80 pb-2">
                  <Link to="/doctors" className="group">
                    <p className="font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                      {doc.name}
                    </p>
                    <p className="text-slate-400 text-[11px]">
                      {doc.qualifications} • {doc.designation}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hospital Location */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-accent pl-2.5">
              Hospital Location & OPD
            </h4>

            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>{HOSPITAL_INFO.address.fullAddress}</span>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <Clock className="w-4 h-4 text-secondary-light shrink-0 mt-0.5" />
              <div>
                <p><strong>OPD:</strong> Mon – Sat: 9:00 AM – 6:00 PM</p>
                <p className="text-[11px] text-slate-400">Emergency support & Sunday inquiries</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <div>
                  <a href={`tel:${HOSPITAL_INFO.phones[0]}`} className="hover:text-white font-bold">
                    +91 {HOSPITAL_INFO.phones[0]}
                  </a>
                </div>
                <div>
                  <a href={`tel:${HOSPITAL_INFO.phones[1]}`} className="hover:text-white font-bold">
                    +91 {HOSPITAL_INFO.phones[1]}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <Mail className="w-4 h-4 text-slate-400 shrink-0" />
              <a href={`mailto:${HOSPITAL_INFO.email}`} className="hover:text-white">
                {HOSPITAL_INFO.email}
              </a>
            </div>

            <div className="pt-2">
              <a
                href={HOSPITAL_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                <span>Get Driving Directions on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer & Local SEO keywords tag line */}
        <div className="pt-8 pb-4 text-[11px] text-slate-500 space-y-2">
          <p className="leading-relaxed">
            <strong>Medical Disclaimer:</strong> Information published on this website is for patient education and general health awareness only. It should not replace professional medical diagnosis, individualized clinical counsel, or emergency care from a certified ophthalmologist.
          </p>
          <p className="text-slate-500">
            <strong>Local Healthcare Services:</strong> Advanced Eye Hospital in Madhubani • Phacoemulsification Cataract Surgery in Madhubani • Eye Specialist on Rahika Road • Ophthalmology Clinic Bihar • Registration 658/2026.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} TOPSUN HOSPITAL – Advance Eye Care Centre. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-white">About Us</Link>
            <Link to="/services" className="hover:text-white">Services</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
            <a href="https://www.topsunhospital.in" className="hover:text-white">www.topsunhospital.in</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

