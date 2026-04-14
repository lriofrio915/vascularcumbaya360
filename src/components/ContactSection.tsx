"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "593998340502";

const schema = z.object({
  name: z.string().min(2, "Ingresa tu nombre completo"),
  email: z.string().email("Ingresa un email válido"),
  phone: z.string().min(7, "Ingresa tu número de teléfono"),
  message: z.string().min(10, "Escribe tu consulta (mínimo 10 caracteres)"),
});

type FormData = z.infer<typeof schema>;

function buildWhatsAppUrl(data: FormData): string {
  const text = [
    "Hola Dr. Gavilanes, le escribo desde el formulario de su página web.",
    "",
    `*Nombre:* ${data.name}`,
    `*Email:* ${data.email}`,
    `*Teléfono:* ${data.phone}`,
    "",
    "*Motivo de consulta:*",
    data.message,
  ].join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    setStatus("loading");

    // Canal principal: abrir WhatsApp con los datos pre-cargados
    window.open(buildWhatsAppUrl(data), "_blank", "noopener,noreferrer");

    // Canal de respaldo: intentar envío de email en background (fallo silencioso)
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch(() => {});

    setStatus("success");
    reset();
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: info */}
          <div>
            <span className="inline-block text-[#2563EB] text-sm font-semibold uppercase tracking-widest mb-2">
              Contáctanos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A6B] mb-4">
              Agenda tu Cita
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Escríbenos con tu consulta y nos pondremos en contacto contigo
              para confirmar tu cita en el consultorio de Cumbayá. También
              puedes contactarnos directamente por WhatsApp.
            </p>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/593998340502?text=Hola%20Dr.%20Gavilanes%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20en%20Cumbay%C3%A1."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.857L.054 23.447a.5.5 0 00.611.61l5.644-1.472A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 01-5.032-1.383l-.36-.214-3.733.974.999-3.647-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
              </svg>
              Escribir por WhatsApp
            </a>
          </div>

          {/* Right: form */}
          <div className="bg-[#F0F7FF] rounded-2xl p-6 sm:p-8 border border-blue-100">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center gap-4 py-8">
                <CheckCircle2 size={48} className="text-green-500" />
                <h3 className="text-xl font-bold text-[#1B3A6B]">
                  ¡WhatsApp listo para enviar!
                </h3>
                <p className="text-gray-600 text-sm max-w-xs">
                  Se abrió WhatsApp con tu consulta pre-cargada. Solo presiona{" "}
                  <strong>Enviar</strong> en WhatsApp para que el Dr. Gavilanes
                  reciba tu mensaje de inmediato.
                </p>
                <Button
                  onClick={() => setStatus("idle")}
                  variant="outline"
                  className="mt-2"
                >
                  Enviar otra consulta
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-[#1B3A6B] font-medium">
                    Nombre completo
                  </Label>
                  <Input
                    id="name"
                    placeholder="Tu nombre"
                    className="mt-1 bg-white"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email" className="text-[#1B3A6B] font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="mt-1 bg-white"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="phone" className="text-[#1B3A6B] font-medium">
                    Teléfono / WhatsApp
                  </Label>
                  <Input
                    id="phone"
                    placeholder="+593 99 000 0000"
                    className="mt-1 bg-white"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label
                    htmlFor="message"
                    className="text-[#1B3A6B] font-medium"
                  >
                    Motivo de consulta
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos brevemente tu consulta..."
                    rows={4}
                    className="mt-1 bg-white resize-none"
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <span className="animate-pulse">Abriendo WhatsApp...</span>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.857L.054 23.447a.5.5 0 00.611.61l5.644-1.472A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 01-5.032-1.383l-.36-.214-3.733.974.999-3.647-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                      </svg>
                      Enviar por WhatsApp
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
