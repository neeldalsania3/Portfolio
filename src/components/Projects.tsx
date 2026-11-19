import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { projects } from '../data/portfolio';
import { ProjectDetailModal } from './modals/ProjectDetailModal';
import { useState } from 'react';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <section id="projects" className="py-20 sm:py-32 relative overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="section-label mb-4">05 / Projects</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-4">
              A Look at My <span className="gradient-text">Product Contributions</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              From enterprise applications to real-time platforms — full-featured business solutions built for real users.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="glass-card overflow-hidden group hover:scale-[1.02] transition-all duration-300 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Gradient header */}
                <div className="h-2 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary" />
                
                <div className="p-6 flex flex-col flex-1">
                  {/* Project Number */}
                  <div className="text-sm font-mono text-accent-primary dark:text-accent-primary mb-3">
                    PROJECT 0{index + 1}
                  </div>

                  <h3 className="text-xl font-bold font-heading mb-3 group-hover:text-accent-primary dark:group-hover:text-accent-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium text-slate-500 dark:text-slate-500">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => handleViewDetails(project)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-accent-primary/10 to-accent-tertiary/10 hover:from-accent-primary/20 hover:to-accent-tertiary/20 border border-accent-primary/30 dark:border-accent-primary/30 transition-all text-sm font-medium group/btn"
                  >
                    <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    View Details
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
