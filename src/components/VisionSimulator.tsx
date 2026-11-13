import React, { useState } from 'react';
import { Eye, AlertTriangle, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Info, Glasses, Sun, Moon, Focus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HOSPITAL_INFO, getWhatsAppUrl } from '../data/hospitalInfo';

interface VisionCondition {
  id: string;
  name: string;
  hindiName: string;
  shortDesc: string;
  symptoms: string[];
  recommendation: string;
  doctorNote: string;
  filterClass: string;
  badgeColor: string;
}

const conditions: VisionCondition[] = [
  {
    id: 'normal',
    name: 'Normal Healthy Vision (20/20)',
    hindiName: 'सामान्य स्वस्थ दृष्टि',
    shortDesc: 'Crisp, high-contrast visual acuity across distance, intermediate, and reading ranges.',
    symptoms: ['Clear outlines', 'Vivid natural color perception', 'No glare or light halos', 'Effortless night driving'],
    recommendation: 'Annual preventive eye examination to maintain corneal and retinal health.',
    doctorNote: 'Maintaining 20/20 vision requires routine screening after age 40 to monitor subtle intraocular pressure changes.',
    filterClass: 'filter-none',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  },
  {
    id: 'cataract',
    name: 'Cataract (मोतियाबिंद)',
    hindiName: 'मोतियाबिंद (धुंधली दृष्टि)',
    shortDesc: 'Gradual clouding of natural crystalline lens, leading to foggy, yellowish, or double vision.',
    symptoms: [
      'Cloudy, misty, or blurred sight',
      'Distracting glare & starbursts around headlights at night',
      'Faded or yellowish colors',
      'Frequent changes in eyeglass power',
    ],
    recommendation: 'Micro-Incision Phacoemulsification with foldable IOL lens replacement by Dr. J.D. Mandal.',
    doctorNote: 'Cataracts cannot be reversed by eye drops or spectacles. Stitchless Phaco surgery permanently restores optical clarity.',
    filterClass: 'blur-[2px] brightness-90 contrast-75 sepia-[0.3]',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
  },
  {
    id: 'glaucoma',
    name: 'Glaucoma (काला मोतिया)',
    hindiName: 'काला मोतिया (टनल विज़न)',
    shortDesc: 'Silent high eye pressure damaging optic nerve fibers, constricting peripheral vision into a tunnel.',
    symptoms: [
      'Gradual loss of side/peripheral vision',
      'Tunnel vision in advanced stages',
      'Severe eye ache or brow pain with nausea (acute angle-closure)',
      'Rainbow halos around lights',
    ],
    recommendation: 'Urgent Non-Contact Tonometry (IOP check) and optic disc fundus biomicroscopy.',
    doctorNote: 'Glaucoma is often symptom-free in early stages ("the silent thief of sight"). Regular pressure checks protect vision.',
    filterClass: 'radial-tunnel-vision',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
  },
  {
    id: 'diabetic',
    name: 'Diabetic Retinopathy',
    hindiName: 'डायबिटिक रेटिनोपैथी',
    shortDesc: 'Elevated blood sugars weaken delicate retinal microvessels, creating dark floaters and blind spots.',
    symptoms: [
      'Floating dark specks, cobwebs, or spots',
      'Fluctuating vision clarity day to day',
      'Dark or empty areas in visual field',
      'Washed-out colors',
    ],
    recommendation: 'Annual dilated fundus biomicroscopy & physician blood sugar stabilization.',
    doctorNote: 'All diabetic patients should undergo comprehensive dilated retinal checks every 6 to 12 months at TOPSUN.',
    filterClass: 'retinopathy-blotches',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
  },
  {
    id: 'astigmatism',
    name: 'High Astigmatism / Refractive Blur',
    hindiName: 'एस्टिग्मैटिज्म / दृष्टि दोष',
    shortDesc: 'Irregular corneal curvature causing light distortion, light streaks, and persistent eye strain.',
    symptoms: [
      'Blurry or distorted vision at all distances',
      'Headaches after screen use or reading',
      'Squinting to focus on distant street signs',
      'Elongated light rays around headlights at night',
    ],
    recommendation: 'Computerized Autorefraction and precision Toric lenses or customized spectacles.',
    doctorNote: 'Accurate refractive correction eliminates chronic ocular headaches and eye fatigue within 48 hours.',
    filterClass: 'astigmatism-stretch blur-[1.5px]',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
  },
];

