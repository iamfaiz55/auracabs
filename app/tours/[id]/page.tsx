
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, MapPin, Check, X, Calendar, MessageCircle, Star, Phone } from 'lucide-react';
import { TOURS, PHONE_NUMBER, WHATSAPP_NUMBER } from '../../../constants';
import BookingForm from '../../components/BookingForm';

export function generateStaticParams() {
  return TOURS.map((tour) => ({
    id: tour.id,
  }));
}

export default async function TourDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tour = TOURS.find((t) => t.id === id);

  if (!tour) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-24">
      {/* Hero Header */}
      <div className="relative w-full flex flex-col md:block md:h-[70vh]">
        <div className="relative h-[50vh] md:h-full w-full">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20 md:bg-gradient-to-t md:from-slate-900 md:via-slate-900/50 md:to-transparent" />
          <div className="absolute top-0 left-0 p-6 pt-28 md:pt-32 z-20">
            <Link 
              href="/tours" 
              className="flex items-center gap-2 text-white/90 hover:text-white bg-black/20 hover:bg-black/40 backdrop-blur-md px-4 py-2 rounded-full transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-bold text-sm">Back to Tours</span>
            </Link>
          </div>
        </div>
        
        <div className="bg-slate-900 relative md:absolute md:bottom-0 md:left-0 md:right-0 z-20">
          <div className="p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
               <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-6">
                  <div className="space-y-4 w-full md:w-auto">
                    <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider text-[10px] md:text-sm">
                      <Star className="w-3 h-3 md:w-4 md:h-4 fill-amber-400" />
                      <span>Premium Heritage Tour</span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-6xl font-black text-white font-serif leading-tight">
                      {tour.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-2 md:gap-8 text-white/90 font-medium">
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5 rounded-lg border border-white/10 text-xs md:text-base">
                        <Clock className="w-3.5 h-3.5 md:w-5 md:h-5 text-amber-400" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5 rounded-lg border border-white/10 text-xs md:text-base">
                        <MapPin className="w-3.5 h-3.5 md:w-5 md:h-5 text-amber-400" />
                        <span>{tour.destinations.length} Destinations</span>
                      </div>
                    </div>
                  </div>
                 
                 <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl w-full md:w-auto md:min-w-[200px] text-center mt-2 md:mt-0">
                   <p className="text-slate-300 text-xs md:text-sm font-bold uppercase tracking-wider mb-1">Starting Price</p>
                   <p className="text-3xl md:text-4xl font-black text-white">{tour.price}</p>
                   <p className="text-white/60 text-xs mt-1">per vehicle</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-0 md:-mt-12 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview */}
            <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border border-slate-100">
               <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 md:mb-6 font-serif">Tour Overview</h2>
               <p className="text-sm md:text-lg text-slate-600 leading-relaxed font-medium">
                 {tour.description}
               </p>
               
               <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                 {tour.highlights?.map((highlight, index) => (
                   <div key={index} className="flex items-start gap-3 p-3 md:p-4 bg-indigo-50/50 rounded-xl border border-indigo-100">
                     <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 mt-0.5">
                       <Check className="w-2.5 h-2.5 md:w-3 md:h-3 stroke-[3]" />
                     </div>
                     <span className="text-slate-700 font-bold text-xs md:text-sm">{highlight}</span>
                   </div>
                 ))}
               </div>
            </div>

            {/* Gallery */}
            {tour.gallery && (
              <div className="space-y-6">
                <h2 className="text-2xl font-black text-slate-900 font-serif px-2">Tour Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {tour.gallery.map((img, idx) => (
                    <div key={idx} className={`relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group ${idx === 0 ? 'col-span-2 row-span-2 h-[400px]' : 'h-[190px]'}`}>
                      <Image
                        src={img}
                        alt={`Gallery image ${idx + 1}`}
                        fill
                        priority={idx < 2}
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Itinerary */}
            <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border border-slate-100">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-6 md:mb-8 font-serif">Itinerary</h2>
              <div className="space-y-6 md:space-y-8 relative before:absolute before:left-3 md:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-indigo-100">
                {tour.itinerary?.map((item, index) => (
                  <div key={index} className="relative pl-10 md:pl-12">
                    <div className="absolute left-0 top-1 w-7 h-7 md:w-8 md:h-8 rounded-full bg-indigo-50 border-4 border-white shadow-sm flex items-center justify-center text-indigo-600 font-black text-[10px] md:text-xs z-10">
                      {index + 1}
                    </div>
                    <div className="bg-slate-50 p-4 md:p-6 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-colors">
                      <span className="inline-block px-2 py-0.5 md:px-3 md:py-1 bg-white rounded-lg text-[10px] md:text-xs font-bold text-indigo-600 shadow-sm mb-2 border border-indigo-50">
                        {item.day}
                      </span>
                      <p className="text-xs md:text-base text-slate-700 font-medium leading-relaxed">
                        {item.activity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="bg-emerald-50/50 rounded-[2rem] p-6 md:p-8 border border-emerald-100">
                <h3 className="text-lg md:text-xl font-black text-slate-900 mb-4 md:mb-6 flex items-center gap-2">
                  <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </span>
                  What's Included
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  {tour.inclusions?.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 md:gap-3 text-slate-700 font-medium text-xs md:text-sm">
                      <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-rose-50/50 rounded-[2rem] p-6 md:p-8 border border-rose-100">
                <h3 className="text-lg md:text-xl font-black text-slate-900 mb-4 md:mb-6 flex items-center gap-2">
                  <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                    <X className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </span>
                  What's Excluded
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  {tour.exclusions?.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 md:gap-3 text-slate-700 font-medium text-xs md:text-sm">
                      <X className="w-3.5 h-3.5 md:w-4 md:h-4 text-rose-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Sidebar Booking Form */}
          <div className="lg:col-span-1">
             <div className="sticky top-24 space-y-8">
               <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-indigo-100 border border-slate-100 overflow-hidden relative">
                 <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                 
                 <h3 className="text-xl font-black text-slate-900 mb-2">Book This Tour</h3>
                 <p className="text-slate-500 text-sm mb-6">Fill the form below or contact us directly.</p>
                 
                 <BookingForm />
                 
                 <div className="mt-8 pt-6 border-t border-slate-100 text-center space-y-4">
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Or Call Us Directly</p>
                   <a 
                     href={`tel:${PHONE_NUMBER}`} 
                     className="flex items-center justify-center gap-3 text-slate-900 font-black text-xl hover:text-indigo-600 transition-colors"
                   >
                     <Phone className="w-5 h-5 text-indigo-600" />
                     {PHONE_NUMBER}
                   </a>
                 </div>
               </div>

               <div className="bg-indigo-900 rounded-[2rem] p-8 text-white text-center relative overflow-hidden">
                 <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                 <h3 className="text-lg font-bold mb-4 relative z-10">Need a Custom Plan?</h3>
                 <p className="text-indigo-200 text-sm mb-6 relative z-10">
                   We can customize this itinerary to suit your specific preferences and schedule.
                 </p>
                 <a 
                   href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I am interested in customizing the ${tour.title}`}
                   target="_blank"
                   className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-900 font-bold rounded-xl hover:bg-indigo-50 transition-colors relative z-10"
                 >
                   <MessageCircle className="w-4 h-4" />
                   Chat on WhatsApp
                 </a>
               </div>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
