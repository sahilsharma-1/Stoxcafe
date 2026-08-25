import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'StoxCafe — Demat, Loans & Insurance, Served Right',
  description:
    'StoxCafe helps you open demat accounts with real guidance, get home & personal loans sorted, and pick insurance that actually makes sense — all on one menu.',
  keywords: [
    'StoxCafe',
    'demat account',
    'personal loan',
    'home loan',
    'term insurance',
    'car insurance',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body bg-bg text-cream">{children}</body>
    </html>
  );
}
