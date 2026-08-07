import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies - Corpus Sanati',
  description: 'Política de cookies de Corpus Sanati',
};

export default function Cookies() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-12">
        <div className="container-max px-4 md:px-8 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            Política de Cookies
          </h1>

          <div className="space-y-6 text-text-lighter leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                ¿Qué son las Cookies?
              </h2>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. Nos ayudan a mejorar su experiencia.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                Tipos de Cookies que Utilizamos
              </h2>
              <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                <li>Cookies Esenciales: necesarias para el funcionamiento del sitio</li>
                <li>Cookies Analíticas: para entender cómo usa nuestro sitio</li>
                <li>Cookies de Funcionalidad: para recordar sus preferencias</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                Google Analytics
              </h2>
              <p>
                Utilizamos Google Analytics para analizar el tráfico del sitio web. Google puede recopilar información sobre su actividad de navegación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                Control de Cookies
              </h2>
              <p>
                Puede controlar y rechazar cookies a través de la configuración de su navegador. Sin embargo, esto puede afectar la funcionalidad del sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                Contacto
              </h2>
              <p>
                Para preguntas sobre nuestra política de cookies, contáctenos en:{' '}
                <a
                  href="mailto:corpussanati@gmail.com"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  corpussanati@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
