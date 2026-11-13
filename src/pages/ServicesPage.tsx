import React, { useState } from 'react';
import { Eye, Search, Filter, ShieldCheck, Sparkles, Calendar, Phone, Activity, HelpCircle, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { EyeCheckQuiz } from '../components/EyeCheckQuiz';
import { EmergencyBanner } from '../components/EmergencyBanner';
import { SERVICES_DATA, ServiceItem } from '../data/servicesData';
import { HOSPITAL_INFO, getWhatsAppUrl } from '../data/hospitalInfo';
import { Link } from 'react-router-dom';

export const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'cataract' | 'general' | 'additional'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = SERVICES_DATA.filter((service: ServiceItem) => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesQuery =
      searchQuery.trim() === '' ||
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.serviceType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const categories = [
    { id: 'all', label: `All Services (${SERVICES_DATA.length})`, count: SERVICES_DATA.length },
    { id: 'cataract', label: 'Cataract Services', count: SERVICES_DATA.filter((s) => s.category === 'cataract').length },
    { id: 'general', label: 'General Ophthalmology', count: SERVICES_DATA.filter((s) => s.category === 'general').length },
    { id: 'additional', label: 'Additional Eye Care', count: SERVICES_DATA.filter((s) => s.category === 'additional').length },
  ];

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Eye Care Services in Madhubani | Cataract & Ophthalmology – TOPSUN HOSPITAL"
        description="Comprehensive ophthalmology and cataract services at TOPSUN HOSPITAL, Madhubani. Providing phacoemulsification, comprehensive eye examinations, glaucoma evaluations, diabetic eye screenings, and pediatric eye checkups."
        canonicalPath="/services"
        keywords={[
          'Eye Care Services Madhubani',
          'Ophthalmologist in Madhubani',
          'Eye Checkup Rahika Road',
          'Diabetic Eye Screening Bihar',
          'Glaucoma Checkup Madhubani',
          'Pediatric Eye Doctor Madhubani',
        ]}
      />

      {/* Emergency Alert Banner */}
      <EmergencyBanner />

      {/* Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-200">
        <Breadcrumbs items={[{ label: 'Eye Care Services', path: '/services' }]} />
      </div>

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-primary-soft/50 via-white to-white pt-10 pb-12 sm:pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary-soft px-3.5 py-1.5 rounded-full border border-primary/20">
              Ophthalmic Clinical Scope
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C2434] tracking-tight mt-3">
              Eye Care Services at TOPSUN HOSPITAL
            </h1>
            <p className="mt-3.5 text-base sm:text-lg text-brandText-muted leading-relaxed">
              Explore our comprehensive range of cataract surgeries, diagnostic evaluations, and clinical consultations designed to protect and restore your sight in Madhubani.
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
            {/* Search Box */}
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services (e.g. cataract, diabetic, glaucoma, cornea)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary shadow-xs"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    selectedCategory === cat.id
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-12 sm:py-16 bg-brandBgLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {filteredServices.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 max-w-md mx-auto">
              <Eye className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No Services Found</h3>
              <p className="text-xs text-slate-500 mt-1 mb-4">
                No matching eye care services found for "{searchQuery}". Try a different keyword or reset filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-xl"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ONLINE EYE ASSESSMENT QUIZ */}
      <EyeCheckQuiz />

      {/* Clinical Differentiation & Transparency Notice */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-secondary" />
                <span>Clinical Transparency & Facility Scope</span>
              </div>
              <p className="text-xs sm:text-sm text-brandText-muted leading-relaxed">
                TOPSUN HOSPITAL clearly distinguishes between diagnostic screening, outpatient clinical evaluation, and surgical procedures. In compliance with medical guidelines, we confirm each patient's suitability for surgery through dedicated pre-operative biometry and physician evaluation.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/contact#appointment"
                className="px-5 py-3 rounded-xl bg-primary text-white text-xs sm:text-sm font-bold hover:bg-primary-light shadow-sm transition-all"
              >
                Book Eye Exam
              </Link>
              <a
                href={`tel:${HOSPITAL_INFO.primaryPhone}`}
                className="px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-bold hover:bg-slate-50 transition-all"
              >
                Call {HOSPITAL_INFO.primaryPhone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
