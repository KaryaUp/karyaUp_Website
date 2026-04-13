import { Helmet } from "react-helmet-async";
import React, { useRef, useState, useEffect, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {
  Zap,
  Users,
  BarChart3,
  Eye,
  Activity,
  TrendingUp,
  Network,
  BrainCircuit,
  Search,
  ShieldCheck,
  Check
} from "lucide-react";
import dashboardImage from "../../assets/dashboard2.webp";
import FeatureCTA from "../../components/FeatureCTA";
import FeatureStack from "../../components/FeatureStack";

const getColorClasses = (colorName) => {
  const colors = {
    purple: "bg-purple-50 text-purple-600 border-2 border-purple-200 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600",
    fuchsia: "bg-fuchsia-50 text-fuchsia-600 border-2 border-fuchsia-200 group-hover:bg-fuchsia-600 group-hover:text-white group-hover:border-fuchsia-600",
    emerald: "bg-emerald-50 text-emerald-600 border-2 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600",
    orange: "bg-orange-50 text-orange-600 border-2 border-orange-200 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600",
    blue: "bg-blue-50 text-blue-600 border-2 border-blue-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600",
  };
  return colors[colorName] || colors.purple;
};

// --- TILT CARD COMPONENT ---
const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-1, 1], [12, -12]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-12, 12]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
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

