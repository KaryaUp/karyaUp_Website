import { useState, useEffect } from "react";
import {
  LayoutGrid,
  Notebook,
  CheckSquare,
  MessageCircle,
  Kanban,
  Brain,
  CalendarDays,
  Clock,
  IndianRupee,
  Bot,
  Users,
  LineChart,
  Target,
} from "lucide-react";

import featureDashboard from "../assets/dashboard1.jpeg";
import featureDocs from "../assets/work_analysis.jpeg";
import featureSprints from "../assets/Task.jpeg";
import featureChat from "../assets/Team.jpeg";
import featureGantt from "../assets/projects.jpeg";
import featureAnalysis from "../assets/work_analysis.jpeg";
import featureCalendar from "../assets/calender.jpeg";
import featureTime from "../assets/attendance.jpeg";
import featureSalary from "../assets/salary.jpeg";
import featureLeads from "../assets/Task.jpeg";
import featureIntegration from "../assets/agent.png";
import featureClients from "../assets/Team.jpeg";
import featureProfit from "../assets/salary.jpeg";

const features = [
  { id: "dashboard", label: "Dashboard", icon: LayoutGrid, image: featureDashboard },
  { id: "docs", label: "Docs", icon: Notebook, image: featureDocs },
  { id: "sprints", label: "Sprints", icon: CheckSquare, image: featureSprints },
  { id: "chat", label: "Chat", icon: MessageCircle, image: featureChat },
  { id: "gantt", label: "Gantt", icon: Kanban, image: featureGantt },
  { id: "analysis", label: "Work Analysis", icon: Brain, image: featureAnalysis },
  { id: "calendar", label: "Calendar", icon: CalendarDays, image: featureCalendar },
  { id: "attendance", label: "Attendance", icon: Clock, image: featureTime },
  { id: "salary", label: "Salary", icon: IndianRupee, image: featureSalary },
  { id: "leads", label: "Leads", icon: Target, image: featureLeads },
  { id: "integration", label: "Integration", icon: Bot, image: featureIntegration },
  { id: "clients", label: "Clients", icon: Users, image: featureClients },
  { id: "profit", label: "Profit", icon: LineChart, image: featureProfit },
];

const FeatureShowcase = () => {
  const [activeFeature, setActiveFeature] = useState("dashboard");
  const [opacity, setOpacity] = useState(1);
  const [currentImage, setCurrentImage] = useState(
    features.find((f) => f.id === "dashboard").image,
  );

  const activeData = features.find((f) => f.id === activeFeature);

  useEffect(() => {
    setOpacity(0);
    const timer = setTimeout(() => {
      if (activeData) {
        setCurrentImage(activeData.image);
      }
      setOpacity(1);
    }, 300);
    return () => clearTimeout(timer);
  }, [activeFeature, activeData]);

  return (
    <div className="w-full h-screen p-4 md:p-8 max-w-[1700px] mx-auto flex items-center justify-center bg-[#F9FAFC]">
      {/* outer spacing */}
      <div className="flex w-full h-[100%] max-h-[90vh] rounded-2xl overflow-hidden">
        {/* Sidebar */}
        <nav className="flex flex-col items-center py-4 bg-[#7e22ce] w-16 shrink-0 overflow-y-auto overflow-x-hidden no-scrollbar relative z-30">
          {features.map((feature) => {
            const isActive = activeFeature === feature.id;
            const Icon = feature.icon;

            return (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                title={feature.label}
                className={`group relative flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 shrink-0 ${isActive
                  ? "bg-white/20"
                  : "hover:bg-white/10"
                  }`}
              >
                <div className="flex items-center justify-center w-8 h-8 pointer-events-none">
                  <Icon className="h-4.5 w-4.5 text-white stroke-[1.5] group-hover:animate-stroke-draw" />
                </div>

                {/* Tooltip (Pinbar) that breaks out of the button */}
                <div
                  className="absolute left-[50px] px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 visibility-hidden group-hover:opacity-100 group-hover:visibility-visible transition-all duration-200 z-[9999] pointer-events-none drop-shadow-md"
                  style={{ backgroundColor: "#000", color: "#fff" }}
                >
                  {feature.label}
                  {/* Tooltip triangle pointer */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 left-[-4px] w-0 h-0 border-y-[4px] border-y-transparent border-r-[4px]"
                    style={{ borderRightColor: "#000" }}
                  ></div>
                </div>
              </button>
            );
          })}
        </nav>

        {/* Image Section */}
        <div className="flex-1 overflow-hidden bg-slate-50 grow flex items-center justify-center p-2">
          <img
            src={currentImage}
            alt={activeData.label}
            className="w-full h-full object-contain transition-opacity duration-300"
            style={{ opacity }}
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureShowcase;
