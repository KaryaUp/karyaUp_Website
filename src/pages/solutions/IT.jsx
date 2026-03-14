import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function IT() {
  return (
    <SubPageLayout badge="Solutions / Teams" badgeColor="bg-cyan-100 text-cyan-700" title="KaryaUp for IT Teams" subtitle="Manage IT projects, incidents, and service requests in a structured, efficient workspace.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="🚨" title="Incident Management" desc="Log, triage, and resolve incidents with automated escalation and priority routing." />
        <FeatureCard icon="🖥️" title="Asset Tracking" desc="Maintain an inventory of hardware, software licences, and IT assets linked to tasks." />
        <FeatureCard icon="📋" title="IT Project Planning" desc="Manage infrastructure upgrades, migrations, and rollouts with Gantt and board views." />
        <FeatureCard icon="🔒" title="Access Management" desc="Track permission requests and access provisioning with an auditable approval workflow." />
        <FeatureCard icon="📊" title="Service Dashboards" desc="Monitor open tickets, resolution rates, and team workload in real time." />
        <FeatureCard icon="🔗" title="API & Integrations" desc="Connect KaryaUp to your monitoring tools, JIRA, and helpdesk systems." />
      </div>
      <CTABanner bg="bg-cyan-50" titleColor="text-cyan-900" btnColor="bg-cyan-600" title="IT excellence, delivered." desc="Manage incidents, projects, and assets in one workspace." />
    </SubPageLayout>
  );
}
