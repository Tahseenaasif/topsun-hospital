import React from 'react';
import { Eye, ShieldCheck, Heart, Target, MapPin, Award, CheckCircle2, Phone, Calendar, ArrowRight, Sparkles, Activity } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { EmergencyBanner } from '../components/EmergencyBanner';
import { StatsCounter } from '../components/StatsCounter';
import { FacilityGallery } from '../components/FacilityGallery';
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

      {/* Emergency Alert Banner */}
      <EmergencyBanner />

      {/* Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-200">
        <Breadcrumbs items={[{ label: 'About Hospital', path: '/about' }]} />
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-primary-soft/50 via-white to-white pt-10 pb-12 sm:pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-soft text-secondary border border-secondary/20 text-xs font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Reg. No: {HOSPITAL_INFO.regNumber} • Bihar Health Establishment</span>
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

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-floating border border-slate-200 aspect-[4/3] group">
                <img
                  src="/images/hospital/hospital-front.jpg"
                  alt="TOPSUN Hospital exterior building and reception entrance on Rahika Road, Madhubani"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5">
                  <div className="text-white">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider bg-primary px-2.5 py-0.5 rounded-full">
                      Madhubani, Bihar
                    </span>
                    <h3 className="text-base font-bold text-white mt-1">
                      TOPSUN HOSPITAL Building & Reception
                    </h3>
                    <p className="text-xs text-emerald-300">Basauli, Rahika Road (NH 527B)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <StatsCounter />

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
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                  <p className="text-xs text-slate-500 font-semibold">Government Registered</p>
                  <p className="text-base font-extrabold text-primary mt-0.5">Reg. No. 658/2026</p>
                  <p className="text-[11px] text-slate-500 mt-1">Authorized health institution adhering to state healthcare standards.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
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
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-soft flex flex-col justify-between overflow-hidden group">
              <div>
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800"
                    alt="Compassionate patient vision restoration at TOPSUN Hospital"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white text-xs font-bold uppercase tracking-wider bg-primary/90 px-2.5 py-1 rounded-full">
                    Sight Restoration
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-primary" />
                  <h3 className="text-2xl font-black text-[#1C2434]">
                    Our Vision (हमारा दृष्टिकोण)
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-brandText-muted leading-relaxed">
                  To be the most trusted and technically proficient eye care institution in northern Bihar, empowering individuals and elderly patients with healthy, clear sight, compassionate care, and transparent clinical excellence.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-soft flex flex-col justify-between overflow-hidden group">
              <div>
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=800"
                    alt="Sterile surgical instrumentation and ophthalmic equipment"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white text-xs font-bold uppercase tracking-wider bg-secondary/90 px-2.5 py-1 rounded-full">
                    Surgical Hygiene & Safety
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-5 h-5 text-secondary" />
                  <h3 className="text-2xl font-black text-[#1C2434]">
                    Our Mission (हमारा लक्ष्य)
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-brandText-muted leading-relaxed">
                  To deliver state-of-the-art phacoemulsification cataract surgery, comprehensive diagnostic ocular screenings, and preventative eye education to every patient in Madhubani, backed by unwavering dedication to patient safety and surgical hygiene.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Facility Highlights */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Verified Facility"
            badgeHindi="प्रमाणित अस्पताल परिसर"
            title="Real Photographs of TOPSUN HOSPITAL"
            subtitle="Explore actual photos of our clinical consultation chambers, official registration records, and highway location markers in Madhubani."
            badgeColor="secondary"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-slate-50 rounded-3xl border border-slate-200/90 overflow-hidden shadow-soft hover:shadow-premium transition-all">
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <img
                  src="/images/hospital/hospital-team.jpg"
                  alt="Dr. J.D. Mandal and clinical colleagues at consultation desk"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-bold text-secondary uppercase tracking-wider bg-secondary-soft px-2.5 py-0.5 rounded-full">
                  Doctor Consultation Desk
                </span>
                <h4 className="text-lg font-bold text-[#1C2434] mt-2 mb-1.5">
                  Clinical Examination Chamber
                </h4>
                <p className="text-xs text-brandText-muted leading-relaxed">
                  Senior Consultant Ophthalmologist Dr. J.D. Mandal conducting diagnostic consultations, patient history assessments, and pre-operative evaluations.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl border border-slate-200/90 overflow-hidden shadow-soft hover:shadow-premium transition-all">
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <img
                  src="/images/hospital/hospital-board.jpg"
                  alt="TOPSUN Hospital official board and doctor panel"
                  className="w-full h-full object-contain bg-white p-2 hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-primary-soft px-2.5 py-0.5 rounded-full">
                  Government Registration
                </span>
                <h4 className="text-lg font-bold text-[#1C2434] mt-2 mb-1.5">
                  Official Registration No. 658/2026
                </h4>
                <p className="text-xs text-brandText-muted leading-relaxed">
                  Official hospital signboard displaying registered doctors panel (Dr. J.D. Mandal, Dr. Khurshid, Dr. Ashwini Bhardwaj, Dr. MD Merajul Hoda) and helpline contacts.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl border border-slate-200/90 overflow-hidden shadow-soft hover:shadow-premium transition-all">
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <img
                  src="/images/hospital/gps-pillar.jpg"
                  alt="GPS Geotagged camera photo of hospital landmark on NH 527B"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-bold text-accent uppercase tracking-wider bg-accent-soft px-2.5 py-0.5 rounded-full">
                  GPS Geotagged Landmark
                </span>
                <h4 className="text-lg font-bold text-[#1C2434] mt-2 mb-1.5">
                  NH 527B Highway Location Pillar
                </h4>
                <p className="text-xs text-brandText-muted leading-relaxed">
                  GPS-verified landmark pillar along NH 527B in Madhubani (Lat: 26.330266, Long: 85.983871) detailing Phaco cataract treatments and glaucoma management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Team Summary with Photos */}
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
                className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-premium transition-all duration-300"
              >
                <div>
                  <div className="aspect-[4/3] w-full overflow-hidden bg-slate-900">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-bold text-secondary uppercase tracking-wider bg-secondary-soft px-2.5 py-0.5 rounded-md">
                      {doctor.department.split('&')[0]}
                    </span>
                    <h4 className="text-base font-black text-[#1C2434] mt-2">
                      {doctor.name}
                    </h4>
                    <p className="text-xs font-bold text-primary">
                      {doctor.qualifications}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      {doctor.designation}
                    </p>
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                      {doctor.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-slate-200">
                    <Link
                      to="/doctors"
                      className="text-xs font-bold text-primary hover:underline flex items-center justify-between"
                    >
                      <span>Full Doctor Profile</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOSPITAL FACILITIES PHOTO GALLERY */}
      <FacilityGallery />

      {/* Location & Directions CTA */}
      <section className="py-16 bg-brandBgLight border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-primary text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-floating">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                Visiting Us in Madhubani
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                Conveniently Located on Rahika Road, Basauli
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Easily accessible by public transport and private vehicles with parking support, comfortable waiting halls, and pharmacy guidance.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                to="/contact#appointment"
                className="px-6 py-3.5 rounded-xl bg-white text-primary text-xs sm:text-sm font-bold hover:bg-slate-100 transition-colors shadow-sm"
              >
                Book Appointment
              </Link>
              <a
                href={HOSPITAL_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-secondary text-white text-xs sm:text-sm font-bold hover:bg-secondary-dark transition-colors shadow-sm"
              >
                Open Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
