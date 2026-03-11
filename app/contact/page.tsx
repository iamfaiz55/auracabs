
import React from 'react';
import BookingForm from '../components/BookingForm';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER, EMAIL, LOCATION } from '../../constants';

export default function ContactPage() {
  return (
    <main className="pt-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Get in Touch</span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 font-serif">Contact Us</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            We are available 24/7 to assist you with your travel needs. Reach out to us via phone, email, or WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex items-start gap-6 group hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Phone Support</h3>
                <p className="text-slate-500 text-sm mb-3">Available 24/7 for bookings</p>
                <a href={`tel:${PHONE_NUMBER}`} className="text-lg font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex items-start gap-6 group hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">WhatsApp</h3>
                <p className="text-slate-500 text-sm mb-3">Instant booking confirmation</p>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-lg font-bold text-green-600 hover:text-green-700 transition-colors">
                  Chat Now
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex items-start gap-6 group hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Email Us</h3>
                <p className="text-slate-500 text-sm mb-3">For corporate inquiries</p>
                <a href={`mailto:${EMAIL}`} className="text-lg font-bold text-slate-900 hover:text-amber-500 transition-colors">
                  {EMAIL}
                </a>
              </div>
            </div>

             <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex items-start gap-6 group hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-500 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Our Office</h3>
                <p className="text-slate-500 text-sm mb-3">Visit us for offline booking</p>
                <p className="text-base font-bold text-slate-900">
                  {LOCATION}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 blur-[60px] opacity-20 pointer-events-none rounded-full" />
             <div className="relative z-10">
               <h3 className="text-2xl font-black text-slate-900 mb-6 font-serif">Send Us a Message</h3>
               <BookingForm />
             </div>
          </div>

        </div>
      </div>
    </main>
  );
}
