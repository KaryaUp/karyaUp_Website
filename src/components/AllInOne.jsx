import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Search, CheckSquare, Map, BookOpen, Mic, BarChart3, Target, Zap, 
    Video, Eye, LayoutDashboard, Clock, KanbanSquare, Plug, Headphones, ListChecks,
    Calendar, Table, Pencil, GanttChart, Inbox, Star, Timer, FormInput,
    FolderKanban, FileText, CalendarDays, MessageSquare, Users
} from 'lucide-react';

// Import available assets from ../assets/
import featureProjects from '../assets/projects.jpeg';
import featureTasks from '../assets/Task.jpeg';
import featureCalendar from '../assets/calender.jpeg';
import featureTeam from '../assets/Team.jpeg';

const MarqueeTile = ({ icon: Icon, label, isPaused }) => (
    <div 
        className={`flex-shrink-0 w-32 h-32 border border-gray-100 flex flex-col items-center justify-center gap-2 bg-white transition-all duration-300 group/tile ${isPaused ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
    >
        <div className={`transition-all duration-300 ${isPaused ? 'scale-110 text-[#7e22ce]' : 'text-gray-500 group-hover/tile:text-[#7e22ce] group-hover/tile:rotate-3'}`}>
            <Icon className="w-8 h-8" strokeWidth={1.5} />
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${isPaused ? 'text-[#7e22ce]' : 'text-gray-500 group-hover/tile:text-[#7e22ce]'}`}>
            {label}
        </span>
    </div>
);

const FeatureCard = ({ title, icon: Icon, image, color }) => (
    <div className="w-80   h-[192px] bg-white border border-gray-100 flex flex-col relative overflow-hidden group/card shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="absolute top-2 left-2 z-10 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-2 py-1 border border-gray-100 rounded-sm">
            <div className="p-1 bg-gray-50 rounded-sm">
                <Icon className="w-3 h-3" style={{ color }} strokeWidth={2} />
            </div>
            <h3 className="font-bold text-[9px] text-gray-900 tracking-tight uppercase">{title}</h3>
        </div>
        <div className="w-full h-full overflow-hidden">
            <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover grayscale-[20%] group-hover/card:grayscale-0 group-hover/card:scale-105 transition-all duration-700 ease-out" 
            />
        </div>
    </div>
);

const MarqueeRow = ({ icons, direction = "left", speed = 22, isPaused, onRowClick, maskHole = false }) => {
    const duplicatedIcons = [...icons, ...icons, ...icons, ...icons, ...icons, ...icons];
    const totalWidth = icons.length * 128; // Tile width is 128px
    
    return (
        <div 
            className="flex overflow-hidden cursor-pointer border-y border-gray-100 w-full relative group/row"
            onClick={onRowClick}
            style={maskHole ? {
                maskImage: 'linear-gradient(to right, black 0%, black calc(50% - 320px), transparent calc(50% - 320px), transparent calc(50% + 320px), black calc(50% + 320px), black 100%)',
                WebkitMaskImage: 'linear-gradient(to right, black 0%, black calc(50% - 320px), transparent calc(50% - 320px), transparent calc(50% + 320px), black calc(50% - 320px), black 100%)'
            } : {}}
        >
            <motion.div 
                className="flex"
                animate={{ x: direction === "left" ? [0, -totalWidth] : [-totalWidth, 0] }}
                transition={{ 
                    duration: totalWidth / speed, 
                    ease: "linear", 
                    repeat: Infinity,
                    paused: isPaused 
                }}
            >
                {duplicatedIcons.map((item, idx) => (
                    <MarqueeTile key={idx} {...item} isPaused={isPaused} />
                ))}
            </motion.div>
            
            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-black/0 group-hover/row:bg-black/[0.02] transition-colors duration-300 pointer-events-none" />
        </div>
    );
};

