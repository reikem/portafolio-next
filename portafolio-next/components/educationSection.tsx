"use client"
import { useLanguage } from "@/contexts/languageContext";
import { IEducation } from "@/core/interfaces";
import { forwardRef } from "react";

interface EducationSectionProps {
    education: IEducation[];
}

export const EducationSection = forwardRef<HTMLDivElement, EducationSectionProps>(({ education }, ref) => {
    const { t } = useLanguage()
  
    return (
      <section id="education" ref={ref} className="section relative min-h-screen py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-cyan-900/20 to-black" />
  
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              {t.myEducation}
            </span>
          </h2>
  
          <div className="education-timeline space-y-8 perspective-1000">
            {education.map((edu, index) => (
              <div key={index} className="education-item flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3 text-right">
                  <p className="text-2xl font-bold text-cyan-400">{edu.year}</p>
                  <p className="text-sm text-gray-400 uppercase tracking-wider mt-1">{edu.type}</p>
                </div>
                <div className="hidden md:block w-px bg-gradient-to-b from-purple-500 to-cyan-500 self-stretch" />
                <div className="md:w-2/3 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.title}</h3>
                  <p className="text-lg text-purple-400 mb-3">{edu.institution}</p>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  })
  
  EducationSection.displayName = "EducationSection"