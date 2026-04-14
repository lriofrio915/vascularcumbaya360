import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre-mi", label: "Sobre el Dr." },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f2347] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="relative h-12 w-12 rounded-full overflow-hidden bg-white shadow mb-3">
              <Image
                src="https://i.ibb.co/XkZfqNgg/IMG-20260407-WA0045.jpg"
                alt="Logo Dr. Patricio Gavilanes"
                fill
                className="object-cover"
              />
            </div>
            <div className="font-bold text-lg mb-1">Dr. Patricio Gavilanes</div>
            <div className="text-blue-300 text-sm mb-4">
              Angiología y Cirugía Vascular
            </div>
            <p className="text-blue-200/70 text-sm leading-relaxed">
              Atención especializada en enfermedades vasculares con más de 15
              años de experiencia. Cumbayá, Ecuador.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="font-semibold text-sm uppercase tracking-widest text-blue-300 mb-4">
              Navegación
            </div>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-blue-200/80 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-semibold text-sm uppercase tracking-widest text-blue-300 mb-4">
              Contacto
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-blue-200/80">
                <MapPin size={15} className="mt-0.5 text-blue-400 shrink-0" />
                <span>
                  Hospital de los Valles, Consultorio 334
                  <br />
                  Av. Interoceánica Km 12½, Cumbayá
                </span>
              </li>
              <li>
                <a
                  href="https://wa.me/593998340502"
                  className="flex items-center gap-2 text-sm text-blue-200/80 hover:text-white transition-colors"
                >
                  <Phone size={15} className="text-blue-400 shrink-0" />
                  +593 99 834 0502
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@drpatriciogavilanes.com"
                  className="flex items-center gap-2 text-sm text-blue-200/80 hover:text-white transition-colors"
                >
                  <Mail size={15} className="text-blue-400 shrink-0" />
                  info@drpatriciogavilanes.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-blue-200/50 text-xs">
          <span>
            © {new Date().getFullYear()} Dr. Patricio Gavilanes. Todos los
            derechos reservados.
          </span>
          <a
            href="https://drpatriciogavilanes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-200 transition-colors"
          >
            Ver sitio general →
          </a>
        </div>
      </div>
    </footer>
  );
}
