import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, CornerDownLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Task2 from "../../assets/Task2.png";

const points = [
  "Assign owners, due dates, and priorities in seconds",
  "Subtasks, attachments, and comments to keep context together",
  "Track progress across teams with clear statuses",
  "Filter by member, brand, and priority for instant focus",
];

export default function Tasks() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      {/* Hero */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-black uppercase tracking-widest"
              >
                Features <span className="opacity-60">/</span> Tasks
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.06]"
              >
                A task management platform
                <span className="block">
                  that{" "}
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-[#ec4899] to-[#7e22ce] bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    saves time
                  </motion.span>
                  .
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="mt-4 text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto lg:mx-0"
              >
                Plan, prioritize, and keep work moving — all while staying connected with team collaboration and real-time updates in KaryaUp.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
                className="mt-6 grid gap-2.5 max-w-2xl mx-auto lg:mx-0"
              >
                {points.map((t) => (
                  <div key={t} className="flex items-start gap-2.5 text-left">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#7e22ce]" />
                    </span>
                    <span className="text-slate-700 font-semibold">{t}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.38 }}
                className="mt-7 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
              >
                <Link
                  to="/start"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-slate-900 text-white font-black shadow-lg shadow-slate-900/15 hover:shadow-xl hover:shadow-slate-900/20 transition-all hover:-translate-y-0.5"
                >
                  Get Started. It&apos;s FREE <ArrowRight className="inline-block w-4 h-4 ml-1.5 -mt-0.5" />
                </Link>
                <div className="text-xs text-slate-500 font-semibold">
                  Free forever. <span className="opacity-70">No credit card.</span>
                </div>
              </motion.div>
            </div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="relative lg:-mr-24 xl:-mr-40"
            >
              <div className="absolute -inset-8 bg-gradient-to-tr from-[#7e22ce]/16 via-fuchsia-500/8 to-transparent blur-3xl opacity-55" />
              <div className="relative overflow-hidden border border-slate-200/80 rounded-3xl shadow-2xl shadow-slate-900/10 bg-white">
                <img
                  src={Task2}
                  alt="KaryaUp task management"
                  className="w-full h-[360px] sm:h-[420px] lg:h-[500px] object-cover object-left"
                />
                {/* Right-side invisible/fade effect like reference */}
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 sm:w-44 lg:w-56 bg-gradient-to-r from-transparent via-white/70 to-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Agent */}
      <section className="mt-14 sm:mt-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="border border-slate-200 rounded-3xl bg-white overflow-hidden"
              style={{ boxShadow: "0 18px 50px -36px rgba(2,6,23,0.28)" }}
            >
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-2 text-purple-700 font-black uppercase tracking-widest text-xs">
                  <Sparkles className="w-4 h-4" />
                  AI Agent for Tasks
                </div>
                <h2 className="mt-3 text-2xl sm:text-3xl font-black text-slate-900">
                  Prompt it. The agent creates and assigns tasks automatically.
                </h2>
                <p className="mt-2 text-slate-600 font-medium max-w-3xl">
                  KaryaUp comes with an integrated agent that can take your prompt, break the work into tasks, assign owners,
                  set priority + due dates, and keep progress updated — all inside your workspace.
                </p>

                <div className="mt-7 grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  {/* Prompt panel */}
                  <div className="lg:col-span-5">
                    <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden">
                      <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                        <div className="text-xs font-black uppercase tracking-widest text-slate-500">
                          Prompt
                        </div>
                        <div className="text-xs font-semibold text-slate-400">
                          <CornerDownLeft className="inline-block w-3.5 h-3.5 -mt-0.5 mr-1" />
                          Enter
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 font-semibold leading-relaxed">
                          “Create tasks for launching our new landing page next week. Assign design to Aisha, dev to Rahul,
                          QA to Priya. Set high priority and due Friday.”
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {["Create tasks", "Assign owners", "Set due date", "High priority"].map((t) => (
                            <span
                              key={t}
                              className="text-[11px] font-black uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border bg-white text-slate-500"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="px-4 pb-4">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-[#7e22ce]" />
                          <div className="text-xs font-semibold text-slate-500">
                            Agent is generating a plan…
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Output panel */}
                  <div className="lg:col-span-7">
                    <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden">
                      <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                        <div className="text-xs font-black uppercase tracking-widest text-slate-500">
                          Generated tasks
                        </div>
                        <div className="text-xs font-semibold text-slate-400">Auto-assigned • Auto-dated</div>
                      </div>
                      <div className="p-4 grid gap-3">
                        {[
                          { title: "Finalize landing page wireframe", owner: "Aisha", due: "Wed", pr: "High" },
                          { title: "Implement landing page sections", owner: "Rahul", due: "Thu", pr: "High" },
                          { title: "QA + cross-browser checks", owner: "Priya", due: "Fri", pr: "High" },
                          { title: "Publish & verify analytics", owner: "Rahul", due: "Fri", pr: "Normal" },
                        ].map((t, i) => (
                          <motion.div
                            key={t.title}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.4 }}
                            transition={{ duration: 0.5, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
                            className="border border-slate-200 rounded-xl px-4 py-3 flex items-center gap-3"
                          >
                            <span className="w-7 h-7 rounded-lg bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                              <Check className="w-4 h-4 text-[#7e22ce]" />
                            </span>
                            <div className="min-w-0 flex-1">
                              <div className="font-black text-slate-900 truncate">{t.title}</div>
                              <div className="mt-0.5 text-xs font-semibold text-slate-500 flex flex-wrap gap-x-3 gap-y-1">
                                <span>Owner: <span className="text-slate-700">{t.owner}</span></span>
                                <span>Due: <span className="text-slate-700">{t.due}</span></span>
                              </div>
                            </div>
                            <span
                              className="text-[11px] font-black uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border"
                              style={{
                                borderColor: t.pr === "High" ? "rgba(239,68,68,0.35)" : "rgba(148,163,184,0.45)",
                                background: t.pr === "High" ? "rgba(239,68,68,0.08)" : "rgba(148,163,184,0.10)",
                                color: t.pr === "High" ? "rgb(185,28,28)" : "rgb(71,85,105)",
                              }}
                            >
                              {t.pr}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                      <div className="px-4 pb-4">
                        <div className="text-xs font-semibold text-slate-500">
                          The agent can also update statuses, reassign owners, and add subtasks from a single prompt.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="mt-14 sm:mt-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid gap-6 sm:gap-8">
            {[
              {
                title: "Create tasks your team actually finishes",
                desc: "Break work into clear steps with owners, due dates, priorities, and status — so everyone knows what to do next.",
              },
              {
                title: "Keep all context inside the task",
                desc: "Attachments, notes, and comments stay with the task. No more hunting across tools to find what matters.",
              },
              {
                title: "Stay on top with filters + views",
                desc: "Search and filter by member, priority, or brand to instantly focus. Switch views as your workflow changes.",
              },
            ].map((b) => (
              <div key={b.title} className="border border-slate-200 rounded-3xl p-6 sm:p-8 bg-white">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">{b.title}</h2>
                <p className="mt-2 text-slate-600 font-medium">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
