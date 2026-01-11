"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { LanguageProvider } from "@/contexts/languageContext"
import { Navigation } from "@/components/ui/navigation"
import { HeroSection } from "@/components/heroSection"
import { AboutSection } from "@/components/aboutSection"
import { ProjectsSection } from "@/components/projectSection"
import { EducationSection } from "@/components/educationSection"
import { ContactSection } from "@/components/contactSection"
import { ProjectModal } from "@/components/projectModal"
import { AssassinModal } from "@/components/assassinModal"
import { ContactStatusModal } from "@/components/contactStatusModal"

import { IProject } from "@/core/interfaces"
import {
  AssassinRiddlesData,
  EducationData,
  ProyectsData,
  SkillsData,
} from "@/core/data"

gsap.registerPlugin(ScrollTrigger)

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null)
  const [currentSection, setCurrentSection] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)

  const [portfolioClicks, setPortfolioClicks] = useState(0)
  const [showAssassinModal, setShowAssassinModal] = useState(false)
  const [currentRiddle, setCurrentRiddle] = useState(0)
  const [riddleAnswer, setRiddleAnswer] = useState("")
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showStatusModal, setShowStatusModal] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const modalContentRef = useRef<HTMLDivElement>(null)
  const assassinModalRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setCurrentSection(sectionId)
    setMenuOpen(false)
  }

  const handlePortfolioClick = () => {
    const newCount = portfolioClicks + 1
    setPortfolioClicks(newCount)

    if (newCount === 5) {
      setShowAssassinModal(true)
      setCurrentRiddle(
        Math.floor(Math.random() * AssassinRiddlesData.length)
      )
    }
  }

  const handleRiddleSubmit = () => {
    const correct =
      riddleAnswer.toLowerCase().trim() ===
      AssassinRiddlesData[currentRiddle].answer

    setIsCorrect(correct)
    setShowResult(true)
  }

  const closeAssassinModal = () => {
    setShowAssassinModal(false)
    setShowResult(false)
    setRiddleAnswer("")
    setPortfolioClicks(0)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error()

      setSubmitSuccess(true)
      setShowStatusModal(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch {
      setSubmitSuccess(false)
      setShowStatusModal(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const closeStatusModal = () => setShowStatusModal(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".nav-item",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const openProject = (project: IProject) => {
    setSelectedProject(project)
    gsap.set(modalRef.current, { display: "flex", opacity: 1 })
  }

  const closeProject = () => {
    setSelectedProject(null)
    gsap.set(modalRef.current, { display: "none" })
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Navigation
          currentSection={currentSection}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          scrollToSection={scrollToSection}
          onPortfolioClick={handlePortfolioClick}
        />

        <HeroSection ref={heroRef} scrollToSection={scrollToSection} />
        <AboutSection ref={aboutRef} skills={SkillsData} />
        <ProjectsSection
          ref={projectsRef}
          projects={ProyectsData}
          onProjectClick={openProject}
        />
        <EducationSection ref={educationRef} education={EducationData} />
        <ContactSection
          ref={contactRef}
          formData={formData}
          isSubmitting={isSubmitting}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />

        <ProjectModal
          ref={modalRef}
          project={selectedProject}
          onClose={closeProject}
          contentRef={modalContentRef}
        />

        <AssassinModal
          ref={assassinModalRef}
          show={showAssassinModal}
          currentRiddle={AssassinRiddlesData[currentRiddle]}
          riddleAnswer={riddleAnswer}
          showResult={showResult}
          isCorrect={isCorrect}
          onAnswerChange={setRiddleAnswer}
          onSubmit={handleRiddleSubmit}
          onClose={closeAssassinModal}
        />

        <ContactStatusModal
          show={showStatusModal}
          success={submitSuccess}
          onClose={closeStatusModal}
        />
      </div>
    </LanguageProvider>
  )
}
