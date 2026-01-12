import { IEducation, IProject, ISkill } from "../interfaces";

export const ProyectsData: IProject[] = [  {
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
  },];

export const SkillsData: ISkill[] = [ 
    { name: "React", level: 95, category: "Frontend", icon: "⚛️" },
    { name: "Node.js", level: 90, category: "Backend", icon: "🟢" },
    { name: "MongoDB", level: 90, category: "DataBase", icon: "🟢" },
    { name: "SQL", level: 90, category: "DataBase", icon: "🟢" },
    { name: "Express", level: 90, category: "Backend", icon: "🟢" },
    { name: "TypeScript", level: 88, category: "Language", icon: "🔷" },
    { name: "Javascript", level: 88, category: "Language", icon: "✨" },
    { name: "PHP", level: 88, category: "Language", icon: "✨" },
    { name: "Python", level: 85, category: "Language", icon: "🐍" },
    { name: "GSAP", level: 92, category: "Animation", icon: "✨" },
    { name: "Three.js", level: 80, category: "3D", icon: "🎮" },
    { name: "AWS", level: 75, category: "Cloud", icon: "☁️" },
    { name: "Docker", level: 82, category: "DevOps", icon: "🐳" },
    { name: "Flutter", level: 82, category: "Language", icon: "🔷" },
];
export const EducationData: IEducation[] = [
  {
    title: "Curso de Uso de herramientas en la nube AWS",
    institution: "UDemy",
    year: "2025-",
    description:"Especialización en desarrollo de software, inteligencia artificial y arquitectura de sistemas distribuidos.",
    type: "currently",
  },  
  {
    title: "Desarrollo full stack con Python y Django",
    institution: "UDemy",
    year: "2022",
    description:"Certificación profesional en desarrollo web full stack con Python y Django.",
    type: "course",
  },
  {
    title: "Desarrollo Nest + GraphQL evoluccion de APIs",
    institution: "UDemy",
    year: "2022",
    description: "Certificación profesional en desarrollo de APIs con Nest + GraphQL.",
    type: "course",
  },  
  {
    title: "Desarrollo full stack con Flutter y Dart",
    institution: "UDemy",
    year: "2022",
    description: "Certificación profesional en desarrollo web full stack con Flutter y Dart.",
    type: "course",
  }, 
  {
    title: "Desarrollo Web Full Stack con Next.js",
    institution: "UDemy",
    year: "2021",
    description: "Certificación profesional en desarrollo web full stack con Next.js",
    type: "course",
  },
  {
    title: "Desarrollo Web Full Stack con React y Node.js",
    institution: "UDemy",
    year: "2021",
    description: "Certificación profesional en desarrollo web full stack con React y Node.js",
    type: "course",
  },
  {
    title: "Full Stack Web MEVN: MongoDB, Express, VueJS y NodeJS",
    institution: "UDemy",
    year: "2020",
    description: "Certificación profesional en desarrollo web full stack con herrramientas de desarrollo web.",
    type: "course",
  },
  {
    title: "Principios SOLID y Clean Architecture en JavaScript",
    institution: "UDemy",
    year: "2020",
    description: "Certificación profesional en desarrollo web full stack con JavaScript.",
    type: "course",
  },
  {
    title: "Full Stack Web Development JavaScript",
    institution: "UDemy",
    year: "2019",
    description: "Certificación profesional en desarrollo web full stack con JavaScript.",
    type: "course",
  },
  {
    title: "Full Stack Web Development PHP",
    institution: "UDemy",
    year: "2019",
    description: "Certificación profesional en desarrollo web full stack con PHP.",
    type: "course",
  },
  {
    title: "Ingeniería en Informática",
    institution: "DUOC UC",
    year: "2018",
    description: "Enseñanza superior técnica profesional.",
    type: "degree",
  },
  {
    title: "Educación Media",
    institution: "Liceo Valparaíso B-29",
    year: "2005",
    description: "Enseñanza media.",
    type: "degree",
  },
  {
    title: "Educación Básica",
    institution: "Escuela D-250 Gaspar Cabrales",
    year: "2002",
    description: "Enseñanza básica.",
    type: "degree",
  },
]
export const AssassinRiddlesData = [
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
