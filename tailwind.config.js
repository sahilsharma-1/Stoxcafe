/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FFFFFF',
        mist: '#F5F7FB',
        mist2: '#EEF1F8',
        ink: '#0A1F44',
        ink2: '#4A5876',
        muted: '#6B7690',
        line: '#E3E8F2',
        line2: '#D6DDEC',
        navy: '#0E2A5E',
        navy2: '#123A7A',
        royal: '#1B4FD1',
        royal2: '#3D6BE0',
        sky: '#EAF1FF',
        gold: '#B98A34',
        gold2: '#D8B15E',
        teal: '#0E7C7B',
        tealSoft: '#E4F5F3',
        success: '#1B8A5A',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      maxWidth: {
        wrap: '1280px',
      },
      backgroundImage: {
        'grad-brand': 'linear-gradient(135deg, #0E2A5E 0%, #1B4FD1 55%, #3D6BE0 100%)',
        'grad-brand-soft': 'linear-gradient(135deg, #EAF1FF 0%, #F5F7FB 100%)',
        'grad-gold': 'linear-gradient(135deg, #B98A34 0%, #D8B15E 100%)',
        'grad-mesh': 'radial-gradient(48rem 28rem at 85% -10%, rgba(27,79,209,0.10), transparent 60%), radial-gradient(36rem 22rem at -10% 15%, rgba(184,138,52,0.08), transparent 60%)',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(10,31,68,0.04), 0 8px 24px -8px rgba(10,31,68,0.10)',
        card: '0 2px 8px rgba(10,31,68,0.06), 0 16px 40px -16px rgba(10,31,68,0.14)',
        lift: '0 24px 60px -20px rgba(14,42,94,0.28)',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        rise: 'rise 0.7s cubic-bezier(0.16,1,0.3,1) both',
        ticker: 'ticker 32s linear infinite',
        blink: 'blink 2.4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
