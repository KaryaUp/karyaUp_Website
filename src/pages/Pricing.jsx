import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Check, X, HelpCircle, ArrowRight, Zap, 
  Shield, Star, Rocket, Globe, Minus, Plus,
  Sun, Moon, ChevronDown, Feather, Trophy, Briefcase
} from "lucide-react";

const plans = [
  {
    name: "Free",
    description: "Perfect for individuals and small side projects.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: ["5 Projects", "100MB Storage", "Basic Analytics", "Community Support", "Email Notifications"],
    notIncluded: ["Advanced Security", "Custom Domain", "Priority Support", "Team Collaboration"],
    buttonText: "Start for Free",
    color: "brand"
  },
  {
    name: "Basic",
    description: "Best for growing teams needing more control.",
    monthlyPrice: 19,
    yearlyPrice: 15,
    features: ["Unlimited Projects", "10GB Storage", "Advanced Analytics", "Email Support", "Team Collaboration", "API Access"],
    notIncluded: ["Advanced Security", "Custom Domain", "Priority Support"],
    buttonText: "Start Basic Trial",
    color: "brand",
    popular: true
  },
  {
    name: "Pro",
    description: "Advanced features for professional organizations.",
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: ["Everything in Basic", "50GB Storage", "Custom Domain", "Priority Support", "Advanced Security", "Admin Controls"],
    notIncluded: ["Dedicated Manager"],
    buttonText: "Upgrade to Pro",
    color: "brand"
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large-scale enterprises.",
    monthlyPrice: 99,
    yearlyPrice: 79,
    features: ["Everything in Pro", "Unlimited Storage", "Dedicated Manager", "SAML SSO", "Custom Contracts", "24/7 Phone Support"],
    notIncluded: [],
    buttonText: "Contact Sales",
    color: "brand"
  }
];

const comparisons = [
  { category: "Usage & Limits", items: [
    { name: "Tasks", free: "Unlimited", basic: "Unlimited", pro: "Unlimited", enterprise: "Unlimited" },
    { name: "Spaces", free: "5 Spaces", basic: "Unlimited", pro: "Unlimited", enterprise: "Unlimited" },
    { name: "Lists/Space", free: "40", basic: "200", pro: "400", enterprise: "Unlimited" },
    { name: "Folders/Space", free: "100", basic: "200", pro: "400", enterprise: "Unlimited" },
    { name: "Storage", free: "100MB", basic: "Unlimited", pro: "Unlimited", enterprise: "Unlimited" },
  ]},
  { category: "Views & Collaboration", items: [
    { name: "Custom Views", free: "Unlimited", basic: "Unlimited", pro: "Unlimited", enterprise: "Unlimited" },
    { name: "Mind Maps", free: false, basic: true, pro: true, enterprise: true },
    { name: "Timeline View", free: false, basic: false, pro: true, enterprise: true },
    { name: "Gantt Charts", free: false, basic: true, pro: true, enterprise: true },
    { name: "Whiteboards", free: "3 Boards", basic: "Unlimited", pro: "Unlimited", enterprise: "Unlimited" },
  ]},
  { category: "Reporting & Automation", items: [
    { name: "Automations", free: "100/mo", basic: "1,000/mo", pro: "10,000/mo", enterprise: "Unlimited" },
    { name: "Dashboards", free: false, basic: true, pro: true, enterprise: true },
    { name: "Advanced Reporting", free: false, basic: false, pro: true, enterprise: true },
    { name: "Goals", free: false, basic: true, pro: true, enterprise: true },
    { name: "Portfolio", free: false, basic: false, pro: true, enterprise: true },
  ]},
  { category: "Admin & Security", items: [
    { name: "Custom Fields", free: "100", basic: "Unlimited", pro: "Unlimited", enterprise: "Unlimited" },
    { name: "Sharing Permissions", free: false, basic: true, pro: true, enterprise: true },
    { name: "SAML SSO", free: false, basic: false, pro: false, enterprise: true },
    { name: "Audit Logs", free: false, basic: false, pro: false, enterprise: true },
    { name: "White Labeling", free: false, basic: false, pro: false, enterprise: true },
  ]}
];

const faqs = [
  {
    question: "Can I change plans at any time?",
    answer: "Yes! You can upgrade or downgrade your plan at any time from your settings. Changes are pro-rated."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Absolutely. All paid plans come with a 14-day free trial. No credit card required to start."
  },
  {
    question: "What happens if I exceed my storage limit?",
    answer: "We'll notify you when you reach 80% and 100% of your limit. You can easily upgrade to the next tier."
  },
  {
    question: "Do you offer discounts for non-profits?",
    answer: "Yes, we have special pricing for registered non-profit organizations and educational institutions."
  }
];

