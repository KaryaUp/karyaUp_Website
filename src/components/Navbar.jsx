import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { 
  Menu, X, ArrowRight, ChevronDown,
  CheckSquare, Kanban, Users, Clock, BarChart2, LayoutDashboard, CircleDollarSign,
  Megaphone, Contact,
  AlignLeft, MessageSquare, Video, UserCheck, CalendarOff, Banknote, Calendar, Zap, Timer, Blocks, PlayCircle, Bell,
  FileText, BookOpen, Sparkles, FileCode, MonitorPlay
} from "lucide-react";
import logo from "../assets/logo.png";

const navItems = [
  { label: "Platform", to: "/platform" },
  { label: "Features", to: "/features" },
  { label: "Solutions", to: "/solutions" },
  { label: "Pricing", to: "/pricing" },
  { label: "Resources", to: "/resources" },
];

const platformMegaSections = [
  { label: "Project Management", to: "/platform/project-management", icon: Kanban, iconBg: "bg-blue-50 text-blue-600 border border-blue-100", description: "Plan, track, and collaborate on any project." },
  { label: "Time Tracking", to: "/platform/time-tracking", icon: Clock, iconBg: "bg-amber-50 text-amber-600 border border-amber-100", description: "Track time, estimate tasks, and report on work." },
  { label: "Team Collaboration", to: "/platform/team-collaboration", icon: Users, iconBg: "bg-purple-50 text-purple-600 border border-purple-100", description: "Work seamlessly with your entire team." },
  { label: "Boss Dashboard", to: "/platform/boss-dashboard", icon: LayoutDashboard, iconBg: "bg-indigo-50 text-indigo-600 border border-indigo-100", description: "High-level overview of all company operations." },
  { label: "Profit Tracking", to: "/platform/profit-tracking", icon: CircleDollarSign, iconBg: "bg-emerald-50 text-emerald-600 border border-emerald-100", description: "Monitor budgets, costs, and project profitability." },
];

const featuresMegaSections = [
  {
    heading: "PROJECTS",
    items: [
      { label: "Tasks", to: "/features/tasks", icon: CheckSquare, iconBg: "bg-emerald-600" },
      { label: "Dashboards", to: "/features/dashboards", icon: BarChart2, iconBg: "bg-rose-600" },
      { label: "Board view", to: "/features/board-view", icon: LayoutDashboard, iconBg: "bg-blue-600" },
      { label: "Gantt", to: "/features/gantt", icon: AlignLeft, iconBg: "bg-red-600" },
    ],
  },
  {
    heading: "COMMUNICATION",
    items: [
      { label: "Chat", to: "/features/chat", icon: MessageSquare, iconBg: "bg-indigo-600" },
      { label: "Notifications", to: "/features/notifications", icon: Bell, iconBg: "bg-amber-600" }
    ],
  },
  {
    heading: "MANAGEMENT",
    items: [
      { label: "Team", to: "/features/team", icon: Users, iconBg: "bg-blue-600" },
      { label: "Attendance", to: "/features/attendance", icon: UserCheck, iconBg: "bg-emerald-600" },
      { label: "Leave", to: "/features/leave", icon: CalendarOff, iconBg: "bg-amber-600" },
      { label: "Salary", to: "/features/salary", icon: Banknote, iconBg: "bg-emerald-700" },
    ],
  },
  {
    heading: "TIME",
    items: [
      { label: "Calendar", to: "/features/calendar", icon: Calendar, iconBg: "bg-pink-600" },
      { label: "Scheduling", to: "/features/scheduling", icon: Clock, iconBg: "bg-orange-600" },
      { label: "Automations", to: "/features/automations", icon: Zap, iconBg: "bg-indigo-600" },
      { label: "Time tracking", to: "/features/time-tracking", icon: Timer, iconBg: "bg-teal-600" },
    ],
  },
  {
    heading: "MORE",
    items: [
      { label: "Integrations", to: "/features/integrations", icon: Blocks, iconBg: "bg-blue-600" },
      { label: "Watch demo", to: "/features/demo", icon: PlayCircle, iconBg: "bg-gray-500" },
    ],
  },
];

