import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '#home' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold text-indigo-600 tracking-tight">
          MiPortafolio
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition-colors"
          >
            Contáctame
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block mt-2 bg-indigo-600 text-white px-4 py-2 rounded-xl text-center hover:bg-indigo-700"
          >
            Contáctame
          </a>
        </div>
      )}
    </nav>
  );
}
