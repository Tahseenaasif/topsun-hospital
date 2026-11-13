import React from 'react';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Eye,
  Droplets,
  Zap,
  Target,
  HeartHandshake,
  ArrowRight,
  Calendar,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HOSPITAL_INFO, getWhatsAppUrl } from '../data/hospitalInfo';

interface Step {
  step: string;
  title: string;
  hindiTitle: string;
  duration: string;
  description: string;
  icon: React.ElementType;
  highlights: string[];
  image: string;
}

const journeySteps: Step[] = [
  {
    step: '01',
    title: 'Precision Biometry & IOL Calculation',
    hindiTitle: 'सटीक लेंस माप और बायोमेट्री',
    duration: '20-30 mins',
    description:
      'Using advanced optical biometers and slit-lamp biomicroscopy, Dr. J.D. Mandal precisely measures your corneal curvature and ocular axial length to customize the exact lens power.',
    icon: Target,
    highlights: ['Optical A-scan biometry', 'Personalized IOL lens power', 'Full retinal clarity check'],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600',
  },
  {
    step: '02',
    title: 'Topical Anesthetic Eye Drops (No Needle Injections)',
    hindiTitle: 'दर्द रहित आई ड्रॉप्स एनेस्थीसिया',
    duration: '5-10 mins',
    description:
      'We use gentle numbing eye drops so you feel zero pain during the procedure. Consultant Anesthesiologist Dr. Khurshid continuously supervises blood pressure, pulse, and oxygen saturation.',
    icon: Droplets,
    highlights: ['Zero painful injections', 'No general anesthesia required', 'Safe for hypertensive & diabetic patients'],
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600',
  },
  {
    step: '03',
    title: '15-Min Micro-Incision Phacoemulsification',
    hindiTitle: '15 मिनट की बिना टांके वाली फेको सर्जरी',
    duration: '15 mins',
    description:
      'Through a tiny sub-2.2mm micro-incision, high-frequency ultrasonic waves gently emulsify and aspirate the cloudy natural cataract lens with microscopic surgical precision.',
    icon: Zap,
    highlights: ['Stitchless / sutureless incision', 'Preserves natural corneal architecture', 'Ultra-fast healing'],
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600',
  },
  {
    step: '04',
    title: 'Foldable Intraocular Lens (IOL) Placement',
    hindiTitle: 'उच्च गुणवत्ता फोल्डेबल लेंस प्रत्यारोपण',
    duration: '5 mins',
    description:
      'A biocompatible, foldable artificial intraocular lens is smoothly injected through the micro-incision. It unfolds naturally inside your eye capsule to deliver permanent crisp clarity.',
    icon: Sparkles,
    highlights: ['Monofocal, Toric, or Multifocal options', 'UV-blocking biocompatible material', 'Lifetime crystal vision'],
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=800',
  },
  {
    step: '05',
    title: 'Same-Day Walk-Home Discharge & Recovery',
    hindiTitle: 'उसी दिन छुट्टी और दृष्टि बहाली',
    duration: 'Within 1 hour',
    description:
      'Relax in our comfortable daycare recovery ward with a cup of tea. After post-surgical instructions and protective eyewear issuance, you walk home on the very same day.',
    icon: HeartHandshake,
    highlights: ['Same-day discharge to home', 'Resume normal routine in 24-48 hours', 'Structured Day 1 & Day 7 checkups'],
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=600',
  },
];

export const CataractJourneyTimeline: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-soft text-secondary border border-secondary/20 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span>5-Step Cataract Surgical Roadmap</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1C2434] tracking-tight">
            Your Seamless Journey to Restored Vision
          </h2>
          <p className="mt-3 text-sm sm:text-base text-brandText-muted leading-relaxed">
            At TOPSUN HOSPITAL in Madhubani, cataract surgery is a calm, predictable, and virtually painless 15-minute daycare experience guided by senior specialists.
          </p>
        </div>

        {/* Steps List */}
        <div className="space-y-8 lg:space-y-12">
          {journeySteps.map((step, idx) => {
            const Icon = step.icon;
            const isEven = idx % 2 === 1;

            return (
              <div
                key={step.step}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-soft hover:shadow-premium hover:border-primary/30 transition-all duration-300 ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side (7 cols) */}
                <div className={`lg:col-span-7 space-y-4 ${isEven ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-primary text-white font-black text-sm flex items-center justify-center shadow-sm">
                      {step.step}
                    </span>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700">
                      <Clock className="w-3.5 h-3.5 text-secondary" />
                      <span>{step.duration}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#1C2434]">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-secondary font-hindi mt-1">
                      {step.hindiTitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="pt-2">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-center text-xs font-semibold text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-secondary mr-2 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Photo Side (5 cols) */}
                <div className={`lg:col-span-5 relative ${isEven ? 'lg:order-1' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md border-2 border-white group">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end p-4">
                      <div className="flex items-center gap-2 text-white text-xs font-bold">
                        <Icon className="w-4 h-4 text-secondary-light" />
                        <span>Step {step.step}: {step.title.split(' ')[0]} {step.title.split(' ')[1]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-primary via-primary-dark to-[#150c33] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-floating">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-black">
              Ready to Restore Clear Vision for You or Your Parents?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Consult with Dr. J.D. Mandal at TOPSUN HOSPITAL, Rahika Road, Madhubani. Daily morning and afternoon consultation slots available.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/contact#appointment"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-secondary hover:bg-secondary-light text-white font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span>Book Cataract Consult</span>
            </Link>
            <a
              href={getWhatsAppUrl('Hello TOPSUN Hospital, I would like to book a cataract consultation with Dr. J.D. Mandal.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
            >
              <span>WhatsApp Inquiries</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

