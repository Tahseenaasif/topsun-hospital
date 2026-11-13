import React from 'react';
import { Eye, ShieldCheck, Heart, Target, MapPin, Award, CheckCircle2, Phone, Calendar, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { HOSPITAL_INFO, getWhatsAppUrl } from '../data/hospitalInfo';
import { DOCTORS_DATA } from '../data/doctorsData';
import { FACILITIES_DATA } from '../data/facilitiesData';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEOHead
        title="About TOPSUN HOSPITAL | Advance Eye Care Centre – Madhubani, Bihar"
        description="Learn about TOPSUN HOSPITAL (Reg. No. 658/2026) in Madhubani, Bihar. Our mission, values, ophthalmic leadership by Dr. J.D. Mandal, and commitment to accessible cataract care and patient vision health."
        canonicalPath="/about"
        keywords={[
          'About TOPSUN Hospital',
          'Eye Hospital in Madhubani',
          'Best Eye Hospital Madhubani',
          'Cataract Centre Rahika Road',
          'Hospital Registration 658/2026',
        ]}
      />

      {/* Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-200">
        <Breadcrumbs items={[{ label: 'About Hospital', path: '/about' }]} />
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-primary-soft/50 via-white to-white pt-10 pb-12 sm:pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-soft text-secondary border border-secondary/20 text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Reg. No: {HOSPITAL_INFO.regNumber} • Bihar</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C2434] tracking-tight">
              About TOPSUN HOSPITAL
            </h1>
            <p className="mt-2 text-lg font-bold text-secondary font-hindi">
              {HOSPITAL_INFO.tagline}
            </p>
            <p className="mt-3.5 text-base sm:text-lg text-brandText-muted leading-relaxed">
              TOPSUN HOSPITAL – Advance Eye Care Centre was founded to bring modern ophthalmic surgical technology, accurate optical diagnostics, and ethical eye care to patients across Madhubani and the wider Mithilanchal region.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction & Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary-soft px-3.5 py-1.5 rounded-full border border-primary/20">
                Hospital Background
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C2434] leading-tight">
                Dedicated to Preserving & Restoring Your Vision
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Located conveniently on Rahika Road in Basauli, Madhubani, TOPSUN HOSPITAL is a specialized ophthalmology facility designed from the ground up for eye care safety, diagnostic precision, and surgical sterility.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the medical direction of Consultant Ophthalmologist <strong>Dr. J.D. Mandal (MBBS, D.O.M.S.)</strong> and Consultant Anesthesiologist <strong>Dr. Khurshid (MBBS, MD)</strong>, our centre has eliminated the need for patients in northern Bihar to travel vast distances to major metropolitan centers for advanced micro-incision cataract surgery and routine ophthalmology management.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl">
                  <p className="text-xs text-slate-500 font-semibold">Government Registered</p>
                  <p className="text-base font-extrabold text-primary mt-0.5">Reg. No. 658/2026</p>
                  <p className="text-[11px] text-slate-500 mt-1">Authorized health institution adhering to state healthcare standards.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl">
                  <p className="text-xs text-slate-500 font-semibold">Specialization</p>
                  <p className="text-base font-extrabold text-secondary mt-0.5">Advanced Cataract & Eye Care</p>
                  <p className="text-[11px] text-slate-500 mt-1">Focusing strictly on ocular diagnosis, lens surgery, and preventive sight preservation.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-primary via-primary-dark to-[#150c33] text-white rounded-3xl p-8 shadow-floating">
              <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-secondary-light" />
                <span>Our Core Clinical Commitments</span>
              </h3>
              <ul className="space-y-4 text-xs sm:text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Sterility & Infection Control:</strong>
                    <span className="text-slate-300">Strict operating room protocols and autoclaved surgical instrumentation for all procedures.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Ethical Consultation:</strong>
                    <span className="text-slate-300">We do not push unnecessary surgeries or exaggerate conditions. Surgical recommendations are made solely when clinically indicated.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Dedicated Anesthesia Oversight:</strong>
                    <span className="text-slate-300">Dr. Khurshid provides continuous monitoring of vitals, blood pressure, and comfort during procedures.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-brandBgLight border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-soft">
              <div className="w-12 h-12 rounded-2xl bg-primary-soft text-primary flex items-center justify-center mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-[#1C2434] mb-3">
                Our Vision (हमारा दृष्टिकोण)
              </h3>
              <p className="text-sm sm:text-base text-brandText-muted leading-relaxed">
                To be the most trusted and technically proficient eye care institution in northern Bihar, empowering individuals and elderly patients with healthy, clear sight, compassionate care, and transparent clinical excellence.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-soft">
              <div className="w-12 h-12 rounded-2xl bg-secondary-soft text-secondary flex items-center justify-center mb-5">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-[#1C2434] mb-3">
                Our Mission (हमारा लक्ष्य)
              </h3>
              <p className="text-sm sm:text-base text-brandText-muted leading-relaxed">
                To deliver state-of-the-art phacoemulsification cataract surgery, comprehensive diagnostic ocular screenings, and preventative eye education to every patient in Madhubani, backed by unwavering dedication to patient safety and surgical hygiene.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Team Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Clinical Leadership"
            badgeHindi="चिकित्सीय नेतृत्व"
            title="Our Doctors & Medical Officers"
            subtitle="Qualified healthcare professionals collaborating to deliver safe ocular procedures and comprehensive patient consultations."
            badgeColor="primary"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DOCTORS_DATA.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">
                    {doctor.department}
                  </span>
                  <h4 className="text-lg font-bold text-[#1C2434] mt-1">
                    {doctor.name}
                  </h4>
                  <p className="text-xs font-semibold text-primary mt-0.5">
                    {doctor.qualifications}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {doctor.designation}
                  </p>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {doctor.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200">
                  <Link
                    to="/doctors"
                    className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                  >
                    <span>View Doctor Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Highlight */}
      <section className="py-16 bg-brandBgLight border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Hospital Setup"
            title="Key Infrastructure at TOPSUN HOSPITAL"
            subtitle="Our clinical facility in Madhubani is equipped for modern day-care ophthalmic services."
            badgeColor="secondary"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FACILITIES_DATA.slice(0, 3).map((f) => (
              <div key={f.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft">
                <span className="text-xs font-bold text-secondary bg-secondary-soft px-2.5 py-1 rounded-full">
                  {f.highlight}
                </span>
                <h4 className="text-base font-bold text-[#1C2434] mt-3 mb-1.5">{f.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Appointment CTA */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-xs font-bold text-accent uppercase tracking-wider bg-accent-soft px-3.5 py-1.5 rounded-full border border-accent/20">
            Visit TOPSUN HOSPITAL
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C2434]">
            Conveniently Located on Rahika Road, Madhubani
          </h2>
          <p className="text-sm sm:text-base text-brandText-muted leading-relaxed max-w-2xl mx-auto">
            We welcome patients from Madhubani, Rahika, Benipatti, Jhanjharpur, and neighboring areas for ophthalmic consultations and cataract evaluations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/contact#appointment"
              className="px-6 py-3.5 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-light shadow-sm transition-all"
            >
              Book an Appointment
            </Link>
            <a
              href={`tel:${HOSPITAL_INFO.primaryPhone}`}
              className="px-6 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 font-bold text-sm hover:bg-slate-50 transition-all"
            >
              Call Desk: {HOSPITAL_INFO.primaryPhone}
            </a>
            <a
              href={HOSPITAL_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-all"
            >
              Google Maps Location
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

