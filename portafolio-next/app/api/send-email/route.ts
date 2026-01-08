import { ContactEmail } from "@/components/email/contactEmail"
import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body
    
    console.log("1. Datos recibidos en el server:", body)
    console.log("2. API Key configurada:", process.env.RESEND_API_KEY ? "SÍ" : "NO")

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["jimmymeneses11@gmail.com"],
      subject: `Nuevo mensaje de contacto: ${subject}`,
      react: ContactEmail({ name, email, subject, message }),
    })

    if (error) {
      console.error("❌ ERROR DE RESEND:", error)
      return NextResponse.json({ error }, { status: 400 })
    }

    console.log("✅ CORREO ENVIADO EXITOSAMENTE:", data)
    return NextResponse.json({ data })

  } catch (error) {
    console.error("💥 ERROR CRÍTICO EN LA RUTA API:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}