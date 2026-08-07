'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="min-h-screen pt-24 pb-12 relative overflow-hidden flex items-center">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400 font-semibold">
              Atención Domiciliaria Integral
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Cuidados Profesionales en la{' '}
            <span className="gradient-text">Comodidad de Tu Hogar</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-text-light mb-8 max-w-2xl leading-relaxed">
            Equipo multidisciplinario especializado en atención domiciliaria integral para pacientes con patologías complejas, crónicas, agudas y subagudas. Porque la salud también vive en casa.
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/5493816372613"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-105 text-center"
            >
              Contactar por WhatsApp
            </a>
            <a
              href="tel:+5493816372613"
              className="px-8 py-4 bg-blue-500/10 border-2 border-blue-500 text-blue-400 font-bold rounded-lg hover:bg-blue-500/20 transition-all duration-300 text-center"
            >
              Llamar Ahora
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-3xl text-cyan-400">↓</div>
        </motion.div>
      </div>
    </section>
  );
}
