import { IContactFormData } from "@/core/interfaces"
import { Body, Container, Head, Heading, Html, Preview, Section, Text } from "@react-email/components"



export const ContactEmail = ({ name, email, subject, message }: IContactFormData) => (
  <Html>
    <Head />
    <Preview>Nuevo mensaje de contacto de {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Heading style={h1}>📧 Nuevo Mensaje de Contacto</Heading>
        </Section>

        <Section style={content}>
          <Text style={paragraph}>
            <strong>Nombre:</strong> {name}
          </Text>
          <Text style={paragraph}>
            <strong>Email:</strong> {email}
          </Text>
          <Text style={paragraph}>
            <strong>Asunto:</strong> {subject}
          </Text>
          <Text style={paragraph}>
            <strong>Mensaje:</strong>
          </Text>
          <Text style={messageBox}>{message}</Text>
        </Section>

        <Section style={footer}>
          <Text style={footerText}>Este mensaje fue enviado desde tu portafolio web.</Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
}

const header = {
  padding: "32px 24px",
  backgroundColor: "#8b5cf6",
  borderRadius: "8px 8px 0 0",
}

const h1 = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0",
  textAlign: "center" as const,
}

const content = {
  padding: "24px",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.4",
  color: "#374151",
  margin: "16px 0",
}

const messageBox = {
  backgroundColor: "#f9fafb",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  padding: "16px",
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#374151",
  margin: "16px 0",
}

const footer = {
  padding: "24px",
  borderTop: "1px solid #e5e7eb",
}

const footerText = {
  fontSize: "14px",
  color: "#6b7280",
  textAlign: "center" as const,
  margin: "0",
}
