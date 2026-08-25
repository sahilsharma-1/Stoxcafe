const BADGES = [
  { label: 'RBI-regulated lending partners' },
  { label: 'IRDAI-registered insurers' },
  { label: 'SEBI-registered broking partners' },
  { label: 'ISO 27001 data security' },
  { label: '4.7/5 average advisor rating' },
];

export default function TrustBar() {
  return (
    <div className="border-y border-line bg-mist py-4">
      <div className="max-w-wrap mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {BADGES.map((b) => (
            <span
              key={b.label}
              className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink2"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="shrink-0">
                <path
                  d="M12 2L20 6V11C20 16 16.5 20.5 12 22C7.5 20.5 4 16 4 11V6L12 2Z"
                  fill="#EAF1FF"
                  stroke="#1B4FD1"
                  strokeWidth="1.4"
                />
                <path d="M8.5 12.2L10.8 14.5L15.5 9.5" stroke="#1B4FD1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {b.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
