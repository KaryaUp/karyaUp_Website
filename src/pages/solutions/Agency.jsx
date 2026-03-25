import React from "react";
import FeatureCTA from "../../components/FeatureCTA";
import dashboardImg from '../../assets/dashboard1.png';

export default function Agency() {
  return (
    <div className="bg-white font-sans min-h-screen pt-28">
      {/* Exact Hero Section */}
      <section className="py-10 px-4 sm:px-3 lg:px-10 max-w-[90rem] mx-auto flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
        {/* Left Column */}
        <div className="flex-1 lg:pr-1 w-full max-w-2xl mx-auto lg:mx-0">
        <h1 className="text-lg lg:text-[4rem] font-extrabold text-[#333333] leading-[1.05] mb-6 tracking-tight">
            Unlock agency <br />
        <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Productivity & deliver faster
        </span>
        </h1>
          <p className="text-[1.20rem] text-gray-500 mb-10 max-w-xl leading-relaxed">
            Build a creative powerhouse that empowers your team to deliver
            their best work with KaryaUp. Plan, create, and present your work
            all in one place.
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-10">
          <button className="relative overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-[0_10px_30px_rgba(123,44,255,0.4)] transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-[0_15px_40px_rgba(123,44,255,0.6)]">
              Get started <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1">→</span>

          {/* Glow Effect */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-xl opacity-0 hover:opacity-70 transition duration-300 -z-10"></span>
          </button>
            <div className="text-[15px] text-[#7B68EE] font-medium leading-tight">
              Free Forever.<br />
              No credit card.
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-500 font-medium">
            <div className="flex text-[#FFD100]">
            
            </div>
           
          </div>
        </div>

        {/* Right Column: Board UI Mockup */}
        <div className="flex-[1.2] w-full mt-10 lg:mt-0 relative">
          <div className="flex bg-white rounded-xl shadow-[0_20px_50px_-5px_rgba(0,0,0,0.1),_0_0_15px_1px_rgba(0,0,0,0.02)] border border-[#EDEDED] overflow-hidden text-sm h-[500px]">
            
            {/* Sidebar */}
            <div className="w-[200px] border-r border-[#EEEEEE] flex flex-col pt-2">
              <div className="flex items-center gap-2 px-5 mb-6">
                <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 85L15 50L50 15V35L30 50L50 65V85Z" fill="#7B61FF" />
                  <path d="M50 85L85 50L50 15V35L70 50L50 65V85Z" fill="#FF007F" />
                </svg>
                <div className="font-bold text-[16px] text-[#333]">KaryaUp</div>
              </div>

              <div className="px-3 space-y-1 mb-6 text-[#797F87] font-medium text-[13px]">
                <div className="flex items-center gap-3 px-2 py-1.5 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>
                  Home
                </div>
                <div className="flex items-center gap-3 px-2 py-1.5 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" /></svg>
                  Notifications
                </div>
                <div className="flex items-center gap-3 px-2 py-1.5 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                  Goals
                </div>
              </div>

              <div className="flex-1 overflow-y-auto">
                <div className="px-5 py-2 text-[12px] font-bold text-[#333] flex justify-between items-center group cursor-pointer">
                  Spaces
                  <svg className="w-3 h-3 text-gray-400 group-hover:text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                </div>
                <div className="px-3 space-y-1 text-[#4A4E54] font-[500] text-[13px] mb-4">
                  <div className="flex items-center gap-3 px-2 py-1.5 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <div className="w-4 h-4 grid grid-cols-2 gap-[2px]"><div className="bg-gray-400 rounded-[2px]" /><div className="bg-gray-400 rounded-[2px]" /><div className="bg-gray-400 rounded-[2px]" /><div className="bg-gray-400 rounded-[2px]" /></div>
                    Everything
                  </div>
                  <div className="flex items-center gap-3 px-2 py-[2px] mt-2 mb-1"></div>
                  <div className="flex items-center gap-3 px-2 py-1.5 bg-[#F4F5FF] text-[#333] rounded-lg cursor-pointer">
                    <div className="w-5 h-5 bg-[#7B68EE] text-white rounded-[4px] flex items-center justify-center text-[10px] font-bold">A</div>
                    <span className="font-bold">Agency Ops</span>
                  </div>
                  <div className="flex items-center gap-3 px-2 py-1.5 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <div className="w-5 h-5 bg-[#FFC700] text-white rounded-[4px] flex items-center justify-center text-[10px] font-bold">M</div>
                    Marketing
                  </div>
                  <div className="flex items-center gap-3 px-2 py-1.5 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <div className="w-5 h-5 bg-[#FF80B5] text-white rounded-[4px] flex items-center justify-center text-[10px] font-bold">C</div>
                    Clients
                  </div>
                </div>

                <div className="border-t border-[#EEEEEE]">
                  <div className="px-5 py-3 text-[12px] text-[#333] flex justify-between items-center group cursor-pointer hover:bg-gray-50">
                    Dashboards
                    <svg className="w-3 h-3 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                  </div>
                </div>
                <div className="border-t border-[#EEEEEE]">
                  <div className="px-5 py-3 text-[12px] text-[#333] flex justify-between items-center group cursor-pointer hover:bg-gray-50">
                    Docs
                    <svg className="w-3 h-3 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Area: Board View */}
            <div className="flex-1 flex flex-col bg-[#FAFBFC] overflow-hidden">
              {/* Top Header */}
              <div className="flex items-center px-6 py-4 border-b border-[#EEEEEE] gap-6 text-[#797F87] font-semibold text-[13px] bg-white z-10 w-full overflow-x-auto whitespace-nowrap">
                <div className="flex items-center gap-2 text-[#333] font-bold text-[15px]">
                  <div className="w-5 h-5 bg-[#FFF0F6] text-[#FF80B5] rounded flex items-center justify-center">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
                  </div>
                  OKRs
                </div>
                <div className="flex items-center gap-1.5 text-[#5A6CF3] cursor-pointer">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="18" rx="1" /><rect x="14" y="3" width="7" height="18" rx="1" /></svg>
                  Board
                </div>
                <div className="flex items-center gap-1.5 hover:text-gray-900 cursor-pointer">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                  Calendar
                </div>
                <div className="flex items-center gap-1.5 hover:text-gray-900 cursor-pointer">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h10M4 18h14" /></svg>
                  Timeline
                </div>
                <div className="flex items-center gap-1.5 hover:text-gray-900 cursor-pointer">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" /></svg>
                  Doc
                </div>
                <div className="flex items-center gap-1.5 hover:text-gray-900 cursor-pointer">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
                  Whiteboard
                </div>
              </div>

              {/* Board Columns */}
              <div className="flex-1 flex gap-4 p-6 overflow-x-auto relative">
                
                <div className="w-[280px] flex-shrink-0 flex flex-col gap-3">
                  <div className="flex items-center justify-between font-bold text-[#333] mb-1">
                    <div className="flex items-center gap-2">
                      Ready <span className="bg-[#E9EBEF] text-[#797F87] text-[11px] rounded-full w-5 h-5 flex items-center justify-center font-bold">3</span>
                    </div>
                    <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  </div>
                  
                  {/* Card 1 */}
                  <div className="bg-white rounded-lg p-4 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.1)] border border-[#EDEDED]">
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-[11px] font-semibold text-[#A6ABB2] uppercase tracking-wide">Goals & OKRs &gt; Stage 1</div>
                      <img src="https://i.pravatar.cc/100?img=12" className="w-6 h-6 rounded-full" alt="avatar"/>
                    </div>
                    <div className="font-semibold text-[#363A45] text-[14px] mb-3 leading-snug">Client feedback review</div>
                    <div className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#FFC700] fill-current" viewBox="0 0 24 24"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M4 22v-7" stroke="currentColor" strokeWidth="2"/></svg>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white rounded-lg p-4 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.1)] border border-[#EDEDED]">
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-[11px] font-semibold text-[#A6ABB2] uppercase tracking-wide">Goals & OKRs &gt; Stage 1</div>
                      <img src="https://i.pravatar.cc/100?img=5" className="w-6 h-6 rounded-full" alt="avatar"/>
                    </div>
                    <div className="font-semibold text-[#363A45] text-[14px] mb-3 leading-snug">Refresh company website</div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[#A6ABB2] text-[11px] font-semibold">
                        3 <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                      </div>
                      <svg className="w-3.5 h-3.5 text-[#00B289] fill-current" viewBox="0 0 24 24"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M4 22v-7" stroke="currentColor" strokeWidth="2"/></svg>
                    </div>
                  </div>
                </div>

                <div className="w-[280px] flex-shrink-0 flex flex-col gap-3">
                  <div className="flex items-center justify-between font-bold text-[#333] mb-1">
                    <div className="flex items-center gap-2">
                      In Progress <span className="bg-[#E9EBEF] text-[#797F87] text-[11px] rounded-full w-5 h-5 flex items-center justify-center font-bold">4</span>
                    </div>
                  </div>
                  
                  {/* Card 3 */}
                  <div className="bg-white rounded-lg p-4 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.1)] border border-[#EDEDED] relative overflow-hidden">
                    <div className="flex justify-between items-start mb-2 relative z-10">
                      <div className="text-[11px] font-semibold text-[#A6ABB2] uppercase tracking-wide">Goals & OKRs &gt; Stage 1</div>
                      <img src="https://i.pravatar.cc/100?img=8" className="w-6 h-6 rounded-full" alt="avatar"/>
                    </div>
                    <div className="font-semibold text-[#363A45] text-[14px] mb-3 leading-snug relative z-10">Update project timelines</div>
                    <div className="flex items-center gap-2 relative z-10">
                      <svg className="w-3.5 h-3.5 text-[#FF492C] fill-current" viewBox="0 0 24 24"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M4 22v-7" stroke="currentColor" strokeWidth="2"/></svg>
                    </div>

                    {/* Faded background visual over Card 3 */}
                    <div className="absolute right-[-20px] top-[10px] w-12 h-12 rounded-full border border-[#00B289] border-dashed opacity-30"></div>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-white rounded-lg p-4 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.1)] border border-[#EDEDED] relative">
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-[11px] font-semibold text-[#A6ABB2] uppercase tracking-wide">Goals & OKRs &gt; Stage 1</div>
                    </div>
                    <div className="font-semibold text-[#363A45] text-[14px] mb-3 leading-snug">New client intake</div>
                  </div>

                  {/* Card 5 */}
                  <div className="bg-white rounded-lg p-4 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.1)] border border-[#EDEDED] mt-24">
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-[11px] font-semibold text-[#A6ABB2] uppercase tracking-wide">Goals & OKRs &gt; Stage 1</div>
                    </div>
                    <div className="font-semibold text-[#363A45] text-[14px] mb-3 leading-snug">Audit creative assets</div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[#A6ABB2] text-[11px] font-semibold">
                        3 <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                      </div>
                      <svg className="w-3.5 h-3.5 text-[#00B289] fill-current" viewBox="0 0 24 24"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M4 22v-7" stroke="currentColor" strokeWidth="2"/></svg>
                    </div>
                  </div>

                  {/* Floating Popovers */}
                  
                  {/* Popover 1: Campaign Brief Doc */}
                  <div className="absolute left-[30px] bottom-[-20px] w-[280px] bg-white rounded-xl shadow-[0_25px_50px_rgba(0,0,0,0.15)] border border-[#EEEEEE] p-6 z-20">
                    <div className="absolute -top-[14px] right-2 bg-[#3BCEF6] text-white text-[13px] font-extrabold px-4 py-1.5 rounded-[8px] shadow-md tracking-wide">Docs</div>
                    <h3 className="font-bold text-[#333] text-[18px] mb-3 tracking-tight">Campaign brief</h3>
                    <p className="text-[#656F7D] text-[13px] leading-relaxed mb-3 font-medium">
                      Target Audience: Business owners and marketing professionals who are looking for a creative agency to help growing their industry.
                    </p>
                    <div className="relative inline-block bg-[#E6F8FF] text-[#656F7D] text-[13px] leading-relaxed font-medium mt-1 w-full rounded p-1 pb-0 mix-blend-multiply">
                      <span className="bg-[#3BCEF6] text-white font-extrabold px-1.5 py-[2px] rounded-[4px] text-[12px] mr-1.5 align-middle inline-flex items-center gap-1 shadow-sm"><svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> Josh editing</span>
                      Key Message: Our creative solutions
                    </div>
                    <p className="text-[#656F7D] text-[13px] leading-relaxed opacity-40 font-medium px-1">are unique, effective, and always tailored to our clients' needs.</p>
                    
                    {/* User avatars in corner */}
                    <div className="absolute bottom-[-10px] left-6 flex">
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-white overflow-hidden shadow-sm z-10"><img src="https://i.pravatar.cc/100?img=11" className="w-full h-full object-cover"/></div>
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-white overflow-hidden shadow-sm -ml-2"><img src="https://i.pravatar.cc/100?img=12" className="w-full h-full object-cover"/></div>
                    </div>
                  </div>

                  {/* Popover 2: Gantt Tab */}
                  <div className="absolute right-[-30px] top-[140px] bg-[#7B68EE] text-white text-[16px] font-extrabold px-4 py-3 rounded-l-[12px] shadow-[-10px_10px_30px_rgba(123,104,238,0.3)] z-20 items-center">
                    Gantt
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureCTA
        title={
          <>
            Tasks that connect to everything you do
            
          </>
        }
        description="Work Smater with tasks that can live in your whiteboaards,chat,calendar - anywhere you work"
        image={dashboardImg}
        imageAlt="KaryaUp dashboard"
        containerClassName="mt-10 mb-8"
        paddingClassName="p-3 lg:p-4 lg:py-6"
        imageClassName="w-full max-w-[940px]"
        imageOuterClassName="relative w-[108%] lg:w-full translate-x-2 lg:translate-x-8"
      />
    </div>
  );
}
