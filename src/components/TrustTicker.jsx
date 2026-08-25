const STATS = [
  '12,400+ demat accounts opened',
  '₹380Cr+ in loans disbursed',
  '9,200+ policies issued',
  '4.7/5 average guide rating',
  '2026 · Delhi, India',
];

export default function TrustTicker() {
  const row = [...STATS, ...STATS];

  return (
    <div className="border-y border-line bg-surface/60 py-3.5 overflow-hidden">
      <div className="flex w-max animate-ticker">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center font-mono text-xs uppercase tracking-widest text-muted px-6 whitespace-nowrap"
          >
            {item}
            <span className="ml-6 text-gold">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
