import Reveal from './Reveal';

const FEATURES = [
  {
    title: 'A named advisor, always',
    desc: 'Every client is assigned a dedicated advisor you can call back \u2014 not a rotating support queue.',
  },
  {
    title: 'Pricing, upfront',
    desc: 'Fees and rates shown before you commit to anything. No fine print, no surprises at signing.',
  },
  {
    title: 'Compared, not pushed',
    desc: 'We work across multiple lenders and insurers, so every recommendation stays genuinely independent.',
  },
  {
    title: 'One dashboard',
    desc: 'Your demat account, loans and policies tracked together, updated in real time.',
  },
  {
    title: 'Fast where it counts',
    desc: 'Same-day account activation and 48-hour personal loan turnaround, backed by our partner network.',
  },
  {
    title: 'Regulated at every step',
    desc: 'SEBI-registered broking, RBI-regulated lenders, and IRDAI-registered insurers only.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 sm:py-32 bg-paper scroll-mt-24">
      <div className="max-w-wrap mx-auto px-6">
        <Reveal className="max-w-xl">
          <span className="font-mono text-xs uppercase tracking-widest text-royal font-semibold">Why Vantage Fincorp</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight text-ink">
            Institutional discipline. Personal attention.
          </h2>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <Reveal
              key={f.title}
              delay={(i % 3) * 100}
              className="rounded-2xl border border-line bg-paper p-8 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all"
            >
              <div className="h-10 w-10 rounded-lg bg-sky flex items-center justify-center font-mono text-xs font-semibold text-royal">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-display font-bold text-lg mt-5 text-ink">{f.title}</h3>
              <p className="mt-2 text-sm text-ink2 leading-relaxed">{f.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
