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

export const metadata: Metadata = {
  title: "Dr. Patricio Gavilanes | Especialista Vascular en Cumbayá",
  description:
    "Especialista en angiología y cirugía vascular en Cumbayá. Tratamiento de várices, pie diabético, trombosis venosa y enfermedades circulatorias. Hospital de los Valles, Consultorio 334.",
  keywords:
    "cirujano vascular Cumbayá, angiología Cumbayá, várices Cumbayá, pie diabético Cumbayá, Hospital de los Valles, Dr Gavilanes",
  authors: [{ name: "Dr. Patricio Gavilanes" }],
  openGraph: {
    title: "Dr. Patricio Gavilanes | Especialista Vascular en Cumbayá",
    description:
      "Atención especializada en angiología y cirugía vascular en Cumbayá — Hospital de los Valles, Consultorio 334.",
    url: "https://vascularcumbaya360.vercel.app",
    siteName: "Dr. Patricio Gavilanes Cumbayá",
    images: [
      {
        url: "https://i.ibb.co/9jbHTR5/1-doctor-gavilanes-medico-vascular.png",
        width: 1200,
        height: 630,
        alt: "Dr. Patricio Gavilanes",
      },
    ],
    locale: "es_EC",
    type: "website",
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
