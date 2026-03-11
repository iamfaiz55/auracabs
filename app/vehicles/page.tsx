
import React from 'react';
import { Metadata } from 'next';
import VehicleList from '../components/VehicleList';

export const metadata: Metadata = {
  title: 'Car Rental Aurangabad | Hire Innova Crysta & Kia Carens',
  description: 'Premium car rental in Aurangabad. Choose from Innova Crysta, Kia Carens, and Dzire for tours and airport transfers in Chhatrapati Sambhaji Nagar.',
};

export default function VehiclesPage() {
  return (
    <main className="pt-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 font-serif">Car Rental in Aurangabad</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Choose from our wide range of well-maintained vehicles for a comfortable journey.
          </p>
        </div>
        <VehicleList />
      </div>
    </main>
  );
}
