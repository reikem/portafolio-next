"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useToast } from "@/lib/useToast"
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


gsap.registerPlugin(ScrollTrigger)

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  fullDescription: string
  demoUrl: string
  githubUrl: string
  color: string
  category: string
}

interface ISkill {
  name: string
  level: number
  category: string
  icon: string
}

interface IEducation {
  title: string
  institution: string
  year: string
  description: string
  type: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Next-generation shopping experience with AI recommendations",
    image: "/placeholder.svg?height=800&width=1200&text=E-commerce+Platform",
    tags: ["React", "Node.js", "AI", "Stripe"],
    fullDescription:
      "Revolutionary e-commerce platform featuring AI-powered recommendations, real-time inventory management, and seamless payment processing.",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/ecommerce",
    color: "from-purple-600 via-pink-600 to-red-600",
    category: "Web Application",
  },
  {
    id: 2,
    title: "Neural Task Manager",
    description: "AI-powered productivity suite with predictive analytics",
    image: "/placeholder.svg?height=800&width=1200&text=Neural+Task+Manager",
    tags: ["Vue.js", "Python", "TensorFlow", "Firebase"],
    fullDescription:
      "Advanced task management system powered by machine learning algorithms that predict project timelines and optimize resource allocation.",
    demoUrl: "https://tasks.example.com",
    githubUrl: "https://github.com/example/tasks",
    color: "from-blue-600 via-cyan-600 to-teal-600",
    category: "AI Application",
  },
  {
    id: 3,
    title: "Quantum Weather",
    description: "Hyper-accurate weather prediction using quantum computing",
    image: "/placeholder.svg?height=800&width=1200&text=Quantum+Weather",
    tags: ["React", "Quantum", "D3.js", "WebGL"],
    fullDescription:
      "Revolutionary weather forecasting platform leveraging quantum computing algorithms for unprecedented accuracy.",
    demoUrl: "https://weather.example.com",
    githubUrl: "https://github.com/example/weather",
    color: "from-green-600 via-emerald-600 to-cyan-600",
    category: "Scientific Computing",
  },
]

const SkillsData: ISkill[] = [
  { name: "React", level: 95, category: "Frontend", icon: "⚛️" },
  { name: "Node.js", level: 90, category: "Backend", icon: "🟢" },
  { name: "TypeScript", level: 88, category: "Language", icon: "🔷" },
  { name: "Python", level: 85, category: "Language", icon: "🐍" },
  { name: "GSAP", level: 92, category: "Animation", icon: "✨" },
  { name: "Three.js", level: 80, category: "3D", icon: "🎮" },
  { name: "AWS", level: 75, category: "Cloud", icon: "☁️" },
  { name: "Docker", level: 82, category: "DevOps", icon: "🐳" },
]

const EducationData: IEducation[] = [
  {
    title: "Ingeniería en Sistemas Computacionales",
    institution: "Universidad Tecnológica",
    year: "2020 - 2024",
    description:
      "Especialización en desarrollo de software, inteligencia artificial y arquitectura de sistemas distribuidos.",
    type: "degree",
  },
  {
    title: "Certificación AWS Solutions Architect",
    institution: "Amazon Web Services",
    year: "2023",
    description: "Certificación profesional en diseño y despliegue de sistemas escalables en AWS.",
    type: "certification",
  },
  {
    title: "Full Stack Web Development",
    institution: "FreeCodeCamp",
    year: "2022",
    description: "Programa intensivo de desarrollo web full-stack con proyectos reales.",
    type: "course",
  },
  {
    title: "Machine Learning Specialization",
    institution: "Stanford University (Coursera)",
    year: "2023",
    description: "Especialización en algoritmos de machine learning y deep learning.",
    type: "course",
  },
]

