'use client';

import { useEffect, useRef, useState } from 'react';

const SERVICES = [
  {
    label: 'Demat Accounts & Consultancy',
    href: '#demat',
    desc: 'Open an account and get ongoing investment guidance',
  },
  {
    label: 'Loans',
    href: '#loans',
    desc: 'Home, personal & business loans, compared across lenders',
  },
  {
    label: 'Insurance',
    href: '#insurance',
    desc: 'Term, health, motor & travel cover for your life',
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function openServices() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }

  function scheduleCloseServices() {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-paper/95 backdrop-blur shadow-soft border-b border-line' : 'bg-paper/70 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <nav className="max-w-wrap mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-grad-brand text-white font-display font-bold shadow-soft">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 18L10 11L14 15L20 6" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 6H20V12" stroke="#D8B15E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="font-display font-bold text-lg tracking-tight text-ink">
           Stox<span className="text-grad-brand">Cafe</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-medium text-sm text-ink2">
          <li
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={scheduleCloseServices}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              className="flex items-center gap-1.5 hover:text-ink transition-colors py-2"
            >
              Our Services
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
              >
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {servicesOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[340px]"
                onMouseEnter={openServices}
                onMouseLeave={scheduleCloseServices}
              >
                <div className="rounded-2xl border border-line bg-paper shadow-card p-2.5 ring-1 ring-black/[0.02]">
                  {SERVICES.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      onClick={() => setServicesOpen(false)}
                      className="flex flex-col gap-0.5 rounded-xl px-4 py-3 hover:bg-mist transition-colors group/item"
                    >
                      <span className="font-display font-semibold text-sm text-ink group-hover/item:text-royal transition-colors">
                        {s.label}
                      </span>
                      <span className="text-xs text-muted">{s.desc}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </li>
          <li>
            <a href="#how-it-works" className="hover:text-ink transition-colors">
              How it works
            </a>
          </li>
          <li>
            <a href="#why-us" className="hover:text-ink transition-colors">
              Why Vantage
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-ink transition-colors">
              Contact
            </a>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="text-sm font-medium text-ink2 hover:text-ink transition-colors">
            Talk to an advisor
          </a>
          <a
            href="#get-started"
            className="rounded-full bg-grad-brand text-white text-sm font-semibold px-5 py-2.5 shadow-soft hover:shadow-card hover:brightness-105 transition-all"
          >
            Get started
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-paper border-t border-line px-6 py-6 flex flex-col gap-1 shadow-card">
          <button
            type="button"
            onClick={() => setMobileServicesOpen((v) => !v)}
            aria-expanded={mobileServicesOpen}
            className="flex items-center justify-between text-ink font-display text-lg py-2.5"
          >
            Our Services
            <svg
              width="14"
              height="14"
              viewBox="0 0 12 12"
              fill="none"
              className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
            >
              <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {mobileServicesOpen && (
            <div className="pl-3 flex flex-col gap-3 pb-3">
              {SERVICES.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className="text-ink2 text-sm font-medium"
                >
                  {s.label}
                </a>
              ))}
            </div>
          )}
          <a href="#how-it-works" onClick={() => setOpen(false)} className="text-ink font-display text-lg py-2.5">
            How it works
          </a>
          <a href="#why-us" onClick={() => setOpen(false)} className="text-ink font-display text-lg py-2.5">
            Why Vantage
          </a>
          <a href="#contact" onClick={() => setOpen(false)} className="text-ink font-display text-lg py-2.5">
            Contact
          </a>
          <a
            href="#get-started"
            onClick={() => setOpen(false)}
            className="mt-3 rounded-full bg-grad-brand text-white text-sm font-semibold px-5 py-3.5 text-center shadow-soft"
          >
            Get started
          </a>
        </div>
      )}
    </header>
  );
}
