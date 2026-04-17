import React from "react";
import { motion as Motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  "Reduced tool usage by 70% -everything is now in one place.",
  "We improved execution speed within the first week.",
  "For the first time, we can actually see everything happening.",
  "The clarity this platform provides is a complete game changer.",
  "Our team communication has never been more aligned.",
];

const ReviewStrip = () => {
  return (
    <section className="bg-white relative overflow-hidden font-sans">
      <div className="w-full relative z-10">
        <div className="mb-2 sm:mb-3 overflow-hidden relative w-full h-8 sm:h-12 flex items-center rounded-none bg-white/90 backdrop-blur-3xl">
          <Motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-8 sm:gap-20 whitespace-nowrap"
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="flex items-center gap-3 sm:gap-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} size={8} className="text-amber-400 sm:w-[10px] sm:h-[10px]" fill="currentColor" />
                  ))}
                </div>
                <span className="text-slate-400 font-bold text-xs sm:text-sm tracking-normal italic">"{t}"</span>
              </div>
            ))}
          </Motion.div>
          <div className="absolute inset-y-0 left-0 w-8 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-8 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default ReviewStrip;
