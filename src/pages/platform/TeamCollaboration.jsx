 import { Helmet } from "react-helmet-async";
import { useRef, useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check, BrainCircuit, Zap, Search, ShieldCheck,
} from "lucide-react";
import FeatureCTA from "../../components/FeatureCTA";
import dashboardImage from "../../assets/dashboard2.webp";
import karyaUpLogo from "../../assets/logo-svg.svg";

/* ═══════════════════════════════════════════════
   REAL SVG LOGOS
═══════════════════════════════════════════════ */
const SlackLogo = () => (
  <svg viewBox="0 0 124 124" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.4 78.2c0 7.3-5.9 13.2-13.2 13.2S0 85.5 0 78.2s5.9-13.2 13.2-13.2H26.4v13.2z" fill="#E01E5A"/>
    <path d="M32.9 78.2c0-7.3 5.9-13.2 13.2-13.2s13.2 5.9 13.2 13.2v33.1c0 7.3-5.9 13.2-13.2 13.2S32.9 118.6 32.9 111.3V78.2z" fill="#E01E5A"/>
    <path d="M46.1 26.4c-7.3 0-13.2-5.9-13.2-13.2S38.8 0 46.1 0s13.2 5.9 13.2 13.2V26.4H46.1z" fill="#36C5F0"/>
    <path d="M46.1 32.9c7.3 0 13.2 5.9 13.2 13.2S53.4 59.3 46.1 59.3H13c-7.3 0-13.2-5.9-13.2-13.2S5.7 32.9 13 32.9h33.1z" fill="#36C5F0"/>
    <path d="M97.8 46.1c0-7.3 5.9-13.2 13.2-13.2s13.2 5.9 13.2 13.2-5.9 13.2-13.2 13.2H97.8V46.1z" fill="#2EB67D"/>
    <path d="M91.3 46.1c0 7.3-5.9 13.2-13.2 13.2S64.9 53.4 64.9 46.1V13c0-7.3 5.9-13.2 13.2-13.2s13.2 5.9 13.2 13.2v33.1z" fill="#2EB67D"/>
    <path d="M78.1 97.8c7.3 0 13.2 5.9 13.2 13.2s-5.9 13.2-13.2 13.2-13.2-5.9-13.2-13.2V97.8h13.2z" fill="#ECB22E"/>
    <path d="M78.1 91.3c-7.3 0-13.2-5.9-13.2-13.2s5.9-13.2 13.2-13.2H111c7.3 0 13.2 5.9 13.2 13.2s-5.9 13.2-13.2 13.2H78.1z" fill="#ECB22E"/>
  </svg>
);

const GmailLogo = () => (
  <svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
    <path fill="#EA4335" d="M6 40h6V23.8L4 18v18c0 2.2 1.8 4 2 4z"/>
    <path fill="#34A853" d="M36 40h6c2.2 0 4-1.8 4-4V18l-8 5.8z"/>
    <path fill="#4285F4" d="M36 8h-2L24 15.8 14 8H6L24 21.8z"/>
    <path fill="#FBBC05" d="M4 18l8 5.8V8L4 18z"/>
    <path fill="#EA4335" d="M44 18l-8-10v5.8L44 18z"/>
    <path fill="#4285F4" d="M12 23.8V40h24V23.8L24 34z"/>
  </svg>
);

const GoogleDriveLogo = () => (
  <svg viewBox="0 0 87.3 78" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 51H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066DA"/>
    <path d="M43.65 25L29.9 1.2c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44A9.06 9.06 0 000 51h27.5z" fill="#00AC47"/>
    <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.45 9.5z" fill="#EA4335"/>
    <path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832D"/>
    <path d="M59.8 51H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684FC"/>
    <path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 51h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#FFBA00"/>
  </svg>
);

const GoogleCalendarLogo = () => (
  <svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="36" height="36" rx="4" fill="#fff" stroke="#dadce0" strokeWidth="2"/>
    <rect x="6" y="6" width="36" height="12" rx="4" fill="#1a73e8"/>
    <rect x="6" y="14" width="36" height="4" fill="#1a73e8"/>
    <text x="24" y="36" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1a73e8" fontFamily="Arial">31</text>
    <rect x="15" y="3" width="4" height="8" rx="2" fill="#1a73e8"/>
    <rect x="29" y="3" width="4" height="8" rx="2" fill="#1a73e8"/>
  </svg>
);