export default function Operations() {
  const [isMobile] = useState(false);

  const workflowSteps = [
    { label: "Intake", desc: "AI categorizes incoming requests.", icon: Zap, color: "purple" },
    { label: "Assign", desc: "Logic-based task distribution.", icon: Users, color: "fuchsia" },
    { label: "Track", desc: "Automated status sync across apps.", icon: BarChart3, color: "purple" },
    { label: "Report", desc: "Weekly summaries sent to stakeholders.", icon: Eye, color: "fuchsia" }
  ];

  const DEFAULT_ICON_MAP = {
    "SMART ALLOCATE" : { icon: BrainCircuit, color: "#4c1d95" },
    "VELOCITY TRACK" : { icon: Zap, color: "#4c1d95" },
    "WORKLOAD FIND"  : { icon: Search, color: "#4c1d95" },
}
  const FeatureStack = ({ items = [], interval = 2500 }) => {
    const [index, setIndex] = useState(0);
    const [hovered, setHovered] = useState(false);
  
    useEffect(() => {
      if (items.length === 0 || hovered) return;
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % items.length);
      }, interval);
      return () => clearInterval(timer);
    }, [items.length, interval, hovered]);
  
    const visibleItems = useMemo(() => {
      if (items.length === 0) return [];
      return [0, 1, 2].map((offset) => {
        const itemIndex = (index + offset) % items.length;
        const rawItem = items[itemIndex];
        
        // Normalize item to object
        let itemObj = typeof rawItem === "string" ? { label: rawItem } : { ...rawItem };
        
        // Apply defaults for icons/colors if missing
        if (!itemObj.icon || !itemObj.iconColor) {
          const mapped = DEFAULT_ICON_MAP[itemObj.label] || { icon: Check, color: "#000000" };
          itemObj.icon = itemObj.icon || mapped.icon;
          itemObj.iconColor = itemObj.iconColor || mapped.color;
        }
  
        return { offset, item: itemObj };
      });
    }, [items, index]);
  
    if (items.length === 0) return null;
  
    return (
      <div
        className="relative w-full max-w-[240px] sm:max-w-[320px] mt-6 lg:mt-8 overflow-visible mx-auto lg:mx-0"
        style={{
          height: "80px",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <AnimatePresence mode="popLayout">
          {visibleItems.map(({ offset, item }) => {
            const Icon = item.icon;
            const color = item.iconColor;
  
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                animate={
                  hovered
                    ? {
                        opacity: 1,
                        scale: 1,
                        y: offset * 54, // Clear separation between cards
                        zIndex: 10 - offset,
                      }
                    : {
                        opacity: offset === 0 ? 1 : offset === 1 ? 0.45 : 0.2,
                        scale: 1 - offset * 0.035,
                        y: offset * 11,
                        zIndex: 10 - offset,
                      }
                }
                exit={{
                  opacity: 0,
                  y: -10,
                  scale: 0.95,
                  transition: { duration: 0.5, ease: "easeOut" },
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: hovered ? offset * 0.05 : offset * 0.02,
                }}
                className="absolute top-0 left-0 w-full px-4 sm:px-4 py-1.5 sm:py-2 rounded-xl flex items-center justify-center gap-3"
                style={{
                  background:
                    offset === 0
                      ? "linear-gradient(135deg, rgba(226, 232, 240, 0.15) 0%, rgba(203, 213, 225, 0.08) 100%)"
                      : "linear-gradient(135deg, rgba(226, 232, 240, 0.06) 0%, rgba(203, 213, 225, 0.03) 100%)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1.2px solid rgba(0, 0, 0, 0.25)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                }}
              >
                {/* Icon box with colorful icon */}
                <div className="flex-shrink-0 w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-md border border-black/5 bg-white/25 flex items-center justify-center">
                  <Icon
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                    style={{ color: color }}
                    strokeWidth={2.5}
                  />
                </div>
  
                {/* Precise Small Uppercase Text */}
                <span className="text-[10px] sm:text-[11.5px] font-black tracking-widest text-black uppercase">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="bg-white font-sans overflow-x-hidden selection:bg-purple-100">
      <Helmet>
        <title>Operations | Karyaup</title>
      </Helmet>

      {/* HERO SECTION */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block px-2 py-1.5 rounded-full bg-purple-50 text-[11px] font-black uppercase tracking-widest text-purple-600 mb-3 border border-purple-100">
              Operational Excellence
            </span>
            <motion.h1 className="text-4xl md:text-[3.25rem] font-black text-slate-900 tracking-tight leading-tight mb-1">
              The Everything<br />
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                App for Operations
              </motion.span>
            </motion.h1>
            <div className="mt-5 space-y-3 max-w-lg w-full">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-purple-700 stroke-[4]" />
                </div>
                <p className="text-sm sm:text-base text-slate-600 font-medium"> Analyze profitability across projects, teams, and clients with KaryaUp.</p>
              </div>
            </div>
            {/* <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 font-medium">
              Analyze profitability across projects, teams, and clients with KaryaUp.
            </p> */}
            <FeatureStack
              items={[
                { label: "SMART ALLOCATE", icon: BrainCircuit, color: "purple" },
                { label: "VELOCITY TRACK", icon: Zap, color: "fuchsia" },
                { label: "WORKLOAD FIND", icon: Search, color: "purple" }
              ]}
            />
          </div>
          <div className="relative w-full max-w-[540px] mx-auto">
             <img src={dashboardImage} className="w-full rounded-2xl shadow-2xl shadow-purple-900/10" alt="Dashboard" />
          </div>
        </div>
      </section>

      {/* AI RESOURCE ALLOCATION WITH CONNECTING LINES */}
      <section className="py-15 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-[3.25rem] font-black mb-2 leading-[1.1]">
              AI-Powered <br />
              <motion.span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]" animate={{ backgroundPosition: ["0% center", "-200% center"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                Resource Allocation
              </motion.span>
            </h2>
            <p className="text-slate-600 text-lg mb-6 font-medium">
              KaryaUp AI suggests the best team members for projects.
            </p>

            {/* LIST WITH CONNECTING LINES */}
            <div className="relative space-y-3 mt-7 ml-2">
              {/* Vertical Line */}
              
              {[
                { label: "Predictive burnout alerts" },
                { label: "Automated skill-gap analysis" },
                { label: "Dynamic workload balancing" }
              ].map((item, idx) => (
                <div key={idx} className="relative flex items-center gap-4">
                  <div className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-purple-100 border border-purple-200 text-purple-700">
                    <Check className="w-5 h-5 stroke-[4]" />
                  </div>
                  <span className="font-bold text-slate-800 text-xl">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <TiltCard className="bg-white border border-slate-200 p-4 rounded-[3rem]">
              <img src={dashboardImage} alt="Workspace Preview" className="w-full rounded-[2rem]" />
            </TiltCard>
          </div>
        </div>
      </section>

      {/* SELF-DRIVING WORKFLOWS */}
      <section className="py-10 px-6 bg-slate-50/30 border-t border-slate-100">
        <div className="max-w-8xl mx-auto text-center mb-16">
        <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-[3.25rem] font-black text-slate-900 tracking-tight leading-tight mb-1"
            >
               Self-Driving 
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Workflows
              </motion.span>
            </motion.h1>
          {/* <h2 className="text-4xl md:text-[3.25rem] font-black text-slate-900 leading-tight mb-4">
            Self-Driving <motion.span className="text-purple-600">Workflows</motion.span>
          </h2> */}
          <p className="text-slate-600 font-bold">Define the logic once, let KaryaUp handle the execution.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {workflowSteps.map((step, i) => (
            <TiltCard key={i} className="bg-white border border-slate-200 p-8 rounded-[2rem] h-full group">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${getColorClasses(step.color)}`}>
                  <step.icon size={24} strokeWidth={2.5} />
                </div>
                <h4 className="font-black text-slate-900 text-2xl tracking-tight">{step.label}</h4>
              </div>
              <p className="text-base text-slate-500 font-medium">{step.desc}</p>
            </TiltCard>
          ))}
        </div>
      </section>

      <div className="py-20">
        <FeatureCTA title="Tasks that connect to everything you do" image={dashboardImage} containerClassName="max-w-7xl mx-auto px-6" />
      </div>
    </div>
  );
}