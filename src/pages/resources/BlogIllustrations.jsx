import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Illustration3D = ({ children, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`w-full h-full bg-[#F6F9FC] flex items-center justify-center relative overflow-hidden group/card ${className}`}
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(#0A2540 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* 3D Floating Blobs (Background) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-1/4 -right-1/4 w-full h-full bg-[#635BFF] rounded-full blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 w-full h-full flex items-center justify-center p-8 md:p-12" style={{ transform: "translateZ(50px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

export const FocusIllust = () => (
  <Illustration3D>
    <svg viewBox="0 0 400 300" className="w-full h-full text-[#635BFF]">
      {/* Isometric Base Ring */}
      <motion.ellipse 
        cx="200" cy="180" rx="100" ry="50" 
        fill="none" stroke="currentColor" strokeWidth="2" strokeOpacity="0.1"
      />
      
      {/* Extruded Core Sphere (3D Effect) */}
      <g style={{ transform: "translateZ(30px)" }}>
        <circle cx="200" cy="150" r="40" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1" />
        <motion.circle 
          cx="200" cy="150" r="35" 
          fill="currentColor" fillOpacity="0.2" 
          stroke="currentColor" strokeWidth="4"
          animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle 
          cx="200" cy="150" r="8" 
          fill="currentColor"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </g>

      {/* Converging Rays with Depth */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <motion.line
          key={i}
          x1={200 + Math.cos(angle * Math.PI / 180) * 160}
          y1={150 + Math.sin(angle * Math.PI / 180) * 80 + 30}
          x2={200 + Math.cos(angle * Math.PI / 180) * 60}
          y2={150 + Math.sin(angle * Math.PI / 180) * 30}
          stroke="currentColor"
          strokeWidth="3"
          strokeOpacity="0.3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
        />
      ))}
    </svg>
  </Illustration3D>
);

export const TeamIllust = () => (
  <Illustration3D>
    <svg viewBox="0 0 400 300" className="w-full h-full">
      {/* Extruded Isometric Prism */}
      <g style={{ transform: "translateY(-20px) rotateX(45deg) rotateZ(45deg)" }}>
        <motion.rect 
          x="120" y="80" width="80" height="80" rx="12" 
          fill="#635BFF" fillOpacity="0.4" stroke="#635BFF" strokeWidth="2"
          style={{ transform: "translateZ(40px)" }}
        />
        <rect 
          x="120" y="80" width="80" height="80" rx="12" 
          fill="#0A2540" fillOpacity="0.1"
        />
      </g>

      {/* Floating 3D Sphere */}
      <motion.g 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ transform: "translateZ(80px)" }}
      >
        <defs>
          <radialGradient id="sphereGrad" cx="30%" cy="30%" r="50%">
            <stop offset="0%" stopColor="#7e22ce" stopOpacity="1" />
            <stop offset="100%" stopColor="#4c1d95" stopOpacity="1" />
          </radialGradient>
        </defs>
        <circle cx="260" cy="120" r="45" fill="url(#sphereGrad)" />
        <circle cx="260" cy="120" r="45" fill="none" stroke="#7e22ce" strokeWidth="2" strokeOpacity="0.3" />
      </motion.g>

      {/* Isometric Floor Polygon */}
      <motion.polygon 
        points="150,220 280,220 215,280" 
        fill="#00d4ff" fillOpacity="0.2" stroke="#00d4ff" strokeWidth="3"
        animate={{ rotateY: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </svg>
  </Illustration3D>
);

export const OpsIllust = () => (
  <Illustration3D>
    <svg viewBox="0 0 400 300" className="w-full h-full">
      {/* 3D Grid Perspective */}
      <g style={{ transform: "rotateX(55deg) rotateZ(-25deg)" }}>
        {[...Array(16)].map((_, i) => {
          const x = 50 + (i % 4) * 80;
          const y = 30 + Math.floor(i / 4) * 80;
          const isRestNode = i === 6 || i === 9;
          return (
            <g key={i}>
              {/* Shadow Base */}
              <rect x={x+4} y={y+4} width="60" height="60" rx="14" fill="#0A2540" fillOpacity="0.05" />
              {/* Main Node */}
              <motion.rect 
                x={x} y={y} width="60" height="60" rx="14" 
                fill={isRestNode ? "#635BFF" : "#FFFFFF"} 
                stroke={isRestNode ? "#635BFF" : "#E6EBF1"}
                strokeWidth="2"
                style={{ transform: isRestNode ? "translateZ(20px)" : "translateZ(0px)" }}
                animate={isRestNode ? { translateZ: [20, 30, 20] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {isRestNode && (
                <motion.circle 
                  cx={x+30} cy={y+30} r="10" fill="white" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </g>
          );
        })}
      </g>
    </svg>
  </Illustration3D>
);

export const LeadIllust = () => (
  <Illustration3D>
    <svg viewBox="0 0 400 300" className="w-full h-full text-[#635BFF]">
      {/* 3D Ribbon/Pathway */}
      <defs>
        <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#635BFF" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#635BFF" stopOpacity="1" />
        </linearGradient>
      </defs>
      
      {/* Ground shadows for path */}
      <path
        d="M60,250 L160,190 L240,220 L340,110"
        fill="none" stroke="#0A2540" strokeWidth="12" strokeOpacity="0.03" strokeLinecap="round"
        style={{ transform: "translateY(10px) translateX(5px)" }}
      />
      
      {/* Extruded Main Path */}
      <motion.path
        d="M60,240 L160,180 L240,210 L340,100"
        fill="none" stroke="url(#pathGrad)" strokeWidth="8" strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Floating 3D Target Node */}
      <g style={{ transform: "translate(340px, 100px)" }}>
        <circle r="12" fill="currentColor" fillOpacity="0.1" />
        <motion.circle 
          r="8" fill="currentColor" 
          animate={{ scale: [1, 1.3, 1] }} 
          transition={{ duration: 1, repeat: Infinity }}
        />
        <motion.circle 
          r="25" fill="none" stroke="currentColor" strokeWidth="2"
          initial={{ scale: 0.5, opacity: 1 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </g>
    </svg>
  </Illustration3D>
);

export const MeetingIllust = () => (
  <Illustration3D>
    <svg viewBox="0 0 400 300" className="w-full h-full text-[#635BFF]">
      {/* Isometric Clock Housing */}
      <g style={{ transform: "rotateX(20deg) rotateY(-15deg)" }}>
        <circle cx="200" cy="150" r="100" fill="#F6F9FC" stroke="#E6EBF1" strokeWidth="15" />
        <circle cx="200" cy="150" r="85" fill="none" stroke="#635BFF" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 8" />
        
        {/* Extruded Clock Hands */}
        <motion.line
          x1="200" y1="150" x2="200" y2="70"
          stroke="currentColor" strokeWidth="12" strokeLinecap="round"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 150px", transform: "translateZ(20px)" }}
        />
        <motion.line
          x1="200" y1="150" x2="270" y2="190"
          stroke="currentColor" strokeWidth="16" strokeLinecap="round"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 150px", transform: "translateZ(10px)" }}
        />
        
        {/* Floating Success Check */}
        <motion.path
          d="M170,160 L195,185 L245,135"
          fill="none" stroke="#00d4ff" strokeWidth="15" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1, translateZ: 40 }}
          transition={{ duration: 1, delay: 0.5, repeat: Infinity, repeatDelay: 4 }}
          style={{ filter: "drop-shadow(0 10px 20px rgba(0,212,255,0.4))" }}
        />
      </g>
    </svg>
  </Illustration3D>
);
