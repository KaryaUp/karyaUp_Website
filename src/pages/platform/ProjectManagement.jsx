                                                  import { useRef, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import dashboardImage from "../../assets/dashboard2.png";
import planImage from "../../assets/Gantt.png";
import karyaUpLogo from "../../assets/Logo(2).png";
import FeatureCTA from "../../components/FeatureCTA";

/* ═══════════════════════════════════════════════
   ICONS
═══════════════════════════════════════════════ */
const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><polyline points="3,9 7,13 13,5" /></svg>
);
const XIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" width="13" height="13"><line x1="4" y1="4" x2="12" y2="12" /><line x1="12" y1="4" x2="4" y2="12" /></svg>
);
const ListIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" width="11" height="11">
    <line x1="5" y1="4" x2="13" y2="4" /><line x1="5" y1="8" x2="13" y2="8" /><line x1="5" y1="12" x2="13" y2="12" />
    <circle cx="2.5" cy="4" r="1" fill="currentColor" stroke="none" />
    <circle cx="2.5" cy="8" r="1" fill="currentColor" stroke="none" />
    <circle cx="2.5" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);

/* ═══════════════════════════════════════════════
   LIGHT 3D GLASS SHIELD COMPONENT
═══════════════════════════════════════════════ */
const LightShield3D = () => (
  <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-56 h-64 md:w-64 md:h-72 drop-shadow-[0_25px_50px_rgba(0,0,0,0.15)]">
    <defs>
      <linearGradient id="glassBorderGradient" x1="100" y1="10" x2="100" y2="208" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F472B6" stopOpacity="0.4" />
        <stop offset="0.5" stopColor="white" stopOpacity="0.2" />
        <stop offset="1" stopColor="#A855F7" stopOpacity="0.4" />
      </linearGradient>
      <linearGradient id="glassFrostGradient" x1="100" y1="20" x2="100" y2="200" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.4" />
        <stop offset="1" stopColor="white" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    {/* Outer Prismatic Rim */}
    <path 
      d="M100 10 L182 42 L182 108 C182 154 146 190 100 208 C54 190 18 154 18 108 L18 42 Z" 
      fill="white" 
      fillOpacity="0.05" 
      stroke="url(#glassBorderGradient)" 
      strokeOpacity="0.5" 
      strokeWidth="2" 
    />
    {/* Inner Frosted Surface */}
    <path 
      d="M100 20 L174 48 L174 108 C174 150 140 183 100 200 C60 183 26 150 26 108 L26 48 Z" 
      fill="url(#glassFrostGradient)" 
      stroke="white" 
      strokeOpacity="0.1" 
    />
  </svg>
);

