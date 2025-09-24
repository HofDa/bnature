import { useState } from 'react';
import Logo from '../assets/bNature.jpg';

const links = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#referenzen', label: 'Referenzen' },
  { href: '#about', label: 'Über uns' },
  { href: '#faq', label: 'FAQ' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header header-border">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center">
          <img src={Logo} alt="b*nature Logo" className="h-10 w-auto" />
        </a>
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
          <a href="#kontakt" className="btn-primary">
            Anfragen
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-lg p-2 ring-1 ring-gray-300"
          aria-label="Menü"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200">
          <div className="container py-3 flex flex-col gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="py-2 text-gray-700">
                {l.label}
              </a>
            ))}
            <a href="#kontakt" className="btn-primary">
              Anfragen
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
