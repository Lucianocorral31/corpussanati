'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Nos contactás',
    description: 'Escribinos por WhatsApp y contanos la situación del paciente.',
  },
  {
    number: '02',
    title: 'Evaluamos el caso',
    description: 'Definimos junto al médico tratante la complejidad y el plan de atención necesario.',
  },
  {
    number: '03',
    title: 'Armamos el equipo',
    description: 'Coordinamos enfermería y las especialidades que el paciente requiera.',
  },
  {
    number: '04',
    title: 'Comenzamos la atención',
    description: 'El equipo llega al domicilio y da inicio al tratamiento con seguimiento continuo.',
  },
];

export function Process() {
  return (
    <section id="como-funciona" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center max-w-2xl mx-auto"
        >
          <span className="text-cyan-600 font-bold text-sm uppercase tracking-wider">
            Cómo funciona
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-gray-900">
            De la consulta al cuidado, en 4 pasos
          </h2>
          <p className="text-lg text-gray-900">
            Un proceso simple para que tu familia empiece a recibir atención lo antes posible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 h-full shadow-sm hover:shadow-md hover:border-cyan-200 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-900 text-sm leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-cyan-300 text-2xl">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
