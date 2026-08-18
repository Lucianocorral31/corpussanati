'use client';

import { motion } from 'framer-motion';

export function InlineCTA({
  text,
  button = 'Escribir por WhatsApp',
  message = 'Hola, quisiera informarme sobre atención domiciliaria',
}: {
  text: string;
  button?: string;
  message?: string;
}) {
  return (
    <div className="container-max px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center justify-between gap-5 rounded-2xl border border-cyan-100 bg-gradient-to-r from-cyan-50/80 to-blue-50/80 px-6 py-5 sm:px-8"
      >
        <p className="text-gray-900 font-semibold text-center sm:text-left">{text}</p>
        <a
          href={`https://wa.me/5493816372613?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.03]"
        >
          {button}
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </motion.div>
    </div>
  );
}
