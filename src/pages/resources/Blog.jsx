import React from "react";
import SubPageLayout, { FeatureCard } from "../../components/SubPageLayout";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <SubPageLayout badge="Resources" badgeColor="bg-violet-100 text-violet-700" title="KaryaUp Blog" subtitle="Practical articles on productivity, team management, and getting the most out of KaryaUp.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
          <span className="text-xs font-bold bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">Productivity</span>
          <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">10 Ways to Cut Meeting Time in Half</h3>
          <p className="text-sm text-gray-500">Discover how the most efficient teams run fewer, shorter, more effective meetings.</p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
          <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">Management</span>
          <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">How to Build a Dashboard That Gets Used</h3>
          <p className="text-sm text-gray-500">Most dashboards go unread. Here's how to build one your team checks every day.</p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
          <span className="text-xs font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Time Tracking</span>
          <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">Why Your Team Underestimates Every Project</h3>
          <p className="text-sm text-gray-500">The psychology behind planning fallacy and how to fix it with better data.</p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
          <span className="text-xs font-bold bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full">Collaboration</span>
          <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">Remote Team Communication: The Complete Playbook</h3>
          <p className="text-sm text-gray-500">Tactics from remote-first companies on keeping distributed teams aligned and motivated.</p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
          <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Growth</span>
          <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">How Startups Scale from 5 to 50 with KaryaUp</h3>
          <p className="text-sm text-gray-500">Real workflows from fast-growing startups who scaled without adding management overhead.</p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
          <span className="text-xs font-bold bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">Automations</span>
          <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">5 Automations Every Manager Should Set Up Today</h3>
          <p className="text-sm text-gray-500">Cut repetitive admin work and let your team focus on what actually matters.</p>
        </div>
      </div>
    </SubPageLayout>
  );
}
