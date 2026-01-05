
"use client"

import { useLanguage } from "@/contexts/languageContext"
import { Language, languageNames } from "@/lib/traslations"
import { useState } from "react"

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages: Language[] = ["es", "en", "ja", "de", "it", "zh"]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
        <span className="text-sm font-medium">{languageNames[language]}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-48 bg-black/95 backdrop-blur-xl rounded-lg border border-white/20 shadow-2xl z-50 overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  setLanguage(lang)
                  setIsOpen(false)
                }}
                className={`w-full text-left px-4 py-3 hover:bg-white/10 transition-colors ${
                  language === lang ? "bg-white/20 text-white" : "text-gray-300"
                }`}
              >
                <span className="font-medium">{languageNames[lang]}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
