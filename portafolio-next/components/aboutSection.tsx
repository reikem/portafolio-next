"use client"
import { useLanguage } from "@/contexts/languageContext";
import { ISkill } from "@/core/interfaces";
import { forwardRef } from "react";

interface AboutSectionProps {
    skills:ISkill[];
}

export const AboutSection = forwardRef<HTMLDivElement, AboutSectionProps>(({ skills }, ref) => {
    const { t } = useLanguage()
  
    return (
      <section id="about" ref={ref} className="section relative min-h-screen py-20 overflow-hidden">
        <div className="about-bg absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black" />
  
        <div className="about-content relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              {t.aboutMe}
            </span>
          </h2>
  
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">{t.aboutText1}</p>
              <p className="text-lg text-gray-300 leading-relaxed">{t.aboutText2}</p>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">{t.aboutText3}</p>
              <p className="text-lg text-gray-300 leading-relaxed">{t.aboutText4}</p>
            </div>
          </div>
  
          {/* Skills */}
          <div className="skills-container">
            <h3 className="text-3xl font-bold mb-8 text-center text-white">{t.technicalSkills}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-semibold text-white flex items-center gap-2">
                      <span>{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="text-cyan-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="skill-bar h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                      data-level={skill.level}
                      style={{ width: 0 }}
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-2">{skill.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  })
  
  AboutSection.displayName = "AboutSection"