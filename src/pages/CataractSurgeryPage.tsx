import React from 'react';
import { Link } from 'react-router-dom';
import {
  Eye,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Phone,
  AlertCircle,
  HelpCircle,
  Clock,
  ArrowRight,
  Sun,
  Layers,
  Palette,
  Glasses,
  BookOpen,
  EyeOff,
  Star,
  Activity,
  BadgeCheck,
  MessageCircle,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { AppointmentForm } from '../components/AppointmentForm';
import { FAQAccordion } from '../components/FAQAccordion';
import { EmergencyBanner } from '../components/EmergencyBanner';
import { VisionSimulator } from '../components/VisionSimulator';
import { CataractJourneyTimeline } from '../components/CataractJourneyTimeline';
import { IOLComparisonTable } from '../components/IOLComparisonTable';
import { DoctorCard } from '../components/DoctorCard';
import { CATARACT_OVERVIEW } from '../data/cataractData';
import { HOSPITAL_INFO, getWhatsAppUrl } from '../data/hospitalInfo';
import { DOCTORS_DATA } from '../data/doctorsData';
import { FAQS_DATA } from '../data/faqsData';

export const CataractSurgeryPage: React.FC = () => {
  const cataractFaqs = FAQS_DATA.filter((f) => f.category === 'cataract');
  const leadSurgeons = DOCTORS_DATA.slice(0, 2); // Dr. Mandal & Dr. Khurshid

  const symptomIcons: Record<string, React.ElementType> = {
    EyeOff,
    Sun,
    Palette,
    Glasses,
    BookOpen,
    Layers,
  };

  const cataractProcedureSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Phacoemulsification Cataract Surgery',
    procedureType: 'https://schema.org/SurgicalProcedure',
    bodyLocation: 'Eye crystalline lens',
    howPerformed:
      'Ultrasonic micro-incision emulsification of cloudy lens matter followed by foldable intraocular lens (IOL) implantation under anesthesiologist supervision.',
    status: 'https://schema.org/Active',
    followup: 'Day 1, Week 1, and Month 1 postoperative evaluations.',
    performer: {
      '@type': 'Physician',
      name: 'Dr. J.D. Mandal',
      jobTitle: 'Consultant Ophthalmologist',
      qualifications: 'MBBS, D.O.M.S.',
    },
  };

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Cataract Surgery in Madhubani | Phacoemulsification – TOPSUN HOSPITAL"
        description="Learn about modern stitchless cataract surgery (phacoemulsification) at TOPSUN HOSPITAL, Madhubani. Clear patient education on cataract symptoms, lens replacement, recovery, and consultation with Dr. J.D. Mandal (MBBS, D.O.M.S.)."
        canonicalPath="/cataract-surgery"
        keywords={[
          'Cataract Surgery in Madhubani',
          'Phaco Cataract Surgery in Madhubani',
          'Cataract Hospital in Madhubani',
          'Eye Doctor in Rahika',
          'Phacoemulsification Bihar',
          'Cataract Operation Madhubani',
        ]}
        schemaData={cataractProcedureSchema}
      />

      {/* Emergency Alert Banner */}
      <EmergencyBanner />

      {/* Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-200">
        <Breadcrumbs items={[{ label: 'Cataract Surgery', path: '/cataract-surgery' }]} />
      </div>

      {/* Hero Section for Cataract Page */}
      <section className="relative bg-gradient-to-b from-primary-soft/40 via-white to-white pt-10 pb-16 sm:pb-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-soft text-secondary border border-secondary/20 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Specialized Cataract Centre • Madhubani</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C2434] tracking-tight leading-tight">
                Phacoemulsification Cataract Surgery at TOPSUN HOSPITAL
              </h1>

              <p className="text-base sm:text-lg text-brandText-muted leading-relaxed">
                Safe, stitchless micro-incision lens replacement performed with ultrasound technology, topical eye-drop anesthesia (no painful needles), and continuous anesthesiologist monitoring in Madhubani, Bihar.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#consultation-form"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary-light shadow-md transition-all active:scale-95"
                >
                  <Calendar className="w-4 h-4 mr-2 text-secondary-light" />
                  <span>Book Cataract Evaluation</span>
                </a>

                <a
                  href={getWhatsAppUrl('Hello TOPSUN Hospital, I would like to inquire about Cataract Surgery costs and evaluation with Dr. J.D. Mandal.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#25D366] text-white text-sm font-bold hover:bg-[#20ba59] shadow-md transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span>Inquire on WhatsApp</span>
                </a>

                <a
                  href={`tel:${HOSPITAL_INFO.primaryPhone}`}
                  className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm font-bold hover:bg-slate-50 transition-all"
                >
                  <Phone className="w-4 h-4 mr-2 text-primary" />
                  <span>Call {HOSPITAL_INFO.primaryPhone}</span>
                </a>
              </div>

              {/* Key Highlights */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                  <span>Sub-2.2mm Keyhole</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                  <span>Zero Pain Injections</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                  <span>Same-Day Discharge</span>
                </div>
              </div>
            </div>

            {/* Right Photo Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-floating border border-slate-200 aspect-[4/3] group">
                <img
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000"
                  alt="Precision Cataract Surgery Operating Theatre"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="inline-block px-3 py-0.5 rounded-full bg-secondary text-white text-[10px] font-extrabold uppercase tracking-wider mb-2">
                    Micro-Incision Phaco OT
                  </span>
                  <h3 className="text-lg font-black leading-tight">
                    Laminar Airflow Sterile Operating Suite
                  </h3>
                  <p className="text-xs text-slate-200 mt-1">
                    Equipped with high-frequency ultrasound systems & precision optics for maximum cataract safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS CATARACT? */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary-soft px-3 py-1 rounded-full border border-primary/20">
                Understanding Your Eyes
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C2434]">
                What is a Cataract? (मोतियाबिंद क्या है?)
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {CATARACT_OVERVIEW.definition}
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2">
                <p className="font-bold text-primary">Important Clinical Fact:</p>
                <p>
                  A cataract is not a skin growth or film over the outside of the eye. It is an internal clouding of the clear crystalline lens inside the eye itself. Therefore, eyedrops, diet changes, or eye exercises cannot dissolve a cataract once the lens protein becomes cloudy.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-primary-soft to-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
              <h3 className="text-base font-bold text-[#1C2434] mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-accent" />
                <span>Key Causes of Cataract</span>
              </h3>
              <ul className="space-y-3">
                {CATARACT_OVERVIEW.causes.map((cause, idx) => (
                  <li key={idx} className="bg-white p-3 rounded-2xl border border-slate-100 shadow-xs">
                    <p className="text-xs font-bold text-slate-900">{cause.title}</p>
                    <p className="text-[11px] text-slate-600 mt-0.5">{cause.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE VISION SIMULATOR */}
      <VisionSimulator />

      {/* COMMON CATARACT SYMPTOMS */}
      <section className="py-16 bg-brandBgLight border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Recognizing the Signs"
            badgeHindi="मोतियाबिंद के लक्षण"
            title="Common Cataract Symptoms"
            subtitle="If you or an elderly family member notice any of the following visual changes, a detailed slit-lamp evaluation is strongly recommended."
            badgeColor="primary"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATARACT_OVERVIEW.symptoms.map((symptom, idx) => {
              const IconComp = symptomIcons[symptom.icon] || Eye;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-slate-200 shadow-soft hover:shadow-premium transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary-soft text-primary flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#1C2434] mb-2">
                    {symptom.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brandText-muted leading-relaxed">
                    {symptom.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5-STEP ROADMAP TIMELINE */}
      <CataractJourneyTimeline />

      {/* IOL COMPARISON TABLE */}
      <IOLComparisonTable />

      {/* MEET SURGICAL SPECIALISTS */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Surgical Team"
            badgeHindi="हमारे विशेषज्ञ सर्जन"
            title="Experienced Hands for Your Vision Restoration"
            subtitle="Dr. J.D. Mandal and Dr. Khurshid ensure the highest surgical precision, painless anesthesia, and patient-centered postoperative care."
            badgeColor="primary"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadSurgeons.map((doc, idx) => (
              <DoctorCard key={doc.id} doctor={doc} featured={idx === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* RECOVERY & POSTOPERATIVE CARE */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Healing Protocol"
            badgeHindi="ऑपरेशन के बाद सावधानियाँ"
            title="Recovery & Postoperative Eye Care Guidelines"
            subtitle="Proper post-operative hygiene and following the eye drop regimen are critical to supporting healthy corneal recovery and optimal visual comfort."
            badgeColor="secondary"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {CATARACT_OVERVIEW.postOpCareGuidelines.map((guide, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-5 hover:border-slate-300 transition-colors shadow-xs"
              >
                <h4 className="text-sm font-bold text-primary mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-secondary" />
                  <span>{guide.category}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {guide.instructions}
                </p>
              </div>
            ))}
          </div>

          {/* Honest Medical Transparency Box */}
          <div className="mt-10 p-5 rounded-2xl bg-amber-50/70 border border-amber-200 max-w-4xl mx-auto text-xs text-amber-900 leading-relaxed">
            <p className="font-bold flex items-center gap-1.5 mb-1 text-amber-950">
              <AlertCircle className="w-4 h-4 text-amber-700" />
              <span>Medical Clarity & Realistic Expectations:</span>
            </p>
            <p>
              Every eye is unique. While phacoemulsification has a remarkably high clinical success profile worldwide, pre-existing ocular conditions such as diabetic retinopathy, macular changes, or glaucoma may influence the final visual potential. Dr. J.D. Mandal will provide an honest, thorough pre-operative assessment of your visual prognosis.
            </p>
          </div>
        </div>
      </section>

      {/* CATARACT FAQS */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Cataract Questions"
            title="Cataract Surgery FAQs"
            subtitle="Common questions from patients and families regarding cataract removal in Madhubani."
            badgeColor="primary"
          />

          <FAQAccordion items={cataractFaqs} />
        </div>
      </section>

      {/* INQUIRY & APPOINTMENT FORM ANCHOR */}
      <section className="py-16 bg-brandBgLight border-t border-slate-100" id="consultation-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Book Evaluation"
            badgeHindi="परामर्श लें"
            title="Schedule a Cataract Consultation with Dr. J.D. Mandal"
            subtitle="Get your eyes evaluated with modern slit-lamp biomicroscopy and discuss intraocular lens options at TOPSUN HOSPITAL, Madhubani."
            badgeColor="primary"
          />

          <AppointmentForm defaultService="Cataract Evaluation" defaultDoctor="Dr. J.D. Mandal" />
        </div>
      </section>
    </div>
  );
};
