import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Helios Solar Systems | Next-Gen Tier-1 Solar PV & PM Surya Ghar Subsidy',
  description: 'Switch to Tier-1 TOPCon Solar PV technology in India. Get up to ₹78,000 PM Surya Ghar Govt Subsidy, zero electricity bills, and 25 years of guaranteed returns.',
  keywords: ['solar energy', 'solar panels India', 'PM Surya Ghar scheme', '3kw solar system price', '5kw solar system price', '8kw solar system price', 'solar ROI calculator India'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-dark-bg text-slate-100 antialiased selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