const AssassinRiddlesData = [
  {
    question: "¿Cuál es el primer mandamiento del Credo de los Asesinos?",
    answer: "nada es verdad",
    altair:
      "La sabiduría de los antiguos nos guía, hermano. Has demostrado que comprendes los fundamentos de nuestra orden.",
    ezio: "Bene! Tu conocimiento del Credo honra a nuestros ancestros. La verdad absoluta es una ilusión que ciega a los débiles.",
  },
  {
    question: "¿Qué significa 'Requiescat in pace' y quién lo dice?",
    answer: "descansa en paz",
    altair: "Las palabras de respeto por los caídos. Incluso nuestros enemigos merecen encontrar la paz en la muerte.",
    ezio: "Esatto! Estas palabras honran tanto al caído como al que las pronuncia. La muerte no es el final, sino una transición.",
  },
  {
    question: "¿Cuál es el nombre de la orden enemiga de los Asesinos?",
    answer: "templarios",
    altair:
      "Conoces bien a nuestros eternos adversarios. Su búsqueda del orden absoluto es la antítesis de nuestra libertad.",
    ezio: "Sí, los Templarios... Aquellos que buscan controlar en lugar de liberar. Tu conocimiento te servirá bien, assassino.",
  },
]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
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

  const { toast } = useToast()

  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const modalContentRef = useRef<HTMLDivElement>(null)
  const assassinModalRef = useRef<HTMLDivElement>(null)
  const statusModalRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setCurrentSection(sectionId)
      setMenuOpen(false)
    }
  }

  const handlePortfolioClick = () => {
    const newCount = portfolioClicks + 1
    setPortfolioClicks(newCount)

    if (newCount === 5) {
      setShowAssassinModal(true)
      setCurrentRiddle(Math.floor(Math.random() * AssassinRiddlesData.length))
    }
  }

  const handleRiddleSubmit = () => {
    const correct = riddleAnswer.toLowerCase().trim() === AssassinRiddlesData[currentRiddle].answer
    setIsCorrect(correct)
    setShowResult(true)

    if (correct && assassinModalRef.current) {
      // Play sound only if correct and audio element exists
      // You'll need to add an audio element for the sound effect, perhaps within AssassinModal
      // For now, this part is commented out as the audio element is not directly available here.
      // If you add an <audio> tag with a ref, you can play it here.
      // eagleSoundRef.current.play().catch(console.error)
    }
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setShowStatusModal(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        throw new Error("Error al enviar el mensaje")
      }
    } catch (error) {
      setSubmitSuccess(false)
      setShowStatusModal(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const closeStatusModal = () => {
    setShowStatusModal(false)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Navigation animations
      gsap.fromTo(".nav-item", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.5 })

      // Hero animations
      const heroTl = gsap.timeline()
      gsap.set([".hero-title", ".hero-subtitle", ".hero-cta", ".scroll-indicator"], {
        opacity: 0,
        y: 100,
        scale: 0.8,
      })
      gsap.set(".hero-bg-layer", { scale: 1.2, opacity: 0 })
      gsap.set(".hero-overlay", { scaleX: 0, transformOrigin: "left center" })

      heroTl
        .to(".hero-bg-layer", { scale: 1, opacity: 1, duration: 2.5, ease: "power2.out" })
        .to(".hero-overlay", { scaleX: 1, duration: 1.5, ease: "power3.inOut" }, "-=1.5")
        .to(".hero-title", { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "back.out(1.7)" }, "-=0.8")
        .to(".hero-subtitle", { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" }, "-=0.6")
        .to(".hero-cta", { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.7)" }, "-=0.4")
        .to(".scroll-indicator", { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power2.out" }, "-=0.2")

      // Complex parallax effects
      gsap.to(".parallax-bg", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top bottom", end: "bottom top", scrub: 1.5 },
      })
      gsap.to(".parallax-mid", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top bottom", end: "bottom top", scrub: 1 },
      })
      gsap.to(".parallax-front", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top bottom", end: "bottom top", scrub: 0.5 },
      })

      // About section parallax
      gsap.to(".about-bg", {
        yPercent: -40,
        ease: "none",
        scrollTrigger: { trigger: aboutRef.current, start: "top bottom", end: "bottom top", scrub: 1 },
      })
      gsap.to(".about-content", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: { trigger: aboutRef.current, start: "top bottom", end: "bottom top", scrub: 0.5 },
      })

      // Skills animation
      gsap.fromTo(
        ".skill-bar",
        { width: 0 },
        {
          width: (i, el) => el.dataset.level + "%",
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".skills-container",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Education timeline animation
      gsap.fromTo(
        ".education-item",
        { opacity: 0, x: -100, rotationY: 45 },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".education-timeline",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Contact form parallax
      gsap.to(".contact-bg", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: { trigger: contactRef.current, start: "top bottom", end: "bottom top", scrub: 1 },
      })

      // Projects animations
      projects.forEach((_, index) => {
        const projectCard = `.project-${index}`
        gsap.set(projectCard, { opacity: 0, y: 200, rotationX: 45 })

        const projectTl = gsap.timeline({
          scrollTrigger: {
            trigger: projectCard,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        })

        projectTl
          .to(projectCard, { opacity: 1, y: 0, rotationX: 0, duration: 1.2, ease: "power3.out" })
          .to(`.project-image-${index}`, { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }, "-=0.8")
          .to(`.project-content-${index}`, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.6")
      })

      // Section tracking
      ScrollTrigger.batch(".section", {
        onEnter: (elements) => {
          const id = elements[0].id
          setCurrentSection(id)
        },
        start: "top center",
        end: "bottom center",
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const openProject = (project: Project) => {
    setSelectedProject(project)
    gsap.set(modalRef.current, { display: "flex" })

    const modalTl = gsap.timeline()
    modalTl
      .fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" })
      .fromTo(
        modalContentRef.current,
        { scale: 0.7, opacity: 0, rotationY: 45, y: 100 },
        { scale: 1, opacity: 1, rotationY: 0, y: 0, duration: 1, ease: "back.out(1.7)" },
        "-=0.2",
      )
      .fromTo(
        ".modal-image",
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.6",
      )
      .fromTo(
        ".modal-content > *",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
        "-=0.4",
      )
  }

  const closeProject = () => {
    const modalTl = gsap.timeline()
    modalTl
      .to(".modal-content > *", { opacity: 0, y: -30, duration: 0.3, stagger: 0.05, ease: "power2.in" })
      .to(
        modalContentRef.current,
        { scale: 0.7, opacity: 0, rotationY: -45, y: 100, duration: 0.6, ease: "power2.in" },
        "-=0.2",
      )
      .to(
        modalRef.current,
        {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            setSelectedProject(null)
            gsap.set(modalRef.current, { display: "none" })
          },
        },
        "-=0.3",
      )
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
        <Navigation
          currentSection={currentSection}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          scrollToSection={scrollToSection}
          onPortfolioClick={handlePortfolioClick}
        />

        <HeroSection ref={heroRef} scrollToSection={scrollToSection} />

        <AboutSection ref={aboutRef} skills={SkillsData} />

        <ProjectsSection ref={projectsRef} projects={projects} onProjectClick={openProject} />

        <EducationSection ref={educationRef} education={EducationData} />

        <ContactSection
          ref={contactRef}
          formData={formData}
          isSubmitting={isSubmitting}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />

        <ProjectModal ref={modalRef} project={selectedProject} onClose={closeProject} contentRef={modalContentRef} />

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

        <ContactStatusModal show={showStatusModal} success={submitSuccess} onClose={closeStatusModal} />
      </div>
    </LanguageProvider>
  )
}
