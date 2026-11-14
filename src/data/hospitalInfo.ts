import { ContactInfo } from '../types';

export const HOSPITAL_INFO: ContactInfo = {
  hospitalName: 'TOPSUN HOSPITAL',
  subtitle: 'Advance Eye Care Centre',
  tagline: 'आँखों का सर्वश्रेष्ठ अस्पताल',
  specialization: 'Advanced Eye Care & Cataract Surgery',
  regNumber: '658/2026',
  website: 'www.topsunhospital.in',
  email: 'topsunhospital@gmail.com',
  phones: ['8826266803', '9958643862', '9709419467'],
  primaryPhone: '8826266803',
  whatsappNumber: '919958643862',
  address: {
    street: 'Basauli',
    road: 'Rahika Road (NH 527B)',
    locality: 'Basauli, Rahika Road',
    city: 'Madhubani',
    district: 'Madhubani',
    state: 'Bihar',
    country: 'India',
    fullAddress: 'Basauli, Rahika Road (NH 527B), Madhubani, Bihar 847121, India',
  },
  timings: {
    opdDays: 'Monday – Saturday',
    opdHours: '9:00 AM – 6:00 PM',
    emergencyHours: 'Emergency Eye Care On-Call Support',
    cataractConsultation: 'Daily Morning & Afternoon Sessions',
  },
  // Clean embed coordinates for Madhubani, Rahika Road
  googleMapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114510.4682431681!2d86.00977259999999!3d26.3533816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edcd0f8bbd6d53%3A0xb3a8265a0c9a41ee!2sMadhubani%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  googleMapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=26.330266,85.983871',
};

export const getWhatsAppUrl = (message?: string): string => {
  const defaultText = `Hello TOPSUN Hospital, I would like to inquire about eye care services & appointment.`;
  const encoded = encodeURIComponent(message || defaultText);
  return `https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=${encoded}`;
};

export const getAppointmentWhatsAppUrl = (details: {
  patientName: string;
  phone: string;
  service: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
}): string => {
  const text = `*New Appointment Inquiry - TOPSUN HOSPITAL*\n\n` +
    `👤 *Patient Name:* ${details.patientName}\n` +
    `📞 *Phone:* ${details.phone}\n` +
    `🩺 *Service:* ${details.service}\n` +
    (details.preferredDate ? `📅 *Preferred Date:* ${details.preferredDate}\n` : '') +
    (details.preferredTime ? `⏰ *Preferred Time:* ${details.preferredTime}\n` : '') +
    (details.message ? `📝 *Notes/Symptoms:* ${details.message}\n` : '') +
    `\nPlease confirm availability and appointment slot. Thank you.`;
  return `https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
};

