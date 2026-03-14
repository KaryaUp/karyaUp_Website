import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function BoardView() {
  return (
    <SubPageLayout badge="Features" badgeColor="bg-blue-100 text-blue-700" title="Board View" subtitle="A visual Kanban board to manage work in stages. Perfect for sprint planning and workflow automation.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="📌" title="Custom Columns" desc="Create columns for any workflow — To Do, In Progress, Review, Done — or define your own stages." />
        <FeatureCard icon="🖱️" title="Drag & Drop" desc="Move tasks between columns instantly. Status updates automatically when a card is moved." />
        <FeatureCard icon="🌈" title="Color-coded Cards" desc="Apply colors by priority, assignee, or tag so you can read the board state at a glance." />
        <FeatureCard icon="⚙️" title="Automation Rules" desc="Trigger automatic actions when a card enters a column — assign it, notify someone, or set a date." />
        <FeatureCard icon="🔢" title="WIP Limits" desc="Set work-in-progress limits per column to prevent bottlenecks and keep flow healthy." />
        <FeatureCard icon="📋" title="Card Details" desc="Click any card to see the full task detail view — comments, attachments, history, and more." />
      </div>
      <CTABanner bg="bg-blue-50" titleColor="text-blue-900" btnColor="bg-blue-600" title="See your workflow clearly." desc="Switch to board view and get instant clarity on every stage of your work." />
    </SubPageLayout>
  );
}
