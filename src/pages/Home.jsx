import React from "react";
import Hero from "../components/Hero";
import ScatteredWork from "../components/ScatteredWork";
import FeatureShowcase from "../components/Detail_SS.jsx";
import TrustedBy from "../components/TrustedBy";
import AllInOne from "../components/AllInOne";
import Roles from "../components/Roles";
import TeamSolutions from "../components/TeamSolutions";
import WorkIntelligence from "../components/WorkIntelligence";
import FeatureOverview from "../components/FeatureOverview";
import TeamsSection from "../components/TeamsSection";
import Integrations from "../components/Integrations";
import Management from "../components/Management";
import DataImport from "../components/DataImport";
import FinalCTA from "../components/FinalCTA";

export default function Home() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Hero />
      <div className="[&>section]:!pt-8 [&>section]:!pb-8 sm:[&>section]:!pt-10 sm:[&>section]:!pb-10 lg:[&>section]:!pt-12 lg:[&>section]:!pb-12">
        <TrustedBy />
        <ScatteredWork />
        {/* <FeatureShowcase /> */}
        <AllInOne />
        {/* <Roles /> */}
        <TeamSolutions />
        <WorkIntelligence />
        <FeatureOverview />
        <TeamsSection />
        <Integrations />
        <DataImport />
        <Management />
        <FinalCTA />
      </div>
    </div>
  );
}
