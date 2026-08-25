/**
 * Abstract, dignified representation of an advisor at work —
 * built as layered geometric SVG rather than a photograph, so it
 * renders crisply at any size and matches the brand palette exactly.
 */
export default function AdvisorPortrait({ className = '' }) {
  return (
    <svg
      viewBox="0 0 420 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="advBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EAF1FF" />
          <stop offset="100%" stopColor="#F5F7FB" />
        </linearGradient>
        <linearGradient id="advSuit" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#123A7A" />
          <stop offset="100%" stopColor="#0A1F44" />
        </linearGradient>
        <linearGradient id="advAccent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#B98A34" />
          <stop offset="100%" stopColor="#D8B15E" />
        </linearGradient>
      </defs>

      <rect width="420" height="480" rx="28" fill="url(#advBg)" />

      {/* window / skyline behind */}
      <g opacity="0.5">
        <rect x="40" y="40" width="340" height="150" rx="10" fill="#FFFFFF" fillOpacity="0.55" />
        <g fill="#0E2A5E" fillOpacity="0.28">
          <rect x="60" y="120" width="20" height="60" />
          <rect x="90" y="95" width="16" height="85" />
          <rect x="116" y="140" width="24" height="40" />
          <rect x="150" y="70" width="18" height="110" />
          <rect x="178" y="110" width="14" height="70" />
          <rect x="202" y="90" width="22" height="90" />
          <rect x="234" y="130" width="16" height="50" />
          <rect x="260" y="60" width="20" height="120" />
          <rect x="290" y="100" width="16" height="80" />
          <rect x="316" y="140" width="24" height="40" />
        </g>
      </g>

      {/* seated figure — shoulders + head, geometric & professional */}
      <g>
        {/* shoulders / blazer */}
        <path
          d="M120 480 C120 380 160 330 210 330 C260 330 300 380 300 480 Z"
          fill="url(#advSuit)"
        />
        {/* collar */}
        <path d="M190 340 L210 375 L230 340 Z" fill="#F5F7FB" />
        {/* tie / accent */}
        <path d="M204 345 L210 370 L216 345 L210 400 Z" fill="url(#advAccent)" />
        {/* neck */}
        <rect x="196" y="300" width="28" height="45" rx="12" fill="#D9B48C" />
        {/* head */}
        <circle cx="210" cy="270" r="46" fill="#E3B995" />
        {/* hair */}
        <path
          d="M164 258 C160 220 180 196 210 196 C240 196 260 220 256 258 C250 240 236 232 210 232 C184 232 170 240 164 258 Z"
          fill="#20263A"
        />
      </g>

      {/* floating data chip — signals advisory/finance context */}
      <g transform="translate(280,300)">
        <rect x="0" y="0" width="108" height="66" rx="12" fill="#FFFFFF" className="drop-shadow" />
        <rect x="0" y="0" width="108" height="66" rx="12" fill="#FFFFFF" stroke="#E3E8F2" />
        <text x="12" y="24" fontFamily="var(--font-mono, monospace)" fontSize="9" fill="#6B7690">
          PORTFOLIO
        </text>
        <text x="12" y="46" fontFamily="var(--font-display, sans-serif)" fontSize="18" fontWeight="700" fill="#0A1F44">
          +12.4%
        </text>
        <path d="M12 56 L28 48 L42 53 L58 40 L74 44 L96 30" stroke="#1B8A5A" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
