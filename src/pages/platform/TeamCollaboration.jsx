import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function TeamCollaboration() {
  return (
    <SubPageLayout
      badge="Platform"
      badgeColor="bg-purple-100 text-purple-700"
      title="Team Collaboration"
      subtitle="Work together seamlessly — share updates, files, and feedback without leaving your workspace."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="💬" title="Task Comments" desc="Discuss work in context — leave comments on any task, tag teammates, and attach files directly." />
        <FeatureCard icon="📁" title="File Sharing" desc="Attach documents, images, and links to tasks. Everything your team needs is always in one place." />
        <FeatureCard icon="🤝" title="Shared Workspaces" desc="Organize all your projects, teams, and work into a single collaborative workspace." />
        <FeatureCard icon="✅" title="Task Dependencies" desc="Link tasks so blocked work is surfaced automatically when a prerequisite isn't complete yet." />
        <FeatureCard icon="📣" title="Announcements" desc="Broadcast important updates to your team, department, or entire company in a single message." />
        <FeatureCard icon="🔒" title="Permission Controls" desc="Control exactly who can view, edit, or manage specific spaces, projects, and tasks." />
      </div>
      <CTABanner
        bg="bg-purple-50"
        titleColor="text-purple-900"
        btnColor="bg-purple-600"
        title="Your whole team, in one place."
        desc="No more scattered emails — collaborate where the work happens."
      />
    </SubPageLayout>
  );
}
