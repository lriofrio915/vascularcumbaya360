import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://vascularcumbaya360.com";
const DOCTOR_PHOTO = "https://i.ibb.co/hr2fDY2/IMG-20260414-WA0012.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "Dr. Patricio Gavilanes | Cirujano Vascular Cumbayá — Hospital de los Valles",
    template: "%s | Dr. Patricio Gavilanes",
  },
  description:
    "Dr. Patricio Gavilanes, especialista en angiología y cirugía vascular en Cumbayá. Tratamiento de várices, pie diabético, trombosis venosa y enfermedades circulatorias. Tecnología endoláser. Hospital de los Valles, Consultorio 334.",
  keywords: [
    "cirujano vascular Cumbayá",
    "angiología Cumbayá",
    "várices Cumbayá",
    "pie diabético Cumbayá",
    "trombosis venosa Ecuador",
    "Hospital de los Valles cirujano",
    "Dr Patricio Gavilanes",
    "endoláser várices Quito",
    "escleroterapia Cumbayá",
    "cirugía vascular Ecuador",
    "especialista vascular Quito",
    "consultorio 334 Hospital Valles",
    "anomalías vasculares Ecuador",
    "puerto subcutáneo Ecuador",
  ],
  authors: [{ name: "Dr. Patricio Gavilanes", url: BASE_URL }],
  creator: "Dr. Patricio Gavilanes",
  publisher: "Dr. Patricio Gavilanes",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Dr. Patricio Gavilanes | Cirujano Vascular Cumbayá",
    description:
      "Especialista en angiología y cirugía vascular en Cumbayá — Hospital de los Valles, Consultorio 334. Tratamiento de várices, pie diabético y enfermedades circulatorias.",
    url: BASE_URL,
    siteName: "Dr. Patricio Gavilanes — Cirugía Vascular Cumbayá",
    images: [
      {
        url: DOCTOR_PHOTO,
        width: 1200,
        height: 630,
        alt: "Dr. Patricio Gavilanes — Cirujano Especialista en Angiología y Cirugía Vascular, Cumbayá",
      },
    ],
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Patricio Gavilanes | Cirujano Vascular Cumbayá",
    description:
      "Especialista en angiología y cirugía vascular en Cumbayá — Hospital de los Valles, Consultorio 334.",
    images: [DOCTOR_PHOTO],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": `${BASE_URL}/#doctor`,
      name: "Dr. Patricio Gavilanes",
      description:
        "Especialista en angiología y cirugía vascular con más de 15 años de experiencia en Ecuador.",
      image: DOCTOR_PHOTO,
      telephone: "+593998340502",
      email: "info@drpatriciogavilanes.com",
      url: BASE_URL,
      medicalSpecialty: ["Angiology", "Vascular Surgery"],
      worksFor: { "@id": `${BASE_URL}/#clinic` },
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Hospital de los Valles, Consultorio 334, Av. Interoceánica Km 12½",
        addressLocality: "Cumbayá",
        addressRegion: "Pichincha",
        addressCountry: "EC",
      },
    },
    {
      "@type": "MedicalClinic",
      "@id": `${BASE_URL}/#clinic`,
      name: "Consultorio Dr. Patricio Gavilanes — Cirugía Vascular",
      description:
        "Consultorio especializado en angiología y cirugía vascular en Cumbayá, Ecuador.",
      url: BASE_URL,
      telephone: "+593998340502",
      email: "info@drpatriciogavilanes.com",
      image: DOCTOR_PHOTO,
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Av. Interoceánica Km 12½ y Av. Florencia, Edificio de Especialidades",
        addressLocality: "Cumbayá",
        addressRegion: "Pichincha",
        addressCountry: "EC",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -0.1925,
        longitude: -78.4264,
      },
      priceRange: "$$",
      medicalSpecialty: ["Angiology", "Vascular Surgery"],
      openingHours: ["Mo-Sa"],
      hasMap: "https://maps.app.goo.gl/bk3YZJWWxbJh4upLA",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
