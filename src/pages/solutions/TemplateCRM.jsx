import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function TemplateCRM() {
  return (
    <SubPageLayout badge="Templates" badgeColor="bg-orange-100 text-orange-700" title="Sales / CRM Templates" subtitle="Manage your entire sales pipeline, from lead generation to deal close, with structured templates.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="📩" title="Lead Tracking" desc="Track leads from source to qualified opportunity with a structured pipeline board." />
        <FeatureCard icon="🤝" title="Deal Pipeline" desc="Manage deals through negotiation, proposal, and close stages with clear status tracking." />
        <FeatureCard icon="📅" title="Follow-Up Scheduler" desc="Never miss a follow-up with automatic reminders tied to deal stages and contact dates." />
        <FeatureCard icon="📊" title="Sales Dashboard" desc="Monitor your pipeline value, win rate, and monthly revenue targets in one view." />
        <FeatureCard icon="🧾" title="Proposal Tracker" desc="Track every proposal from sent to signed and link them to contacts and opportunities." />
        <FeatureCard icon="📨" title="Contact Management" desc="Maintain a structured contact database with history, notes, and linked deals." />
      </div>
      <CTABanner bg="bg-orange-50" titleColor="text-orange-900" btnColor="bg-orange-600" title="Close more deals, lose less context." desc="Use our CRM templates to build a sales workflow that works." btnLabel="Use Template →" />
    </SubPageLayout>
  );
}
