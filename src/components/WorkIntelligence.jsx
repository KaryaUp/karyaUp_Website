import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Network, LineChart, Zap, ArrowRight, Database, BrainCircuit, Rocket } from 'lucide-react';

/* 3D tilt card — corner under cursor dips IN */
const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-1, 1], [12, -12]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-12, 12]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;   // -1 … 1
    const y = ((e.clientY - rect.top)  / rect.height) * 2 - 1;
    rawX.set(x);
    rawY.set(y);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', transformPerspective: 800 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={className}
    >
      {/* inner content lifted slightly toward viewer */}
      <div style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </motion.div>
  );
};

const cards = [
  {
    icon: <Network className="text-purple-400" size={26} />,
    title: 'Track patterns',
    desc: 'Across projects, teams, and timelines to find bottlenecks.',
  },
  {
    icon: <LineChart className="text-fuchsia-400" size={26} />,
    title: 'Identify delays',
    desc: 'Before they happen with predictive analytics and insights.',
  },
  {
    icon: <Zap className="text-yellow-400" size={26} />,
    title: 'Understand performance',
    desc: 'Without manual reports getting in the way of your work.',
  },
];

const WorkIntelligence = () => (
  /* outer: full-width bg so the page doesn't break; inner: constrained card */
  <section className="py-10 sm:py-14 bg-white relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* ── The constrained, rounded section ── */}
      <div className="bg-slate-950 rounded-[2.5rem] overflow-hidden border border-purple-900/30 relative px-6 sm:px-12 py-10 sm:py-14">

        {/* Glow blobs */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600/15 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-fuchsia-600/15 rounded-full blur-[80px] pointer-events-none" />

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold mb-6 uppercase tracking-widest"
          >
            <BrainCircuit size={13} />
            Work Intelligence
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4 tracking-tight"
          >
            Your company's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
              work intelligence
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-lg text-slate-400 font-medium leading-relaxed"
          >
            Most tools store data.{' '}
            <span className="text-white font-bold">KaryaUp turns it into decisions.</span>
          </motion.p>
        </div>

        {/* 3 tilt cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 relative z-10"
          style={{ perspective: '1200px' }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.1 }}
            >
              <TiltCard className="bg-slate-900 border border-slate-800 hover:border-purple-500/30 p-7 rounded-2xl cursor-default h-full transition-colors duration-300">
                <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 mb-5">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">{card.desc}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Flow strip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 bg-purple-900/20 border border-purple-500/20 rounded-2xl sm:rounded-full p-4 sm:p-3"
        >
          <div className="hidden sm:block absolute top-1/2 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent -translate-y-1/2" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 text-sm font-bold text-white relative z-10 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 bg-slate-900 px-5 py-3 rounded-full border border-slate-700 w-full sm:w-auto justify-center">
              <Database size={16} className="text-purple-400" /> Raw Activity
            </div>
            <ArrowRight className="text-purple-500 hidden sm:block opacity-50" size={20} />
            <div className="w-px h-5 bg-purple-500/30 sm:hidden" />
            <div className="flex items-center gap-2 bg-purple-900/40 px-5 py-3 rounded-full border border-purple-500/40 w-full sm:w-auto justify-center backdrop-blur-md">
              <BrainCircuit size={16} className="text-fuchsia-300" /> Clear Insight
            </div>
            <ArrowRight className="text-fuchsia-500 hidden sm:block opacity-70" size={20} />
            <div className="w-px h-5 bg-fuchsia-500/30 sm:hidden" />
            <div className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-3 rounded-full border border-white/10 w-full sm:w-auto justify-center shadow-[0_0_20px_rgba(217,70,239,0.35)]">
              <Rocket size={16} className="text-white" /> Faster Decisions
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WorkIntelligence;
