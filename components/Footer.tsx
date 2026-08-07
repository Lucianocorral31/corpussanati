'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-dark-bg/50 backdrop-blur border-t border-cyan-500/10">
      <div className="container-max px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h4 className="text-lg font-bold gradient-text mb-4">Corpus Sanati</h4>
            <p className="text-text-light text-sm leading-relaxed">
              Atención Domiciliaria Integral. Equipo profesional multidisciplinario en Tucumán, Argentina.
            </p>
          </div>

          {/* Ubicaciones */}
          <div>
            <h4 className="text-lg font-bold text-cyan-400 mb-4">Ubicaciones</h4>
            <ul className="space-y-2 text-sm text-text-light">
              <li>
                <p className="font-semibold text-text-lighter">San Miguel de Tucumán</p>
                <p>Pje 2 de abril 324 9c</p>
              </li>
              <li>
                <p className="font-semibold text-text-lighter mt-2">Concepción</p>
                <p>Mariano Moreno 1938</p>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-bold text-cyan-400 mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+5493816372613"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  📱 +54 9 3816 37-2613
                </a>
              </li>
              <li>
                <a
                  href="mailto:corpussanati@gmail.com"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  ✉️ corpussanati@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5493816372613"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  💬 WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold text-cyan-400 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-text-light hover:text-cyan-400 transition-colors"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-text-light hover:text-cyan-400 transition-colors"
                >
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-text-light hover:text-cyan-400 transition-colors"
                >
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cyan-500/10 pt-8 text-center">
          <p className="text-text-light text-sm">
            &copy; 2024 Corpus Sanati SRL. Todos los derechos reservados. |{' '}
            <span className="text-cyan-400">Atención Domiciliaria Integral</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
