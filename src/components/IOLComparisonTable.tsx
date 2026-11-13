import React from 'react';
import { Check, X, Sparkles, Glasses, Award, Eye, ShieldCheck, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getWhatsAppUrl } from '../data/hospitalInfo';

interface LensType {
  name: string;
  badge: string;
  highlightClass: string;
  description: string;
  distanceVision: string;
  intermediateVision: string;
  nearReadingVision: string;
  glassesDependence: string;
  idealFor: string;
  features: string[];
}

const lensOptions: LensType[] = [
  {
    name: 'Monofocal Standard IOL',
    badge: 'Most Popular & Reliable',
    highlightClass: 'border-slate-200 bg-white',
    description: 'Set for sharp distant vision (driving, TV, outdoor walks). Simple reading glasses are worn for books and fine print.',
    distanceVision: 'Excellent (Sharp & Crisp)',
    intermediateVision: 'Moderate (Dashboard & TV)',
    nearReadingVision: 'Requires Reading Glasses (+2.00 to +2.50 D)',
    glassesDependence: 'Reading glasses needed for near tasks',
    idealFor: 'Value-conscious patients happy to wear glasses for reading.',
    features: [
      'Time-tested proven optical clarity',
      'Minimal night glare or halos',
      'Affordable surgical package option',
      'UV-protective optical filter',
    ],
  },
  {
    name: 'Toric Astigmatism IOL',
    badge: 'Cylindrical Correction',
    highlightClass: 'border-blue-300 bg-blue-50/30 ring-1 ring-blue-300',
    description: 'Specifically engineered to neutralize pre-existing corneal astigmatism (cylindrical power) along with cataract removal.',
    distanceVision: 'Ultra-Sharp (Astigmatism Neutralized)',
    intermediateVision: 'Good clarity without distortion',
    nearReadingVision: 'Standard reading glasses for fine print',
    glassesDependence: 'Eliminates distance cylindrical glasses entirely',
    idealFor: 'Patients with cylinder power (>0.75 D) wanting sharp distance clarity.',
    features: [
      'Custom axis alignment during surgery',
      'Corrects both cataract & astigmatism simultaneously',
      'High contrast sensitivity',
      'Great for night drivers & outdoor workers',
    ],
  },
  {
    name: 'Multifocal / Trifocal / EDOF IOL',
    badge: 'Maximum Glasses Freedom',
    highlightClass: 'border-primary/40 bg-gradient-to-b from-primary-soft/40 to-white ring-2 ring-primary/20',
    description: 'Advanced diffractive optics splitting light across distance, intermediate (computer/tablets), and near reading zones.',
    distanceVision: 'Excellent (Continuous Focus)',
    intermediateVision: 'Excellent (Computers, laptops & dashboard)',
    nearReadingVision: 'Very Good (Reading, mobile & newspapers without glasses)',
    glassesDependence: '85% to 95% complete freedom from spectacles',
    idealFor: 'Active individuals seeking independent vision without reading glasses.',
    features: [
      'Full visual range from book to horizon',
      'Extended Depth of Focus (EDOF) technology',
      'High patient lifestyle satisfaction',
      'Premium European / US FDA approved optic design',
    ],
  },
];

export const IOLComparisonTable: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-soft text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span>Intraocular Lens (IOL) Options</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1C2434] tracking-tight">
            Choosing the Right Lens for Your Eyes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-brandText-muted leading-relaxed">
            During cataract surgery, your cloudy lens is replaced with a customized intraocular lens (IOL). Review the lens technologies available at TOPSUN HOSPITAL.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {lensOptions.map((lens, idx) => (
            <div
              key={idx}
              className={`rounded-3xl border p-6 sm:p-7 flex flex-col justify-between shadow-soft hover:shadow-premium transition-all duration-300 relative ${lens.highlightClass}`}
            >
              <div>
                <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-3">
                  {lens.badge}
                </span>

                <h3 className="text-xl font-black text-[#1C2434] mb-2">
                  {lens.name}
                </h3>
                <p className="text-xs sm:text-sm text-brandText-muted leading-relaxed mb-6">
                  {lens.description}
                </p>

                {/* Vision Ratings */}
                <div className="space-y-3 pt-4 border-t border-slate-200/70 text-xs">
                  <div>
                    <span className="text-slate-500 font-semibold block">Distance (Driving, TV):</span>
                    <span className="font-extrabold text-primary">{lens.distanceVision}</span>
                  </div>

                  <div>
                    <span className="text-slate-500 font-semibold block">Intermediate (Laptop, Kitchen):</span>
                    <span className="font-extrabold text-[#1C2434]">{lens.intermediateVision}</span>
                  </div>

                  <div>
                    <span className="text-slate-500 font-semibold block">Near (Books, Mobile, Medicine labels):</span>
                    <span className="font-extrabold text-secondary">{lens.nearReadingVision}</span>
                  </div>

                  <div className="bg-white/80 p-3 rounded-xl border border-slate-200/80">
                    <span className="text-slate-500 font-bold block mb-0.5">Glasses Dependence:</span>
                    <span className="text-xs font-semibold text-slate-800">{lens.glassesDependence}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="mt-6 pt-4 border-t border-slate-200/70">
                  <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                    Lens Highlights:
                  </p>
                  <ul className="space-y-2">
                    {lens.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-secondary mr-2 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Consultation Link */}
              <div className="mt-8 pt-4 border-t border-slate-200/70">
                <a
                  href={getWhatsAppUrl(`Hello TOPSUN Hospital, I would like to consult Dr. J.D. Mandal about ${lens.name} options and biometry.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-xs font-bold text-primary shadow-xs transition-colors"
                >
                  <span>Inquire About This Lens</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Doctor Advice Footer */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-3.5 text-xs text-slate-600">
          <HelpCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-slate-800">Doctor's Clinical Note:</strong> The best IOL for you depends on your corneal measurements, retinal health, daily occupational demands, and whether you drive extensively at night. Dr. J.D. Mandal conducts high-precision optical biometry before surgery to recommend the safest, most effective lens for your eyes.
          </p>
        </div>
      </div>
    </section>
  );
};
