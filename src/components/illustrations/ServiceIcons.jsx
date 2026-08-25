export function DematIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <rect width="48" height="48" rx="14" fill="#EAF1FF" />
      <path d="M13 30L19 22L25 27L35 15" stroke="#1B4FD1" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 15H35V22" stroke="#B98A34" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="13" y="32" width="22" height="2.2" rx="1.1" fill="#0E2A5E" fillOpacity="0.25" />
    </svg>
  );
}

export function LoansIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <rect width="48" height="48" rx="14" fill="#E4F5F3" />
      <rect x="12" y="17" width="24" height="16" rx="3" stroke="#0E7C7B" strokeWidth="2.2" />
      <circle cx="24" cy="25" r="4" stroke="#0E7C7B" strokeWidth="2.2" />
      <path d="M12 21H16" stroke="#0E7C7B" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M32 29H36" stroke="#0E7C7B" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function InsuranceIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <rect width="48" height="48" rx="14" fill="#FBF3E4" />
      <path
        d="M24 12L34 16V23C34 30 30 34.5 24 36C18 34.5 14 30 14 23V16L24 12Z"
        stroke="#B98A34"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M19.5 24L22.5 27L28.5 20" stroke="#B98A34" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
