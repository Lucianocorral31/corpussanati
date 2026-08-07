'use client';

import { motion } from 'framer-motion';

const objectives = [
  {
    title: 'Asistencia Clínica Coordinada',
    description:
      'Interactuar con establecimientos asistenciales mediante mecanismos de referencia y contrarreferencia.',
  },
  {
    title: 'Reincorporación Social',
    description:
      'Favorecer la reincorporación de la persona a su entorno sociofamiliar de manera gradual.',
  },
  {
    title: 'Evitar Institucionalización',
    description: 'Prevenir la institucionalización innecesaria o precoz del paciente.',
  },
  {
    title: 'Reducir Riesgos',
    description:
      'Disminuir el riesgo de infección intrahospitalaria y complicaciones asociadas.',
  },
  {
    title: 'Capacitación Familiar',
    description:
      'Promover el compromiso y participación de la familia mediante información y capacitación adecuada.',
  },
  {
    title: 'Optimizar Recursos',
    description:
      'Disminuir el promedio de días de internación aumentando disponibilidad de camas.',
  },
];

export function Objectives() {
  return (
    <section className="section-padding bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Nuestros Objetivos
          </h2>
          <p className="text-lg text-text-light max-w-2xl">
            Nos comprometemos a brindar atención de calidad enfocada en el bienestar integral del paciente y su familia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((obj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-cyan-500/10 border-2 border-green-500/20 hover:border-green-500/50 transition-all duration-300 overflow-hidden"
            >
              {/* Top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>

              <div className="relative z-10">
                <h4 className="text-xl font-bold text-green-400 mb-3">
                  {obj.title}
                </h4>
                <p className="text-text-light leading-relaxed">
                  {obj.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
