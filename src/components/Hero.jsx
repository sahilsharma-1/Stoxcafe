import AdvisorPortrait from './illustrations/AdvisorPortrait';
import Skyline from './illustrations/Skyline';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 bg-grad-mesh">
      {/* subtle skyline watermark along the base of the hero */}
      <div className="absolute inset-x-0 bottom-0 h-40 opacity-[0.06] pointer-events-none">
        <Skyline className="w-full h-full" />
      </div>

      <div className="max-w-wrap mx-auto px-6 relative">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-navy shadow-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-blink" />
                Trusted across Delhi NCR &amp; growing
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-display font-bold text-[2.75rem] leading-[1.08] sm:text-6xl sm:leading-[1.06] mt-6 tracking-tight text-ink">
                One partner for every
                <br />
                <span className="text-grad-brand">major financial decision.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 text-lg text-ink2 max-w-lg leading-relaxed">
                Demat accounts backed by real consultancy, loans structured across our
                lending partners, and insurance chosen for your life &mdash; delivered
                with the discipline of an institution and the attention of a dedicated
                advisor.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#get-started"
                  className="rounded-full bg-grad-brand text-white font-semibold px-7 py-3.5 shadow-card hover:brightness-105 transition-all"
                >
                  Get started
                </a>
                <a
                  href="#how-it-works"
                  className="rounded-full border border-line2 bg-paper px-7 py-3.5 text-ink font-medium hover:border-navy/30 hover:shadow-soft transition-all"
                >
                  See how it works
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg border-t border-line pt-8">
                <div>
                  <p className="font-display font-bold text-2xl sm:text-3xl text-ink">12,400+</p>
                  <p className="mt-1 text-xs text-muted uppercase tracking-wide font-mono">Accounts opened</p>
                </div>
                <div>
                  <p className="font-display font-bold text-2xl sm:text-3xl text-ink">&#8377;380Cr+</p>
                  <p className="mt-1 text-xs text-muted uppercase tracking-wide font-mono">Loans disbursed</p>
                </div>
                <div>
                  <p className="font-display font-bold text-2xl sm:text-3xl text-ink">9,200+</p>
                  <p className="mt-1 text-xs text-muted uppercase tracking-wide font-mono">Policies issued</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="justify-self-center lg:justify-self-end w-full max-w-md">
            <div className="relative">
              <div className="absolute -inset-8 rounded-[2rem] bg-royal/10 blur-3xl" aria-hidden />
              <div className="relative rounded-[1.75rem] overflow-hidden shadow-lift ring-1 ring-black/[0.03] animate-float">
                <AdvisorPortrait className="w-full h-auto" />
              </div>
              {/* floating trust badge */}
              <div className="absolute -left-6 bottom-8 rounded-2xl bg-paper shadow-card border border-line px-5 py-4 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-grad-gold flex items-center justify-center text-white font-display font-bold text-sm">
                    A+
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-ink">IRDAI &amp; RBI</p>
                    <p className="text-xs text-muted">Regulated partners only</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
