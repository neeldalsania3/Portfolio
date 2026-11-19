import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import type { Project } from '../../data/portfolio';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                className="glass-card w-full max-w-4xl p-6 sm:p-8 relative"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="mb-6">
                  <div className="h-2 w-20 bg-gradient-to-r from-accent-primary to-accent-tertiary rounded-full mb-4" />
                  <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-3">
                    {project.title}
                  </h2>
                  
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-accent-primary/20 to-accent-tertiary/20 border border-accent-primary/30 dark:border-accent-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  {/* Overview */}
                  <div>
                    <h3 className="text-lg font-semibold font-heading mb-3 text-accent-primary dark:text-accent-primary">
                      Project Overview
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.detailedDescription || project.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  {project.features && project.features.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold font-heading mb-3 text-accent-primary dark:text-accent-primary">
                        Key Features & Achievements
                      </h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex gap-3 text-slate-600 dark:text-slate-300"
                          >
                            <CheckCircle className="w-5 h-5 text-accent-primary dark:text-accent-primary flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technical Highlights */}
                  {project.technicalHighlights && project.technicalHighlights.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold font-heading mb-3 text-accent-primary dark:text-accent-primary">
                        Technical Highlights
                      </h3>
                      <ul className="space-y-2">
                        {project.technicalHighlights.map((highlight, index) => (
                          <li
                            key={index}
                            className="flex gap-3 text-slate-600 dark:text-slate-300"
                          >
                            <span className="text-accent-primary dark:text-accent-primary">→</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Impact */}
                  {project.impact && (
                    <div>
                      <h3 className="text-lg font-semibold font-heading mb-3 text-accent-primary dark:text-accent-primary">
                        Impact & Results
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.impact}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
