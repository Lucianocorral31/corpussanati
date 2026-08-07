import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad - Corpus Sanati',
  description: 'Política de privacidad de Corpus Sanati - Atención Domiciliaria Integral',
};

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-12">
        <div className="container-max px-4 md:px-8 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            Política de Privacidad
          </h1>

          <div className="space-y-6 text-text-lighter leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                1. Información que Recopilamos
              </h2>
              <p>
                Corpus Sanati SRL recopila información personal cuando usted contacta a través de nuestra página web, incluyendo nombre, número de teléfono, correo electrónico y otros datos necesarios para brindar nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                2. Uso de la Información
              </h2>
              <p>
                La información recopilada se utiliza exclusivamente para:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                <li>Responder a sus consultas</li>
                <li>Brindar información sobre nuestros servicios</li>
                <li>Coordinar atención domiciliaria</li>
                <li>Mejorar nuestros servicios</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                3. Protección de Datos
              </h2>
              <p>
                Implementamos medidas de seguridad para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                4. Compartir Información
              </h2>
              <p>
                No compartimos su información personal con terceros sin su consentimiento, excepto cuando es requerido por ley o necesario para brindar nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                5. Contacto
              </h2>
              <p>
                Si tiene preguntas sobre nuestra Política de Privacidad, contáctenos en:{' '}
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
