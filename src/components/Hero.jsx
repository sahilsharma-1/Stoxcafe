import OrderReceipt from './OrderReceipt';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="max-w-wrap mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Now serving Delhi &amp; beyond
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display font-bold text-[2.6rem] leading-[1.05] sm:text-6xl sm:leading-[1.03] mt-6 tracking-tight text-cream">
              Your financial
              <br />
              order, <span className="text-lime">brewed</span> fresh.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-lg text-muted max-w-lg leading-relaxed">
              Demat accounts with a human who actually explains things, loans that
              don&rsquo;t take a month of follow-ups, and insurance you&rsquo;ll read
              twice because it&rsquo;s that clear. One counter, three orders.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#order"
                className="rounded-full bg-lime text-bg font-semibold px-7 py-3.5 hover:brightness-110 transition"
              >
                Start your order
              </a>
              <a
                href="#how-it-works"
                className="rounded-full border border-line px-7 py-3.5 text-cream font-medium hover:border-cream/40 transition"
              >
                See how it works
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs text-muted uppercase tracking-wider">
              <span>Partnered with licensed brokers</span>
              <span className="h-1 w-1 rounded-full bg-line hidden sm:block" />
              <span>RBI-regulated lending partners</span>
              <span className="h-1 w-1 rounded-full bg-line hidden sm:block" />
              <span>IRDAI-registered insurers</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="justify-self-center lg:justify-self-end">
          <div className="relative">
            <div
              className="absolute -inset-10 rounded-full bg-lime/10 blur-3xl"
              aria-hidden
            />
            <div className="relative -rotate-3 hover:rotate-0 transition-transform duration-500">
              <OrderReceipt />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
