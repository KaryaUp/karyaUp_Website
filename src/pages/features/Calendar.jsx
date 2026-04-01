import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Globe, ArrowRight, CheckCircle2, Video, CheckSquare, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ReactLenis } from "lenis/react";
import { cn } from "../../lib/utils";

import { CTABanner } from "../../components/SubPageLayout";
import FeatureCTA from "../../components/FeatureCTA";
import calenderImg from "../../assets/Calender.webp";
import scheduleMeetingImg from "../../assets/Schedule_meeting (1).png";
import createTaskImg from "../../assets/New_Task.png";
import schedulePostImg from "../../assets/Schedule_Story.png";
import { Helmet } from "react-helmet-async";

gsap.registerPlugin(ScrollTrigger);

const calendarFeaturesTabs = [
  {
    id: "schedule-meeting",
    tab: "Schedule Meeting",
    title: "Schedule",
    titleHighlight: "Meetings",
    description: "Create a calendar event with a Google Meet link. Attendees will receive an invite and a reminder on the selected date.",
    bullets: ["Auto-generate meeting links instantly.", "Attendees get automated calendar invites."],
    imagePlaceholder: scheduleMeetingImg
  },
  {
    id: "create-task",
    tab: "Create Task",
    title: "Create",
    titleHighlight: "Tasks",
    description: "Create a new task and assign it to team members. Break work into clear actionable items directly from your calendar.",
    bullets: ["Assign priority, ownership, and details in one place.", "Tasks land directly on the assignee's schedule."],
    imagePlaceholder: createTaskImg
  },
  {
    id: "schedule-post",
    tab: "Schedule Post",
    title: "Schedule",
    titleHighlight: "Stories & Posts",
    description: "Plan stories and social posts for the future. You'll get notified exactly when it's time to publish.",
    bullets: ["Set exact dates and times for content drops.", "Never miss an upload with smart push notifications."],
    imagePlaceholder: schedulePostImg
  }
];

