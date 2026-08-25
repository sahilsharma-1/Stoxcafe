const ITEMS = [
  { label: 'Demat account opening', price: 'FREE' },
  { label: '1:1 onboarding call', price: 'INCLUDED' },
  { label: 'Personal loan, compared across 6 lenders', price: '10.4%*' },
  { label: 'Term insurance, 1Cr cover', price: '₹590/mo*' },
];

export default function OrderReceipt({ className = '' }) {
  return (
    <div className={`w-[300px] sm:w-[330px] ${className}`}>
      <div className="receipt-edge-top h-3 bg-cream" aria-hidden />
      <div className="bg-cream text-bg px-6 pt-5 pb-6 shadow-2xl shadow-black/50">
        <div className="text-center font-display font-bold tracking-widest text-sm uppercase">
          StoxCafe
        </div>
        <p className="text-center text-[11px] font-mono text-bg/60 mt-1">
          Order No. 2026-0842 · Delhi
        </p>

        <div className="dashed-rule my-4 opacity-30" />

        <ul className="font-mono text-[12px] space-y-2.5">
          {ITEMS.map((item) => (
            <li key={item.label} className="flex justify-between gap-3">
              <span className="text-bg/80">{item.label}</span>
              <span className="font-semibold whitespace-nowrap">{item.price}</span>
            </li>
          ))}
        </ul>

        <div className="dashed-rule my-4 opacity-30" />

        <div className="flex justify-between font-mono text-sm font-bold">
          <span>TOTAL PEACE OF MIND</span>
          <span>100%</span>
        </div>

        <p className="text-center text-[10px] font-mono text-bg/50 mt-4">
          *indicative — advisor confirms final terms
        </p>
        <div className="text-center mt-3 text-[11px] font-mono tracking-[0.3em] text-bg/40">
          ★ THANK YOU ★
        </div>
      </div>
      <div className="receipt-edge-bottom h-3 bg-cream" aria-hidden />
    </div>
  );
}
