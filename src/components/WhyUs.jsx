import Reveal from './Reveal';

const FEATURES = [
  {
    title: 'A human on the other end',
    desc: 'Every order gets a named guide you can call back — not a ticket number.',
  },
  {
    title: 'Prices, upfront',
    desc: 'Fees and rates shown before you commit to anything. No fine print surprises.',
  },
  {
    title: 'Compared, not pushed',
    desc: 'We work across multiple lenders and insurers, so the recommendation isn\u2019t one-sided.',
  },
  {
    title: 'One dashboard',
    desc: 'Your demat, loans and policies, tracked in the same place.',
  },
  {
    title: 'Fast where it counts',
    desc: 'Same-day account activation, 48-hour personal loan turnaround.',
  },
  {
    title: 'Talk however you like',
    desc: 'WhatsApp, call, or drop by — support built for how you already communicate.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-wrap mx-auto px-6">
        <Reveal className="max-w-xl">
          <span className="font-mono text-xs uppercase tracking-widest text-muted">Why StoxCafe</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight text-cream">
            Finance, minus the cold shoulder.
          </h2>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line rounded-2xl overflow-hidden">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 100} className="bg-bg p-8 hover:bg-surface/60 transition-colors">
              <div className="h-9 w-9 rounded-full border border-line flex items-center justify-center font-mono text-xs text-lime">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-display font-bold text-lg mt-5 text-cream">{f.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{f.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
