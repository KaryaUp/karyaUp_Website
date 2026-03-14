import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function Marketing() {
  return (
    <SubPageLayout badge="Solutions / Teams" badgeColor="bg-red-100 text-red-700" title="KaryaUp for Marketing" subtitle="Plan campaigns, manage content, and measure results — all without juggling multiple tools.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="📣" title="Campaign Planning" desc="Plan multi-channel campaigns with a structured timeline, task assignments, and deadlines." />
        <FeatureCard icon="🗓️" title="Content Calendar" desc="Manage your editorial and social content calendar with draft approval workflows." />
        <FeatureCard icon="📊" title="Marketing Analytics" desc="Track campaign performance, channel ROI, and goal metrics from a single dashboard." />
        <FeatureCard icon="✍️" title="Content Briefs" desc="Create linked briefs for every piece of content with guidelines, keywords, and assets." />
        <FeatureCard icon="🤝" title="Agency Collaboration" desc="Invite freelancers and agency partners with controlled access to relevant projects." />
        <FeatureCard icon="📤" title="Asset Library" desc="Store and organize brand assets, images, and approved files in a searchable library." />
      </div>
      <CTABanner bg="bg-red-50" titleColor="text-red-900" btnColor="bg-red-600" title="Marketing made measurable." desc="From briefing to publishing, manage all your marketing in one place." />
    </SubPageLayout>
  );
}
