import React from 'react';
import { Doctor } from '../types';
import { Stethoscope, Calendar, Check, MessageSquare, BadgeCheck, Clock, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getWhatsAppUrl } from '../data/hospitalInfo';

interface DoctorCardProps {
  doctor: Doctor;
  featured?: boolean;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, featured = false }) => {
  const whatsappConsultUrl = getWhatsAppUrl(
    `Hello TOPSUN Hospital, I would like to schedule an eye care consultation with ${doctor.name} (${doctor.qualifications}).`
  );

  // Physician JSON-LD
  const physicianSchema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: doctor.name,
    jobTitle: doctor.designation,
    description: doctor.description,
    medicalSpecialty: doctor.department,
    hospitalAffiliation: {
      '@type': 'MedicalOrganization',
      name: 'TOPSUN HOSPITAL',
      address: 'Basauli, Rahika Road, Madhubani, Bihar, India',
    },
  };

  return (
    <article
      className={`relative bg-white rounded-3xl border transition-all duration-300 flex flex-col h-full overflow-hidden ${
        featured
          ? 'border-primary/40 shadow-premium ring-2 ring-primary/10'
          : 'border-slate-200/90 shadow-soft hover:shadow-premium hover:border-slate-300'
      }`}
    >
      <script type="application/ld+json">
        {JSON.stringify(physicianSchema)}
      </script>

      {featured && (
        <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-primary to-primary-light text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-sm tracking-wider uppercase flex items-center gap-1">
          <BadgeCheck className="w-3.5 h-3.5 text-secondary-light" />
          <span>Lead Ophthalmologist</span>
        </div>
      )}

      {/* Doctor Photo Header */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        {doctor.image ? (
          <img
            src={doctor.image}
            alt={`${doctor.name} - ${doctor.designation}`}
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${doctor.avatarColor} text-white flex flex-col items-center justify-center p-6`}
          >
            <Stethoscope className="w-12 h-12 text-white/80 mb-2" />
            <span className="text-xl font-bold tracking-wider uppercase">
              {doctor.name}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        {/* Doctor Name & Designation Overlay */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-secondary/90 text-white backdrop-blur-xs mb-1">
            {doctor.qualifications}
          </span>
          <h3 className="text-xl font-black text-white leading-tight">
            {doctor.name}
          </h3>
          <p className="text-xs text-slate-200 font-medium">
            {doctor.designation}
          </p>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Department */}
          <div className="mb-3">
            <span className="inline-block text-[11px] font-semibold text-secondary bg-secondary-soft px-3 py-1 rounded-lg border border-secondary/20">
              {doctor.department}
            </span>
          </div>

          {/* Professional Description */}
          <p className="text-xs sm:text-sm text-brandText-muted leading-relaxed mb-4">
            {doctor.description}
          </p>

          {/* Key Clinical Focus Areas */}
          <div className="mb-5">
            <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-primary" />
              <span>Clinical Specialization</span>
            </p>
            <ul className="space-y-1.5">
              {doctor.focusAreas.map((item, idx) => (
                <li key={idx} className="flex items-start text-xs text-slate-600">
                  <Check className="w-3.5 h-3.5 text-secondary mr-2 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          {/* Availability Badge */}
          <div className="bg-slate-50 rounded-2xl p-3 mb-5 border border-slate-100 flex items-start gap-2.5 text-xs text-slate-700">
            <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span className="font-medium leading-tight">{doctor.consultationDays}</span>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
            <a
              href={whatsappConsultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-secondary/30 bg-secondary-soft text-secondary hover:bg-secondary hover:text-white transition-all text-xs font-bold"
              aria-label={`Inquire about ${doctor.name} on WhatsApp`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <Link
              to={`/contact?doctor=${encodeURIComponent(doctor.name)}#appointment`}
              className="flex items-center justify-center py-2.5 px-3 rounded-xl bg-primary text-white hover:bg-primary-light transition-all text-xs font-bold shadow-sm"
            >
              <span>Consult Doctor</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