/* ═══════════════════════════════════════════════
   GLASSMORPHISM CARD
═══════════════════════════════════════════════ */
function Card({ data, type }) {
  const isRed = type === "red";
  return (
    <div className="relative group overflow-hidden rounded-xl">
      <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-xl p-3 flex items-start gap-3 shrink-0 w-full shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] transition-all duration-300">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
          isRed ? "bg-red-500/20 border-red-500/50 text-red-600" : "bg-green-500/20 border-green-500/50 text-green-600"
        }`}>
          {isRed ? <XIcon /> : <CheckIcon />}
        </div>
        <div className="flex-1 min-w-0 text-left">
          <div className="text-[13px] font-bold text-slate-900 truncate">{data.title}</div>
          <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1.5 font-medium">
            <span>{data.time}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="flex items-center gap-1"><ListIcon /> {data.tag}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   INTERNAL HELPERS
═══════════════════════════════════════════════ */
function ScrollTrack({ cards, direction }) {
  const trackRef = useRef(null);
  const posRef = useRef(direction === "up" ? -50 : 0);
  const doubled = useMemo(() => [...cards, ...cards], [cards]);

  useEffect(() => {
    const speed = 0.045;
    const animate = () => {
      if (direction === "down") {
        posRef.current -= speed;
        if (posRef.current <= -50) posRef.current = 0;
      } else {
        posRef.current += speed;
        if (posRef.current >= 0) posRef.current = -50;
      }
      if (trackRef.current) trackRef.current.style.transform = `translateY(${posRef.current}%)`;
      requestAnimationFrame(animate);
    };
    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [direction]);

  return (
    <div className="h-[280px] overflow-hidden relative">
      <div className="relative h-full" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}>
        <div ref={trackRef} className="flex flex-col gap-3 py-2 will-change-transform">
          {doubled.map((card, i) => <Card key={i} data={card} type={direction === "down" ? "red" : "green"} />)}
        </div>
      </div>
    </div>
  );
}

function ScrollingDataBg({ isHovered }) {
  const text = "1=2-LwuS0AkLC6Vvj|hq5tCReRo6%bcvnvjddjru4ndjenck4ndkvk4kdkvs57g57rh]fu8474ghfh44yfdjee3wwkxncfuregdy74hdncnrs3loxmen4jdjcfvmnvsdjfsw8sdjidw8didwd8cd0edjcdc9dv{fgH$#6(XiK^!8W3jLlZ2th%q2IYMb<5*P4AhV8oIMq7@Pw47Wf#40-zX@qj(2b5KgK840SXQfFTq6ce3R#k$8wujFFHU8t9%FUDBg>ej|ABYK6)3i^fzSh(0*X4BYRNOea)nsVUCYnV}MHe|+uCHdW&P$zL|+ssBNgZGMY<}]eYYV]T7j]B*4%&=GLmabFcv|]F9Z$/pRvN}O!3MY8k@FT";
  const repeated = Array(20).fill(text).join(' ');

  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.08] pointer-events-none px-4">
      <div className={`text-[10px] leading-relaxed text-slate-900 break-all transition-all duration-700 ${isHovered ? 'animate-[vScroll_12s_linear_infinite]' : 'animate-[vScroll_45s_linear_infinite]'}`}>
        <p>{repeated}</p>
        <p>{repeated}</p>
      </div>
    </div>
  );
}

export default function ProjectManagement() {
  const [isShieldHovered, setIsShieldHovered] = useState(false);

  const redCards = [
    { title: "Projects scattered across multiple tools", time: "8:06:41 PM", tag: "Bug Fixes" },
    { title: "Critical info hidden in siloed systems", time: "8:12:45 PM", tag: "New task" },
    { title: "Manual updates strain capacity", time: "7:55:10 PM", tag: "Data Sync" },
    { title: "Missed deadlines cause bottlenecks", time: "7:40:03 PM", tag: "Security" },
    { title: "Rate limit exceeded", time: "7:20:50 PM", tag: "API" },
  ];

  const greenCards = [
    { title: "All projects, docs, and chat in one platform", time: "8:05:28 PM", tag: "Data Sync" },
    { title: "Instantly find anything across all tools", time: "8:04:15 PM", tag: "Weekly Stats" },
    { title: "Automated reporting & resource management", time: "7:58:00 PM", tag: "Production" },
    { title: "Backup finished", time: "7:45:22 PM", tag: "Storage" },
    { title: "AI-powered workflows for tasks & timelines", time: "7:30:11 PM", tag: "Users" },
    { title: "Cache cleared successfully", time: "7:18:40 PM", tag: "Performance" },
  ];

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes vScroll { from { transform: translateY(0); } to { transform: translateY(-50%); } }
        @keyframes shine { from { left: -100%; } to { left: 100%; } }
      `}} />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
              The world's most powerful & flexible
              <motion.span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 bg-[length:200%_auto]" animate={{ backgroundPosition: ["0% center", "-200% center"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                Project Management Software
              </motion.span>
            </motion.h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Manage your projects, docs, and chat in one place all powered by AI. KaryaUp adapts to any project, eliminates busywork, and keeps everything organized.
            </p>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            <img src={dashboardImage} alt="Dashboard" className="w-full h-auto" />
          </motion.div>
        </div>
      </section>

      {/* Security Grid Section */}
      <section className="py-16 bg-white px-2 md:px-4">
        <div className="text-center max-w-7xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
              Built for Security,
              <motion.span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 bg-[length:200%_auto]" animate={{ backgroundPosition: ["0% center", "-200% center"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
              Transparency & Intelligence
              </motion.span>
            </motion.h1>

          <div className="p-[2px] rounded-[2.5rem] bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 shadow-2xl">
            <div className="bg-slate-50 rounded-[2.4rem] overflow-hidden grid grid-cols-1 md:grid-cols-3 min-h-[600px]">
              
              {/* LEFT: OLD WAY */}
              <div className="p-8 border-r border-slate-200 flex flex-col justify-center bg-white/50">
                <h3 className="text-center text-3xl font-black mb-2 text-slate-900">Old Way</h3>
                <p className="text-sm text-center text-slate-500 mb-8">Manual updates and scattered tools cause friction.</p>
                <ScrollTrack cards={redCards} direction="down" />
              </div>

              {/* MIDDLE: THE SHIELD (Updated to Light Glass) */}
              <div 
                className="relative flex flex-col items-center justify-center py-16 px-8 group overflow-hidden bg-slate-50"
                onMouseEnter={() => setIsShieldHovered(true)}
                onMouseLeave={() => setIsShieldHovered(false)}
              >
                <div className="relative z-40 text-center mb-8">
                  <h3 className="text-3xl font-black text-slate-900">Security you can Trust</h3>
                  <p className="text-sm text-slate-500 mt-2">More secure than using AI directly.</p>
                </div>

                <ScrollingDataBg isHovered={isShieldHovered} />

                <div className="relative z-80 flex items-center justify-center transition-all duration-500 group-hover:scale-105">
                  <div className="backdrop-blur-xl">
                    <LightShield3D />
                  </div>
                  
                  {/* Logo Centered & Scaled Up */}
                  <div className="absolute inset-0 flex items-center justify-center pb-6 z-10 pointer-events-none">
                    <img 
                      src={karyaUpLogo} 
                      alt="Logo" 
                      className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]" 
                    />
                  </div>

                  {/* Reflection Sweep */}
                  <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-[shine_4s_infinite]" />
                  </div>
                </div>
              </div>

              {/* RIGHT: KARYAUP WAY */}
              <div className="p-8 border-l border-slate-200 flex flex-col justify-center bg-white/50">
                <h3 className="text-center text-3xl font-black mb-2 text-slate-900">The KaryaUp Way</h3>
                <p className="text-sm text-center text-slate-500 mb-8">Advanced execution loops for smarter growth.</p>
                <ScrollTrack cards={greenCards} direction="up" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <img src={planImage} alt="Planning" className="w-full h-auto" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Why Choose <span className="text-purple-600">KaryaUp?</span></h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              KaryaUp isn't just another project management tool. It's a productivity ecosystem designed to empower teams with clarity and speed.
            </p>
            <ul className="space-y-4 text-slate-700 font-medium">
              <li className="flex items-center gap-3"><CheckIcon /> AI-powered automation for repetitive tasks</li>
              <li className="flex items-center gap-3"><CheckIcon /> Seamless integration with your favorite apps</li>
              <li className="flex items-center gap-3"><CheckIcon /> Real-time collaboration across teams</li>
              <li className="flex items-center gap-3"><CheckIcon /> Secure, scalable, and built for growth</li>
            </ul>
          </div>
        </div>
      </section>

      <FeatureCTA
        title="Tasks that connect to everything you do"
        description="Work smarter with tasks that can live in your whiteboards, chat, calendar — anywhere you work"
        image={dashboardImage}
        containerClassName="my-20"
      />
    </div>   
  );
}