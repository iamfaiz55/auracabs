
'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { BUSINESS_NAME, PHONE_NUMBER, EMAIL, LOCATION } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 md:py-24 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black text-white tracking-tighter uppercase">
                {BUSINESS_NAME.split(' ')[0]}
              </span>
              <span className="block text-xs font-bold text-amber-500 tracking-[0.3em] uppercase mt-1">
                Taxi Rental
              </span>
            </Link>
            <p className="text-sm font-medium leading-relaxed max-w-xs text-slate-400">
              Premium car rental services in Aurangabad. Experience heritage tours and intercity travel with unmatched comfort and safety.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 hover:bg-indigo-600 flex items-center justify-center transition-colors text-white">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-tight">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { name: 'Home', path: '/' },
                { name: 'Our Fleet', path: '/vehicles' },
                { name: 'Tour Packages', path: '/tours' },
                { name: 'Contact Us', path: '/contact' },
                { name: 'Privacy Policy', path: '#' },
                { name: 'Terms of Service', path: '#' }
              ].map(link => (
                <li key={link.name}>
                  <Link href={link.path} className="hover:text-amber-500 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-tight">Our Services</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                'Airport Pickups',
                'Outstation Rides',
                'Corporate Trips',
                'Ajanta Ellora Tours',
                'Pune Special Cab',
                'Luxury Weddings'
              ].map(service => (
                <li key={service} className="hover:text-white transition-colors cursor-default">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-tight">Contact Us</h4>
            <div className="space-y-6 text-sm font-medium">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>{LOCATION}</span>
              </div>
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-4 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <span>{PHONE_NUMBER}</span>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <span>{EMAIL}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
          <p>Designed and developed by <a href="https://shaikhfaiz.top" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Shaikh Faiz</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
