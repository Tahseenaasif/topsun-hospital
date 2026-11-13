import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HOSPITAL_INFO } from '../data/hospitalInfo';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string[];
  schemaData?: object | object[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath = '',
  keywords,
  schemaData,
}) => {
  const siteUrl = 'https://www.topsunhospital.in';
  const fullCanonical = `${siteUrl}${canonicalPath}`;
  const defaultKeywords = [
    'TOPSUN HOSPITAL',
    'Advance Eye Care Centre',
    'Eye Hospital in Madhubani',
    'Eye Specialist in Madhubani',
    'Cataract Surgery in Madhubani',
    'Cataract Hospital in Madhubani',
    'Ophthalmologist in Madhubani',
    'Eye Doctor in Rahika',
    'Eye Care Centre in Madhubani',
    'Phaco Cataract Surgery in Madhubani',
    'Dr. J.D. Mandal Ophthalmologist',
    'Madhubani Bihar Eye Hospital',
  ];

  const metaKeywords = keywords ? [...keywords, ...defaultKeywords] : defaultKeywords;

  // Base Structured Data for Hospital
  const baseMedicalClinicSchema = {
    '@context': 'https://schema.org',
    '@type': ['MedicalClinic', 'MedicalOrganization'],
    name: HOSPITAL_INFO.hospitalName,
    alternateName: `${HOSPITAL_INFO.subtitle} - ${HOSPITAL_INFO.tagline}`,
    url: siteUrl,
    logo: `${siteUrl}/favicon.svg`,
    image: `${siteUrl}/favicon.svg`,
    description: description,
    telephone: HOSPITAL_INFO.primaryPhone,
    email: HOSPITAL_INFO.email,
    identifier: {
      '@type': 'PropertyValue',
      name: 'Hospital Registration Number',
      value: HOSPITAL_INFO.regNumber,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: HOSPITAL_INFO.address.street + ', ' + HOSPITAL_INFO.address.road,
      addressLocality: HOSPITAL_INFO.address.city,
      addressRegion: HOSPITAL_INFO.address.state,
      postalCode: '847211',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '26.3534',
      longitude: '86.0098',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '09:00',
        closes: '13:00',
      },
    ],
    medicalSpecialty: [
      'https://schema.org/Ophthalmologic',
      'https://schema.org/Eye',
      'Cataract Surgery',
      'Phacoemulsification',
    ],
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'Phacoemulsification Cataract Surgery',
        procedureType: 'https://schema.org/SurgicalProcedure',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Comprehensive Eye Examination',
        procedureType: 'https://schema.org/DiagnosticProcedure',
      },
    ],
  };

  const schemasToRender = schemaData
    ? Array.isArray(schemaData)
      ? [baseMedicalClinicSchema, ...schemaData]
      : [baseMedicalClinicSchema, schemaData]
    : [baseMedicalClinicSchema];

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={metaKeywords.join(', ')} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="TOPSUN HOSPITAL" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />

      {/* Structured Data Scripts */}
      {schemasToRender.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

