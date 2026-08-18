'use client';

import { motion } from 'framer-motion';

const criteria = [
  {
    title: 'Patologías crónicas',
    description: 'Pacientes con patologías crónicas complejas de larga evolución.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h3l2.25-7.5 3 15L14.25 9l1.5 3h4.5" />
    ),
  },
  {
    title: 'Rehabilitación prolongada',
    description: 'Rehabilitación de patologías subagudas que requieren tratamiento de largo plazo.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l4.5-16.5m0 0L15 19.5M9 3l6 16.5m4.5-16.5L15 19.5" />
    ),
  },
  {
    title: 'Oncológicos y paliativos',
    description: 'Pacientes oncológicos y paliativos que no puedan trasladarse fuera de su domicilio.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
    ),
  },
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
          className="mb-12"
        >
          <span className="text-cyan-600 font-bold text-sm uppercase tracking-wider">
            Población destinataria
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-gray-900">
            ¿Para quién es nuestro servicio?
          </h2>
          <p className="text-lg text-gray-900 max-w-2xl">
            Atendemos a pacientes que requieren cuidados en su domicilio bajo estas condiciones:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {criteria.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative p-7 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200/60 hover:border-cyan-400 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="w-14 h-14 rounded-xl bg-white border border-cyan-200 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                <svg className="w-7 h-7 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  {item.icon}
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
