"use client"

import { useLanguage } from "@/contexts/languageContext";
import { forwardRef } from "react";

interface HeroSectionProps {
    scrollToSection:(section:string)=>void;
}

export const HeroSection= forwardRef<HTMLDivElement,HeroSectionProps>(({scrollToSection},ref)=> {
    const {t} = useLanguage();
    return (
        <section id="home" ref={ref} className="section relative h-screen overflow-hidden">
          {/* Parallax Background Layers */}
          <div className="parallax-bg absolute inset-0 z-0">
            <div className="absolute inset-0 bg-linear-to-br from-purple-900/50 via-black to-cyan-900/50" />
            <div
              className="grid-pattern absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
          </div>
    
          <div className="parallax-mid absolute inset-0 z-10 flex items-center justify-center">
            <div className="hero-overlay absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
          </div>
    
          <div className="parallax-front relative z-20 h-full flex items-center justify-center px-4">
            <div className="text-center perspective-1000">
              <h1 className="hero-title text-7xl md:text-9xl font-bold mb-6">
                <span className="bg-linear-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
                  {t.heroTitle1}
                </span>
                <br />
                <span className="text-white">{t.heroTitle2}</span>
              </h1>
              <p className="hero-subtitle text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">{t.heroSubtitle}</p>
              <button
                onClick={() => scrollToSection("projects")}
                className="hero-cta btn-cinematic px-8 py-4 bg-linear-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold text-lg hover:scale-105 transform transition-all duration-300 shadow-2xl"
              >
                {t.viewWork}
              </button>
            </div>
          </div>
    
          <div className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </section>
      )
    })
HeroSection.displayName = "HeroSection";