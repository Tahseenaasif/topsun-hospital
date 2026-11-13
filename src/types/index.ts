export interface Doctor {
  id: string;
  name: string;
  qualifications: string;
  designation: string;
  department: string;
  focusAreas: string[];
  description: string;
  consultationDays: string;
  image?: string;
  avatarColor: string;
}

export interface EyeService {
  id: string;
  title: string;
  category: 'cataract' | 'general' | 'additional';
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  isConsultationOnly?: boolean;
  isSurgical?: boolean;
  benefits: string[];
  whoNeedsThis: string[];
  image?: string;
}

export interface HospitalFacility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
  image?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: 'cataract' | 'general' | 'appointments' | 'hospital';
}

export interface ContactInfo {
  hospitalName: string;
  subtitle: string;
  tagline: string;
  specialization: string;
  regNumber: string;
  website: string;
  email: string;
  phones: string[];
  primaryPhone: string;
  whatsappNumber: string;
  address: {
    street: string;
    road: string;
    locality: string;
    city: string;
    district: string;
    state: string;
    country: string;
    fullAddress: string;
  };
  timings: {
    opdDays: string;
    opdHours: string;
    emergencyHours: string;
    cataractConsultation: string;
  };
  googleMapsEmbedUrl: string;
  googleMapsDirectionsUrl: string;
}

