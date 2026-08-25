import Reveal from './Reveal';

const QUOTES = [
  {
    quote:
      'My advisor spent forty minutes explaining why F&O wasn\u2019t right for me yet, instead of just signing me up. That\u2019s when I trusted the relationship.',
    name: 'Aarav Malhotra',
    role: 'Demat client, Delhi',
  },
  {
    quote:
      'Got my personal loan approved in two days flat. The rate was lower than what my branch had quoted me directly.',
    name: 'Priya Nair',
    role: 'Personal loan client',
  },
  {
    quote:
      'Renewed my car insurance over a single call. No hold music, no repeated forms \u2014 just handled.',
    name: 'Rohit Sharma',
    role: 'Insurance client',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-mist">
      <div className="max-w-wrap mx-auto px-6">
        <Reveal className="max-w-xl">
          <span className="font-mono text-xs uppercase tracking-widest text-royal font-semibold">Client stories</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight text-ink">
            People who\u2019ve already partnered with us.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {QUOTES.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 100}
              className="rounded-2xl bg-paper border border-line shadow-soft p-7 flex flex-col justify-between"
            >
              <svg width="28" height="22" viewBox="0 0 28 22" fill="none" className="mb-4">
                <path d="M0 22V13.5C0 6 4.5 1 11 0L12.5 3.5C8.5 4.5 6.5 7 6 10.5H11.5V22H0Z" fill="#EAF1FF" />
                <path d="M15.5 22V13.5C15.5 6 20 1 26.5 0L28 3.5C24 4.5 22 7 21.5 10.5H27V22H15.5Z" fill="#EAF1FF" />
              </svg>
              <p className="font-display text-lg leading-snug text-ink">{t.quote}</p>
              <div className="mt-8 pt-5 border-t border-line">
                <p className="font-semibold text-ink text-sm">{t.name}</p>
                <p className="text-xs text-muted mt-0.5 font-mono uppercase tracking-wide">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
