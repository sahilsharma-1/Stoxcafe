import Reveal from './Reveal';

const STEPS = [
  {
    n: '01',
    title: 'Order',
    desc: 'Tell us what you need — a demat account, a loan, cover for the car. Takes about two minutes.',
  },
  {
    n: '02',
    title: 'Brew',
    desc: 'A guide compares options across our partners and puts together terms that actually fit you.',
  },
  {
    n: '03',
    title: 'Serve',
    desc: 'Review, e-sign, and you\u2019re active. Track everything from one dashboard from day one.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 border-t border-line scroll-mt-24">
      <div className="max-w-wrap mx-auto px-6">
        <Reveal className="max-w-xl">
          <span className="font-mono text-xs uppercase tracking-widest text-muted">How it works</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight text-cream">
            Ordered like a coffee. Handled like a contract.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 120}>
              <div className="relative pl-2">
                <span className="font-mono text-6xl font-bold text-transparent [-webkit-text-stroke:1.5px_#33281E]">
                  {step.n}
                </span>
                <h3 className="font-display font-bold text-2xl mt-3 text-cream">{step.title}</h3>
                <p className="mt-3 text-muted leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
