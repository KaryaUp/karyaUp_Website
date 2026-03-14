import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function Automations() {
  return (
    <SubPageLayout badge="Features" badgeColor="bg-indigo-100 text-indigo-700" title="Automations" subtitle="Eliminate repetitive work with no-code automation rules that keep your team moving forward.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="⚡" title="Trigger-Based Rules" desc="Create rules that fire when a status changes, a date arrives, or a task is assigned." />
        <FeatureCard icon="🤖" title="No-Code Builder" desc="Build automation workflows with a visual drag-and-drop editor — no developer needed." />
        <FeatureCard icon="📨" title="Auto-Notifications" desc="Automatically notify the right people when key events happen in your workspace." />
        <FeatureCard icon="🔁" title="Recurring Automations" desc="Set schedules — daily, weekly, monthly — for automations that repeat on a cadence." />
        <FeatureCard icon="🔗" title="App Integrations" desc="Connect KaryaUp with Slack, Gmail, and other tools to automate cross-platform workflows." />
        <FeatureCard icon="📊" title="Automation Logs" desc="See a full execution history of every automation run to debug and optimize your rules." />
      </div>
      <CTABanner bg="bg-indigo-50" titleColor="text-indigo-900" btnColor="bg-indigo-600" title="Let the platform do the busy work." desc="Build automations once and reclaim hours every single week." />
    </SubPageLayout>
  );
}
