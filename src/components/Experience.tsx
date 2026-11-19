import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experience } from '../data/portfolio';

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">04 / Experience</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-tertiary hidden sm:block" />

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-accent-primary to-accent-tertiary glow hidden sm:block" />

                  <div className="glass-card p-6 sm:p-8 sm:ml-20 hover:scale-[1.02] transition-transform">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-accent-primary/20 to-accent-tertiary/20 sm:hidden">
                          <Briefcase className="w-6 h-6 text-accent-primary dark:text-accent-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold font-heading text-accent-primary dark:text-accent-primary">
                            {exp.position}
                          </h3>
                          <p className="text-lg font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 font-mono sm:ml-4">
                        <span className="px-3 py-1 rounded-full bg-accent-primary/10 dark:bg-accent-primary/10 whitespace-nowrap">
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <motion.li
                          key={idx}
                          className="flex gap-3 text-slate-600 dark:text-slate-400"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                        >
                          <span className="text-accent-primary dark:text-accent-primary mt-1.5">
                            •
                          </span>
                          <span className="flex-1">{resp}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
