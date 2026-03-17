import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Clock, Activity, LayoutDashboard, MessageSquare, Briefcase, Database, CheckCircle2, Zap, ArrowRight, Layers, Target, TrendingUp } from "lucide-react";
import logo from "../assets/logo.png";

const ScatteredWork = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
  };

  return (
    <section className="py-10 sm:py-12 bg-white overflow-hidden relative border-y border-slate-200">
      <style>
        {`
          @keyframes wave-move {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          .animate-wave-text {
            background: linear-gradient(
              90deg, 
              #7e22ce 0%, 
              #7e22ce 40%, 
              #f0abfc 50%, 
              #7e22ce 60%, 
              #7e22ce 100%
            );
            background-size: 200% 100%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: wave-move 2.5s linear infinite;
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Unified Container Box */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[3rem] border border-slate-200 shadow-2xl overflow-hidden"
        >

          {/* LEFT SIDE: The Problem (Scattered Tools) */}
          <div className="p-6 sm:p-8 lg:p-10 relative bg-slate-50/50 border-b lg:border-b-0 lg:border-r border-slate-200 group/problem">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.4] bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold self-start border border-slate-300 shadow-sm backdrop-blur-sm border-red-300">
                  <AlertTriangle size={14} className="text-slate-600" />
                  The Problem
                </motion.div>
            
              </div>

              <motion.h2
                variants={itemVariants}
                className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-[1.1] mb-3 tracking-tight"
              >
                Work is scattered across <br className="hidden sm:block" /> <span className="text-slate-500">too many tools</span>
              </motion.h2>

              <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-600 mb-5 font-medium italic">
                The average team uses <span className="font-bold text-slate-900 border-b-2 border-rose-300">8–12 tools daily</span>.
              </motion.p>

              <motion.div variants={containerVariants} className="space-y-2 mb-6 w-full">
                {[
                  { text: "Projects in one place.", icon: <Briefcase size={16} /> },
                  { text: "Tasks in another.", icon: <LayoutDashboard size={16} /> },
                  { text: "Conversations somewhere else.", icon: <MessageSquare size={16} /> },
                  { text: "CRM in a separate system.", icon: <Database size={16} /> },
                ].map((item, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="flex items-center gap-3 text-slate-500 text-sm font-semibold bg-white p-3 rounded-xl shadow-sm border border-slate-200 opacity-90">
                    <div className="text-slate-400">{item.icon}</div>
                    {item.text}
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="mt-auto h-auto lg:h-[260px] flex flex-col justify-between bg-white rounded-[2rem] p-6 sm:p-8 shadow-xl border border-slate-100 relative group-hover/problem:border-rose-200 transition-colors duration-500">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-6 h-1 bg-rose-500 rounded-full inline-block"></span>
                    Result:
                  </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Clock size={20} className="text-rose-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm font-medium"><strong className="text-slate-900">30% time lost</strong> in context switching</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle size={20} className="text-rose-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm font-medium">Missed deadlines and unclear ownership</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Activity size={20} className="text-rose-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm font-medium">No real visibility across teams</span>
                  </li>
                </ul>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <p className="text-rose-600 text-sm font-bold leading-snug underline underline-offset-4 decoration-rose-200">Execution slows down.</p>
                </div>
              </motion.div>
            </div>
          </div>


          {/* RIGHT SIDE: The Solution (KaryaUp) */}
          <div className="p-6 sm:p-8 lg:p-10 relative bg-[#7e22ce] overflow-hidden">
            {/* Glowing Accent */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-400/20 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/4" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold self-start border border-white/30 backdrop-blur-sm">
                  <Zap size={14} className="text-white" />
                  The Solution
                </motion.div>
               
              </div>

              <motion.h2
                variants={itemVariants}
                className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-[1.1] mb-3 tracking-tight"
              >
                One workspace.<br className="hidden sm:block" /> <span className="text-purple-200">Total clarity.</span>
              </motion.h2>

              <motion.p variants={itemVariants} className="text-base sm:text-lg text-purple-100 font-medium mb-5">
                KaryaUp brings everything into one system — built for execution.
              </motion.p>

              <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  { text: "Plan work.", icon: <Layers size={16} /> },
                  { text: "Collaborate in context.", icon: <MessageSquare size={16} /> },
                  { text: "Track performance.", icon: <TrendingUp size={16} /> },
                  { text: "Understand results.", icon: <Target size={16} /> },
                ].map((item, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="flex items-center gap-3 text-white text-sm font-semibold bg-white/10 p-3 sm:p-4 rounded-xl border border-white/20 shadow-sm hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                    <div className="text-purple-300">{item.icon}</div>
                    {item.text}
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-auto">
                <motion.div variants={itemVariants} className="h-auto lg:h-[260px] flex flex-col justify-center bg-purple-200 rounded-[2rem] p-6 sm:p-8 shadow-2xl shadow-purple-900/50 border border-purple-100 group transition-all duration-500 ring-1 ring-purple-100/50">
                  <div className="relative z-10 w-full">
                    <p className="text-black font-bold mb-4 text-sm flex items-center flex-wrap gap-2 gap-y-1 uppercase tracking-wider">
                      From idea <ArrowRight size={14} className="text-purple-500" /> execution <ArrowRight size={14} className="text-purple-500" /> outcome
                    </p>

                    <ul className="space-y-3 font-black text-xl sm:text-3xl text-Black -900 tracking-tight">
                      {[
                        "Plan the Karya.",
                        "Move the Karya.",
                        "Complete the Karya."
                      ].map((text, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle2 size={28} className="text-fuchsia-500 group-hover:scale-110 transition-transform" />
                          <span className="group-hover/problem:animate-wave-text inline-block transition-all duration-300 text-[#7e22ce]">
                            {text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ScatteredWork;
