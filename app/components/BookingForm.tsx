
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Phone, MapPin, Car, CheckCircle } from 'lucide-react';
import { VEHICLES } from '../../constants';

interface BookingFormProps {
  tourName?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ tourName }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    pickupLocation: '',
    dropLocation: '',
    date: '',
    vehiclePreference: VEHICLES[0].name,
    serviceType: tourName ? `Tour: ${tourName}` : 'intercity'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New Booking Request*%0A%0AName: ${formData.fullName}%0APhone: ${formData.phone}%0AService: ${formData.serviceType}%0APickup: ${formData.pickupLocation}%0ADrop: ${formData.dropLocation}%0ADate: ${formData.date}%0AVehicle: ${formData.vehiclePreference}`;
    window.open(`https://wa.me/919960669724?text=${message}`, '_blank');
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-center border border-slate-100"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-2">Request Sent!</h3>
        <p className="text-slate-500 mb-8 max-w-xs mx-auto">We've redirected you to WhatsApp to complete your booking. Our team will respond shortly.</p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors"
        >
          Book Another
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl border border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500" />
      
      <div className="mb-8">
        <h3 className="text-2xl font-black text-slate-900 mb-2">Quick Booking</h3>
        <p className="text-slate-500 text-sm">Fill details below and we'll confirm via WhatsApp.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
            <input
              type="text"
              name="fullName"
              placeholder="Your Name"
              required
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400"
              onChange={handleChange}
            />
          </div>
          <div className="relative group">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone / WhatsApp"
              required
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="relative group">
           <Car className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors pointer-events-none" />
           <select
             name="vehiclePreference"
             className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all font-medium text-slate-900 appearance-none cursor-pointer"
             onChange={handleChange}
             defaultValue={VEHICLES[0].name}
           >
             {VEHICLES.map(v => (
               <option key={v.id} value={v.name}>{v.name} ({v.type})</option>
             ))}
           </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative group">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
            <input
              type="text"
              name="pickupLocation"
              placeholder="Pickup Location"
              required
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400"
              onChange={handleChange}
            />
          </div>
          <div className="relative group">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
            <input
              type="text"
              name="dropLocation"
              placeholder="Drop Location"
              required
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="relative group">
           <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
           <input
             type="date"
             name="date"
             required
             className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all font-medium text-slate-900"
             onChange={handleChange}
           />
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:bg-slate-900 hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          <span>Confirm Booking</span>
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
             <CheckCircle className="w-4 h-4" />
          </div>
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
