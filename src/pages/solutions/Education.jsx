    import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, GraduationCap, BookOpen, School, Target } from "lucide-react";
import dashboardImage from "../../assets/dashboard2.webp";
import FeatureCTA from "../../components/FeatureCTA";
import PageHero from "../../components/PageHero";
import karyaupLogo from "../../assets/logo-svg.svg";

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

export default function Education() {
  const [isHovered, setIsHovered] = useState(false);

  // Background pattern rows
  const infiniteText = "KaryaUp ".repeat(20);
  const rows = Array(12).fill(infiniteText);

  const oldWayItems = [
    'Scattered physical notebooks', 'Fragmented lesson planning', 'Manual grading & slow feedback',
    'Lost assignments in emails', 'Rigid, one-size-fits-all teaching', 'Difficulty tracking progress', 'Siloed administrative data'
  ];

  const newWayItems = [
    'One digital hub for all courses', 'AI-powered lesson templates', 'Instant feedback loops',
    'Interactive digital whiteboards', 'Personalized learning paths', 'Real-time student analytics', 'Automated admin workflows'
  ];

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <PageHero
        pillText="Solutions / Education"
        titleBlack="Simplify"
        titleGradient="Education Management"
        descriptionList={[
          "Manage academic and administrative resources in one place with KaryaUp's time-saving work tools.",
          "From admissions to graduation, keep every step connected."
        ]}
        tags={["Admissions", "Learning", "Administration", "Outcomes"]}
        imageSrc={dashboardImage}
        imageAlt="Education Dashboard"
      />

      {/* ================= REIMAGINED COMPARISON SECTION (MOVED UP) ================= */}
      <section className="py-6 px-2 bg-white overflow-hidden"> 
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4">
              Project Management<br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                is broken, we fixed it
              </motion.span>
            </h1>
          </motion.div>

          <div className="p-[2px] rounded-[3rem] bg-gradient-to-br from-purple-400 via-fuchsia-400 to-indigo-500 shadow-2xl">
            {/* Added items-start and reduced min-h to shift text upward */}
            <div className="bg-slate-50 rounded-[2.9rem] overflow-hidden flex flex-col md:flex-row items-start justify-between min-h-[400px] relative">

              {/* 1. LEFT SIDE: Old Way */}
              <div className="w-full md:w-[35%] p-5 pt-10 z-10 bg-white/40 border-r border-slate-200">
                <h3 className="text-2xl font-black text-slate-900 mb-1 text-center">The Old Way</h3>
                <p className="text-[10px] text-slate-500 mb-6 text-center uppercase tracking-widest font-bold">Manual updates cause friction.</p>
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-slate-50 via-transparent to-slate-50 opacity-80" />
                  <motion.div
                    animate={{ y: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                    className="flex flex-col gap-3"
                  >
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
                className="w-full md:w-[30%] flex flex-col items-center relative py-10 px-4 overflow-hidden self-stretch"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Background Text - Layered Behind */}
                <div className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-700 flex flex-col justify-center ${isHovered ? "opacity-20" : "opacity-0"}`}>
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

                {/* Shield Content - Layered in Front */}
                <div className="relative z-10 flex flex-col items-center w-full text-center">
                  <h3 className={`text-xl md:text-2xl font-black mb-1 transition-colors duration-500 ${isHovered ? "text-fuchsia-500" : "text-slate-900"}`}>
                    Security you can Trust
                  </h3>
                  <p className={`text-[11px] mb-4 font-medium transition-colors duration-500 ${isHovered ? "text-purple-500" : "text-slate-500"}`}>
                    More secure than using AI directly.
                  </p>

                  <div className="relative flex items-center justify-center w-full h-56" style={{ perspective: "1000px" }}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-80 scale-90">
                      <LightShield3D />
                    </div>
                    <motion.img
                      src={karyaupLogo}
                      alt="KaryaUp Logo"
                      animate={{ rotateY: 360, scale: isHovered ? 1.05 : 0.9 }}
                      transition={{ rotateY: { duration: 8, ease: "linear", repeat: Infinity }, scale: { duration: 0.4 } }}
                      className="w-32 h-32 md:w-40 md:h-40 object-contain z-30 drop-shadow-[0_15px_35px_rgba(168,85,247,0.4)]"
                      style={{ transformStyle: "preserve-3d" }}
                    />
                    <div className={`absolute w-32 h-32 bg-fuchsia-500/20 rounded-full blur-3xl transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`} />
                  </div>
                </div>
              </div>

              {/* 3. RIGHT SIDE: KaryaUp Way */}
              <div className="w-full md:w-[35%] p-8 pt-10 z-10 bg-white/40 border-l border-slate-200">
                <h3 className="text-2xl font-black text-slate-900 mb-1 text-center">The KaryaUp Way</h3>
                <p className="text-[10px] text-slate-500 mb-6 text-center uppercase tracking-widest font-bold">Advanced execution loops for growth.</p>
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-slate-50 via-transparent to-slate-50 opacity-80" />
                  <motion.div
                    animate={{ y: ["-50%", "0%"] }}
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                    className="flex flex-col gap-3"
                  >
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

      {/* ================= EDUCATION LIFECYCLE ================= */}
      <section className="w-full py-24 px-6 lg:px-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
          >
            Streamline the <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Education Lifecycle
            </motion.span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-4 gap-10 text-center">
          {[
            { title: "Admissions", desc: "Simplify applications and intake with automated workflows.", icon: <BookOpen className="mx-auto text-purple-600" size={32} /> },
            { title: "Learning", desc: "Centralize coursework, assignments, and collaboration.", icon: <GraduationCap className="mx-auto text-purple-600" size={32} /> },
            { title: "Administration", desc: "Manage schedules, resources, and compliance with ease.", icon: <School className="mx-auto text-purple-600" size={32} /> },
            { title: "Outcomes", desc: "Track performance, visualize progress, and celebrate success.", icon: <Target className="mx-auto text-purple-600" size={32} /> },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8 border hover:shadow-xl transition group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform">{step.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </motion.div>
          ))}
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