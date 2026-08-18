'use client';

import { motion } from 'framer-motion';
import { InlineCTA } from './InlineCTA';

const departments = [
  'Departamento Capital',
  'Yerba Buena',
  'Tafí Viejo',
  'Tafí del Valle',
  'Trancas',
  'Burruyacú',
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
  'Simoca',
];

export function Coverage() {
  return (
    <section id="cobertura" className="section-padding">
      <div className="container-max mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-cyan-600 font-bold text-sm uppercase tracking-wider">
            Alcance provincial
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-gray-900">
            Área de Cobertura
          </h2>
          <p className="text-lg text-gray-900 max-w-2xl">
            Contamos con profesionales distribuidos en todos los departamentos de Tucumán y oficinas estratégicas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-gray-100 bg-white p-6 md:p-10 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-7">
            <span className="w-9 h-9 rounded-lg bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 font-bold text-sm">
              17
            </span>
            <h3 className="text-lg font-bold text-gray-900">
              Departamentos atendidos en toda la provincia
            </h3>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {departments.map((dept, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-cyan-50/70 border border-cyan-200 text-gray-800 font-medium text-sm hover:bg-cyan-100 hover:border-cyan-400 transition-all duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                {dept}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <InlineCTA
        text="¿Tu localidad no aparece en la lista? Consultanos igual."
        message="Hola, quisiera consultar si atienden en mi localidad"
      />
    </section>
  );
}
