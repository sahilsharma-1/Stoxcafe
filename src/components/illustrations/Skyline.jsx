export default function Skyline({ className = '' }) {
  return (
    <svg
      viewBox="0 0 1200 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="skylineFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0E2A5E" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#1B4FD1" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <g fill="url(#skylineFade)">
        <rect x="20" y="120" width="60" height="140" />
        <rect x="95" y="80" width="46" height="180" />
        <rect x="155" y="150" width="70" height="110" />
        <rect x="240" y="40" width="54" height="220" />
        <rect x="310" y="100" width="40" height="160" />
        <rect x="365" y="60" width="64" height="200" />
        <rect x="445" y="130" width="50" height="130" />
        <rect x="510" y="20" width="58" height="240" />
        <rect x="585" y="90" width="44" height="170" />
        <rect x="645" y="150" width="72" height="110" />
        <rect x="732" y="55" width="50" height="205" />
        <rect x="798" y="110" width="60" height="150" />
        <rect x="874" y="35" width="46" height="225" />
        <rect x="936" y="140" width="66" height="120" />
        <rect x="1018" y="75" width="52" height="185" />
        <rect x="1086" y="130" width="42" height="130" />
        <rect x="1145" y="95" width="40" height="165" />
      </g>
      <g stroke="#D8B15E" strokeOpacity="0.55" strokeWidth="1.5">
        <line x1="20" y1="120" x2="80" y2="120" />
        <line x1="240" y1="40" x2="294" y2="40" />
        <line x1="510" y1="20" x2="568" y2="20" />
        <line x1="874" y1="35" x2="920" y2="35" />
      </g>
    </svg>
  );
}
