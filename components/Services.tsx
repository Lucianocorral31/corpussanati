'use client';

import { motion } from 'framer-motion';
import { InlineCTA } from './InlineCTA';

const services = [
  {
    icon: '🏥',
    title: 'Enfermería',
    description: 'Cuidados médicos especializados en el domicilio con protocolos de calidad asistencial.',
  },
  {
    icon: '💪',
    title: 'Kinesiología',
    description: 'Rehabilitación y fisioterapia domiciliaria para recuperación funcional y movilidad.',
  },
  {
    icon: '🗣️',
    title: 'Fonoaudiología',
    description: 'Terapia de lenguaje y comunicación personalizada para pacientes con dificultades.',
  },
  {
    icon: '🎯',
    title: 'Terapia Ocupacional',
    description: 'Adaptación del entorno y recuperación funcional para vida independiente.',
  },
  {
    icon: '🥗',
    title: 'Nutrición',
    description: 'Planes nutricionales personalizados según patología y necesidades específicas.',
  },
];

export function Services() {
  return (
    <section id="servicios" className="section-padding bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
      <div className="container-max mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-cyan-600 font-bold text-sm uppercase tracking-wider">
            Nuestro equipo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-gray-900">
            ¿Qué incluye el servicio?
          </h2>
          <p className="text-lg text-gray-900 max-w-2xl">
            Dentro de nuestro servicio de atención domiciliaria integral coordinamos, según lo que cada paciente necesite, profesionales certificados en estas especialidades:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative p-7 rounded-2xl bg-white border border-gray-100 hover:border-cyan-300 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <span className="absolute top-5 right-6 text-5xl font-black text-gray-50 select-none group-hover:text-cyan-50 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-100 border border-cyan-200/60 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-cyan-500/20 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href="https://wa.me/5493816372613?text=Hola%2C%20quisiera%20informarme%20sobre%20el%20servicio%20de%20atenci%C3%B3n%20domiciliaria%20integral"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-cyan-600 hover:text-cyan-700 transition-colors"
                >
                  Consultar por el servicio
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <InlineCTA
        text="¿Querés conocer más sobre nuestro servicio de atención domiciliaria? Contanos el caso."
        message="Hola, quisiera conocer más sobre el servicio de atención domiciliaria integral"
        button="Pedir asesoramiento"
      />
    </section>
  );
}
