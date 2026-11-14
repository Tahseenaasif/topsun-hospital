import React from 'react';
import { Link } from 'react-router-dom';
import {
  Eye,
  Sparkles,
  ShieldCheck,
  Calendar,
  Phone,
  ArrowRight,
  Clock,
  MapPin,
  CheckCircle2,
  Activity,
  HeartPulse,
  UserCheck,
  Award,
  ChevronRight,
  Star,
  Check,
  BadgeCheck,
  MessageCircle,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { DoctorCard } from '../components/DoctorCard';
import { AppointmentForm } from '../components/AppointmentForm';
import { FAQAccordion } from '../components/FAQAccordion';
import { EmergencyBanner } from '../components/EmergencyBanner';
import { StatsCounter } from '../components/StatsCounter';
import { VisionSimulator } from '../components/VisionSimulator';
import { CataractJourneyTimeline } from '../components/CataractJourneyTimeline';
import { FacilityGallery } from '../components/FacilityGallery';
import { EyeCheckQuiz } from '../components/EyeCheckQuiz';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { HOSPITAL_INFO, getWhatsAppUrl } from '../data/hospitalInfo';
import { DOCTORS_DATA } from '../data/doctorsData';
import { SERVICES_DATA } from '../data/servicesData';
import { FAQS_DATA } from '../data/faqsData';

export const HomePage: React.FC = () => {
  // Select top featured services for homepage
  const featuredServices = SERVICES_DATA.slice(0, 6);
  const homeFaqs = FAQS_DATA.slice(0, 6);

  return (
    <div className="flex flex-col">
      <SEOHead
        title="TOPSUN HOSPITAL – Advance Eye Care Centre | Cataract Surgery in Madhubani"
        description="TOPSUN HOSPITAL is an advanced eye care centre in Madhubani, Bihar, specializing in cataract surgery (phacoemulsification) and comprehensive ophthalmology care led by Dr. J.D. Mandal (MBBS, D.O.M.S.)."
        canonicalPath="/"
      />

      {/* EMERGENCY TRIAGE ALERT BANNER */}
      <EmergencyBanner />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brandBgLight via-white to-white pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100">
        <div className="absolute inset-0 bg-medical-grid opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badges */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-soft border border-primary/20 text-primary text-xs font-bold tracking-wide shadow-xs flex-wrap justify-center lg:justify-start">
                <span className="w-2 h-2 rounded-full bg-secondary inline-block animate-pulse" />
                <span className="font-hindi text-secondary font-extrabold text-sm">
                  {HOSPITAL_INFO.tagline}
                </span>
                <span className="text-slate-300">|</span>
                <span>Govt. Reg. No. {HOSPITAL_INFO.regNumber}</span>
                <span className="text-slate-300">|</span>
                <span className="text-emerald-700 font-extrabold">🟢 OPD Open Today 9 AM - 6 PM</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1C2434] tracking-tight leading-[1.12]">
                Advanced Eye Care.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#482da5] to-secondary">
                  Clearer Vision.
                </span>{' '}
                Better Life.
              </h1>

              {/* Supporting Subtext */}
              <p className="text-base sm:text-lg lg:text-xl text-brandText-muted leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Madhubani's premier eye hospital for stitchless <strong>Phacoemulsification Cataract Surgery</strong>, precision optical biometry, and complete vision restoration led by Consultant Ophthalmologist <strong>Dr. J.D. Mandal</strong>.
              </p>

              {/* Hero Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <Link
                  to="/contact#appointment"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-primary hover:bg-primary-light text-white font-bold text-base shadow-md hover:shadow-lg transition-all active:scale-95"
                >
                  <Calendar className="w-5 h-5 mr-2 text-secondary-light" />
                  <span>Book Appointment</span>
                </Link>

                <Link
                  to="/cataract-surgery"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold text-base shadow-xs hover:border-primary/40 transition-all"
                >
                  <Sparkles className="w-4 h-4 mr-2 text-secondary" />
                  <span>Cataract Surgery Guide</span>
                </Link>

                <a
                  href={`tel:${HOSPITAL_INFO.primaryPhone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3.5 rounded-xl bg-secondary-soft text-secondary hover:bg-secondary hover:text-white font-bold text-base transition-colors"
                  aria-label={`Call TOPSUN Hospital at ${HOSPITAL_INFO.primaryPhone}`}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span>Call Hospital</span>
                </a>
              </div>

              {/* Key Trust Signals Bar */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-secondary flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1C2434]">Reg. 658/2026</p>
                    <p className="text-[11px] text-brandText-muted">Approved Medical Facility</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-primary-soft text-primary flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1C2434]">Phaco Cataract</p>
                    <p className="text-[11px] text-brandText-muted">Sub-2.2mm Micro Incision</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1C2434]">Rahika Road</p>
                    <p className="text-[11px] text-brandText-muted">Basauli, Madhubani</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual with Real Photography & Floating Badges */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative background blur ring */}
                <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

                {/* Floating Top Badge */}
                <div className="absolute -top-5 -right-3 z-30 hidden sm:flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-floating border border-slate-100 animate-float">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-secondary flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-[#1C2434]">100% Stitchless</p>
                    <p className="text-[10px] font-semibold text-secondary">Phaco Micro-Incision</p>
                  </div>
                </div>

                {/* Floating Bottom Badge */}
                <div className="absolute -bottom-5 -left-3 z-30 hidden sm:flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-floating border border-slate-100 animate-float [animation-delay:2s]">
                  <div className="w-9 h-9 rounded-xl bg-primary-soft text-primary flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-[#1C2434]">Reg. 658/2026</p>
                    <p className="text-[10px] font-semibold text-primary">Approved Eye Hospital</p>
                  </div>
                </div>

                {/* Main Visual Card Frame */}
                <div className="relative rounded-3xl bg-white border border-slate-200 shadow-floating overflow-hidden">
                  {/* Real TOPSUN Hospital Building Front Photo */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900 group">
                    <img
                      src="/images/hospital/hospital-front.jpg"
                      alt="TOPSUN Hospital Advance Eye Care Centre building and reception entrance on Rahika Road, Madhubani"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                    {/* Top overlay badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[11px] font-bold border border-white/20">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Official Hospital Campus</span>
                      </span>
                    </div>

                    {/* Bottom overlay info */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-2 mb-1">
                        <BadgeCheck className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                          TOPSUN HOSPITAL • Basauli, Rahika Road
                        </span>
                      </div>
                      <p className="text-sm font-black text-white">
                        Advance Eye Care Centre & Phaco Cataract Surgery
                      </p>
                    </div>
                  </div>

                  {/* Highlights Bar with Doctor Inset */}
                  <div className="p-5 bg-white space-y-4">
                    {/* Doctor Mini-Card */}
                    <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-gradient-to-r from-primary-soft/60 to-emerald-50/60 border border-primary/10">
                      <img
                        src="/images/doctors/dr-jd-mandal.jpg"
                        alt="Dr. J.D. Mandal Senior Consultant Ophthalmologist"
                        className="w-12 h-12 rounded-xl object-cover object-top border-2 border-white shadow-xs shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-black text-[#1C2434] truncate">
                            Dr. J.D. Mandal
                          </span>
                          <span className="text-[10px] font-extrabold text-secondary bg-secondary-soft px-1.5 py-0.5 rounded">
                            MBBS, D.O.M.S.
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-600 truncate">
                          Consultant Ophthalmologist & Eye Surgeon
                        </p>
                        <p className="text-[10px] text-emerald-700 font-bold flex items-center gap-1 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                          OPD: Mon–Sat 9:00 AM – 6:00 PM
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                        <div className="flex items-center gap-1 text-amber-500 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                          ))}
                        </div>
                        <p className="font-extrabold text-[#1C2434]">15,000+ Surgeries</p>
                        <p className="text-[11px] text-slate-500">Mithilanchal's Trusted Choice</p>
                      </div>

                      <div className="p-3 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                        <div className="flex items-center gap-1 text-secondary mb-1 font-bold">
                          <Clock className="w-3.5 h-3.5" />
                          <span>15 Min Surgery</span>
                        </div>
                        <p className="font-extrabold text-[#1C2434]">Stitchless Phaco</p>
                        <p className="text-[11px] text-slate-500">Walk Home Same Day</p>
                      </div>
                    </div>

                    {/* Quick Consultation Callout */}
                    <div className="flex items-center justify-between gap-3 pt-2 border-t border-slate-100">
                      <div className="text-xs">
                        <span className="text-slate-500 block">Helpline / Call:</span>
                        <a href={`tel:${HOSPITAL_INFO.primaryPhone}`} className="font-extrabold text-primary hover:underline">
                          +91 {HOSPITAL_INFO.primaryPhone}
                        </a>
                      </div>
                      <a
                        href={getWhatsAppUrl('Hello TOPSUN Hospital, I would like to book an appointment with Dr. J.D. Mandal.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20bd5a] transition-colors shadow-xs"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS COUNTER BANNER */}
      <StatsCounter />

      {/* CATARACT SURGERY SPECIALIST HIGHLIGHT BANNER */}
      <section className="py-12 bg-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Micro-Incision Cataract Excellence in Madhubani</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                Clear Vision with Modern Stitchless Cataract Surgery
              </h2>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-3xl">
                Experience gentle, micro-incision cataract removal without traditional stitches or painful needle injections. Dr. J.D. Mandal (MBBS, D.O.M.S.) and Dr. Khurshid (MBBS, MD - Consultant Anesthesiologist) provide meticulous surgical precision, continuous cardiac/vitals safety, and rapid same-day visual recovery.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                to="/cataract-surgery"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white text-primary font-bold text-sm hover:bg-slate-100 shadow-md transition-all text-center"
              >
                <span>Learn About Cataract Procedure</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href={getWhatsAppUrl('Hello Dr. J.D. Mandal, I would like to consult regarding cataract surgery at TOPSUN Hospital.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-secondary text-white font-bold text-sm hover:bg-secondary-dark shadow-md transition-all text-center"
              >
                <span>WhatsApp Cataract Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE VISION SIMULATOR */}
      <VisionSimulator />

      {/* 5-STEP CATARACT ROADMAP */}
      <CataractJourneyTimeline />

      {/* EYE CARE SERVICES PREVIEW */}
      <section className="py-16 sm:py-20 bg-brandBgLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Ophthalmology Services"
            badgeHindi="हमारी नेत्र चिकित्सा सेवाएँ"
            title="Comprehensive Eye Treatments & Clinical Diagnostics"
            subtitle="From micro-incision cataract surgery to preventive diabetic screening and pediatric evaluations, we provide dedicated ophthalmic care in Madhubani."
            badgeColor="primary"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-primary text-white font-bold text-sm sm:text-base hover:bg-primary-light shadow-sm transition-all"
            >
              <span>View All 18+ Eye Care Services</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 1-MINUTE ONLINE EYE ASSESSMENT QUIZ */}
      <EyeCheckQuiz />

      {/* WHY CHOOSE TOPSUN HOSPITAL */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Why Choose TOPSUN Hospital"
            badgeHindi="क्यों चुनें टॉपसन हॉस्पिटल"
            title="Compassionate Medical Care Rooted in Safety & Expertise"
            subtitle="We prioritize patient trust, transparent medical explanations, and thorough clinical evaluations without false promises or exaggerated claims."
            badgeColor="secondary"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 hover:border-primary/30 transition-all hover:shadow-soft">
              <div className="w-12 h-12 rounded-2xl bg-primary-soft text-primary flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1C2434] mb-2">
                Phacoemulsification Expertise
              </h3>
              <p className="text-xs sm:text-sm text-brandText-muted leading-relaxed">
                Modern micro-incision cataract surgery with foldable intraocular lens implantation for clear, rapid visual recovery.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 hover:border-secondary/30 transition-all hover:shadow-soft">
              <div className="w-12 h-12 rounded-2xl bg-secondary-soft text-secondary flex items-center justify-center mb-4">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1C2434] mb-2">
                Anesthesiologist Supervision
              </h3>
              <p className="text-xs sm:text-sm text-brandText-muted leading-relaxed">
                Dedicated surgical safety, continuous hemodynamic monitoring, and pain-free topical drop anesthesia led by Dr. Khurshid (MBBS, MD).
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 hover:border-accent/30 transition-all hover:shadow-soft">
              <div className="w-12 h-12 rounded-2xl bg-accent-soft text-accent flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1C2434] mb-2">
                Officially Registered
              </h3>
              <p className="text-xs sm:text-sm text-brandText-muted leading-relaxed">
                Govt. Registration No. 658/2026 ensuring full compliance with clinical establishment regulations in Bihar.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 hover:border-primary/30 transition-all hover:shadow-soft">
              <div className="w-12 h-12 rounded-2xl bg-primary-soft text-primary flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1C2434] mb-2">
                Holistic Physician Support
              </h3>
              <p className="text-xs sm:text-sm text-brandText-muted leading-relaxed">
                Multidisciplinary team assessing systemic conditions like diabetes and hypertension before any surgical intervention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DOCTORS SECTION */}
      <section className="py-16 sm:py-20 bg-brandBgLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Medical Team"
            badgeHindi="हमारे अनुभवी चिकित्सक"
            title="Meet Our Doctors & Specialists"
            subtitle="Led by Consultant Ophthalmologist Dr. J.D. Mandal, Medical Superintendent Dr. Shankar, and Consultant Anesthesiologist Dr. Khurshid, our clinical team delivers experienced patient care."
            badgeColor="primary"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOCTORS_DATA.map((doctor, index) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                featured={index === 0}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/doctors"
              className="inline-flex items-center text-sm font-bold text-primary hover:text-primary-light"
            >
              <span>Read complete doctor qualifications and consultation schedules</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* HOSPITAL FACILITIES PHOTO GALLERY */}
      <FacilityGallery />

      {/* PATIENT REVIEWS & TESTIMONIALS */}
      <TestimonialsSection />

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Patient FAQs"
            badgeHindi="सामान्य प्रश्न"
            title="Frequently Asked Questions"
            subtitle="Answers to common queries about cataract surgery, outpatient appointments, doctor consultations, and visiting TOPSUN HOSPITAL."
            badgeColor="primary"
          />

          <FAQAccordion items={homeFaqs} />

          <div className="mt-10 text-center text-xs sm:text-sm text-brandText-muted">
            Have a different medical or consultation question?{' '}
            <a
              href={getWhatsAppUrl('Hello TOPSUN Hospital, I have an inquiry regarding eye checkup.')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold hover:underline"
            >
              Ask on WhatsApp
            </a>{' '}
            or call{' '}
            <a href={`tel:${HOSPITAL_INFO.primaryPhone}`} className="text-secondary font-bold hover:underline">
              {HOSPITAL_INFO.primaryPhone}
            </a>
            .
          </div>
        </div>
      </section>

      {/* APPOINTMENT & CONTACT / LOCATION SECTION */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-brandBgLight to-slate-100" id="appointment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Appointment & Visit"
            badgeHindi="परामर्श हेतु संपर्क करें"
            title="Book Your Consultation & Visit Us in Madhubani"
            subtitle="Easily schedule your eye checkup via WhatsApp or telephone, or visit our centre at Basauli, Rahika Road, Madhubani."
            badgeColor="secondary"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Interactive Appointment Form */}
            <div className="lg:col-span-7">
              <AppointmentForm />
            </div>

            {/* Right: Hospital Contact Card & Location Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-soft space-y-5">
                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary-soft px-3 py-1 rounded-full">
                    Hospital Desk
                  </span>
                  <h3 className="text-xl font-extrabold text-[#1C2434] mt-2">
                    TOPSUN HOSPITAL
                  </h3>
                  <p className="text-xs text-secondary font-bold uppercase tracking-wider">
                    Advance Eye Care Centre
                  </p>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-800">Hospital Address:</p>
                      <p className="text-slate-600">{HOSPITAL_INFO.address.fullAddress}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-800">Direct Helplines:</p>
                      <div className="space-y-0.5">
                        {HOSPITAL_INFO.phones.map((phone, idx) => (
                          <a
                            key={idx}
                            href={`tel:${phone}`}
                            className="block text-primary font-bold hover:underline"
                          >
                            +91 {phone} {idx === 0 && <span className="text-[10px] text-secondary font-semibold">(Primary Call)</span>}
                            {idx === 1 && <span className="text-[10px] text-[#25D366] font-semibold">(WhatsApp)</span>}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-800">OPD Consultation Timings:</p>
                      <p className="text-slate-600">Monday – Saturday: 9:00 AM – 6:00 PM</p>
                      <p className="text-[11px] text-slate-500">Sunday: Emergency on-call & inquiries</p>
                    </div>
                  </div>
                </div>

                {/* Google Map Directions Button */}
                <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href={HOSPITAL_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors shadow-xs"
                  >
                    <MapPin className="w-3.5 h-3.5 mr-1.5 text-accent-light" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Map Embed Preview */}
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-soft">
                <div className="p-3 bg-slate-100 border-b border-slate-200 text-xs font-bold text-slate-700 flex items-center justify-between">
                  <span>Rahika Road, Madhubani Map View</span>
                  <span className="text-[11px] text-secondary font-medium">Basauli, Bihar</span>
                </div>
                <div className="w-full h-52 bg-slate-200 relative">
                  <iframe
                    title="TOPSUN Hospital Madhubani Location Map"
                    src={HOSPITAL_INFO.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
