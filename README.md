# TOPSUN HOSPITAL – Advance Eye Care Centre
> **Tagline:** आँखों का सर्वश्रेष्ठ अस्पताल  
> **Specialization:** Advanced Eye Care & Cataract Surgery  
> **Registration Number:** 658/2026  
> **Location:** Basauli, Rahika Road, Madhubani, Bihar, India  
> **Official Website:** [www.topsunhospital.in](https://www.topsunhospital.in)  
> **Contact:** +91 9709419467 / +91 9958643862 | Email: topsunhospital@gmail.com  

---

## 🌟 Overview
A specialized, modern, premium ophthalmology hospital website engineered with **React 19**, **Vite**, **TypeScript**, and **Tailwind CSS**. Built specifically for **TOPSUN HOSPITAL – Advance Eye Care Centre** in Madhubani, Bihar.

The platform establishes medical trust, highlights cataract surgery (phacoemulsification) expertise, provides complete clinical guidance across 18+ eye care procedures, and offers a WhatsApp-powered appointment inquiry workflow.

---

## 🚀 Key Features

1. **Specialized Ophthalmology Design System**
   - Palette: Deep Royal Purple (`#342078`), Medical Green (`#008B55`), Warm Medical Red (`#D9382B`), Background White (`#FFFFFF`), Light Canvas (`#F4F7FB`), Text (`#1C2434`).
   - Typography: Plus Jakarta Sans for English and Noto Sans Devanagari for Hindi.
   - Clean, rounded cards with subtle shadows, hover states, and accessible contrast.

2. **Dedicated Pages & Deep Content**
   - **Home (`/`)**: Hero section, trust metrics, cataract highlight banner, featured services, why choose TOPSUN, doctor profiles, hospital facilities, FAQs, appointment inquiry, interactive map.
   - **Cataract Surgery (`/cataract-surgery`)**: Comprehensive guide on cataracts, symptoms, causes, phacoemulsification technique (micro-incision, foldable IOLs), 5-step surgery journey, recovery care, realistic medical expectations, and FAQs.
   - **Eye Care Services (`/services`)**: Filterable catalog of 18+ eye care services across Cataract Services, General Ophthalmology, and Additional Eye Care with clear distinction between surgical procedures, diagnostic screenings, and consultations.
   - **Doctor Profiles (`/doctors`)**: Accurate credentials and clinical focus for all hospital doctors without exaggerated claims.
   - **About Hospital (`/about`)**: Story, mission, vision, patient-centered values, infection control commitments, and facility infrastructure.
   - **Contact & Location (`/contact`)**: Contact details, opening hours, interactive Google Maps embed, driving directions, and structured appointment booking form.

3. **Medical Team (Accurate Banner Credentials)**
   - **Dr. J.D. Mandal** – MBBS, D.O.M.S. (Consultant Ophthalmologist)
   - **Dr. Khurshid** – MBBS, MD (Consultant Anesthesiologist)
   - **Dr. Ashwini Bhardwaj** – MBBS, M.M.C.H. (Consultant Physician / Medical Officer)
   - **Dr. MD Merajul Hoda** – MBBS, D.M.CH. (Consultant Physician / Medical Officer)

4. **Structured Appointment & WhatsApp Workflow**
   - Form validates Patient Name, 10-digit Phone, Date, Time Slot, and Selected Service.
   - Seamlessly generates and routes pre-filled WhatsApp consultation requests directly to the hospital desk.
   - Floating WhatsApp button visible on all pages with prefilled prompt.
   - Click-to-call telephone buttons (`tel:9709419467`).
   - Sticky bottom action bar on mobile viewports for instant one-tap calling, WhatsApp chat, and booking.

5. **Advanced SEO & Schema.org Integration**
   - Unique metadata, Open Graph, and Twitter Cards per page via `react-helmet-async`.
   - Local SEO optimized for Madhubani, Rahika Road, and northern Bihar.
   - Structured JSON-LD Data:
     - `MedicalClinic` / `MedicalOrganization`
     - `Physician` (all 4 doctors with exact credentials)
     - `MedicalProcedure` (Phacoemulsification)
     - `FAQPage`
     - `BreadcrumbList`
   - Valid `sitemap.xml` and `robots.txt` in `/public`.

---

## 🛠️ Tech Stack
- **Framework:** React 19 + Vite
- **Language:** TypeScript (Strict mode enabled)
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **Routing:** React Router DOM
- **SEO & Meta:** React Helmet Async + JSON-LD
- **Icons:** Lucide React

---

## 📁 Project Architecture
```
src/
├── assets/            # Static assets and icons
├── components/        # Reusable UI components
│   ├── AppointmentForm.tsx
│   ├── Breadcrumbs.tsx
│   ├── CallButton.tsx
│   ├── DoctorCard.tsx
│   ├── FAQAccordion.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── SectionHeading.tsx
│   ├── SEOHead.tsx
│   ├── ServiceCard.tsx
│   ├── StickyMobileCTA.tsx
│   └── WhatsAppButton.tsx
├── data/              # Centralized data configurations
│   ├── cataractData.ts
│   ├── doctorsData.ts
│   ├── facilitiesData.ts
│   ├── faqsData.ts
│   ├── hospitalInfo.ts
│   └── servicesData.ts
├── layouts/           # Page shell with Header, Footer, CTAs
│   └── MainLayout.tsx
├── pages/             # Route views
│   ├── AboutPage.tsx
│   ├── CataractSurgeryPage.tsx
│   ├── ContactPage.tsx
│   ├── DoctorsPage.tsx
│   ├── HomePage.tsx
│   ├── NotFoundPage.tsx
│   └── ServicesPage.tsx
├── types/             # TypeScript interfaces
│   └── index.ts
├── App.tsx            # Routes definition
├── index.css          # Tailwind directives & styles
├── main.tsx           # Providers (Helmet, Router, React.StrictMode)
└── vite-env.d.ts      # Vite client type definitions
```

---

## 💻 Development & Production Commands

```bash
# Navigate to project folder
cd "C:\Users\Tahseen Aasif\.gemini\antigravity\scratch\topsun-hospital"

# Start Vite development server
npm run dev

# Run TypeScript checks and production bundle
npm run build

# Preview production build locally
npm run preview
```

