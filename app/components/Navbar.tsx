
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { BUSINESS_NAME, PHONE_NUMBER, WHATSAPP_NUMBER } from '../../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Vehicles', path: '/vehicles' },
    { name: 'Tour Packages', path: '/tours' },
    { name: 'Contact Us', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isOpen 
          ? 'bg-transparent border-b-0' 
          : (scrolled 
              ? 'bg-white/90 backdrop-blur-md border-b border-indigo-50/50 shadow-sm' 
              : 'bg-white/30 backdrop-blur-md border-b border-white/20')
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* Logo */}
          <Link href="/" onClick={() => setIsOpen(false)} className="group flex flex-col items-start z-[110]">
            <span className={`text-2xl md:text-3xl font-black tracking-tighter leading-none transition-colors duration-300 uppercase ${
              isOpen ? 'text-white' : (scrolled ? 'text-slate-900' : 'text-slate-900 md:text-slate-900')
            }`}>
              {BUSINESS_NAME.split(' ')[0]}
            </span>
            <span className="text-[10px] md:text-xs font-bold text-amber-500 tracking-[0.3em] uppercase mt-1 group-hover:tracking-[0.4em] transition-all duration-300">
              Taxi Rental
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative px-5 py-2 text-sm font-bold tracking-wide transition-colors duration-300 hover:text-indigo-600 ${
                    isActive ? 'text-indigo-600' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600/50 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
             <Link
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-green-600 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </Link>
            <Link
              href="/contact"
              className="group relative px-6 py-3 bg-slate-900 overflow-hidden rounded-xl text-white text-sm font-bold shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all active:scale-95"
            >
              <div className="absolute inset-0 w-full h-full bg-indigo-600/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-2">
                Book Now <CalendarCheck className="w-4 h-4" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-[110] w-12 h-12 flex items-center justify-center rounded-full bg-transparent hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5 overflow-hidden">
               <motion.span 
                 animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                 className={`w-full h-0.5 rounded-full origin-center transition-all ${isOpen ? 'bg-white' : 'bg-slate-900'}`}
               />
               <motion.span 
                 animate={isOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                 className={`w-full h-0.5 rounded-full transition-all ${isOpen ? 'bg-white' : 'bg-slate-900'}`} 
               />
               <motion.span 
                 animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                 className={`w-full h-0.5 rounded-full origin-center transition-all ${isOpen ? 'bg-white' : 'bg-slate-900'}`}
               />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* 1. Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[90] bg-black/80"
            />

            {/* 3. The Off-Canvas Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-slate-950 shadow-2xl flex flex-col border-l border-white/10 z-[95]"
            >
              {/* Decorative Background Elements */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
              
              {/* Main Content Container */}
              <div className="relative z-20 flex flex-col h-full pt-28 pb-10 px-8 overflow-y-auto">
                <div className="space-y-6 mt-4">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                    >
                      <Link
                        href={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 text-lg font-bold tracking-tight transition-all ${
                          pathname === link.path ? 'text-indigo-400' : 'text-white/90 hover:text-white'
                        }`}
                      >
                        <span className="text-xs font-mono text-indigo-500 opacity-50 pt-2">0{idx + 1}</span>
                        <span>{link.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto space-y-6 pt-10">
                   <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">Direct Line</p>
                     <div className="space-y-3">
                       <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-3 text-white font-medium group">
                          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shrink-0">
                            <Phone className="w-4 h-4" />
                          </div>
                          <span className="text-sm tracking-tight">{PHONE_NUMBER}</span>
                       </a>
                       <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" className="flex items-center gap-3 text-white font-medium group">
                          <div className="w-8 h-8 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 group-hover:bg-green-600 group-hover:text-white transition-all shrink-0">
                            <MessageCircle className="w-4 h-4" />
                          </div>
                          <span className="text-sm tracking-tight">WhatsApp Support</span>
                       </a>
                     </div>
                   </div>

                   <Link
                     href="/contact"
                     onClick={() => setIsOpen(false)}
                     className="relative group overflow-hidden flex items-center justify-center w-full py-3 bg-white text-slate-900 font-bold rounded-xl shadow-lg transition-transform active:scale-95 text-sm"
                   >
                     <div className="absolute inset-0 bg-indigo-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                     <span className="relative uppercase tracking-wider">Book Your Ride</span>
                   </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
