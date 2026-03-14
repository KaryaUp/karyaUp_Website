import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function Integrations() {
  return (
    <SubPageLayout badge="Features" badgeColor="bg-blue-100 text-blue-700" title="Integrations" subtitle="Connect KaryaUp with the tools your team already uses to create a seamless workflow.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="📧" title="Gmail & Outlook" desc="Create tasks from emails and link conversations to projects without leaving your inbox." />
        <FeatureCard icon="📅" title="Google Calendar" desc="Sync tasks and deadlines with Google Calendar for a unified view of your schedule." />
        <FeatureCard icon="💬" title="Slack" desc="Receive KaryaUp notifications in Slack and create tasks directly from Slack messages." />
        <FeatureCard icon="🔗" title="Zapier" desc="Connect KaryaUp to thousands of apps via Zapier automations without writing any code." />
        <FeatureCard icon="🛠️" title="REST API" desc="Build custom integrations using KaryaUp's REST API for complete flexibility." />
        <FeatureCard icon="📦" title="App Marketplace" desc="Browse and install verified integrations from the KaryaUp marketplace in one click." />
      </div>
      <CTABanner bg="bg-blue-50" titleColor="text-blue-900" btnColor="bg-blue-600" title="Works with the tools you love." desc="Bring your existing stack into one connected workflow with KaryaUp." />
    </SubPageLayout>
  );
}
