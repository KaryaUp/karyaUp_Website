import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function CalendarPage() {
  return (
    <SubPageLayout badge="Features" badgeColor="bg-pink-100 text-pink-700" title="Calendar" subtitle="A unified calendar that brings together tasks, events, meetings, and deadlines in one view.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="📅" title="Task Calendar" desc="See all tasks with due dates displayed on a monthly or weekly calendar view." />
        <FeatureCard icon="🤝" title="Shared Calendars" desc="Share project or team calendars so everyone can plan with full visibility of events and deadlines." />
        <FeatureCard icon="🔄" title="Google Sync" desc="Two-way sync with Google Calendar so events in KaryaUp appear in your personal calendar." />
        <FeatureCard icon="📆" title="Event Scheduling" desc="Create meetings, calls, and events with invites, locations, and agenda notes." />
        <FeatureCard icon="🌍" title="Multi-timezone" desc="View calendars in your local time zone while scheduling across globally distributed teams." />
        <FeatureCard icon="🔔" title="Reminders" desc="Set smart reminders for tasks and events so you're always prepared for what's next." />
      </div>
      <CTABanner bg="bg-pink-50" titleColor="text-pink-900" btnColor="bg-pink-600" title="Never miss a deadline again." desc="One calendar for all your tasks, events, and team availabilities." />
    </SubPageLayout>
  );
}
