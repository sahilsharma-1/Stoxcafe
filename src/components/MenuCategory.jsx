import Reveal from './Reveal';

export default function MenuCategory({ data, reversed = false }) {
  return (
    <div
      id={data.id}
      className={`grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start scroll-mt-24 ${
        reversed ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-widest text-gold">{data.tag}</span>
        <h3 className="font-display font-bold text-4xl sm:text-5xl mt-3 text-cream tracking-tight">
          {data.title}
        </h3>
        <p className="mt-5 text-muted leading-relaxed max-w-sm">{data.blurb}</p>
        <a
          href="#order"
          className="mt-7 inline-flex rounded-full border border-line px-6 py-3 text-sm font-semibold text-cream hover:bg-lime hover:text-bg hover:border-lime transition-colors"
        >
          {data.cta}
        </a>
      </Reveal>

      <Reveal delay={100}>
        <div className="rounded-2xl border border-line bg-surface/60 divide-y divide-line overflow-hidden">
          {data.items.map((item) => (
            <div
              key={item.name}
              className="flex items-start justify-between gap-6 px-6 py-5 hover:bg-surface2/60 transition-colors"
            >
              <div>
                <p className="font-display font-medium text-cream">{item.name}</p>
                <p className="text-sm text-muted mt-1">{item.detail}</p>
              </div>
              <span className="font-mono text-sm text-lime whitespace-nowrap pt-1">{item.price}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
