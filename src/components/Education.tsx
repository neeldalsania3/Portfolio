import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { education } from '../data/portfolio';

const getIcon = (index: number) => {
  const icons = [GraduationCap, Award, BookOpen];
  return icons[index % icons.length];
};

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">06 / Education</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-4">
            From Theory To <span className="gradient-text">Production</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A strong academic foundation that fuels continuous learning and practical application.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, index) => {
            const Icon = getIcon(index);
            
            return (
              <motion.div
                key={index}
                className="glass-card p-8 hover:scale-[1.02] transition-all duration-300 glow-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Icon with gradient background */}
                <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-primary/20 to-accent-tertiary/10 mb-6 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-tertiary/5 rounded-2xl blur-xl"></div>
                  <Icon className="w-10 h-10 text-accent-primary dark:text-accent-primary relative z-10" />
                </div>

                {/* Content */}
                <div className="text-center space-y-3">
                  {/* Score Badge */}
                  <div className="inline-flex px-5 py-2.5 rounded-full bg-gradient-to-r from-accent-primary/15 to-accent-tertiary/10 border-2 border-accent-primary/30 mb-4">
                    <span className="text-base font-bold text-accent-primary dark:text-accent-primary">
                      {edu.score}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading">
                    {edu.degree}
                  </h3>
                  
                  {edu.field && (
                    <p className="text-accent-primary dark:text-accent-primary font-semibold">
                      {edu.field}
                    </p>
                  )}

                  <p className="text-slate-600 dark:text-slate-400 font-medium">
                    {edu.institution}
                  </p>
                  
                  <p className="text-sm text-slate-500 dark:text-slate-500 font-mono pt-2">
                    {edu.duration}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