export const VisionSimulator: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('cataract');
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const activeCondition = conditions.find((c) => c.id === selectedId) || conditions[1];

  const baseImage =
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200';

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-soft text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider mb-3">
            <Focus className="w-4 h-4 text-secondary" />
            <span>Interactive Vision Simulator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1C2434] tracking-tight">
            See the World Through Different Eyes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-brandText-muted leading-relaxed">
            Experience how common eye disorders like Cataracts, Glaucoma, and Diabetic Retinopathy impair daily vision. Compare simulated vision against healthy 20/20 vision below.
          </p>
        </div>

        {/* Condition Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {conditions.map((item) => {
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs ${
                  isSelected
                    ? 'bg-primary text-white shadow-md scale-105 ring-2 ring-primary/20'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Main Simulator Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-floating overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Visual Simulation Display (Left 7 Cols) */}
          <div className="lg:col-span-7 p-4 sm:p-6 flex flex-col justify-between bg-slate-900 relative min-h-[380px] sm:min-h-[460px]">
            {/* Simulation Canvas / Image */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden select-none">
              {/* Underlying Base Image with Condition Filter */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={baseImage}
                  alt={activeCondition.name}
                  className={`w-full h-full object-cover transition-all duration-500 ${activeCondition.filterClass}`}
                />

                {/* Glaucoma Tunnel Overlay */}
                {selectedId === 'glaucoma' && (
                  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.92)_75%)]" />
                )}

                {/* Diabetic Blotches Overlay */}
                {selectedId === 'diabetic' && (
                  <div className="absolute inset-0 pointer-events-none opacity-80 mix-blend-multiply">
                    <div className="absolute top-1/4 left-1/3 w-16 h-16 rounded-full bg-slate-900/90 blur-md" />
                    <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-slate-900/85 blur-lg" />
                    <div className="absolute bottom-1/3 left-1/4 w-12 h-12 rounded-full bg-slate-900/95 blur-sm" />
                    <div className="absolute top-1/3 right-1/3 w-20 h-10 rounded-full bg-slate-900/80 blur-md" />
                  </div>
                )}

                {/* Cataract Milky Overlay */}
                {selectedId === 'cataract' && (
                  <div className="absolute inset-0 pointer-events-none bg-amber-900/10 backdrop-blur-[1.5px]" />
                )}

                {/* Astigmatism Flare Overlay */}
                {selectedId === 'astigmatism' && (
                  <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(255,255,255,0.4)_80%)]" />
                )}
              </div>

              {/* Badges on the image */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-sm border ${activeCondition.badgeColor}`}>
                  {activeCondition.name}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-20 bg-black/60 backdrop-blur-md text-white p-3 rounded-xl border border-white/20 text-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-secondary-light shrink-0" />
                  <span className="font-hindi font-medium">{activeCondition.hindiName}</span>
                </div>
                <span className="text-[11px] text-slate-300 hidden sm:inline">
                  Interactive simulation preview
                </span>
              </div>
            </div>
          </div>

          {/* Clinical Insights & Action Panel (Right 5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white border-t lg:border-t-0 lg:border-l border-slate-200">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  Clinical Profile
                </span>
                <span className="text-[11px] font-semibold text-slate-500">
                  Reviewed by Dr. J.D. Mandal
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#1C2434] leading-tight">
                {activeCondition.name}
              </h3>
              <p className="text-sm font-semibold text-secondary font-hindi mt-1">
                {activeCondition.hindiName}
              </p>

              <p className="mt-3 text-xs sm:text-sm text-brandText-muted leading-relaxed">
                {activeCondition.shortDesc}
              </p>

              {/* Symptoms Checklist */}
              <div className="mt-5">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                  <span>Key Symptoms To Watch For:</span>
                </h4>
                <ul className="space-y-2">
                  {activeCondition.symptoms.map((symptom, idx) => (
                    <li key={idx} className="flex items-start text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-secondary mr-2 shrink-0 mt-0.5" />
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Doctor Guidance Box */}
              <div className="mt-5 p-3.5 rounded-2xl bg-primary-soft/60 border border-primary/20 text-xs">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="font-bold text-primary">Specialist Recommendation:</span>
                </div>
                <p className="text-slate-700 leading-relaxed font-medium">
                  {activeCondition.recommendation}
                </p>
                <p className="mt-1.5 text-[11px] text-slate-500 italic">
                  "{activeCondition.doctorNote}"
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5">
              <Link
                to={`/contact?service=${encodeURIComponent(activeCondition.name)}#appointment`}
                className="flex-1 inline-flex items-center justify-center px-4 py-3 rounded-xl bg-primary hover:bg-primary-light text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
              >
                <span>Book Evaluation</span>
                <ArrowRight className="w-4 h-4 ml-1.5 text-secondary-light" />
              </Link>

              <a
                href={getWhatsAppUrl(`Hello TOPSUN Hospital, I was testing the vision simulator for ${activeCondition.name} and would like to consult Dr. J.D. Mandal.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-3 rounded-xl border border-secondary/30 bg-secondary-soft text-secondary hover:bg-secondary hover:text-white text-xs sm:text-sm font-bold transition-all"
              >
                <span>WhatsApp Consult</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
