import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { HOSPITAL_INFO, getAppointmentWhatsAppUrl } from '../data/hospitalInfo';

interface AppointmentFormProps {
  defaultService?: string;
  defaultDoctor?: string;
  className?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  defaultService = '',
  defaultDoctor = '',
  className = '',
}) => {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: 'Morning (09:00 AM - 01:00 PM)',
    service: defaultService || 'Cataract Evaluation',
    message: defaultDoctor ? `Requesting consultation with ${defaultDoctor}` : '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmittedDetails, setLastSubmittedDetails] = useState<typeof formData | null>(null);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Patient name is required.';
    } else if (formData.patientName.trim().length < 2) {
      newErrors.patientName = 'Please enter a valid name.';
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'Contact number is required.';
    } else if (cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date.';
    } else {
      const selected = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.preferredDate = 'Preferred date cannot be in the past.';
      }
    }

    if (!formData.service) {
      newErrors.service = 'Please select an eye care service.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLastSubmittedDetails({ ...formData });
    setSubmitted(true);

    // Launch WhatsApp with prefilled patient appointment message
    const whatsappUrl = getAppointmentWhatsAppUrl({
      patientName: formData.patientName,
      phone: formData.phone,
      service: formData.service,
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      message: formData.message,
    });

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      patientName: '',
      phone: '',
      email: '',
      preferredDate: '',
      preferredTime: 'Morning (09:00 AM - 01:00 PM)',
      service: 'Cataract Evaluation',
      message: '',
    });
  };

  // Get tomorrow's date for min-date picker
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split('T')[0];

  return (
    <div className={`bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-premium ${className}`}>
      {submitted && lastSubmittedDetails ? (
        <div className="text-center py-6 animate-fade-in">
          <div className="w-16 h-16 bg-secondary-soft text-secondary rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-[#1C2434] mb-2">
            Inquiry Generated Successfully!
          </h3>
          <p className="text-sm text-brandText-muted max-w-md mx-auto mb-6">
            Your appointment inquiry details have been formatted. Our hospital care desk receives your request via WhatsApp for instant confirmation.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-sm mx-auto text-left text-xs space-y-2 mb-6">
            <div className="flex justify-between">
              <span className="text-slate-500">Patient:</span>
              <span className="font-bold text-slate-800">{lastSubmittedDetails.patientName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Phone:</span>
              <span className="font-bold text-slate-800">{lastSubmittedDetails.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Service:</span>
              <span className="font-bold text-primary">{lastSubmittedDetails.service}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Preferred Date:</span>
              <span className="font-bold text-slate-800">{lastSubmittedDetails.preferredDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Slot:</span>
              <span className="font-bold text-slate-800">{lastSubmittedDetails.preferredTime}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getAppointmentWhatsAppUrl(lastSubmittedDetails)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#20ba59] shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Reopen WhatsApp Chat
            </a>
            <button
              onClick={handleReset}
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-100 transition-colors"
            >
              Book Another Visit
            </button>
          </div>

          <p className="text-xs text-slate-400 mt-5">
            * Note: Slot availability is subject to clinical schedule at TOPSUN HOSPITAL, Madhubani.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="border-b border-slate-100 pb-4 mb-4">
            <span className="text-xs font-bold text-secondary uppercase tracking-wider bg-secondary-soft px-3 py-1 rounded-full border border-secondary/20">
              Quick Appointment Inquiry
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#1C2434] mt-2">
              Schedule Your Eye Consultation
            </h3>
            <p className="text-xs sm:text-sm text-brandText-muted mt-1">
              Fill in your details below. We instantly prepare a WhatsApp appointment request for prompt confirmation.
            </p>
          </div>

          {/* Patient Name */}
          <div>
            <label htmlFor="patientName" className="block text-xs font-bold text-slate-700 mb-1">
              Patient Full Name <span className="text-accent">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                id="patientName"
                name="patientName"
                value={formData.patientName}
                onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                placeholder="e.g. Ramesh Kumar"
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.patientName ? 'border-accent focus:ring-accent/20' : 'border-slate-300 focus:border-primary focus:ring-primary/20'
                }`}
                required
              />
            </div>
            {errors.patientName && (
              <p className="mt-1 text-xs text-accent flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.patientName}
              </p>
            )}
          </div>

          {/* Contact Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1">
                Mobile Number <span className="text-accent">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 9709419467"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                    errors.phone ? 'border-accent focus:ring-accent/20' : 'border-slate-300 focus:border-primary focus:ring-primary/20'
                  }`}
                  required
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-xs text-accent flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1">
                Email Address <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                    errors.email ? 'border-accent focus:ring-accent/20' : 'border-slate-300 focus:border-primary focus:ring-primary/20'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-xs text-accent flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Service Selection */}
          <div>
            <label htmlFor="service" className="block text-xs font-bold text-slate-700 mb-1">
              Select Eye Care Service <span className="text-accent">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            >
              <optgroup label="Cataract Services">
                <option value="Cataract Evaluation">Cataract Evaluation</option>
                <option value="Phacoemulsification Surgery">Phacoemulsification Surgery</option>
                <option value="Cataract Surgery Consultation">Cataract Surgery Consultation</option>
                <option value="Postoperative Cataract Care">Postoperative Cataract Care</option>
              </optgroup>
              <optgroup label="General Ophthalmology">
                <option value="Comprehensive Eye Examination">Comprehensive Eye Examination</option>
                <option value="Vision Assessment & Glasses Check">Vision Assessment & Glasses Check</option>
                <option value="Diabetic Eye Screening">Diabetic Eye Screening</option>
                <option value="Glaucoma Evaluation">Glaucoma Evaluation</option>
                <option value="Retina Evaluation">Retina Evaluation</option>
                <option value="Dry Eye Assessment">Dry Eye Assessment</option>
                <option value="Pediatric Eye Examination">Pediatric Eye Examination</option>
                <option value="Red Eye / Infection Consultation">Red Eye / Infection Consultation</option>
              </optgroup>
              <optgroup label="Additional Eye Care">
                <option value="Corneal Evaluation">Corneal Evaluation</option>
                <option value="Eyelid Disorders">Eyelid Disorders</option>
                <option value="Squint Evaluation">Squint Evaluation</option>
                <option value="Routine Eye Checkup">Routine Eye Checkup</option>
              </optgroup>
            </select>
          </div>

          {/* Date & Time Slot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="preferredDate" className="block text-xs font-bold text-slate-700 mb-1">
                Preferred Date <span className="text-accent">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Calendar className="w-4 h-4" />
                </div>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  min={minDateStr}
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                    errors.preferredDate ? 'border-accent focus:ring-accent/20' : 'border-slate-300 focus:border-primary focus:ring-primary/20'
                  }`}
                  required
                />
              </div>
              {errors.preferredDate && (
                <p className="mt-1 text-xs text-accent flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.preferredDate}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="preferredTime" className="block text-xs font-bold text-slate-700 mb-1">
                Preferred Time Slot
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Clock className="w-4 h-4" />
                </div>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                >
                  <option value="Morning (09:00 AM - 01:00 PM)">Morning (09:00 AM – 01:00 PM)</option>
                  <option value="Afternoon (01:00 PM - 04:00 PM)">Afternoon (01:00 PM – 04:00 PM)</option>
                  <option value="Evening (04:00 PM - 06:00 PM)">Evening (04:00 PM – 06:00 PM)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notes / Symptoms */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1">
              Symptoms / Specific Requirements <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <div className="relative">
              <div className="absolute top-3 left-3.5 pointer-events-none text-slate-400">
                <FileText className="w-4 h-4" />
              </div>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Mention any symptoms (e.g. blurry vision, glare, diabetic history)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-primary text-white font-bold text-sm sm:text-base hover:bg-primary-light transition-all shadow-md hover:shadow-lg active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-primary/30"
            >
              <MessageCircle className="w-5 h-5 text-secondary-light" />
              <span>Submit Appointment Request via WhatsApp</span>
            </button>
          </div>

          <p className="text-center text-[11px] text-brandText-muted">
            🔒 By submitting, your inquiry is routed directly to TOPSUN HOSPITAL desk. For instant telephone assistance, call{' '}
            <a href={`tel:${HOSPITAL_INFO.primaryPhone}`} className="text-primary font-bold underline">
              {HOSPITAL_INFO.primaryPhone}
            </a>
            .
          </p>
        </form>
      )}
    </div>
  );
};

