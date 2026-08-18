'use client';

import { motion } from 'framer-motion';

const trustPoints = [
  '5 especialidades médicas',
  '17 departamentos de cobertura',
  'Equipo interdisciplinario certificado',
];

export function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-16 relative overflow-hidden flex items-center">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '2s' }}
      ></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(6,182,212,0.08)_1px,transparent_0)] bg-[length:32px_32px] -z-10"></div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="px-4 py-2 bg-cyan-50 border border-cyan-300 rounded-full text-sm text-cyan-700 font-semibold">
              Atendemos en Tucumán · Lunes a viernes 8 a 14hs
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] text-gray-900 text-balance">
            Atención Domiciliaria{' '}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Sin Salir de Casa
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed">
            Enfermería, kinesiología y un equipo profesional interdisciplinario que brinda atención domiciliaria integral. Para pacientes con patologías crónicas, oncológicas y en rehabilitación, con la misma calidad clínica que en el sanatorio.
          </p>

          {/* Trust points */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
            {trustPoints.map((point, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {point}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/5493816372613?text=Hola%2C%20quisiera%20informarme%20sobre%20atenci%C3%B3n%20domiciliaria"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.03] text-center inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.803.474 3.552 1.373 5.093L2 22l5.03-1.36A9.955 9.955 0 0012.001 22c5.522 0 10-4.478 10-10s-4.478-10-10-10zm0 18.05a8.02 8.02 0 01-4.11-1.13l-.294-.176-3.062.828.82-2.99-.19-.306A8.006 8.006 0 014 12c0-4.418 3.584-8 8.001-8 4.418 0 8 3.582 8 8s-3.582 8.05-8 8.05z" />
              </svg>
              Escribir por WhatsApp
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="hidden md:flex flex-col items-center gap-1 absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400"
        >
          <span className="text-xs font-medium tracking-wide">Conocé el servicio</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
