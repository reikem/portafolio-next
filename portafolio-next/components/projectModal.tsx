"use client"
import { useLanguage } from "@/contexts/languageContext";
import { IProject } from "@/core/interfaces";
import { forwardRef } from "react";

interface ProjectModalProps {
    project: IProject|null;
    onClose: () => void;
    contentRef: React.RefObject<HTMLDivElement>;
}
export const ProjectModal = forwardRef<HTMLDivElement, ProjectModalProps>(({ project, onClose, contentRef }, ref) => {
    const { t } = useLanguage()
  
    if (!project) return null
  
    return (
      <div
        ref={ref}
        className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ display: "none" }}
        onClick={onClose}
      >
        <div
          ref={contentRef}
          className="bg-black/95 backdrop-blur-2xl rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content p-8">
            <div className="modal-image relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-50`} />
            </div>
  
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">{project.category}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h2>
            <p className="text-xl text-gray-300 mb-6">{project.fullDescription}</p>
  
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white mb-3">{t.technologies}</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
  
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg text-white font-semibold hover:scale-105 transition-transform"
              >
                View Live Demo →
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg text-white font-semibold hover:bg-white/20 transition-colors border border-white/20"
              >
                View on GitHub
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-white/5 rounded-lg text-white font-semibold hover:bg-white/10 transition-colors border border-white/20"
              >
                {t.closeModal}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  })
  
  ProjectModal.displayName = "ProjectModal"