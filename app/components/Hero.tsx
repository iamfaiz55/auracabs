
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight, UserCheck, ShieldCheck, MapPin } from 'lucide-react';
import { HERO_SLIDES } from '../../constants';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-50">
      {/* Proactive Preloading for internal slides */}
      <div className="hidden">
        {HERO_SLIDES.map((slide, i) => (
          <Image
            key={`preload-${slide.id}`}
            src={slide.image}
            alt="preload"
            fill
            priority
            sizes="1vw"
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Light Theme Gradients - Minimal Opacity for clarity */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50/50 via-transparent to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/50 via-transparent to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent z-10" />
          <Image
            src={HERO_SLIDES[currentSlide].image}
            alt={HERO_SLIDES[currentSlide].title}
            fill
            priority
            className="object-cover opacity-90"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12 md:pb-24">
        <div className="max-w-3xl space-y-6 md:space-y-8">
          <motion.div
            key={`tag-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full backdrop-blur-sm shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
            <span className="text-xs md:text-sm font-bold text-amber-700 tracking-wider uppercase">
              {HERO_SLIDES[currentSlide].tag}
            </span>
          </motion.div>

          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-4xl sm:text-2xl md:text-4xl lg:text-6xl font-black text-slate-900 leading-[0.95] md:leading-[0.95] tracking-tight font-serif"
          >
            {HERO_SLIDES[currentSlide].title.split(' ').map((word, i) => (
              <span key={i} className="inline-block mr-2 md:mr-5">
                {word}
              </span>
            ))}
          </motion.h1>

          <motion.p
            key={`desc-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-sm sm:text-base md:text-xl text-slate-800 font-medium max-w-xl leading-relaxed"
          >
            {HERO_SLIDES[currentSlide].description}
          </motion.p>
          
          <motion.div
            key={`btns-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
          >
            <Link 
              href="/contact"
              className="group relative px-6 py-3 md:px-8 md:py-4 bg-indigo-600 rounded-full overflow-hidden flex items-center justify-center gap-2 md:gap-3 text-white text-sm md:text-base font-bold tracking-wide shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all"
            >
              <span className="relative z-10">Start Your Journey</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            
            <Link 
              href="/vehicles"
              className="group px-6 py-3 md:px-8 md:py-4 bg-white/50 border border-slate-200 rounded-full flex items-center justify-center gap-2 md:gap-3 text-slate-900 text-sm md:text-base font-bold hover:bg-white transition-all backdrop-blur-sm shadow-sm hover:shadow-md"
            >
              <span>View Fleet</span>
            </Link>
          </motion.div>
        </div>

        {/* Floating Features */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.5, duration: 1 }}
           className="absolute bottom-12 right-4 md:right-8 lg:right-12 hidden lg:flex gap-8"
        >
          {[
            { icon: UserCheck, label: 'Verified Drivers', sub: 'Police Checked' },
            { icon: ShieldCheck, label: 'Safe & Secure', sub: 'GPS Monitored' },
            { icon: MapPin, label: 'Local Experts', sub: 'Detailed Knowledge' }
          ].map((feat, i) => (
            <div key={i} className="flex items-center gap-4 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-lg shadow-slate-100">
              <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                <feat.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-slate-900 font-bold text-sm">{feat.label}</div>
                <div className="text-slate-500 text-xs font-medium">{feat.sub}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-200">
        <motion.div
           key={currentSlide}
           initial={{ width: "0%" }}
           animate={{ width: "100%" }}
           transition={{ duration: 6, ease: "linear" }}
           className="h-full bg-indigo-600 origin-left"
        />
      </div>
    </div>
  );
};

export default Hero;
