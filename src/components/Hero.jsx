import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 text-center min-h-[calc(100vh-80px)] flex items-center justify-center">

      {/* Background ambient glow centered */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#7e22ce]/15 rounded-full blur-[100px] opacity-60 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
        >
          The platform to run your <br className="hidden sm:block" />
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
            animate={{ backgroundPosition: ["0% center", "-200% center"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            entire company
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-600 mb-6 max-w-3xl mx-auto leading-relaxed"
        >
          Plan projects, manage teams, track time, close deals, and understand performance — all from one workspace.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl font-bold text-slate-800 mb-8"
        >
          KaryaUp replaces <span className="text-[#7e22ce]">6+ tools</span> with one unified system.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8"
        >
          <Link
            to="/start"
            className="w-full sm:w-auto px-6 py-3 rounded-full text-white font-bold text-base shadow-lg shadow-[#7e22ce]/30 hover:shadow-xl hover:shadow-[#7e22ce]/40 transition-all hover:-translate-y-1 bg-[#7e22ce]"
          >
            Start Free Workspace
          </Link>
          <button
            className="w-full sm:w-auto px-6 py-3 rounded-full text-slate-700 font-bold text-base border border-slate-200 hover:border-[#7e22ce]/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#7e22ce]/10 flex items-center justify-center gap-2 group hover:text-[#7e22ce]"
          >
            <Play className="w-4 h-4 text-slate-400 group-hover:text-[#7e22ce] transition-colors" />
            Watch Demo
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col items-center gap-2 text-sm font-medium text-slate-500"
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
    </section>
  );
};

export default Hero;
