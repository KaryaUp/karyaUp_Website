import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function TemplateMarketing() {
  return (
    <SubPageLayout badge="Templates" badgeColor="bg-indigo-100 text-indigo-700" title="Marketing Templates" subtitle="Launch campaigns, manage content, and measure results with ready-to-use marketing templates.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="📣" title="Campaign Planner" desc="Plan full marketing campaigns from brief to launch with milestones and task assignments." />
        <FeatureCard icon="🗓️" title="Content Calendar" desc="Keep your editorial and social content organized in a shared calendar all year long." />
        <FeatureCard icon="📧" title="Email Campaign" desc="Plan and manage every email campaign with segments, copy, design, and send-date tracking." />
        <FeatureCard icon="📱" title="Social Media Plan" desc="Schedule posts, assign copy and creative, and track engagement goals per channel." />
        <FeatureCard icon="📊" title="Campaign Report" desc="Auto-generate campaign performance summaries with metrics from your dashboard." />
        <FeatureCard icon="🚀" title="Product Launch" desc="The complete product launch template — from pre-launch tasks to post-launch review." />
      </div>
      <CTABanner bg="bg-indigo-50" titleColor="text-indigo-900" btnColor="bg-indigo-600" title="Your marketing, organized and on time." desc="Use our marketing templates and ship campaigns that hit their deadlines." btnLabel="Use Template →" />
    </SubPageLayout>
  );
}
