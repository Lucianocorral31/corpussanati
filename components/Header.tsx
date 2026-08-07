'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-xl bg-dark-bg/80 border-b border-cyan-500/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold gradient-text">
          Corpus Sanati
        </Link>

        <div className="flex gap-3 items-center">
          <a
            href="https://wa.me/5493816372613"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-glow text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            WhatsApp
          </a>
          <a
            href="tel:+5493816372613"
            className="px-4 py-2 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold rounded-lg transition-all duration-300"
          >
            Llamar
          </a>
        </div>
      </nav>
    </header>
  );
}
