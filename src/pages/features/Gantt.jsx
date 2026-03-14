import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function Gantt() {
  return (
    <SubPageLayout badge="Features" badgeColor="bg-red-100 text-red-700" title="Gantt Charts" subtitle="Visualize project timelines, dependencies, and milestones on a powerful interactive Gantt chart.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="📅" title="Drag to Reschedule" desc="Drag tasks to new dates on the timeline. Dependencies update automatically to reflect the change." />
        <FeatureCard icon="🔗" title="Task Dependencies" desc="Create start-to-finish, finish-to-start, or custom dependency links between tasks." />
        <FeatureCard icon="🏁" title="Milestones" desc="Mark key delivery dates as milestones and track them visually across the full project timeline." />
        <FeatureCard icon="📊" title="Baseline View" desc="Compare your original plan against actual progress to understand schedule slippage." />
        <FeatureCard icon="👥" title="Resource Allocation" desc="See how your team's time is distributed across the timeline to avoid overloading anyone." />
        <FeatureCard icon="📤" title="PDF Export" desc="Export your Gantt chart as a beautiful PDF for client meetings and status presentations." />
      </div>
      <CTABanner bg="bg-red-50" titleColor="text-red-900" btnColor="bg-red-600" title="Plan every project on a timeline." desc="Gantt charts give your team the clarity they need to hit every deadline." />
    </SubPageLayout>
  );
}
