'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function CTA() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden p-12 md:p-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/15 border-2 border-cyan-500/40"
        >
          {/* Animated background element */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 animate-float"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              ¿Necesitas Atención Domiciliaria?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-text-lighter mb-8 leading-relaxed"
            >
              Contacta con nuestro equipo profesional ahora. Estamos disponibles de lunes a viernes de 8 a 14hs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://wa.me/5493816372613"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-105 text-center"
              >
                WhatsApp Ahora
              </a>
              <a
                href="tel:+5493816372613"
                className="px-8 py-4 bg-white/10 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/20 transition-all duration-300 text-center"
              >
                Llamar
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
