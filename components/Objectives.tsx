'use client';

import { motion } from 'framer-motion';

const objectives = [
  {
    title: 'Atención Clínica Coordinada',
    description:
      'Coordinamos la atención junto a los especialistas de la empresa para un seguimiento clínico integral.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    ),
  },
  {
    title: 'Evitar la Hospitalización',
    description:
      'Prevenir la hospitalización del paciente por estadías de larga data, brindando el cuidado en su domicilio.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
    ),
  },
  {
    title: 'Reducir Riesgos',
    description:
      'Disminuir el riesgo de infección intrahospitalaria y complicaciones asociadas.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    ),
  },
  {
    title: 'Capacitación Familiar',
    description:
      'Trabajar junto al paciente y su familia, informando y capacitando para acompañar el proceso de cuidado.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    ),
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
          <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">
            Nuestro compromiso
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-gray-900">
            Objetivos del Servicio
          </h2>
          <p className="text-lg text-gray-900 max-w-2xl">
            Nos comprometemos a brindar atención de calidad enfocada en el bienestar integral del paciente y su familia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {objectives.map((obj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group flex gap-5 p-6 rounded-2xl bg-white border border-gray-100 hover:border-emerald-300 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-50 to-cyan-50 border border-emerald-200/60 flex items-center justify-center group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  {obj.icon}
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1.5">
                  {obj.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
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
