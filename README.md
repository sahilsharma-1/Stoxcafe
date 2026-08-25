# StoxCafe

A modern, responsive marketing site for StoxCafe — a fintech "menu" of demat
accounts (with guidance), loans (home, personal, other), and insurance (term,
car, other). Built with Next.js 14 (App Router), React, and Tailwind CSS.

## Design concept

The brand plays on "StoxCafe" as a café that serves financial products: the
hero features a signature **order receipt** visual, the services section is
framed as **"the menu"**, and the process section follows an **Order → Brew →
Serve** sequence. Dark espresso background, a lime accent for growth/stocks,
and warm gold for the "coffee" warmth, paired with a monospace face for
prices and receipt-style details.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/
    layout.js       Root layout, fonts, metadata
    page.js          Assembles all sections
    globals.css      Tokens, base styles, receipt edge/dashed-rule effects
  components/
    Navbar.jsx       Sticky nav + mobile menu
    Hero.jsx         Headline + signature receipt visual
    OrderReceipt.jsx Signature "order receipt" component
    TrustTicker.jsx  Scrolling stats marquee
    ServicesMenu.jsx Wraps the 3 product categories
    MenuCategory.jsx Reusable category card (used for Demat/Loans/Insurance)
    HowItWorks.jsx   Order → Brew → Serve steps
    WhyUs.jsx        Feature grid
    Testimonials.jsx Customer quotes
    OrderCTA.jsx     Lead-capture form
    Footer.jsx       Footer + newsletter signup
    Reveal.jsx        Scroll-reveal animation wrapper (IntersectionObserver)
  lib/
    menuData.js      Content for Demat / Loans / Insurance menu items
```

## Customizing

- **Copy & pricing**: edit `src/lib/menuData.js` for the three product
  categories, and the arrays at the top of `HowItWorks.jsx`, `WhyUs.jsx`,
  and `Testimonials.jsx`.
- **Colors**: all brand colors are tokens in `tailwind.config.js`
  (`bg`, `surface`, `lime`, `gold`, `cream`, `muted`, `line`).
- **Fonts**: Space Grotesk (display), Inter (body), JetBrains Mono
  (prices/data) are loaded via `next/font/google` in `src/app/layout.js`.
- **Lead form**: `OrderCTA.jsx` currently just shows a success state on
  submit — wire the `handleSubmit` function up to your CRM, email service,
  or API route.

## Notes

- Fully responsive from mobile up; the mobile nav collapses into a slide-down
  menu below the `md` breakpoint.
- Respects `prefers-reduced-motion` (see `globals.css`).
- Regulatory copy in the footer is placeholder — replace with your actual
  entity name, licenses, and disclosures before going live.
# Stoxcafe
