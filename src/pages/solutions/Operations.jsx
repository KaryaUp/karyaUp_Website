import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function Operations() {
  return (
    <SubPageLayout badge="Solutions / Teams" badgeColor="bg-slate-100 text-slate-700" title="KaryaUp for Operations" subtitle="Streamline operations, reduce overhead, and keep every process running like clockwork.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="⚙️" title="Process Templates" desc="Standardize recurring processes with reusable, checklist-driven templates." />
        <FeatureCard icon="📋" title="SOPs" desc="Store standard operating procedures linked to tasks so teams always follow the right steps." />
        <FeatureCard icon="🔄" title="Workflow Automation" desc="Automate approval flows, notifications, and status transitions without code." />
        <FeatureCard icon="📊" title="KPI Dashboards" desc="Monitor operational KPIs across all departments from a single command center." />
        <FeatureCard icon="📦" title="Vendor Management" desc="Track vendor tasks, contracts, and deliverables alongside internal work." />
        <FeatureCard icon="🔔" title="SLA Tracking" desc="Set and monitor service-level agreements so commitments are always met." />
      </div>
      <CTABanner bg="bg-slate-50" titleColor="text-slate-900" btnColor="bg-slate-600" title="Operations at scale." desc="One platform for every process in your business." />
    </SubPageLayout>
  );
}
