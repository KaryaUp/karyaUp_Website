import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Users, Cpu, TrendingUp, UserCircle2 } from 'lucide-react';

const teams = [
  {
    icon: Rocket,
    label: 'Startups',
    headline: 'Launch faster with structured execution.',
    result: 'Move from idea to release in days, not weeks.',
    gradient: 'from-violet-500 to-purple-600',
    textGrad: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50',
    stat: 'Days, not weeks',
    statSub: 'from idea to release',
  },
  {
    icon: Users,
    label: 'Agencies',
    headline: 'Manage multiple clients without chaos.',
    result: 'Handle 2x more projects with the same team.',
    gradient: 'from-fuchsia-500 to-pink-500',
    textGrad: 'from-fuchsia-500 to-pink-500',
    bg: 'bg-fuchsia-50',
    stat: '2x more',
    statSub: 'projects, same team',
  },
  {
    icon: Cpu,
    label: 'Product Teams',
    headline: 'Plan, build, and ship with clarity.',
    result: 'Reduce delays across sprints.',
    gradient: 'from-purple-600 to-indigo-600',
    textGrad: 'from-purple-600 to-indigo-600',
    bg: 'bg-purple-50',
    stat: 'Zero delays',
    statSub: 'across sprints',
  },
  {
    icon: TrendingUp,
    label: 'Sales Teams',
    headline: 'Track deals and stay aligned with delivery.',
    result: 'Close faster with full visibility.',
    gradient: 'from-pink-500 to-rose-500',
    textGrad: 'from-pink-500 to-rose-500',
    bg: 'bg-pink-50',
    stat: 'Close faster',
    statSub: 'with full visibility',
  },
  {
    icon: UserCircle2,
    label: 'Freelancers',
    headline: 'Stay organized across clients.',
    result: 'Never miss a deadline again.',
    gradient: 'from-indigo-500 to-violet-600',
    textGrad: 'from-indigo-500 to-violet-600',
    bg: 'bg-indigo-50',
    stat: '0 missed',
    statSub: 'deadlines',
  },
];

const TeamsSection = () => {
  const [active, setActive] = useState(0);
  const team = teams[active];
  const Icon = team.icon;

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold mb-6 uppercase tracking-widest">
            <Users size={13} /> Who it's for
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight tracking-tight">
            Built for teams that{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500">
              move fast
            </span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-start">

          {/* LEFT: stacked selectable rows */}
          <div className="lg:col-span-2 flex flex-col divide-y divide-slate-100">
            {teams.map((t, i) => {
              const TIcon = t.icon;
              const isActive = active === i;
              return (
                <motion.button
                  key={t.label}
                  onClick={() => setActive(i)}
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  className="flex items-center gap-5 py-5 text-left group w-full"
                >
                  {/* Active indicator line */}
                  <motion.div
                    animate={{ height: isActive ? '48px' : '24px', opacity: isActive ? 1 : 0.2 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                    className={`w-1 rounded-full bg-gradient-to-b ${t.gradient} flex-shrink-0`}
                  />

                  {/* Circular icon */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isActive ? `bg-gradient-to-br ${t.gradient}` : 'bg-slate-100'}`}
                  >
                    <TIcon size={18} className={isActive ? 'text-white' : 'text-slate-400'} />
                  </div>

                  <div>
                    <p className={`text-base font-black transition-colors duration-200 ${isActive ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-700'}`}>
                      {t.label}
                    </p>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-xs text-slate-400 font-medium mt-0.5"
                      >
                        {t.result}
                      </motion.p>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* RIGHT: 3D detail panel */}
          <div className="lg:col-span-3" style={{ perspective: '1000px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`rounded-3xl p-8 sm:p-12 ${team.bg} border border-slate-100 relative overflow-hidden`}
              >
                {/* Decorative blob */}
                <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${team.gradient} opacity-10 blur-2xl pointer-events-none`} />

                {/* Icon circle */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${team.gradient} flex items-center justify-center mb-8 shadow-xl`}
                  style={{ transform: 'translateZ(20px)' }}
                >
                  <Icon size={28} className="text-white" />
                </div>

                {/* Content */}
                <div style={{ transform: 'translateZ(10px)' }}>
                  <span className={`text-xs font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${team.textGrad}`}>
                    {team.label}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug mt-2 mb-4">
                    {team.headline}
                  </h3>

                  <p className="text-slate-500 text-base font-medium italic mb-10">
                    "{team.result}"
                  </p>

                  {/* Stat pill */}
                  <div className="inline-flex items-center gap-4">
                    <div className={`px-5 py-3 rounded-full bg-gradient-to-r ${team.gradient} shadow-lg`}>
                      <span className="text-white text-xl font-black">{team.stat}</span>
                    </div>
                    <span className="text-slate-400 text-sm font-medium">{team.statSub}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
