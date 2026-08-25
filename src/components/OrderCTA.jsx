'use client';

import { useState } from 'react';
import Reveal from './Reveal';

const PRODUCTS = ['Demat account', 'Home loan', 'Personal loan', 'Term insurance', 'Car insurance', 'Something else'];

export default function OrderCTA() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="order" className="py-24 sm:py-32 border-t border-line scroll-mt-24">
      <div className="max-w-wrap mx-auto px-6">
        <div className="rounded-3xl border border-line bg-surface/60 p-8 sm:p-14 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-gold">Place your order</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight text-cream">
              Ready when you are.
            </h2>
            <p className="mt-4 text-muted leading-relaxed max-w-sm">
              Leave your number and what you&rsquo;re after — a guide calls back the same day,
              usually sooner.
            </p>
          </Reveal>

          <Reveal delay={100}>
            {submitted ? (
              <div className="rounded-2xl border border-lime/30 bg-lime/10 p-8 text-center">
                <p className="font-display text-xl text-cream">Order placed.</p>
                <p className="mt-2 text-sm text-muted">
                  A guide will call you within one business day. Keep an eye on WhatsApp too.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
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
                      className="mt-2 w-full rounded-lg bg-bg border border-line px-4 py-3 text-cream placeholder:text-muted/60 focus:border-lime outline-none transition-colors"
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
                      className="mt-2 w-full rounded-lg bg-bg border border-line px-4 py-3 text-cream placeholder:text-muted/60 focus:border-lime outline-none transition-colors"
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
                    className="mt-2 w-full rounded-lg bg-bg border border-line px-4 py-3 text-cream outline-none focus:border-lime transition-colors"
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
                  className="w-full rounded-full bg-lime text-bg font-semibold py-3.5 hover:brightness-110 transition"
                >
                  Place order
                </button>
                <p className="text-xs text-muted text-center">
                  By ordering, you agree to be contacted about your request. No spam, promise.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
