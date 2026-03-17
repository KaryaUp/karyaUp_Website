import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, Kanban, Briefcase, Zap, BarChart3, TrendingUp, ArrowRight, Sparkles
} from 'lucide-react';

/* ── Card data ── */
const features = [
  {
    icon: LayoutDashboard,
    tag: 'Dashboard',
    title: 'A live view of your entire company.',
    label: 'Track',
    desc: 'Tasks, deadlines, team workload, performance — in real time.',
    stat: '94%', statLabel: 'on-time delivery',
    accent: '#7e22ce',
    shine: 'from-purple-500/10 via-purple-200/5 to-transparent',
    tagBg: 'bg-purple-100 text-purple-700',
  },
  {
    icon: Kanban,
    tag: 'Boards & Timelines',
    title: 'Flexible views for every workflow.',
    label: 'Switch',
    desc: 'Switch between planning and execution instantly.',
    stat: '5+', statLabel: 'view modes',
    accent: '#9333ea',
    shine: 'from-violet-500/10 via-violet-200/5 to-transparent',
    tagBg: 'bg-violet-100 text-violet-700',
  },
  {
    icon: Briefcase,
    tag: 'CRM Pipeline',
    title: 'From lead to delivery — fully connected.',
    label: 'Track',
    desc: 'Track revenue alongside execution.',
    stat: '+23%', statLabel: 'win rate',
    accent: '#a855f7',
    shine: 'from-fuchsia-500/10 via-fuchsia-200/5 to-transparent',
    tagBg: 'bg-fuchsia-100 text-fuchsia-700',
  },
  {
    icon: Zap,
    tag: 'Automation Flows',
    title: 'Set rules once. Let work move automatically.',
    label: 'Save',
    desc: 'Reduce manual effort across operations.',
    stat: '10+', statLabel: 'hrs saved/week',
    accent: '#7c3aed',
    shine: 'from-purple-600/10 via-purple-300/5 to-transparent',
    tagBg: 'bg-purple-100 text-purple-700',
  },
  {
    icon: BarChart3,
    tag: 'Analytics',
    title: 'Clear, actionable insights.',
    label: 'Insight',
    desc: "Know what's working. Fix what's not.",
    stat: '<1s', statLabel: 'data lag',
    accent: '#6d28d9',
    shine: 'from-violet-600/10 via-violet-300/5 to-transparent',
    tagBg: 'bg-violet-100 text-violet-700',
  },
];

/* ── Floating 3D Card ── */
const FloatCard = ({ feature, index }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: -20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 + index * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 900 }}
    >
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        animate={hovered ? {
          y: -14,
          boxShadow: `0 32px 60px -10px ${feature.accent}40`,
          scale: 1.02
        } : {
          y: 0,
          boxShadow: '0 4px 20px -4px rgba(0,0,0,0.08)',
          scale: 1
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        className="bg-white border border-slate-200 rounded-[1.75rem] p-7 cursor-default h-full relative overflow-hidden"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Shimmer shine on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`absolute inset-0 bg-gradient-to-br ${feature.shine} pointer-events-none`}
            />
          )}
        </AnimatePresence>

        {/* Icon + Tag inline pill */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-md"
            style={{ background: `linear-gradient(135deg, ${feature.accent}22, ${feature.accent}44)`, border: `1.5px solid ${feature.accent}33` }}
          >
            <Icon size={20} style={{ color: feature.accent }} />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: feature.accent }}>
            {feature.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-[17px] font-black text-slate-900 leading-snug mb-2">{feature.title}</h3>

        {/* Desc */}
        <p className="text-slate-500 text-sm font-medium flex items-start gap-1.5 mb-6">
          <ArrowRight size={13} className="mt-0.5 flex-shrink-0 text-slate-400" />
          <span><strong className="text-slate-700">{feature.label}:</strong> {feature.desc}</span>
        </p>

        {/* Stat */}
        <div className="pt-5 border-t border-slate-100 flex items-end gap-2">
          <span className="text-3xl font-black" style={{ color: feature.accent }}>{feature.stat}</span>
          <span className="text-slate-400 text-sm font-medium mb-1">{feature.statLabel}</span>
        </div>

        {/* Sparkle icon corner (visible on hover) */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.5 }}
          transition={{ duration: 0.2 }}
          className="absolute top-5 right-5"
        >
          <Sparkles size={18} style={{ color: feature.accent }} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const FeatureOverview = () => (
  <section className="py-16 sm:py-20 relative overflow-hidden"
    style={{ background: 'linear-gradient(160deg, #f8f7ff 0%, #fdf4ff 50%, #f0f9ff 100%)' }}
  >
    {/* Decorative circles */}
    <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-fuchsia-200/30 rounded-full blur-[100px] pointer-events-none" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold mb-6 uppercase tracking-widest">
          <TrendingUp size={13} /> Product Features
        </span>

        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-4">
          See everything.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500">
            Instantly.
          </span>
        </h2>
        <p className="text-slate-500 text-lg font-medium">
          One platform. Every view — always current.
        </p>
      </motion.div>

      {/* Card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <FloatCard key={f.tag} feature={f} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default FeatureOverview;
