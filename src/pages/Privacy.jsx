import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const PrivacyPolicyContent = [
  {
    title: "Privacy Policy – KaryaUp",
    intro: "At KaryaUp (“we”, “our”, “us”), we are committed to protecting your personal data and ensuring transparency in how your information is handled.",
    sections: [
      {
        number: "1.",
        title: "Information We Collect",
        content: "We may collect:\n\n• Name, email, phone number\n• Account credentials\n• Usage data (IP, device, browser)\n• Payment details (via third-party providers)"
      },
      {
        number: "2.",
        title: "How We Use Your Data",
        content: "We use your data to:\n\n• Provide and improve services\n• Manage accounts and tasks\n• Send updates and notifications\n• Ensure security and prevent fraud"
      },
      {
        number: "3.",
        title: "Legal Basis",
        content: "We process data based on:\n\n• Your explicit consent\n• Contractual necessity\n• Legal compliance"
      },
      {
        number: "4.",
        title: "Data Sharing",
        content: "We do NOT sell your data.\nWe may share with:\n\n• Payment providers\n• Cloud hosting partners\n• Legal authorities if required"
      },
      {
        number: "5.",
        title: "User Rights",
        content: "You have the right to:\n\n• Access your data\n• Correct your data\n• Delete your data\n• Withdraw consent anytime"
      },
      {
        number: "6.",
        title: "Data Security",
        content: "We implement industry-standard security practices to protect your data."
      },
      {
        number: "7.",
        title: "Data Retention",
        content: "We retain data only as long as necessary for service delivery or legal compliance."
      },
      {
        number: "8.",
        title: "International Transfers",
        content: "Your data may be processed globally with appropriate safeguards."
      },
      {
        number: "9.",
        title: "Contact",
        content: "📧 support@karyaup.com"
      }
    ]
  },
  {
    title: "Terms & Conditions",
    intro: "By using KaryaUp, you agree to the following:",
    sections: [
      {
        number: "1.",
        title: "Use of Service",
        content: "You agree to use the platform only for lawful purposes."
      },
      {
        number: "2.",
        title: "Account Responsibility",
        content: "You are responsible for:\n\n• Your login credentials\n• All activity under your account"
      },
      {
        number: "3.",
        title: "Subscription & Payments",
        content: "• Paid plans are billed in advance\n• No refunds unless stated"
      },
      {
        number: "4.",
        title: "Intellectual Property",
        content: "All platform content belongs to KaryaUp."
      },
      {
        number: "5.",
        title: "Prohibited Activities",
        content: "You must NOT:\n\n• Upload harmful code\n• Violate laws\n• Misuse platform data"
      },
      {
        number: "6.",
        title: "Termination",
        content: "We can suspend accounts for violations."
      },
      {
        number: "7.",
        title: "Limitation of Liability",
        content: "We are not liable for:\n\n• Data loss\n• Service downtime\n• Third-party issues"
      },
      {
        number: "8.",
        title: "Governing Law",
        content: "This agreement is governed by Indian law."
      }
    ]
  },
  {
    title: "Disclaimer",
    intro: "KaryaUp provides productivity and workflow management tools.",
    sections: [
      {
        content: "• We do not guarantee specific business outcomes\n• Service is provided \"as is\"\n• We are not responsible for user decisions or data misuse"
      }
    ]
  },
  {
    title: "Cookie Policy",
    intro: "We use cookies to improve user experience.",
    sections: [
      {
        number: "Types of Cookies:",
        content: "• Essential (login, security)\n• Analytics (performance tracking)\n• Marketing (ads, retargeting)"
      },
      {
        number: "Consent:",
        content: "• We only use cookies after your approval.\n• You can:\n  - Accept / Reject cookies\n  - Change preferences anytime"
      }
    ]
  },
  {
    title: "Refund Policy",
    intro: "All subscriptions are non-refundable",
    sections: [
      {
        content: "• Exceptions may be granted case-by-case\n• Cancellation stops future billing"
      }
    ]
  },
  {
    title: "Acceptable Use Policy",
    intro: "You agree NOT to:",
    sections: [
      {
        content: "• Use KaryaUp for illegal activity\n• Upload harmful or abusive content\n• Reverse engineer the software\n• Exploit system vulnerabilities\n\nViolation may result in account termination."
      }
    ]
  },
  {
    title: "Security Policy",
    intro: "(VERY IMPORTANT FOR TRUST)",
    sections: [
      {
        content: "We follow:\n\n• Data encryption\n• Access control\n• Monitoring & logging\n• Secure cloud infrastructure"
      }
    ]
  }
];

export default function PrivacyPolicyPage() {
  const [activeTab, setActiveTab] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-fuchsia-50 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-[#7e22ce]/20 to-fuchsia-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-fuchsia-500/20 to-[#7e22ce]/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#7e22ce]/10 to-fuchsia-500/10 rounded-full blur-3xl animate-ping" />
      </div>

      <div className="relative z-10 pt-28 pb-20 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-clip-text text-transparent mb-6"
            animate={{ 
              backgroundPosition: ["0% center", "-200% center"] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            Legal Documents
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Transparency and trust are at the core of KaryaUp. Review our policies below.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="flex flex-col lg:flex-row gap-4 mb-16 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {PrivacyPolicyContent.map((section, index) => (
            <motion.button
              key={index}
              variants={itemVariants}
              className={`flex-1 px-8 py-4 rounded-2xl font-bold text-lg border-4 transition-all duration-300 ${
                activeTab === index
                  ? "bg-gradient-to-r from-[#7e22ce] to-fuchsia-500 text-white shadow-2xl shadow-purple-500/25 border-transparent"
                  : "bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-white hover:shadow-xl hover:-translate-y-1 border-slate-200/50"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {section.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Active Content */}
        <AnimatePresence mode="wait">
          <motion.section
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, scale: 0.95 }}
            variants={sectionVariants}
            className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-12 lg:p-20 max-w-5xl mx-auto"
          >
            {/* Intro */}
            <div className="text-center mb-12 lg:mb-20">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                {PrivacyPolicyContent[activeTab].title}
              </h2>
              {PrivacyPolicyContent[activeTab].intro && (
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  {PrivacyPolicyContent[activeTab].intro}
                </p>
              )}
            </div>

            {/* Sections */}
            <div className="space-y-12">
              {PrivacyPolicyContent[activeTab].sections.map((sec, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-6 mb-6 p-6 bg-gradient-to-r from-slate-50 to-purple-50/30 rounded-2xl border-l-8 border-[#7e22ce] hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#7e22ce] to-fuchsia-500 rounded-2xl flex items-center justify-center font-bold text-white text-xl">
                      {sec.number || idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#7e22ce] transition-colors">
                        {sec.title || "Details"}
                      </h3>
                      <div className="text-lg text-slate-700 leading-relaxed whitespace-pre-line">
                        {sec.content}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </AnimatePresence>

        {/* Back to Home Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#7e22ce] to-fuchsia-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
          >
            ← Back to KaryaUp
          </Link>
        </motion.div>
      </div>
    </div>
  );
}