import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function Agency() {
  return (
    <SubPageLayout badge="Solutions / Companies" badgeColor="bg-violet-100 text-violet-700" title="KaryaUp for Agencies" subtitle="Run multiple client projects simultaneously with complete visibility, client portals, and accurate billing.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="🗂️" title="Multi-Client Workspace" desc="Keep client work neatly separated in dedicated spaces while managing everything in one login." />
        <FeatureCard icon="👁️" title="Client Portal" desc="Give clients a view of their project progress without exposing internal details." />
        <FeatureCard icon="🧾" title="Billable Hours" desc="Track time per client, mark hours as billable, and generate invoices with one click." />
        <FeatureCard icon="📅" title="Delivery Timelines" desc="Manage campaign and project delivery deadlines across all clients on a unified timeline." />
        <FeatureCard icon="📊" title="Agency Dashboards" desc="Monitor project health, team utilization, and revenue across all accounts in real time." />
        <FeatureCard icon="🤝" title="Freelancer Management" desc="Invite contractors and freelancers into projects with limited access and time tracking." />
      </div>
      <CTABanner bg="bg-violet-50" titleColor="text-violet-900" btnColor="bg-violet-600" title="Built for client-facing teams." desc="Manage every client, every deadline, every deliverable in one place." />
    </SubPageLayout>
  );
}
