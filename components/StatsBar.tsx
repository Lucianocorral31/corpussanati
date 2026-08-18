'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '5', label: 'Especialidades médicas' },
  { value: '17', label: 'Departamentos de cobertura' },
  { value: '2', label: 'Oficinas en Tucumán' },
  { value: '24/7', label: 'Coordinación de cuidados' },
];

export function StatsBar() {
  return (
    <section className="border-y border-gray-100 bg-gray-50/60">
      <div className="container-max py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-900 font-medium mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
