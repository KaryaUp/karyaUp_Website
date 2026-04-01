import React, { useState, useEffect } from "react";
import FeatureCTA from "../../components/FeatureCTA";
import dashboardImg from "../../assets/dashboard2.webp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "../../components/PageHero";

export default function Agency() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const benefits = [
    {
      title: "Faster Delivery",
      desc: "Streamline workflows with boards, timelines, and automation so your team delivers projects ahead of schedule."
    },
    {
      title: "Client Transparency",
      desc: "Share progress with clients in real-time using dashboards and docs, building trust and stronger relationships."
    },
    {
      title: "Smarter Operations",
      desc: "Connect tasks, goals, and compliance in one place, reducing admin overhead and freeing your team."
    }
  ];

  return (
    <div className="bg-white font-sans min-h-screen pt-28 overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      <PageHero
        pillText="Solutions / Agency"
        titleBlack="Unlock Agency"
        titleGradient="Productivity & Deliver Faster"
        descriptionList={[
          "Manage IT projects, service requests, and governance in one place all connected by AI.",
          "KaryaUp makes it easy to streamline workflows."
        ]}
        tags={["Faster Delivery", "Client Transparency", "Smarter Operations"]}
        imageSrc={dashboardImg}
        imageAlt="Agency Dashboard"
      />

      {/* ================= WHY AGENCIES CHOOSE ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <div className="mb-20">
          <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4">
            Why Agencies<br />
            <motion.span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]" animate={{ backgroundPosition: ["0% center", "-200% center"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
              Choose KaryaUp
            </motion.span>
          </motion.h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">From project delivery to client collaboration, KaryaUp empowers agencies to work smarter.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: isMobile ? 0 : (i === 0 ? "105%" : i === 2 ? "-105%" : "0%"),
                y: 40
              }}
              whileInView={{ opacity: 1, x: "0%", y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i === 1 ? 0 : 0.2, // Smoothed delay sequence
                ease: [0.22, 1, 0.36, 1]
              }}
              className="bg-[#F8F9FA] rounded-[32px] p-8 border border-transparent hover:border-purple-200 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-[#7e22ce] mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ELEVATE WORKFLOWS (Custom Centered Layout) ================= */}
      <section className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto text-center mb-16">

          <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4">
            Elevate Your<br />
            <motion.span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]" animate={{ backgroundPosition: ["0% center", "-200% center"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
              Agency Workflows
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Manage IT projects, service requests, and governance in one place—all connected by AI.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <ul className="space-y-4">
              {[
                "Centralized dashboards for all projects",
                "Automated reporting and compliance tracking",
                "Real-time collaboration with clients"
              ].map((text, idx) => (
                <li key={idx} className="flex items-center gap-4 text-lg text-slate-700 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold">✓</span>
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
          >
            <img src={dashboardImg} alt="Workflow Dashboard" className="w-full h-auto" />
          </motion.div>
        </div>
      </section>

      <FeatureCTA
        title="Tasks that connect to everything you do"
        description="Work Smarter with tasks that can live in your whiteboards, chat, calendar."
        image={dashboardImg}
        imageAlt="KaryaUp dashboard"
        containerClassName="mt-20 mb-10"
      />
    </div>
  );
}