import { Bell, MessageSquare, User, CheckCircle2, Star, CheckSquare, Clock, Hammer, PenTool, LayoutTemplate, Ruler } from 'lucide-react';

const UserProfile = () => {
  return (
    <div className="flex-1 flex flex-col h-screen overflow-y-auto bg-[#0B0F19] text-white">
      
      {/* Custom Profile Header */}
      <nav className="h-20 border-b border-[#1F2937]/60 px-8 flex items-center justify-between sticky top-0 z-50 bg-[#0B0F19]/90 backdrop-blur-md">
        
        <div className="flex items-center gap-10">
           <h1 className="text-xl font-bold tracking-tight">Jobzenix</h1>
           <div className="hidden md:flex gap-6 items-center text-sm font-semibold text-slate-400">
              <span className="hover:text-white transition cursor-pointer">Marketplace</span>
              <span className="hover:text-white transition cursor-pointer">Find Gigs</span>
              <span className="hover:text-white transition cursor-pointer">Community</span>
           </div>
        </div>

        <div className="flex items-center gap-6 text-slate-400">
          <button className="hover:text-white transition"><Bell size={20} /></button>
          <button className="hover:text-white transition"><MessageSquare size={20} /></button>
          
          <div className="w-px h-6 bg-[#1F2937]/80"></div>
          
          <button className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center ring-2 hover:ring-[#818CF8] ring-[#151923] p-0.5 transition">
             <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" alt="User Avatar" className="w-full h-full rounded-full" />
          </button>
        </div>
      </nav>

      {/* Main Main Content Container */}
      <div className="max-w-7xl mx-auto px-8 py-10 w-full space-y-12">
        
        {/* TOP SECTION: Avatar + Stats */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
           
           {/* Left Bio Card */}
           <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Glowing Avatar */}
              <div className="relative w-40 h-40 rounded-full bg-gradient-to-r from-[#6366F1] to-cyan-400 p-1 mb-6 shadow-[0_0_40px_rgba(99,102,241,0.3)]">
                 <div className="w-full h-full bg-[#11131A] rounded-full flex items-center justify-center overflow-hidden border-[6px] border-[#0B0F19]">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=face" alt="Arun Nair" className="w-full h-full object-cover" />
                 </div>
              </div>

              <h2 className="text-4xl font-black mb-2 tracking-tight text-white">Arun Nair</h2>
              <p className="text-[#818CF8] font-semibold text-sm mb-4 leading-relaxed max-w-[250px]">
                 Software Developer & Tech Enthusiast
              </p>

              <div className="flex items-center gap-2 mb-8">
                 <span className="bg-green-600 font-bold tracking-widest uppercase text-[9px] px-2.5 py-1 rounded-sm text-white flex items-center gap-1">
                   <CheckCircle2 size={10} fill="currentColor" className="text-green-200" /> VERIFIED PRO
                 </span>
                 <span className="bg-[#1C212E] border border-[#2A3143] font-mono tracking-tight text-[10px] px-3 py-1 rounded-sm text-slate-300">
                   @kaviarasan7778@gmail.com
                 </span>
              </div>

              <div className="flex w-full gap-3">
                 <button className="flex-1 px-4 py-3 bg-[#818CF8] hover:bg-[#6366F1] font-bold text-white rounded-xl transition shadow-[0_0_15px_rgba(129,140,248,0.2)]">
                   Hire Kavi
                 </button>
                 <button className="flex-1 px-4 py-3 bg-[#1C212E] hover:bg-[#2A3143] border border-[#2A3143] font-bold text-slate-300 rounded-xl transition">
                   Message
                 </button>
              </div>
           </div>

           {/* Right Info Section */}
           <div className="w-full lg:w-2/3 flex flex-col gap-6">
              
              {/* About Card */}
              <div className="bg-[#11131A] border border-[#1F2937]/70 rounded-2xl p-8 shadow-xl flex-1">
                 <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Star className="text-[#818CF8]" fill="currentColor" size={16} /> About the Hustler</h3>
                 <p className="text-slate-400 font-medium leading-relaxed">
                   Specializing in bespoke reclaimed wood furniture and structural restoration. With over 12 years of experience in the craft, I bring a meticulous eye for detail to every Jobzenix project. Whether it's a custom bookshelf or a kitchen overhaul, my goal is to blend functionality with artisanal beauty.
                 </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                 
                 <div className="bg-[#11131A] border border-[#1F2937]/70 rounded-2xl p-6 shadow-xl flex flex-col">
                    <div className="w-8 h-8 bg-[#818CF8]/10 rounded-full flex items-center justify-center mb-4">
                       <Star size={16} className="text-[#818CF8]" fill="currentColor" />
                    </div>
                    <div className="text-4xl font-black text-white mb-1">4.9</div>
                    <div className="text-[9px] font-bold tracking-widest uppercase text-slate-500">Avg Rating</div>
                 </div>

                 <div className="bg-[#11131A] border border-[#1F2937]/70 rounded-2xl p-6 shadow-xl flex flex-col">
                    <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                       <CheckSquare size={16} className="text-blue-500" />
                    </div>
                    <div className="text-4xl font-black text-white mb-1">142</div>
                    <div className="text-[9px] font-bold tracking-widest uppercase text-slate-500">Jobs Done</div>
                 </div>

                 <div className="bg-[#11131A] border border-[#1F2937]/70 rounded-2xl p-6 shadow-xl flex flex-col">
                    <div className="w-8 h-8 bg-indigo-400/10 rounded-full flex items-center justify-center mb-4">
                       <Clock size={16} className="text-indigo-400" fill="currentColor" />
                    </div>
                    <div className="text-4xl font-black text-white mb-1">98%</div>
                    <div className="text-[9px] font-bold tracking-widest uppercase text-slate-500">On-Time Rate</div>
                 </div>

              </div>

           </div>
        </div>

        {/* SECTION 2: Specialized Skills */}
        <div>
           <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl font-bold tracking-tight">Specialized Skills</h3>
              <div className="h-px bg-[#1F2937]/80 flex-1"></div>
           </div>
           
           <div className="flex flex-wrap gap-3">
              <div className="px-5 py-3 rounded-full bg-[#1E1B4B] border border-[#3730A3] text-indigo-300 font-bold text-sm flex items-center gap-2 shadow-lg">
                 <Hammer size={16} /> Fine Woodworking
              </div>
              <div className="px-5 py-3 rounded-full bg-[#1E1B4B] border border-[#3730A3] text-indigo-300 font-bold text-sm flex items-center gap-2 shadow-lg">
                 <PenTool size={16} /> CAD Design
              </div>
              <div className="px-5 py-3 rounded-full bg-[#1E1B4B] border border-[#3730A3] text-indigo-300 font-bold text-sm flex items-center gap-2 shadow-lg">
                 <LayoutTemplate size={16} /> Framing
              </div>
              <div className="px-5 py-3 rounded-full bg-[#1E1B4B] border border-[#3730A3] text-indigo-300 font-bold text-sm flex items-center gap-2 shadow-lg">
                 <PenTool size={16} className="transform rotate-90" /> Finishing & Staining
              </div>
              <div className="px-5 py-3 rounded-full bg-[#1E1B4B] border border-[#3730A3] text-indigo-300 font-bold text-sm flex items-center gap-2 shadow-lg">
                 <Ruler size={16} /> Precision Measuring
              </div>
           </div>
        </div>

        {/* SECTION 3: Latest Reviews */}
        <div>
           <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold tracking-tight">Latest Reviews</h3>
              <a href="#" className="text-sm font-bold text-[#818CF8] hover:text-[#6366F1] transition">See All 142 Reviews</a>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Review 1 */}
              <div className="bg-[#11131A] border border-[#1F2937]/60 rounded-2xl p-6 shadow-xl relative mt-4">
                 <div className="flex items-center gap-3 mb-4 absolute -top-4">
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold overflow-hidden border-2 border-[#11131A]">S</div>
                    <div className="mt-4 bg-[#11131A] py-1">
                       <h4 className="font-bold text-sm text-white leading-none">Sarah Jenkins</h4>
                       <div className="flex text-amber-500 mt-1">
                          <Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" />
                       </div>
                    </div>
                 </div>
                 <p className="text-sm text-slate-400 font-medium italic leading-relaxed mt-6">
                    "Kaviarasan built a custom dining table for our home and the craftsmanship is simply unmatched. He kept me updated throughout the process. Highly recommended!"
                 </p>
              </div>

              {/* Review 2 */}
              <div className="bg-[#11131A] border border-[#1F2937]/60 rounded-2xl p-6 shadow-xl relative mt-4">
                 <div className="flex items-center gap-3 mb-4 absolute -top-4">
                    <div className="w-10 h-10 rounded-full bg-orange-600/20 text-orange-500 flex items-center justify-center text-sm font-bold border-2 border-[#11131A]">M</div>
                    <div className="mt-4 bg-[#11131A] py-1">
                       <h4 className="font-bold text-sm text-white leading-none">Marcus Thorne</h4>
                       <div className="flex text-amber-500 mt-1">
                          <Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" />
                       </div>
                    </div>
                 </div>
                 <p className="text-sm text-slate-400 font-medium italic leading-relaxed mt-6">
                    "Repaired our deck in record time. Professional, clean, and very reasonably priced. Will hire again for any woodwork."
                 </p>
              </div>

              {/* Review 3 */}
              <div className="bg-[#11131A] border border-[#1F2937]/60 rounded-2xl p-6 shadow-xl relative mt-4">
                 <div className="flex items-center gap-3 mb-4 absolute -top-4">
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-sm font-bold overflow-hidden border-2 border-[#11131A]">E</div>
                    <div className="mt-4 bg-[#11131A] py-1">
                       <h4 className="font-bold text-sm text-white leading-none">Elena Rodriguez</h4>
                       <div className="flex text-amber-500 mt-1">
                          <Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" />
                          <Star size={10} className="text-slate-600" fill="currentColor" />
                       </div>
                    </div>
                 </div>
                 <p className="text-sm text-slate-400 font-medium italic leading-relaxed mt-6">
                    "Great attention to detail on our kitchen cabinets. Only minor delay due to materials, but handled it perfectly."
                 </p>
              </div>
           </div>
        </div>

        {/* SECTION 4: Project History */}
        <div>
           <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl font-bold tracking-tight">Project History</h3>
              <div className="h-px bg-[#1F2937]/80 flex-1"></div>
           </div>

           <div className="space-y-4">
              
              {/* Project 1 */}
              <div className="bg-[#11131A] border border-[#1F2937]/60 rounded-2xl p-4 flex gap-6 items-center hover:bg-[#151923] transition group shadow-lg">
                 <div className="w-32 h-24 bg-gradient-to-tr from-[#1C212E] to-[#2A3143] rounded-xl flex-shrink-0 relative overflow-hidden flex items-end">
                    <div className="w-full h-1/2 bg-[#151923] opacity-60 rounded-t-lg transform translate-y-3"></div>
                 </div>
                 <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                       <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-[#818CF8] transition">Bespoke Walnut Library Shelving</h4>
                       <span className="bg-green-600/20 text-green-500 text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-sm">Completed</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Downtown High-rise Residence • June 2024</p>
                 </div>
                 <div className="text-right">
                    <div className="text-2xl font-mono text-[#818CF8] font-bold tracking-tight">$3,450</div>
                    <div className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">Budget Range</div>
                 </div>
              </div>

              {/* Project 2 */}
              <div className="bg-[#11131A] border border-[#1F2937]/60 rounded-2xl p-4 flex gap-6 items-center hover:bg-[#151923] transition group shadow-lg">
                 <div className="w-32 h-24 bg-gradient-to-bl from-[#1C212E] to-[#2A3143] rounded-xl flex-shrink-0 relative overflow-hidden flex items-center justify-center">
                    <div className="flex gap-1 w-full p-2 h-full opacity-60">
                       <div className="w-1/4 bg-[#151923] h-full rounded-sm"></div>
                       <div className="w-1/4 bg-[#151923] h-full rounded-sm translate-y-2"></div>
                       <div className="w-1/4 bg-[#151923] h-full rounded-sm translate-y-4"></div>
                       <div className="w-1/4 bg-[#151923] h-full rounded-sm"></div>
                    </div>
                 </div>
                 <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                       <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-[#818CF8] transition">Heritage Deck Restoration</h4>
                       <span className="bg-green-600/20 text-green-500 text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-sm">Completed</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">North Side Historic District • May 2024</p>
                 </div>
                 <div className="text-right">
                    <div className="text-2xl font-mono text-[#818CF8] font-bold tracking-tight">$1,800</div>
                    <div className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">Budget Range</div>
                 </div>
              </div>

              {/* Project 3 */}
              <div className="bg-[#11131A] border border-[#1F2937]/60 rounded-2xl p-4 flex gap-6 items-center hover:bg-[#151923] transition group shadow-lg">
                 <div className="w-32 h-24 bg-gradient-to-br from-[#1C212E] to-[#2A3143] rounded-xl flex-shrink-0 relative overflow-hidden flex items-center justify-center p-2">
                     <div className="w-full h-1/4 bg-[#151923] opacity-60 rotate-12 absolute scale-150"></div>
                     <div className="w-full h-1/4 bg-[#151923] opacity-60 -rotate-12 absolute scale-150"></div>
                 </div>
                 <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                       <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-[#818CF8] transition">Mid-Century Sofa Frame Repair</h4>
                       <span className="bg-green-600/20 text-green-500 text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-sm">Completed</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">South Park Lofts • April 2024</p>
                 </div>
                 <div className="text-right">
                    <div className="text-2xl font-mono text-[#818CF8] font-bold tracking-tight">$450</div>
                    <div className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">Budget Range</div>
                 </div>
              </div>

           </div>
        </div>

      </div>

    </div>
  );
};

export default UserProfile;
