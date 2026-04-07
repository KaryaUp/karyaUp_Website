import { Helmet } from "react-helmet-async";
import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {
  Zap,
  Users,
  BarChart3,
  Eye,
  Activity,
  TrendingUp,
  Network,
  Check
} from "lucide-react";
import dashboardImage from "../../assets/dashboard2.webp";
import FeatureCTA from "../../components/FeatureCTA";

const getColorClasses = (colorName) => {
  const colors = {
    purple: "bg-purple-100 text-purple-600 border border-purple-200/50 group-hover:bg-purple-600 group-hover:text-white",
    fuchsia: "bg-fuchsia-100 text-fuchsia-600 border border-fuchsia-200/50 group-hover:bg-fuchsia-600 group-hover:text-white",
    emerald: "bg-emerald-100 text-emerald-600 border border-emerald-200/50 group-hover:bg-emerald-600 group-hover:text-white",
    orange: "bg-orange-100 text-orange-600 border border-orange-200/50 group-hover:bg-orange-600 group-hover:text-white",
    blue: "bg-blue-100 text-blue-600 border border-blue-200/50 group-hover:bg-blue-600 group-hover:text-white",
    pink: "bg-pink-100 text-pink-600 border border-pink-200/50 group-hover:bg-pink-600 group-hover:text-white",
    slate: "bg-slate-100 text-slate-600 border border-slate-200/5 group-hover:bg-slate-600 group-hover:text-white",
  };
  return colors[colorName] || colors.purple;
};

// --- TILT CARD COMPONENT ---
const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-1, 1], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-10, 10]), { stiffness: 300, damping: 30 });

  const handleMove = (clientX, clientY) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((clientY - rect.top) / rect.height) * 2 - 1;
    rawX.set(x);
    rawY.set(y);
  };

  const handleMouseMove = (e) => handleMove(e.clientX, e.clientY);
  const handleTouchMove = (e) => handleMove(e.touches[0].clientX, e.touches[0].clientY);
  const handleReset = () => { rawX.set(0); rawY.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleReset}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleReset}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
      whileHover={{ scale: 1.02 }}
      className={className}
    >
      <div style={{ transform: 'translateZ(20px)' }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
};

