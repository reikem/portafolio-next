"use client"

import { useState, useCallback } from "react"

export interface Toast {
  id: string
  title?: string
  description?: string
  variant?: "default" | "success" | "error" | "warning"
  duration?: number
}

interface ToastState {
  toasts: Toast[]
}

let toastCount = 0

export function useToast() {
  const [state, setState] = useState<ToastState>({ toasts: [] })

  const toast = useCallback(({ title, description, variant = "default", duration = 3000 }: Omit<Toast, "id">) => {
    const id = `toast-${toastCount++}`
    const newToast: Toast = { id, title, description, variant, duration }

    setState((prevState) => ({
      toasts: [...prevState.toasts, newToast],
    }))

    if (duration > 0) {
      setTimeout(() => {
        setState((prevState) => ({
          toasts: prevState.toasts.filter((t) => t.id !== id),
        }))
      }, duration)
    }

    return id
  }, [])

  const dismiss = useCallback((id: string) => {
    setState((prevState) => ({
      toasts: prevState.toasts.filter((t) => t.id !== id),
    }))
  }, [])

  return {
    toast,
    dismiss,
    toasts: state.toasts,
  }
}
