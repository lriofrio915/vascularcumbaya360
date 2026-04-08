import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Formulario Web <onboarding@resend.dev>",
      to: "info@drpatriciogavilanes.com",
      replyTo: email,
      subject: `Nueva consulta desde landing Cumbayá — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1F2937;">
          <div style="background: #1B3A6B; padding: 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Nueva consulta — Landing Cumbayá</h1>
          </div>
          <div style="background: #F0F7FF; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #dbeafe;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #1B3A6B; width: 120px;">Nombre:</td>
                <td style="padding: 8px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #1B3A6B;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563EB;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #1B3A6B;">Teléfono:</td>
                <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #2563EB;">${phone}</a></td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #dbeafe; margin: 16px 0;" />
            <div style="font-weight: 600; color: #1B3A6B; margin-bottom: 8px;">Motivo de consulta:</div>
            <div style="background: white; padding: 12px 16px; border-radius: 8px; border: 1px solid #dbeafe; line-height: 1.6;">
              ${message}
            </div>
            <div style="margin-top: 20px; font-size: 12px; color: #6B7280;">
              Enviado desde la landing page vascularcumbaya360 · Consultorio Cumbayá
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Error al enviar" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
