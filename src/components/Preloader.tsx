import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFontReady, setIsFontReady] = useState(false);

  useEffect(() => {
    let isActive = true;
    let fontTimedOut = false;
    let hideTimer: ReturnType<typeof setTimeout> | undefined;
    const fontTimeout = setTimeout(() => {
      fontTimedOut = true;
      setIsLoading(false);
    }, 2500);

    document.fonts.load('700 60px "Space Grotesk"', 'ND.').then(() => {
      if (!isActive || fontTimedOut) return;

      clearTimeout(fontTimeout);
      setIsFontReady(true);
      hideTimer = setTimeout(() => setIsLoading(false), 2000);
    }).catch(() => {
      if (!isActive) return;

      clearTimeout(fontTimeout);
      setIsLoading(false);
    });

    return () => {
      isActive = false;
      clearTimeout(fontTimeout);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {isFontReady && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="preloader-logo font-heading">
                ND<span className="text-accent-primary dark:text-accent-primary">.</span>
              </h1>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
