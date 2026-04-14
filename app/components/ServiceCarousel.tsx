
'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plane, Landmark, Car, Building2, MapPin, ArrowRight, PlaneLanding, PlaneTakeoff, TrainFront, Route } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const SERVICES = [
  {
    title: "Airport Pickup",
    description: "Zero waiting time. We track your flight for a seamless arrival experience at Aurangabad Airport. Our chauffeur awaits you at the arrival gate.",
    icon: PlaneLanding,
    image: "https://t3.ftcdn.net/jpg/08/93/26/34/360_F_893263472_4uLj6lmg5u3J6DEfUf2TniIPGc3GeKdr.jpg",
    color: "bg-blue-600"
  },
  {
    title: "Airport Drop",
    description: "Guaranteed punctuality. We ensure you reach the airport with ample time for your flight from any location in the city.",
    icon: PlaneTakeoff,
    image: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&q=80&w=800",
    color: "bg-sky-500"
  },
  {
    title: "Railway Station Transfer",
    description: "Hassle-free pickup and drop services for Aurangabad Railway Station. Available 24/7 for all major train arrivals and departures.",
    icon: TrainFront,
    image: "/gallery/railwayrtransport.jpg",
    color: "bg-red-500"
  },
  {
    title: "Heritage Tours",
    description: "Expertly curated tours to Ajanta and Ellora caves with local guides who know every detail.",
    icon: Landmark,
    image: "/gallery/aurangabad-heritage.jpg",
    color: "bg-amber-500"
  },

  {
    title: "Corporate Rental",
    description: "Premium fleet options for business travelers and corporate executives visiting Maharashtra.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    color: "bg-slate-800"
  },
  {
    title: "Local Sightseeing",
    description: "Explore Bibi Ka Maqbara, Daulatabad Fort, and Panchakki with our flexible local packages.",
    icon: MapPin,
    image: "https://images.pexels.com/photos/9224488/pexels-photo-9224488.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "bg-emerald-500"
  },
  {
    title: "One-Way Drop",
    description: "Convenient one-way taxi from Aurangabad to Pune, Mumbai, or any city and area. Enjoy premium travel without paying return fare.",
    icon: Route,
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800",
    color: "bg-violet-500"
  }
];

const ServiceCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logic
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      const firstCard = container.firstElementChild as HTMLElement;
      if (!firstCard) return;

      const itemWidth = firstCard.offsetWidth;
      const gap = parseFloat(window.getComputedStyle(container).gap) || 0;
      const scrollStep = itemWidth + gap;

      // Check if we are near the end
      const isEnd = container.scrollLeft + container.offsetWidth >= container.scrollWidth - 10;

      if (isEnd) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollStep, behavior: 'smooth' });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-slate-50 overflow-hidden w-full">
      {/* Mobile Auto-Carousel (Hero Style) */}
      {/* Main Service Carousel */}
      <div className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between md:items-end gap-6"
          >
            <div className="max-w-2xl">
              <span className="text-indigo-600 font-bold tracking-[0.3em] uppercase text-xs mb-3 block italic">Specialized Services</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tight font-serif uppercase leading-[0.9]">
                How We serve <br />
                <span className="text-indigo-600">Aurangabad</span>
              </h2>
              <p className="text-slate-500 text-base md:text-lg font-medium">From historical explorations to corporate logistics, we provide seamless transport solutions in Chhatrapati Sambhaji Nagar.</p>
            </div>
            <div className="flex gap-3 pb-2">
              <div className="w-16 h-1.5 bg-indigo-600 rounded-full" />
              <div className="w-6 h-1.5 bg-indigo-200 rounded-full" />
              <div className="w-3 h-1.5 bg-indigo-100 rounded-full" />
            </div>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex md:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 md:px-8"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              className="snap-start shrink-0 min-w-[100vw] md:min-w-[420px] h-[60vh] md:h-[550px] relative md:rounded-[3rem] overflow-hidden group shadow-2xl shadow-indigo-100/50 block"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              <div className="absolute top-6 left-6 md:top-10 md:left-10">
                <div className={`${service.color} w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-[1.25rem] flex items-center justify-center text-white shadow-xl`}>
                  <service.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2 md:mb-4 font-serif uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-300 text-sm md:text-base font-medium leading-relaxed mb-4 md:mb-8 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 md:translate-y-4 md:group-hover:translate-y-0">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  id={`service-book-btn-${index}`}
                  className="inline-flex items-center gap-2 text-white font-bold group/btn"
                >
                  <span className="text-xs md:text-sm uppercase tracking-widest border-b-2 border-white/30 pb-1 group-hover/btn:border-white transition-all">Book Service Now</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCarousel;
