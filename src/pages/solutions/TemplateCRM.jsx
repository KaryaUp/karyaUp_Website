                                                                                                                         import { Helmet } from "react-helmet-async";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import FeatureCTA from '../../components/FeatureCTA';
import dashboardImage from "../../assets/dashboard2.webp";
import { AnimatePresence} from "framer-motion";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Zap,
  BrainCircuit,
  Sparkles,
  Database,
  Mail,
  History,
  RefreshCw,
  Phone,
  Target,
  Layers,
  Globe,
  Search,
  UserCheck,
  ListTodo,
  Calendar,
  Clock,
  CheckCircle2,
  UserPlus,
  ClipboardCheck,
  
} from "lucide-react";

// --- TILT CARD COMPONENT ---
const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-1, 1], [12, -12]), {
    stiffness: 300,
    damping: 30,
    mass: 0.5,
  });
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-12, 12]), {
    stiffness: 300,
    damping: 30,
    mass: 0.5,
  });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
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
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 800,         // ✅ correct property name
      }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={className}
    >
      <div style={{ transform: "translateZ(20px)", height: "100%", display: "flex", flexDirection: "column" }}>
        {children}
      </div>
    </motion.div>
  );
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
        <title>Template C R M | Karyaup</title>
        <meta name="description" content="Plan and manage schedules with Karyaup calendar. Track tasks, deadlines, meetings, and events in one unified calendar for better team coordination." />
        <meta name="keywords" content="template-c-r-m, team calendar, scheduling software, task calendar, project deadlines, meeting planner, Karyaup" />
        <meta name="author" content="Karyaup" />
        <meta property="og:title" content="Template C R M | Karyaup" />
        <meta property="og:description" content="Organize tasks, events, and deadlines with a powerful team calendar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karyaup.com/features/template-c-r-m" />
        <meta property="og:site_name" content="Karyaup" />
        <link rel="canonical" href="https://karyaup.com/features/template-c-r-m" />
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

