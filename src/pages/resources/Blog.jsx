import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Clock, Sparkles, TrendingUp, BookOpen, Users, Send, ChevronLeft, Calendar, Share2, Twitter, Linkedin, Copy, Check, CheckCircle2 } from "lucide-react";
import { FocusIllust, TeamIllust, OpsIllust, LeadIllust, MeetingIllust } from "./BlogIllustrations";
import article1 from "../../assets/work_analysis.jpeg";
import article2 from "../../assets/projects.jpeg";
import article3 from "../../assets/dashboard1.jpeg";
import article4 from "../../assets/calender.jpeg";
import article5 from "../../assets/attendance.jpeg";
import article6 from "../../assets/salary.jpeg";
import article7 from "../../assets/Task.jpeg";
import article8 from "../../assets/Team.jpeg";
import article9 from "../../assets/dashboard.jpeg";
import article10 from "../../assets/work_analysis.jpeg";
import article11 from "../../assets/dashboard1.jpeg";
import article12 from "../../assets/projects.jpeg";
import dashboardMockup from "../../assets/newsletter_illustration_v2.png";

const EASING = [0.2, 0.8, 0.2, 1];

const articles = [
  {
    id: "featured",
    title: "Why Your Team Is Busy But Nothing Is Getting Done",
    excerpt: "Busyness is not progress. Most teams confuse activity with output — and managers let it slide because the calendar looks full. Here's how to tell the difference, and what to actually fix.",
    category: "Team Management",
    author: "Alex Rivers",
    role: "Head of Operations",
    date: "March 25, 2024",
    readTime: "6 min read",
    image: article1,
    illustration: <TeamIllust />,
    hookStat: "73% of tasks on average to-do lists never get done.",
    pullQuote: "A full calendar and an empty sprint are not the same problem — but they have the same root cause.",
    content: `
      <p>Busyness is the ultimate hiding place. It feels like commitment, it looks like hard work, and it sounds like progress. But for most teams, it's just noise.</p>
      <h2>The Paradox of Activity</h2>
      <p>In modern workplaces, we've developed a cult of the 'busy'. We measure success by the density of our calendars and the speed of our Slack replies. However, research consistently shows that there is a diminishing return on hours worked. When teams are "always on," they lose the capacity for deep work—the very thing that drives actual results.</p>
      <blockquote>"A full calendar and an empty sprint are not the same problem — but they have the same root cause."</blockquote>
      <h2>Confusing Motion with Progress</h2>
      <p>Motion is doing things; progress is getting things done. A team can spend forty hours a week in meetings discussing a feature, but if not a single line of code is written, that's motion without progress. Managers often let this slide because intervention feels like micro-management, or worse, because they are caught in the same cycle themselves.</p>
      <h2>What to Actually Fix</h2>
      <p>To break this cycle, leadership must prioritize outcome over output. This means setting clear, singular goals for the week and fiercely protecting the team's time. Stop asking "What did you do today?" and start asking "What did we ship today?"</p>
    `
  },
  {
    id: 1,
    title: "The 3-Task Rule — Why Top Performers Never Write Long To-Do Lists",
    excerpt: "Long task lists feel productive to write and useless to execute. The best performers work differently — and it starts with a number most people think is too small.",
    category: "Productivity",
    author: "Sarah Chen",
    role: "Senior Product Designer",
    date: "March 24, 2024",
    readTime: "4 min read",
    image: article2,
    illustration: <FocusIllust />,
    hookStat: "73% of tasks on average to-do lists never get done.",
    content: `
      <p>The secret to productivity isn't doing more; it's doing less of what doesn't matter. The 3-task rule is about radical prioritization.</p>
      <h2>The Psychology of the To-Do List</h2>
      <p>Most to-do lists are actually "wish lists." They are a dumping ground for every stray thought and obligation we encounter. By the time we look at the list, the sheer volume of tasks triggers a freeze response. We end up doing the easiest tasks first to get the hit of dopamine from crossing them off, while the most important work remains untouched.</p>
      <blockquote>"Focus is a matter of deciding what you are not going to do."</blockquote>
      <h2>Radical Simplification</h2>
      <p>The 3-task rule is simple: before you start your day, identify the three things that, if completed, would make the day a success. Everything else is secondary. This constraint forces you to evaluate the weight of each task. If you have ten things to do, you have to ask: which of these actually move the needle?</p>
      <h2>Executing with Intent</h2>
      <p>Once you have your three, you tackle them in order of importance. This prevents the "productive procrastination" of clearing your inbox before starting a difficult design project. By narrowing your focus, you increase the intensity of your work.</p>
    `
  },
  {
    id: 2,
    title: "Hiring for Culture Fit Is Killing Your Team's Potential",
    excerpt: "Culture fit sounds smart until you realise you've built a room full of the same person. The teams that outperform aren't the ones that agree — they're the ones that argue well.",
    category: "Team Management",
    author: "Marcus Volt",
    role: "Full Stack Lead",
    date: "March 22, 2024",
    readTime: "5 min read",
    image: article3,
    illustration: <TeamIllust />,
    hookStat: "Teams with diverse thinking styles are 35% more likely to hit targets.",
    content: `
      <p>Stop looking for people who fit in. Start looking for people who add something new. Culture add over culture fit.</p>
      <h2>The Echo Chamber Effect</h2>
      <p>When we hire for "culture fit," we are often subconsciously looking for people who remind us of ourselves. This leads to organizational stagnation. If everyone has the same background, the same education, and the same way of thinking, you will never see the blind spots in your strategy until it's too late.</p>
      <blockquote>"Diversity is not just a metric; it's a competitive advantage."</blockquote>
      <h2>Embracing Cognitive Friction</h2>
      <p>The most innovative teams are those where ideas are challenged. This requires "culture add"—hiring people who bring a different perspective, a different set of experiences, or a different problem-solving style. This creates friction, which is uncomfortable but necessary for growth.</p>
      <h2>How to Change Your Process</h2>
      <p>Redefine your culture not as a set of personality traits, but as a set of values. Instead of asking "Would I grab a beer with this person?", ask "What part of our culture is currently missing that this person can provide?"</p>
    `
  },
  {
    id: 3,
    title: "The Hidden Cost of a Bad Leave Policy — And How to Fix It in a Day",
    excerpt: "Most companies don't have a leave problem. They have a leave policy problem. Here's what a broken system actually costs you — in time, trust, and talent.",
    category: "HR & Ops",
    author: "Priya Sharma",
    role: "HR Strategist",
    date: "March 20, 2024",
    readTime: "5 min read",
    image: article4,
    illustration: <OpsIllust />,
    hookStat: "1 in 3 employees cite poor leave management as a reason to quit.",
    content: `
      <p>A broken leave policy is a silent killer of morale. If your team is afraid to take time off, you've already lost them.</p>
      <h2>The Fear of Stepping Away</h2>
      <p>Many companies offer "Unlimited PTO" only to find that employees take less time off than they did under a traditional accrual system. Why? Because without clear guidelines, taking leave feels like a sign of weakness or a lack of commitment. This leads to burnout and, eventually, a mass exodus of your best talent.</p>
      <blockquote>"A policy isn't what's written in the handbook; it's how people feel when they use it."</blockquote>
      <h2>The Financial Impact of Burnout</h2>
      <p>High turnover is expensive. Replacing a senior employee can cost up to twice their annual salary in recruitment, onboarding, and lost productivity. A bad leave policy is effectively a hidden tax on your business operations.</p>
      <h2>The 24-Hour Fix</h2>
      <p>You can fix this today by implementing a "Minimum Leave Requirement." Tell your team they are required to take at least 15 days off per year. When people see that leadership values rest, they will feel safe enough to take it themselves.</p>
    `
  },
  {
    id: 4,
    title: "Stop Motivating Your Team. Start Removing What Demotivates Them.",
    excerpt: "Motivation is not a manager's job. Removing friction is. The best leaders don't inspire — they clear the path and get out of the way.",
    category: "Leadership",
    author: "Jordan Lee",
    role: "Experience Lead",
    date: "March 18, 2024",
    readTime: "4 min read",
    image: article5,
    illustration: <LeadIllust />,
    hookStat: "Friction, not lack of motivation, causes 68% of disengagement at work.",
    content: `
      <p>Management is about removing obstacles, not cheerleading from the sidelines.</p>
      <h2>The Illusion of Inspiration</h2>
      <p>Many managers think their primary job is to give powerful speeches and "fire up" the team. This might work for an hour, but it doesn't solve the underlying issues. Most employees start their jobs motivated. They want to do good work. It's the bureaucracy, the useless meetings, and the broken tools that suck the life out of them.</p>
      <blockquote>"Leadership is a service role. You serve the people doing the work."</blockquote>
      <h2>Identifying Friction Points</h2>
      <p>Instead of hiring an inspirational speaker, spend an hour a week asking each team member: "What is the most annoying thing about your job right now?" Is it a slow CI/CD pipeline? Is it a difficult stakeholder? Is it a lack of clarity on a project? That is where your work as a leader begins.</p>
      <h2>Becoming a Path-Clearer</h2>
      <p>Your success as a manager is measured by how invisible you are. If the path is clear, the team will run. Your job is to stay ahead of them, spotting the hurdles and removing them before the team even knows they exist.</p>
    `
  },
  {
    id: 5,
    title: "Meetings Are Not the Problem. Purposeless Meetings Are.",
    excerpt: "The meeting-hating culture has gone too far. Some meetings are irreplaceable — but only when they have a clear owner, a defined outcome, and a hard stop time.",
    category: "Productivity",
    author: "Nina Patel",
    role: "Growth Advisor",
    date: "March 15, 2024",
    readTime: "3 min read",
    image: article6,
    illustration: <MeetingIllust />,
    hookStat: "Employees spend 31 hours per month in unproductive meetings on average.",
    content: `
      <p>Don't ban meetings. Ban bad ones. Every meeting should have a cost-benefit analysis before the invite is sent.</p>
      <h2>The Default State of Collaboration</h2>
      <p>In many organizations, the default response to any problem is "let's have a meeting." This is a lazy way to collaborate. It offloads the work of thinking onto a group, usually resulting in a mediocre consensus rather than a sharp decision.</p>
      <blockquote>"A meeting is a luxury. Treat it like one."</blockquote>
      <h2>The Three Ingredients of a Good Meeting</h2>
      <p>Every meeting must have: 1. A clear owner (who is in charge?), 2. A defined outcome (what do we need to decide?), and 3. A hard stop time. If you can't state the outcome in one sentence, you aren't ready to meet.</p>
      <h2>Reclaiming Deep Work</h2>
      <p>By drastically reducing meeting frequency, you give your team back the most valuable asset they have: their attention. Encourage "meeting-free Wednesdays" or dedicated blocks for deep work. You'll find that most things can be solved more efficiently over a well-written document than an hour-long call.</p>
    `
  }
];

