import React from "react";
import { motion } from "framer-motion";
import FeatureCTA from "../../components/FeatureCTA";
import dashboardImage from "../../assets/dashboard2.png";
import { Search, LayoutGrid, Folder, CheckSquare, FileText, PenTool, BarChart3, Users } from "lucide-react";

export default function TemplateCRM() {
  const tabs = [
    { name: "All types", icon: <LayoutGrid size={18} /> },
    { name: "Spaces", icon: <LayoutGrid size={18} /> },
    { name: "Folders", icon: <Folder size={18} /> },
    { name: "Tasks", icon: <CheckSquare size={18} /> },
    { name: "Docs", icon: <FileText size={18} /> },
    { name: "Whiteboards", icon: <PenTool size={18} /> },
  ];

  return (
    <section className="w-full bg-white py-10 px-6 lg:px-10">
      {/* Top Row */}
     

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 40, x: -10 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 100,
          delay: 0.1,
        }}
        className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4 drop-shadow-sm"
      >
        <br />
        <motion.span
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
          animate={{
            backgroundPosition: ["0% center", "-200% center"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          Sales & CRM
        </motion.span>
      </motion.h1>
      <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
        Boost your sales process with KaryaUp's Sales & CRM templates. Track
        leads, nurture relationships, and close deals with tools designed for
        sales success.
      </p>

      {/* Tabs Section */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        {/* Tabs */}
        <div className="flex flex-wrap gap-3">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`group relative overflow-hidden flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-300
              hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:border-transparent hover:shadow-md`}
            >
              {/* Glow Effect */}
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 blur-lg opacity-0 group-hover:opacity-40 transition -z-10"></span>
              <span className="transition-transform duration-300 group-hover:scale-110">
                {tab.icon}
              </span>
              {tab.name}
            </button>
          ))}
        </div>

        {/* Right Side Count */}
        <div className="text-gray-500 text-sm font-medium">60 Templates</div>
      </div>

      {/* Manage Leads, Deals, and Contacts */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#333] mb-6">
          Manage Leads, Deals, and Contacts
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Keep your pipeline organized by tracking leads, managing deals, and maintaining contact records in one unified workspace.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Leads */}
          <div className="bg-[#F8F9FA] rounded-2xl p-8 shadow-md hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-bold text-pink-600 mb-3">Leads</h3>
            <p className="text-gray-600">
              Capture and qualify leads efficiently. Never miss an opportunity to grow your business.
            </p>
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&w=800&q=80"
              alt="Leads"
              className="rounded-lg shadow-md mt-4"
            />
          </div>

          {/* Deals */}
          <div className="bg-[#F8F9FA] rounded-2xl p-8 shadow-md hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-bold text-purple-600 mb-3">Deals</h3>
            <p className="text-gray-600">
              Track deal stages, forecast revenue, and close more sales with structured workflows.
            </p>
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&w=800&q=80"
              alt="Deals"
              className="rounded-lg shadow-md mt-4"
            />
          </div>

          {/* Contacts */}
          <div className="bg-[#F8F9FA] rounded-2xl p-8 shadow-md hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-bold text-pink-600 mb-3">Contacts</h3>
            <p className="text-gray-600">
              Maintain detailed contact records, track communication history, and build stronger relationships.
            </p>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&w=800&q=80"
              alt="Contacts"
              className="rounded-lg shadow-md mt-4"
            />
          </div>
        </div>
      </section>
      <FeatureCTA
        title={
          <>
            Tasks that connect to everything you do
          </>
        }
        description="Work smarter with tasks that can live in your whiteboards, chat, calendar — anywhere you work"
        image={dashboardImage}
        imageAlt="KaryaUp dashboard"
        containerClassName="mt-10 mb-20"
        paddingClassName="p-3 lg:p-4 lg:py-6"
        imageClassName="w-full max-w-[940px]"
        imageOuterClassName="relative w-[108%] lg:w-full translate-x-4 lg:translate-x-8"
      />
    </section>

    
  );
}
