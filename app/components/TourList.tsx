
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Star } from 'lucide-react';
import { TOURS } from '../../constants';
// Fetching data or passing props is ideal, but using constant here directly.

interface TourListProps {
  slice?: number;
}

const TourList: React.FC<TourListProps> = ({ slice }) => {
  const displayTours = slice ? TOURS.slice(0, slice) : TOURS;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {displayTours.map((tour) => (
        <motion.div 
          key={tour.id} 
          variants={item}
          className="group flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:-translate-y-2"
        >
          {/* Image Container */}
          <div className="relative h-48 md:h-72 overflow-hidden">
            <Image
              src={tour.image}
              alt={tour.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            
            <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-white/95 backdrop-blur-md px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-bold text-amber-600 flex items-center gap-1 shadow-md z-10">
               <Star className="w-2.5 h-2.5 md:w-3 md:h-3 fill-amber-600" />
               <span className="hidden xs:inline">Premium Tour</span>
               <span className="xs:hidden">Premium</span>
            </div>
            
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white z-10 hidden xs:block">
              <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-amber-400 block mb-0.5 md:mb-1">Duration</span>
              <div className="flex items-center gap-1.5 md:gap-2">
                 <Clock className="w-3 h-3 md:w-4 md:h-4 text-amber-400" />
                 <span className="font-bold text-sm md:text-lg">{tour.duration}</span>
              </div>
            </div>
          </div>

          <div className="p-5 md:p-8 flex-grow flex flex-col relative">
            <h3 className="text-lg md:text-2xl font-black text-slate-900 mb-2 md:mb-3 leading-tight group-hover:text-indigo-600 transition-colors font-serif line-clamp-2">
              {tour.title}
            </h3>
            
            <div className="flex items-start gap-1 md:gap-2 mb-2 md:mb-6">
              <MapPin className="w-3 h-3 md:w-4 md:h-4 text-indigo-500 mt-1 flex-shrink-0" />
              <div className="text-[10px] md:text-sm text-slate-500 font-medium line-clamp-1 md:line-clamp-2">
                {tour.destinations.join(' • ')}
              </div>
            </div>

            <p className="block text-[11px] md:text-sm text-slate-500 leading-relaxed mb-4 md:mb-6 line-clamp-2 md:line-clamp-3">
              {tour.description}
            </p>

            <div className="mt-auto pt-4 md:pt-6 border-t border-slate-50">
              <div className="flex items-center justify-between gap-3 md:gap-4">
                <div className="flex flex-col">
                   <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">Starting From</span>
                   <span className="text-sm md:text-xl font-black text-slate-900 leading-none mt-1">{tour.price || 'Contact'}</span>
                </div>
                <Link 
                  href={`/tours/${tour.id}`}
                  className="flex items-center justify-center gap-1.5 md:gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-slate-900 text-white text-xs md:text-sm font-bold rounded-xl hover:bg-indigo-600 transition-all shadow-lg hover:shadow-indigo-200 group/btn shrink-0"
                >
                  <span>Details</span>
                  <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TourList;
