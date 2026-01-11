"use client"

import { useLanguage } from "@/contexts/languageContext"
import { forwardRef } from "react"

interface AssassinRiddle {
  question: string
  answer: string
  altair: string
  ezio: string
}

interface AssassinModalProps {
  show: boolean
  currentRiddle: AssassinRiddle
  riddleAnswer: string
  showResult: boolean
  isCorrect: boolean
  onAnswerChange: (value: string) => void
  onSubmit: () => void
  onClose: () => void
}

export const AssassinModal = forwardRef<
  HTMLDivElement,
  AssassinModalProps
>(
  (
    {
      show,
      currentRiddle,
      riddleAnswer,
      showResult,
      isCorrect,
      onAnswerChange,
      onSubmit,
      onClose,
    },
    ref
  ) => {
    const { t } = useLanguage()

    if (!show) return null

    // 🥇 OPCIÓN 1: decisión determinista (sin Math.random)
    const finalMessage =
      currentRiddle.question.length % 2 === 0
        ? currentRiddle.altair
        : currentRiddle.ezio

    return (
      <div
        ref={ref}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
        onClick={onClose}
      >
        <div
          className="bg-gradient-to-br from-red-900/50 to-black border-2 border-red-600/50 rounded-xl max-w-2xl w-full p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-white mb-2">
              ⚔️ {t.assassinTitle} ⚔️
            </h2>
            <p className="text-red-400 italic">
              {t.assassinSubtitle}
            </p>
          </div>

          {!showResult ? (
            <div className="space-y-6">
              <div className="bg-black/50 rounded-lg p-6 border border-red-600/30">
                <p className="text-white text-lg mb-4">
                  {currentRiddle.question}
                </p>

                <input
                  type="text"
                  value={riddleAnswer}
                  onChange={(e) =>
                    onAnswerChange(e.target.value)
                  }
                  onKeyDown={(e) =>
                    e.key === "Enter" && onSubmit()
                  }
                  className="w-full px-4 py-3 bg-white/10 border border-red-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder={t.yourMessage}
                  autoFocus
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={onSubmit}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 rounded-lg text-white font-semibold hover:scale-105 transition-transform"
                >
                  {t.submit}
                </button>

                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-white/10 rounded-lg text-white font-semibold hover:bg-white/20 transition-colors"
                >
                  {t.closeModal}
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {isCorrect ? (
                <div className="text-center space-y-4">
                  <div className="text-6xl">🦅</div>
                  <p className="text-green-400 text-xl font-bold">
                    {t.correct}
                  </p>
                  <p className="text-white italic">
                    {finalMessage}
                  </p>
                </div>
              ) : (
                <div className="text-center space-y-4">
                  <div className="text-6xl">⚔️</div>
                  <p className="text-red-400 text-xl font-bold">
                    {t.incorrect}
                  </p>
                </div>
              )}

              <button
                onClick={onClose}
                className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 rounded-lg text-white font-semibold hover:scale-105 transition-transform"
              >
                {t.closeModal}
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
)

AssassinModal.displayName = "AssassinModal"
