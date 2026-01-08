"use client"

import { useLanguage } from "@/contexts/languageContext"
import { X, CheckCircle, XCircle } from "lucide-react"


interface ContactStatusModalProps {
  show: boolean
  success: boolean
  onClose: () => void
}

export function ContactStatusModal({ show, success, onClose }: ContactStatusModalProps) {
  const { t } = useLanguage()

  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative bg-gradient-to-br from-purple-900/90 to-black/90 backdrop-blur-xl rounded-2xl p-8 max-w-md w-full mx-4 border border-white/20 shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col items-center text-center space-y-4">
          {success ? (
            <>
              <CheckCircle className="w-20 h-20 text-green-500 animate-pulse" />
              <h3 className="text-2xl font-bold text-white">{t.messageSent || "¡Mensaje Enviado!"}</h3>
              <p className="text-gray-300">
                {t.messageSuccess || "Tu mensaje ha sido enviado correctamente. Te responderé pronto."}
              </p>
            </>
          ) : (
            <>
              <XCircle className="w-20 h-20 text-red-500 animate-pulse" />
              <h3 className="text-2xl font-bold text-white">{t.messageError || "Error al Enviar"}</h3>
              <p className="text-gray-300">
                {t.messageErrorText || "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo."}
              </p>
            </>
          )}

          <button
            onClick={onClose}
            className="mt-4 px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg text-white font-semibold hover:scale-105 transform transition-all duration-300"
          >
            {t.close || "Cerrar"}
          </button>
        </div>
      </div>
    </div>
  )
}
