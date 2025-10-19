import Script from 'next/script';
import { Plumber, WithContext } from 'schema-dts';

const jsonLd: WithContext<Plumber> = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "name": "PascalConfort",
  "image": ["https://pascalconfort.ro/images/logo.png"],
  "@id": "https://pascalconfort.ro",
  "url": "https://pascalconfort.ro",
  "telephone": "+40752399616",
  "description": "Instalator sanitar și termic în Iași. Intervenții rapide pentru urgențe, reparații, montaj centrale. Seriozitate și Garanție.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Strada Exemplu Nr. 10",
    "addressLocality": "Iași",
    "postalCode": "700000",
    "addressCountry": "RO"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.1585,
    "longitude": 27.6014
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "sameAs": [
    // Add social media links when available
  ],
  "areaServed": {
    "@type": "City",
    "name": "Iași"
  },
  "priceRange": "$$"
};

export function SchemaOrg() {
  return (
    <Script
      id="jsonld-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}