const AllInOne = () => {
    const [pausedRowIndex, setPausedRowIndex] = useState(null);

    const handleRowClick = (idx) => {
        setPausedRowIndex(pausedRowIndex === idx ? null : idx);
    };

    const resumeAll = () => setPausedRowIndex(null);

    const rows = [
        [
            { icon: Search, label: "Search" }, { icon: CheckSquare, label: "Tasks" },
            { icon: Map, label: "Mind Maps" }, { icon: BookOpen, label: "Wikis" },
            { icon: Mic, label: "AI Notetaker" }, { icon: BarChart3, label: "Reporting" },
            { icon: Target, label: "Goals" }, { icon: Zap, label: "Sprints" },
        ],
        [
            { icon: Video, label: "Clips" }, { icon: Eye, label: "Visibility" },
            { icon: LayoutDashboard, label: "Dashboards" }, { icon: Clock, label: "Time" },
            { icon: KanbanSquare, label: "Board" }, { icon: Plug, label: "Apps" },
            { icon: Headphones, label: "Support" }, { icon: ListChecks, label: "Checklists" },
        ],
        [
            { icon: Calendar, label: "Schedule" }, { icon: Table, label: "Sheets" },
            { icon: Pencil, label: "Whiteboard" }, { icon: GanttChart, label: "Gantt" },
            { icon: Inbox, label: "Inbox" }, { icon: Star, label: "Favs" },
            { icon: Timer, label: "Estimates" }, { icon: FormInput, label: "Forms" },
        ],
        [
            { icon: Zap, label: "Automate" }, { icon: ListChecks, label: "Fields" },
            { icon: Search, label: "Global" }, { icon: CheckSquare, label: "To-Do" },
            { icon: Map, label: "Strategy" }, { icon: BookOpen, label: "Wiki" },
            { icon: Mic, label: "Voice" }, { icon: BarChart3, label: "Analysis" },
        ],
        [
            { icon: LayoutDashboard, label: "View" }, { icon: Clock, label: "Track" },
            { icon: KanbanSquare, label: "Plan" }, { icon: Plug, label: "Sync" },
            { icon: Headphones, label: "Help" }, { icon: ListChecks, label: "Audit" },
            { icon: Calendar, label: "Event" }, { icon: Table, label: "Data" },
        ]
    ];

    return (
        <section 
            className="py-24 bg-white relative flex flex-col items-center justify-center min-h-[1000px] select-none overflow-hidden"
            onClick={(e) => {
                // If clicking outside marquee rows, resume all
                if (!e.target.closest('.group\\/row')) resumeAll();
            }}
        >
            <div className="max-w-7xl mx-auto px-4 w-full mb-16 text-center relative z-20">
                <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
                >
                    Replace all your tools with <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                        one beautiful platform.
                    </span>
                </motion.h2>
            </div>

            {/* Portal Layout Container */}
            <div className="w-full relative flex flex-col items-center">
                
                {/* 5 Marquee Rows */}
                <div className="flex flex-col items-center w-full">
                    <MarqueeRow 
                        icons={rows[0]} direction="left" speed={22} 
                        isPaused={pausedRowIndex === 0} onRowClick={() => handleRowClick(0)} 
                    />
                    <MarqueeRow 
                        icons={rows[1]} direction="right" speed={22} 
                        isPaused={pausedRowIndex === 1} onRowClick={() => handleRowClick(1)} maskHole={true}
                    />
                    <MarqueeRow 
                        icons={rows[2]} direction="left" speed={22} 
                        isPaused={pausedRowIndex === 2} onRowClick={() => handleRowClick(2)} maskHole={true}
                    />
                    <MarqueeRow 
                        icons={rows[3]} direction="right" speed={22} 
                        isPaused={pausedRowIndex === 3} onRowClick={() => handleRowClick(3)} maskHole={true}
                    />
                    <MarqueeRow 
                        icons={rows[4]} direction="left" speed={22} 
                        isPaused={pausedRowIndex === 4} onRowClick={() => handleRowClick(4)} 
                    />
                </div>

                {/* The Middle Image Cluster */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="grid grid-cols-2 gap-0 border border-gray-100 bg-white pointer-events-auto mt-0 shadow-2xl">
                        <FeatureCard 
                            title="Projects" 
                            icon={FolderKanban} 
                            image={featureProjects} 
                            color="#7e22ce" 
                        />
                        <FeatureCard 
                            title="Tasks" 
                            icon={CheckSquare} 
                            image={featureTasks} 
                            color="#10b981" 
                        />
                        <FeatureCard 
                            title="Calendar" 
                            icon={CalendarDays} 
                            image={featureCalendar} 
                            color="#f59e0b" 
                        />
                        <FeatureCard 
                            title="Team" 
                            icon={Users} 
                            image={featureTeam} 
                            color="#6366f1" 
                        />
                    </div>
                </div>

            </div>

            {/* Interaction Instruction */}
            <AnimatePresence>
                {pausedRowIndex !== null && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="mt-12 text-gray-400 text-[10px] font-bold tracking-[0.3em] uppercase cursor-pointer relative z-20"
                        onClick={resumeAll}
                    >
                        Click background to resume
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default AllInOne;
