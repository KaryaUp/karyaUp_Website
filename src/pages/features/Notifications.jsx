import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function Notifications() {
  return (
    <SubPageLayout badge="Features" badgeColor="bg-amber-100 text-amber-700" title="Notifications" subtitle="Smart, context-aware notifications that keep you informed without overwhelming you.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="🔔" title="Real-time Alerts" desc="Get instant notifications when tasks are assigned, updated, or commented on." />
        <FeatureCard icon="🎛️" title="Custom Preferences" desc="Choose which events trigger notifications per workspace, project, and task type." />
        <FeatureCard icon="⏰" title="Deadline Reminders" desc="Receive reminders before tasks are due so nothing falls through the cracks." />
        <FeatureCard icon="📱" title="Push Notifications" desc="Get push alerts on mobile even when the app is closed, so you're always in the loop." />
        <FeatureCard icon="📧" title="Email Digests" desc="Receive a daily or weekly digest summarizing activity rather than individual emails." />
        <FeatureCard icon="🔕" title="Do Not Disturb" desc="Pause all notifications during focus time or outside work hours to protect your attention." />
      </div>
      <CTABanner bg="bg-amber-50" titleColor="text-amber-900" btnColor="bg-amber-500" title="Stay informed, not overwhelmed." desc="Notifications that tell you what matters, when it matters." />
    </SubPageLayout>
  );
}
