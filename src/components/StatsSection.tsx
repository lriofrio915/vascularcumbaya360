import { Award, Users, Zap } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "+15 años",
    label: "de experiencia clínica",
    desc: "Trayectoria especializada en enfermedades vasculares complejas",
  },
  {
    icon: Users,
    value: "Miles",
    label: "de procedimientos exitosos",
    desc: "Pacientes recuperados con la más alta calidad de atención",
  },
  {
    icon: Zap,
    value: "Tecnología",
    label: "Endoláser avanzada",
    desc: "Tratamientos mínimamente invasivos con equipos de última generación",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-[#1B3A6B] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Icon size={22} className="text-blue-200" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-blue-200 font-semibold text-sm mt-0.5">
                    {stat.label}
                  </div>
                  <p className="text-blue-300/80 text-xs mt-1 max-w-xs mx-auto">
                    {stat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
