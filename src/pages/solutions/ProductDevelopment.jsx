import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function ProductDevelopment() {
  return (
    <SubPageLayout badge="Solutions / Teams" badgeColor="bg-blue-100 text-blue-700" title="KaryaUp for Product Development" subtitle="Ship better products faster. From roadmap to release, keep your product team aligned and moving.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="🗺️" title="Product Roadmap" desc="Plan and communicate your product roadmap with a visual, always up-to-date timeline." />
        <FeatureCard icon="🐛" title="Bug Tracking" desc="Log, prioritize, and resolve bugs with a dedicated workflow that connects to your sprint." />
        <FeatureCard icon="🔄" title="Sprint Planning" desc="Run agile sprints with backlog management, sprint boards, and velocity tracking." />
        <FeatureCard icon="🧪" title="Release Tracking" desc="Plan features by release version and track completion toward your shipping dates." />
        <FeatureCard icon="📝" title="PRD Management" desc="Write and link product requirements directly to tasks so engineering always has context." />
        <FeatureCard icon="📊" title="Dev Dashboards" desc="Monitor sprint health, story points, and burn-down in real time." />
      </div>
      <CTABanner bg="bg-blue-50" titleColor="text-blue-900" btnColor="bg-blue-600" title="From idea to launch." desc="One workspace for your entire product lifecycle." />
    </SubPageLayout>
  );
}
