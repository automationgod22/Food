import type { Metadata } from 'next';
import { Cormorant_Garamond, Poppins } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--ff-d',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--ff-b',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Khana Khajana | Royal Indian Cuisine & Heritage Dining',
  description:
    'Best North Indian & Mughlai Fine Dining Restaurant. Experience 25 years of royal culinary heritage, charcoal-fired kebabs, simmering copper handis, and authentic Indian hospitality.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
