import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#06b6d4',
        secondary: '#0891b2',
        accent: '#10b981',
        'dark-bg': '#0a0e27',
        'dark-card': '#1e293b',
        'text-light': '#94a3b8',
        'text-lighter': '#cbd5e1',
      },
      fontFamily: {
        sans: ['var(--font-segoe)', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        bounce: 'bounce 2s infinite',
        fadeInUp: 'fadeInUp 0.8s ease',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(30px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(6, 182, 212, 0.3)',
        'glow-lg': '0 0 40px rgba(6, 182, 212, 0.4)',
      },
    },
  },
  plugins: [],
};

export default config;
