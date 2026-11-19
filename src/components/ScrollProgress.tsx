import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollProgress';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary z-50"
      style={{ scaleX: progress / 100, transformOrigin: '0%' }}
      initial={{ scaleX: 0 }}
    />
  );
}
