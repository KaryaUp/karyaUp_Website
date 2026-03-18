import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import HeroImg from "../assets/Heroimg.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-8 sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-16 min-h-[calc(100vh-80px)] flex items-start justify-center">
      {/* Animated Mesh Gradient Background (Vibrant) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-60">
        {/* Blob 1: Vibrant Indigo */}
        <motion.div
          animate={{
            x: [-150, 150, -150],
            y: [-80, 80, -80],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[15%] -left-[15%] w-[700px] h-[700px] bg-indigo-400/30 rounded-full blur-[100px]"
        />
        {/* Blob 2: Vibrant Cyan */}
        <motion.div
          animate={{
            x: [150, -150, 150],
            y: [80, -80, 80],
            scale: [1.3, 1, 1.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] -right-[15%] w-[600px] h-[600px] bg-cyan-300/30 rounded-full blur-[90px]"
        />
        {/* Blob 3: Vibrant Fuchsia */}
        <motion.div
          animate={{
            y: [120, -120, 120],
            x: [-50, 50, -50],
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[15%] left-[10%] w-[800px] h-[800px] bg-fuchsia-300/30 rounded-full blur-[110px]"
        />
        {/* Blob 4: Brand Purple Strong Glow */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] right-[20%] w-[500px] h-[500px] bg-[#7e22ce]/20 rounded-full blur-[80px]"
        />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text Content */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 40, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ 
                type: "spring",
                damping: 25,
                stiffness: 100,
                delay: 0.1 
              }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4 drop-shadow-sm"
            >
              The platform to<br/> run your <br/>  
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-[#ec4899] to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                entire company
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30, x: 10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ 
                type: "spring",
                damping: 25,
                stiffness: 80,
                delay: 0.3 
              }}
              className="text-base sm:text-lg text-slate-700/80 mb-4 max-w-3xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Plan projects, manage teams, track time, close deals, and understand performance — all from one workspace.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring",
                damping: 30,
                stiffness: 100,
                delay: 0.5 
              }}
              className="text-lg sm:text-xl font-bold text-slate-800/90 mb-5"
            >
              KaryaUp replaces <span className="text-[#7e22ce]">6+ tools</span> with one unified system.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring",
                damping: 25,
                stiffness: 100,
                delay: 0.7 
              }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-5"
            >
              <Link
                to="/start"
                className="btn-primary w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-[#7e22ce]/30 hover:shadow-xl hover:shadow-[#7e22ce]/40 transition-all hover:-translate-y-1"
              >
                Start Free Workspace
              </Link>
              <button
                className="w-full sm:w-auto px-8 py-4 rounded-full text-slate-700 font-bold text-lg border border-slate-200 hover:border-[#7e22ce]/50 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#7e22ce]/10 flex items-center justify-center gap-2 group hover:text-[#7e22ce]"
              >
                <Play className="w-5 h-5 text-slate-400 group-hover:text-[#7e22ce] transition-colors" />
                Watch Demo
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col items-center lg:items-start gap-2 text-sm font-semibold text-slate-500"
            >
              <p>No credit card required • Setup in minutes</p>
              <p className="flex items-center gap-2">
                Teams get started in
                <span className="inline-flex items-center justify-center bg-purple-50 border border-purple-100 text-[#7e22ce] px-2 py-0.5 text-xs rounded-md font-bold">
                  &lt; 5 minutes
                </span>
              </p>
            </motion.div>
          </div>

          {/* Right Side: Animated Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              type: "spring",
              damping: 20,
              stiffness: 100,
              delay: 0.5,
              duration: 1
            }}
            className="relative hidden lg:flex justify-center items-center"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#7e22ce]/20 to-fuchsia-500/20 rounded-3xl blur-3xl opacity-30 animate-pulse" />
            <motion.img
              src={HeroImg}
              alt="KaryaUp Platform Overview"
              className="relative rounded-2xl shadow-2xl border border-slate-200/50 max-w-[85%] object-cover transform hover:scale-[1.02] transition-transform duration-500"
              whileHover={{ rotateY: -5, rotateX: 5 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
