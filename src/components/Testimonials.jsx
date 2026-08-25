import Reveal from './Reveal';

const QUOTES = [
  {
    quote:
      'My guide spent forty minutes explaining why F&O wasn\u2019t for me yet, instead of just letting me sign up. That\u2019s when I trusted them.',
    name: 'Aarav Malhotra',
    role: 'Demat customer, Delhi',
  },
  {
    quote:
      'Got my personal loan approved in two days flat. The rate was actually lower than what my bank branch quoted me.',
    name: 'Priya Nair',
    role: 'Personal loan customer',
  },
  {
    quote:
      'Renewed my car insurance in one WhatsApp thread. No call centre hold music, for once.',
    name: 'Rohit Sharma',
    role: 'Insurance customer',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-wrap mx-auto px-6">
        <Reveal className="max-w-xl">
          <span className="font-mono text-xs uppercase tracking-widest text-muted">From the counter</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight text-cream">
            People who&rsquo;ve already ordered.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {QUOTES.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 100}
              className="rounded-2xl border border-line bg-surface/60 p-7 flex flex-col justify-between"
            >
              <p className="font-display text-lg leading-snug text-cream">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-8 pt-5 border-t border-line/70">
                <p className="font-medium text-cream text-sm">{t.name}</p>
                <p className="text-xs text-muted mt-0.5 font-mono uppercase tracking-wide">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
