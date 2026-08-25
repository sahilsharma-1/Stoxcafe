'use client';

import { useState } from 'react';
import Reveal from './Reveal';

const PRODUCTS = ['Demat account & consultancy', 'Home loan', 'Personal loan', 'Term insurance', 'Health insurance', 'Something else'];

export default function GetStarted() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="get-started" className="py-24 sm:py-32 bg-paper scroll-mt-24">
      <div className="max-w-wrap mx-auto px-6">
        <div className="relative rounded-[2rem] overflow-hidden bg-grad-brand p-8 sm:p-14 grid lg:grid-cols-2 gap-12 items-center shadow-lift">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" aria-hidden />
          <div className="absolute -left-10 -bottom-16 h-56 w-56 rounded-full bg-gold/20 blur-3xl" aria-hidden />

          <Reveal className="relative">
            <span className="font-mono text-xs uppercase tracking-widest text-gold2 font-semibold">Get started</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight text-white">
              Ready when you are.
            </h2>
            <p className="mt-4 text-white/80 leading-relaxed max-w-sm">
              Share your details and what you&rsquo;re after &mdash; a dedicated advisor
              calls back the same business day.
            </p>
          </Reveal>

          <Reveal delay={100} className="relative">
            {submitted ? (
              <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur p-8 text-center">
                <p className="font-display text-xl text-white">Request received.</p>
                <p className="mt-2 text-sm text-white/75">
                  An advisor will call you within one business day. Keep an eye on WhatsApp too.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 bg-white rounded-2xl p-6 sm:p-7 shadow-card">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-xs font-mono uppercase tracking-wide text-muted">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Full name"
                      className="mt-2 w-full rounded-lg bg-mist border border-line px-4 py-3 text-ink placeholder:text-muted focus:border-royal outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-xs font-mono uppercase tracking-wide text-muted">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="98765 43210"
                      className="mt-2 w-full rounded-lg bg-mist border border-line px-4 py-3 text-ink placeholder:text-muted focus:border-royal outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="product" className="text-xs font-mono uppercase tracking-wide text-muted">
                    What are you after?
                  </label>
                  <select
                    id="product"
                    defaultValue={PRODUCTS[0]}
                    className="mt-2 w-full rounded-lg bg-mist border border-line px-4 py-3 text-ink outline-none focus:border-royal transition-colors"
                  >
                    {PRODUCTS.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-grad-brand text-white font-semibold py-3.5 shadow-soft hover:brightness-105 transition-all"
                >
                  Request a callback
                </button>
                <p className="text-xs text-muted text-center">
                  By submitting, you agree to be contacted about your request. No spam, ever.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
