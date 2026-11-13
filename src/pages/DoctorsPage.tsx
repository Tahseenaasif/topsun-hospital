import React from 'react';
import { Stethoscope, ShieldCheck, Calendar, Phone, Award, Clock } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { DoctorCard } from '../components/DoctorCard';
import { DOCTORS_DATA } from '../data/doctorsData';
import { HOSPITAL_INFO, getWhatsAppUrl } from '../data/hospitalInfo';
import { Link } from 'react-router-dom';

export const DoctorsPage: React.FC = () => {
  const physiciansSchema = DOCTORS_DATA.map((doctor) => ({
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: doctor.name,
    jobTitle: doctor.designation,
    description: doctor.description,
    medicalSpecialty: doctor.department,
    hospitalAffiliation: {
      '@type': 'MedicalOrganization',
      name: HOSPITAL_INFO.hospitalName,
      address: HOSPITAL_INFO.address.fullAddress,
    },
  }));

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Doctors & Medical Team | TOPSUN HOSPITAL – Eye Care Centre Madhubani"
        description="Meet the doctors of TOPSUN HOSPITAL, Madhubani. Consultant Ophthalmologist Dr. J.D. Mandal (MBBS, D.O.M.S.), Consultant Anesthesiologist Dr. Khurshid (MBBS, MD), Dr. Ashwini Bhardwaj (MBBS, M.M.C.H.), and Dr. MD Merajul Hoda (MBBS, D.M.CH.)."
        canonicalPath="/doctors"
        keywords={[
          'Dr. J.D. Mandal Ophthalmologist',
          'Eye Specialist in Madhubani',
          'Cataract Surgeon Madhubani',
          'Dr. Khurshid Anesthesiologist',
          'TOPSUN Hospital Doctors',
          'Eye Doctor Rahika Road',
        ]}
        schemaData={physiciansSchema}
      />

      {/* Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-200">
        <Breadcrumbs items={[{ label: 'Our Doctors', path: '/doctors' }]} />
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-primary-soft/50 via-white to-white pt-10 pb-12 sm:pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary-soft px-3.5 py-1.5 rounded-full border border-primary/20">
              Experienced Clinical Care
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C2434] tracking-tight mt-3">
              Our Medical Team & Specialists
            </h1>
            <p className="mt-3.5 text-base sm:text-lg text-brandText-muted leading-relaxed">
              Meet our qualified medical professionals dedicated to restoring clear sight, maintaining strict surgical safety, and delivering patient-focused healthcare in Madhubani, Bihar.
            </p>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-12 sm:py-16 bg-brandBgLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {DOCTORS_DATA.map((doctor, index) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                featured={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Integrity & Credential Verification Notice */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="text-sm font-bold text-primary mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-secondary" />
                <span>Verified Credentials</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                All degrees and registrations presented on this portal accurately reflect medical qualifications recognized by governing medical councils in India.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="text-sm font-bold text-primary mb-1 flex items-center gap-1.5">
                <Stethoscope className="w-4 h-4 text-primary" />
                <span>Multidisciplinary Approach</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ophthalmological treatment is strengthened by in-house anesthesia and general clinical evaluation, ensuring high patient safety before surgery.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="text-sm font-bold text-primary mb-1 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-accent" />
                <span>Scheduled OPD Hours</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Regular outpatient consultations run Monday to Saturday from 9:00 AM to 6:00 PM at Basauli, Rahika Road, Madhubani.
              </p>
            </div>
          </div>

          {/* Consultation CTA Card */}
          <div className="mt-10 bg-primary text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div>
              <span className="font-hindi text-emerald-300 font-bold text-sm">
                {HOSPITAL_INFO.tagline}
              </span>
              <h3 className="text-xl sm:text-2xl font-black mt-1">
                Consult With Our Specialists Today
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-xl">
                Get an expert evaluation for cataracts, blurry vision, or routine eye checks at TOPSUN HOSPITAL.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/contact#appointment"
                className="px-6 py-3 rounded-xl bg-white text-primary text-xs sm:text-sm font-bold hover:bg-slate-100 transition-colors shadow-sm"
              >
                Schedule Appointment
              </Link>
              <a
                href={getWhatsAppUrl('Hello TOPSUN Hospital, I would like to book a doctor consultation.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-secondary text-white text-xs sm:text-sm font-bold hover:bg-secondary-dark transition-colors shadow-sm"
              >
                WhatsApp Desk
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

