'use client';

const COLUMNS = [
  {
    title: 'Menu',
    links: [
      { label: 'Demat & trading', href: '#demat' },
      { label: 'Loans', href: '#loans' },
      { label: 'Insurance', href: '#insurance' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Talk to a guide', href: '#order' },
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
    <footer id="contact" className="border-t border-line pt-16 pb-10">
      <div className="max-w-wrap mx-auto px-6">
        <div className="grid md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12">
          <div>
            <span className="font-display font-bold text-lg text-cream">
              Stox<span className="text-lime">Cafe</span>
            </span>
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-xs">
              Financial services for people who&rsquo;d rather understand what they&rsquo;re
              signing than just sign it. Est. 2026, Delhi.
            </p>
            <form className="mt-6 flex max-w-xs" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="you@email.com"
                aria-label="Email address"
                className="flex-1 min-w-0 rounded-l-full bg-surface border border-line border-r-0 px-4 py-2.5 text-sm text-cream placeholder:text-muted/60 outline-none focus:border-lime transition-colors"
              />
              <button
                type="submit"
                className="rounded-r-full bg-lime text-bg text-sm font-semibold px-4 hover:brightness-110 transition"
              >
                Join
              </button>
            </form>
            <p className="mt-2 text-xs text-muted">Market notes, with your morning coffee.</p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-cream/90 hover:text-lime transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-6 border-t border-line flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted">
          <p>© 2026 StoxCafe Financial Services Pvt. Ltd. All rights reserved.</p>
          <p>
            Investments are subject to market risk. Loans &amp; insurance are provided by
            our licensed partners; StoxCafe acts as a facilitator.
          </p>
        </div>
      </div>
    </footer>
  );
}
