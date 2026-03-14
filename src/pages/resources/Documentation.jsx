import React from "react";
import SubPageLayout, { FeatureCard } from "../../components/SubPageLayout";

export default function Documentation() {
  return (
    <SubPageLayout badge="Resources" badgeColor="bg-blue-100 text-blue-700" title="Documentation" subtitle="Detailed documentation on every feature, API, and configuration option in KaryaUp.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard icon="🚀" title="Quick Start Guide" desc="Set up your workspace, invite your team, and create your first project in under 10 minutes." />
        <FeatureCard icon="📋" title="Tasks & Subtasks" desc="Full documentation on creating, assigning, organizing, and automating tasks." />
        <FeatureCard icon="⏱️" title="Time Tracking Docs" desc="How to enable time tracking, use the timer, log time manually, and export timesheets." />
        <FeatureCard icon="🔗" title="REST API Reference" desc="Complete API docs with endpoints, authentication, rate limits, and code examples in multiple languages." />
        <FeatureCard icon="⚡" title="Automation Documentation" desc="Build, manage, and troubleshoot automation rules with our step-by-step documentation." />
        <FeatureCard icon="🔒" title="Security & Permissions" desc="Understand user roles, permission levels, SSO setup, and data security practices in KaryaUp." />
      </div>
    </SubPageLayout>
  );
}
