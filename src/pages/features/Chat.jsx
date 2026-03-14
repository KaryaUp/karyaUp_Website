import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function Chat() {
  return (
    <SubPageLayout badge="Features" badgeColor="bg-indigo-100 text-indigo-700" title="Chat" subtitle="Real-time messaging built into your workspace. Stay connected without leaving your work.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="💬" title="Channels" desc="Create topic-based channels for teams, projects, or any discussion group." />
        <FeatureCard icon="📌" title="Pinned Messages" desc="Pin important announcements or links to channels so they're always easy to find." />
        <FeatureCard icon="🔍" title="Message Search" desc="Search across all channels and conversations to find any message instantly." />
        <FeatureCard icon="📎" title="File Sharing" desc="Drop files, images, and documents directly into conversations without leaving the chat." />
        <FeatureCard icon="🧵" title="Threaded Replies" desc="Reply in threads to keep discussions organized without cluttering the main channel." />
        <FeatureCard icon="👀" title="Read Receipts" desc="Know when your message has been seen by the recipient for important communications." />
      </div>
      <CTABanner bg="bg-indigo-50" titleColor="text-indigo-900" btnColor="bg-indigo-600" title="Communicate where you work." desc="Chat is built right into KaryaUp so conversations stay connected to tasks." />
    </SubPageLayout>
  );
}