// --- FEATURE STACK ---
const FeatureStack = ({ items = [] }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (items.length === 0) return;
    const timer = setInterval(() => { setIndex((prev) => (prev + 1) % items.length); }, 1500);
    return () => clearInterval(timer);
  }, [items.length]);

  if (items.length === 0) return null;

  return (
    <div className="relative h-[80px] sm:h-[100px] w-full max-w-[280px] sm:max-w-[320px] mt-6 lg:mt-8 group overflow-visible">
      <Helmet>
        <title>Operations | Karyaup</title>
        <meta name="description" content="Plan and manage schedules with Karyaup calendar. Track tasks, deadlines, meetings, and events in one unified calendar for better team coordination." />
        <meta name="keywords" content="operations, team calendar, scheduling software, task calendar, project deadlines, meeting planner, Karyaup" />
        <meta name="author" content="Karyaup" />
        <meta property="og:title" content="Operations | Karyaup" />
        <meta property="og:description" content="Organize tasks, events, and deadlines with a powerful team calendar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karyaup.com/features/operations" />
        <meta property="og:site_name" content="Karyaup" />
        <link rel="canonical" href="https://karyaup.com/features/operations" />
      </Helmet>

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
                y: offset * 12,
                zIndex: 10 - offset,
              }}
              exit={{ opacity: 0, y: -20, scale: 1.05, transition: { duration: 0.4, ease: "easeIn" } }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: offset * 0.02 }}
              className="absolute top-0 left-0 w-full px-5 py-3 rounded-xl bg-slate-400/10 backdrop-blur-xl border border-black/30 shadow-sm flex items-center gap-3"
            >
              <div className="w-5 h-5 rounded bg-black/5 border border-black/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-3 h-3 text-black stroke-[3]" />
              </div>
              <span className="text-[11px] sm:text-[13px] font-black uppercase tracking-widest text-black">{label}</span>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default function Operations() {
  const operationsFeatures = [
    { title: "Process Mining", desc: "AI scans your history to identify bottlenecks and suggest workflow optimizations.", icon: Activity, color: "orange" },
    { title: "Smart Forecasting", desc: "Predict project completion dates with high accuracy using historical data.", icon: TrendingUp, color: "fuchsia" },
    { title: "Unified Workspace", desc: "Eliminate context switching by bringing docs and dashboards into one source of truth.", icon: Network, color: "blue" },
  ];

  const workflowSteps = [
    { label: "Intake", desc: "AI categorizes incoming requests.", icon: Zap, color: "purple" },
    { label: "Assign", desc: "Logic-based task distribution.", icon: Users, color: "fuchsia" },
    { label: "Track", desc: "Automated status sync across apps.", icon: BarChart3, color: "blue" },
    { label: "Report", desc: "Weekly summaries sent to stakeholders.", icon: Eye, color: "pink" }
  ];

  return (
    <div className="bg-white font-sans overflow-x-hidden selection:bg-purple-100">

      {/* HERO SECTION UPDATED */}
      <section className="pt-16 pb-12 md:pt-28 md:pb-20 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <span className="inline-block px-2 py-1.5 rounded-full bg-purple-50 text-[11px] font-black uppercase tracking-widest text-purple-600 mb-8 border border-purple-100">
            SOLUTIONS/OPERATIONS
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
            The Everything App<br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600 bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              for Operations
            </motion.span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            Get real-time visibility into your revenue, expenses, and margins. Analyze profitability across projects, teams, and clients with KaryaUp.
          </p>
          <FeatureStack 
            items={[
              {label: "Process Mining", icon: Activity},
              {label: "Smart Forecasting", icon: TrendingUp},
              {label: "Unified Workspace", icon: Network}
            ]} 
          />
        </motion.div>

        {/* UPDATED IMAGE CONTAINER FOR HERO */}
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
      </section>

      {/* FEATURE CARDS (Maintained from your source) */}
      <section className="py-12 md:py-10 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6">Operations Made Effortless</h2>
          <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto">Streamline routine tasks and connect every team to the same source of truth.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {operationsFeatures.map((feature, i) => (
            <TiltCard key={i} className="bg-white border border-slate-200 shadow-xl shadow-slate-200/40 p-8 rounded-[2rem] group cursor-default transition-all duration-300 hover:border-purple-200">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 ${getColorClasses(feature.color)}`}>
                <feature.icon size={26} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{feature.desc}</p>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* AI RESOURCE OPTIMIZATION UPDATED */}
      <section className="py-10 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-[1.1]">
              AI-Powered <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Resource Allocation
              </motion.span>
            </h2>
            <p className="text-slate-600 text-lg mb-10 font-medium">KaryaUp AI analyzes historical velocity and workload to suggest the best team members for projects.</p>
            <div className="space-y-6">
              {["Predictive burnout alerts", "Automated skill-gap analysis", "Dynamic workload balancing"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="bg-purple-100 p-2 rounded-full shadow-sm">
                    <Zap size={18} className="text-purple-600" />
                  </div>
                  <span className="font-bold text-slate-800 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* UPDATED TILT CARD WITH PURPLE BORDER EFFECT */}
          <div className="order-1 lg:order-2">
            <TiltCard className="relative p-[2px] rounded-[3rem] bg-gradient-to-tr from-purple-500/30 to-fuchsia-300/10 shadow-2xl">
              <div className="bg-white/80 backdrop-blur-md rounded-[2.9rem] p-2 md:p-4">
                <img
                  src={dashboardImage}
                  alt="Workspace Preview"
                  className="w-full h-auto rounded-[2.2rem] border border-white/50 shadow-sm"
                />
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* SELF-DRIVING WORKFLOWS */}
      <section className="py-10 px-6 bg-slate-50/30 overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            Self-Driving {" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600 bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Workflows
            </motion.span>
          </motion.h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-bold text-lg">
            Define the logic once, let KaryaUp handle the execution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto relative px-2">
          {workflowSteps.map((step, i) => (
            <div key={i} className="relative group h-full">
              <TiltCard className="relative z-10 bg-white border border-slate-100 shadow-xl shadow-slate-200/40 hover:border-purple-300 p-8 rounded-[2.5rem] transition-all group cursor-default h-full flex flex-col justify-between">
                <div className="flex items-center gap-5 mb-6">
                  <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-sm ${getColorClasses(step.color)}`}>
                    <step.icon size={26} strokeWidth={2.5} />
                  </div>
                  <h4 className="font-black text-slate-900 text-2xl tracking-tight leading-none">
                    {step.label}
                  </h4>
                </div>
                <p className="text-base text-slate-500 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </TiltCard>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <div className="py-20">
        <FeatureCTA
          title="Tasks that connect to everything you do"
          description="Work Smarter with tasks that can live anywhere you work"
          image={dashboardImage}
          imageAlt="KaryaUp dashboard"
          containerClassName="max-w-7xl mx-auto px-6"
          paddingClassName="p-8 md:p-12"
        />
      </div>
    </div>
  );
}