export default function CalendarPage() {
  const container = useRef(null);
  const sectionRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const calendarSections = [
    {
      id: "schedule-meeting",
      header: "Schedule Meeting",
      title: "Schedule",
      titleHighlight: "Meetings",
      description: "Create a calendar event with a Google Meet link. Attendees will receive an invite and a reminder on the selected date.",
      bullets: ["Auto-generate meeting links instantly.", "Attendees get automated invites."],
      image: scheduleMeetingImg,
      tag: "Meetings"
    },
    {
      id: "create-task",
      header: "Create Task",
      title: "Create",
      titleHighlight: "Tasks",
      description: "Create a new task and assign it to team members. Break work into clear actionable items directly from your calendar.",
      bullets: ["Assign priority and ownership.", "Tasks land on the assignee's schedule."],
      image: createTaskImg,
      tag: "Project Management"
    },
    {
      id: "schedule-post",
      header: "Schedule Post",
      title: "Schedule",
      titleHighlight: "Stories & Posts",
      description: "Plan stories and social posts for the future. You'll get notified exactly when it's time to publish.",
      bullets: ["Set exact dates for content drops.", "Never miss an upload with reminders."],
      image: schedulePostImg,
      tag: "Content Planning"
    }
  ];

  useGSAP(() => {
    const sections = sectionRefs.current;
    const totalSections = sections.length;

    if (!sections[0]) return;

    // Set initial states
    gsap.set(sections[0], { y: "0%", scale: 1, opacity: 1 });
    for (let i = 1; i < totalSections; i++) {
      if (!sections[i]) continue;
      gsap.set(sections[i], { y: "100%", scale: 1, opacity: 0 });
    }

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".sticky-sections-container",
        start: "center center",
        end: `+=${window.innerHeight * (totalSections - 1) * 1.5}`,
        pin: true,
        scrub: 1,
        pinSpacing: true,
      },
    });

    for (let i = 0; i < totalSections - 1; i++) {
      const currentSection = sections[i];
      const nextSection = sections[i + 1];

      if (!currentSection || !nextSection) continue;

      const position = i * 1.5;

      scrollTimeline.to(
        currentSection,
        {
          scale: 0.95,
          opacity: 0,
          y: "-20%",
          duration: 1.5,
          ease: "power2.inOut",
        },
        position
      );

      scrollTimeline.to(
        nextSection,
        {
          y: "0%",
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut",
        },
        position
      );
    }

    return () => {
      scrollTimeline.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, { scope: container });

  return (
    <ReactLenis root>
      <Helmet>
        <title>Team Calendar & Scheduling | Karyaup</title>

        <meta
          name="description"
          content="Plan and manage schedules with Karyaup calendar. Track tasks, deadlines, meetings, and events in one unified calendar for better team coordination."
        />

        <meta
          name="keywords"
          content="team calendar, scheduling software, task calendar, project deadlines, meeting planner, Karyaup"
        />

        <meta name="author" content="Karyaup" />

        <meta
          property="og:title"
          content="Team Calendar & Scheduling | Karyaup"
        />
        <meta
          property="og:description"
          content="Organize tasks, events, and deadlines with a powerful team calendar."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://karyaup.com/features/calendar"
        />
        <meta property="og:site_name" content="Karyaup" />

        <link
          rel="canonical"
          href="https://karyaup.com/features/calendar"
        />
      </Helmet>
      <div className="min-h-screen bg-white pt-20 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 text-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-10 lg:pb-12">
          {/* Ambient Background Glows */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-slate-200/20 rounded-full blur-[120px] -z-10" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-slate-100/30 rounded-full blur-[100px] -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.2 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-[11px] font-black uppercase tracking-widest shadow-sm"
                >
                  Features <span className="opacity-60 text-purple-400">/</span> Calendar
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 40, x: -10 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 100, delay: 0.1 }}
                  className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.06] mb-3"
                >
                  Master Your  <br />Time With A
                  <span className="block mt-1">
                    {" "}
                    <span className="text-gradient inline-block">
                      Unified Calendar
                    </span>
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                  className="mt-5 sm:mt-6 space-y-4 max-w-2xl w-full mx-auto lg:mx-0"
                >
                  {[
                    "A single calendar that brings together tasks, events, meetings, and deadlines in one beautiful view.",
                    "Plan seamlessly across teams, projects, and multiple timezones."
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 text-left group">
                      <div className="mt-0.5 w-5.5 h-5.5 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-500/20">
                        <CheckCircle2 className="w-3.2 h-3.2 text-purple-400 stroke-[3.5]" />
                      </div>
                      <p className="text-base text-slate-600 font-medium leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                        {text}
                      </p>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
                  className="mt-6 sm:mt-8 grid grid-cols-2 gap-x-4 gap-y-2.5 max-w-md w-full mx-auto lg:mx-0"
                >
                  {[
                    { label: "Google Sync", icon: Calendar },
                    { label: "Smart Scheduling", icon: Clock },
                    { label: "Multi-Timezone", icon: Globe }
                  ].map((tag) => (
                    <div key={tag.label} className="group flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-purple-300 hover:bg-purple-50 transition-all duration-300">
                      <div className="w-4.5 h-4.5 rounded-md bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <tag.icon className="w-2.8 h-2.8 text-purple-400 stroke-[3]" />
                      </div>
                      <span className="text-[9.5px] font-black uppercase tracking-[0.1em] text-slate-500 truncate group-hover:text-purple-700">{tag.label}</span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right Hero Image - Without SVGs */}
              <motion.div
                initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0 lg:-mr-12 xl:-mr-24 mt-10 lg:mt-0"
              >
                <div className="relative">
                  <div className="overflow-hidden border border-slate-200/80 rounded-2xl sm:rounded-3xl bg-white group transition-all duration-500">
                    <img
                      src={calenderImg}
                      alt="KaryaUp Calendar Interface"
                      className="w-full h-auto object-contain transition-transform duration-700"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Interactive Sticky Sections */}
        <section ref={container} className="pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-12 bg-white relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Section Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.06] tracking-tight mb-4">
                Everything Happens in<br />
                <span className="text-gradient inline-block">
                  One Calendar
                </span>
              </h2>
              <p className="text-slate-500 text-base sm:text-lg font-medium max-w-2xl mx-auto">
                Scroll through to see how KaryaUp streamlines your daily workflows.
              </p>
            </motion.div>

            <div className="sticky-sections-container relative h-[85vh] sm:h-[80vh] lg:h-[75vh] max-w-6xl mx-auto rounded-xl sm:rounded-3xl mb-12 sm:mb-24">
              {calendarSections.map((item, i) => (
                <div
                  key={i}
                  ref={(el) => (sectionRefs.current[i] = el)}
                  className="absolute inset-0 w-full h-full flex flex-col lg:flex-row items-center"
                >
                  {/* Left Side Content */}
                  <div className="flex-[0.45] lg:flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-4 sm:p-8 lg:p-12 h-full">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] mb-6">
                      {item.title}
                      <br />
                      <span className="text-gradient italic">
                        {item.titleHighlight}
                      </span>
                    </h3>

                    <p className="text-slate-500 text-sm sm:text-lg leading-relaxed mb-6 max-w-md font-medium line-clamp-3 lg:line-clamp-none">
                      {item.description}
                    </p>

                    <ul className="space-y-3 mb-4 w-full max-w-md hidden sm:block">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-left text-slate-600 text-[14px] font-bold bg-purple-50/50 p-4 rounded-xl border border-purple-100/30">
                          <CheckCircle2 size={20} className="text-purple-600 mt-0 flex-shrink-0" />
                          <span className="mt-0.5">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="inline-flex px-4 py-2 rounded-full bg-purple-50 border border-purple-200 text-[11px] font-black text-purple-700 uppercase tracking-widest sm:hidden">
                      {item.tag}
                    </div>
                  </div>

                  {/* Right Side Image */}
                  <div className="flex-[0.55] lg:flex-1 p-0 flex items-center justify-center h-full w-full">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.header}
                        className={cn(
                          "relative h-auto max-h-[85%] lg:max-h-[90%] object-contain transition-all duration-500 z-10",
                          item.id === "create-task" ? "w-[85%] lg:w-[75%]" : "w-[95%] lg:w-[100%]"
                        )}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Calendar Feature CTA */}
        <FeatureCTA
          title={<>Stay Synced With Your <br /> Schedule.</>}
          description="Connect your favorite tools and never miss a deadline. Automatically sync your scheduled tasks, meetings, and content publishing."
          buttonText="Start Scheduling"
          image={calenderImg}
          imageAlt="Calendar Workspace"
          containerClassName="mt-10 sm:mt-16 mb-10 sm:mb-16"
          paddingClassName="p-3 pt-5 sm:p-4 lg:p-8"
          imageClassName="w-full max-w-[760px] mx-auto"
          imageOuterClassName="relative flex w-full max-w-[300px] items-center justify-center mx-auto -translate-x-2 sm:w-[102%] sm:max-w-none sm:translate-x-0 lg:w-[88%] lg:translate-x-3"
        />


      </div>
    </ReactLenis>
  );
}
