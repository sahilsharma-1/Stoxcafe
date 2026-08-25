'use client';

const COLUMNS = [
  {
    title: 'Our Services',
    links: [
      { label: 'Demat Accounts & Consultancy', href: '#demat' },
      { label: 'Loans', href: '#loans' },
      { label: 'Insurance', href: '#insurance' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Why Stox', href: '#why-us' },
      { label: 'Talk to an advisor', href: '#get-started' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of service', href: '#' },
      { label: 'Privacy policy', href: '#' },
      { label: 'Grievance redressal', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-ink pt-16 pb-10">
      <div className="max-w-wrap mx-auto px-6">
        <div className="grid md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-grad-gold text-white font-display font-bold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M4 18L10 11L14 15L20 6" stroke="#0A1F44" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="font-display font-bold text-lg text-white">
                Stox <span className="text-gold2">Cafe</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              A full-service financial partner for demat, lending and insurance &mdash;
              built on regulated partners and dedicated advisory. Est. 2026, Delhi.
            </p>
            <form className="mt-6 flex max-w-xs" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="you@email.com"
                aria-label="Email address"
                className="flex-1 min-w-0 rounded-l-full bg-white/10 border border-white/15 border-r-0 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-gold2 transition-colors"
              />
              <button
                type="submit"
                className="rounded-r-full bg-grad-gold text-ink text-sm font-semibold px-4 hover:brightness-105 transition"
              >
                Join
              </button>
            </form>
            <p className="mt-2 text-xs text-white/40">Market notes, delivered weekly.</p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-xs uppercase tracking-widest text-white/40">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-white/80 hover:text-gold2 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/40">
          <p>&copy; 2026 Stox Cafe Financial Services Pvt. Ltd. All rights reserved.</p>
          <p>
            Investments are subject to market risk. Loans &amp; insurance are provided by
            our licensed partners; Vantage Cafe acts as a facilitator.
          </p>
        </div>
      </div>
    </footer>
  );
}
