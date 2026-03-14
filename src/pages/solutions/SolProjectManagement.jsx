import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function SolProjectManagement() {
  return (
    <SubPageLayout badge="Solutions / Teams" badgeColor="bg-rose-100 text-rose-700" title="KaryaUp for Project Management Teams" subtitle="Deliver every project on time with full visibility, clear accountability, and powerful automation.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="📋" title="Structured Workflows" desc="Create templates for common project types so teams spin up new projects in seconds." />
        <FeatureCard icon="📅" title="Gantt & Timeline" desc="Visualize the entire project lifecycle with dependencies and milestones in one view." />
        <FeatureCard icon="📊" title="Progress Dashboards" desc="Track project health with live status charts and team velocity metrics." />
        <FeatureCard icon="🔔" title="Deadline Alerts" desc="Automatic alerts for overdue tasks and approaching deadlines so nothing is missed." />
        <FeatureCard icon="👥" title="Stakeholder Reports" desc="Share concise, real-time status reports with clients and stakeholders without manual prep." />
        <FeatureCard icon="⚡" title="Automations" desc="Automate handoffs, status changes, and recurring tasks to cut out manual coordination." />
      </div>
      <CTABanner bg="bg-rose-50" titleColor="text-rose-900" btnColor="bg-rose-600" title="Built for project managers." desc="Manage any type of project with one flexible platform." />
    </SubPageLayout>
  );
}
