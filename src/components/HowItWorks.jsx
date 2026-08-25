import Reveal from './Reveal';

const STEPS = [
  {
    n: '01',
    title: 'Consult',
    desc: 'Tell us what you need \u2014 a demat account, a loan, cover for the family. A dedicated advisor is assigned within minutes.',
  },
  {
    n: '02',
    title: 'Structure',
    desc: 'Your advisor compares terms across our partner network and structures an offer built around your specific situation.',
  },
  {
    n: '03',
    title: 'Activate',
    desc: 'Review, e-sign, and you\u2019re live. Track every account, loan and policy from a single dashboard from day one.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-mist scroll-mt-24">
      <div className="max-w-wrap mx-auto px-6">
        <Reveal className="max-w-xl">
          <span className="font-mono text-xs uppercase tracking-widest text-royal font-semibold">How it works</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight text-ink">
            A structured process, start to finish.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 120}>
              <div className="relative rounded-2xl bg-paper border border-line shadow-soft p-8 h-full">
                <span className="font-mono text-sm font-semibold text-white bg-grad-brand rounded-full h-9 w-9 inline-flex items-center justify-center">
                  {step.n}
                </span>
                <h3 className="font-display font-bold text-2xl mt-5 text-ink">{step.title}</h3>
                <p className="mt-3 text-ink2 leading-relaxed">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
