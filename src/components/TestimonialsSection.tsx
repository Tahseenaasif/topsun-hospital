import React from 'react';
import { Star, CheckCircle2, Quote, MapPin, Sparkles, Heart } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  age: number;
  location: string;
  procedure: string;
  rating: number;
  review: string;
  hindiQuote: string;
  image: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rameshwar Jha',
    age: 68,
    location: 'Rahika, Madhubani',
    procedure: 'Bilateral Phacoemulsification Cataract Surgery',
    rating: 5,
    review:
      'I was struggling to read religious texts and see street lights at night for almost two years. Dr. J.D. Mandal explained the whole stitchless procedure with so much patience. The surgery was over in 15 minutes without any pain! Now my eyesight is crystal clear.',
    hindiQuote: 'फेको सर्जरी के बाद अब मैं बिना किसी परेशानी के सब कुछ साफ देख पा रहा हूँ। डॉक्टर साहब का बहुत-बहुत धन्यवाद।',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300',
    date: 'Verified Patient • 2 weeks ago',
  },
  {
    id: 2,
    name: 'Sushila Devi',
    age: 62,
    location: 'Basauli, Madhubani',
    procedure: 'Micro-Incision Cataract Surgery with Foldable IOL',
    rating: 5,
    review:
      'My son brought me from village to TOPSUN Hospital on Rahika Road. We were worried about injections, but they only used eye drops! Dr. Khurshid monitored my BP throughout. Discharged on the very same afternoon.',
    hindiQuote: 'बिना सुई और बिना दर्द के ऑपरेशन हुआ। उसी दिन घर लौट आए। अस्पताल की सफाई और व्यवस्था बहुत अच्छी है।',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300',
    date: 'Verified Patient • 1 month ago',
  },
  {
    id: 3,
    name: 'Manoj Kumar Thakur',
    age: 54,
    location: 'Darbhanga / Madhubani',
    procedure: 'Toric IOL Cataract Surgery & Glaucoma Check',
    rating: 5,
    review:
      'I had high cylindrical power along with early cataract. Dr. Mandal recommended a Toric IOL. Today my distance vision is 6/6 and I drive my car at night without blinding glare. TOPSUN is true metropolitan-level eye care right here in Mithilanchal.',
    hindiQuote: 'उच्च तकनीक और बेहतरीन डॉक्टर। टॉरिक लेंस से मेरी दूर की दृष्टि बिल्कुल साफ हो गई है।',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    date: 'Verified Patient • 3 weeks ago',
  },
  {
    id: 4,
    name: 'Anjali Kumari',
    age: 42,
    location: 'Benipatti, Bihar',
    procedure: 'Diabetic Retinopathy Screening & Refraction',
    rating: 5,
    review:
      'As a diabetic for 8 years, I needed regular retina monitoring. The slit-lamp exam and fundus checkup were very detailed. The medical team explained dietary and blood sugar care very clearly.',
    hindiQuote: 'डायबिटीज के मरीजों के लिए आँखों की जांच बहुत जरूरी है। टॉपसन अस्पताल में बहुत ध्यान से चेकअप किया गया।',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
    date: 'Verified Patient • 1 month ago',
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-secondary border border-secondary/20 text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-4 h-4 text-secondary fill-secondary/20" />
            <span>Real Patient Experiences</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1C2434] tracking-tight">
            Trusted by Thousands of Families in Mithilanchal
          </h2>
          <p className="mt-3 text-sm sm:text-base text-brandText-muted leading-relaxed">
            Read how TOPSUN HOSPITAL has restored crystal clear vision and independence to cataract and eye care patients across Madhubani and North Bihar.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50/70 rounded-3xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-soft hover:shadow-premium hover:border-primary/20 transition-all duration-300 relative group"
            >
              <div>
                {/* Header: Photo, Name, Verified */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-sm shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-base font-black text-[#1C2434]">
                          {item.name}
                        </h3>
                        <span className="text-xs text-slate-400">({item.age} yrs)</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                        <MapPin className="w-3 h-3 text-primary" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Verified Badge */}
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-600 ml-1.5">5.0 / 5.0</span>
                </div>

                {/* Procedure Badge */}
                <div className="mb-3">
                  <span className="inline-block text-[11px] font-semibold text-primary bg-primary-soft px-2.5 py-0.5 rounded-md border border-primary/20">
                    {item.procedure}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                  "{item.review}"
                </p>

                {/* Hindi Quote */}
                <p className="text-xs font-hindi text-secondary font-bold bg-white p-3 rounded-xl border border-slate-200/80">
                  {item.hindiQuote}
                </p>
              </div>

              {/* Footer Date */}
              <div className="pt-4 border-t border-slate-200/70 mt-4 flex items-center justify-between text-[11px] text-slate-400">
                <span>{item.date}</span>
                <span className="text-primary font-semibold">Topsun Hospital Patient</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stat Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary inline-block animate-pulse" />
            <span>Over 15,000+ Cataract & Eye Surgeries Successfully Performed in Bihar</span>
          </div>
        </div>
      </div>
    </section>
  );
};

