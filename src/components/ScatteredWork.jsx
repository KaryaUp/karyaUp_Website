"use client";

import React from 'react';
import { motion } from "framer-motion";
import {
  CheckCircle2, AlertCircle,
  X, Check
} from "lucide-react";
import IntegrationReveal from './IntegrationReveal';

export default function ScatteredWork() {
  return (
    <section className="w-full !py-0 px-2 sm:px-6 bg-white relative font-sans">
      <div className="max-w-7xl mx-auto relative z-10 py-6 sm:py-10 lg:py-6">
        
        {/* Header Section — Back on White BG */}
        <div className="text-center pb-6 sm:pb-10 lg:pb-16 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-[#7e22ce] bg-purple-50 px-4 py-1.5 rounded-full border border-purple-100 mb-4"
          >
            Efficiency Audit
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05]"
          >
            One System
            For<br className="hidden md:block" />{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-[#ec4899] to-[#7e22ce] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >Maximum Output.
            </motion.span>
          </motion.h2>
        </div>

        {/* Bottom Dark Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem] border border-purple-900/30 shadow-2xl shadow-purple-900/20"
          style={{ background: "#020617" }}
        >
          {/* Ambient Glows */}
          <div className="pointer-events-none absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[80px] -z-0" />
          <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 bg-fuchsia-600/10 rounded-full blur-[80px] -z-0" />
          
          {/* Dot grid overlay */}
          <div
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(139,92,246,0.10) 1px, transparent 1px)",
              backgroundSize: "12px 12px",
            }}
          />

          {/* Grid Container for Dynamic Reordering */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
            
            {/* 1. Problem heading (Top Left) */}
            <div className="order-1 lg:order-1 w-full px-6 pt-8 pb-6 sm:px-10 lg:px-12 lg:pt-10 lg:pb-8 lg:border-r border-purple-900/30 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                  <AlertCircle size={18} />
                </div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-white/50">The Problem</span>
              </div>
              <h3 className="text-2xl md:text-[2rem] lg:text-[2.25rem] font-black text-white tracking-normal leading-[1.05] mb-3">
                Work Across <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >Too Many Tools.</motion.span>
              </h3>
              <p className="text-slate-400 font-medium text-sm sm:text-base leading-relaxed max-w-xl">
                The average team struggles with 8–12 tools daily.
              </p>
            </div>

            {/* 2. Negative Result (Mobile: 2nd, Desktop: bottom left) */}
            <div className="order-2 lg:order-4 w-full px-6 pt-6 pb-8 sm:px-10 lg:px-12 lg:pt-8 lg:pb-12 border-b lg:border-b-0 lg:border-r border-purple-900/30">
              <div className="group p-5 sm:p-6 rounded-2xl border border-red-500/20 bg-red-500/[0.03] flex flex-col justify-center transition-all duration-300 hover:border-red-500/40">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-400/80 mb-4 text-left">Daily Friction</p>
                <ul className="space-y-3">
                  {[
                    "30% time lost in context switching",
                    "Fragmented data & missed deadlines",
                    "Zero visibility into real performance"
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                        <X size={11} strokeWidth={3.5} />
                      </div>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

             {/* 3. IntegrationReveal (Mobile: 3rd, Desktop: Middle span) */}
             <div className="order-3 lg:order-3 lg:col-span-2 overflow-hidden">
              <IntegrationReveal className="h-[180px] sm:h-[240px] lg:h-[280px] rounded-none !bg-transparent" />
            </div>

            {/* 4. Solution heading (Mobile: 4th, Desktop: Top Right) */}
            <div className="order-4 lg:order-2 w-full px-6 pt-8 pb-6 sm:px-10 lg:px-12 lg:pt-10 lg:pb-8 border-b lg:border-b-0 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                  <CheckCircle2 size={18} />
                </div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-white/50">The Solution</span>
              </div>
              <h3 className="text-2xl md:text-[2rem] lg:text-[2.25rem] font-black text-white tracking-normal leading-[1.05] mb-3">
                One Central Hub. <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  Absolute Clarity.
                </motion.span>
              </h3>
              <p className="text-slate-400 font-medium text-sm sm:text-base leading-relaxed max-w-xl">
                KaryaUp turns your business into one unified engine.
              </p>
            </div>

            {/* 5. Positive Result (Mobile: 5th, Desktop: Bottom right) */}
            <div className="order-5 lg:order-5 w-full px-6 pt-6 pb-8 sm:px-10 lg:px-12 lg:pt-8 lg:pb-12">
              <div className="group p-5 sm:p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03] flex flex-col justify-center transition-all duration-300 hover:border-emerald-500/40">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400/80 mb-4 text-left">Instant Value</p>
                <ul className="space-y-3 text-left">
                  {[
                    "Save 30% time with automation",
                    "Unified data & guaranteed deadlines",
                    "Real-time visibility & reporting"
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                        <Check size={11} strokeWidth={3.5} />
                      </div>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
