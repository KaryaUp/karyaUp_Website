import { Helmet } from "react-helmet-async";
import React, { useRef, useState, useEffect } from "react";
import FeatureCTA from "../../components/FeatureCTA";
import dashboardImage from "../../assets/dashboard2.webp";
import { Link } from "react-router-dom";
import {
  useInView,
  useScroll
} from "framer-motion";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Video, Megaphone, Layers, Check, CheckCircle2, Zap, BarChart3, Users } from "lucide-react";

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

const WorkflowStep = ({ title, desc, icon: Icon, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ margin: "-100px" }}
    transition={{ delay: index * 0.1 }}
    className="group relative bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-purple-200 shadow-sm hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-500"
  >
    <div className="flex gap-6 items-start">
      <div className="p-4 rounded-2xl bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
        <Icon size={24} />
      </div>
      <div>
        <h4 className="text-xl font-black text-slate-900 mb-2">{title}</h4>
        <p className="text-slate-500 leading-relaxed text-sm font-medium">{desc}</p>
      </div>
    </div>
  </motion.div>
);

const getColorClasses = (color) => {
  const colorMap = {
    purple: "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
    fuchsia: "bg-fuchsia-50 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white",
    blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
    pink: "bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white",
    emerald: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
    orange: "bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
  };
  return colorMap[color] || "bg-slate-50 text-slate-600 group-hover:bg-slate-600 group-hover:text-white";
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
        <title>Agency | Karyaup</title>
        <meta name="description" content="Plan and manage schedules with Karyaup calendar. Track tasks, deadlines, meetings, and events in one unified calendar for better team coordination." />
        <meta name="keywords" content="agency, team calendar, scheduling software, task calendar, project deadlines, meeting planner, Karyaup" />
        <meta name="author" content="Karyaup" />
        <meta property="og:title" content="Agency | Karyaup" />
        <meta property="og:description" content="Organize tasks, events, and deadlines with a powerful team calendar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karyaup.com/features/agency" />
        <meta property="og:site_name" content="Karyaup" />
        <link rel="canonical" href="https://karyaup.com/features/agency" />
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

export default function Agency() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    { title: "Centralized Dashboards", desc: "Real-time visibility into every project. See margins, deadlines, and resource allocation in one unified view." },
    { title: "Automated Reporting", desc: "Generate client-ready performance reports with a single click. AI summarizes wins and identifies bottlenecks." },
    { title: "Real-time Collaboration", desc: "Integrated chat and whiteboarding means your team stays in sync without ever leaving the project context." }
  ];

  return (
    <div className="bg-white font-sans min-h-screen pt-28 overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="py-10 lg:py-10 pt-4 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative">
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block pt-2 px-2 py-1.5 rounded-full bg-purple-50 text-[11px] font-black uppercase tracking-widest text-purple-600 mb-8 border border-purple-100">
            SOLUTIONS/AGENCY
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            Unlock Agency <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Productivity & Deliver Faster
            </motion.span>
          </motion.h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            Manage IT projects, service requests, and governance in one place all connected by AI. KaryaUp makes it easy to streamline workflows.
          </p>
          <FeatureStack items={[{ label: "Video Editing", icon: Video }, { label: "Digital Marketing", icon: Megaphone }, { label: "Motion Graphic", icon: Layers }]} />
        </div>
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

      {/* ================= AGENCY CAPABILITIES (With Hover Effects) ================= */}
      <section className="py-10 px-6 bg-[#FDFCFE] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-end mb-20">
            <div className="lg:col-span-7">

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="pb-2 text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
              >
                Built for the <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Modern Agency.
                </motion.span>
              </motion.h1>

            </div>
            <div className="pb-9 lg:col-span-5 text-slate-500 text-xl font-medium leading-relaxed">
              Replace 5+ disconnected tools with one unified ecosystem.
              KaryaUp handles the complexity so you can focus on the craft.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Video Editing", desc: "Streamline your creative pipeline by bringing video editing directly into your project management flow.", icon: Video, color: "purple" },
              { title: "Digital Marketing", desc: "KaryaUp’s marketing workspace centralizes your entire campaign lifecycle—from initial brief and asset creation to real-time performance tracking.", icon: Megaphone, color: "fuchsia" },
              { title: "Motion Graphic", desc: "KaryaUp’s motion graphics workspace is built for high-fidelity animation pipelines, allowing teams to manage complex keyframe projects.", icon: Layers, color: "blue" }
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
          </div>
        </div>
      </section>

      {/* ================= ELEVATE WORKFLOWS ================= */}
      <section className="py-10 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white rounded-[100%]" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="order-1 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-20"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-[11px] font-black uppercase tracking-widest text-purple-600 mb-8 border border-purple-100">
                Unified Task Workspace
              </span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6"
              >
                Elevate Your<br />
                <motion.span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Agency Workflows.
                </motion.span>
              </motion.h1>

              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium max-w-xl">
                KaryaUp doesn't just track tasks—it streamlines the entire creative lifecycle with data-driven insights.
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
                        <Check size={24} strokeWidth={2.5} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <AnimatePresence>
                          {activeFeature === i && (
                            <motion.p
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="text-slate-500 font-medium text-sm leading-relaxed mt-2"
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
              className="relative rounded-[2.5rem] p-2 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 border border-white shadow-2xl"
            >
              <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-[2.5rem]" />
              <img
                src={dashboardImage}
                alt="Workspace Preview"
                className="relative z-10 w-full h-auto rounded-[2rem] border border-white/50 shadow-sm"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <FeatureCTA
        title="Tasks that connect to everything you do"
        description="Work Smarter with tasks that can live in your whiteboards, chat, calendar."
        image={dashboardImage}
        imageAlt="KaryaUp dashboard"
        containerClassName="mt-20 mb-10"
      />
    </div>
  );
}