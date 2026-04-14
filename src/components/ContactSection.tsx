import { CheckCircle2, Clock, MapPin } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/593998340502?text=Hola%20Dr.%20Gavilanes%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20en%20Cumbay%C3%A1.";

const trustPoints = [
  "Respuesta rápida — generalmente el mismo día",
  "Atención personalizada desde el primer mensaje",
  "Lunes a sábado, previa cita en consultorio",
];

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div>
            <span className="inline-block text-[#2563EB] text-sm font-semibold uppercase tracking-widest mb-2">
              Contáctanos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A6B] mb-4">
              Agenda tu Cita
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              La forma más rápida de agendar es directamente por WhatsApp. El
              Dr. Gavilanes o su equipo te confirmarán tu cita en el consultorio
              de Cumbayá a la brevedad.
            </p>

            <ul className="space-y-3">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-gray-600 text-sm"
                >
                  <CheckCircle2
                    size={17}
                    className="text-green-500 mt-0.5 shrink-0"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: WhatsApp card */}
          <div className="bg-[#F0F7FF] rounded-2xl p-8 border border-blue-100 flex flex-col items-center text-center gap-6">
            {/* WhatsApp icon circle */}
            <div className="w-20 h-20 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg">
              <svg
                viewBox="0 0 24 24"
                fill="white"
                className="w-10 h-10"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.857L.054 23.447a.5.5 0 00.611.61l5.644-1.472A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 01-5.032-1.383l-.36-.214-3.733.974.999-3.647-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
              </svg>
            </div>

            {/* Phone number */}
            <div>
              <div className="text-2xl font-bold text-[#1B3A6B]">
                +593 99 834 0502
              </div>
              <div className="text-gray-500 text-sm mt-1">
                WhatsApp directo con el consultorio
              </div>
            </div>

            {/* CTA button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-md text-base"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.857L.054 23.447a.5.5 0 00.611.61l5.644-1.472A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 01-5.032-1.383l-.36-.214-3.733.974.999-3.647-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
              </svg>
              Escribir ahora por WhatsApp
            </a>

            {/* Meta info */}
            <div className="flex flex-col gap-2 text-xs text-gray-400">
              <div className="flex items-center justify-center gap-1.5">
                <Clock size={12} />
                <span>Atención Lunes a Sábado</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <MapPin size={12} />
                <span>Hospital de los Valles · Consultorio 334</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
