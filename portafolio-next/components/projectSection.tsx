import { useLanguage } from "@/contexts/languageContext";
import { IProject } from "@/core/interfaces";
import { forwardRef } from "react";
import { ProjectCard } from "./projectCard";

interface ProjectsSectionProps {
    projects:IProject[];
    onProjectClick:(project:IProject)=>void;
}

export const ProjectsSection = forwardRef<HTMLDivElement, ProjectsSectionProps>(({ projects, onProjectClick }, ref) => {
    const { t } = useLanguage()
  
    return (
      <section id="projects" ref={ref} className="section relative min-h-screen py-20">
        <div className="absolute inset-0 bg-black" />
  
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              {t.myProjects}
            </span>
          </h2>
  
          <div className="space-y-20">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} onClick={() => onProjectClick(project)} />
            ))}
          </div>
        </div>
      </section>
    )
  })
  
  ProjectsSection.displayName = "ProjectsSection"
  