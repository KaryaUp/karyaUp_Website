import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function BossDashboard() {
  return (
    <SubPageLayout
      badge="Platform"
      badgeColor="bg-indigo-100 text-indigo-700"
      title="Boss Dashboard"
      subtitle="A high-level command center for leaders — get full clarity on team performance, priorities, and progress."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="🏆" title="Team Overview" desc="See every team member's active tasks, workload, and completion rates at a glance from one screen." />
        <FeatureCard icon="🚨" title="Risk Alerts" desc="Instantly see overdue tasks, blocked projects, and at-risk deadlines without digging through details." />
        <FeatureCard icon="📊" title="Custom Widgets" desc="Build your perfect dashboard by adding charts, task lists, and metrics that matter most to you." />
        <FeatureCard icon="📆" title="Deadline Tracker" desc="A consolidated view of all upcoming deadlines across projects so nothing surprises you." />
        <FeatureCard icon="⚡" title="Quick Actions" desc="Approve requests, reassign tasks, and update priorities directly from your dashboard." />
        <FeatureCard icon="📤" title="Executive Reports" desc="Share polished weekly reports with leadership or clients with one-click PDF export." />
      </div>
      <CTABanner
        bg="bg-indigo-50"
        titleColor="text-indigo-900"
        btnColor="bg-indigo-600"
        title="Lead with full visibility."
        desc="Built for managers and executives who need the big picture fast."
      />
    </SubPageLayout>
  );
}
