import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function HR() {
  return (
    <SubPageLayout badge="Solutions / Teams" badgeColor="bg-teal-100 text-teal-700" title="KaryaUp for Human Resources" subtitle="Manage hiring, onboarding, performance, attendance, and payroll from one HR command center.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="🤝" title="Recruitment Pipeline" desc="Track job applicants through each stage from application to offer with kanban boards." />
        <FeatureCard icon="📋" title="Onboarding Workflows" desc="Guide new hires through structured onboarding checklists that ensure nothing is missed." />
        <FeatureCard icon="📈" title="Performance Reviews" desc="Run structured annual and mid-year reviews with goal tracking and feedback forms." />
        <FeatureCard icon="🏖️" title="Leave Management" desc="Automate leave requests, approvals, and balance tracking across the entire company." />
        <FeatureCard icon="🕐" title="Attendance Tracking" desc="Monitor working hours, late arrivals, and absences with automated reports." />
        <FeatureCard icon="💵" title="Payroll Processing" desc="Process salaries, generate payslips, and manage deductions in a few clicks." />
      </div>
      <CTABanner bg="bg-teal-50" titleColor="text-teal-900" btnColor="bg-teal-600" title="HR, simplified." desc="One platform for your entire employee lifecycle." />
    </SubPageLayout>
  );
}