const PostRow = ({ article, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -10 }}
      className="group py-16 border-b border-slate-100 flex flex-col md:flex-row gap-12 lg:gap-24 items-start"
    >
      {/* Left Column (Content) */}
      <div className="flex-1 text-left">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-4 bg-[#7e22ce] rounded-full" />
          <span className="text-[#7e22ce] text-[13px] font-black uppercase tracking-[0.2em]">{article.category}</span>
        </div>
        
        <h3 
          onClick={() => onClick(article)}
          className="text-[32px] md:text-[42px] font-black text-[#0A2540] mb-8 leading-[1.05] tracking-tight hover:text-[#7e22ce] cursor-pointer transition-colors"
        >
          {article.title}
        </h3>
        
        <p className="text-[#425466] text-xl leading-relaxed mb-10 font-medium">
          {article.excerpt}
        </p>

        <button 
          onClick={() => onClick(article)}
          className="text-[#7e22ce] font-black text-[15px] flex items-center gap-2 hover:gap-4 transition-all"
        >
          Read more <ArrowRight size={18} strokeWidth={3} />
        </button>
      </div>

      {/* Right Column (Metadata + Image) */}
      <div className="w-full md:w-[480px] lg:w-[540px] shrink-0">
        {/* Top: Metadata */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10 sm:gap-6 mb-12">
          <div className="text-[#425466] text-[15px] font-bold">
            {article.date}
          </div>
          
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-full bg-[#F6F9FC] border border-slate-100 flex items-center justify-center font-black text-[#0A2540] text-sm overflow-hidden">
               {article.author.charAt(0)}
            </div>
            <div>
              <div className="text-[#0A2540] font-black text-[15px] leading-tight mb-1">{article.author}</div>
              <div className="text-[#425466] text-[11px] uppercase font-bold tracking-[0.2em]">{article.role}</div>
            </div>
          </div>
        </div>

        {/* Bottom: Post Image */}
        <div 
          onClick={() => onClick(article)}
          className="relative aspect-video rounded-[40px] overflow-hidden cursor-pointer shadow-[0_40px_100px_-30px_rgba(0,0,0,0.1)] group-hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] transition-all bg-[#F6F9FC]"
        >
          {article.illustration ? (
            article.illustration
          ) : (
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};


const ArticleDetail = ({ article, onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [article]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen pb-32 relative"
    >
      {/* Minimalist Header */}
      <div className="border-b border-slate-100 sticky top-0 bg-white/90 backdrop-blur-xl z-50">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#0A2540] hover:text-[#7e22ce] transition-colors font-bold text-sm"
          >
            <ChevronLeft size={18} strokeWidth={3} />
            Back to Blog
          </button>
          <div className="flex items-center gap-6">
            <button className="text-slate-400 hover:text-[#0A2540] transition-colors"><Twitter size={18} /></button>
            <button className="text-slate-400 hover:text-[#0A2540] transition-colors"><Linkedin size={18} /></button>
            <div className="h-4 w-px bg-slate-200" />
            <button className="bg-[#0A2540] text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#7e22ce] transition-all">
              Share
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pt-20 relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-4 bg-[#7e22ce] rounded-full" />
          <span className="text-[#7e22ce] text-[12px] font-black uppercase tracking-[0.2em]">
            {article.category}
          </span>
          <span className="mx-2 text-slate-200">/</span>
          <span className="text-slate-400 text-[13px] font-semibold">
            {article.date}
          </span>
          <span className="mx-2 text-slate-200">/</span>
          <span className="text-slate-400 text-[13px] font-semibold">
            {article.readTime}
          </span>
        </div>

        <h1 className="text-[40px] md:text-[64px] font-black text-[#0A2540] leading-[1.05] tracking-tight mb-12">
          {article.title}
        </h1>

        <div className="flex items-center gap-5 mb-16 py-8 border-y border-slate-100">
          <div className="w-12 h-12 rounded-xl bg-[#F6F9FC] border border-slate-100 flex items-center justify-center font-black text-[#0A2540] text-sm shadow-sm">
            {article.author.charAt(0)}
          </div>
          <div>
            <div className="text-[#0A2540] font-black text-lg tracking-tight leading-none mb-1.5">{article.author}</div>
            <div className="text-[#425466] text-[10px] uppercase font-bold tracking-[0.2em]">{article.role}</div>
          </div>
        </div>

        <div className="relative aspect-[16/9] rounded-[40px] overflow-hidden mb-20 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.1)] bg-[#F6F9FC]">
          {article.illustration ? (
            article.illustration
          ) : (
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          )}
        </div>

        <article
          className="prose prose-slate prose-xl max-w-none 
            prose-headings:text-[#0A2540] prose-headings:font-black prose-headings:tracking-tight
            prose-p:text-[#425466] prose-p:leading-relaxed prose-p:font-medium
            prose-blockquote:border-l-4 prose-blockquote:border-[#635BFF] prose-blockquote:bg-[#F6F9FC] prose-blockquote:p-10 prose-blockquote:rounded-2xl prose-blockquote:italic
            prose-strong:text-[#0A2540] prose-strong:font-black
            prose-img:rounded-[32px] prose-img:shadow-xl"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </motion.div>
  );
};


export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const selectedArticleRef = React.useRef(null);

  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState(null);
  const [message, setMessage] = useState("");

  // Keep ref in sync with state so popstate listener never has stale closure
  selectedArticleRef.current = selectedArticle;
  const savedScrollY = React.useRef(0);

  // Handle browser back button / touchpad swipe at the Blog level
  useEffect(() => {
    const handlePopState = () => {
      if (selectedArticleRef.current) {
        setSelectedArticle(null);
        // Restore scroll position after DOM updates
        const y = savedScrollY.current;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            window.scrollTo({ top: y, behavior: 'instant' });
          });
        });
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []); // runs once, uses ref so never stale

  const openArticle = (article) => {
    savedScrollY.current = window.scrollY; // save position before opening
    window.history.pushState({ article: article.id }, '', '#article');
    setSelectedArticle(article);
  };

  const closeArticle = () => {
    const y = savedScrollY.current;
    // Set state to null first (ref also updates synchronously via render)
    setSelectedArticle(null);
    // Clean up the hash from the URL without triggering popstate double-close
    if (window.location.hash === '#article') {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    // Restore scroll position after DOM updates
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: y, behavior: 'instant' });
      });
    });
  };

  const categories = ["All", "Team Management", "Productivity", "Product Updates", "HR & Ops", "Leadership"];

  const handleSearch = () => {
    setAppliedSearch(searchQuery);
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setSubscribeStatus("error");
      setMessage("Please enter your email address.");
      return;
    }
    if (!validateEmail(email)) {
      setSubscribeStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    setSubscribeStatus("success");
    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  const filteredArticles = articles
    .filter((a) => {
      const matchesSearch =
        appliedSearch === "" ||
        a.title.toLowerCase().includes(appliedSearch.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(appliedSearch.toLowerCase());
      const matchesCategory = activeCategory === "All" || a.category === activeCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (appliedSearch === "") return 0;
      const aTitleMatch = a.title.toLowerCase().includes(appliedSearch.toLowerCase());
      const bTitleMatch = b.title.toLowerCase().includes(appliedSearch.toLowerCase());
      if (aTitleMatch && !bTitleMatch) return -1;
      if (!aTitleMatch && bTitleMatch) return 1;
      return 0;
    });

  if (selectedArticle) {
    return (
      <AnimatePresence mode="wait">
        <ArticleDetail article={selectedArticle} onBack={closeArticle} />
      </AnimatePresence>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#7e22ce] selection:text-white overflow-hidden">
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 h-[560px] w-[560px] translate-x-1/4 -translate-y-1/3 rounded-full bg-purple-100/60 blur-[120px]" />
        <div className="absolute bottom-0 left-0 -z-10 h-[420px] w-[420px] -translate-x-1/4 translate-y-1/3 rounded-full bg-fuchsia-100/50 blur-[110px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="text-center lg:text-left">
                <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-black uppercase tracking-widest"
              >
                Blog — Ideas Worth Running With
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                className="mt-5 text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.06]"
              >
                Not another <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  productivity blog.
                </motion.span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="mt-6 space-y-4 max-w-2xl mx-auto lg:mx-0"
              >
                <div className="flex items-start gap-3.5 text-left">
                  <div className="mt-1 w-5 h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-2.5 h-2.5 text-[#7e22ce] stroke-[4]" />
                  </div>
                  <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                    Real talk on how modern teams work, lead, and grow — written by people who've actually felt the pressure of a missed deadline.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
                className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 max-w-md mx-auto lg:mx-0"
              >
                {["Guides", "Leadership", "Ops", "Templates"].map((tag) => (
                  <div key={tag} className="group flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-slate-50/50 border border-slate-200/60 shadow-sm hover:border-purple-200 hover:bg-purple-50/50 transition-all duration-300">
                    <div className="w-5 h-5 rounded-md bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Check className="w-3 h-3 text-[#7e22ce] stroke-[4]" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.12em] text-slate-600 truncate">{tag}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="relative lg:-mr-10"
            >
              <div className="absolute -inset-8 bg-gradient-to-tr from-[#7e22ce]/16 via-fuchsia-500/8 to-transparent blur-3xl opacity-55" />

              <div className="relative overflow-hidden border border-slate-200/80 rounded-3xl shadow-2xl shadow-slate-900/10 bg-white p-4 sm:p-5">
                <div className="relative rounded-[1.7rem] border border-slate-200 bg-[radial-gradient(circle_at_top,#faf5ff,white_58%)] p-5 sm:p-6 min-h-[470px]">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-700">
                        Editorial Desk
                      </div>
                      <div className="mt-2 text-2xl font-black tracking-tight text-slate-900">
                        Stories that move work
                      </div>
                    </div>
                    <div className="rounded-full border border-purple-200 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-purple-700 shadow-sm">
                      12 fresh reads
                    </div>
                  </div>

                  <div className="relative mt-8 flex justify-center">
                    <div className="absolute left-0 top-8 hidden w-[190px] rounded-[1.4rem] border border-slate-200 bg-white p-4 shadow-xl lg:block">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-purple-100 text-[#7e22ce]">
                          <TrendingUp className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                            Most read
                          </div>
                          <div className="mt-1 text-sm font-black leading-tight text-slate-900">
                            Productivity systems
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative w-full max-w-[420px]">
                      <img
                        src={dashboardMockup}
                        alt="KaryaUp blog and newsletter visual"
                        className="w-full h-auto object-contain drop-shadow-[0_28px_60px_rgba(15,23,42,0.16)]"
                      />
                    </div>

                    <div className="absolute right-0 top-20 hidden w-[210px] rounded-[1.4rem] border border-slate-200 bg-white p-4 shadow-xl lg:block">
                      <div className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                        Featured now
                      </div>
                      <div className="mt-2 text-sm font-black leading-tight text-slate-900">
                        {articles[0].title}
                      </div>
                      <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-purple-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-purple-700">
                        <BookOpen className="h-3.5 w-3.5" />
                        {articles[0].category}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {articles.slice(0, 3).map((article) => (
                      <div
                        key={article.id}
                        onClick={() => openArticle(article)}
                        className="group rounded-[1.25rem] border border-slate-200 bg-white px-4 py-3 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-purple-200"
                      >
                        <div className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                          {article.category}
                        </div>
                          <div className="mt-2 text-sm font-black leading-snug text-slate-900 group-hover:text-[#0048E5] transition-colors">
                            {article.title}
                          </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Category Navigation (Horizontal Pill List) */}
      <section className="sticky top-[72px] z-30 bg-white/80 backdrop-blur-md border-b border-slate-100 py-3">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center overflow-x-auto no-scrollbar">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-[14px] font-bold transition-all whitespace-nowrap ${
                    activeCategory === cat
                      ? "bg-[#0A2540] text-white"
                      : "bg-transparent text-[#425466] hover:bg-[#F6F9FC] hover:text-[#0A2540]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Feed - Stripe List Style */}
      <section className="relative py-24 min-h-[600px]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col">
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredArticles
                .filter(a => activeCategory !== "All" || appliedSearch || a.id !== "featured")
                .map((article) => (
                <PostRow
                  key={article.id}
                  article={article}
                  onClick={openArticle}
                />
              ))}
            </AnimatePresence>
          </div>

          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-32 text-center"
            >
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-slate-300" />
              </div>
              <h3 className="text-2xl font-black text-[#0A2540] mb-2">No matches found</h3>
              <p className="text-slate-400 font-medium">Try adjusting your search or category filters.</p>
              <button
                onClick={() => { setSearchQuery(""); setAppliedSearch(""); setActiveCategory("All"); }}
                className="mt-8 text-[#7e22ce] font-black uppercase tracking-widest text-sm hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Premium Dark Newsletter Section - FeatureCTA Style */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 group">
        <div className="relative rounded-[3rem] overflow-hidden bg-black flex flex-col lg:flex-row items-stretch border border-white/5 p-6 lg:p-10">
          {/* Ambient Background Gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(126,34,206,0.25),transparent_50%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(99,91,255,0.15),transparent_40%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.1),transparent_40%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 w-full">
            {/* Left Content */}
            <div className="max-w-2xl text-left flex-[1.2]">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[#635BFF] text-[13px] font-black uppercase tracking-[0.3em] mb-6 flex items-center gap-2"
              >
                <div className="w-8 h-[1px] bg-[#635BFF]/30" />
                Weekly Drop
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.05] tracking-tight drop-shadow-2xl"
              >
                One idea. Every Tuesday. <br />
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  Straight to your inbox.
                </motion.span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-xl mb-0"
              >
                No roundups. No recycled tips. Just one sharp, useful idea your team can act on before the week is out. Joined by 8,000+ managers already.
              </motion.p>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-[460px] flex-1">
              <motion.form 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                onSubmit={handleSubscribe} 
                className="flex flex-col gap-5 p-2 rounded-[2.5rem]"
              >
                <div className="relative group/input">
                  <input
                    type="email"
                    placeholder="Your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-8 py-5 rounded-[1.5rem] bg-white/5 border border-white/10 outline-none focus:border-[#635BFF]/50 focus:ring-4 focus:ring-[#635BFF]/10 transition-all font-bold text-white shadow-inner backdrop-blur-sm placeholder:text-slate-500"
                  />
                  <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-r from-[#635BFF]/20 to-purple-500/20 opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none -z-10 blur-xl" />
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(99,91,255,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-black py-5 rounded-[1.5rem] font-black text-base uppercase tracking-widest hover:bg-slate-50 transition-all shadow-2xl relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get the Tuesday Drop <ArrowRight size={18} strokeWidth={3} />
                  </span>
                </motion.button>

                <div className="flex flex-col items-center gap-3 mt-2">
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">
                    No spam. Unsubscribe in one click. Always free.
                  </p>
                  
                  <AnimatePresence>
                    {subscribeStatus && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`text-[12px] font-black uppercase tracking-widest ${
                          subscribeStatus === "success" ? "text-emerald-400" : "text-red-400"
                        }`}
                      >
                        {message}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.form>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
}