const MsTeamsLogo = () => (
  <svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
    <circle cx="33.5" cy="12.5" r="5.5" fill="#5059C9"/>
    <path d="M33.5 20H20.6A2.6 2.6 0 0 0 18 22.6v11.8A9.6 9.6 0 0 0 33.5 44c5.3 0 9.5-4.3 9.5-9.6V23.5A3.5 3.5 0 0 0 39.5 20z" fill="#5059C9"/>
    <circle cx="20" cy="10" r="6" fill="#7B83EB"/>
    <path d="M26 18H8a2 2 0 0 0-2 2v12a8 8 0 0 0 16 0V20a2 2 0 0 0-2-2z" fill="#7B83EB"/>
    <rect x="11" y="21" width="18" height="2" rx="1" fill="white" opacity="0.9"/>
    <rect x="11" y="25" width="13" height="2" rx="1" fill="white" opacity="0.9"/>
    <rect x="11" y="29" width="15" height="2" rx="1" fill="white" opacity="0.9"/>
  </svg>
);

const NotionLogo = () => (
  <svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="10" fill="#fff"/>
    <path d="M12 10h16l10 10v18a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2z" fill="#fff" stroke="#000" strokeWidth="2.5"/>
    <path d="M28 10v10h10" fill="none" stroke="#000" strokeWidth="2.5"/>
    <rect x="15" y="22" width="18" height="2" rx="1" fill="#000"/>
    <rect x="15" y="27" width="13" height="2" rx="1" fill="#000"/>
    <rect x="15" y="32" width="15" height="2" rx="1" fill="#000"/>
  </svg>
);

const GithubLogo = () => (
  <svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M24 4C13 4 4 13.2 4 24.5c0 9.1 5.8 16.8 13.9 19.5 1 .2 1.4-.5 1.4-1v-3.4c-5.6 1.2-6.8-2.8-6.8-2.8-.9-2.4-2.3-3-2.3-3-1.9-1.3.1-1.3.1-1.3 2.1.2 3.2 2.2 3.2 2.2 1.9 3.2 4.9 2.3 6.1 1.7.2-1.3.7-2.3 1.3-2.8-4.5-.5-9.2-2.3-9.2-10.2 0-2.3.8-4.1 2.1-5.6-.2-.5-.9-2.6.2-5.5 0 0 1.7-.6 5.6 2.1a19.4 19.4 0 0 1 10.2 0c3.9-2.7 5.6-2.1 5.6-2.1 1.1 2.9.4 5 .2 5.5 1.3 1.5 2.1 3.3 2.1 5.6 0 7.9-4.7 9.7-9.3 10.2.7.7 1.4 2 1.4 4v5.9c0 .6.4 1.2 1.4 1C38.2 41.3 44 33.6 44 24.5 44 13.2 35 4 24 4z" fill="#24292e"/>
  </svg>
);

const FigmaLogo = () => (
  <svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 44a8 8 0 0 0 8-8v-8h-8a8 8 0 0 0 0 16z" fill="#0ACF83"/>
    <path d="M8 28a8 8 0 0 1 8-8h8v16h-8a8 8 0 0 1-8-8z" fill="#A259FF"/>
    <path d="M8 12a8 8 0 0 1 8-8h8v16h-8a8 8 0 0 1-8-8z" fill="#F24E1E"/>
    <path d="M24 4h8a8 8 0 0 1 0 16h-8V4z" fill="#FF7262"/>
    <circle cx="32" cy="28" r="8" fill="#1ABCFE"/>
  </svg>
);

const ZoomLogo = () => (
  <svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="10" fill="#2D8CFF"/>
    <path d="M8 16h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V18a2 2 0 0 1 2-2z" fill="white"/>
    <path d="M30 20l10-6v20L30 28V20z" fill="white"/>
  </svg>
);

const JiraLogo = () => (
  <svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="jg1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="18%" stopColor="#0052CC"/>
        <stop offset="100%" stopColor="#2684FF"/>
      </linearGradient>
    </defs>
    <path d="M24 4L4 24l9 9 11-11 11 11 9-9L24 4z" fill="url(#jg1)"/>
    <path d="M24 24L13 35l11 9 11-9-11-11z" fill="url(#jg1)" opacity="0.7"/>
  </svg>
);

