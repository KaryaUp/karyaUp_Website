import { useState, useRef, useCallback, useEffect } from "react";
import logo from "../assets/logo.webp";
import slackIcon from "../assets/slack.svg";
import teamsIcon from "../assets/MicrosoftTeam.png";
import calendarIcon from "../assets/google-calendar.svg";
import driveIcon from "../assets/google-drive.svg";
import mailIcon from "../assets/gmail.svg";

const integrations = [
  { name: "Slack", icon: slackIcon },
  { name: "Teams", icon: teamsIcon },
  { name: "Calendar", icon: calendarIcon },
  { name: "Drive", icon: driveIcon },
  { name: "Mail", icon: mailIcon },
];

const rightLabels = ["Super Knowledge", "Capabilities", "Engagement"];

export default function IntegrationReveal({ className = "" }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const animFrameRef = useRef(null);
  const targetRef = useRef(50);

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    targetRef.current = Math.max(15, Math.min(85, x));
  }, []);

  const handleMouseLeave = useCallback(() => {
    targetRef.current = 50;
  }, []);

  useEffect(() => {
    let running = true;
    const animate = () => {
      if (!running) return;
      setSliderPos((prev) => {
        const diff = targetRef.current - prev;
        if (Math.abs(diff) < 0.3) return targetRef.current;
        return prev + diff * 0.08;
      });
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      running = false;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full select-none overflow-hidden rounded-2xl bg-[#020617] ${className}`}
      style={{ minHeight: "200px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* LEFT SIDE — Integration icons */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3 pr-8 sm:pr-32">
            {integrations.map((item, i) => (
              <div
                key={item.name}
                className="flex items-center gap-3"
                style={{ animation: `integSlideInLeft 0.6s ease-out ${i * 0.08}s both` }}
              >
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2 hover:bg-white/10 transition-all duration-300 min-w-[140px]">
                  <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                  <span className="text-white/80 font-bold text-xs tracking-wider uppercase">
                    {item.name}
                  </span>
                </div>
                <div className="flex items-center">
                  <div
                    className="h-px bg-gradient-to-r from-purple-500/40 to-transparent hidden md:block"
                    style={{ width: `40px` }}
                  />
                  <div className="w-1 h-1 rounded-full bg-purple-400 hidden md:block shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE — KaryaUp logo */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-[#020617]">
          <div className="flex items-center gap-8 px-4 sm:pl-12">
            <div className="flex flex-col gap-4">
              {rightLabels.map((label, i) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="flex items-center">
                    <div className="w-1 h-1 rounded-full bg-purple-400 hidden md:block shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                    <div
                      className="h-px bg-gradient-to-l from-purple-500/40 to-transparent hidden md:block"
                      style={{ width: `40px` }}
                    />
                  </div>
                  <span className="text-white/70 font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase whitespace-nowrap">
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <img
              src={logo}
              alt="KaryaUp"
              className="w-40 md:w-64 drop-shadow-[0_0_40px_rgba(139,92,246,0.5)]"
              style={{ animation: "integPulseGlow 3s ease-in-out infinite" }}
            />
          </div>
        </div>
      </div>

      {/* GLOBAL BACKGROUND DOTS */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(139,92,246,0.15) 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />

      {/* GLOWING DIVIDER LINE & PARTICLES */}
      <div
        className="absolute top-0 bottom-0 z-20 pointer-events-none"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
      >
        {/* Dual-sided Aura Glow */}
        <div className="absolute inset-0 w-[40px] -translate-x-1/2 left-1/2 bg-purple-500/10 blur-[20px]" />
        
        {/* The glowing line — Updated to have more presence at top/bottom */}
        <div className="absolute inset-0 w-[2.5px] mx-auto bg-gradient-to-b from-purple-600/20 via-purple-400 to-purple-600/20 shadow-[0_0_20px_rgba(168,85,247,1),0_0_40px_rgba(168,85,247,0.5)]" />
        
        {/* Floating particles around the line */}
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full blur-[1px]"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${(Math.random() - 0.5) * 40}px`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.2,
              animation: `lineParticle ${Math.random() * 3 + 2}s ease-in-out ${Math.random() * 2}s infinite`
            }}
          />
        ))}

        {/* Center handle knob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-purple-500/30 border border-purple-400/60 backdrop-blur-sm flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-purple-300" />
        </div>
      </div>

      <style>{`
        @keyframes integSlideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes integPulseGlow {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(139,92,246,0.4)); }
          50% { filter: drop-shadow(0 0 40px rgba(139,92,246,0.7)); }
        }
        @keyframes lineParticle {
          0%, 100% { transform: translate(0, 0); opacity: 0; }
          50% { transform: translate(${(Math.random() - 0.5) * 20}px, ${(Math.random() - 0.5) * 40}px); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
