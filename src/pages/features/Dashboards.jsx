import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function Dashboards() {
  return (
    <SubPageLayout badge="Features" badgeColor="bg-rose-100 text-rose-700" title="Dashboards" subtitle="Custom dashboards that give you real-time visibility into your work, your team, and your metrics.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="📊" title="Drag & Drop Widgets" desc="Build your ideal dashboard by dragging charts, task lists, and metrics exactly where you want them." />
        <FeatureCard icon="📈" title="Progress Charts" desc="Track team velocity, task completion rates, and sprint burndowns with live charts." />
        <FeatureCard icon="🔢" title="Metric Tiles" desc="Display key numbers — open tasks, overdue items, team headcount — as highlighted tiles." />
        <FeatureCard icon="🎯" title="Goal Progress" desc="Show goal completion percentage alongside project data to keep priorities aligned." />
        <FeatureCard icon="📤" title="Share & Export" desc="Share dashboards with stakeholders or export charts as images and PDFs for reports." />
        <FeatureCard icon="🔄" title="Auto-Refresh" desc="Dashboards update automatically so you always have the latest data without manual refreshing." />
      </div>
      <CTABanner bg="bg-rose-50" titleColor="text-rose-900" btnColor="bg-rose-600" title="Your metrics, your way." desc="Build a dashboard that actually reflects what matters to your team." />
    </SubPageLayout>
  );
}
