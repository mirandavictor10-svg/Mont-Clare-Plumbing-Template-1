import { useState, useEffect } from 'react';
import Logo from './Logo';
import { company } from '@/config/company.config';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -60% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      id="top"
      className={`fixed top-0 left-0 right-0 z-50 bg-primary transition-shadow ${scrolled ? 'shadow-lg' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Logo light />

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-heading font-semibold uppercase tracking-wide transition-colors ${
                activeSection === l.href.slice(1)
                  ? 'text-orange'
                  : 'text-primary-foreground/80 hover:text-orange'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href={`tel:${company.phoneRaw}`} className="text-orange font-heading font-bold text-lg">
            {company.phone}
          </a>
          <a
            href={`tel:${company.phoneRaw}`}
            className="bg-orange text-accent-foreground font-heading font-bold text-sm uppercase px-5 py-2.5 rounded-md hover:brightness-110 transition"
          >
            Call Now
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-primary-foreground p-2"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-primary border-t border-primary-foreground/10 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-primary-foreground font-heading font-semibold uppercase text-sm hover:text-orange"
            >
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a
              href={`tel:${company.phoneRaw}`}
              className="flex items-center justify-center gap-2 bg-orange text-accent-foreground text-center font-heading font-bold uppercase py-3 rounded-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call {company.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
