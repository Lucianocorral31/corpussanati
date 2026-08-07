# Corpus Sanati - Atención Domiciliaria Integral

Landing page profesional de Corpus Sanati - Servicios de atención domiciliaria integral en Tucumán, Argentina.

## 🚀 Stack Tecnológico

- **Next.js 15** - Framework React con App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Estilos utilitarios
- **Framer Motion** - Animaciones suaves
- **React 19** - Latest React features

## 📋 Características

✅ Landing page optimizada para conversión
✅ Diseño moderno y dinámico
✅ Animaciones suaves con Framer Motion
✅ Totalmente responsivo (mobile, tablet, desktop)
✅ SEO optimizado
✅ Políticas de Privacidad y Términos
✅ Integración con WhatsApp y Teléfono
✅ Rendimiento optimizado (Core Web Vitals)
✅ Seguridad headers configurados
✅ Accesibilidad mejorada

## 🛠️ Instalación

1. Clonar el repositorio:
```bash
git clone <repository-url>
cd corpus-sanati
```

2. Instalar dependencias:
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. Configurar variables de entorno:
```bash
cp .env.example .env.local
# Editar .env.local con tus valores
```

4. Ejecutar servidor de desarrollo:
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Estructura del Proyecto

```
corpus-sanati/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página de inicio
│   ├── privacy/
│   ├── terms/
│   └── cookies/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Criteria.tsx
│   ├── Objectives.tsx
│   ├── Coverage.tsx
│   ├── Locations.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── public/                 # Archivos estáticos
├── tailwind.config.ts      # Configuración Tailwind
├── tsconfig.json
├── next.config.js
└── package.json
```

## 🎨 Personalización

### Colores
Editar `tailwind.config.ts` para cambiar la paleta de colores.

### Contenido
Editar los archivos de componentes en `/components` para actualizar texto, imágenes, etc.

### Información de Contacto
Actualizar números de teléfono y emails en:
- `components/Header.tsx`
- `components/Hero.tsx`
- `components/Footer.tsx`
- `components/Locations.tsx`

## 🚀 Despliegue

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Build para producción

```bash
npm run build
npm start
```

## 📊 Optimizaciones

- **Image Optimization**: Next.js maneja automáticamente las imágenes
- **Code Splitting**: Carga automática de código por ruta
- **CSS Purging**: Solo CSS necesario en producción
- **Compression**: Gzip habilitado por defecto
- **Security Headers**: Configurados en next.config.js
- **SEO Meta Tags**: Optimizados en layout.tsx

## 🔒 Seguridad

- Headers de seguridad configurados
- HTTPS recomendado en producción
- Variables sensibles en .env.local
- Rate limiting recomendado en producción

## 📱 Responsividad

Diseño completamente responsivo:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+

## ♿ Accesibilidad

- Semantic HTML
- ARIA labels donde sea necesario
- Focus states visibles
- Colores con suficiente contraste
- Texto legible (16px+)

## 📈 Performance

- Lighthouse Score: 95+
- Core Web Vitals optimizados
- Images optimizadas
- CSS minimizado
- JavaScript comprimido

## 📝 Variables de Entorno

Copia `.env.example` a `.env.local` y configura:

```env
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_SITE_URL=https://corpussanati.com
NEXT_PUBLIC_PHONE=+5493816372613
NEXT_PUBLIC_EMAIL=corpussanati@gmail.com
NEXT_PUBLIC_WHATSAPP=5493816372613
```

## 🤝 Soporte

Para problemas o preguntas:
- Email: corpussanati@gmail.com
- Teléfono: +54 9 3816 37-2613
- WhatsApp: +54 9 3816 37-2613

## 📄 Licencia

Proyecto privado de Corpus Sanati SRL

## 🔄 Versión

**v1.0.0** - Lanzamiento inicial

---

Hecho con ❤️ para Corpus Sanati
