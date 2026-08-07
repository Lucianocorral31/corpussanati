import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0e27' },
  ],
};

export const metadata: Metadata = {
  title: 'Corpus Sanati - Atención Domiciliaria Integral en Tucumán',
  description: 'Servicios de atención domiciliaria integral para pacientes con patologías complejas, crónicas y agudas. Equipo multidisciplinario especializado en Tucumán.',
  keywords: [
    'atención domiciliaria',
    'cuidados en casa',
    'enfermería domiciliaria',
    'rehabilitación',
    'Tucumán',
    'servicios de salud',
    'pacientes oncológicos',
    'atención integral',
  ],
  authors: [{ name: 'Corpus Sanati SRL' }],
  creator: 'Corpus Sanati',
  publisher: 'Corpus Sanati SRL',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://corpussanati.com',
    siteName: 'Corpus Sanati',
    title: 'Corpus Sanati - Atención Domiciliaria Integral',
    description: 'Servicios profesionales de atención domiciliaria en Tucumán. Equipo multidisciplinario de enfermería, kinesiología, psicología y más.',
    images: [
      {
        url: 'https://corpussanati.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Corpus Sanati - Atención Domiciliaria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corpus Sanati - Atención Domiciliaria Integral',
    description: 'Servicios de salud en tu hogar. Equipo especializado en Tucumán.',
  },
  verification: {
    google: 'google-site-verification-code', // Agregar tu código de verificación
  },
  alternates: {
    canonical: 'https://corpussanati.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'YOUR_GA_ID', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="bg-dark-bg text-text-lighter">{children}</body>
    </html>
  );
}
