import React from "react";
import SubPageLayout, { FeatureCard, CTABanner } from "../../components/SubPageLayout";

export default function Education() {
  return (
    <SubPageLayout badge="Solutions / Companies" badgeColor="bg-yellow-100 text-yellow-700" title="KaryaUp for Education" subtitle="Empower educators, administrators, and students with organized workflows and transparent communication.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
        <FeatureCard icon="🎓" title="Course Management" desc="Organize course materials, assignment deadlines, and grading tasks in one structured workspace." />
        <FeatureCard icon="📚" title="Curriculum Planning" desc="Plan and track curriculum development across departments with collaborative workflows." />
        <FeatureCard icon="👩‍🏫" title="Faculty Collaboration" desc="Enable faculty to share resources, coordinate events, and manage departmental tasks together." />
        <FeatureCard icon="📅" title="Academic Calendar" desc="Sync all academic events, exam schedules, and submission deadlines to a shared calendar." />
        <FeatureCard icon="📊" title="Enrollment Dashboards" desc="Track enrollment metrics, program completions, and student progress at a glance." />
        <FeatureCard icon="💸" title="Education Pricing" desc="Significant discounts for accredited educational institutions — contact us to apply." />
      </div>
      <CTABanner bg="bg-yellow-50" titleColor="text-yellow-900" btnColor="bg-yellow-600" title="Organized education, better outcomes." desc="Get KaryaUp for your institution with an education discount." btnLabel="Learn More →" />
    </SubPageLayout>
  );
}
