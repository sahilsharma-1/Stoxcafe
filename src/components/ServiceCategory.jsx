import Reveal from './Reveal';
import { DematIcon, LoansIcon, InsuranceIcon } from './illustrations/ServiceIcons';

const ICONS = { demat: DematIcon, loans: LoansIcon, insurance: InsuranceIcon };

export default function ServiceCategory({ data, reversed = false }) {
  const Icon = ICONS[data.id];

  return (
    <div
      id={data.id}
      className={`grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start scroll-mt-24 ${
        reversed ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      <Reveal>
        {Icon && <Icon className="h-12 w-12" />}
        <span className="block font-mono text-xs uppercase tracking-widest text-gold mt-5">{data.tag}</span>
        <h3 className="font-display font-bold text-3xl sm:text-4xl mt-3 text-ink tracking-tight">
          {data.title}
        </h3>
        <p className="mt-5 text-ink2 leading-relaxed max-w-sm">{data.blurb}</p>
        <a
          href="#get-started"
          className="mt-7 inline-flex rounded-full bg-grad-brand text-white px-6 py-3 text-sm font-semibold shadow-soft hover:shadow-card hover:brightness-105 transition-all"
        >
          {data.cta}
        </a>
      </Reveal>

      <Reveal delay={100}>
        <div className="rounded-2xl border border-line bg-paper shadow-card divide-y divide-line overflow-hidden">
          {data.items.map((item) => (
            <div
              key={item.name}
              className="flex items-start justify-between gap-6 px-6 py-5 hover:bg-mist transition-colors"
            >
              <div>
                <p className="font-display font-semibold text-ink">{item.name}</p>
                <p className="text-sm text-muted mt-1">{item.detail}</p>
              </div>
              <span className="font-mono text-sm font-semibold text-royal whitespace-nowrap pt-1">{item.price}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
