import React from "react";
import { Link, useParams } from "react-router-dom";

const SubPageLayout = ({ title, subtitle, badge, children }) => (
  <div className="min-h-screen bg-white pt-28 pb-20">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {badge && (
        <span className="inline-block mb-4 px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full bg-violet-100 text-violet-700">
          {badge}
        </span>
      )}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
        {title}
      </h1>
      <p className="text-lg text-gray-500 mb-12 max-w-2xl">{subtitle}</p>
      {children}
    </div>
  </div>
);

const ArticleCard = ({ icon, title, desc, to, tag }) => (
  <Link to={to} className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow block">
    <div className="flex items-center justify-between mb-3">
      <span className="text-2xl">{icon}</span>
      {tag && <span className="text-xs font-bold bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full">{tag}</span>}
    </div>
    <h3 className="text-lg font-bold text-gray-900 group-hover:text-violet-700 mb-2">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
  </Link>
);

const sections = {
  blog: {
    badge: "Resources",
    title: "KaryaUp Blog",
    subtitle: "Practical articles on productivity, team management, and getting the most out of KaryaUp.",
    content: (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ArticleCard to="#" icon="✅" tag="Productivity" title="10 Ways to Cut Meeting Time in Half" desc="Discover how the most efficient teams run fewer, shorter, more effective meetings." />
        <ArticleCard to="#" icon="📊" tag="Management" title="How to Build a Team Dashboard That Actually Gets Used" desc="Most dashboards go unread. Here's how to build one your team checks every day." />
        <ArticleCard to="#" icon="⏱️" tag="Time Tracking" title="Why Your Team Underestimates Every Project" desc="The psychology behind planning fallacy and how to fix it with better data." />
        <ArticleCard to="#" icon="🤝" tag="Collaboration" title="Remote Team Communication: The Complete Playbook" desc="Tactics from remote-first companies on keeping distributed teams aligned and motivated." />
        <ArticleCard to="#" icon="🚀" tag="Growth" title="How Startups Use KaryaUp to Grow from 5 to 50 People" desc="Real workflows from fast-growing startups who scaled without adding management overhead." />
        <ArticleCard to="#" icon="⚡" tag="Automations" title="5 Automations Every Manager Should Set Up Today" desc="Cut repetitive admin work and let your team focus on what actually matters." />
      </div>
    ),
  },
  guides: {
    badge: "Resources",
    title: "Guides",
    subtitle: "In-depth guides to help your team master project management, productivity, and KaryaUp.",
    content: (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ArticleCard to="#" icon="📋" tag="Beginner" title="Getting Started with KaryaUp" desc="A complete beginner's guide to setting up your first workspace, inviting your team, and creating your first project." />
        <ArticleCard to="#" icon="🔄" tag="Agile" title="The Complete Agile Guide for Teams" desc="Everything you need to know about sprints, retrospectives, and agile ceremonies using KaryaUp." />
        <ArticleCard to="#" icon="📊" tag="Analytics" title="How to Measure Team Productivity" desc="Go beyond activity metrics. Learn how to measure output, quality, and impact that actually matters." />
        <ArticleCard to="#" icon="⚡" tag="Advanced" title="Mastering KaryaUp Automations" desc="A thorough guide to building powerful automation rules that save your team hours every week." />
        <ArticleCard to="#" icon="🏖️" tag="HR" title="The HR Leader's Guide to Leave & Attendance" desc="Best practices for managing time-off policies, approvals, and compliance for any team size." />
        <ArticleCard to="#" icon="💵" tag="Finance" title="Project Profit Tracking from First Principles" desc="How to set up financial tracking in KaryaUp so you always know if projects are making money." />
      </div>
    ),
  },
  updates: {
    badge: "Resources",
    title: "Product Updates",
    subtitle: "Stay up to date with every new feature, improvement, and fix we ship to KaryaUp.",
    content: (
      <div className="space-y-6">
        {[
          { version: "v2.5", date: "March 2026", emoji: "🚀", title: "Gantt Charts & Dependency Management", desc: "Full Gantt chart view with drag-to-reschedule, task dependencies, and milestone markers. Now generally available for all plans." },
          { version: "v2.4", date: "February 2026", emoji: "⚡", title: "Automation Engine Upgrade", desc: "Faster, more reliable automations with support for multi-step flows, conditional branches, and external webhooks." },
          { version: "v2.3", date: "January 2026", emoji: "📊", title: "Dashboard Custom Widgets", desc: "Build fully personalized dashboards with metric tiles, progress charts, and task lists using our new widget builder." },
          { version: "v2.2", date: "December 2025", emoji: "💬", title: "Built-in Chat Channels", desc: "Real-time team messaging is now natively integrated. Create channels, thread conversations, and share files without leaving KaryaUp." },
          { version: "v2.1", date: "November 2025", emoji: "📱", title: "Mobile App Redesign", desc: "Completely overhauled iOS and Android apps with faster navigation, offline support, and a cleaner interface." },
        ].map((update) => (
          <div key={update.version} className="flex gap-5 bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <div className="text-3xl shrink-0">{update.emoji}</div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs font-bold bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full">{update.version}</span>
                <span className="text-xs text-gray-400">{update.date}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{update.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{update.desc}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  docs: {
    badge: "Resources",
    title: "Documentation",
    subtitle: "Detailed documentation on every feature, API, and configuration option in KaryaUp.",
    content: (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ArticleCard to="#" icon="🚀" tag="Getting Started" title="Quick Start Guide" desc="Set up your workspace, invite your team, and create your first project in under 10 minutes." />
        <ArticleCard to="#" icon="📋" tag="Tasks" title="Tasks & Subtasks" desc="Full documentation on creating, assigning, organizing, and automating tasks." />
        <ArticleCard to="#" icon="⏱️" tag="Time Tracking" title="Time Tracking Docs" desc="How to enable time tracking, use the timer, log time manually, and export timesheets." />
        <ArticleCard to="#" icon="🔗" tag="API" title="REST API Reference" desc="Complete API docs with endpoints, authentication, rate limits, and code examples in multiple languages." />
        <ArticleCard to="#" icon="⚡" tag="Automations" title="Automation Documentation" desc="Build, manage, and troubleshoot automation rules with our step-by-step documentation." />
        <ArticleCard to="#" icon="🔒" tag="Security" title="Security & Permissions" desc="Understand user roles, permission levels, SSO setup, and data security practices in KaryaUp." />
      </div>
    ),
  },
  demo: {
    badge: "Resources",
    title: "Live Demo",
    subtitle: "See KaryaUp in action with an interactive demo tailored to your team's needs.",
    content: (
      <div className="text-center py-16 bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl border border-violet-100">
        <div className="text-6xl mb-6">🖥️</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Book a Live Demo</h3>
        <p className="text-gray-500 mb-2 max-w-md mx-auto">Get a personalized walkthrough of KaryaUp with one of our product specialists. We'll tailor it to your team's specific workflow and answer all your questions.</p>
        <p className="text-sm text-violet-600 font-medium mb-8">30-minute sessions available Monday–Friday, 9am–6pm IST</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/start" className="inline-block bg-violet-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-violet-700 transition-colors">
            Book a Demo
          </Link>
          <Link to="/resources/tutorials" className="inline-block border border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
            Watch Video Tutorials
          </Link>
        </div>
      </div>
    ),
  },
  tutorials: {
    badge: "Resources",
    title: "Video Tutorials",
    subtitle: "Step-by-step video tutorials to help every team member get up to speed with KaryaUp fast.",
    content: (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { emoji: "▶️", title: "KaryaUp in 5 Minutes", duration: "5:12", level: "Beginner", desc: "The fastest way to understand what KaryaUp is and why your team will love it." },
          { emoji: "▶️", title: "Creating Your First Project", duration: "8:34", level: "Beginner", desc: "Watch us set up a real project from scratch — tasks, assignees, deadlines, and views." },
          { emoji: "▶️", title: "Mastering the Board View", duration: "11:20", level: "Intermediate", desc: "Learn to build powerful Kanban boards with automation, WIP limits, and custom columns." },
          { emoji: "▶️", title: "Time Tracking Deep Dive", duration: "9:45", level: "Intermediate", desc: "Everything you need to know about logging time, reviewing timesheets, and billing clients." },
          { emoji: "▶️", title: "Building Automations", duration: "14:02", level: "Advanced", desc: "Build no-code automations that run your team's repetitive workflows automatically." },
          { emoji: "▶️", title: "Admin & Permissions Guide", duration: "7:18", level: "Admin", desc: "How to configure workspace permissions, roles, SSO, and security settings." },
        ].map((v) => (
          <div key={v.title} className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="bg-violet-100 flex items-center justify-center h-32 text-5xl">{v.emoji}</div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full">{v.level}</span>
                <span className="text-xs text-gray-400">{v.duration}</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{v.title}</h3>
              <p className="text-sm text-gray-500">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
};

const allResources = [
  { label: "Blog", to: "/resources/blog", icon: "📝" },
  { label: "Guides", to: "/resources/guides", icon: "📚" },
  { label: "Product Updates", to: "/resources/updates", icon: "✨" },
  { label: "Documentation", to: "/resources/docs", icon: "📄" },
  { label: "Demo", to: "/resources/demo", icon: "🖥️" },
  { label: "Video Tutorials", to: "/resources/tutorials", icon: "▶️" },
];

export default function Resources() {
  const { page } = useParams();
  const section = page ? sections[page] : null;

  if (section) {
    return (
      <SubPageLayout badge={section.badge} title={section.title} subtitle={section.subtitle}>
        {section.content}
        <div className="mt-12 pt-10 border-t border-gray-100">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">More Resources</h3>
          <div className="flex flex-wrap gap-3">
            {allResources.filter(r => !r.to.endsWith(`/${page}`)).map((r) => (
              <Link key={r.to} to={r.to} className="flex items-center gap-2 text-sm text-slate-700 hover:text-primary font-medium bg-gray-50 px-4 py-2 rounded-lg hover:bg-gray-100 border border-gray-100">
                <span>{r.icon}</span> {r.label}
              </Link>
            ))}
          </div>
        </div>
      </SubPageLayout>
    );
  }

  return (
    <SubPageLayout badge="Resources" title="Resources" subtitle="Everything you need to learn, grow, and get the most out of KaryaUp.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allResources.map((r) => (
          <Link key={r.to} to={r.to} className="group flex items-center gap-4 bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:border-violet-200 transition-all">
            <span className="text-3xl">{r.icon}</span>
            <span className="font-semibold text-gray-900 group-hover:text-violet-700 text-lg">{r.label}</span>
          </Link>
        ))}
      </div>
    </SubPageLayout>
  );
}