const solutionsMegaSections = [
  {
    heading: "TEAMS",
    items: [
      { label: "Project management", to: "/solutions/project-management" },
      { label: "Product development", to: "/solutions/product-development" },
      { label: "Operations", to: "/solutions/operations" },
      { label: "IT", to: "/solutions/it" },
      { label: "Marketing", to: "/solutions/marketing" },
      { label: "Human Resources", to: "/solutions/hr" },
    ],
  },
  {
    heading: "COMPANIES",
    items: [
      { label: "Enterprise", to: "/solutions/enterprise" },
      { label: "Startup", to: "/solutions/startup" },
      { label: "Non-profit", to: "/solutions/non-profit" },
      { label: "Education", to: "/solutions/education" },
      { label: "Agency", to: "/solutions/agency" },
    ],
  },
  {
    heading: "TEMPLATES",
    className: "lg:col-span-2",
    items: [
      { 
        label: "Project Management", 
        to: "/solutions/templates/project-management", 
        icon: Kanban, 
        iconBg: "bg-blue-100 text-blue-600",
        description: "Manage roadmaps, backlogs, bugs, agile dev, and documentation." 
      },
      { 
        label: "Sales/CRM", 
        to: "/solutions/templates/crm", 
        icon: Contact, 
        iconBg: "bg-orange-100 text-orange-600",
        description: "Manage leads, deals, and contacts." 
      },
      { 
        label: "Marketing", 
        to: "/solutions/templates/marketing", 
        icon: Megaphone, 
        iconBg: "bg-indigo-100 text-indigo-600",
        description: "Plan campaigns, organize assets, and create wikis." 
      },
    ],
  },
];

