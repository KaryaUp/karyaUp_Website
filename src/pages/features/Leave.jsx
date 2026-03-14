import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function Leave() {
  return (
    <SubPageLayout badge="Management" badgeColor="bg-amber-100 text-amber-700" title="Leave Management" subtitle="Streamline leave requests, approvals, and balances so HR spends less time on admin.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="🏖️" title="Leave Requests" desc="Employees submit leave requests in seconds. Managers approve or decline from a single inbox." />
        <FeatureCard icon="📊" title="Leave Balances" desc="Every employee can see their remaining leave balance by type — annual, sick, maternity, etc." />
        <FeatureCard icon="🗓️" title="Team Calendar" desc="See all approved leaves on a shared calendar so teams plan coverage effectively." />
        <FeatureCard icon="⚙️" title="Policy Configuration" desc="Define custom leave policies by role, department, or seniority level including carry-forward rules." />
        <FeatureCard icon="🔔" title="Approval Workflows" desc="Route leave requests through single or multi-level approval chains based on your hierarchy." />
        <FeatureCard icon="📤" title="Leave Reports" desc="Generate reports on leave utilization, patterns, and department-level absence rates." />
      </div>
      <CTABanner bg="bg-amber-50" titleColor="text-amber-900" btnColor="bg-amber-500" title="Leave management without spreadsheets." desc="Automate the entire leave lifecycle from request to approval." />
    </SubPageLayout>
  );
}
