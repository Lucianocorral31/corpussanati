'use client';

import { motion } from 'framer-motion';

const criteria = [
  'Altas de internación de II y III Nivel',
  'Patologías crónicas complejas de larga evolución',
  'Rehabilitación de patologías aguda/subaguda',
  'Casos clínico-quirúrgicos (escaras, úlceras arteriales, etc.)',
  'Continuación de Tratamientos ATB',
  'Pacientes oncológicos y paliativos',
];

export function Criteria() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-cyan-500/15 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-cyan-400 mb-8">
            ¿Para quién es nuestro servicio?
          </h3>
          <p className="text-text-light mb-8 text-lg">
            Atendemos a pacientes con:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {criteria.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
              >
                <span className="text-xl text-cyan-400 font-bold mt-0.5 flex-shrink-0">
                  ✓
                </span>
                <span className="text-text-lighter font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
