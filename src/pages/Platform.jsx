import React from "react";
import { Link, useParams } from "react-router-dom";

const SubPageLayout = ({ title, subtitle, badge, children }) => (
  <div className="min-h-screen bg-white pt-28 pb-20">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {badge && (
        <span className="inline-block mb-4 px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full bg-indigo-100 text-indigo-700">
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

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
    <div className="text-3xl mb-3">{icon}</div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

const sections = {
  "project-management": {
    badge: "Platform",
    title: "Project Management",
    subtitle: "Plan, track, and deliver projects on time — from simple tasks to complex cross-team initiatives.",
    content: (
      <>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          <FeatureCard icon="📋" title="Task Boards" desc="Visualize work with kanban boards. Drag and drop tasks across stages to track progress effortlessly." />
          <FeatureCard icon="🗺️" title="Gantt Timelines" desc="Map out project dependencies and milestones on interactive Gantt charts with automatic scheduling." />
          <FeatureCard icon="🎯" title="Goal Tracking" desc="Set measurable goals, align them to projects, and track progress with real-time status updates." />
          <FeatureCard icon="👥" title="Team Assignment" desc="Assign tasks to individuals or teams with clear deadlines, priorities, and workload visibility." />
          <FeatureCard icon="📊" title="Project Dashboards" desc="Get a real-time overview of all project metrics, upcoming deadlines, and team progress at a glance." />
          <FeatureCard icon="🔔" title="Smart Alerts" desc="Get notified when deadlines approach, blockers arise, or tasks are completed without checking manually." />
        </div>
        <div className="bg-indigo-50 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-indigo-900 mb-2">Ready to manage projects better?</h3>
            <p className="text-indigo-700 text-sm">Start your free workspace and bring your team together in one place.</p>
          </div>
          <Link to="/start" className="shrink-0 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors">
            Start Free →
          </Link>
        </div>
      </>
    ),
  },
  "time-tracking": {
    badge: "Platform",
    title: "Time Tracking",
    subtitle: "Log hours accurately, understand where time goes, and keep every project on budget.",
    content: (
      <>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          <FeatureCard icon="⏱️" title="One-Click Timer" desc="Start and stop timers directly on any task. Time is automatically linked to the right project." />
          <FeatureCard icon="📅" title="Timesheets" desc="Review daily or weekly timesheets for yourself and your team with automatic totals and exports." />
          <FeatureCard icon="💰" title="Budget Tracking" desc="Compare estimated vs actual hours to catch budget overruns before they become a problem." />
          <FeatureCard icon="📈" title="Productivity Reports" desc="Identify your most productive hours, your most time-consuming tasks, and where to optimize." />
          <FeatureCard icon="🔄" title="Billable Hours" desc="Mark time as billable and generate professional invoices for clients with one click." />
          <FeatureCard icon="📱" title="Mobile Tracking" desc="Track time on the go from iOS or Android. Even works offline and syncs when you're back online." />
        </div>
        <div className="bg-amber-50 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-amber-900 mb-2">Never lose a billable hour again.</h3>
            <p className="text-amber-700 text-sm">Accurate time tracking means accurate invoicing and happier clients.</p>
          </div>
          <Link to="/start" className="shrink-0 bg-amber-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-amber-600 transition-colors">
            Start Free →
          </Link>
        </div>
      </>
    ),
  },
  "team-collaboration": {
    badge: "Platform",
    title: "Team Collaboration",
    subtitle: "Work together seamlessly — share updates, files, and feedback without leaving your workspace.",
    content: (
      <>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          <FeatureCard icon="💬" title="Task Comments" desc="Discuss work in context — leave comments on any task, tag teammates, and attach files directly." />
          <FeatureCard icon="📁" title="File Sharing" desc="Attach documents, images, and links to tasks. Everything your team needs is always in one place." />
          <FeatureCard icon="🤝" title="Shared Workspaces" desc="Organize all your projects, teams, and work into a single collaborative workspace." />
          <FeatureCard icon="✅" title="Task Dependencies" desc="Link tasks so blocked work is surfaced automatically when a prerequisite isn't complete yet." />
          <FeatureCard icon="📣" title="Announcements" desc="Broadcast important updates to your team, department, or entire company in a single message." />
          <FeatureCard icon="🔒" title="Permission Controls" desc="Control exactly who can view, edit, or manage specific spaces, projects, and tasks." />
        </div>
        <div className="bg-purple-50 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-purple-900 mb-2">Your whole team, in one place.</h3>
            <p className="text-purple-700 text-sm">No more scattered emails and Slack threads — collaborate where the work happens.</p>
          </div>
          <Link to="/start" className="shrink-0 bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors">
            Start Free →
          </Link>
        </div>
      </>
    ),
  },
  "boss-dashboard": {
    badge: "Platform",
    title: "Boss Dashboard",
    subtitle: "A high-level command center for leaders who need clarity on team performance, priorities, and progress — all at once.",
    content: (
      <>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          <FeatureCard icon="🏆" title="Team Overview" desc="See every team member's active tasks, workload, and completion rates at a glance from one screen." />
          <FeatureCard icon="🚨" title="Risk Alerts" desc="Instantly see overdue tasks, blocked projects, and at-risk deadlines without digging through details." />
          <FeatureCard icon="📊" title="Custom Widgets" desc="Build your perfect dashboard by adding charts, task lists, and metrics that matter most to you." />
          <FeatureCard icon="📆" title="Deadline Tracker" desc="A consolidated view of all upcoming deadlines across projects so nothing surprises you." />
          <FeatureCard icon="⚡" title="Quick Actions" desc="Approve requests, reassign tasks, and update priorities directly from your dashboard." />
          <FeatureCard icon="📤" title="Executive Reports" desc="Share polished weekly reports with leadership or clients with one-click PDF export." />
        </div>
        <div className="bg-indigo-50 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-indigo-900 mb-2">Lead with full visibility.</h3>
            <p className="text-indigo-700 text-sm">Built for managers and executives who need the big picture fast.</p>
          </div>
          <Link to="/start" className="shrink-0 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors">
            Start Free →
          </Link>
        </div>
      </>
    ),
  },
  "profit-tracking": {
    badge: "Platform",
    title: "Profit Tracking",
    subtitle: "Connect work to revenue. Monitor project budgets, track expenses, and ensure every project is profitable.",
    content: (
      <>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          <FeatureCard icon="💵" title="Budget vs Actuals" desc="Set budgets per project and monitor spending in real time to avoid overruns before they happen." />
          <FeatureCard icon="📉" title="Cost Analysis" desc="Break down costs by team member, task type, or time period to find your most expensive bottlenecks." />
          <FeatureCard icon="🧾" title="Expense Logging" desc="Log project expenses, attach receipts, and keep a complete audit trail for every spend." />
          <FeatureCard icon="📈" title="Profit Margin View" desc="See the gross profit margin per project by comparing billed revenue against internal costs." />
          <FeatureCard icon="🔁" title="Recurring Revenue" desc="Track recurring contracts and retainers alongside project-based revenue in a unified view." />
          <FeatureCard icon="📊" title="Financial Reports" desc="Generate profit & loss summaries, budget reports, and cost breakdowns for any date range." />
        </div>
        <div className="bg-emerald-50 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-emerald-900 mb-2">Know your numbers, grow your business.</h3>
            <p className="text-emerald-700 text-sm">Profit tracking that ties directly to how your team works.</p>
          </div>
          <Link to="/start" className="shrink-0 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors">
            Start Free →
          </Link>
        </div>
      </>
    ),
  },
};

const overviewSection = {
  badge: "Platform",
  title: "The KaryaUp Platform",
  subtitle: "One workspace for your entire company. Manage projects, track time, collaborate, and measure outcomes — without switching tools.",
  content: (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        {[
          { label: "Project Management", to: "/platform/project-management", icon: "📋", desc: "Plan, track, and deliver any project on time." },
          { label: "Time Tracking", to: "/platform/time-tracking", icon: "⏱️", desc: "Log hours and keep every project on budget." },
          { label: "Team Collaboration", to: "/platform/team-collaboration", icon: "🤝", desc: "Comment, share files, and collaborate in context." },
          { label: "Boss Dashboard", to: "/platform/boss-dashboard", icon: "🏆", desc: "Get a high-level view of all team activity." },
          { label: "Profit Tracking", to: "/platform/profit-tracking", icon: "💵", desc: "Connect hours and expenses to real revenue." },
        ].map((item) => (
          <Link key={item.to} to={item.to} className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all">
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-700 mb-2">{item.label}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
          </Link>
        ))}
      </div>
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-2">Start your free workspace today.</h3>
        <p className="text-indigo-100 mb-6 text-sm">No credit card required. Free forever for small teams.</p>
        <Link to="/start" className="inline-block bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-colors">
          Get Started Free →
        </Link>
      </div>
    </>
  ),
};

export default function Platform() {
  const { page } = useParams();
  const section = page ? sections[page] : null;
  const s = section || overviewSection;

  return (
    <SubPageLayout badge={s.badge} title={s.title} subtitle={s.subtitle}>
      {s.content}
    </SubPageLayout>
  );
}
