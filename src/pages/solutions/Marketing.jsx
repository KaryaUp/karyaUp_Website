import { Helmet } from "react-helmet-async";
import { useRef, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Zap, Target, Search, BrainCircuit, ShieldCheck, Check } from "lucide-react";
import dashboardImage from "../../assets/dashboard2.webp";
import planImage from "../../assets/Gantt.webp";

import { lazy, Suspense } from "react";
import FeatureCTA from "../../components/FeatureCTA";
import karyaupLogo from "../../assets/logo-svg.svg";
import FeatureStack from "../../components/FeatureStack";
import MetricStorySlider from "../../components/MetricStorySlider";
// import karyaupInfographicMarketing from "../../assets/karyaup-soft-marketing.png";
import karyaupInfographicProduct from "../../assets/karyaup-soft-product.png";

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
      <Helmet>
        <title>Marketing | Karyaup</title>
        <meta name="description" content="Plan and manage schedules with Karyaup calendar. Track tasks, deadlines, meetings, and events in one unified calendar for better team coordination." />
        <meta name="keywords" content="marketing, team calendar, scheduling software, task calendar, project deadlines, meeting planner, Karyaup" />
        <meta name="author" content="Karyaup" />
        <meta property="og:title" content="Marketing | Karyaup" />
        <meta property="og:description" content="Organize tasks, events, and deadlines with a powerful team calendar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karyaup.com/features/marketing" />
        <meta property="og:site_name" content="Karyaup" />
        <link rel="canonical" href="https://karyaup.com/features/marketing" />
      </Helmet>

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

export default function MarketingPage() {

  const DEFAULT_ICON_MAP = {
    "ASSET FIND"    : { icon: Search, color: "#4c1d95" },
    "BRAND GUARD"   : { icon: ShieldCheck, color: "#4c1d95" },
    "CAMPAIGN FLOW" : { icon: BrainCircuit, color: "#4c1d95" },
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

  const sectionSpacing = "py-12 sm:py-16 lg:py-20";
  const [isMobile, setIsMobile] = useState(false);

  const [isShieldHovered, setIsShieldHovered] = useState(false);

  return (
    <div className="bg-white font-sans overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}

      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block px-2 py-1.5 rounded-full bg-purple-50 text-[11px] font-black uppercase tracking-widest text-purple-600 mb-3 border border-purple-100">
              Marketing Analytics
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-[3.25rem] font-black text-slate-900 tracking-tight leading-tight mb-1"
            >
              The Everything App<br />
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                for Marketing Teams
              </motion.span>
            </motion.h1>
            <div className="mt-5 space-y-3 max-w-lg w-full">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-purple-700 stroke-[4]" />
                </div>
                <p className="text-sm sm:text-base text-slate-600 font-medium">  Brainstorm, Plan, and Execute your Team's Marketing Programs.</p>
              </div>
            </div>
            <div className="mt-5 space-y-3 max-w-lg w-full">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-purple-700 stroke-[4]" />
                </div>
                <p className="text-sm sm:text-base text-slate-600 font-medium"> Multi channel campaigns to global events and more with KaryaUp. </p>
              </div>
            </div>
            {/* <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 font-medium">
              Brainstorm, plan, and execute your team's marketing programs from multi channel campaigns to global events and more with KaryaUp.
            </p> */}
            <FeatureStack
              items={[
                { label: "ASSET FIND", icon: BrainCircuit },
                { label: "BRAND GUARD", icon: Zap },
                { label: "CAMPAIGN FLOW", icon: Search }
              ]}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0 lg:-mr-12 xl:-mr-24"
          >
            <div className="relative overflow-hidden  shadow-xl sm:shadow-2xl shadow-slate-900/10 bg-white mt-[-30px] lg:mt-[-5px]">
              <img
                src={dashboardImage}
                alt="KaryaUp task management"
                className="w-full h-[250px] sm:h-[300px] md:h-[280px] lg:h-[380px] xl:h-[350px] object-cover object-left-top bg-white transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 pb-10 bg-white pt-10">
        <div className="max-w-7xl mx-auto px-3 lg:px-5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl pt-10 border-8 border-purple-100">
                <img src={planImage} alt="Gantt Planning" className="w-full h-auto" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-3 drop-shadow-sm">
                Visualize your<br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Marketing ROI
                </motion.span>
              </h1>
              <p className="text-[1rem] text-slate-600 mb-3">
                Stop guessing which campaigns work.
                <br />
                Align your budget with performance data.
              </p>
              <div className="relative mt-8 space-y-6">
                {[
                  { label: "Multi-channel Attribution" },
                  { label: "Real-time Budget Tracking" },
                  { label: "Customizable KPI Dashboards" },
                ].map((item, index) => (
                  <div key={index} className="relative flex items-center gap-4">
                    <div className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-purple-100 border border-purple-200 text-purple-700">
                      <Check className="w-5 h-5 stroke-[4]" />
                    </div>
                    <span className="text-lg font-bold text-slate-800 tracking-tight">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <MetricStorySlider
        logoSrc={karyaupLogo}
        title="Campaign clarity in KaryaUp AI Workspace"
        description="Generate ideas faster, align stakeholders, and marketing runs as one infographic clear workspace."
        intervalMs={5100}
        fastIntervalMs={2600}
        slides={[
          {
            metric: "Guesswork to proof",
            description: "Campaign and pipeline signals roll into one AI workspace.",
            image: karyaupInfographicProduct,
            imageFocus: "48% 32%",
            storyTitle: "KaryaUp AI Workspace for growth teams",
            storySubtitle: "Channel mix, creative iterations, and budget guardrails stay visible from brief to board review.",
          },
          {
            metric: "Channels to one ledger",
            description: "Less between ads, email, and ledger of outcomes and next actions.",
            image: karyaupInfographicProduct,
            imageFocus: "50% 50%",
            storyTitle: "Creative and media in one motion",
            storySubtitle: "AI drafts recaps, surfaces underperforming assets, and opens tasks for the right owners automatically.",
          },
          {
            metric: "Briefs to live ROI",
            description: "Faster alignment on goals with living dashboards.",
            image: karyaupInfographicProduct,
            imageFocus: "52% 68%",
            storyTitle: "ROI that updates while campaigns run",
            storySubtitle: "KaryaUp connects tasks, approvals, and metrics so marketing leadership always sees the latest story.",
          },
        ]}
       
      />

      {/* ================= FINAL CTA ================= */}
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
        paddingClassName="p-3 lg:p-4 lg:py-8"
        imageClassName="w-full max-w-[940px]"
        imageOuterClassName="relative w-[108%] lg:w-full translate-x-2 lg:translate-x-8"
      />
    </div>
  );
}