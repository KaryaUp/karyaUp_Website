import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, Zap, BarChart2, MessageSquare,
  Smartphone, Users, Bot, Bell, ShieldCheck, CalendarDays,
  Layers, ChevronDown,
} from "lucide-react";
import FeatureCTA from "../../components/FeatureCTA";
import logo from "../../assets/logo.png";


/* ─── Changelog data ─────────────────────────────────────── */
const updates = [
  {
    version: "v2.6",
    date: "March 2026",
    tag: "New",
    tagColor: "bg-purple-100 text-purple-700",
    dotColor: "bg-purple-500",
    icon: Bot,
    iconBg: "bg-purple-50 text-purple-600",
    title: "KaryaUp AI — Smart Task Suggestions",
    desc: "KaryaUp AI now analyses your team's patterns to suggest tasks, deadlines, and the best person for each job. Less manual setup, faster execution.",
    details:
      "When you open a new project or task, the AI sidebar automatically surfaces relevant suggestions drawn from past work, file contents, and team capacity. You can accept, dismiss, or edit recommendations in one click. The model updates weekly based on your workspace data.",
    highlights: [
      "Context-aware task generation from project briefs",
      "Smart deadline predictions based on historical velocity",
      "Assignee suggestions that account for current workload",
      "One-click accept / dismiss for every suggestion",
    ],
  },
  {
    version: "v2.5",
    date: "March 2026",
    tag: "New",
    tagColor: "bg-purple-100 text-purple-700",
    dotColor: "bg-emerald-500",
    icon: BarChart2,
    iconBg: "bg-emerald-50 text-emerald-600",
    title: "Gantt Charts & Dependency Management",
    desc: "Plan projects visually with full Gantt chart support, drag-to-reschedule, and task dependency links. Now generally available for all plans.",
    details:
      "The Gantt view lives inside every project and syncs in real-time with your task list. Drag the timeline bar to shift dates; draw arrows between tasks to set blockers. The critical path auto-highlights whenever a milestone is at risk. Export to PDF for stakeholder reports.",
    highlights: [
      "Drag-and-drop timeline bars with live sync",
      "Dependency arrows with auto-blocker warnings",
      "Milestone markers with colour-coded status",
      "Critical-path highlighting and PDF export",
    ],
  },
  {
    version: "v2.4",
    date: "February 2026",
    tag: "Improved",
    tagColor: "bg-amber-100 text-amber-700",
    dotColor: "bg-amber-500",
    icon: Zap,
    iconBg: "bg-amber-50 text-amber-600",
    title: "Automation Engine Upgrade",
    desc: "Multi-step automations, conditional branches, and external webhook support. Build sophisticated logic flows without writing a single line of code.",
    details:
      "The visual flow builder received a complete overhaul: branch on any field value, loop over lists, call external APIs, and send Slack or email notifications at each step. Each automation run is logged with a detailed trace so you can debug exactly where things went wrong.",
    highlights: [
      "Multi-step flows with branching and loops",
      "External webhook & REST API call steps",
      "Full execution logs with step-by-step trace",
      "Pre-built automation templates for common workflows",
    ],
  },
  {
    version: "v2.3",
    date: "January 2026",
    tag: "New",
    tagColor: "bg-purple-100 text-purple-700",
    dotColor: "bg-blue-500",
    icon: Layers,
    iconBg: "bg-blue-50 text-blue-600",
    title: "Dashboard Custom Widgets",
    desc: "Drag, drop, and resize any widget on your home dashboard. Metric tiles, progress charts, task lists — all fully configurable.",
    details:
      "A new widget library gives you over 20 building blocks: KPI tiles, Bar & Donut charts, Kanban previews, Time-tracking summaries, CRM pipeline funnels, and more. Dashboards are role-aware, so every team member can see the numbers that matter most to them.",
    highlights: [
      "20+ widget types including charts, KPIs, and lists",
      "Per-role dashboard presets for instant onboarding",
      "Resize and reorder with pixel-perfect drag handles",
      "Live data refresh with configurable intervals",
    ],
  },
  {
    version: "v2.2",
    date: "December 2025",
    tag: "New",
    tagColor: "bg-purple-100 text-purple-700",
    dotColor: "bg-indigo-500",
    icon: MessageSquare,
    iconBg: "bg-indigo-50 text-indigo-600",
    title: "Built-in Chat Channels",
    desc: "Real-time team messaging fully integrated into KaryaUp. Create topic channels, thread conversations, and share files — all in one place.",
    details:
      "Channels can be linked to specific projects, departments, or topics. Every message supports rich-text formatting, @mentions, task references, and emoji reactions. Voice and video calls are coming in Q1 2026. Direct messages work both 1-on-1 and in small groups.",
    highlights: [
      "Project-linked and department channels",
      "Threaded replies to keep conversations organised",
      "Task references and rich-text formatting",
      "File sharing with inline preview (images, PDFs, docs)",
    ],
  },
  {
    version: "v2.1",
    date: "November 2025",
    tag: "Improved",
    tagColor: "bg-amber-100 text-amber-700",
    dotColor: "bg-rose-500",
    icon: Smartphone,
    iconBg: "bg-rose-50 text-rose-600",
    title: "Mobile App Redesign",
    desc: "Brand-new iOS and Android apps with a cleaner interface, offline access, and silky-smooth 60 fps animations throughout.",
    details:
      "The new app is built on a unified React Native codebase that shares logic with the desktop client. Offline mode queues all edits and syncs when connectivity is restored. The navigation bar is now gesture-driven, and heavy views such as Gantt and reports load in under 800 ms even on mid-range devices.",
    highlights: [
      "Full offline mode with automatic sync-on-reconnect",
      "Gesture-driven navigation and swipe actions on tasks",
      "Under 800 ms load time for Gantt and report screens",
      "Biometric lock and per-device session management",
    ],
  },
  {
    version: "v2.0",
    date: "October 2025",
    tag: "New",
    tagColor: "bg-purple-100 text-purple-700",
    dotColor: "bg-sky-500",
    icon: Users,
    iconBg: "bg-sky-50 text-sky-600",
    title: "Team Hierarchy & Role Management",
    desc: "Mirror your org structure in KaryaUp with custom roles, department isolation, and granular permission sets for every action.",
    details:
      "Admins can define unlimited custom roles and attach a permission matrix to each one — down to the level of individual fields. Departments are sandboxed so members only see what's relevant. Bulk invite via CSV brings even large teams online in minutes.",
    highlights: [
      "Unlimited custom roles with field-level permissions",
      "Department sandboxing for data isolation",
      "Bulk invite via CSV with automatic role assignment",
      "Role-change audit trail viewable by admins",
    ],
  },
  {
    version: "v1.9",
    date: "September 2025",
    tag: "Improved",
    tagColor: "bg-amber-100 text-amber-700",
    dotColor: "bg-orange-500",
    icon: Bell,
    iconBg: "bg-orange-50 text-orange-600",
    title: "Smart Notifications Centre",
    desc: "Rebuilt notifications with digest emails, grouped alerts, and smart snooze. Stay informed without drowning in noise.",
    details:
      "You now control exactly when and how you are notified — per channel, per workspace, and per device. Digest mode batches low-priority alerts into a single daily email. The snooze feature resurfaces a notification at a time you choose, so nothing slips through the cracks.",
    highlights: [
      "Configurable digests: real-time, hourly, or daily",
      "Smart grouping of related alerts into a single card",
      "Snooze with custom resurface time or date",
      "Per-channel, per-device notification preferences",
    ],
  },
  {
    version: "v1.8",
    date: "August 2025",
    tag: "Improved",
    tagColor: "bg-amber-100 text-amber-700",
    dotColor: "bg-green-500",
    icon: ShieldCheck,
    iconBg: "bg-green-50 text-green-600",
    title: "Enterprise Security & Audit Logs",
    desc: "Full action audit trail, SAML 2.0 SSO, enforced 2FA, and GDPR-ready data export — everything large teams need to stay compliant.",
    details:
      "Every create, edit, delete, and share action is logged with the actor's identity, timestamp, and IP address. Logs can be exported to CSV or streamed to any SIEM via webhook. Password policies, session timeouts, and IP allowlists are configurable from the Security settings panel.",
    highlights: [
      "Immutable audit trail with 12-month retention",
      "SAML 2.0 SSO and SCIM provisioning support",
      "IP allowlisting and configurable session timeouts",
      "One-click GDPR data export for any user",
    ],
  },
  {
    version: "v1.7",
    date: "July 2025",
    tag: "New",
    tagColor: "bg-purple-100 text-purple-700",
    dotColor: "bg-pink-500",
    icon: CalendarDays,
    iconBg: "bg-pink-50 text-pink-600",
    title: "Salary & Attendance Tracking",
    desc: "Track attendance, manage leaves, and generate salary slips automatically. A full HR suite built right into your workspace.",
    details:
      "Attendance can be logged manually, via the mobile app, or through an integrated biometric device. Leave balances update in real time and feed directly into the payroll calculation. Salary slips are generated as branded PDFs and can be emailed to employees with a single click.",
    highlights: [
      "Biometric device integration for auto clock-in",
      "Real-time leave balance tracking for all staff",
      "Automated payroll calculation with tax deductions",
      "Branded PDF payslip generation and bulk email",
    ],
  },
];

