import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function Attendance() {
  return (
    <SubPageLayout badge="Management" badgeColor="bg-emerald-100 text-emerald-700" title="Attendance" subtitle="Automate attendance tracking, monitor work hours, and ensure accurate records for every employee.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="🕐" title="Clock In / Clock Out" desc="Employees clock in and out digitally from web or mobile. Timestamps are recorded automatically." />
        <FeatureCard icon="📅" title="Attendance Calendar" desc="View attendance history on a monthly calendar with color-coded present, absent, and leave days." />
        <FeatureCard icon="🌐" title="Remote Check-in" desc="Support remote teams with IP-based or location-based attendance verification." />
        <FeatureCard icon="⚠️" title="Late & Absent Alerts" desc="Get automated alerts when employees arrive late or miss a day without prior approval." />
        <FeatureCard icon="📊" title="Attendance Reports" desc="Export monthly attendance reports by department, team, or individual employee." />
        <FeatureCard icon="🔗" title="Payroll Integration" desc="Attendance data flows directly into payroll so hours are never miscounted." />
      </div>
      <CTABanner bg="bg-emerald-50" titleColor="text-emerald-900" btnColor="bg-emerald-600" title="Accurate records, automatically." desc="Stop managing attendance manually — let KaryaUp handle it." />
    </SubPageLayout>
  );
}
