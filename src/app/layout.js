import './globals.css';

export const metadata = {
  title: 'Vantage Fincorp — Demat Accounts, Loans & Insurance',
  description:
    'Vantage Fincorp is a full-service financial partner: demat accounts with dedicated advisory, structured lending across home and personal loans, and insurance built around your life. One relationship, every product.',
  keywords: [
    'Vantage Fincorp',
    'demat account',
    'investment consultancy',
    'personal loan',
    'home loan',
    'term insurance',
    'car insurance',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body bg-paper text-ink">{children}</body>
    </html>
  );
}
