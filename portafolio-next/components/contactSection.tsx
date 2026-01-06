"use client"
import { useLanguage } from "@/contexts/languageContext";
import { IContactFormData } from "@/core/interfaces";
import { forwardRef } from "react";

interface ContactSectionProps {
    formData:IContactFormData;
    isSubmitting:boolean;
    onInputChange:(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>void;
    onSubmit:(e:React.FormEvent)=>void;
}

export const ContactSection = forwardRef<HTMLDivElement, ContactSectionProps>(
    ({ formData, isSubmitting, onInputChange, onSubmit }, ref) => {
      const { t } = useLanguage()
  
      return (
        <section id="contact" ref={ref} className="section relative min-h-screen py-20 overflow-hidden">
          <div className="contact-bg absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black" />
  
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                {t.getInTouch}
              </span>
            </h2>
  
            <p className="text-lg text-gray-300 text-center mb-8">{t.contactText}</p>
  
            <form
              onSubmit={onSubmit}
              className="contact-form space-y-6 bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  {t.yourName}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={onInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder={t.yourName}
                />
              </div>
  
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  {t.yourEmail}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={onInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder={t.yourEmail}
                />
              </div>
  
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={onInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="Subject"
                />
              </div>
  
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  {t.yourMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={onInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                  placeholder={t.yourMessage}
                />
              </div>
  
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-cinematic px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg text-white font-semibold text-lg hover:scale-105 transform transition-all duration-300 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t.sending : t.sendMessage}
              </button>
            </form>
          </div>
        </section>
      )
    },
  )
  
  ContactSection.displayName = "ContactSection"