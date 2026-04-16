import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const pillars = [
  {
    title: "Nuestra Misión",
    desc: "Proporcionar atención médica vascular de la más alta calidad, utilizando tecnología avanzada y un enfoque humano para mejorar la salud y calidad de vida de cada paciente.",
  },
  {
    title: "Ética y Valores",
    desc: "Actuamos con integridad, honestidad y transparencia. Priorizamos la seguridad y el bienestar del paciente en cada decisión médica, respetando su dignidad.",
  },
  {
    title: "Experiencia Comprobada",
    desc: "Más de 15 años de trayectoria en el diagnóstico y tratamiento de enfermedades vasculares complejas, con miles de procedimientos exitosos.",
  },
];

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              {/* Decorative blob */}
              <div className="absolute -inset-4 bg-[#F0F7FF] rounded-3xl -rotate-3" />
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://i.ibb.co/FL6Wn1JX/IMG-20260414-WA0011.jpg"
                  alt="Dr. Patricio Gavilanes — Especialista en Angiología y Cirugía Vascular, Hospital de los Valles Cumbayá"
                  fill
                  className="object-cover object-top"
                />
              </div>
              {/* Experience badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#1B3A6B] text-white rounded-2xl px-5 py-3 shadow-lg text-center">
                <div className="text-2xl font-bold">+15</div>
                <div className="text-xs text-blue-200">años de experiencia</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-[#2563EB] text-sm font-semibold uppercase tracking-widest mb-2">
              Sobre el Doctor
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A6B] mb-4">
              Dr. Patricio Gavilanes
            </h2>
            <p className="text-[#2563EB] font-semibold mb-4">
              Especialista en Angiología y Cirugía Vascular
            </p>
            <blockquote className="border-l-4 border-[#2563EB] pl-4 italic text-gray-600 mb-6">
              &ldquo;Mi compromiso es proporcionar un cuidado excepcional basado
              en experiencia clínica especializada.&rdquo;
            </blockquote>
            <p className="text-gray-600 leading-relaxed mb-8">
              Especialista con más de 15 años de trayectoria en el diagnóstico y
              tratamiento de enfermedades vasculares complejas. Con miles de
              procedimientos exitosos, el Dr. Gavilanes combina tecnología
              avanzada con un profundo compromiso hacia el bienestar de cada
              paciente.
            </p>

            {/* Pillars */}
            <div className="space-y-4">
              {pillars.map((p) => (
                <div key={p.title} className="flex gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#2563EB] mt-0.5 shrink-0"
                  />
                  <div>
                    <div className="font-semibold text-[#1B3A6B] text-sm">
                      {p.title}
                    </div>
                    <p className="text-gray-600 text-sm mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
