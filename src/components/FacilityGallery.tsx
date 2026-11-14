import React, { useState } from 'react';
import { Eye, Sparkles, ShieldCheck, ZoomIn, X, ChevronRight, Activity, MapPin } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalInfo';

interface GalleryItem {
  id: string;
  category: 'hospital' | 'ot' | 'opd' | 'diagnostics' | 'recovery';
  title: string;
  hindiTitle: string;
  description: string;
  image: string;
  badge: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 'hospital-building-front',
    category: 'hospital',
    title: 'TOPSUN HOSPITAL Exterior & Reception Entrance',
    hindiTitle: 'टॉपसन हॉस्पिटल मुख्य भवन एवं रिसेप्शन',
    description: 'Actual exterior photograph of TOPSUN HOSPITAL Advance Eye Care Centre on Rahika Road, Basauli, Madhubani showing hospital entrance, reception desk, and emergency triage station.',
    image: '/images/hospital/hospital-front.jpg',
    badge: 'Official Hospital Building',
  },
  {
    id: 'hospital-consultation-team',
    category: 'hospital',
    title: 'Consultation Desk & Clinical Medical Team',
    hindiTitle: 'परामर्श कक्ष एवं मेडिकल टीम',
    description: 'Senior Consultant Ophthalmologist Dr. J.D. Mandal and clinical colleagues at the hospital OPD consultation desk with blood pressure monitoring and ophthalmic diagnostic tools.',
    image: '/images/hospital/hospital-team.jpg',
    badge: 'OPD Consultation Desk',
  },
  {
    id: 'hospital-official-panel-board',
    category: 'hospital',
    title: 'Official Registration & Doctors Panel Board',
    hindiTitle: 'शासकीय निबंधन एवं चिकित्सक बोर्ड',
    description: 'Government Registration No. 658/2026 official board displaying lead specialists: Dr. J.D. Mandal, Dr. Khurshid, Dr. Ashwini Bhardwaj, and Dr. MD Merajul Hoda.',
    image: '/images/hospital/hospital-board.jpg',
    badge: 'Govt Reg. No. 658/2026',
  },
  {
    id: 'hospital-gps-pillar',
    category: 'hospital',
    title: 'GPS Verified Highway Landmark (NH 527B)',
    hindiTitle: 'जीपीएस प्रमाणित हाईवे बोर्ड (NH 527B)',
    description: 'GPS map camera verified photo on NH 527B, Madhubani (Lat: 26.330266, Long: 85.983871) detailing stitchless Phaco cataract surgery and glaucoma diagnosis.',
    image: '/images/hospital/gps-pillar.jpg',
    badge: 'GPS Verified Location',
  },
  {
    id: 'ot-1',
    category: 'ot',
    title: 'Advanced Phacoemulsification Surgical Theatre',
    hindiTitle: 'अत्याधुनिक फेको ऑपरेशन थिएटर',
    description: 'Sterile operating room with positive pressure laminar airflow, high-magnification surgical operating microscopes, and cold ultrasound phaco handpieces.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000',
    badge: 'Micro-Incision Eye Surgery OT',
  },
  {
    id: 'opd-1',
    category: 'opd',
    title: 'Slit-Lamp Biomicroscopy & Cornea Station',
    hindiTitle: 'स्लिट-लैम्प बायोमाइक्रोस्कोपी ओपीडी',
    description: 'High-contrast optical slit-lamp for detailed examination of the cornea, anterior chamber, iris, lens opacity grade, and ocular surface health.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000',
    badge: 'Precision Diagnostic OPD',
  },
  {
    id: 'diagnostics-1',
    category: 'diagnostics',
    title: 'Optical Biometry & A-Scan Lens Power Station',
    hindiTitle: 'ऑप्टिकल बायोमेट्री और सटीक लेंस माप',
    description: 'Computerized axial length calculation for determining exact intraocular lens power before cataract procedures, ensuring optimal postoperative vision.',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=1000',
    badge: 'Sub-Millimeter IOL Precision',
  },
  {
    id: 'recovery-1',
    category: 'recovery',
    title: 'Comfortable Daycare Recovery Observation Bay',
    hindiTitle: 'आरामदायक डे-केयर रिकवरी वार्ड',
    description: 'Calm, sanitized patient observation area where cataract patients relax post-surgery before their same-day walk-home discharge.',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1000',
    badge: 'Same-Day Walk Home',
  },
  {
    id: 'opd-2',
    category: 'opd',
    title: 'Digital Refraction & Snellen Acuity Suite',
    hindiTitle: 'डिजिटल रिफ्रैक्शन और विज़न टेस्टिंग',
    description: 'Standardized digital projector acuity charts and automated phoropters for accurate eyeglass prescription and visual clarity testing.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000',
    badge: 'Accurate Spectacle Correction',
  },
  {
    id: 'diagnostics-2',
    category: 'diagnostics',
    title: 'Anesthesia Safety & Multi-Parameter Vitals Station',
    hindiTitle: 'एनेस्थीसिया सुरक्षा और वाइटल्स मॉनिटरिंग',
    description: 'Comprehensive pulse oximetry, cardiac rhythm monitoring, and non-invasive blood pressure tracking supervised by Dr. Khurshid (MBBS, MD).',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1000',
    badge: 'Patient Safety Supervised',
  },
];

export const FacilityGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'hospital' | 'ot' | 'opd' | 'diagnostics' | 'recovery'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-soft text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider mb-3">
            <Eye className="w-4 h-4 text-secondary" />
            <span>State-of-the-Art Infrastructure</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1C2434] tracking-tight">
            Our Hospital Premises & Eye Care Facilities
          </h2>
          <p className="mt-3 text-sm sm:text-base text-brandText-muted leading-relaxed">
            Take a visual tour of TOPSUN HOSPITAL on Rahika Road, Madhubani. Real photographs of our hospital building, doctor consultation rooms, and modern eye surgical equipment.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'hospital', label: 'Hospital Campus & Team' },
            { id: 'ot', label: 'Surgical Operating OT' },
            { id: 'opd', label: 'Diagnostic OPD Suites' },
            { id: 'diagnostics', label: 'Biometry & Monitoring' },
            { id: 'recovery', label: 'Daycare Recovery' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === tab.id
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="bg-slate-50 rounded-3xl border border-slate-200/90 overflow-hidden shadow-soft hover:shadow-premium hover:border-primary/40 transition-all duration-300 cursor-pointer group flex flex-col"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 text-primary backdrop-blur-xs">
                    {item.badge}
                  </span>
                </div>

                {/* Zoom icon on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center shadow-lg">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Text Information */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1C2434] group-hover:text-primary transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-bold text-secondary font-hindi mb-2">
                    {item.hindiTitle}
                  </p>
                  <p className="text-xs text-brandText-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/70 mt-4 flex items-center justify-between text-xs font-semibold text-primary">
                  <span>View Facility Details</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-secondary bg-secondary-soft px-3 py-1 rounded-full border border-secondary/20 mb-2">
                  {selectedPhoto.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#1C2434] mb-1">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm font-bold text-secondary font-hindi mb-3">
                  {selectedPhoto.hindiTitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {selectedPhoto.description}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Location: TOPSUN HOSPITAL, Basauli, Rahika Road</span>
                  <span className="font-bold text-primary">Reg. No: 658/2026</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

