import Reveal from './Reveal';
import Skyline from './illustrations/Skyline';

const POINTS = [
  {
    stat: '8 yrs',
    label: 'Operating history',
    desc: 'Serving individual and family clients across Delhi NCR since 2018.',
  },
  {
    stat: '40+',
    label: 'Partner institutions',
    desc: 'Banks, NBFCs, insurers and broking houses in our vetted network.',
  },
  {
    stat: '99.2%',
    label: 'On-time disbursal rate',
    desc: 'Measured across every loan facilitated in the last financial year.',
  },
];

export default function Credibility() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
      <div className="absolute inset-x-0 bottom-0 h-32 opacity-20 pointer-events-none">
        <Skyline className="w-full h-full" />
      </div>
      <div className="absolute inset-0 bg-grad-mesh opacity-40 pointer-events-none" />

      <div className="max-w-wrap mx-auto px-6 relative">
        <Reveal className="max-w-xl">
          <span className="font-mono text-xs uppercase tracking-widest text-gold2 font-semibold">
            Built on scale
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight text-white">
            The infrastructure of an institution.
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-3 gap-8">
          {POINTS.map((p, i) => (
            <Reveal key={p.label} delay={i * 120} className="border-l-2 border-gold2/40 pl-6">
              <p className="font-display font-bold text-4xl text-white">{p.stat}</p>
              <p className="mt-2 font-display font-semibold text-white/90">{p.label}</p>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
