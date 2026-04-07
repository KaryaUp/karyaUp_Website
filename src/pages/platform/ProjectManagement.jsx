 import { useRef, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import dashboardImage from "../../assets/dashboard2.webp";
import planImage from "../../assets/Gantt.webp";
import karyaUpLogo from "../../assets/logo-svg.svg";

import FeatureCTA from "../../components/FeatureCTA";
import { Smile } from "lucide-react";
import { Sparkles, BrainCircuit, Zap, Search, ShieldCheck, Check } from "lucide-react";

/* ═══════════════════════════════════════════════
   COMPONENTS
═══════════════════════════════════════════════ */
const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-1, 1], [12, -12]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-12, 12]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;   // -1 … 1
    const y = ((e.clientY - rect.top)  / rect.height) * 2 - 1;
    rawX.set(x);
    rawY.set(y);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', transformPerspective: 1000 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={className}
    >
      <div style={{ transform: 'translateZ(30px)' }} className="h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════
   ICONS
═══════════════════════════════════════════════ */
const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
    <polyline points="3,9 7,13 13,5" />
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" width="13" height="13">
    <line x1="4" y1="4" x2="12" y2="12" /><line x1="12" y1="4" x2="4" y2="12" />
  </svg>
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
   LIGHT 3D GLASS SHIELD
═══════════════════════════════════════════════ */
const LightShield3D = () => (
  <svg viewBox="0 0 200 220" fill="none" className="w-full h-full drop-shadow-[0_25px_50px_rgba(0,0,0,0.12)]">
    <defs>
      <linearGradient id="glassBorderGradient" x1="100" y1="10" x2="100" y2="208" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F472B6" stopOpacity="0.4" />
        <stop offset="0.5" stopColor="white" stopOpacity="0.6" />
        <stop offset="1" stopColor="#A855F7" stopOpacity="0.4" />
      </linearGradient>
    </defs>
    <path
      d="M100 10 L182 42 L182 108 C182 154 146 190 100 208 C54 190 18 154 18 108 L18 42 Z"
      fill="white"
      fillOpacity="0.03"
      stroke="url(#glassBorderGradient)"
      strokeOpacity="0.6"
      strokeWidth="2"
    />
  </svg>
);

const getColorClasses = (color) => {
  const colorMap = {
      purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
      fuchsia: "bg-fuchsia-100 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white",
      emerald: "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
      orange: "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
      blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
      pink: "bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white"
    };
    return colorMap[color] || "bg-slate-100 text-slate-600 group-hover:bg-slate-600 group-hover:text-white";
  };
