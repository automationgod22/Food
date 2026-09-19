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
  title: 'Kailash Parbat | Iconic Pure Vegetarian & Chaat Heritage Since 1952 | Panampilly Nagar, Kochi',
  description:
    'Experience world-famous Bombay Chaat, royal North Indian curries, sizzling Paneer Tikka, and signature Pav Bhaji at Kailash Parbat, Panampilly Nagar, Kochi. 100% Pure Vegetarian with Jain options. Rated 4.6★ on Google (373+ Reviews).',
  keywords: [
    'Kailash Parbat Kochi',
    'Pure Vegetarian Restaurant Panampilly Nagar',
    'Best Chaat in Kochi',
    'Pav Bhaji Kochi',
    'Chole Bhature Kochi',
    'North Indian Restaurant Kochi',
    'Jain Food Kochi',
    'Kailash Parbat Menu',
  ],
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
