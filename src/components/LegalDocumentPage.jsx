import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LegalDocumentPage({ title, intro, sections }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-fuchsia-50 overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-[#7e22ce]/20 to-fuchsia-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-fuchsia-500/20 to-[#7e22ce]/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 pt-28 pb-20 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-purple-700 shadow-sm">
            Legal
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto] bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            {intro}
          </p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="bg-white/75 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6 sm:p-8 lg:p-12 max-w-5xl mx-auto"
        >
          <div className="space-y-6 sm:space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.06 }}
                className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-[#7e22ce] to-fuchsia-500 text-sm font-black text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                      {section.title}
                    </h2>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700 font-medium">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-center mt-12"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7e22ce] to-fuchsia-500 px-6 py-3 text-white font-black shadow-lg hover:shadow-xl transition-all"
          >
            Back to KaryaUp
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
