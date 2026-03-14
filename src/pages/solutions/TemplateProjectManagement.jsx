import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function TemplateProjectManagement() {
  return (
    <SubPageLayout badge="Templates" badgeColor="bg-blue-100 text-blue-700" title="Project Management Templates" subtitle="Kick-start any project with ready-made templates designed for speed, clarity, and best practices.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="📋" title="Agile Sprint Board" desc="Pre-built kanban board with sprints, backlog, and done columns ready for your team." />
        <FeatureCard icon="🗺️" title="Gantt Project Plan" desc="A structured Gantt template with milestones and dependencies for classic project management." />
        <FeatureCard icon="🔁" title="Waterfall Template" desc="Manage sequential phase-based projects with this classic waterfall planning template." />
        <FeatureCard icon="🎯" title="OKR Tracker" desc="Set quarterly objectives and key results and track progress toward every goal." />
        <FeatureCard icon="🐛" title="Bug Report Template" desc="Structured bug reporting with severity, steps to reproduce, and resolution tracking." />
        <FeatureCard icon="🏁" title="Project Kickoff" desc="Start every project right with this team-aligned kickoff checklist and brief template." />
      </div>
      <CTABanner bg="bg-blue-50" titleColor="text-blue-900" btnColor="bg-blue-600" title="Skip setup, start working faster." desc="Import any template and customize it for your team in minutes." btnLabel="Browse Templates →" />
    </SubPageLayout>
  );
}
