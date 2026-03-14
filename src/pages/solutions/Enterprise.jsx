import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function Enterprise() {
  return (
    <SubPageLayout badge="Solutions / Enterprise" badgeColor="bg-blue-100 text-blue-700" title="KaryaUp for Enterprise" subtitle="Enterprise-grade security, compliance, and scalability for organizations with complex needs.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="🏢" title="Multi-Workspace" desc="Manage multiple business units, subsidiaries, or departments with separate, connected workspaces." />
        <FeatureCard icon="🔒" title="SSO & SAML" desc="Integrate with your corporate identity provider for single sign-on and automated provisioning." />
        <FeatureCard icon="📋" title="Audit Logs" desc="Full audit trail of every action across the workspace for compliance and security reviews." />
        <FeatureCard icon="👥" title="Advanced Permissions" desc="Define custom roles and permissions at workspace, project, and task level for total control." />
        <FeatureCard icon="📊" title="Executive Dashboards" desc="Cross-workspace reporting for leadership teams to see the full company-wide picture." />
        <FeatureCard icon="🤝" title="Dedicated Support" desc="Priority onboarding, a dedicated customer success manager, and 24/7 SLA-backed support." />
      </div>
      <CTABanner bg="bg-blue-50" titleColor="text-blue-900" btnColor="bg-blue-700" title="Built for enterprise scale." desc="Contact us for a custom enterprise plan and dedicated onboarding." btnLabel="Talk to Sales →" btnTo="/contact" />
    </SubPageLayout>
  );
}