/* ═══════════════════════════════════════════════
   SUB-COMPONENTS
═══════════════════════════════════════════════ */
function Card({ data, type, index }) {
  const isRed = type === "red";
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, delay: index * 0.4, ease: "easeInOut" }}
      className="relative group rounded-xl w-full"
    >
      <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-xl p-3 flex items-start gap-3 w-full shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:border-purple-400/50">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${isRed ? "bg-red-500/20 border-red-500/50 text-red-600" : "bg-green-500/20 border-green-500/50 text-green-600"
          }`}>
          {isRed ? <XIcon /> : <CheckIcon />}
        </div>
        <div className="flex-1 min-w-0 text-left">
          <div className="text-[13px] font-bold text-slate-900 truncate">{data.title}</div>
          <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1.5 font-medium">
            <span>{data.tag}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="flex items-center gap-1"><ListIcon /> Active</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ScrollTrack({ cards, direction }) {
  const trackRef = useRef(null);
  const posRef = useRef(direction === "up" ? -25 : 0);
  const doubled = useMemo(() => [...cards, ...cards], [cards]);

  useEffect(() => {
    const speed = 0.045;
    const animate = () => {
      if (direction === "down") {
        posRef.current -= speed;
        if (posRef.current <= -25) posRef.current = 0;
      } else {
        posRef.current += speed;
        if (posRef.current >= 0) posRef.current = -25;
      }
      if (trackRef.current) trackRef.current.style.transform = `translateY(${posRef.current}%)`;
      requestAnimationFrame(animate);
    };
    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [direction]);

  return (
    <div className="h-[220px] overflow-hidden relative">
      <div className="relative h-full" style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
      }}>
        <div ref={trackRef} className="flex flex-col gap-4 py-4 will-change-transform">
          {doubled.map((card, i) => (
            <Card key={i} data={card} type={direction === "down" ? "red" : "green"} index={i % cards.length} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ScrollingDataBg({ isShieldHovered }) {
  const infinitePatternRow = "KaryaUp ".repeat(25);
  const patternRows = Array(14).fill(infinitePatternRow);

  return (
    <div className={`absolute inset-0 pointer-events-none transition-all duration-1000 flex flex-col justify-center gap-3 overflow-hidden ${isShieldHovered ? "opacity-40" : "opacity-[0.08]"
      }`}>
      {patternRows.map((pattern, i) => (
        <motion.div
          key={i}
          initial={{ x: i % 2 === 0 ? 0 : -100 }}
          animate={{ x: i % 2 === 0 ? -100 : 0 }}
          transition={{ duration: isShieldHovered ? 8 : 25, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap text-purple-700 font-normal text-sm md:text-base select-none"
        >
          {pattern} {pattern}
        </motion.div>
      ))}
    </div>
  );
}

/**
 * A reusable stacking card component with a gray glass effect and black border.
 * Features a 1.5s snappy cycle time and compact layout for hero screens.
 */
const FeatureStack = ({ items = [] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 1500); // Snappy 1.5s interval
    return () => clearInterval(timer);
  }, [items.length]);

  if (items.length === 0) return null;

  return (
    <div className="relative h-[80px] sm:h-[100px] w-full max-w-[280px] sm:max-w-[320px] mt-6 lg:mt-8 group overflow-visible">
      <AnimatePresence mode="popLayout">
        {[2, 1, 0].map((offset) => {
          const itemIndex = (index + offset) % items.length;
          const item = items[itemIndex];
          const label = typeof item === "string" ? item : item.label;
          const Icon = (typeof item === "object" && item.icon) ? item.icon : Check;

          return (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{
                opacity: offset === 0 ? 1 : offset === 1 ? 0.4 : 0.15,
                scale: 1 - offset * 0.04,
                y: offset * 12, // Compact vertical stacking for better hero-screen visibility
                zIndex: 10 - offset,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 1.05,
                transition: { duration: 0.4, ease: "easeIn" }
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: offset * 0.02
              }}
              className="absolute top-0 left-0 w-full px-5 py-3 rounded-xl bg-slate-400/10 backdrop-blur-xl border border-black/30 shadow-sm flex items-center gap-3 transition-colors duration-300 hover:bg-slate-400/20"
            >
              <div className="w-5 h-5 rounded bg-black/5 border border-black/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-3 h-3 text-black stroke-[3]" />
              </div>
              <span className="text-[11px] sm:text-[13px] font-black uppercase tracking-widest text-black">
                {label}
              </span>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

/* ═══════════════════════════════════════════════
   MAIN PAGE COMPONENT
═══════════════════════════════════════════════ */
export default function ProjectManagement() {
  const [isShieldHovered, setIsShieldHovered] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0); // For Task Workspace

  const redCards = [
    { title: "Projects scattered across tools", tag: "Inefficiency" },
    { title: "Critical info hidden in silos", tag: "Visibility" },
    { title: "Manual updates strain capacity", tag: "Labor" },
    { title: "Missed deadlines & bottlenecks", tag: "Risk" },
    { title: "Unclear resource allocation", tag: "Planning" },
  ];

  const greenCards = [
    { title: "Unified platform hub", tag: "Efficiency" },
    { title: "Instant global search", tag: "Visibility" },
    { title: "Automated report generation", tag: "Labor" },
    { title: "AI-powered timeline tracking", tag: "Growth" },
    { title: "Real-time resource analytics", tag: "Scale" },
  ];

  const features = [
    { title: "Intelligent Task Routing", desc: "Automatically assign tasks to the right team members based on capacity and skill sets." },
    { title: "Real-time Collaboration", desc: "Comment, tag, and securely share files within each task layer for instant approvals." },
    { title: "Visual Progress Tracking", desc: "Customizable boards and instant metric dashboards keep your delivery on speed." }
  ];

  // const aiFeatures = [
  //   { icon: <Sparkles className="w-5 h-5 text-purple-500" />, title: "Predictive Margins", desc: "AI forecasts future profitability based on current sprint velocity." },
  //   { icon: <BrainCircuit className="w-5 h-5 text-fuchsia-500" />, title: "Smart Allocation", desc: "Automatically maps expenses to specific projects using NLP." },
  //   { icon: <Search className="w-5 h-5 text-indigo-500" />, title: "Contextual Query", desc: "Ask 'Which project is over budget?' and get instant visual data." },
  //   { icon: <Zap className="w-5 h-5 text-amber-500" />, title: "Automated Standups", desc: "AI summarizes daily progress vs budget utilization for the team." }
  // ];

  const aiFeatures = [
    { 
      icon: <Sparkles className="w-5 h-5" />, 
      title: "Predictive Margins", 
      desc: "AI forecasts future profitability based on current sprint velocity.",
      color: "purple" 
    },
    { 
      icon: <BrainCircuit className="w-5 h-5" />, 
      title: "Smart Allocation", 
      desc: "Automatically maps expenses to specific projects using NLP.",
      color: "fuchsia" 
    },
    { 
      icon: <Search className="w-5 h-5" />, 
      title: "Contextual Query", 
      desc: "Ask 'Which project is over budget?' and get instant visual data.",
      color: "blue" 
    },
    { 
      icon: <Zap className="w-5 h-5" />, 
      title: "Automated Standups", 
      desc: "AI summarizes daily progress vs budget utilization for the team.",
      color: "orange" 
    }
  ];

  return (
    <div className="bg-white font-sans overflow-x-hidden">

      {/* Hero Section */}
      <section className="py-28 md:py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block px-2 py-1.5 rounded-full bg-purple-50 text-[11px] font-black uppercase tracking-widest text-purple-600 mb-8 border border-purple-100">
              PROJECTMANAGEMENT-
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6"
            >
              The World's most Powerful
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Project Management Software
              </motion.span>
            </motion.h1>
            <p className="text-base md:text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 font-medium">
              KaryaUp adapts to any workflow, eliminates busywork,<br /> and keeps everything organized with enterprise-<br />grade AI execution.
            </p>
            <FeatureStack
              items={[
                { label: "Intelligent Routing", icon: BrainCircuit },
                { label: "Real-time Sync", icon: Zap },
                { label: "Global Search", icon: Search },
                { label: "Enterprise Security", icon: ShieldCheck }
              ]}
            />
          </div>
        
          <div className="pb-20 lg:pb-35 max-w-7xl mx-auto grid lg:grid-cols-1 gap-8 items-center">
  {/* Text Column */}
  <div className="text-center lg:text-left"> </div>

  {/* Image Column */}
  <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="relative lg:-mr-24 xl:-mr-40"
            >
              <div className="absolute -inset-8 bg-gradient-to-tr from-[#7e22ce]/16 via-fuchsia-500/8 to-transparent blur-3xl opacity-55" />
              <div className="relative overflow-hidden border border-slate-200/80 rounded-3xl shadow-2xl shadow-slate-900/10 bg-white">
                <img
                  src={dashboardImage}
                  alt="KaryaUp task management"
                  className="w-full h-[320px] sm:h-[420px] lg:h-[500px] object-cover object-left"
                />
                {/* Right-side invisible/fade effect like reference */}
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 sm:w-44 lg:w-56 bg-gradient-to-r from-transparent via-white/70 to-white" />
              </div>
            </motion.div>
</div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-8 bg-white px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-12"
          >
            Project Management <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              is broken, we fixed it
            </motion.span>
          </motion.h2>

          <div className="p-[2px] rounded-[1.5rem] md:rounded-[2.5rem] bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 shadow-2xl overflow-hidden">
            <div className="bg-slate-50 rounded-[1.4rem] md:rounded-[2.4rem] overflow-hidden grid grid-cols-1 md:grid-cols-3">

              {/* LEFT: OLD WAY */}
              <div className="p-4 md:p-3 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col justify-start pt-10 md:pt-12 bg-white/50 order-1">
                <h3 className="text-center text-2xl font-black mb-1 text-slate-900">Old Way</h3>
                <p className="text-sm text-center text-slate-500 mb-6 font-medium">Manual updates and scattered tools.</p>
                <ScrollTrack cards={redCards} direction="down" />
              </div>

              {/* MIDDLE: 3D SHIELD & TEXT */}
              <div
                className="relative flex flex-col items-center justify-start py-10 md:py-12 px-4 group overflow-hidden bg-white/40 min-h-[450px] order-2"
                onMouseEnter={() => setIsShieldHovered(true)}
                onMouseLeave={() => setIsShieldHovered(false)}
              >
                <ScrollingDataBg isShieldHovered={isShieldHovered} />

                <div className="relative z-40 text-center mb-10 pointer-events-none">
                  <h3 className={`text-xl md:text-2xl font-black transition-colors duration-500 ${isShieldHovered ? "text-purple-600" : "text-slate-900"}`}>
                    Security You Can Trust
                  </h3>
                  <p className={`text-[10px] mt-2 font-bold uppercase tracking-widest transition-colors duration-500 ${isShieldHovered ? "text-fuchsia-500" : "text-slate-500"}`}>
                    More secure than using AI directly.
                  </p>
                </div>

                <div className="relative flex items-center justify-center w-full max-w-[200px] md:max-w-[240px] aspect-square" style={{ perspective: "1200px" }}>
                  <div className="absolute inset-0 z-10 opacity-80 scale-110">
                    <LightShield3D />
                  </div>

                  <div className="relative z-30" style={{ transformStyle: "preserve-3d" }}>

                    <video
                      src={karyaUpLogo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-30 h-34 object-cover object-contain filter drop-shadow-[0_25px_40px_rgba(168,85,247,0.3)]"
                    />
                    <motion.div
                      animate={{
                        rotateY: [0, 360],
                        y: [0, -10, 0],
                        scale: isShieldHovered ? 1.1 : 1
                      }}
                      transition={{
                        rotateY: { duration: 10, repeat: Infinity, ease: "linear" },
                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                        scale: { duration: 0.4 }
                      }}
                      className="w-40 h-40 md:w-40 md:h-40 relative"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                        <img src={karyaUpLogo} alt="Logo Front" className="w-full h-full object-contain" style={{ filter: isShieldHovered ? "drop-shadow(0 20px 50px rgba(168,85,247,0.8)) hue-rotate(220deg) brightness(1.5) contrast(1.2)" : "drop-shadow(0 20px 50px rgba(168,85,247,0.5))", transition: "filter 0.5s ease" }} />
                      </div>

                      <div className="absolute inset-0" style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg) translateZ(1px)'
                      }}>
                        <img src={karyaUpLogo} alt="Logo Back" className="w-full h-full object-contain opacity-80" style={{ filter: isShieldHovered ? "hue-rotate(220deg) brightness(1.5) contrast(1.2)" : "none", transition: "filter 0.5s ease" }} />
                      </div>
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  animate={{ scale: isShieldHovered ? 1.4 : 1, opacity: isShieldHovered ? 0.4 : 0.15 }}
                  className="absolute -bottom-40 w-64 h-64 bg-purple-400 rounded-full blur-[100px] pointer-events-none"
                />
              </div>

              {/* RIGHT: KARYAUP WAY */}
              <div className="p-4 md:p-6 border-t md:border-t-0 md:border-l border-slate-200 flex flex-col justify-start pt-10 md:pt-12 bg-white/50 order-3">
                <h3 className="text-center text-2xl font-black mb-1 text-slate-900">The KaryaUp Way</h3>
                <p className="text-sm text-center text-slate-500 mb-6 font-medium">Advanced execution loops for growth.</p>
                <ScrollTrack cards={greenCards} direction="up" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODERN TASK WORKSPACE SECTION */}
      <section className="py-8 md:py-8 px-6 bg-white relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-50 rounded-full blur-[120px] pointer-events-none opacity-50" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-[11px] font-black uppercase tracking-widest text-purple-600 mb-8 border border-purple-100">
                Unified Task Workspace
              </span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6"
              >
                Supercharge your<br />
                <motion.span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Daily Workflows.
                </motion.span>
              </motion.h1>

              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium max-w-xl">
                Centralize communication, assign dynamic tasks, <br />and execute flawlessly with enterprise grade AI execution.
              </p>

              <div className="space-y-4">
                {features.map((item, i) => (
                  <motion.div
                    key={i}
                    onMouseEnter={() => setActiveFeature(i)}
                    className={`relative p-6 rounded-[2rem] cursor-pointer transition-all duration-500 border ${activeFeature === i
                      ? "bg-white border-slate-200 shadow-2xl shadow-purple-500/10"
                      : "bg-transparent border-transparent opacity-60 hover:opacity-100"
                      }`}
                  >
                    <div className="flex items-start gap-5">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${activeFeature === i ? "bg-purple-600 text-white" : "bg-slate-100 text-slate-500"
                        }`}>
                        <CheckIcon />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <AnimatePresence>
                          {activeFeature === i && (
                            <motion.p
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="text-slate-500 font-medium text-sm leading-relaxed"
                            >
                              {item.desc}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative rounded-[2.5rem] p-2 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 border border-white shadow-3xl"
            >
              <div className="pb-10 lg:pb-30 absolute inset-0 bg-white/20 backdrop-blur-md rounded-[2.5rem]" />
              <img
                src={dashboardImage}
                alt="Workspace Preview"
                className="relative z-10 w-full h-auto rounded-[2rem] border border-white/50 shadow-sm"
              />

              {/* Floating Badge */}

            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* NEW AI WORKSPACE SECTION */}
      <section className="py-10 px-6 bg-white-50 relative overflow-hidden border-t border-slate-200">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-white" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-purple-700 font-bold text-sm mb-6 shadow-sm border border-purple-100"
            >
              <Sparkles className="w-4 h-4" /> KaryaUp AI Workspace
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 100, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4 drop-shadow-sm"
            >
              Task Management that<br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Drives Profitability.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed"
            >
              Our AI doesn't just track your projects—it actively manages tasks to ensure every sprint operates at maximum margin. Delegate the busywork to the machine.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
  {aiFeatures.map((feature, i) => (
    <TiltCard 
      key={i} 
      className="bg-white border border-slate-200 hover:border-purple-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-purple-900/15 p-7 sm:p-8 rounded-[2rem] cursor-default h-full transition-all duration-300 group"
    >
      <div className="relative z-10 flex flex-col h-full">
        {/* HEADER: Icon and Title */}
        <div className="flex items-center gap-4 mb-6">
          
          {/* LOGO CONTAINER: This is where the background color changes on hover */}
          <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center transition-all duration-500 border border-transparent group-hover:scale-110 group-hover:shadow-lg ${getColorClasses(feature.color)}`}>
            {/* Render the icon without fixed colors so it can inherit the group-hover:text-white */}
            {feature.icon}
          </div>
          
          <h3 className="text-xl font-black text-slate-900 leading-tight">
            {feature.title}
          </h3>
        </div>

        {/* DESCRIPTION */}
        <p className="text-slate-500 font-medium leading-relaxed text-sm">
          {feature.desc}
        </p>
      </div>
    </TiltCard>
  ))}
</div>
        </div>
      </section>

      <FeatureCTA
        title="Tasks that connect to everything you do"
        description="Work smarter with tasks that can live in your whiteboards, chat, and calendar — anywhere you work."
        image={dashboardImage}
        containerClassName="mb-12 md:mb-10"
      />
    </div>
  );
}