export default function TemplateCRM() {
  const aiFeatures = [
    {
      icon: BrainCircuit,
      title: "Call Transcription & Summaries",
      desc: "AI automatically records, transcribes, and extracts key action items from your client calls in real-time.",
      color: "purple",
    },
    {
      icon: Sparkles,
      title: "Automated Data Entry",
      desc: "Contact details, deal sizes, and company info are extracted directly from emails and populated into your CRM intuitively.",
      color: "fuchsia",
    },
    {
      icon: TrendingUp,
      title: "Predictive Forecasting",
      desc: "Leverage machine learning to calculate win probabilities based on historical data and prospect engagement levels.",
      color: "blue",
    },
    {
      icon: Mail,
      title: "Drafted Follow-Ups",
      desc: "Your AI agent drafts highly personalized follow-up emails instantly after a meeting concludes, ready for review.",
      color: "pink",
    },
    {
      icon: RefreshCw,
      title: "Pipeline Auto-Progression",
      desc: "Deals automatically advance stages when specific criteria (like a signed NDA or sent proposal) are met.",
      color: "emerald",
    },
    {
      icon: Target,
      title: "At-Risk Deal Alerts",
      desc: "Sentiment analysis scans ongoing communications to flag deals that have stalled or show negative prospect sentiment.",
      color: "orange",
    }
  ];

  const taskManagementFeatures = [
    { icon: ListTodo, title: "Contextual Task Creation", desc: "AI identifies tasks buried in meeting notes and syncs them across your workspace.", color: "purple" },
    { icon: Calendar, title: "Smart Scheduling", desc: "Automatically finds meeting times by analyzing your team and prospect availability.", color: "blue" },
    { icon: Zap, title: "Urgency Prioritization", desc: "Tasks are dynamically re-ordered based on deal health and closing proximity.", color: "orange" },
  ];

  // REMOVED group-hover CLASSES TO KEEP COLORS STATIC
  const getColorClasses = (color) => {
    const classes = {
      purple: "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
      fuchsia: "bg-fuchsia-50 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white",
      blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
      pink: "bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white",
      emerald: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
      orange: "bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
    };
    return classes[color] || "bg-slate-50 text-slate-600 group-hover:bg-slate-600 group-hover:text-white";
  };

  return (
    <div className="w-full bg-white text-slate-900 font-sans selection:bg-purple-100">

      {/* --- HERO SECTION --- */}


      <section className="relative w-full py-10 md:py-20 lg:py-30 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-2 py-2.5 rounded-full bg-white text-[11px] font-black uppercase tracking-widest text-purple-600 mb-8 border border-purple-100">
              SOLUTIONS/HR
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
            Close more Deals with<br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Less Manual Effort.
              </motion.span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            KaryaUp CRM unifies your pipeline, contacts, and communication into a single, AI-driven interface.
            </p>
            <FeatureStack 
              items={[
                {label: "Candidate Tracking", icon: UserPlus},
                {label: "Resource Allocation", icon: ClipboardCheck},
                {label: "Performance Goals", icon: TrendingUp}
              ]} 
            />
          </motion.div>

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

      {/* --- AI WORKSPACE --- */}
      <section className="py-3 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 40, x: -10 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 100,
                delay: 0.1
              }}
              className="text-center text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4 drop-shadow-sm"
            >
              The AI Workspace Built for<br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                High-Velocity Sales
              </motion.span>
            </motion.h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">KaryaUp AI listens, analyzes, and updates your CRM automatically.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiFeatures.map((feat, i) => (
              <TiltCard key={i} className="bg-white border border-slate-200 hover:border-purple-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-purple-900/15 p-7 sm:p-8 rounded-[2rem] transition-all duration-300 group cursor-default h-full">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${getColorClasses(feat.color)}`}>
                  <feat.icon size={22} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2.5 leading-tight">{feat.title}</h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">{feat.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* --- AI TASK ORCHESTRATION --- */}
      <section className="py-10 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Visual Side: Interactive Task List */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <TiltCard className="bg-[#FCFCFD] border border-slate-200 p-6 sm:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                  <h5 className="font-black text-slate-900 text-xl">Today's Priority</h5>
                  <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">AI Sorted</span>
                </div>

                <div className="space-y-4">
                  {[
                    { task: "Follow up with TechCorp", status: "High Priority", time: "10:30 AM", color: "text-rose-500 bg-rose-50" },
                    { task: "Review Call Summary - Sarah", status: "New Task", time: "1:00 PM", color: "text-purple-500 bg-purple-50" },
                    { task: "Send Proposal to Logistics Ltd", status: "Deal Closing", time: "3:45 PM", color: "text-emerald-500 bg-emerald-50" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-md border-2 border-slate-200 flex items-center justify-center">
                          {i === 2 && <CheckCircle2 className="text-emerald-500" size={14} />}
                        </div>
                        <div>
                          <p className="text-slate-800 font-bold text-sm">{item.task}</p>
                          <p className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded mt-1 inline-block ${item.color}`}>
                            {item.status}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-slate-400">
                        <Clock size={12} />
                        <span className="text-[11px] font-medium">{item.time}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-50 rounded-full blur-3xl opacity-50" />
              </TiltCard>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
              >
                Centralize Your Workflow<br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  with KaryaUp AI.
                </motion.span>
              </motion.h1>

              <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
                KaryaUp AI treats every task as part of the bigger picture. It doesn't just tell you what to do; it prepares everything you need to do it.
              </p>

              <div className="grid gap-8">
                {taskManagementFeatures.map((feat, i) => (
                  <div key={i} className="flex gap-5 items-start group">
                    <div className={`p-3 rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-110 ${getColorClasses(feat.color)}`}>
                      <feat.icon size={20} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-black text-lg mb-1">{feat.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed font-medium">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* --- FINAL CTA --- */}
      <FeatureCTA
        title={<>Tasks that connect to <br /> everything you do</>}
        description="Work Smarter with tasks that can live in your whiteboards, chat, calendar - anywhere you work"
        image={dashboardImage}
        imageAlt="KaryaUp dashboard"
        containerClassName="mt-10 mb-10 px-6"
        paddingClassName="p-6 lg:p-8 lg:py-12"
        imageClassName="w-full max-w-[940px]"
        imageOuterClassName="relative w-full"
      />
    </div>
  );
}