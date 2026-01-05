import { IProject, ISkill } from "../interfaces";

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
    { name: "TypeScript", level: 88, category: "Language", icon: "🔷" },
    { name: "Python", level: 85, category: "Language", icon: "🐍" },
    { name: "GSAP", level: 92, category: "Animation", icon: "✨" },
    { name: "Three.js", level: 80, category: "3D", icon: "🎮" },
    { name: "AWS", level: 75, category: "Cloud", icon: "☁️" },
    { name: "Docker", level: 82, category: "DevOps", icon: "🐳" },
];