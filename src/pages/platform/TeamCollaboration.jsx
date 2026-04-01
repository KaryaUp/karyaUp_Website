import { motion } from "framer-motion";
import { Check } from "lucide-react";
import dashboardImage from "../../assets/dashboard2.webp";
import planImage from "../../assets/Gantt.webp";
import { Link } from "react-router-dom";
import FeatureCTA from "../../components/FeatureCTA";

export default function TeamCollaboration() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden pt-20 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 text-slate-900">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-4 sm:pt-6 lg:pt-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">

            {/* Left */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[10px] sm:text-xs font-black uppercase tracking-widest"
              >
                Platform <span className="opacity-60">/</span> Team Collaboration
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.06]"
              >
                Smarter Collaboration
                <span className="block">
                  {" "}
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    Powered by AI
                  </motion.span>
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="mt-5 sm:mt-6 space-y-3 sm:space-y-4 max-w-lg w-full"
              >
                {[
                  "From real‑time chat to intelligent task coordination.",
                  "KaryaUp AI helps your team collaborate efficiently and make faster, better decisions."
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 text-left">
                    <div className="mt-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#7e22ce] stroke-[4]" />
                    </div>
                    <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
                className="mt-6 sm:mt-8 grid grid-cols-2 gap-2 sm:gap-3 w-full max-w-xs sm:max-w-md"
              >
                {["Real-time Chat", "File Sharing", "Screen Recording", "AI Agents"].map((tag) => (
                  <div key={tag} className="group flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-slate-50/50 border border-slate-200/60 shadow-sm hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-300">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-emerald-100 border border-emerald-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Check className="w-2.5 h-2.5 text-emerald-600 stroke-[4]" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.1em] text-slate-600 truncate">{tag}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right – Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0 lg:-mr-12 xl:-mr-24 lg:-translate-y-8 xl:-translate-y-12"
            >
              <div className="relative overflow-hidden shadow-xl sm:shadow-2xl shadow-slate-900/10 bg-white">
                <img
                  src={dashboardImage}
                  alt="KaryaUp team collaboration dashboard"
                  className="w-full h-[250px] sm:h-[300px] md:h-[280px] lg:h-[380px] xl:h-[350px] object-cover object-left-top bg-white transition-all duration-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= TEAM COLLABORATION SECTION ================= */}
      <section className="px-10 w-screen relative left-1/2 right-1/2 -translate-x-1/2 py-10 bg-gradient-to-b from-white to-slate-50">
  <div className="max-w-6xl mx-auto px-6 lg:px-8">
    <div className="text-center mb-12">
      <motion.h1
        initial={{ opacity: 0, y: 40, x: -10 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 100, delay: 0.1 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-2 pt-5 drop-shadow-sm"
      >
        Where Communication
        <motion.span
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
          animate={{ backgroundPosition: ["0% center", "-200% center"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <br />Meets Execution
        </motion.span>
      </motion.h1>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* LEFT IMAGE SLIDES IN FROM LEFT */}
      <motion.div
        initial={{ x: -190, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={planImage}
          alt="Project planning view in KaryaUp"
          className="rounded-xl shadow-xl border border-slate-200 w-full"
        />
      </motion.div>

      {/* RIGHT LIST SLIDES IN FROM RIGHT */}
      <motion.div
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <ul className="space-y-4 text-slate-700">
          {[
            "Task‑based discussions tied directly to work items.",
            "Real‑time chat and alerts so no one is out of sync.",
            "Seamless file and media sharing inside each project.",
            "Screen recording and sharing for quick context.",
            "Centralized communication so context is never lost.",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-1"
            >
              <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-fuchsia-100 text-fuchsia-600 font-bold text-sm">
                {i + 1}
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </div>
</section>


      {/* ================= ROADMAP / PLANNING SECTION ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">

            <motion.h1
              initial={{ opacity: 0, y: 40, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 100, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-2 pt-5 drop-shadow-sm"
            >
              Plan, Track, &
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <br />Ship better
              </motion.span>
          </motion.h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* LEFT IMAGE SLIDES IN FROM LEFT */}
      <motion.div
        initial={{ x: -190, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={planImage}
          alt="Project planning view in KaryaUp"
          className="rounded-xl shadow-xl border border-slate-200 w-full"
        />
      </motion.div>

      {/* RIGHT LIST SLIDES IN FROM RIGHT */}
      <motion.div
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <ul className="space-y-4 text-slate-700">
          {[
            "Task‑based discussions tied directly to work items.",
            "Real‑time chat and alerts so no one is out of sync.",
            "Seamless file and media sharing inside each project.",
            "Screen recording and sharing for quick context.",
            "Centralized communication so context is never lost.",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-1"
            >
              <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-fuchsia-100 text-fuchsia-600 font-bold text-sm">
                {i + 1}
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
    </div>
          
        </div>
      </section>
      {/* ================= FEATURE CTA SECTION ================= */}
      <FeatureCTA
        title={
          <>
            Tasks that connect to everything you do
          </>
        }
        description="Work smarter with tasks that can live in your whiteboards, chat, calendar — anywhere you work"
        image={dashboardImage}
        imageAlt="KaryaUp dashboard"
        containerClassName="mt-10 mb-20"
        paddingClassName="p-3 lg:p-4 lg:py-6"
        imageClassName="w-full max-w-[940px]"
        imageOuterClassName="relative w-[108%] lg:w-full translate-x-4 lg:translate-x-8"
      />
    </div>
  );
}