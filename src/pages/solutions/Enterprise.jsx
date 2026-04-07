import { Helmet } from "react-helmet-async";
import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import FeatureCTA from '../../components/FeatureCTA';
import dashboardImage from "../../assets/dashboard2.webp";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Zap, Lock, Grid, Globe, UserPlus, ClipboardCheck, TrendingUp } from "lucide-react";

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
      <Helmet>
        <title>Enterprise | Karyaup</title>
        <meta name="description" content="Plan and manage schedules with Karyaup calendar. Track tasks, deadlines, meetings, and events in one unified calendar for better team coordination." />
        <meta name="keywords" content="enterprise, team calendar, scheduling software, task calendar, project deadlines, meeting planner, Karyaup" />
        <meta name="author" content="Karyaup" />
        <meta property="og:title" content="Enterprise | Karyaup" />
        <meta property="og:description" content="Organize tasks, events, and deadlines with a powerful team calendar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karyaup.com/features/enterprise" />
        <meta property="og:site_name" content="Karyaup" />
        <link rel="canonical" href="https://karyaup.com/features/enterprise" />
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
export default function Enterprise() {
  return (
    <div className="bg-white font-sans overflow-hidden min-h-screen">

      {/* ================= HERO SECTION ================= */}

      <section className="relative w-full py-30 md:py-20 lg:py-38 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-2 py-1.5 rounded-full bg-purple-50 text-[11px] font-black uppercase tracking-widest text-purple-600 mb-8 border border-purple-100">
              SOLUTIONS/HR
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
            The World's most Powerful<br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                  Enterprise Software.
              </motion.span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            Brainstorm, plan, and execute your team's marketing programs from multi-channel campaigns to global events and more with KaryaUp, the all-in-one productivity platform.
            </p>
            <FeatureStack 
              items={[
                {label: "Candidate Tracking", icon: UserPlus},
                {label: "Resource Allocation", icon: ClipboardCheck},
                {label: "Performance Goals", icon: TrendingUp}
              ]} 
            />
          </motion.div>

          <div className="pb-10 lg:pb-45 max-w-7xl mx-auto grid lg:grid-cols-1 gap-8 items-center">
  {/* Text Column */}
  <div className="text-center lg:text-left"> </div>

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

      {/* ================= ENTERPRISE ADVANTAGES SECTION ================= */}
      <section className="w-full py-8 px-2 lg:px-5 pb-10 bg-white">
        <div className="max-w-9xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4"
          >
            Enterprise-Ready <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Reliability & Scale
            </motion.span>
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            KaryaUp is trusted by global enterprises to deliver secure, scalable, and integrated solutions that empower teams worldwide.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {[
            { title: "Enterprise Workspace", desc: "High-Velocity Enterprise Workspace.", icon: Zap, color: "pink" },
            { title: "Strategic Dashboards", desc: "Strategic Executive Dashboards.", icon: Lock, color: "blue" },
            { title: "Adaptive Roadmaps (Gantt)", desc: "Visualize the future of enterprise delivery with high-fidelity visual scheduling.", icon: Grid, color: "emerald" },
            { title: "Secure Data", desc: "Scale globally without compromising sensitive data. KaryaUp is trusted by global enterprises", icon: Globe, color: "orange" },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <TiltCard key={idx} className="bg-white border border-slate-200 hover:border-purple-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-purple-900/15 p-7 sm:p-8 rounded-[2rem] cursor-default h-full transition-colors transition-shadow duration-300 group">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-5 sm:mb-6 transition-all duration-300 group-hover:shadow-md group-hover:scale-110 ${getColorClasses(feature.color)}`}>
                  <Icon size={20} strokeWidth={2.5} />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2.5 leading-tight">{feature.title}</h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">{feature.desc}</p>
              </TiltCard>
            );
          })}
        </motion.div>
      </section>

      {/* ================= AI WORKSPACE SECTION ================= */}
      <section className="w-full py-12 px-7 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              
            <motion.h1
              initial={{ opacity: 0, y: 40, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 100,
                delay: 0.1
              }}
              className="text-left text-4xl sm:text-5xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6 drop-shadow-sm"
            >
               Empower Your Team with<br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                KaryaUp AI Workspace.
              </motion.span>
            </motion.h1>
              <p className="text-lg text-slate-600 mb-8 max-w-xl text-left leading-relaxed">
                Supercharge your productivity with KaryaUp's native AI assistant. Automate workflows, generate content, and collaborate
                smarter—all within a single, unified platform designed for enterprise scale.
              </p>

              <div className="space-y-6">
                {[
                  { title: "AI-Powered Automation", desc: "Eliminate repetitive work by automating complex workflows and task assignments." },
                  { title: "Intelligent Insights", desc: "Get real-time, data-driven recommendations to optimize your team's velocity." },
                  { title: "Contextual Content Generation", desc: "Draft documents, emails, and project briefs instantly with context-aware AI." }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#7e22ce]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Decorative Background Blob */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-fuchsia-100 to-purple-100 rounded-3xl blur-2xl -z-10 opacity-60" />

              <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-slate-900 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="mx-auto text-[10px] text-slate-400 font-mono">ai_workspace_dashboard.jsx</div>
                </div>
                <div className="p-8 space-y-5">
                  <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7e22ce] to-fuchsia-500 shadow-inner flex items-center justify-center">
                      <Zap size={24} className="text-white" fill="currentColor"/>
                    </div>
                    <div className="flex-1 space-y-2.5">
                       <div className="h-3 w-1/3 bg-slate-200 rounded animate-pulse" />
                       <div className="h-2 w-1/2 bg-slate-100 rounded animate-pulse" />
                    </div>
                  </div>
                  <div className="h-3 w-3/4 bg-purple-50 rounded animate-pulse" />
                  <div className="h-3 w-full bg-slate-50 rounded animate-pulse" />
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="h-24 bg-purple-50 hover:bg-purple-100 transition-colors rounded-xl border border-purple-100 flex flex-col items-center justify-center cursor-default">
                      <span className="text-3xl font-black text-[#7e22ce] flex items-center gap-1">
                        <Zap size={20} fill="currentColor"/> Active
                      </span>
                      <span className="text-[10px] uppercase text-purple-400 font-bold tracking-widest mt-1.5">AI Copilot</span>
                    </div>
                    <div className="h-24 bg-slate-50 hover:bg-slate-100 transition-colors rounded-xl border border-slate-100 flex flex-col items-center justify-center cursor-default">
                      <span className="text-3xl font-black text-slate-700">10k+</span>
                      <span className="text-[10px] uppercase text-slate-400 font-bold tracking-widest mt-1.5">Tasks Automated</span>
                    </div>
                  </div>
                  <div className="h-3 w-1/2 bg-slate-100 rounded animate-pulse mt-4" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <FeatureCTA
        title={
          <>
            Tasks that connect to everything you do
          </>
        }
        description="Work Smater with tasks that can live in your whiteboaards,chat,calendar - anywhere you work"
        image={dashboardImage}
        imageAlt="KaryaUp dashboard"
        containerClassName="mt-10 mb-5"
        paddingClassName="p-3 lg:p-4 lg:py-6"
        imageClassName="w-full max-w-[940px]"
        imageOuterClassName="relative w-[108%] lg:w-full translate-x-2 lg:translate-x-8"
      />
    </div>
  );
}