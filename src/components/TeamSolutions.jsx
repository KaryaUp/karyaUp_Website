import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight, CheckCircle2, FolderKanban, Clock, MessageSquare, Briefcase, Users, Zap, Bot
} from 'lucide-react';

/* ── Team data ── */
const teams = [
    {
        id: 'projects',
        tab: 'Project & Task',
        icon: FolderKanban,
        title: 'Project & Task Management',
        titleHighlight: '',
        description:
            'Break work into clear, structured tasks with ownership and priorities.',
        bullets: [
            'Outcome: Teams know exactly what to do next — every time.',
        ],
        agents: [
            { name: 'Sprint Agent plans iterations', color: '#7e22ce' },
            { name: 'Task Agent auto-assigns work', color: '#f59e0b' },
            { name: 'Timeline Agent flags delays', color: '#10b981' },
            { name: 'Reports Agent generates summaries', color: '#ef4444' },
        ],
    },
    {
        id: 'time',
        tab: 'Time Tracking',
        icon: Clock,
        title: 'Time Tracking',
        titleHighlight: '',
        description:
            'Track time where work happens.',
        bullets: [
            'Insight: Understand where every hour goes — and improve planning accuracy by up to 40%.',
        ],
        agents: [
            { name: 'Time Agent logs hours automatically', color: '#e879f9' },
            { name: 'Capacity Agent balances workload', color: '#7e22ce' },
            { name: 'Report Agent highlights bottlenecks', color: '#f59e0b' },
            { name: 'Billing Agent calculates costs', color: '#10b981' },
        ],
    },
    {
        id: 'collaboration',
        tab: 'Collaboration',
        icon: MessageSquare,
        title: 'Team Collaboration',
        titleHighlight: '',
        description:
            'Communication stays connected to work.',
        bullets: [
            'Impact: Reduce internal follow-ups by 50%+',
        ],
        agents: [
            { name: 'Summary Agent catches you up', color: '#6366f1' },
            { name: 'Sync Agent coordinates meetings', color: '#ef4444' },
            { name: 'Draft Agent composes replies', color: '#10b981' },
            { name: 'Ping Agent alerts dependencies', color: '#f59e0b' },
        ],
    },
    {
        id: 'crm',
        tab: 'CRM & Sales',
        icon: Briefcase,
        title: 'CRM & Sales',
        titleHighlight: '',
        description:
            'Manage leads, deals, and delivery in one flow.',
        bullets: [
            'Result: No disconnect between sales and execution.',
        ],
        agents: [
            { name: 'Lead Agent scores prospects', color: '#7e22ce' },
            { name: 'Nurture Agent sends follow-ups', color: '#f59e0b' },
            { name: 'Deal Agent forecasts revenue', color: '#e879f9' },
            { name: 'Handoff Agent briefs the team', color: '#ef4444' },
        ],
    },
    {
        id: 'hr',
        tab: 'HR & Team',
        icon: Users,
        title: 'HR & Team Management',
        titleHighlight: '',
        description:
            'Control roles, access, attendance, and team structure.',
        bullets: [
            'Clarity: One system to manage people and performance.',
        ],
        agents: [
            { name: 'Hiring Agent screens applicants', color: '#10b981' },
            { name: 'Onboard Agent sets up new hires', color: '#7e22ce' },
            { name: 'Leave Agent manages time-off', color: '#f59e0b' },
            { name: 'Payroll Agent processes salaries', color: '#ef4444' },
        ],
    },
    {
        id: 'automation',
        tab: 'Automation',
        icon: Zap,
        title: 'Automation',
        titleHighlight: '',
        description:
            'Automate repetitive workflows.',
        bullets: [
            'Efficiency: Save 10+ hours per team every week',
        ],
        agents: [
            { name: 'Workflow Agent connects tools', color: '#6366f1' },
            { name: 'Trigger Agent watches for events', color: '#f59e0b' },
            { name: 'Action Agent executes routines', color: '#10b981' },
            { name: 'Audit Agent logs activities', color: '#e879f9' },
        ],
    },
];

/* ── Avatar placeholder ── */
const AgentAvatar = ({ color }) => (
    <div
        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: `${color}20`, border: `2px solid ${color}40` }}
    >
        <Bot size={18} style={{ color }} />
    </div>
);

const TeamSolutions = () => {
    const [activeIdx, setActiveIdx] = useState(0);
    const active = teams[activeIdx];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-[white]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-4">
                        Built for how modern <span className="italic font-black">teams</span> actually work
                    </h2>
                    <p className="text-gray-500 text-base sm:text-lg font-medium">
                        Your key workflows, powered by KaryaUp Agents.
                    </p>
                </motion.div>

                {/* Tab bar */}
                <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-14">
                    {teams.map((team, idx) => (
                        <button
                            key={team.id}
                            onClick={() => setActiveIdx(idx)}
                            className="relative px-3 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300"
                            style={{
                                background: activeIdx === idx ? '#7e22ce' : 'transparent',
                                color: activeIdx === idx ? '#fff' : '#555',
                                border: activeIdx === idx ? '1px solid #7e22ce' : '1px solid #ddd',
                            }}
                        >
                            {team.tab}
                        </button>
                    ))}
                </div>

                {/* Content area */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.35 }}
                        className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 shadow-sm border border-gray-100"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
                            {/* Left side */}
                            <div>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
                                    {active.title}
                                    <br />
                                    <span className="text-gray-400 italic">{active.titleHighlight}</span>
                                </h3>
                                <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md">
                                    {active.description}
                                </p>

                                {/* Replaces */}


                                {/* Bullet list */}
                                <ul className="space-y-3">
                                    {active.bullets.map((b) => (
                                        <li key={b} className="flex items-start gap-2.5 text-gray-600 text-sm font-medium">
                                            <CheckCircle2 size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Right side — agent cards */}
                            <div className="flex flex-col gap-3">
                                {active.agents.map((agent, i) => (
                                    <motion.div
                                        key={agent.name}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1, duration: 0.35 }}
                                        className="flex items-center gap-4 bg-gray-50 hover:bg-gray-100/80 rounded-2xl px-5 py-4 transition-colors cursor-default border border-gray-100"
                                    >
                                        <AgentAvatar color={agent.color} />
                                        <span className="text-sm font-bold text-gray-700">{agent.name}</span>
                                    </motion.div>
                                ))}

                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default TeamSolutions;
