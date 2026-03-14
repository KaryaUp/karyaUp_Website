import React from "react";
import SubPageLayout, { FeatureCard } from "../../components/SubPageLayout";

export default function Guides() {
  return (
    <SubPageLayout badge="Resources" badgeColor="bg-emerald-100 text-emerald-700" title="Guides" subtitle="In-depth guides to help your team master project management, productivity, and KaryaUp.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard icon="📋" title="Getting Started with KaryaUp" desc="A complete beginner's guide to setting up your first workspace, inviting your team, and creating your first project." />
        <FeatureCard icon="🔄" title="The Complete Agile Guide" desc="Everything you need to know about sprints, retrospectives, and agile ceremonies using KaryaUp." />
        <FeatureCard icon="📊" title="How to Measure Team Productivity" desc="Go beyond activity metrics. Learn how to measure output, quality, and impact that actually matters." />
        <FeatureCard icon="⚡" title="Mastering Automations" desc="A thorough guide to building powerful automation rules that save your team hours every week." />
        <FeatureCard icon="🏖️" title="The HR Guide to Leave & Attendance" desc="Best practices for managing time-off policies, approvals, and compliance for any team size." />
        <FeatureCard icon="💵" title="Project Profit Tracking" desc="How to set up financial tracking in KaryaUp so you always know if projects are making money." />
      </div>
    </SubPageLayout>
  );
}
