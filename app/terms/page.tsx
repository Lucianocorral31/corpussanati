import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones - Corpus Sanati',
  description: 'Términos y condiciones de uso de Corpus Sanati',
};

export default function Terms() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-12">
        <div className="container-max px-4 md:px-8 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            Términos y Condiciones
          </h1>

          <div className="space-y-6 text-text-lighter leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                1. Aceptación de Términos
              </h2>
              <p>
                Al utilizar este sitio web, usted acepta nuestros términos y condiciones. Si no está de acuerdo, no utilice nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                2. Servicios Proporcionados
              </h2>
              <p>
                Corpus Sanati SRL proporciona servicios de atención domiciliaria integral a través de profesionales especializados. Los servicios se prestan bajo protocolos definidos de prestación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                3. Limitación de Responsabilidad
              </h2>
              <p>
                Corpus Sanati no se responsabiliza por daños indirectos, incidentales o consecuentes derivados del uso o imposibilidad de uso de nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                4. Modificaciones
              </h2>
              <p>
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                5. Jurisdicción
              </h2>
              <p>
                Estos términos se rigen por las leyes de la República Argentina. Cualquier disputa será resuelta en los tribunales competentes de Tucumán.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
