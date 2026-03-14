import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function TimeTracking() {
  return (
    <SubPageLayout
      badge="Platform"
      badgeColor="bg-amber-100 text-amber-700"
      title="Time Tracking"
      subtitle="Log hours accurately, understand where time goes, and keep every project on budget."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="⏱️" title="One-Click Timer" desc="Start and stop timers directly on any task. Time is automatically linked to the right project." />
        <FeatureCard icon="📅" title="Timesheets" desc="Review daily or weekly timesheets for yourself and your team with automatic totals and exports." />
        <FeatureCard icon="💰" title="Budget Tracking" desc="Compare estimated vs actual hours to catch budget overruns before they become a problem." />
        <FeatureCard icon="📈" title="Productivity Reports" desc="Identify your most productive hours, your most time-consuming tasks, and where to optimize." />
        <FeatureCard icon="🔄" title="Billable Hours" desc="Mark time as billable and generate professional invoices for clients with one click." />
        <FeatureCard icon="📱" title="Mobile Tracking" desc="Track time on the go from iOS or Android. Even works offline and syncs when you're back online." />
      </div>
      <CTABanner
        bg="bg-amber-50"
        titleColor="text-amber-900"
        btnColor="bg-amber-500"
        title="Never lose a billable hour again."
        desc="Accurate time tracking means accurate invoicing and happier clients."
      />
    </SubPageLayout>
  );
}
