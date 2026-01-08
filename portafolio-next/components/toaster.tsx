"use client"


import { useEffect, useState } from "react"
import { X, CheckCircle, XCircle, AlertCircle, Info } from "lucide-react"
import { useToast } from "@/lib/useToast"

export function Toaster() {
  const { toasts, dismiss } = useToast()

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-md">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onDismiss={() => dismiss(toast.id)} />
      ))}
    </div>
  )
}

function ToastItem({
  toast,
  onDismiss,
}: {
  toast: ReturnType<typeof useToast>["toasts"][0]
  onDismiss: () => void
}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    setTimeout(onDismiss, 300)
  }

  const variantStyles = {
    default: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",
    success: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
    error: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800",
    warning: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800",
  }

  const iconMap = {
    default: <Info className="w-5 h-5 text-blue-500" />,
    success: <CheckCircle className="w-5 h-5 text-green-500" />,
    error: <XCircle className="w-5 h-5 text-red-500" />,
    warning: <AlertCircle className="w-5 h-5 text-yellow-500" />,
  }

  return (
    <div
      className={`
        ${variantStyles[toast.variant || "default"]}
        border rounded-lg shadow-lg p-4 min-w-[300px]
        transition-all duration-300 transform
        ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
      `}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">{iconMap[toast.variant || "default"]}</div>
        <div className="flex-1 min-w-0">
          {toast.title && <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{toast.title}</p>}
          {toast.description && <p className="text-sm text-gray-600 dark:text-gray-400">{toast.description}</p>}
        </div>
        <button
          onClick={handleDismiss}
          className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
