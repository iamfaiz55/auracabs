
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Fuel, Fan, Briefcase, Car } from 'lucide-react';
import { VEHICLES } from '../../constants';
// Note: In real app, you might want to fetch vehicles or pass as props, but importing constant is fine here.

interface VehicleListProps {
  slice?: number;
}

const VehicleList: React.FC<VehicleListProps> = ({ slice }) => {
  const displayVehicles = slice ? VEHICLES.slice(0, slice) : VEHICLES;

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
      {displayVehicles.map((vehicle) => (
        <motion.div
          key={vehicle.id}
          variants={item}
          className="group relative bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100"
        >
          {/* Image Container */}
          <div className="relative h-56 overflow-hidden">
            <Image
              src={vehicle.image}
              alt={vehicle.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold shadow-md text-amber-600">
              {vehicle.type}
            </div>
            {/* Price Tag */}
            <div className="absolute bottom-4 left-4 bg-slate-900/90 text-white px-4 py-2 rounded-xl backdrop-blur-md">
              <span className="text-xl font-bold">{vehicle.pricePerKm}</span>
              <span className="text-xs text-slate-400 font-medium tracking-wide"> / km</span>
            </div>
          </div>

          <div className="p-8">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {vehicle.name}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6">
              <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                <Users className="w-4 h-4 text-indigo-500" />
                <span>{vehicle.seats} Seats</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                <Fan className="w-4 h-4 text-indigo-500" />
                <span>AC</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                <Briefcase className="w-4 h-4 text-indigo-500" />
                <span>Luggage</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                <Fuel className="w-4 h-4 text-indigo-500" />
                <span>Diesel</span>
              </div>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2">
              {vehicle.description}
            </p>

            <Link
              href={`https://wa.me/917030471135?text=I'm interested in booking ${vehicle.name}`}
              target="_blank"
              className="flex items-center justify-center gap-2 w-full py-4 bg-slate-50 text-slate-900 font-bold rounded-xl hover:bg-indigo-600 hover:text-white hover:shadow-lg hover:shadow-indigo-200 transition-all duration-300 group"
            >
              <span>Book via WhatsApp</span>
              <Car className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default VehicleList;
