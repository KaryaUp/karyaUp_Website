import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function Team() {
  return (
    <SubPageLayout badge="Management" badgeColor="bg-blue-100 text-blue-700" title="Team Management" subtitle="Manage your entire workforce in one place — from onboarding to performance tracking.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="👤" title="Employee Profiles" desc="Maintain rich profiles for every team member including roles, skills, and contact information." />
        <FeatureCard icon="🏢" title="Department Structure" desc="Organize staff into departments and reporting hierarchies that mirror your org chart." />
        <FeatureCard icon="📋" title="Roles & Permissions" desc="Grant fine-grained access to tools and data based on an employee's role." />
        <FeatureCard icon="📈" title="Performance Tracking" desc="Track KPIs, set goals, and run performance reviews from a single dashboard." />
        <FeatureCard icon="🤝" title="Onboarding Checklists" desc="Guide new hires through a structured onboarding journey with task-based checklists." />
        <FeatureCard icon="📊" title="Headcount Reports" desc="Generate reports on team size, growth, turnover, and departmental distribution." />
      </div>
      <CTABanner bg="bg-blue-50" titleColor="text-blue-900" btnColor="bg-blue-600" title="Manage your people, not paperwork." desc="One place for your entire team's info, tasks, and performance." />
    </SubPageLayout>
  );
}
