
'use client';

import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ArrowRight, Star, Heart, Shield, Briefcase } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import dynamic from 'next/dynamic';
import Hero from './components/Hero';
import TrustBanner from './components/TrustBanner';
import ServiceCarousel from './components/ServiceCarousel';

const VehicleList = dynamic(() => import('./components/VehicleList'), { 
  loading: () => <div className="h-96 flex items-center justify-center"><div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" /></div>
});

const TourList = dynamic(() => import('./components/TourList'), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" /></div>
});

const BookingForm = dynamic(() => import('./components/BookingForm'), {
  ssr: false
});

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      } 
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900 overflow-hidden">
      <Hero />
      <TrustBanner />
      <ServiceCarousel />
      
      {/* Why Choose Us */}
      <section className="py-12 md:py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 opacity-50 z-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-8 md:mb-16"
          >
            <span className="text-indigo-600 font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Unmatched Quality</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 tracking-tight font-serif">Experience Excellence</h2>
            <div className="h-1.5 w-24 bg-amber-500 mx-auto rounded-full" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
            {[
              { title: 'Local Expertise', desc: 'Our drivers are certified local experts who know the deep secrets of every monument.', icon: Star },
              { title: 'Pristine Fleet', desc: 'Every car is deep-sanitized before and after every single trip. Guaranteed hygiene.', icon: Shield },
              { title: 'Fixed Pricing', desc: 'Say goodbye to hidden charges. Our transparent billing ensures complete peace of mind.', icon: Heart }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="group p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-indigo-100 transition-all duration-500 flex md:block items-center gap-4 md:gap-0 text-left md:text-center"
              >
                <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 md:mx-auto md:mb-6 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-sm group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                  <feature.icon className="w-5 h-5 md:w-8 md:h-8" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold md:mb-4 text-slate-900 font-serif mb-1">{feature.title}</h3>
                  <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tours Section */}
      <section className="py-24 bg-slate-50 relative">
        <motion.div style={{ y }} className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-2xl"
            >
              <span className="text-indigo-600 font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Heritage Explorer</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight font-serif">Elite Tour Packages</h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">Itineraries curated for travelers looking for deep heritage exploration and seamless travel experiences.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link href="/tours" className="group flex items-center gap-3 text-indigo-600 font-bold hover:text-indigo-800 transition-colors">
                <span>View All Experiences</span>
                <div className="w-10 h-10 rounded-full border border-indigo-200 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white group-hover:border-transparent transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            </motion.div>
          </div>

          <TourList slice={3} />
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-indigo-600 font-bold tracking-[0.3em] uppercase text-xs mb-3 block">The Fleet</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight font-serif">Our Premium Vehicles</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">From executive sedans to luxury MUVs, experience comfort like never before.</p>
          </motion.div>
          
          <VehicleList slice={3} />
          
          <div className="mt-16 text-center">
            <Link 
              href="/vehicles"
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-indigo-600 transition-all hover:shadow-lg hover:shadow-indigo-200"
            >
              <span>View Entire Fleet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Specialized Transfers</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight font-serif">Pune Corporate & Airport Connect</h2>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">
                  Fastest growing outstation service connecting Chhatrapati Sambhaji Nagar with Pune. We provide seamless end-to-end travel for corporate executives and airport passengers.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Outstation Rides', desc: 'Secure and comfortable round-trips across Maharashtra.', icon: Shield },
                  { title: 'Airport Pickups', desc: 'Punctual arrivals for Pune and Mumbai airports.', icon: Star },
                  { title: 'Corporate Trips', desc: 'Reliable transport for busy business professionals.', icon: Briefcase },
                  { title: 'Special Pune Cab', desc: 'Dedicated daily service for Pune route.', icon: Heart },
                ].map((s, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-indigo-600 shrink-0">
                      {React.createElement(s.icon as any, { className: "w-5 h-5" })}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{s.title}</h4>
                      <p className="text-xs text-slate-500 font-medium leading-tight">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link 
                  href="https://wa.me/919960669724?text=I'm interested in booking a Pune Connect cab."
                  target="_blank"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
                >
                  <span>Book Pune Cab</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-2 bg-slate-100 rounded-[2.5rem]"
            >
              <div className="relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Pune Highway" 
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="px-3 py-1 bg-amber-500 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-950">Special Route</div>
                  </div>
                  <h3 className="text-2xl font-black mb-2 font-serif tracking-tight">Aurangabad ⇌ Pune Express</h3>
                  <p className="text-slate-300 text-sm font-medium">Daily trips available for Hinjewadi, Viman Nagar, and Air port. Book your preference of vehicle today.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif">Your Trusted Travel Partner in Chhatrapati Sambhaji Nagar (Aurangabad)</h2>
                <p className="text-slate-600 mb-4">
                  Welcome to <strong>Aurangabad Taxi Rental</strong>, the premier taxi service in Chhatrapati Sambhaji Nagar. We provide 24/7 car rental solutions for tourists, corporate clients, and local residents. Whether you're looking for an <em>airport pickup and drop</em> or a full-day heritage tour, we have you covered.
                </p>
                <p className="text-slate-600">
                  Our professional drivers are experts in navigating the local terrain of Maharashtra, ensuring you reach your destination safely and on time. We specialize in intercity travels to Pune, Mumbai, Shirdi, and Nashik with both one-way and round-trip options.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif">Explore Ajanta & Ellora with Best Car Rental</h2>
                <p className="text-slate-600 mb-4">
                  Discover the architectural marvels of <strong>Ajanta and Ellora Caves</strong> with our specially curated tour packages. We offer a range of vehicles including Toyota Innova Crysta, Kia Carens, and Maruti Suzuki Dzire to make your heritage trip comfortable.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600 list-none p-0">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    24/7 Customer Support
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    Clean & Sanitized Taxis
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    Expert Local Drivers
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    Transparent Pricing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Booking CTA */}
      <section className="py-24 relative overflow-hidden bg-slate-950">
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0.8, 1], [0, 50]) }}
          className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-transparent to-transparent pointer-events-none" 
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <span className="text-amber-500 font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Ready for Adventure?</span>
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter font-serif">
                Your <span className="text-amber-500 italic font-serif">Story</span><br />Starts Here.
              </h2>
              <p className="text-lg md:text-xl text-slate-400 mb-10 font-light leading-relaxed max-w-lg">
                Book your heritage tour or intercity drop instantly via WhatsApp. Fast, reliable, and tailored to your needs.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm font-bold tracking-wide">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-amber-500">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white text-base">Safe Travel</div>
                    <div className="text-slate-500 text-xs mt-1">GPS Monitored</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-amber-500">
                    <Star className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white text-base">Top Rated</div>
                    <div className="text-slate-500 text-xs mt-1">5-Star Reviews</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <BookingForm />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
