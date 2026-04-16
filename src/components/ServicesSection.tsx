import { Waves, Footprints, HeartPulse, Activity, Dna, Syringe } from "lucide-react";

const services = [
  {
    icon: Waves,
    title: "Várices y Arañas Vasculares",
    desc: "Eliminación estética y funcional de várices mediante escleroterapia y láser sin cirugía abierta.",
  },
  {
    icon: Footprints,
    title: "Pie Diabético",
    desc: "Prevención y salvamento de extremidades. Cuidado especializado de úlceras y heridas complejas.",
  },
  {
    icon: HeartPulse,
    title: "Trombosis Venosa",
    desc: "Diagnóstico temprano y tratamiento anticoagulante para prevenir complicaciones graves.",
  },
  {
    icon: Activity,
    title: "Enfermedad Arterial",
    desc: "Tratamiento para mala circulación, dolor al caminar (claudicación) y obstrucciones arteriales.",
  },
  {
    icon: Dna,
    title: "Anomalías Vasculares",
    desc: "Atención especializada para malformaciones vasculares congénitas en niños y adultos.",
  },
  {
    icon: Syringe,
    title: "Puerto Subcutáneo",
    desc: "Colocación segura de accesos vasculares implantables para quimioterapia o tratamientos prolongados.",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-[#F0F7FF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#2563EB] text-sm font-semibold uppercase tracking-widest mb-2">
            Especialidades
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A6B]">
            Servicios Médicos en Cumbayá
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Atención vascular especializada con tecnología avanzada y un enfoque
            humano para mejorar tu calidad de vida.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-blue-50 hover:border-[#2563EB]/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F0F7FF] group-hover:bg-[#2563EB] flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon
                    size={22}
                    className="text-[#2563EB] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="font-bold text-[#1B3A6B] text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
