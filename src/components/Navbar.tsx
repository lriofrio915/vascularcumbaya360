"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

const WHATSAPP_URL =
  "https://wa.me/593998340502?text=Hola%20Dr.%20Gavilanes%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20en%20Cumbay%C3%A1.";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre-mi", label: "Sobre el Dr." },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3">
          <div className="relative h-10 w-10 rounded-full overflow-hidden bg-white shadow-sm flex-shrink-0">
            <Image
              src="https://i.ibb.co/XkZfqNgg/IMG-20260407-WA0045.jpg"
              alt="Logo Dr. Patricio Gavilanes"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span
              className={`font-bold text-base tracking-wide transition-colors ${
                scrolled ? "text-[#1B3A6B]" : "text-white"
              }`}
            >
              Dr. Patricio Gavilanes
            </span>
            <span
              className={`text-xs transition-colors ${
                scrolled ? "text-[#2563EB]" : "text-blue-200"
              }`}
            >
              Angiología y Cirugía Vascular
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium py-3 transition-colors hover:text-[#2563EB] ${
                scrolled ? "text-[#1F2937] dark:text-gray-200" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Cambiar tema"
              className={`p-2 rounded-full transition-colors ${
                scrolled
                  ? "text-[#1B3A6B] hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-sm font-semibold px-4 py-3 rounded-full transition-colors"
          >
            <Phone size={14} />
            Agendar Cita
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 transition-colors ${
            scrolled ? "text-[#1B3A6B]" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-4 py-4 flex flex-col gap-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#1F2937] dark:text-gray-200 font-medium py-3 hover:text-[#2563EB] transition-colors"
            >
              {link.label}
            </a>
          ))}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 text-[#1B3A6B] dark:text-gray-200 font-medium py-2 hover:text-[#2563EB] transition-colors"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              {theme === "dark" ? "Modo Claro" : "Modo Oscuro"}
            </button>
          )}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#2563EB] text-white font-semibold px-4 py-2 rounded-full mt-1"
          >
            <Phone size={14} />
            Agendar Cita
          </a>
        </div>
      )}
    </header>
  );
}
