import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function NonProfit() {
  return (
    <SubPageLayout badge="Solutions / Companies" badgeColor="bg-rose-100 text-rose-700" title="KaryaUp for Non-Profits" subtitle="Maximize your impact with organized teams, transparent reporting, and efficient program management.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="❤️" title="Program Management" desc="Manage programs and initiatives with clear tasks, timelines, and outcome tracking." />
        <FeatureCard icon="🤝" title="Volunteer Coordination" desc="Coordinate volunteer schedules, tasks, and communications in one organized workspace." />
        <FeatureCard icon="📊" title="Impact Dashboards" desc="Track program outcomes and beneficiary metrics to demonstrate impact to donors and boards." />
        <FeatureCard icon="💰" title="Grant Tracking" desc="Manage grant applications, deadlines, deliverables, and compliance reports." />
        <FeatureCard icon="📣" title="Campaign Management" desc="Organize fundraising campaigns with task checklists, timelines, and team assignments." />
        <FeatureCard icon="💸" title="Special Pricing" desc="Non-profit discounts available to help you do more with every dollar." />
      </div>
      <CTABanner bg="bg-rose-50" titleColor="text-rose-900" btnColor="bg-rose-600" title="Do more good, more efficiently." desc="Apply for our non-profit program and get 50% off any plan." btnLabel="Apply Now →" />
    </SubPageLayout>
  );
}
