'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const locations = [
  {
    icon: '🏢',
    title: 'San Miguel de Tucumán',
    subtitle: 'Sede Principal',
    address: 'Pje 2 de abril 324 9c',
    city: 'San Miguel de Tucumán',
    hours: 'Lunes a Viernes | 08:00 a 14:00 hs',
  },
  {
    icon: '🏥',
    title: 'Concepción',
    subtitle: 'Sucursal',
    address: 'Mariano Moreno 1938',
    city: 'Concepción',
    hours: 'Lunes a Viernes | 08:00 a 14:00 hs',
  },
  {
    icon: '📞',
    title: 'Contacto Directo',
    subtitle: 'Comunícate con nosotros',
    phone: '+54 9 3816 37-2613',
    email: 'corpussanati@gmail.com',
    hours: 'L-V 8 a 14hs',
  },
];

export function Locations() {
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
            Nuestras Oficinas
          </h2>
          <p className="text-lg text-text-light max-w-2xl">
            Ubicadas estratégicamente en Tucumán para atender mejor a nuestros pacientes. Visítanos o contáctanos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Top bar */}
              <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>

              <div className="p-8">
                {/* Icon and Title */}
                <div className="mb-6">
                  <div className="text-4xl mb-3">{location.icon}</div>
                  <h3 className="text-2xl font-bold text-cyan-400">
                    {location.title}
                  </h3>
                  <p className="text-sm text-text-light font-medium mt-1">
                    {location.subtitle}
                  </p>
                </div>

                {/* Info */}
                <div className="space-y-4 mb-6 border-t border-cyan-500/10 pt-6">
                  {location.address && (
                    <div>
                      <p className="text-xs text-cyan-400 font-bold uppercase tracking-wide mb-1">
                        📍 Dirección
                      </p>
                      <p className="text-text-lighter font-medium">
                        {location.address}
                        {location.city && <br />}
                        {location.city}
                      </p>
                    </div>
                  )}

                  {location.phone && (
                    <div>
                      <p className="text-xs text-cyan-400 font-bold uppercase tracking-wide mb-1">
                        📱 Teléfono
                      </p>
                      <Link
                        href={`tel:${location.phone}`}
                        className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                      >
                        {location.phone}
                      </Link>
                    </div>
                  )}

                  {location.email && (
                    <div>
                      <p className="text-xs text-cyan-400 font-bold uppercase tracking-wide mb-1">
                        ✉️ Email
                      </p>
                      <Link
                        href={`mailto:${location.email}`}
                        className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                      >
                        {location.email}
                      </Link>
                    </div>
                  )}

                  <div>
                    <p className="text-xs text-cyan-400 font-bold uppercase tracking-wide mb-1">
                      🕐 Horario
                    </p>
                    <p className="text-text-lighter font-medium">{location.hours}</p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href="https://wa.me/5493816372613"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-lg hover:shadow-glow transition-all duration-300 text-center text-sm"
                  >
                    💬 WhatsApp
                  </a>
                  <a
                    href="tel:+5493816372613"
                    className="flex-1 px-4 py-3 bg-cyan-500/20 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 text-center text-sm"
                  >
                    ☎ Llamar
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
