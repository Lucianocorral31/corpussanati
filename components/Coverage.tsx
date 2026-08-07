'use client';

import { motion } from 'framer-motion';

const departments = [
  'Departamento Capital',
  'Yerba Buena',
  'Tafí Viejo',
  'Trancas',
  'Lules',
  'Cruz Alta',
  'Famailla',
  'Leales',
  'Monteros',
  'Chicligasta',
  'Río Chico',
  'Juan B. Alberdi',
  'La Cocha',
  'Graneros',
];

export function Coverage() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Área de Cobertura
          </h2>
          <p className="text-lg text-text-light max-w-2xl">
            Contamos con profesionales distribuidos en casi todos los departamentos de Tucumán y oficinas estratégicas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-cyan-500/15 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-cyan-400 mb-8">
            Departamentos Atendidos
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-4 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">📍</span>
                  <span className="text-text-lighter font-medium">{dept}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