const FILTERS = ["All", "New", "Improved"];

/* ─── Animated SVG Illustration (Laptop Style for Hero) ─────────────────────────── */
function UpdatesIllustration() {
  return (
    <div className="relative w-full h-full flex items-start justify-center select-none pt-4 lg:pt-0">
      {/* Glow blobs */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-purple-500/20 blur-[80px]" />
      <div className="absolute bottom-10 left-10 w-52 h-52 rounded-full bg-fuchsia-500/20 blur-[80px]" />

      <svg viewBox="0 0 500 380" className="w-full max-w-lg drop-shadow-2xl overflow-visible">
        {/* Laptop Screen Frame bg */}
        <rect x="30" y="30" width="440" height="290" rx="16" fill="#1e293b" stroke="#334155" strokeWidth="2" />

        {/* Screen Inner */}
        <rect x="40" y="40" width="420" height="270" rx="6" fill="#0f1117" />

        {/* Screen Gradient Overlay */}
        <defs>
          <radialGradient id="heroLaptopGlow" cx="50%" cy="0%" r="80%">
            <stop stopColor="#9333ea" stopOpacity="0.25" />
            <stop offset="1" stopColor="transparent" />
          </radialGradient>
        </defs>
        <rect x="40" y="40" width="420" height="270" rx="6" fill="url(#heroLaptopGlow)" />

        {/* Top Navbar in Screen */}
        <rect x="40" y="40" width="420" height="40" fill="#ffffff" fillOpacity="0.03" rx="6" />
        <circle cx="60" cy="60" r="4" fill="#ef4444" />
        <circle cx="76" cy="60" r="4" fill="#f59e0b" />
        <circle cx="92" cy="60" r="4" fill="#10b981" />
        <text x="250" y="64" fontSize="12" fill="#cbd5e1" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">Release Manager</text>

        {/* Left Sidebar (Miniature) */}
        <rect x="40" y="80" width="80" height="230" fill="#ffffff" fillOpacity="0.02" />
        <rect x="52" y="96" width="56" height="8" rx="4" fill="#ffffff" fillOpacity="0.2" />
        <rect x="52" y="116" width="40" height="6" rx="3" fill="#ffffff" fillOpacity="0.1" />
        <rect x="52" y="132" width="48" height="6" rx="3" fill="#ffffff" fillOpacity="0.1" />
        <rect x="52" y="148" width="36" height="6" rx="3" fill="#ffffff" fillOpacity="0.1" />

        {/* Main Workspace (Release Draft) */}
        {/* Editor Title */}
        <text x="140" y="112" fontSize="18" fill="#ffffff" fontFamily="sans-serif" fontWeight="bold">v2.6 Update Notes</text>
        <rect x="140" y="126" width="200" height="6" rx="3" fill="#ffffff" fillOpacity="0.4" />
        <rect x="140" y="142" width="160" height="6" rx="3" fill="#ffffff" fillOpacity="0.4" />

        {/* Floating "Published" Toggle / Button */}
        <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
          <rect x="340" y="94" width="90" height="28" rx="14" fill="#9333ea" />
          <text x="362" y="112" fontSize="11" fill="#ffffff" fontFamily="sans-serif" fontWeight="bold">Publish 🚀</text>
        </motion.g>

        {/* Changelog Entries Display in mockup */}
        <g transform="translate(140, 170)">
          <rect x="0" y="0" width="260" height="120" rx="8" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff10" strokeWidth="1" />
          {/* Item 1 */}
          <circle cx="20" cy="24" r="8" fill="#10b981" fillOpacity="0.2" />
          <circle cx="20" cy="24" r="4" fill="#10b981" />
          <rect x="36" y="21" width="120" height="6" rx="3" fill="#ffffff" fillOpacity="0.8" />
          <motion.rect x="36" y="21" height="6" rx="3" fill="#10b981" animate={{ width: [0, 120] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }} />

          {/* Item 2 */}
          <circle cx="20" cy="54" r="8" fill="#f59e0b" fillOpacity="0.2" />
          <circle cx="20" cy="54" r="4" fill="#f59e0b" />
          <rect x="36" y="51" width="160" height="6" rx="3" fill="#ffffff" fillOpacity="0.8" />
          <motion.rect x="36" y="51" height="6" rx="3" fill="#f59e0b" animate={{ width: [0, 160] }} transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatDelay: 1 }} />

          {/* Item 3 */}
          <circle cx="20" cy="84" r="8" fill="#3b82f6" fillOpacity="0.2" />
          <circle cx="20" cy="84" r="4" fill="#3b82f6" />
          <rect x="36" y="81" width="90" height="6" rx="3" fill="#ffffff" fillOpacity="0.8" />
          <motion.rect x="36" y="81" height="6" rx="3" fill="#3b82f6" animate={{ width: [0, 90] }} transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 1 }} />
        </g>

        {/* Laptop Base */}
        <path d="M10 320 L490 320 L510 340 L-10 340 Z" fill="#94a3b8" />
        <path d="M-10 340 L510 340 L510 346 C510 350 506 352 502 352 L-2 352 C-6 352 -10 350 -10 346 Z" fill="#64748b" />
        <rect x="220" y="322" width="60" height="6" rx="3" fill="#cbd5e1" />

        {/* Floating Gear Badge (Top Right Corner - Repositioned to laptop frame corner) */}
        <motion.g
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: [0, -8, 0], opacity: 1 }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          transform="translate(378, 22)"
        >
          {/* Badge Background with stronger shadow for 3D depth */}
          <rect x="0" y="0" width="105" height="115" rx="16" fill="#ffffff" filter="drop-shadow(0 20px 35px rgba(0,0,0,0.2))" stroke="#f1f5f9" strokeWidth="1" />

          <g transform="translate(52, 44) scale(0.32)">
            {/* Spinning Gear - More robust teeth */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(8)].map((_, i) => (
                <rect
                  key={i} x="-18" y="-75" width="36" height="150" rx="6"
                  fill="#1e293b"
                  transform={`rotate(${i * 45})`}
                />
              ))}
              <circle cx="0" cy="0" r="60" fill="#1e293b" />

              {/* Sync Arrows - Bolder for visibility */}
              <path d="M -40 0 A 40 40 0 0 1 30 -30" fill="none" stroke="#ffffff" strokeWidth="14" strokeLinecap="round" />
              <polygon points="15,-52 45,-30 15,-8" fill="#ffffff" />

              <path d="M 40 0 A 40 40 0 0 1 -30 30" fill="none" stroke="#ffffff" strokeWidth="14" strokeLinecap="round" />
              <polygon points="-15,52 -45,30 -15,8" fill="#ffffff" />

              <circle cx="0" cy="0" r="16" fill="#ffffff" />
            </motion.g>
          </g>

          {/* Loading Bar - Branded Gradient */}
          <rect x="18" y="82" width="70" height="8" rx="4" fill="#f1f5f9" />
          <motion.rect
            x="18" y="82" height="8" rx="4" fill="url(#heroLaptopGlow)"
            animate={{ width: [0, 70, 70, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Text - Clean and tracking */}
          <text x="52" y="104" fontSize="10" fontWeight="900" fill="#334155" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">
            UPDATE...
          </text>
        </motion.g>



      </svg>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────── */
const FILTERS_LIST = ["All", "New", "Improved"];

export default function ProductUpdates() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedId, setExpandedId] = useState(null);

  const filtered = activeFilter === "All" ? updates : updates.filter((u) => u.tag === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <div className="h-16 lg:h-20" />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-10 lg:pb-24">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 right-0 w-[700px] h-[700px] bg-purple-50/60 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-50/40 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid items-start gap-12 lg:gap-8 lg:grid-cols-[1fr_1fr]">

            {/* Left col */}
            <div className="pt-4 lg:pt-8">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-black uppercase tracking-widest text-amber-700 mb-6"
              >
                <Sparkles className="h-3.5 w-3.5" /> What's New in KaryaUp
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.06 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.03] mb-6"
              >
                Product{" "}
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Updates
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="text-lg lg:text-xl font-medium text-slate-500 max-w-xl mb-6 leading-relaxed"
              >
                We ship fast and build in public. Every new feature, improvement, and fix lands here — with full context on why we built it and how to use it.
              </motion.p>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-6 mb-8"
              >
                {[
                  { value: "10+", label: "Releases shipped" },
                  { value: "Weekly", label: "Shipping cadence" },
                  { value: "v2.6", label: "Latest version" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-black text-slate-900">{s.value}</div>
                    <div className="text-xs font-semibold text-slate-400 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </motion.div>


            </div>

            {/* Right col — animated illustration */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="hidden lg:flex items-start justify-center mt-2 lg:mt-0"
            >
              <UpdatesIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Changelog ────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-4">

        {/* Section Header (Restyled to match Tasks page - Compact) */}
        <div className="flex flex-col items-center text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[10px] font-black uppercase tracking-widest mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Product <span className="opacity-60">/</span> Timeline
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-3"
          >
            Evolution of{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              KaryaUp.
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl leading-relaxed"
          >
            Explore the history of improvements, features, and fixes we've shipped to make your team more productive.
          </motion.p>
        </div>

        {/* Centered filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="flex items-center justify-center gap-2 flex-wrap mb-10"
        >
          {FILTERS_LIST.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${activeFilter === f
                ? "bg-slate-900 text-white shadow-md"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[27px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-purple-200 via-slate-100 to-slate-50 rounded-full" />

          <div className="space-y-0">
            <AnimatePresence mode="popLayout">
              {filtered.map((update, index) => {
                const Icon = update.icon;
                const isExpanded = expandedId === update.version;

                return (
                  <motion.div
                    key={update.version}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.38, delay: index * 0.045 }}
                    className="relative flex gap-6"
                  >
                    {/* Timeline icon */}
                    <div className="flex-none flex flex-col items-center">
                      <div className={`relative z-10 mt-8 flex h-14 w-14 items-center justify-center rounded-2xl ${update.iconBg} shadow-sm border border-white ring-4 ring-white`}>
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    {/* Card */}
                    <div className="flex-1 pb-8 pt-6">
                      {/* Meta row */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={`text-xs font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${update.tagColor}`}>
                          {update.tag}
                        </span>
                        <span className="text-xs font-semibold text-slate-400">{update.date}</span>
                        <span className="text-xs font-bold text-slate-300">·</span>
                        <span className="text-xs font-bold text-slate-400">{update.version}</span>
                      </div>

                      {/* Card body */}
                      <div
                        className="rounded-[1.8rem] border border-slate-100 bg-white p-6 sm:p-8 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.09)] hover:shadow-[0_20px_50px_-20px_rgba(15,23,42,0.14)] hover:border-slate-200 transition-all duration-300 cursor-pointer"
                        onClick={() => setExpandedId(isExpanded ? null : update.version)}
                      >
                        {/* Title + chevron */}
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                            {update.title}
                          </h2>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.22 }}
                            className="mt-0.5 flex-none shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                          >
                            <ChevronDown className="h-4 w-4" />
                          </motion.div>
                        </div>

                        {/* Short desc always visible */}
                        <p className="text-base font-medium text-slate-500 leading-relaxed">
                          {update.desc}
                        </p>

                        {/* Expandable full detail */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.32 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-6 pt-6 border-t border-slate-100 space-y-6">
                                {/* Longer detail paragraph */}
                                <p className="text-sm font-medium text-slate-500 leading-relaxed">
                                  {update.details}
                                </p>

                                {/* Highlights */}
                                <div>
                                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">
                                    What's included
                                  </div>
                                  <ul className="grid sm:grid-cols-2 gap-2.5">
                                    {update.highlights.map((h) => (
                                      <li key={h} className="flex items-start gap-2.5 rounded-xl bg-slate-50 px-3.5 py-2.5 text-sm font-semibold text-slate-600">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7e22ce]" />
                                        {h}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

      </section>

      {/* ── FeatureCTA ─────────────────────────────────────── */}
      <UpdatesCTA />

    </div>
  );
}

/* ── Standalone Updates CTA — compact height ── */
function UpdatesCTA() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-16">
      <div className="relative rounded-[2.5rem] overflow-hidden bg-black flex flex-col lg:flex-row items-center border border-white/5 py-6 px-6 lg:px-10 gap-6">
        {/* Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(168,85,247,0.35),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(236,72,153,0.1),transparent_40%)] pointer-events-none" />

        {/* Left */}
        <div className="flex-1 z-20 text-left flex flex-col justify-center py-4 lg:py-6 lg:pl-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-9 mb-5 self-start"
          >
            <div className="relative h-full flex items-center">
              <img src={logo} alt="KaryaUp" className="h-full w-auto filter brightness-0 invert opacity-100" />
              <div className="absolute inset-0 pointer-events-none" style={{ clipPath: 'inset(0 75% 0 0)' }}>
                <img src={logo} alt="" className="h-full w-auto" />
              </div>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-4 tracking-tight"
          >
            Always shipping.<br />Always improving.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-slate-400 text-sm sm:text-base font-medium mb-6 max-w-md leading-relaxed"
          >
            Every week we ship new features based on your direct feedback. Keep an eye on our public roadmap and active changelog to help shape the future of what we build next.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 28px rgba(255,255,255,0.18)" }}
            whileTap={{ scale: 0.97 }}
            className="bg-white text-black px-8 py-3 rounded-[1.1rem] font-black text-sm hover:bg-slate-50 transition-all shadow-xl self-start"
          >
            Get started. It's FREE
          </motion.button>
        </div>

        {/* Right — laptop SVG */}
        <div className="flex-1 relative flex items-center justify-center lg:pr-4">
          {/* Glow */}
          <div className="absolute inset-0 bg-purple-600/30 blur-[100px] rounded-full pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative w-full max-w-md"
          >
            <LaptopUpdatesSVG />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Laptop-style animated SVG ── */
function LaptopUpdatesSVG() {
  const items = [
    { label: "New Dashboard", color: "#f97316", check: true },
    { label: "Improved Automation", color: "#8b5cf6", check: false },
    { label: "Bug Fix", color: "#22c55e", check: true },
  ];

  return (
    <svg viewBox="0 0 480 310" fill="none" className="w-full drop-shadow-2xl select-none">
      <defs>
        <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#e8eeff" />
          <stop offset="1" stopColor="#f3f4ff" />
        </linearGradient>
        <linearGradient id="laptopBodyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#d1d5db" />
          <stop offset="1" stopColor="#9ca3af" />
        </linearGradient>
        <linearGradient id="pieGrad" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#7c3aed" />
          <stop offset="1" stopColor="#ec4899" />
        </linearGradient>
        <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#0004" />
        </filter>
      </defs>

      {/* ── Laptop base ── */}
      <rect x="60" y="248" width="360" height="14" rx="4" fill="url(#laptopBodyGrad)" />
      <rect x="50" y="260" width="380" height="8" rx="4" fill="#b0b7c3" />
      {/* Hinge notch */}
      <rect x="210" y="248" width="60" height="6" rx="3" fill="#9ca3af" />

      {/* ── Screen border ── */}
      <rect x="72" y="30" width="336" height="220" rx="12" fill="#1e1b4b" />
      {/* Screen surface */}
      <rect x="78" y="36" width="324" height="208" rx="8" fill="url(#screenGrad)" />

      {/* ── Left sidebar (app chrome) ── */}
      <rect x="78" y="36" width="54" height="208" rx="8" fill="#4f46e5" />
      {/* Sidebar dots */}
      {[60, 80, 100, 120, 140, 160].map((y, i) => (
        <rect key={i} x="88" y={y} width="34" height="8" rx="4" fill="#ffffff22" />
      ))}
      <rect x="88" y="60" width="34" height="8" rx="4" fill="#ffffff55" />

      {/* ── Main content area ── */}
      {/* Top bar */}
      <rect x="132" y="42" width="264" height="22" rx="4" fill="#ffffffcc" />
      <circle cx="144" cy="53" r="5" fill="#f87171" />
      <circle cx="157" cy="53" r="5" fill="#fbbf24" />
      <circle cx="170" cy="53" r="5" fill="#34d399" />

      {/* ── Feature update panel ── */}
      <rect x="132" y="70" width="174" height="168" rx="10" fill="white" filter="url(#cardShadow)" />
      {/* Sun icon area */}
      <circle cx="155" cy="90" r="12" fill="#fef9c3" />
      <text x="148" y="95" fontSize="13" fontFamily="sans-serif">☀️</text>
      {/* Title */}
      <text x="172" y="93" fontSize="11" fontWeight="800" fill="#1e1b4b" fontFamily="sans-serif">New Features!</text>

      {/* Items */}
      {items.map((item, i) => {
        const y = 112 + i * 38;
        return (
          <g key={item.label}>
            <rect x="140" y={y} width="158" height="28" rx="8" fill="#f8fafc" />
            {/* Color dot */}
            <circle cx="155" cy={y + 14} r="8" fill={item.color} fillOpacity="0.18" />
            <circle cx="155" cy={y + 14} r="5" fill={item.color} />
            {/* Label */}
            <text x="170" y={y + 18} fontSize="9" fontWeight="700" fill="#374151" fontFamily="sans-serif">{item.label}</text>
            {/* Check / circle */}
            {item.check ? (
              <motion.circle cx="286" cy={y + 14} r="7" fill="#3b82f6"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 1.8, delay: i * 0.4, repeat: Infinity }}
              />
            ) : (
              <circle cx="286" cy={y + 14} r="7" fill="none" stroke="#d1d5db" strokeWidth="1.5" />
            )}
            {item.check && (
              <text x="282" y={y + 18} fontSize="8" fill="white" fontFamily="sans-serif">✓</text>
            )}
          </g>
        );
      })}

      {/* ── Floating right card – chart ── */}
      <g filter="url(#cardShadow)">
        <rect x="316" y="68" width="90" height="88" rx="10" fill="white" />
        {/* Pie slices (static arcs) */}
        <path d="M361 108 L361 84 A24 24 0 0 1 385 108 Z" fill="#7c3aed" />
        <path d="M361 108 L385 108 A24 24 0 0 1 361 132 Z" fill="#ec4899" />
        <path d="M361 108 L361 132 A24 24 0 0 1 337 108 Z" fill="#3b82f6" />
        <path d="M361 108 L337 108 A24 24 0 0 1 361 84 Z" fill="#10b981" />
        <circle cx="361" cy="108" r="10" fill="white" />
        {/* Bar chart mini */}
        <rect x="325" y="138" width="8" height="12" rx="2" fill="#7c3aed" />
        <rect x="336" y="133" width="8" height="17" rx="2" fill="#ec4899" />
        <rect x="347" y="136" width="8" height="14" rx="2" fill="#3b82f6" />
        <rect x="358" y="130" width="8" height="20" rx="2" fill="#10b981" />
        <rect x="369" y="134" width="8" height="16" rx="2" fill="#f59e0b" />
        <rect x="380" y="132" width="8" height="18" rx="2" fill="#7c3aed" />
        <text x="323" y="160" fontSize="7" fill="#9ca3af" fontFamily="sans-serif">Performance</text>
      </g>

      {/* ── Floating left card – list widget ── */}
      <g filter="url(#cardShadow)">
        <rect x="20" y="90" width="72" height="90" rx="10" fill="white" />
        {[100, 115, 130, 145, 160].map((y, i) => (
          <g key={i}>
            <rect x="28" y={y} width="10" height="7" rx="2" fill={["#7c3aed", "#3b82f6", "#10b981", "#f59e0b", "#ec4899"][i]} />
            <rect x="42" y={y + 1} width={[28, 22, 26, 20, 24][i]} height="5" rx="2" fill="#e5e7eb" />
          </g>
        ))}
      </g>

      {/* ── "All up to date" badge ── */}
      <g filter="url(#cardShadow)">
        <motion.g
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="290" y="22" width="108" height="26" rx="13" fill="#22c55e" />
          <motion.circle cx="306" cy="35" r="6" fill="white"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          />
          <text x="310" y="39" fontSize="9" fill="white" fontFamily="sans-serif" fontWeight="800">✓ All up to date</text>
        </motion.g>
      </g>

      {/* ── Heart speech bubble ── */}
      <g filter="url(#cardShadow)">
        <motion.g
          animate={{ y: [0, -6, 0], rotate: [-3, 3, -3] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="398" y="55" width="48" height="38" rx="10" fill="white" />
          <path d="M418 85 L424 95 L430 85" fill="white" />
          <text x="410" y="80" fontSize="18" fontFamily="sans-serif">❤️</text>
        </motion.g>
      </g>

      {/* ── Decorative gear ── */}
      <motion.text
        x="22" y="88" fontSize="28" fontFamily="sans-serif" fill="#d1d5db"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "36px 72px" }}
      >⚙️</motion.text>

      {/* ── Sparkle dots ── */}
      {[[92, 34], [130, 20], [420, 180], [64, 200]].map(([x, y], i) => (
        <motion.circle key={i} cx={x} cy={y} r="3.5"
          fill={["#7c3aed", "#3b82f6", "#ec4899", "#f59e0b"][i]}
          animate={{ scale: [1, 1.6, 1], opacity: [0.8, 0.3, 0.8] }}
          transition={{ duration: 2 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
    </svg>
  );
}
