import { Helmet } from "react-helmet-async";
import React, { useState, useEffect, useRef } from "react";
import { 
  useMotionValue,   // Added
  useSpring,        // Added
  useTransform      // Added
} from "framer-motion";
import FeatureCTA from "../../components/FeatureCTA";
import dashboardImage from "../../assets/dashboard2.webp";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ClipboardList,
  Database,
  LineChart,
  HeartHandshake,
  Users,
  Rocket,
  ShieldCheck,
  BookOpen,
  GraduationCap,
  School,
  Target
} from "lucide-react";


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
    }, 1500);
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
          const Icon =
            typeof item === "object" && item.icon ? item.icon : Check;

          return (
            <motion.div
              key={`${label}-${offset}`}
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{
                opacity: offset === 0 ? 1 : offset === 1 ? 0.4 : 0.15,
                scale: 1 - offset * 0.04,
                y: offset * 12,
                zIndex: 10 - offset,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 1.05,
                transition: { duration: 0.4, ease: "easeIn" },
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: offset * 0.02,
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

const ImpactCard = ({ icon: Icon, title, description }) => (
  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7e22ce]/10 text-[#7e22ce]">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
    <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
  </div>
);

export default function NonProfit() {

  const impactCards = [
    {
      icon: HeartHandshake,
      title: "Unified Intelligence",
      description:
        "Replaces 5+ disconnected tools with one ecosystem where your data and AI work together.",
    },
    {
      icon: Users,
      title: "Reduced Admin Friction",
      description:
        "Helps your team focus more on high-value creative or mission work and less on manual data entry.",
    },
    {
      icon: Rocket,
      title: "Real-time Visibility",
      description:
        "Provides a single source of truth across departments, volunteers, or clients..",
    },
    {
      icon: ShieldCheck,
      title: "Trusted and organized",
      description:
        "Keep important information, tasks, and updates structured in one place for smoother coordination.",
    },
  ];

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>Non Profit | Karyaup</title>
        <meta
          name="description"
          content="Karyaup AI Workspace helps nonprofit teams organize work, manage forms, track reporting, and collaborate more effectively."
        />
        <meta
          name="keywords"
          content="non-profit, nonprofit workspace, NGO software, team collaboration, forms, surveys, reporting, Karyaup"
        />
        <meta name="author" content="Karyaup" />
        <meta property="og:title" content="Non Profit | Karyaup" />
        <meta
          property="og:description"
          content="Organize nonprofit work with a powerful AI workspace for collaboration, forms, reporting, and team operations."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karyaup.com/features/non-profit" />
        <meta property="og:site_name" content="Karyaup" />
        <link rel="canonical" href="https://karyaup.com/features/non-profit" />
      </Helmet>

      {/* HERO SECTION */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-3 py-1.5 rounded-full bg-purple-50 text-[11px] font-black uppercase tracking-widest text-purple-600 mb-8 border border-purple-100">
              Solutions / Non Profit
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
              Grow your <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Non-Profit <br />
                with Karyaup.
              </motion.span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Change the world one task at a time. Bring your team, tools, and work into
              one place with Karyaup to move your mission forward more effectively.
            </p>

          </motion.div>

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
                alt="Karyaup nonprofit workspace dashboard"
                className="w-full h-[320px] sm:h-[420px] lg:h-[500px] object-cover object-left"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-32 sm:w-44 lg:w-56 bg-gradient-to-r from-transparent via-white/70 to-white" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ADDITIONAL SECTION */}
      <section className="py-10 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
           
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
  The Intelligence Behind <br />
  <motion.span
    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
  >
    Every Great Cause.
  </motion.span>
</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Karyaup helps nonprofit teams stay organized across every stage of work,
              from planning campaigns to tracking outcomes and sharing updates with your
              community.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex gap-4">
                <div className="mt-1 h-10 w-10 rounded-xl bg-[#7e22ce]/10 flex items-center justify-center text-[#7e22ce]">
                  <ClipboardList className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Program planning</h3>
                  <p className="text-slate-600">
                    Organize events, campaigns, and outreach tasks in a clear workflow.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 h-10 w-10 rounded-xl bg-[#7e22ce]/10 flex items-center justify-center text-[#7e22ce]">
                  <Database className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Data collection</h3>
                  <p className="text-slate-600">
                    Use forms and surveys to gather volunteer, donor, and community data.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 h-10 w-10 rounded-xl bg-[#7e22ce]/10 flex items-center justify-center text-[#7e22ce]">
                  <LineChart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Reporting</h3>
                  <p className="text-slate-600">
                    Track performance, progress, and impact in one organized workspace.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Why it works</h3>
            <ul className="mt-6 space-y-4">
              {[
                "Simple interface for busy nonprofit teams.",
                "Supports collaboration across departments and volunteers.",
                "Keeps planning, tasks, and communication in one place.",
                "Helps your team focus more on impact and less on admin work.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-slate-700">
                  <Check className="mt-1 h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full py-10 relative overflow-hidden bg-white">
        {/* Animated Background Glows for Glass Effect */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-white rounded-full blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-fuchsia-200 rounded-full blur-[120px] opacity-40 animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
            >
              Streamline the <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Education Lifecycle
              </motion.span>
            </motion.h1>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Admissions", desc: "Simplify applications and intake with automated workflows.", icon: BookOpen, color: "fuchsia" },
              { title: "Learning", desc: "Centralize coursework, assignments, and collaboration.", icon: GraduationCap, color: "blue" },
              { title: "Administration", desc: "Manage schedules, resources, and compliance with ease.", icon: School, color: "emerald" },
              { title: "Outcomes", desc: "Track performance, visualize progress, and celebrate success.", icon: Target, color: "orange" },
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
      {/* CTA */}
      <FeatureCTA
        title="Tasks that connect to everything you do"
        description="Work smarter with tasks that can live in your whiteboards, chat, and calendar — anywhere you work."
        image={dashboardImage}
        containerClassName="mb-12 md:mb-10"
      />
    </div>
  );
}