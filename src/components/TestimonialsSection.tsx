import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Cinthia R.",
    procedure: "Tratamiento endoláser de várices",
    text: "El Dr. Gavilanes me explicó todo el procedimiento con mucha paciencia. La recuperación fue rápida y sin complicaciones. ¡Quedé encantada con los resultados!",
    initials: "CR",
    color: "bg-[#2563EB]",
  },
  {
    name: "Jorge M.",
    procedure: "Pie diabético",
    text: "Llegué con mucho miedo por mi diagnóstico, pero el doctor me transmitió confianza desde la primera consulta. Su experiencia y trato humano hacen toda la diferencia.",
    initials: "JM",
    color: "bg-[#1B3A6B]",
  },
  {
    name: "Andrea V.",
    procedure: "Trombosis venosa profunda",
    text: "Gracias al diagnóstico oportuno del Dr. Gavilanes pude recibir el tratamiento correcto a tiempo. Profesional, preciso y muy atento con sus pacientes.",
    initials: "AV",
    color: "bg-[#0f2347]",
  },
  {
    name: "María L.",
    procedure: "Cirugía mínimamente invasiva",
    text: "No podía creer lo rápido que me recuperé. El Dr. Gavilanes es un experto en su área y su consultorio en el Hospital de los Valles es excelente.",
    initials: "ML",
    color: "bg-[#1B3A6B]",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className="fill-yellow-400 text-yellow-400"
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#1B3A6B] text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <Star size={13} className="fill-yellow-400 text-yellow-400" />
            Testimonios
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A6B] dark:text-white mb-3">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-base max-w-xl mx-auto">
            La confianza de cada paciente es nuestro mayor logro. Conoce las
            experiencias de quienes han recuperado su salud vascular.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#F0F7FF] dark:bg-gray-800 rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <StarRating />
              <blockquote className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-2 border-t border-blue-100 dark:border-gray-700">
                <div
                  className={`${t.color} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-[#1B3A6B] dark:text-white text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-[#2563EB] dark:text-blue-400">
                    {t.procedure}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bottom */}
        <div className="text-center mt-12">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
            ¿Listo para recuperar tu salud vascular?
          </p>
          <a
            href="https://wa.me/593998340502?text=Hola%20Dr.%20Gavilanes%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20en%20Cumbay%C3%A1."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1B3A6B] hover:bg-[#0f2347] text-white font-semibold px-7 py-3.5 rounded-full transition-colors shadow-lg text-base"
          >
            Agendar mi consulta
          </a>
        </div>
      </div>
    </section>
  );
}
