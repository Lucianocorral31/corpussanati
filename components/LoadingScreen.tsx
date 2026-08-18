'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-gradient-to-br from-white via-blue-50 to-cyan-50 z-50 flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-8">
        {/* Animated Logo */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-5xl font-bold gradient-text"
        >
          Corpus Sanati
        </motion.div>

        {/* Animated loader circles */}
        <div className="flex gap-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
          />
        </div>

        {/* Loading text */}
        <motion.p
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-900 font-medium"
        >
          Cargando...
        </motion.p>
      </div>
    </motion.div>
  );
}
