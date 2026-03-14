import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function ProfitTracking() {
  return (
    <SubPageLayout
      badge="Platform"
      badgeColor="bg-emerald-100 text-emerald-700"
      title="Profit Tracking"
      subtitle="Connect work to revenue. Monitor project budgets, track expenses, and ensure every project is profitable."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="💵" title="Budget vs Actuals" desc="Set budgets per project and monitor spending in real time to avoid overruns before they happen." />
        <FeatureCard icon="📉" title="Cost Analysis" desc="Break down costs by team member, task type, or time period to find your most expensive bottlenecks." />
        <FeatureCard icon="🧾" title="Expense Logging" desc="Log project expenses, attach receipts, and keep a complete audit trail for every spend." />
        <FeatureCard icon="📈" title="Profit Margin View" desc="See the gross profit margin per project by comparing billed revenue against internal costs." />
        <FeatureCard icon="🔁" title="Recurring Revenue" desc="Track recurring contracts and retainers alongside project-based revenue in a unified view." />
        <FeatureCard icon="📊" title="Financial Reports" desc="Generate profit & loss summaries, budget reports, and cost breakdowns for any date range." />
      </div>
      <CTABanner
        bg="bg-emerald-50"
        titleColor="text-emerald-900"
        btnColor="bg-emerald-600"
        title="Know your numbers, grow your business."
        desc="Profit tracking that ties directly to how your team works."
      />
    </SubPageLayout>
  );
}
