import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function Salary() {
  return (
    <SubPageLayout badge="Management" badgeColor="bg-emerald-100 text-emerald-700" title="Salary Management" subtitle="Manage payroll, salaries, and compensation with accuracy and full compliance.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="💵" title="Salary Structures" desc="Define base pay, allowances, and deductions for every role and grade in your organization." />
        <FeatureCard icon="📊" title="Payroll Processing" desc="Generate monthly payroll in minutes with automatic deductions for taxes, PF, and insurance." />
        <FeatureCard icon="🧾" title="Payslip Generation" desc="Send professional, itemized payslips to each employee via email or in-app download." />
        <FeatureCard icon="📈" title="Compensation Reviews" desc="Track salary history, schedule annual reviews, and manage increments from a single dashboard." />
        <FeatureCard icon="⚖️" title="Compliance" desc="Built-in rules for statutory deductions and compliance requirements across jurisdictions." />
        <FeatureCard icon="🏦" title="Bank Transfers" desc="Initiate bulk salary disbursements to employee bank accounts directly from the platform." />
      </div>
      <CTABanner bg="bg-emerald-50" titleColor="text-emerald-900" btnColor="bg-emerald-700" title="Payroll made painless." desc="Process salaries, generate payslips, and stay compliant in minutes." />
    </SubPageLayout>
  );
}
