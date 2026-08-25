'use client';

import { useEffect, useState } from 'react';

const LINKS = [
  { label: 'Demat', href: '#demat' },
  { label: 'Loans', href: '#loans' },
  { label: 'Insurance', href: '#insurance' },
  { label: 'How it works', href: '#how-it-works' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-wrap mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-lime text-bg font-display font-bold">
            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-gold animate-blink" aria-hidden />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 15c3-1 4-4 4-7 2 2 3 5 2 8 3-1 6-3 7-7 1 4-1 9-6 11-5 2-9-1-7-5z" fill="#100C09" />
            </svg>
          </span>
          <span className="font-display font-bold text-lg tracking-tight text-cream">
            Stox<span className="text-lime">Cafe</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-medium text-sm text-muted">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-cream transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="text-sm font-medium text-muted hover:text-cream transition-colors">
            Talk to a guide
          </a>
          <a
            href="#order"
            className="rounded-full bg-lime text-bg text-sm font-semibold px-5 py-2.5 hover:brightness-110 transition"
          >
            Start your order
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`h-0.5 w-6 bg-cream transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-cream transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-cream transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bg border-t border-line px-6 py-6 flex flex-col gap-5">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-cream font-display text-xl"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#order"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-lime text-bg text-sm font-semibold px-5 py-3 text-center"
          >
            Start your order
          </a>
        </div>
      )}
    </header>
  );
}
