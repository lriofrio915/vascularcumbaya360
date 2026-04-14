import Image from "next/image";
import { MapPin, ArrowDown } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/593998340502?text=Hola%20Dr.%20Gavilanes%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20en%20Cumbay%C3%A1.";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f2347] via-[#1B3A6B] to-[#2563EB]" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-white/5 -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/5 translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-32 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Text */}
        <div className="text-white order-2 md:order-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-blue-200" />
            <span className="text-sm text-blue-100">
              Hospital de los Valles · Consultorio 334
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Especialista{" "}
            <span className="text-blue-300">Vascular</span>
            <br />
            en Cumbayá
          </h1>

          <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-lg">
            Diagnóstico y tratamiento avanzado de várices, pie diabético y
            enfermedades circulatorias. Tecnología endoláser y procedimientos
            mínimamente invasivos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1B3A6B] font-bold px-7 py-3.5 rounded-full hover:bg-blue-50 transition-colors shadow-lg text-base"
            >
              {/* WhatsApp icon */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-600">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.857L.054 23.447a.5.5 0 00.611.61l5.644-1.472A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 01-5.032-1.383l-.36-.214-3.733.974.999-3.647-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
              </svg>
              Agendar por WhatsApp
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors text-base"
            >
              Ver Servicios
            </a>
          </div>
        </div>

        {/* Doctor photo */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-72 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[480px]">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-3xl bg-white/10 blur-2xl scale-110" />
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              <Image
                src="https://i.ibb.co/vvQwvkNx/2-doctor-vascular.jpg"
                alt="Dr. Patricio Gavilanes - Especialista Vascular"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#servicios"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Bajar"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
