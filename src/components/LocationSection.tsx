import { MapPin, Clock, Phone, Mail, ExternalLink } from "lucide-react";

const MAPS_URL = "https://maps.app.goo.gl/bk3YZJWWxbJh4upLA";
const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6!2d-78.4264!3d-0.1925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5992a8a4a3f8b%3A0x4a4b8c3d2e1f0a5c!2sHospital+de+los+Valles!5e0!3m2!1ses!2sec!4v1700000000000!5m2!1ses!2sec";

const info = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "Av. Interoceánica Km 12½ y Av. Florencia\nEdificio de Especialidades",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Atención previa cita\nLunes a Sábado",
  },
  {
    icon: Phone,
    label: "WhatsApp / Teléfono",
    value: "+593 99 834 0502",
    href: "https://wa.me/593998340502?text=Hola%20Dr.%20Gavilanes%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20en%20Cumbay%C3%A1.",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@drpatriciogavilanes.com",
    href: "mailto:info@drpatriciogavilanes.com",
  },
];

export default function LocationSection() {
  return (
    <section id="ubicacion" className="py-20 bg-[#F0F7FF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#2563EB] text-sm font-semibold uppercase tracking-widest mb-2">
            Dónde Encontrarnos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A6B]">
            Consultorio en Cumbayá
          </h2>
          <p className="text-gray-600 mt-3">
            Hospital de los Valles — Consultorio 334, Provital
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-blue-100 h-80 md:h-96 bg-gray-100">
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hospital de los Valles - Cumbayá"
            />
          </div>

          {/* Info card */}
          <div className="bg-white rounded-2xl shadow-sm border border-blue-50 p-6 flex flex-col gap-5">
            <div>
              <div className="font-bold text-[#1B3A6B] text-lg">
                Hospital de los Valles
              </div>
              <div className="text-[#2563EB] text-sm font-medium">
                Consultorio 334, Provital
              </div>
            </div>

            <div className="space-y-4">
              {info.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#F0F7FF] flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-[#2563EB]" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#1B3A6B] font-medium hover:text-[#2563EB] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm text-[#1B3A6B] font-medium whitespace-pre-line">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#1B3A6B] hover:bg-[#2563EB] text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm mt-auto"
            >
              <ExternalLink size={15} />
              Cómo llegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
