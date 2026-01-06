import { useLanguage } from "@/contexts/languageContext";
import { LanguageSelector } from "./languageSelector";

interface NavigationProps {
    currentSection:string;
    menuOpen:boolean;
    setMenuOpen:(open:boolean)=>void;
    scrollToSection:(section:string)=>void;
    onPortfolioClick:()=>void;
}

export function Navigation({currentSection,menuOpen,setMenuOpen,scrollToSection,onPortfolioClick}:NavigationProps) {
    const {t}= useLanguage();
    const sections=["home","about","projects","education","contact"] as const;
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <button
                onClick={onPortfolioClick}
                className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform"
              >
                PORTFOLIO
              </button>
    
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-4">
                <div className="flex space-x-8">
                  {sections.map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`nav-item px-4 py-2 text-sm uppercase tracking-wider transition-all duration-300 ${
                        currentSection === section ? "text-white bg-white/10 rounded-lg" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {t[section]}
                    </button>
                  ))}
                </div>
                <LanguageSelector />
              </div>
    
              {/* Mobile Menu Button */}
              <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
    
          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-black/95 border-t border-white/10">
              <div className="px-4 py-4 space-y-2">
                {sections.map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left px-4 py-2 text-sm uppercase tracking-wider text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                  >
                    {t[section]}
                  </button>
                ))}
                <div className="pt-2">
                  <LanguageSelector />
                </div>
              </div>
            </div>
          )}
        </nav>
      )
}