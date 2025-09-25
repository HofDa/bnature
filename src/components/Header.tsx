// src/components/Header.tsx
import { useState } from 'react';
import Logo from '../assets/bNature.jpg';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const links = [
    { href: '#services', label: t('nav.services') },
    { href: '#about', label: t('nav.about') },
    { href: '#faq', label: t('nav.faq') },
  ];

  const changeLanguage = (lng: 'de' | 'it') => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header header-border">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center">
          <img src={Logo} alt={t('alt.logo')} className="h-10 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-700 hover:text-gray-900"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary">
            {t('hero.ctaPrimary')}
          </a>

          {/* Language Switcher */}
          <div className="flex gap-2 ml-4">
            <button
              onClick={() => changeLanguage('de')}
              className={`px-2 py-1 text-sm rounded ${
                i18n.language === 'de'
                  ? 'bg-leaf-100 text-leaf-800'
                  : 'hover:underline'
              }`}
            >
              DE
            </button>
            <button
              onClick={() => changeLanguage('it')}
              className={`px-2 py-1 text-sm rounded ${
                i18n.language === 'it'
                  ? 'bg-leaf-100 text-leaf-800'
                  : 'hover:underline'
              }`}
            >
              IT
            </button>
          </div>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-lg p-2 ring-1 ring-gray-300"
          aria-label="Menü"
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden border-t border-gray-200">
          <div className="container py-3 flex flex-col gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="py-2 text-gray-700">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary">
              {t('hero.ctaPrimary')}
            </a>
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => changeLanguage('de')}
                className={`px-2 py-1 text-sm rounded ${
                  i18n.language === 'de'
                    ? 'bg-leaf-100 text-leaf-800'
                    : 'hover:underline'
                }`}
              >
                DE
              </button>
              <button
                onClick={() => changeLanguage('it')}
                className={`px-2 py-1 text-sm rounded ${
                  i18n.language === 'it'
                    ? 'bg-leaf-100 text-leaf-800'
                    : 'hover:underline'
                }`}
              >
                IT
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
