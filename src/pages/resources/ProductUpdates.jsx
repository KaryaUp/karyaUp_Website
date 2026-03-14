import React from "react";
import SubPageLayout from "../../components/SubPageLayout";

const updates = [
  { version: "v2.5", date: "March 2026", emoji: "🚀", title: "Gantt Charts & Dependency Management", desc: "Full Gantt chart view with drag-to-reschedule, task dependencies, and milestone markers. Now generally available for all plans." },
  { version: "v2.4", date: "February 2026", emoji: "⚡", title: "Automation Engine Upgrade", desc: "Faster, more reliable automations with support for multi-step flows, conditional branches, and external webhooks." },
  { version: "v2.3", date: "January 2026", emoji: "📊", title: "Dashboard Custom Widgets", desc: "Build fully personalized dashboards with metric tiles, progress charts, and task lists using our new widget builder." },
  { version: "v2.2", date: "December 2025", emoji: "💬", title: "Built-in Chat Channels", desc: "Real-time team messaging is now natively integrated. Create channels, thread conversations, and share files without leaving KaryaUp." },
  { version: "v2.1", date: "November 2025", emoji: "📱", title: "Mobile App Redesign", desc: "Completely overhauled iOS and Android apps with faster navigation, offline support, and a cleaner interface." },
];

export default function ProductUpdates() {
  return (
    <SubPageLayout badge="Resources" badgeColor="bg-amber-100 text-amber-700" title="Product Updates" subtitle="Stay up to date with every new feature, improvement, and fix we ship to KaryaUp.">
      <div className="space-y-6">
        {updates.map((update) => (
          <div key={update.version} className="flex gap-5 bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <div className="text-3xl shrink-0">{update.emoji}</div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">{update.version}</span>
                <span className="text-xs text-gray-400">{update.date}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{update.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{update.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </SubPageLayout>
  );
}
