'use client';

import { motion } from 'framer-motion';

const services = [
  {
    icon: '🏥',
    title: 'Enfermería',
    description: 'Cuidados médicos especializados 24/7 en el domicilio con protocolos de calidad asistencial.',
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
    icon: '🧠',
    title: 'Psicología',
    description: 'Apoyo emocional y psicológico para pacientes y familias durante el proceso de recuperación.',
  },
  {
    icon: '🥗',
    title: 'Nutrición',
    description: 'Planes nutricionales personalizados según patología y necesidades específicas.',
  },
];

export function Services() {
  return (
    <section className="section-padding bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Servicios Especializados
          </h2>
          <p className="text-lg text-text-light max-w-2xl">
            Contamos con profesionales certificados en diferentes disciplinas para brindar atención integral adaptada a cada paciente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-300"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-text-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
