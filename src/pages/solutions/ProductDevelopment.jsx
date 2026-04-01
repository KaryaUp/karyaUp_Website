 import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import dashboardImage from "../../assets/dashboard2.webp";
import FeatureCTA from "../../components/FeatureCTA";
import karyaupLogo from "../../assets/3D-Logo.webp"; 

const textGradient =
  "text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]";

const oldWayItems = [
  "Critical info hidden in siloed systems",
  "Manual updates strain capacity",
  "Missed deadlines cause bottlenecks",
  "Rate limit exceeded",
  "Projects scattered across multiple tools",
  "Data sync failures",
];

const newWayItems = [
  "Cache cleared successfully",
  "All projects, docs, and chat in one platform",
  "Instantly find anything across all tools",
  "Automated reporting & resource management",
  "AI-powered workflows",
  "Advanced execution loops",
];

const LightShield3D = () => (
  <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-56 h-64 md:w-64 md:h-72 drop-shadow-[0_25px_50px_rgba(0,0,0,0.12)]">
    <defs>
      <linearGradient id="shieldGrad" x1="100" y1="10" x2="100" y2="208" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F472B6" stopOpacity="0.4" />
        <stop offset="1" stopColor="#A855F7" stopOpacity="0.4" />
      </linearGradient>
    </defs>
    <path d="M100 10 L182 42 L182 108 C182 154 146 190 100 208 C54 190 18 154 18 108 L18 42 Z" fill="white" fillOpacity="0.05" stroke="url(#shieldGrad)" strokeOpacity="0.8" strokeWidth="2" />
  </svg>
);

export default function ProductDevelopment() {
  const [isHovered, setIsHovered] = useState(false);

  const infiniteText = "KaryaUp ".repeat(15);
  const rows = Array(12).fill(infiniteText);

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
            >
              The everything app<br />
              <motion.span
                className={textGradient}
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                for software teams
              </motion.span>
            </motion.h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Get real-time visibility into your revenue, expenses, and margins
              with KaryaUp. Analyze profitability across projects, teams, and
              clients.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-2">
              <img src={dashboardImage} alt="KaryaUp Dashboard" className="rounded-xl w-full h-auto object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= COMPARISON SECTION ================= */}
      <section className="py-17 px-2 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40, x: -10 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 25, stiffness: 100 }}
            className="text-center text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-12 drop-shadow-sm"
          >
            Project Management<br />
            <motion.span
              className={textGradient}
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              is broken, we fixed it
            </motion.span>
          </motion.h1>

          <div className="p-[2px] rounded-[3rem] bg-gradient-to-br from-purple-400 via-fuchsia-400 to-indigo-500 shadow-2xl">
            <div className="bg-slate-50 rounded-[2.9rem] overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-[200px] relative">
              
              {/* 1. LEFT SIDE: Old Way */}
              <div className="w-full md:w-[30%] p-10 z-10 bg-white/40 border-r border-slate-200">
                <h3 className="text-3xl font-black text-slate-900 mb-2 text-center">Old Way</h3>
                <p className="text-sm text-slate-500 mb-8 text-center">Manual updates cause friction.</p>
                <div className="h-72 overflow-hidden relative">
                  <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-slate-50 via-transparent to-slate-50 opacity-80" />
                  <motion.div animate={{ y: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }} className="flex flex-col gap-4">
                    {[...oldWayItems, ...oldWayItems].map((item, i) => (
                      <div key={i} className="p-4 bg-white/60 backdrop-blur-md rounded-xl border border-red-100 flex items-center gap-3 shadow-sm">
                        <XCircle className="text-red-500 shrink-0" size={18} />
                        <span className="text-slate-700 font-bold text-[13px]">{item}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* 2. MIDDLE SIDE: Shield + Infinite Background Text */}
              <div 
                className="w-full md:w-[30%] flex flex-col items-center justify-center relative py-16 px-8 overflow-hidden min-h-[500px]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className={`absolute inset-0 pointer-events-none transition-opacity duration-700 flex flex-col justify-center ${isHovered ? "opacity-20" : "opacity-0"}`}>
                  {rows.map((row, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: i % 2 === 0 ? 0 : -100 }}
                      animate={{ x: i % 2 === 0 ? -100 : 0 }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                      className="whitespace-nowrap text-purple-400 font-semibold text-lg py-1 select-none"
                    >
                      {row} {row}
                    </motion.div>
                  ))}
                </div>

                <div className="relative z-20 flex flex-col items-center">
                  {/* TEXT COLOR CHANGE ON HOVER */}
                  <h3 className={`text-2xl font-black mb-2 text-center transition-colors duration-500 ${isHovered ? "text-[#F472B6]" : "text-slate-900"}`}>
                    Security you can Trust
                  </h3>
                  <p className={`text-sm mb-8 text-center font-medium transition-colors duration-500 ${isHovered ? "text-[#A855F7]" : "text-slate-500"}`}>
                    More secure than using AI directly.
                  </p>
                  
                  <div className="relative flex items-center justify-center w-full h-72" style={{ perspective: "1000px" }}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-80">
                      <LightShield3D />
                    </div>
                    <motion.img 
                      src={karyaupLogo} 
                      alt="KaryaUp Logo" 
                      animate={{ rotateY: 360, scale: isHovered ? 1.15 : 1 }} 
                      transition={{ rotateY: { duration: 8, ease: "linear", repeat: Infinity }, scale: { duration: 0.4 } }} 
                      className="w-44 h-44 md:w-52 md:h-52 object-contain z-30 drop-shadow-[0_15px_35px_rgba(168,85,247,0.5)]" 
                      style={{ transformStyle: "preserve-3d" }} 
                    />
                    <div className={`absolute w-48 h-48 bg-fuchsia-500/20 rounded-full blur-3xl transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`} />
                  </div>
                </div>
              </div>

              {/* 3. RIGHT SIDE: KaryaUp Way */}
              <div className="w-full md:w-[35%] p-10 z-10 bg-white/40 border-l border-slate-200">
                <h3 className="text-3xl font-black text-slate-900 mb-2 text-center">The KaryaUp Way</h3>
                <p className="text-sm text-slate-500 mb-8 text-center">Advanced execution loops for growth.</p>
                <div className="h-72 overflow-hidden relative">
                  <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-slate-50 via-transparent to-slate-50 opacity-80" />
                  <motion.div animate={{ y: ["-50%", "0%"] }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }} className="flex flex-col gap-4">
                    {[...newWayItems, ...newWayItems].map((item, i) => (
                      <div key={i} className="p-4 bg-white/80 backdrop-blur-md rounded-xl border border-purple-200 flex items-center gap-3 shadow-sm">
                        <CheckCircle2 className="text-green-500 shrink-0" size={18} />
                        <span className="text-purple-900 font-bold text-[13px]">{item}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureCTA title="Tasks that connect to everything" description="Work smarter with unified tasks." image={dashboardImage} imageAlt="KaryaUp dashboard" containerClassName="my-20" />
    </div>
  );
}