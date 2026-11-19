import { motion } from 'framer-motion';
import { Lightbulb, Zap, Users, Target } from 'lucide-react';
import { about } from '../data/portfolio';

const iconMap = {
  Lightbulb,
  Zap,
  Users,
  Target,
};

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">02 / About</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-4">
            More Than Just <span className="gradient-text">Code</span>
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto space-y-12">
          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {about.description}
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {about.extendedDescription}
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {about.highlights.map((highlight, index) => {
              const Icon = iconMap[highlight.icon as keyof typeof iconMap];
              
              return (
                <motion.div
                  key={highlight.title}
                  className="glass-card p-6 group hover:scale-[1.02] transition-all duration-300 glow-hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-tertiary/20 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-accent-primary dark:text-accent-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold font-heading mb-2 group-hover:text-accent-primary dark:group-hover:text-accent-primary transition-colors">
                        {highlight.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