const resourcesMegaSections = [
  { label: "Blog", to: "/resources/blog", icon: FileText, iconBg: "bg-indigo-50 text-indigo-600 border border-indigo-100", description: "Read the latest news, articles, and tips." },
  { label: "Guides", to: "/resources/guides", icon: BookOpen, iconBg: "bg-emerald-50 text-emerald-600 border border-emerald-100", description: "In-depth resources and best practices." },
  { label: "Product Updates", to: "/resources/updates", icon: Sparkles, iconBg: "bg-amber-50 text-amber-600 border border-amber-100", description: "See what's new and what's changed." },
  { label: "Documentation", to: "/resources/docs", icon: FileCode, iconBg: "bg-blue-50 text-blue-600 border border-blue-100", description: "Detailed guides on how to use every feature." },
  { label: "Demo", to: "/resources/demo", icon: MonitorPlay, iconBg: "bg-rose-50 text-rose-600 border border-rose-100", description: "Watch a quick overview of the platform." },
  { label: "Video Tutorials", to: "/resources/tutorials", icon: Video, iconBg: "bg-purple-50 text-purple-600 border border-purple-100", description: "Step-by-step video guides and walkthroughs." },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const platformTimerRef = useRef(null);
  const featuresTimerRef = useRef(null);
  const solutionsTimerRef = useRef(null);
  const resourcesTimerRef = useRef(null);

  const closeAllMenus = () => {
    setIsPlatformOpen(false);
    setIsFeaturesOpen(false);
    setIsSolutionsOpen(false);
    setIsResourcesOpen(false);
    setIsOpen(false); // Close mobile menu too
    [platformTimerRef, featuresTimerRef, solutionsTimerRef, resourcesTimerRef].forEach(ref => {
      if (ref.current) { clearTimeout(ref.current); ref.current = null; }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (platformTimerRef.current) {
        clearTimeout(platformTimerRef.current);
      }
      if (featuresTimerRef.current) {
        clearTimeout(featuresTimerRef.current);
      }
      if (solutionsTimerRef.current) {
        clearTimeout(solutionsTimerRef.current);
      }
      if (resourcesTimerRef.current) {
        clearTimeout(resourcesTimerRef.current);
      }
    };
  }, []);

  const handlePlatformMouseEnter = () => {
    if (platformTimerRef.current) {
      clearTimeout(platformTimerRef.current);
      platformTimerRef.current = null;
    }
    setIsPlatformOpen(true);
  };

  const handlePlatformMouseLeave = () => {
    platformTimerRef.current = setTimeout(() => {
      setIsPlatformOpen(false);
    }, 500); // 500ms delay
  };

  const handleFeaturesMouseEnter = () => {
    if (featuresTimerRef.current) {
      clearTimeout(featuresTimerRef.current);
      featuresTimerRef.current = null;
    }
    setIsFeaturesOpen(true);
  };

  const handleFeaturesMouseLeave = () => {
    featuresTimerRef.current = setTimeout(() => {
      setIsFeaturesOpen(false);
    }, 500);
  };

  const handleSolutionsMouseEnter = () => {
    if (solutionsTimerRef.current) {
      clearTimeout(solutionsTimerRef.current);
      solutionsTimerRef.current = null;
    }
    setIsSolutionsOpen(true);
  };

  const handleSolutionsMouseLeave = () => {
    solutionsTimerRef.current = setTimeout(() => {
      setIsSolutionsOpen(false);
    }, 500); // 500ms delay
  };

  const handleResourcesMouseEnter = () => {
    if (resourcesTimerRef.current) {
      clearTimeout(resourcesTimerRef.current);
      resourcesTimerRef.current = null;
    }
    setIsResourcesOpen(true);
  };

  const handleResourcesMouseLeave = () => {
    resourcesTimerRef.current = setTimeout(() => {
      setIsResourcesOpen(false);
    }, 500);
  };

  const linkBase =
    "text-sm font-semibold text-slate-700 hover:text-primary transition-all";
  const linkActive = "text-primary";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 py-3 ${
        isPlatformOpen || isFeaturesOpen || isSolutionsOpen || isResourcesOpen
          ? "bg-white shadow-md  border-gray-100"
          : isScrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm "
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" onClick={closeAllMenus} className="flex items-center group">
              <img
                src={logo}
                alt="KaryaUp Logo"
                className="h-12 sm:h-12 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>

          <div className="hidden md:flex md:flex-1 md:justify-center">
            <div className="flex items-center space-x-10">
              <div
                className="flex items-center h-full py-2"
                onMouseEnter={handlePlatformMouseEnter}
                onMouseLeave={handlePlatformMouseLeave}
              >
                <NavLink
                  to="/platform"
                  className={({ isActive }) =>
                    `${linkBase} flex items-center gap-1 ${isActive ? linkActive : ""}`
                  }
                >
                  Platform
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isPlatformOpen ? "rotate-180" : ""}`} />
                </NavLink>

                {isPlatformOpen && (
                  <div className="absolute left-0 top-full w-full bg-white border-b border-slate-200 shadow-xl animate-slide-down origin-top">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                      <div className="flex gap-16 md:gap-32 w-full max-w-5xl px-8">
                        {/* Section 1 */}
                        <div className="flex flex-col gap-6 flex-1">
                          {platformMegaSections.slice(0, 3).map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              onClick={closeAllMenus}
                              className="flex items-start gap-4 text-sm font-medium text-slate-800 hover:text-primary transition-colors group"
                            >
                              {item.icon && (
                                <div className={`flex items-center justify-center shrink-0 w-[42px] h-[42px] rounded-[10px] ${item.iconBg || 'bg-gray-200'} transition-transform group-hover:scale-105`}>
                                  <item.icon size={22} strokeWidth={2} />
                                </div>
                              )}
                              <div className="flex flex-col">
                                <span className="font-bold text-[15px] mb-1 text-black">{item.label}</span>
                                <span className="text-[13px] text-gray-500 font-normal leading-snug">
                                  {item.description}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                        {/* Section 2 */}
                        <div className="flex flex-col gap-6 flex-1">
                          {platformMegaSections.slice(3).map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              onClick={closeAllMenus}
                              className="flex items-start gap-4 text-sm font-medium text-slate-800 hover:text-primary transition-colors group"
                            >
                              {item.icon && (
                                <div className={`flex items-center justify-center shrink-0 w-[42px] h-[42px] rounded-[10px] ${item.iconBg || 'bg-gray-200'} transition-transform group-hover:scale-105`}>
                                  <item.icon size={22} strokeWidth={2} />
                                </div>
                              )}
                              <div className="flex flex-col">
                                <span className="font-bold text-[15px] mb-1 text-black">{item.label}</span>
                                <span className="text-[13px] text-gray-500 font-normal leading-snug">
                                  {item.description}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div
                className="flex items-center h-full py-2"
                onMouseEnter={handleFeaturesMouseEnter}
                onMouseLeave={handleFeaturesMouseLeave}
              >
                <NavLink
                  to="/features"
                  className={({ isActive }) =>
                    `${linkBase} flex items-center gap-1 ${isActive ? linkActive : ""}`
                  }
                >
                  Features
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isFeaturesOpen ? "rotate-180" : ""}`} />
                </NavLink>

                {isFeaturesOpen && (
                  <div className="absolute left-0 top-full w-full bg-white border-b border-slate-200 shadow-xl animate-slide-down origin-top">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                      <div className="grid gap-x-8 gap-y-12 grid-cols-2 md:grid-cols-5 lg:grid-cols-5">
                        {featuresMegaSections.map((section) => (
                          <div key={section.heading}>
                            <h3 className="text-xs font-bold text-slate-400 tracking-wider mb-5">
                              {section.heading}
                            </h3>
                            <ul className="space-y-4">
                              {section.items.map((item) => (
                                <li key={item.to}>
                                  <Link
                                    to={item.to}
                                    onClick={closeAllMenus}
                                    className="flex items-center gap-3 text-sm font-medium text-slate-800 hover:text-primary transition-colors group"
                                  >
                                    {item.icon && (
                                      <div className={`flex items-center justify-center w-[26px] h-[26px] rounded-[6px] ${item.iconBg || 'bg-gray-200'} text-white group-hover:scale-105 transition-transform`}>
                                        <item.icon size={14} strokeWidth={2.5} />
                                      </div>
                                    )}
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div
                className="flex items-center h-full py-2"
                onMouseEnter={handleSolutionsMouseEnter}
                onMouseLeave={handleSolutionsMouseLeave}
              >
                <NavLink
                  to="/solutions"
                  className={({ isActive }) =>
                    `${linkBase} flex items-center gap-1 ${isActive ? linkActive : ""}`
                  }
                >
                  Solutions
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSolutionsOpen ? "rotate-180" : ""}`} />
                </NavLink>

                {isSolutionsOpen && (
                  <div className="absolute left-0 top-full w-full bg-white border-b border-slate-200 shadow-xl animate-slide-down origin-top">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                      <div className="grid gap-x-12 gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {solutionsMegaSections.map((section) => (
                          <div key={section.heading} className={section.className || ""}>
                            <h3 className="text-xs font-bold text-slate-400 tracking-wider mb-5">
                              {section.heading}
                            </h3>
                            <ul className="space-y-4">
                              {section.items.map((item) => (
                                <li key={item.to}>
                                  <Link
                                    to={item.to}
                                    onClick={closeAllMenus}
                                    className={`flex ${item.description ? 'items-start' : 'items-center'} gap-4 text-sm font-medium text-slate-800 hover:text-primary transition-colors group`}
                                  >
                                    {item.icon && (
                                      <div className={`flex items-center justify-center shrink-0 w-[42px] h-[42px] rounded-[10px] ${item.iconBg || 'bg-gray-200'} transition-transform group-hover:scale-105`}>
                                        <item.icon size={22} strokeWidth={2} />
                                      </div>
                                    )}
                                    <div className="flex flex-col">
                                      <span className={item.description ? "font-bold text-[15px] mb-1 text-black" : "font-medium"}>{item.label}</span>
                                      {item.description && (
                                        <span className="text-[13px] text-gray-500 font-normal leading-snug">
                                          {item.description}
                                        </span>
                                      )}
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <NavLink
                to="/pricing"
                onClick={closeAllMenus}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : ""}`
                }
              >
                Pricing
              </NavLink>
              <div
                className="flex items-center h-full py-2"
                onMouseEnter={handleResourcesMouseEnter}
                onMouseLeave={handleResourcesMouseLeave}
              >
                <NavLink
                  to="/resources"
                  className={({ isActive }) =>
                    `${linkBase} flex items-center gap-1 ${isActive ? linkActive : ""}`
                  }
                >
                  Resources
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isResourcesOpen ? "rotate-180" : ""}`} />
                </NavLink>

                {isResourcesOpen && (
                  <div className="absolute left-0 top-full w-full bg-white border-b border-slate-200 shadow-xl animate-slide-down origin-top">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                      <div className="flex gap-16 md:gap-32 w-full max-w-5xl px-8">
                        {/* Section 1 */}
                        <div className="flex flex-col gap-6 flex-1">
                          {resourcesMegaSections.slice(0, 3).map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              onClick={closeAllMenus}
                              className="flex items-start gap-4 text-sm font-medium text-slate-800 hover:text-primary transition-colors group"
                            >
                              {item.icon && (
                                <div className={`flex items-center justify-center shrink-0 w-[42px] h-[42px] rounded-[10px] ${item.iconBg || 'bg-gray-200'} transition-transform group-hover:scale-105`}>
                                  <item.icon size={22} strokeWidth={2} />
                                </div>
                              )}
                              <div className="flex flex-col">
                                <span className="font-bold text-[15px] mb-1 text-black">{item.label}</span>
                                <span className="text-[13px] text-gray-500 font-normal leading-snug">
                                  {item.description}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                         {/* Section 2 */}
                        <div className="flex flex-col gap-6 flex-1">
                          {resourcesMegaSections.slice(3).map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              onClick={closeAllMenus}
                              className="flex items-start gap-4 text-sm font-medium text-slate-800 hover:text-primary transition-colors group"
                            >
                              {item.icon && (
                                <div className={`flex items-center justify-center shrink-0 w-[42px] h-[42px] rounded-[10px] ${item.iconBg || 'bg-gray-200'} transition-transform group-hover:scale-105`}>
                                  <item.icon size={22} strokeWidth={2} />
                                </div>
                              )}
                              <div className="flex flex-col">
                                <span className="font-bold text-[15px] mb-1 text-black">{item.label}</span>
                                <span className="text-[13px] text-gray-500 font-normal leading-snug">
                                  {item.description}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              onClick={closeAllMenus}
              className="text-sm font-semibold text-slate-700 hover:text-primary transition-all"
            >
              Log in
            </Link>
            <Link to="/start" onClick={closeAllMenus} className="btn-primary px-4 py-2 text-sm">
              Start Workspace
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-2xl">
          <div className="px-4 py-5 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeAllMenus}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-base font-semibold transition ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-slate-700 hover:bg-primary/5"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="pt-6 pb-4 border-t border-gray-100 flex flex-col gap-3">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="w-full flex justify-center items-center gap-2 rounded-xl border border-gray-200 bg-white py-3 text-sm font-semibold text-slate-700 hover:bg-gray-50 transition"
              >
                <LogIn size={18} /> Log in
              </Link>
              <Link
                to="/start"
                onClick={() => setIsOpen(false)}
                className="w-full btn-primary py-3 justify-center"
              >
                Start Workspace
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
