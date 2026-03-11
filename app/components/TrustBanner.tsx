"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, PhoneCall, Award } from "lucide-react";
import { PHONE_NUMBER } from "../../constants";

const TrustBanner: React.FC = () => {
  return (
    <div className="bg-amber-400 py-4 overflow-hidden relative border-y border-amber-500/20">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none text-slate-900/5">
        <div className="absolute top-[-50%] left-[-10%] w-[40%] h-[200%] bg-white skew-x-12 blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-slate-900">
          
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 md:gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-slate-900/10 flex items-center justify-center backdrop-blur-sm border border-slate-900/5">
                <ShieldCheck className="w-5 h-5 text-indigo-700" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest font-bold text-slate-700 opacity-80">Trusted by</div>
                <div className="text-sm md:text-base font-black italic">5000+ Travelers</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-slate-900/10 flex items-center justify-center backdrop-blur-sm border border-slate-900/5">
                <Clock className="w-5 h-5 text-indigo-700" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest font-bold text-slate-700 opacity-80">Available</div>
                <div className="text-sm md:text-base font-black italic">24/7 Service</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 hidden sm:flex"
            >
              <div className="w-10 h-10 rounded-full bg-slate-900/10 flex items-center justify-center backdrop-blur-sm border border-slate-900/5">
                <Award className="w-5 h-5 text-indigo-700" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest font-bold text-slate-700 opacity-80">Experience</div>
                <div className="text-sm md:text-base font-black italic">15+ Years</div>
              </div>
            </motion.div>
          </div>

          <motion.a 
            href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
            id="trust-banner-call-link"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-slate-900 text-amber-400 px-6 py-3 rounded-2xl font-black transition-all shadow-xl shadow-amber-900/10 group"
          >
            <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-slate-900 group-hover:rotate-12 transition-transform">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-tighter leading-none opacity-70">Direct Call</span>
              <span className="text-base md:text-lg leading-tight">{PHONE_NUMBER}</span>
            </div>
          </motion.a>

        </div>
      </div>
    </div>
  );
};

export default TrustBanner;
