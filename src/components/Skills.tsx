import { motion } from 'framer-motion';
import { Code, Server, Wrench } from 'lucide-react';
import { skills } from '../data/portfolio';

const categoryIcons = {
  'Languages & Frameworks': Code,
  'Backend & Databases': Server,
  'Libraries, State Management & Tools': Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-32 relative overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">03 / Skills</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-4">
            The Toolkit Behind <span className="gradient-text">The Products</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive arsenal of modern technologies and frameworks, carefully chosen to build robust, scalable applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skills.map((group, groupIndex) => {
            const Icon = categoryIcons[group.category as keyof typeof categoryIcons];
            
            return (
              <motion.div
                key={group.category}
                className="glass-card p-6 sm:p-8 relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-primary/10 to-accent-tertiary/10 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-500" />
                
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-accent-primary/20 to-accent-tertiary/20">
                    {Icon && <Icon className="w-6 h-6 text-accent-primary dark:text-accent-primary" />}
                  </div>
                  <h3 className="text-xl font-semibold font-heading text-accent-primary dark:text-accent-primary">
                    {group.category}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, index) => (
                    <motion.span
                      key={skill.name}
                      className="px-4 py-2 rounded-lg text-sm font-medium bg-slate-100 dark:bg-slate-800/50 hover:bg-gradient-to-r hover:from-accent-primary/20 hover:to-accent-tertiary/20 hover:scale-105 transition-all border border-transparent hover:border-accent-primary/30 dark:hover:border-accent-primary/30 cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: groupIndex * 0.1 + index * 0.05 }}
                      whileHover={{ y: -2 }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
