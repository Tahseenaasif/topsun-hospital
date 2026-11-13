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
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { AppointmentForm } from '../components/AppointmentForm';
import { FAQAccordion } from '../components/FAQAccordion';
import { CATARACT_OVERVIEW } from '../data/cataractData';
import { HOSPITAL_INFO, getWhatsAppUrl } from '../data/hospitalInfo';
import { FAQS_DATA } from '../data/faqsData';

export const CataractSurgeryPage: React.FC = () => {
  const cataractFaqs = FAQS_DATA.filter((f) => f.category === 'cataract');

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

      {/* Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-200">
        <Breadcrumbs items={[{ label: 'Cataract Surgery', path: '/cataract-surgery' }]} />
      </div>

      {/* Hero Section for Cataract Page */}
      <section className="relative bg-gradient-to-b from-primary-soft/40 via-white to-white pt-10 pb-16 sm:pb-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-soft text-secondary border border-secondary/20 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Specialized Cataract Centre • Madhubani</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C2434] tracking-tight leading-tight">
              Phacoemulsification Cataract Surgery at TOPSUN HOSPITAL
            </h1>

            <p className="mt-4 text-base sm:text-lg text-brandText-muted leading-relaxed">
              Safe, micro-incision lens replacement performed with advanced ultrasonic technology, dedicated anesthesiologist monitoring, and compassionate patient care in Madhubani, Bihar.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#consultation-form"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary-light shadow-sm transition-all"
              >
                <Calendar className="w-4 h-4 mr-2 text-secondary-light" />
                <span>Book Cataract Evaluation</span>
              </a>

              <a
                href={getWhatsAppUrl('Hello TOPSUN Hospital, I would like to inquire about Cataract Surgery costs and evaluation.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#25D366] text-white text-sm font-bold hover:bg-[#20ba59] shadow-sm transition-all"
              >
                <span>Inquire on WhatsApp</span>
              </a>

              <a
                href={`tel:${HOSPITAL_INFO.primaryPhone}`}
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm font-bold hover:bg-slate-50 transition-all"
              >
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <span>Call {HOSPITAL_INFO.primaryPhone}</span>
              </a>
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
                  <li key={idx} className="bg-white p-3 rounded-xl border border-slate-100 shadow-xs">
                    <p className="text-xs font-bold text-slate-900">{cause.title}</p>
                    <p className="text-[11px] text-slate-600 mt-0.5">{cause.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

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
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft hover:shadow-premium transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-soft text-primary flex items-center justify-center mb-4">
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

      {/* WHAT IS PHACOMULSIFICATION? */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
            <span className="text-xs font-bold text-secondary uppercase tracking-wider bg-secondary-soft px-3.5 py-1.5 rounded-full border border-secondary/20">
              Gold Standard Technique
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1C2434]">
              What is Phacoemulsification (Phaco)?
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed text-left sm:text-center">
              {CATARACT_OVERVIEW.phacoemulsificationExplained}
            </p>
          </div>

          {/* Key Advantages Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-secondary flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Micro-Incision (2.2mm)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Requires only a minute keyhole incision. Because the wound architecture is stepped and self-sealing, traditional surgical stitches are typically not required.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-primary-soft text-primary flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Foldable Intraocular Lens</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                A flexible synthetic optic is gently injected through the tiny incision into the natural lens bag, where it unfolds smoothly to restore clear light focusing.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Day-Care Procedure</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Surgery typically takes 15 to 25 minutes. Following a brief period of supervised post-op observation, patients return to the comfort of their home the same day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATARACT SURGERY STEP-BY-STEP JOURNEY */}
      <section className="py-16 bg-brandBgLight border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="The Clinical Process"
            badgeHindi="शल्य चिकित्सा प्रक्रिया"
            title="Your Step-by-Step Cataract Treatment Journey"
            subtitle="From your initial biometry evaluation to day of surgery and post-operative follow-up, our team guides you with total clarity."
            badgeColor="primary"
          />

          <div className="space-y-6 max-w-4xl mx-auto">
            {CATARACT_OVERVIEW.surgeryJourney.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-soft flex flex-col md:flex-row gap-5 items-start"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-soft text-primary font-black text-xl flex items-center justify-center shrink-0">
                  {step.step}
                </div>
                <div className="flex-1 space-y-1.5">
                  <h3 className="text-lg font-bold text-[#1C2434]">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-brandText-muted leading-relaxed">
                    {step.description}
                  </p>
                  <p className="text-xs font-semibold text-secondary flex items-center gap-1.5 pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{step.clinicalNote}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOVERY & POSTOPERATIVE CARE */}
      <section className="py-16 bg-white">
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
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 hover:border-slate-300 transition-colors"
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
              Every eye is unique. While phacoemulsification has a remarkably high clinical success profile worldwide, no medical institution can ethically guarantee 100% perfect vision or zero surgical risk. Pre-existing ocular conditions such as diabetic retinopathy, macular changes, or glaucoma may influence the final visual potential. Dr. J.D. Mandal will provide an honest, thorough pre-operative assessment of your visual prognosis.
            </p>
          </div>
        </div>
      </section>

      {/* CATARACT FAQS */}
      <section className="py-16 bg-brandBgLight border-t border-slate-200">
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
      <section className="py-16 bg-white border-t border-slate-100" id="consultation-form">
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

