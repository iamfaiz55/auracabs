
import React from 'react';
import { Metadata } from 'next';
import TourList from '../components/TourList';

export const metadata: Metadata = {
  title: 'Ajanta Ellora Tour Packages | Aurangabad Heritage Tours',
  description: 'Book exclusive tour packages for Ajanta and Ellora Caves. Experience the history of Aurangabad with our professional guides and comfortable taxis.',
};

export default function ToursPage() {
  return (
    <main className="pt-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 font-serif">Aurangabad Tour Packages</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Discover the rich heritage of Aurangabad with our exclusive tour packages.
          </p>
        </div>
        <TourList />
      </div>
    </main>
  );
}
