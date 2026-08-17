import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sunlite Solutions | Solar Panel Installation Company in Kottayam, Kerala',
  description: 'Sunlite Solutions helps homes, businesses and industrial properties across Kerala plan and install rooftop solar. Explore solar options, system sizing, KSEB guidance, PM Surya Ghar information, project stories and a free site assessment.',
  keywords: ['Sunlite Solutions', 'solar energy Kerala', 'solar panel installation Kottayam', 'PM Surya Ghar scheme Kerala', 'KSEB solar net metering'],
  icons: {
    icon: '/logo-favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/logo-favicon.png" />
        <link
          rel="preload"
          href="/images/herosection/hero-poster.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body className="bg-dark-bg text-slate-100 antialiased selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}

