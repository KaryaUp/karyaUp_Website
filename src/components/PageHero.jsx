import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function PageHero({
  pillText,
  titleBlack,
  titleGradient,
  descriptionList = [],
  tags = [],
  imageSrc,
  imageAlt,
  sectionSpacing = "py-12 sm:py-16 lg:py-20",
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className={`relative pt-4 sm:pt-6 lg:pt-8 ${sectionSpacing}`}>
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
              {pillText || "Features / Module"}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.06]"
            >
              {titleBlack}
              <span className="block">
                {" "}
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  {titleGradient}
                </motion.span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="mt-5 sm:mt-6 space-y-3 sm:space-y-4 max-w-lg w-full"
            >
              {descriptionList.map((text, i) => (
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

            {tags.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
                className="mt-6 sm:mt-8 grid grid-cols-2 gap-2 sm:gap-3 w-full max-w-xs sm:max-w-md"
              >
                {tags.map((tag) => (
                  <div key={tag} className="group flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-slate-50/50 border border-slate-200/60 shadow-sm hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-300">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-emerald-100 border border-emerald-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Check className="w-2.5 h-2.5 text-emerald-600 stroke-[4]" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.1em] text-slate-600 truncate">{tag}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Right – Image */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0 lg:-mr-12 xl:-mr-24"
          >
            <div className="relative overflow-hidden  shadow-xl sm:shadow-2xl shadow-slate-900/10 bg-white">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-[250px] sm:h-[300px] md:h-[280px] lg:h-[380px] xl:h-[350px] object-cover object-left-top bg-white transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