/* ═══════════════════════════════════════════════
   TILT CARD
═══════════════════════════════════════════════ */
function TiltCard({ logo, name, glowColor, delay = 0 }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const r = cardRef.current?.getBoundingClientRect();
    if (!r) return;
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    setTilt({ x: dy * -14, y: dx * 14 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: "900px" }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
        animate={{ rotateX: tilt.x, rotateY: tilt.y, scale: hovered ? 1.07 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        style={{ transformStyle: "preserve-3d", cursor: "pointer" }}
      >
        <div style={{
          width: 160, height: 180, borderRadius: 24,
          background: "#fff",
          border: "1.5px solid rgba(0,0,0,0.07)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 16,
          position: "relative", overflow: "hidden",
          boxShadow: hovered
            ? `0 24px 48px ${glowColor || "rgba(0,0,0,0.15)"}, 0 0 0 1.5px rgba(255,255,255,0.6) inset`
            : "0 4px 20px rgba(0,0,0,0.06)",
          transition: "box-shadow 0.3s ease",
        }}>
          {/* Shine overlay */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "50%",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)",
            borderRadius: "24px 24px 0 0", pointerEvents: "none",
          }} />
          {/* Glow */}
          {hovered && <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            width: 120, height: 120,
            background: glowColor || "rgba(124,58,237,0.1)",
            borderRadius: "50%", filter: "blur(30px)", pointerEvents: "none",
          }} />}
          <div style={{ position: "relative", zIndex: 1, transform: "translateZ(20px)" }}>{logo}</div>
          <span style={{
            fontSize: 10, fontWeight: 800, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#374151",
            position: "relative", zIndex: 1, transform: "translateZ(12px)",
          }}>{name}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

const integrations = [
  { logo: <SlackLogo />, name: "Slack", glowColor: "rgba(224,30,90,0.15)" },
  { logo: <GmailLogo />, name: "Gmail", glowColor: "rgba(234,67,53,0.15)" },
  { logo: <GoogleDriveLogo />, name: "Drive", glowColor: "rgba(52,168,83,0.15)" },
  { logo: <GoogleCalendarLogo />, name: "Calendar", glowColor: "rgba(26,115,232,0.15)" },
  { logo: <MsTeamsLogo />, name: "MS Teams", glowColor: "rgba(80,89,201,0.15)" },
];

