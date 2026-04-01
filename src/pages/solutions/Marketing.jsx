import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, XCircle } from "lucide-react";
import dashboardImage from "../../assets/dashboard2.webp";
import planImage from "../../assets/Gantt.webp";
import FeatureCTA from "../../components/FeatureCTA";
import karyaupLogo from "../../assets/3D-Logo.webp";

// Helper for the Shield SVG
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

export default function MarketingPage() {
  const [isHovered, setIsHovered] = useState(false);

  // Background pattern rows
  const infiniteText = "KaryaUp ".repeat(20);
  const rows = Array(12).fill(infiniteText);

  const oldWayItems = [
    'Campaigns scattered across tools',
    'Siloed asset approvals',
    'Manual performance reporting',
    'Missed launch dates',
    'Disconnected creative briefs',
    'Budget tracking errors'
  ];

  const newWayItems = [
    'One platform for assets & execution',
    'Automated approval workflows',
    'AI-powered ROI insights',
    'Accelerated speed-to-market',
    'Real-time budget visibility',
    'Seamless cross-channel sync'
  ];

  return (
    <div className="bg-white font-sans overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              The everything app <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                for Marketing Teams
              </motion.span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Brainstorm, plan, and execute your team's marketing programs—from multi-channel campaigns to global events and more with KaryaUp.
            </p>
            <Link
              to="/start"
              className="group relative z-10 flex h-[3.5em] w-[14em] items-center justify-center overflow-hidden rounded-[30em] font-bold text-[15px] transition-all duration-300 mx-auto lg:mx-0"
              style={{ boxShadow: "6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff" }}
            >
              <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#7e22ce] to-fuchsia-500" />
              <div className="absolute left-0 top-0 -z-10 h-full w-0 rounded-[30em] bg-white transition-all duration-500 ease-in-out group-hover:w-full" />
              <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-slate-800">
                Get Started
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img src={dashboardImage} alt="Dashboard" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 1: VISUAL ROI ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50">
                <img src={planImage} alt="Gantt Planning" className="w-full h-auto" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
                Visualize your<br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Marketing ROI
                </motion.span>
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Stop guessing which campaigns work. Align your budget with performance data using our built-in marketing analytics.
              </p>
              <ul className="space-y-4">
                {['Multi-channel Attribution', 'Real-time Budget Tracking', 'Customizable KPI Dashboards'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-bold text-slate-800 justify-center lg:justify-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= REIMAGINED COMPARISON SECTION ================= */}
      {/* ================= COMPARISON SECTION ================= */}
      <section className="py-12 px-2 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Heading section remains the same */}

          <div className="p-[2px] rounded-[3rem] bg-gradient-to-br from-purple-400 via-fuchsia-400 to-indigo-500 shadow-2xl">
            {/* REDUCED min-h for a smaller box size */}
            <div className="bg-slate-50 rounded-[2.9rem] overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-[450px] relative">

              {/* 1. LEFT SIDE: Old Way */}
              <div className="w-full md:w-[30%] p-8 z-10 bg-white/40 border-r border-slate-200">
                <h3 className="text-2xl font-black text-slate-900 mb-2 text-center">Old Way</h3>
                <p className="text-[12px] text-slate-500 mb-6 text-center">Manual updates cause friction.</p>
                <div className="h-60 overflow-hidden relative">
                  <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-slate-50 via-transparent to-slate-50 opacity-80" />
                  <motion.div animate={{ y: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }} className="flex flex-col gap-3">
                    {[...oldWayItems, ...oldWayItems].map((item, i) => (
                      <div key={i} className="p-3 bg-white/60 backdrop-blur-md rounded-xl border border-red-100 flex items-center gap-3 shadow-sm">
                        <XCircle className="text-red-500 shrink-0" size={16} />
                        <span className="text-slate-700 font-bold text-[12px]">{item}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* 2. MIDDLE SIDE: Shield + Dynamic Text Color */}
              <div
                className="w-full md:w-[35%] flex flex-col items-center justify-center relative py-10 px-8 overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Infinity Text Background */}
                <div className={`absolute inset-0 pointer-events-none transition-opacity duration-700 flex flex-col justify-center ${isHovered ? "opacity-20" : "opacity-0"}`}>
                  {rows.map((row, i) => (
                    <motion.div
                      key={i}
                      animate={{ x: i % 2 === 0 ? [-100, 0] : [0, -100] }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                      className="whitespace-nowrap text-purple-400 font-semibold text-lg py-1 select-none"
                    >
                      {row}
                    </motion.div>
                  ))}
                </div>

                <div className="relative z-20 flex flex-col items-center">
                  {/* UPDATED: Dynamic Color Change on Hover */}
                  <h3 className={`text-2xl font-black mb-1 text-center transition-colors duration-500 ${isHovered ? "text-fuchsia-500" : "text-slate-900"
                    }`}>
                    Security you can Trust
                  </h3>
                  <p className={`text-[12px] mb-6 text-center font-medium transition-colors duration-500 ${isHovered ? "text-purple-500" : "text-slate-500"
                    }`}>
                    More secure than using AI directly.
                  </p>

                  {/* SHIELD: Reduced container height */}
                  <div className="relative flex items-center justify-center w-full h-64" style={{ perspective: "1000px" }}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-80">
                      <LightShield3D />
                    </div>
                    <motion.img
                      src={karyaupLogo}
                      alt="KaryaUp Logo"
                      animate={{ rotateY: 360, scale: isHovered ? 1.1 : 0.95 }}
                      transition={{ rotateY: { duration: 8, ease: "linear", repeat: Infinity }, scale: { duration: 0.4 } }}
                      className="w-40 h-40 md:w-48 md:h-48 object-contain z-30 drop-shadow-[0_15px_35px_rgba(168,85,247,0.4)]"
                      style={{ transformStyle: "preserve-3d" }}
                    />
                    <div className={`absolute w-40 h-40 bg-fuchsia-500/20 rounded-full blur-3xl transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`} />
                  </div>
                </div>
              </div>

              {/* 3. RIGHT SIDE: KaryaUp Way */}
              <div className="w-full md:w-[35%] p-8 z-10 bg-white/40 border-l border-slate-200">
                <h3 className="text-2xl font-black text-slate-900 mb-2 text-center">The KaryaUp Way</h3>
                <p className="text-[12px] text-slate-500 mb-6 text-center">Advanced execution loops for growth.</p>
                <div className="h-60 overflow-hidden relative">
                  <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-slate-50 via-transparent to-slate-50 opacity-80" />
                  <motion.div animate={{ y: ["-50%", "0%"] }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }} className="flex flex-col gap-3">
                    {[...newWayItems, ...newWayItems].map((item, i) => (
                      <div key={i} className="p-3 bg-white/80 backdrop-blur-md rounded-xl border border-purple-200 flex items-center gap-3 shadow-sm">
                        <CheckCircle2 className="text-green-500 shrink-0" size={16} />
                        <span className="text-purple-900 font-bold text-[12px]">{item}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <FeatureCTA
        title="Tasks that connect to everything you do"
        description="Work Smarter with tasks that can live in your whiteboards, chat, calendar - anywhere you work"
        image={dashboardImage}
        imageAlt="KaryaUp dashboard"
        containerClassName="mt-10 mb-20"
        paddingClassName="p-3 lg:p-4 lg:py-6"
        imageClassName="w-full max-w-[940px]"
        imageOuterClassName="relative w-full flex justify-center translate-y-8"
      />
    </div>
  );
}