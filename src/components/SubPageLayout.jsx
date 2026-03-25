import React from "react";
import { Link } from "react-router-dom";

/**
 * Reusable layout for all sub-pages.
 * Props: badge (string), title (string), subtitle (string), accentColor (tailwind color name, e.g. "indigo"), children
 */
export const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow h-full">
    <div className="text-3xl mb-3">{icon}</div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

export const CTABanner = ({ title, desc, btnLabel = "Start Free →", btnTo = "/start", bg = "bg-indigo-50", titleColor = "text-indigo-900", btnColor = "bg-indigo-600" }) => (
  <div className={`mt-12 ${bg} rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6`}>
    <div className="flex-1">
      <h3 className={`text-2xl font-bold ${titleColor} mb-2`}>{title}</h3>
      <p className={`${titleColor} opacity-70 text-sm`}>{desc}</p>
    </div>
    <Link to={btnTo} className="btn-primary px-6 py-3">
      {btnLabel}
    </Link>
  </div>
);

export default function SubPageLayout({ badge, badgeColor = "bg-indigo-100 text-indigo-700", title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {badge && (
          <span className={`inline-block mb-4 px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full ${badgeColor}`}>
            {badge}
          </span>
        )}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
          {title}
        </h1>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl">{subtitle}</p>
        {children}
      </div>
    </div>
  );
}
