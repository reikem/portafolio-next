"use client";
import { useLanguage } from "@/contexts/languageContext";
import { IProject } from "@/core/interfaces";


interface ProjectCardProps {
    project:IProject;
    index:number;
    onClick:()=>void;
}
export function ProjectCard({project,index,onClick}:ProjectCardProps) {

    const {t}= useLanguage();

    return (
        <div className={`project-${index} perspective-1000 cursor-pointer`} onClick={onClick}>
          <div className="preserve-3d hover:scale-[1.02] transition-all duration-500">
            <div className={`bg-gradient-to-br ${project.color} rounded-2xl overflow-hidden shadow-2xl`}>
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className={`project-image-${index} relative h-64 md:h-full rounded-xl overflow-hidden`}>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className={`project-content-${index} flex flex-col justify-center space-y-4`}>
                  <p className="text-sm text-white/70 uppercase tracking-wider">{project.category}</p>
                  <h3 className="text-4xl font-bold text-white">{project.title}</h3>
                  <p className="text-lg text-white/90">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="mt-4 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-white/90 transition-colors w-fit">
                    {t.viewDetails} →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}