import type { Metadata } from 'next';
import { Fraunces, Great_Vibes, Outfit } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--ff-d',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--ff-script',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--ff-b',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Best Restaurants in Kochi | Kailash Parbat | Pure Veg & Chaat Since 1952',
  description:
    'Ranked among the best restaurants in Kochi for dinner and lunch. Experience world-famous Bombay Chaat, 12-hr Dal Makhani, sizzling Paneer Tikka, and 100% pure vegetarian & Jain specialties at Kailash Parbat, Panampilly Nagar, Kochi. Rated 4.6★ (373+ Reviews).',
  keywords: [
    'best restaurants in kochi',
    'best food spot kochi',
    'best restaurants in kochi for dinner',
    'best north indian restaurants in kochi',
    'best fine dining restaurants in kochi',
    'best restaurants in fort kochi for lunch',
    'best dinner spots kochi',
    'best pure vegetarian restaurant kochi',
    'best south indian restaurants in kochi',
    'best affordable restaurants in kochi',
    'best dine in restaurants in kochi',
    'good restaurants in kochi for lunch',
    'best buffet restaurants in kochi',
    'best restaurants in panampilly nagar',
    'best restaurants near cochin international airport',
    'best restaurants in kaloor kochi',
    'best local restaurants in kochi',
    'Kailash Parbat Kochi',
    'Pure Veg Restaurant Kochi',
    'Jain Food Kochi',
    'Best Chaat in Kochi',
  ],
  openGraph: {
    title: 'Best Restaurants in Kochi | Kailash Parbat Pure Veg & Chaat Since 1952',
    description:
      'Premier dining spot in Panampilly Nagar, Kochi. World-famous Pav Bhaji, Chole Bhature, Tandoor & 100% Pure Veg & Jain culinary heritage.',
    url: 'https://food-seven-coral.vercel.app',
    siteName: 'Kailash Parbat Kochi',
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': ['Restaurant', 'FoodEstablishment'],
  name: 'Kailash Parbat Kochi',
  alternateName: 'Kailash Parbat Pure Vegetarian Restaurant Panampilly Nagar',
  description:
    'Award-winning pure vegetarian and North Indian restaurant in Panampilly Nagar, Kochi. Renowned for authentic 1952 Bombay chaats, clay oven tandoori, and Jain gastronomy.',
  image: 'https://food-seven-coral.vercel.app/kp/dishes/regal_dining_hall.jpg',
  servesCuisine: [
    'North Indian',
    'Pure Vegetarian',
    'Sindhi',
    'Chaat',
    'Mughlai',
    'Street Food',
    'Jain',
  ],
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Credit Card, UPI',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Panampilly Nagar',
    addressLocality: 'Kochi',
    addressRegion: 'Kerala',
    postalCode: '682036',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 9.9625,
    longitude: 76.2975,
  },
  telephone: '+91-484-402-4444',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '11:30',
      closes: '23:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.6',
    reviewCount: '373',
    bestRating: '5',
    worstRating: '1',
  },
  hasMenu: 'https://food-seven-coral.vercel.app/#menu',
  acceptsReservations: 'True',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which are the best restaurants in Kochi for dinner with family?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kailash Parbat in Panampilly Nagar is widely celebrated as one of the best restaurants in Kochi for dinner. Offering a luxurious contemporary ambience, private valet parking, and an expansive menu of over 140 dishes ranging from charcoal-roasted Paneer Tikka to 12-hour slow-cooked Dal Makhani and royal biryanis, it is the premier choice for family celebrations and dinner gatherings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I find the best North Indian food and authentic chaat in Kochi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Since 1952, Kailash Parbat has been the benchmark for authentic North Indian curries and legendary Bombay chaats. Visitors in Kochi can indulge in handcrafted Crispy Pani Puri, Royal Dahi Wada, buttery Pav Bhaji, and Amritsari Chole Bhature, prepared with proprietary spice formulas hand-roasted daily.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Kailash Parbat Kochi 100% pure vegetarian with Jain options?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Kailash Parbat is strictly 100% pure vegetarian, completely free of meat, fish, and eggs. We feature an extensive dedicated Jain-safe menu crafted without onions, garlic, or root vegetables, prepared using segregated traditional cookware to guarantee zero cross-contamination.',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${outfit.variable} ${greatVibes.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
