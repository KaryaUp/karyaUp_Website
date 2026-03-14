import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function Tasks() {
  return (
    <SubPageLayout badge="Features" badgeColor="bg-emerald-100 text-emerald-700" title="Tasks" subtitle="Break work into actionable tasks. Assign owners, set priorities, and track every step from start to done.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="✅" title="Subtasks" desc="Break complex work into smaller steps. Nest subtasks under any task for fine-grained tracking." />
        <FeatureCard icon="🏷️" title="Tags & Labels" desc="Categorize tasks by tags for quick filtering and reporting across projects." />
        <FeatureCard icon="⚡" title="Priority Levels" desc="Mark tasks Urgent, High, Normal, or Low to help your team focus on what matters most." />
        <FeatureCard icon="📎" title="Attachments" desc="Add files, images, and links directly to tasks. Keep all context in one place." />
        <FeatureCard icon="🔁" title="Recurring Tasks" desc="Set daily, weekly, or monthly recurrences for tasks that repeat on a schedule." />
        <FeatureCard icon="👁️" title="Custom Views" desc="Switch between list, board, calendar, and timeline views to see tasks the way you prefer." />
      </div>
      <CTABanner bg="bg-emerald-50" titleColor="text-emerald-900" btnColor="bg-emerald-600" title="Work that gets done." desc="Create your first task and start moving work forward today." />
    </SubPageLayout>
  );
}
