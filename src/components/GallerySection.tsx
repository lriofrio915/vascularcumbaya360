"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  {
    src: "https://i.ibb.co/YFNdk3H9/IMG-20260414-WA0010.jpg",
    alt: "Consultorio Dr. Gavilanes — instalaciones modernas",
  },
  {
    src: "https://i.ibb.co/bjqVtBzQ/IMG-20260414-WA0008.jpg",
    alt: "Equipo de diagnóstico vascular de alta tecnología",
  },
  {
    src: "https://i.ibb.co/n8mrm3mD/IMG-20260414-WA0007.jpg",
    alt: "Sala de consulta equipada con tecnología de vanguardia",
  },
  {
    src: "https://i.ibb.co/qLCSLJD2/IMG-20260414-WA0006.jpg",
    alt: "Dr. Gavilanes en atención personalizada",
  },
];

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % photos.length : 0
    );
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + photos.length) % photos.length : 0
    );
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    },
    [closeLightbox, goNext, goPrev]
  );

  return (
    <section id="galeria" className="py-20 bg-[#F0F7FF] dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#1B3A6B] text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <svg
              className="w-3.5 h-3.5 text-blue-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            Tecnología de Vanguardia
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A6B] dark:text-white mb-3">
            Instalaciones y Procedimientos
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-base max-w-xl mx-auto">
            Conoce nuestro consultorio, equipamiento de última generación y el
            ambiente cálido donde cuidamos tu salud vascular.
          </p>
        </div>

        {/* Masonry Grid */}
        <div
          className="columns-1 sm:columns-2 lg:columns-3 gap-4"
          style={{ columnGap: "1rem" }}
        >
          {photos.map((photo, index) => (
            <div
              key={photo.src}
              className="group relative mb-4 break-inside-avoid cursor-pointer rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(27,58,107,0.08)] transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_16px_48px_rgba(27,58,107,0.16)]"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={600}
                height={400}
                style={{ width: "100%", height: "auto", display: "block" }}
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#1B3A6B]/0 group-hover:bg-[#1B3A6B]/60 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/40">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Galería de imágenes"
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightboxIndex].src}
              alt={photos[lightboxIndex].alt}
              width={1200}
              height={800}
              style={{ width: "100%", height: "auto", maxHeight: "85vh", objectFit: "contain" }}
              className="rounded-xl shadow-2xl"
              priority
            />
            {/* Caption */}
            <p className="text-center text-white/70 text-sm mt-3">
              {photos[lightboxIndex].alt}
            </p>
            {/* Counter */}
            <p className="text-center text-white/40 text-xs mt-1">
              {lightboxIndex + 1} / {photos.length}
            </p>
          </div>

          {/* Next button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
