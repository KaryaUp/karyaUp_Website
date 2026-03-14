import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function ProjectManagement() {
  return (
    <SubPageLayout
      badge="Platform"
      badgeColor="bg-blue-100 text-blue-700"
      title="Project Management"
      subtitle="Plan, track, and deliver projects on time — from simple tasks to complex cross-team initiatives."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="📋" title="Task Boards" desc="Visualize work with kanban boards. Drag and drop tasks across stages to track progress effortlessly." />
        <FeatureCard icon="🗺️" title="Gantt Timelines" desc="Map out project dependencies and milestones on interactive Gantt charts with automatic scheduling." />
        <FeatureCard icon="🎯" title="Goal Tracking" desc="Set measurable goals, align them to projects, and track progress with real-time status updates." />
        <FeatureCard icon="👥" title="Team Assignment" desc="Assign tasks to individuals or teams with clear deadlines, priorities, and workload visibility." />
        <FeatureCard icon="📊" title="Project Dashboards" desc="Get a real-time overview of all project metrics, upcoming deadlines, and team progress at a glance." />
        <FeatureCard icon="🔔" title="Smart Alerts" desc="Get notified when deadlines approach, blockers arise, or tasks are completed without checking manually." />
      </div>
      <CTABanner
        bg="bg-blue-50"
        titleColor="text-blue-900"
        btnColor="bg-blue-600"
        title="Ready to manage projects better?"
        desc="Start your free workspace and bring your team together in one place."
      />
    </SubPageLayout>
  );
}
