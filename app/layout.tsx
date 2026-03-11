
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';

const Footer = dynamic(() => import('./components/Footer'), {
  ssr: true,
});

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Aura Cabs | Premium Car Hire Chhatrapati Sambhaji Nagar',
    template: '%s | Aura Cabs'
  },
  description: 'Top-rated taxi service in Chhatrapati Sambhaji Nagar (Aurangabad). Premium car rental for Ajanta Ellora tours, airport pickup/drop, and intercity travel. Book Innova Crysta, Kia Carens, and Dzire.',
  keywords: [
    'taxi service in Aurangabad',
    'car rental Chhatrapati Sambhaji Nagar',
    'Ajanta Ellora tour packages',
    'airport pickup and drop Aurangabad',
    'Innova Crysta rental Aurangabad',
    'travel agency Chhatrapati Sambhaji Nagar',
    'best cab service Aurangabad',
    'one way taxi Mumbai Pune to Aurangabad',
    'tourist taxi Aurangabad',
    'local sightseeing Aurangabad'
  ],
  authors: [{ name: 'Aura Cabs' }, { name: 'Shaikh Faiz from Aurangabad Maharashtra' }],
  creator: 'Designed and developed by Shaikh Faiz from Aurangabad Maharashtra',
  publisher: 'Aura Cabs',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: 'Aura Cabs | Premium Cab Service in Chhatrapati Sambhaji Nagar',
    description: 'Explore Ajanta and Ellora with the most reliable taxi service in Aurangabad. Airport transfers and intercity travel at best rates.',
    url: 'https://auracabs.services',
    siteName: 'Aura Cabs',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aura Cabs | Premium Cab Service',
    description: 'Book premium taxis in Aurangabad for Ajanta Ellora tours and airport transfers.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${playfairDisplay.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-slate-900 bg-slate-50">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