const colorMap = {
  brand: {
    primary: "#7e22ce",
    surface: "#F9FAFC",
    light: "#f3f0ff", // Slightly more neutral light shade
    border: "#d1d5db",
    shadow: "rgba(126, 34, 206, 0.2)"
  }
};

const DrawingIcon = ({ icon: IconName, size = 20, className }) => {
  const variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 1.5,
        ease: "easeInOut",
      }
    }
  };

  const iconPaths = {
    Feather: (
      <>
        <motion.path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" variants={variants} />
        <motion.line x1="16" y1="8" x2="2" y2="22" variants={variants} />
        <motion.line x1="17.5" y1="15" x2="9" y2="15" variants={variants} />
      </>
    ),
    Zap: (
      <motion.polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" variants={variants} />
    ),
    Trophy: (
      <>
        <motion.path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" variants={variants} />
        <motion.path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" variants={variants} />
        <motion.path d="M4 22h16" variants={variants} />
        <motion.path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" variants={variants} />
        <motion.path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" variants={variants} />
        <motion.path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" variants={variants} />
      </>
    ),
    Briefcase: (
      <>
        <motion.rect width="20" height="14" x="2" y="7" rx="2" ry="2" variants={variants} />
        <motion.path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" variants={variants} />
      </>
    )
  };

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {iconPaths[IconName]}
    </motion.svg>
  );
};

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly"); // "monthly" or "yearly"
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleBilling = () => {
    setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly");
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-purple-100 italic-none relative overflow-visible">
      
      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Large Decorative Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-slate-100/30 select-none tracking-tighter opacity-70">
          PRICING
        </div>

        {/* Animated Blobs */}
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-100 rounded-full blur-[120px] opacity-30"
        />
        <motion.div 
          animate={{ x: [0, -150, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-100 rounded-full blur-[150px] opacity-30"
        />
        <motion.div 
          animate={{ x: [0, 70, 0], y: [0, 120, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] bg-indigo-50 rounded-full blur-[100px] opacity-20"
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter"
            >
              Plans for <br /> 
              every <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">stage.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 mb-6 leading-relaxed max-w-2xl mx-auto font-medium"
            >
              From individual projects to enterprise-scale operations, 
              we have a plan tailored for your growth.
            </motion.p>

            {/* Billing Toggle (Premium Sliding Toggle) */}
            <div className="flex items-center justify-center mb-8">
              <div className="relative bg-slate-100 p-1.5 rounded-2xl flex items-center gap-1 shadow-[inset_0_2px_4px_rgba(59,42,90,0.1),0_15px_30px_-5px_rgba(59,42,90,0.15)] border border-slate-200/50">
                <motion.div 
                  layoutId="billing-bg"
                  animate={{ x: billingCycle === 'monthly' ? 0 : 124 }}
                  className="absolute h-[calc(100%-12px)] w-[120px] bg-[#7e22ce] rounded-xl shadow-md border border-white/10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
                <button 
                  onClick={() => setBillingCycle('monthly')}
                  className={`relative z-10 w-[120px] py-2.5 rounded-xl text-xs font-black transition-colors ${
                    billingCycle === 'monthly' ? 'text-white' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  Monthly
                </button>
                <button 
                  onClick={() => setBillingCycle('yearly')}
                  className={`relative z-10 w-[120px] py-2.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-2 ${
                    billingCycle === 'yearly' ? 'text-white' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  Yearly
                  <span className={`text-[10px] px-2 py-0.5 rounded-full shadow-sm transition-colors ${
                    billingCycle === 'yearly' ? 'bg-white text-[#7e22ce]' : 'bg-green-500 text-white'
                  }`}>-20%</span>
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Cards (Glassmorphism) */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {plans.map((plan, idx) => {
              const theme = colorMap.brand; // Use uniform brand theme for branding elements
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    y: -30, 
                    backgroundColor: "rgba(241, 245, 249, 0.9)", 
                  }}
                  transition={{ 
                    layout: { duration: 0.3 },
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    mass: 0.8
                  }}
                  style={{ backgroundColor: theme.surface }}
                  className="group relative cursor-pointer rounded-[2.5rem] p-10 border transition-all duration-500 flex flex-col border-white hover:border-slate-200 shadow-[0_25px_50px_-12px_rgba(59,42,90,0.2)] hover:shadow-[0_50px_100px_-20px_rgba(59,42,90,0.35)] will-change-transform"
                >
                  <motion.div
                    className="absolute inset-0 rounded-[2.5rem] pointer-events-none border-2 border-transparent group-hover:border-purple-200/50 transition-colors duration-500"
                  />
                  {plan.popular && (
                    <div className="absolute top-10 right-[-1px] z-20">
                      <div 
                        style={{ backgroundColor: theme.primary, boxShadow: `0 4px 12px ${theme.shadow}` }}
                        className="text-[9px] font-black uppercase text-white px-4 py-2 rounded-l-full flex items-center gap-2 border-y border-l border-white/20"
                      >
                        <Star size={10} className="fill-white" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="relative z-10 flex flex-col flex-grow">
                    <div className="mb-10">
                      <h3 className="text-2xl font-black mb-3 text-slate-900">{plan.name}</h3>
                      <p className="text-sm font-medium leading-relaxed mb-8 text-slate-500">{plan.description}</p>
                      
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-black text-slate-900">
                          ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                        </span>
                        <span className="text-lg font-bold text-slate-400">/mo</span>
                      </div>
                    </div>

                    <div className="space-y-5 mb-12 flex-grow">
                      {plan.features.map(feature => (
                        <div key={feature} className="flex items-center gap-4">
                          <div 
                            className="w-5 h-5 rounded-full flex items-center justify-center bg-slate-100 transition-colors group-hover:bg-slate-200 group-hover:text-[#7e22ce]"
                            style={{ color: theme.primary }}
                          >
                            <Check size={12} strokeWidth={4} />
                          </div>
                          <span className="text-sm font-bold text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button 
                      style={{ backgroundColor: theme.primary, color: 'white', boxShadow: `0 10px 20px -5px ${theme.shadow}` }}
                      className="w-full py-3 rounded-xl font-black text-[15px] hover:opacity-90 hover:scale-[0.98] transition-all flex items-center justify-center gap-2"
                    >
                      {plan.buttonText}
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Comparison Section (Clean Reference-Based Table) */}
        <section className="pt-32 pb-16 px-4 relative overflow-visible">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Compare <span className="text-primary italic">Plans.</span></h2>
              <p className="text-slate-500 text-lg font-medium max-w-xl mx-auto leading-relaxed">Everything you need to know about our plans, laid out for complete transparency.</p>
            </motion.div>

            <div className="bg-white rounded-[3rem] border border-slate-100 shadow-[0_40px_80px_-20px_rgba(59,42,90,0.18)] relative overflow-visible">
              <div className="overflow-visible">
                <table className="w-full text-left border-collapse min-w-[1000px]">
                  <thead className="sticky top-0 z-[60]">
                    <tr className="bg-white border-b border-slate-200 shadow-sm">
                      <th className="py-6 px-8 w-1/4 bg-white rounded-tl-[3rem]" />
                      {plans.map((plan, idx) => {
                        const theme = colorMap.brand; // Use uniform brand theme for all table buttons
                        return (
                          <th key={plan.name} className={`py-6 px-6 text-center bg-white ${idx === plans.length - 1 ? 'rounded-tr-[3rem]' : ''}`}>
                            <div className="flex flex-col items-center gap-3">
                              <div className="text-base font-black text-slate-900">{plan.name}</div>
                              <div className="text-[11px] font-bold text-slate-400">
                                {plan.name === 'Enterprise' ? 'Contact us' : `$${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice} / mo`}
                              </div>
                              <button 
                                style={{ backgroundColor: theme.primary, color: 'white', boxShadow: `0 4px 12px ${theme.shadow}` }}
                                className="mt-2 px-5 py-2 rounded-lg text-xs font-black transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                              >
                                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                              </button>
                            </div>
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisons.map((cat) => (
                      <React.Fragment key={cat.category}>
                        <tr>
                          <td colSpan="5" className="py-6 px-10 bg-slate-50/30">
                            <span className="text-lg font-black text-[#7e22ce] uppercase tracking-tight">{cat.category}</span>
                          </td>
                        </tr>
                        {cat.items.map((item) => (
                          <tr key={item.name} className="border-b border-slate-200 group hover:bg-slate-50 transition-colors">
                            <td className="py-4 px-10">
                              <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors">{item.name}</span>
                            </td>
                            {plans.map((plan) => (
                              <td key={`${plan.name}-${item.name}`} className="py-4 px-6 text-center">
                                <div className="flex justify-center">
                                  {(() => {
                                    const val = item[plan.name.toLowerCase()];
                                    if (typeof val === 'boolean') {
                                      return val ? (
                                        <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                                          <Check size={14} strokeWidth={3} />
                                        </div>
                                      ) : (
                                        <Minus className="text-slate-100" size={16} />
                                      );
                                    }
                                    return <span className="text-sm font-black text-slate-900">{val}</span>;
                                  })()}
                                </div>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pt-16 pb-32 px-4 bg-slate-50 relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 font-display tracking-tight">Got <span className="text-primary italic">Questions?</span></h2>
              <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto leading-relaxed">Everything you need to know about our plans and features. Can't find what you're looking for?</p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group rounded-[2rem] border transition-all duration-300 overflow-hidden ${
                    activeFaq === index 
                      ? 'bg-white border-primary/20 shadow-[0_20px_40px_-15px_rgba(59,42,90,0.15)]' 
                      : 'bg-white/50 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className={`text-xl font-bold font-display transition-colors ${
                      activeFaq === index ? 'text-primary' : 'text-slate-900 group-hover:text-primary'
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeFaq === index ? 'bg-primary text-white rotate-180' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                    }`}>
                      <ChevronDown size={20} className={`transform transition-transform duration-300 ${activeFaq === index ? 'scale-110' : ''}`} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6">
                          <div className="h-px w-full bg-slate-100 mb-4" />
                          <p className="text-slate-600 font-medium leading-relaxed text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-50/50 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />
        </section>



        {/* Premium CTA with Mesh Gradient & Texture */}
        <section className="pt-12 pb-32 px-4 relative">
          <motion.div 
            whileHover={{ y: -10 }}
            className="max-w-screen-xl mx-auto rounded-[4.5rem] p-16 md:p-24 relative overflow-hidden text-center shadow-[0_50px_120px_-20px_rgba(126,34,206,0.25)] border border-white/10 group"
          >
            {/* Mesh Gradient Background */}
            <div className="absolute inset-0 bg-[#7e22ce]" />
            
            {/* Animated Blobs for Mesh Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
              <motion.div 
                animate={{ 
                  x: [0, 100, -50], 
                  y: [0, -50, 80],
                  scale: [1, 1.2, 0.9]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-30%] left-[-20%] w-[100%] h-[100%] bg-indigo-600 rounded-full blur-[120px]" 
              />
              <motion.div 
                animate={{ 
                  x: [0, -80, 120], 
                  y: [0, 100, -40],
                  scale: [1, 1.3, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-40%] right-[-10%] w-[120%] h-[120%] bg-rose-500 rounded-full blur-[140px]" 
              />
              <motion.div 
                animate={{ 
                  x: [0, 50, -30], 
                  y: [0, 80, 50],
                  scale: [1, 1.1, 1.2]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute top-[20%] right-[10%] w-[60%] h-[60%] bg-pink-400 rounded-full blur-[100px]" 
              />
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] left-[30%] w-[40%] h-[40%] bg-blue-400 rounded-full blur-[90px] opacity-40" 
              />
            </div>

            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-overlay">
              <svg className="h-full w-full">
                <filter id="noiseFilter">
                  <feTurbulence 
                    type="fractalNoise" 
                    baseFrequency="0.65" 
                    numOctaves="3" 
                    stitchTiles="stitch" 
                  />
                  <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
              </svg>
            </div>

            {/* Glass Inner Glow */}
            <div className="absolute inset-0 rounded-[4.5rem] border border-white/20 pointer-events-none shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)]" />

            <div className="relative z-10">
              <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                Transform your <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70">workflow</span> today.
              </h2>
              <p className="text-white/80 text-xl md:text-2xl font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
                Join thousands of high-performing teams who have already leveled up 
                their productivity with KaryaUp. From automated payroll to AI-driven project insights, 
                everything you need is just one click away.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="px-10 py-5 bg-white text-[#7e22ce] rounded-[2rem] font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-xl hover:shadow-2xl">
                  Get Started for Free
                </button>
                <button className="px-10 py-5 bg-white/10 backdrop-blur-md text-white rounded-[2rem] font-black text-lg hover:bg-white/20 transition-all border border-white/20">
                  Contact Sales
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
