'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="https://wa.me/5493816372613?text=Hola%2C%20quisiera%20informarme%20sobre%20atenci%C3%B3n%20domiciliaria"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 pl-4 pr-5 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full shadow-xl shadow-cyan-600/30"
          aria-label="Escribir por WhatsApp"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.803.474 3.552 1.373 5.093L2 22l5.03-1.36A9.955 9.955 0 0012.001 22c5.522 0 10-4.478 10-10s-4.478-10-10-10zm0 18.05a8.02 8.02 0 01-4.11-1.13l-.294-.176-3.062.828.82-2.99-.19-.306A8.006 8.006 0 014 12c0-4.418 3.584-8 8.001-8 4.418 0 8 3.582 8 8s-3.582 8.05-8 8.05z" />
          </svg>
          <span className="hidden sm:inline text-sm">Escribinos</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
