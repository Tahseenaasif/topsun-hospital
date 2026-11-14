import React from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  MessageCircle,
  ExternalLink,
  Calendar,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { AppointmentForm } from '../components/AppointmentForm';
import { EmergencyBanner } from '../components/EmergencyBanner';
import { HOSPITAL_INFO, getWhatsAppUrl } from '../data/hospitalInfo';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const defaultService = searchParams.get('service') || '';
  const defaultDoctor = searchParams.get('doctor') || '';

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Contact TOPSUN HOSPITAL | Eye Hospital in Madhubani, Bihar"
        description="Contact TOPSUN HOSPITAL – Advance Eye Care Centre. Phone numbers: 9709419467, 9958643862. Email: topsunhospital@gmail.com. Address: Basauli, Rahika Road, Madhubani, Bihar. Book an appointment or chat via WhatsApp."
        canonicalPath="/contact"
        keywords={[
          'Contact TOPSUN Hospital',
          'Eye Hospital Madhubani Phone Number',
          'Rahika Road Eye Hospital Address',
          'Book Eye Specialist Appointment Madhubani',
          'Dr J D Mandal Contact',
        ]}
      />

      {/* Emergency Alert Banner */}
      <EmergencyBanner />

      {/* Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-200">
        <Breadcrumbs items={[{ label: 'Contact & Location', path: '/contact' }]} />
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-primary-soft/50 via-white to-white pt-10 pb-12 sm:pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary-soft px-3.5 py-1.5 rounded-full border border-primary/20">
              Patient Care & Inquiries
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C2434] tracking-tight mt-3">
              Contact TOPSUN HOSPITAL
            </h1>
            <p className="mt-2 text-base font-bold text-secondary font-hindi">
              {HOSPITAL_INFO.tagline}
            </p>
            <p className="mt-3.5 text-base sm:text-lg text-brandText-muted leading-relaxed">
              We are here to assist with cataract surgery evaluations, eye examination appointments, and general inquiries. Connect with our hospital desk in Madhubani.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Channels Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary-soft text-primary flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#1C2434] mb-1">Telephone Contact</h3>
              <p className="text-xs text-brandText-muted mb-3">Speak directly with our OPD desk</p>
              <div className="space-y-1.5">
                {HOSPITAL_INFO.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone}`}
                    className="block text-sm font-extrabold text-primary hover:underline"
                  >
                    +91 {phone} {idx === 0 && <span className="text-[10px] text-secondary font-semibold">(Calling)</span>}
                    {idx === 1 && <span className="text-[10px] text-[#25D366] font-semibold">(WhatsApp)</span>}
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-emerald-50/50 border border-emerald-200/80 rounded-2xl p-6 hover:border-emerald-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 text-[#128C7E] flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#1C2434] mb-1">WhatsApp Chat</h3>
              <p className="text-xs text-brandText-muted mb-3">Instant booking & questions</p>
              <a
                href={getWhatsAppUrl('Hello TOPSUN Hospital, I would like to inquire about appointments.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba59] transition-colors"
              >
                <span>Message on WhatsApp</span>
              </a>
            </div>

            {/* Address */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-accent-soft text-accent flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#1C2434] mb-1">Hospital Location</h3>
              <p className="text-xs text-slate-700 leading-relaxed mb-3">
                {HOSPITAL_INFO.address.fullAddress}
              </p>
              <a
                href={HOSPITAL_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-accent hover:underline inline-flex items-center gap-1"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Timings */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-secondary-soft text-secondary flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#1C2434] mb-1">OPD Timings</h3>
              <p className="text-xs text-slate-800 font-semibold">
                {HOSPITAL_INFO.timings.opdDays}
              </p>
              <p className="text-xs text-slate-600">
                {HOSPITAL_INFO.timings.opdHours}
              </p>
              <p className="text-[11px] text-slate-500 mt-2">
                Emergency eye care on-call support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form and Map Section */}
      <section className="py-12 sm:py-16 bg-brandBgLight border-t border-slate-200" id="appointment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Appointment Desk"
            badgeHindi="अपॉइंटमेंट बुकिंग"
            title="Book Your Consultation or Send an Inquiry"
            subtitle="Fill out the structured inquiry form below to route your request directly to our hospital team."
            badgeColor="primary"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form */}
            <div className="lg:col-span-7">
              <AppointmentForm
                defaultService={defaultService}
                defaultDoctor={defaultDoctor}
              />
            </div>

            {/* Location & Map */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-soft">
                {/* Reception & Registration Desk Photo */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-5 bg-slate-900 group">
                  <img
                    src="/images/hospital/hospital-front.jpg"
                    alt="TOPSUN Hospital Reception Desk and Building Entrance in Madhubani"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Actual Hospital Front & Reception
                    </span>
                    <span className="text-[10px] bg-white/20 backdrop-blur-md px-2 py-0.5 rounded font-semibold">
                      Basauli, Rahika Rd
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <h4 className="text-base font-bold text-[#1C2434]">
                      Hospital Directions
                    </h4>
                    <p className="text-xs text-slate-500">Rahika Road, Basauli, Madhubani</p>
                  </div>
                  <span className="text-xs font-bold text-secondary bg-secondary-soft px-2.5 py-1 rounded-full border border-secondary/20">
                    Reg. {HOSPITAL_INFO.regNumber}
                  </span>
                </div>

                <div className="mt-4 space-y-3 text-xs text-slate-600">
                  <p>
                    <strong>Landmark:</strong> Located along the main Rahika Road corridor in Basauli, easily reachable by auto-rickshaw, private vehicles, or public transit from Madhubani Railway Station (approx. 10–15 mins).
                  </p>
                  <p>
                    <strong>Email:</strong>{' '}
                    <a href={`mailto:${HOSPITAL_INFO.email}`} className="text-primary font-semibold hover:underline">
                      {HOSPITAL_INFO.email}
                    </a>
                  </p>
                  <p>
                    <strong>Official Website:</strong>{' '}
                    <a href="https://www.topsunhospital.in" className="text-primary font-semibold hover:underline">
                      www.topsunhospital.in
                    </a>
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <a
                    href={HOSPITAL_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 mr-2 text-accent-light" />
                    <span>Open in Google Maps App</span>
                  </a>
                </div>
              </div>

              {/* Live Interactive Map Embed */}
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-soft">
                <div className="h-64 sm:h-72 w-full bg-slate-100">
                  <iframe
                    title="Google Maps Location TOPSUN Hospital Madhubani"
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