/* ═══════════════════════════════════════════════
   EXISTING COMPONENTS (unchanged)
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
const LightShield3D = () => (
  <svg viewBox="0 0 200 220" fill="none" className="w-full h-full drop-shadow-[0_25px_50px_rgba(0,0,0,0.12)]">
    <defs>
      <linearGradient id="glassBorderGradient" x1="100" y1="10" x2="100" y2="208" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F472B6" stopOpacity="0.4" />
        <stop offset="0.5" stopColor="white" stopOpacity="0.6" />
        <stop offset="1" stopColor="#A855F7" stopOpacity="0.4" />
      </linearGradient>
    </defs>
    <path d="M100 10 L182 42 L182 108 C182 154 146 190 100 208 C54 190 18 154 18 108 L18 42 Z"
      fill="white" fillOpacity="0.03" stroke="url(#glassBorderGradient)" strokeOpacity="0.6" strokeWidth="2" />
  </svg>
);

function Card({ data, type, index }) {
  const isRed = type === "red";
  return (
    <motion.div initial={{ y: 0 }} animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, delay: index * 0.4, ease: "easeInOut" }} className="relative group rounded-xl w-full">
      <div className={`backdrop-blur-md bg-white/40 border border-white/30 rounded-xl p-3 flex items-start gap-3 w-full shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:border-purple-400/50`}>
        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${isRed ? "bg-red-500/20 border-red-500/50 text-red-600" : "bg-green-500/20 border-green-500/50 text-green-600"}`}>
          {isRed ? <XIcon /> : <CheckIcon />}
        </div>
        <div className="flex-1 min-w-0 text-left">
          <div className="text-[13px] font-bold text-slate-900 truncate">{data.title}</div>
          <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1.5 font-medium">
            <span>{data.tag}</span><span className="w-1 h-1 rounded-full bg-slate-300" />
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
      if (direction === "down") { posRef.current -= speed; if (posRef.current <= -25) posRef.current = 0; }
      else { posRef.current += speed; if (posRef.current >= 0) posRef.current = -25; }
      if (trackRef.current) trackRef.current.style.transform = `translateY(${posRef.current}%)`;
      requestAnimationFrame(animate);
    };
    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [direction]);
  return (
    <div className="h-[220px] overflow-hidden relative">
      <div className="relative h-full" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}>
        <div ref={trackRef} className="flex flex-col gap-4 py-4 will-change-transform">
          {doubled.map((card, i) => <Card key={i} data={card} type={direction === "down" ? "red" : "green"} index={i % cards.length} />)}
        </div>
      </div>
    </div>
  );
}

function ScrollingDataBg({ isShieldHovered }) {
  const pat = "KaryaUp ".repeat(25);
  return (
    <div className={`absolute inset-0 pointer-events-none transition-all duration-1000 flex flex-col justify-center gap-3 overflow-hidden ${isShieldHovered ? "opacity-40" : "opacity-[0.08]"}`}>
      {Array(14).fill(pat).map((p, i) => (
        <motion.div key={i} initial={{ x: i % 2 === 0 ? 0 : -100 }} animate={{ x: i % 2 === 0 ? -100 : 0 }} transition={{ duration: isShieldHovered ? 8 : 25, repeat: Infinity, ease: "linear" }} className="whitespace-nowrap text-purple-700 font-normal text-sm md:text-base select-none">{p} {p}</motion.div>
      ))}
    </div>
  );
}

const FeatureStack = ({ items = [] }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!items.length) return;
    const t = setInterval(() => setIndex(p => (p + 1) % items.length), 1500);
    return () => clearInterval(t);
  }, [items.length]);
  return (
    <div className="relative h-[80px] sm:h-[100px] w-full max-w-[280px] sm:max-w-[320px] mt-6 lg:mt-8 overflow-visible">
      <AnimatePresence mode="popLayout">
        {[2, 1, 0].map((offset) => {
          const item = items[(index + offset) % items.length];
          const Icon = item.icon || Check;
          return (
            <motion.div key={item.label}
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: offset === 0 ? 1 : offset === 1 ? 0.4 : 0.15, scale: 1 - offset * 0.04, y: offset * 12, zIndex: 10 - offset }}
              exit={{ opacity: 0, y: -20, scale: 1.05 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 left-0 w-full px-5 py-3 rounded-xl bg-slate-400/10 backdrop-blur-xl border border-black/30 shadow-sm flex items-center gap-3"
            >
              <div className="w-5 h-5 rounded bg-black/5 border border-black/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-3 h-3 text-black stroke-[3]" />
              </div>
              <span className="text-[11px] sm:text-[13px] font-black uppercase tracking-widest text-black">{item.label}</span>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

/* ═══════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════ */
export default function TeamCollaboration() {
  const [isShieldHovered, setIsShieldHovered] = useState(false);

  const redCards = [
    { title: "Projects scattered across tools", tag: "Inefficiency" },
    { title: "Critical info hidden in silos", tag: "Visibility" },
    { title: "Manual updates strain capacity", tag: "Labor" },
    { title: "Missed deadlines & bottlenecks", tag: "Risk" },
  ];
  const greenCards = [
    { title: "Unified platform hub", tag: "Efficiency" },
    { title: "Instant global search", tag: "Visibility" },
    { title: "Automated report generation", tag: "Labor" },
    { title: "AI-powered timeline tracking", tag: "Growth" },
  ];

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>Team Collaboration | Karyaup</title>
        <meta name="description" content="Plan and manage schedules with Karyaup calendar." />
        <link rel="canonical" href="https://karyaup.com/features/team-collaboration" />
      </Helmet>

      {/* HERO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-block px-3 py-1.5 rounded-full bg-purple-50 text-[11px] font-black uppercase tracking-widest text-purple-600 mb-8 border border-purple-100">
              PLATFORM / TEAM COLLABORATION
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Smarter Collaboration <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500">Powered by AI</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Stop context-switching. From real‑time chat to intelligent task coordination, KaryaUp AI brings your team together in one fluid workspace.
            </p>
            <FeatureStack items={[
              { label: "Intelligent Routing", icon: BrainCircuit },
              { label: "Real-time Sync", icon: Zap },
              { label: "Global Search", icon: Search },
              { label: "Enterprise Security", icon: ShieldCheck }
            ]} />
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
                  alt="KaryaUp task management"
                  className="w-full h-[320px] sm:h-[420px] lg:h-[500px] object-cover object-left"
                />
                {/* Right-side invisible/fade effect like reference */}
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 sm:w-44 lg:w-56 bg-gradient-to-r from-transparent via-white/70 to-white" />
              </div>
            </motion.div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-8 pb-10 bg-white px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-12">
            Project Management <br />
            <motion.span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
              is broken, we fixed it
            </motion.span>
          </motion.h2>
          <div className="p-[2px] rounded-[1.5rem] md:rounded-[2.5rem] bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 shadow-2xl overflow-hidden">
            <div className="bg-slate-50 rounded-[1.4rem] md:rounded-[2.4rem] overflow-hidden grid grid-cols-1 md:grid-cols-3">
              <div className="p-4 md:p-3 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col justify-start pt-10 md:pt-12 bg-white/50 order-1">
                <h3 className="text-center text-2xl font-black mb-1 text-slate-900">Old Way</h3>
                <p className="text-sm text-center text-slate-500 mb-6 font-medium">Manual updates and scattered tools.</p>
                <ScrollTrack cards={redCards} direction="down" />
              </div>
              <div className="relative flex flex-col items-center justify-start py-10 md:py-12 px-4 group overflow-hidden bg-white/40 min-h-[450px] order-2"
                onMouseEnter={() => setIsShieldHovered(true)} onMouseLeave={() => setIsShieldHovered(false)}>
                <ScrollingDataBg isShieldHovered={isShieldHovered} />
                <div className="relative z-40 text-center mb-10 pointer-events-none">
                  <h3 className={`text-xl md:text-2xl font-black transition-colors duration-500 ${isShieldHovered ? "text-purple-600" : "text-slate-900"}`}>Security You Can Trust</h3>
                  <p className={`text-[10px] mt-2 font-bold uppercase tracking-widest transition-colors duration-500 ${isShieldHovered ? "text-fuchsia-500" : "text-slate-500"}`}>More secure than using AI directly.</p>
                </div>
                <div className="relative flex items-center justify-center w-full max-w-[200px] md:max-w-[240px] aspect-square" style={{ perspective: "1200px" }}>
                  <div className="absolute inset-0 z-10 opacity-80 scale-110"><LightShield3D /></div>
                  <div className="relative z-30" style={{ transformStyle: "preserve-3d" }}>
                    <video src={karyaUpLogo} autoPlay loop muted playsInline className="w-30 h-34 object-contain filter drop-shadow-[0_25px_40px_rgba(168,85,247,0.3)]" />
                    <motion.div animate={{ rotateY: [0, 360], y: [0, -10, 0], scale: isShieldHovered ? 1.1 : 1 }}
                      transition={{ rotateY: { duration: 10, repeat: Infinity, ease: "linear" }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" }, scale: { duration: 0.4 } }}
                      className="w-40 h-40 md:w-40 md:h-40 relative" style={{ transformStyle: "preserve-3d" }}>
                      <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden' }}>
                        <img src={karyaUpLogo} alt="Logo Front" className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(168,85,247,0.5)]" />
                      </div>
                      <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg) translateZ(1px)' }}>
                        <img src={karyaUpLogo} alt="Logo Back" className="w-full h-full object-contain opacity-80" />
                      </div>
                    </motion.div>
                  </div>
                </div>
                <motion.div animate={{ scale: isShieldHovered ? 1.4 : 1, opacity: isShieldHovered ? 0.4 : 0.15 }} className="absolute -bottom-40 w-64 h-64 bg-purple-400 rounded-full blur-[100px] pointer-events-none" />
              </div>
              <div className="p-4 md:p-6 border-t md:border-t-0 md:border-l border-slate-200 flex flex-col justify-start pt-10 md:pt-12 bg-white/50 order-3">
                <h3 className="text-center text-2xl font-black mb-1 text-slate-900">The KaryaUp Way</h3>
                <p className="text-sm text-center text-slate-500 mb-6 font-medium">Advanced execution loops for growth.</p>
                <ScrollTrack cards={greenCards} direction="up" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INTEGRATION GRID WITH TILT CARDS ═══ */}
      <section style={{ padding: "80px 24px 100px", background: "white", textAlign: "center", overflow: "hidden" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 900, color: "#0f172a", letterSpacing: "-2px", lineHeight: 1.1, margin: "0 auto 4px" }}>
            Connects with your
          </h2>
          <motion.span
            style={{ display: "block", fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 900, letterSpacing: "-2px", lineHeight: 1.1, background: "linear-gradient(90deg, #7C3AED, #d946ef, #7C3AED)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            animate={{ backgroundPosition: ["0% center", "-200% center"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            Entire Stack
          </motion.span>
          <p style={{ marginTop: 20, fontSize: 17, color: "#64748b", fontWeight: 500, maxWidth: 480, margin: "20px auto 0", lineHeight: 1.6 }}>
            Plug KaryaUp into the tools your team already loves — no migration needed.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 20, maxWidth: 920, margin: "0 auto 60px" }}>
          {integrations.map((tool, i) => (
            <TiltCard key={tool.name} logo={tool.logo} name={tool.name} glowColor={tool.glowColor} delay={i * 0.06} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
          style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "linear-gradient(135deg, #faf5ff, #fdf4ff)", border: "1.5px solid #e9d5ff", borderRadius: 99, padding: "10px 24px", fontSize: 13, fontWeight: 700, color: "#7C3AED", letterSpacing: "0.04em" }}>
          <span style={{ fontSize: 16 }}>🔌</span>
          + 50 More Enterprise Integrations Coming Soon
        </motion.div>
      </section>

      <FeatureCTA title="Collaboration that scales" description="Empower your team with a platform designed for the speed of modern business." image={dashboardImage} />
    </div>
  );
}