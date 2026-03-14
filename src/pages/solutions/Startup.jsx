import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function Startup() {
  return (
    <SubPageLayout badge="Solutions / Companies" badgeColor="bg-orange-100 text-orange-700" title="KaryaUp for Startups" subtitle="Move fast and stay organized. KaryaUp gives startups the structure they need without slowing them down.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="🚀" title="Quick Setup" desc="Get your workspace up and running in minutes with pre-built startup templates." />
        <FeatureCard icon="💸" title="Startup Pricing" desc="Affordable plans designed for small teams and early-stage companies with big ambitions." />
        <FeatureCard icon="⚡" title="Move Fast" desc="Lightweight, flexible tools that don't slow you down with unnecessary complexity." />
        <FeatureCard icon="📈" title="Scale With You" desc="As your team grows, KaryaUp grows with you — add features and seats on demand." />
        <FeatureCard icon="🤝" title="Investor-Ready Reports" desc="Generate clean progress reports and OKR summaries for board updates and investor meetings." />
        <FeatureCard icon="🏆" title="All-in-One" desc="Replace 5 different tools with KaryaUp. One subscription, one login, one source of truth." />
      </div>
      <CTABanner bg="bg-orange-50" titleColor="text-orange-900" btnColor="bg-orange-600" title="Built for builders." desc="Join thousands of startups who ship faster with KaryaUp." />
    </SubPageLayout>
  );
}
