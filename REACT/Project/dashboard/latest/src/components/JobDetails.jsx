import { MapPin, Clock, CheckCircle2, MessageSquare, Star, ChevronRight } from 'lucide-react';

const JobDetails = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-[#0B0F19] px-10 py-8 text-white relative">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-[#0B0F19]/95 p-10 shadow-2xl shadow-slate-950/40">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-white/60 font-medium tracking-wide mb-6">
          <span className="hover:text-white cursor-pointer transition">Marketplace</span>
          <ChevronRight size={14} className="text-white/40" />
          <span className="text-white">Gig Details</span>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-8">
          {/* Left Main Column */}
          <div className="space-y-6">
            {/* Job Header */}
            <div className="mb-4">
              <div className="flex gap-2 mb-4">
                <span className="bg-green-600 font-bold tracking-widest uppercase text-[10px] px-3 py-1.5 rounded-full text-white">
                  Urgent
                </span>
                <span className="bg-white/10 font-bold tracking-widest uppercase text-[10px] px-3 py-1.5 rounded-full text-white border border-white/20">
                  Delivery
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-5">
                Premium Furniture Delivery & Assembly
              </h1>

              <div className="flex items-center gap-6 text-white/60 font-medium text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <MapPin size={14} className="text-white" fill="currentColor" />
                  </div>
                  Silverlake, Los Angeles
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <Clock size={14} className="text-white" fill="currentColor" />
                  </div>
                  Starts 2h from now
                </div>
              </div>
            </div>

            {/* Description Card */}
            <div className="bg-[#151923] border border-[#2A3143] rounded-3xl p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 bg-[#818CF8] rounded-full"></div>
                <h2 className="text-xl font-bold">Description</h2>
              </div>

              <p className="text-slate-300 font-medium leading-relaxed mb-8">
                Looking for a careful and experienced individual to assist with the transport and assembly of a large modular sofa from West Elm. The item is currently at a warehouse in Burbank and needs to be delivered to a residential 3rd-floor apartment in Silverlake.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="text-green-500 mt-0.5 flex-shrink-0" size={20} fill="currentColor" />
                  <span className="text-slate-300 font-medium">Must have a large van or truck with tie-downs.</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="text-green-500 mt-0.5 flex-shrink-0" size={20} fill="currentColor" />
                  <span className="text-slate-300 font-medium">Standard tool kit required for assembly (hex keys provided).</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="text-green-500 mt-0.5 flex-shrink-0" size={20} fill="currentColor" />
                  <span className="text-slate-300 font-medium">Ability to lift 50lbs+ comfortably.</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-[#11131A] border border-[#1F2937] p-5 rounded-2xl flex-1 flex flex-col justify-center">
                  <p className="text-[10px] text-slate-500 font-bold mb-2 uppercase tracking-widest">Estimated Time</p>
                  <p className="text-2xl font-bold text-white">3.5 Hours</p>
                </div>
                <div className="bg-[#11131A] border border-[#1F2937] p-5 rounded-2xl flex-1 flex flex-col justify-center">
                  <p className="text-[10px] text-slate-500 font-bold mb-2 uppercase tracking-widest">Total Payout</p>
                  <p className="text-2xl font-bold font-mono tracking-tight text-green-400">$185.00</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="aspect-square bg-gradient-to-tr from-[#11131A] to-[#1C212E] border border-[#2A3143] rounded-2xl flex items-center justify-center p-4">
                <div className="w-full h-1/3 bg-[#2A3143] rounded-sm transform translate-y-3 shadow-xl"></div>
              </div>
              <div className="aspect-square bg-gradient-to-tr from-[#11131A] to-[#1C212E] border border-[#2A3143] rounded-2xl flex items-center justify-center p-4">
                <div className="w-3/4 h-3/4 bg-[#1F2937] opacity-50 transform perspective-1000 rotateY-12 rotateX-12"></div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-[#11131A] to-[#1C212E] border border-[#2A3143] rounded-2xl flex items-center justify-center p-4 relative overflow-hidden">
                <div className="absolute w-2 h-16 bg-slate-500 rotate-45"></div>
                <div className="absolute w-2 h-12 bg-slate-600 -rotate-45 translate-x-4"></div>
              </div>
              <div className="aspect-square bg-[#151923] border border-[#2A3143] rounded-2xl flex items-center justify-center font-bold text-white hover:bg-[#1C212E] transition cursor-pointer">
                +2 More
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:sticky lg:top-8">
            <div className="bg-[#151923] border border-[#2A3143] rounded-3xl p-6 text-center shadow-xl">
              <p className="text-[10px] text-slate-500 font-bold mb-6 uppercase tracking-widest">Posted By</p>
              <div className="relative w-20 h-20 mx-auto mb-4">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
                  <div className="w-full h-full bg-[#0B0F19] rounded-full overflow-hidden border-2 border-[#151923] flex items-center justify-center text-xl font-bold">
                    S
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-[#151923] rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Sarah Jenkins</h3>
              <p className="text-xs text-slate-400 font-medium mb-4">Premium Member • 48 Hustles</p>
              <div className="flex items-center justify-center gap-1.5 mb-6 text-amber-500">
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <span className="text-white font-bold ml-1 flex items-center">4.9</span>
              </div>
              <button className="w-full py-3 rounded-xl border border-[#2A3143] bg-[#11131A] hover:bg-[#1C212E] text-slate-300 font-bold transition flex justify-center items-center gap-2 text-sm">
                <MessageSquare size={16} fill="currentColor" /> Chat with Sarah
              </button>
            </div>

            <div className="bg-[#151923] border border-[#2A3143] rounded-3xl p-6 shadow-xl">
              <button className="w-full py-4 rounded-xl bg-[#818CF8] hover:bg-[#6366F1] text-white font-bold transition flex justify-center items-center gap-2 mb-4 shadow-[0_0_15px_rgba(129,140,248,0.2)]">
                Accept Hustle
              </button>
              <button className="w-full py-4 rounded-xl border border-transparent bg-[#11131A] hover:bg-[#1C212E] text-slate-400 font-bold transition flex justify-center items-center gap-2 mb-6">
                Reject / Pass
              </button>
              <p className="text-[9px] text-slate-500 uppercase tracking-wider text-center font-medium leading-relaxed px-2">
                By accepting, you agree to the <a href="#" className="underline">Jobzenix Service Terms</a> and insurance policy.
              </p>
            </div>

            <div className="bg-gradient-to-b from-[#1C212E] to-[#151923] border border-[#2A3143] rounded-3xl h-48 flex items-end justify-center p-4 relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #818CF8 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
              <div className="w-full bg-[#11131A]/80 backdrop-blur-sm border border-[#2A3143] rounded-xl p-3 flex items-center gap-3 relative z-10 cursor-pointer hover:bg-[#1C212E] transition">
                <div className="w-8 h-8 rounded-full bg-[#818CF8]/20 flex items-center justify-center">
                  <MapPin size={14} className="text-[#818CF8]" fill="currentColor" />
                </div>
                <span className="text-xs font-bold text-white tracking-widest uppercase">View Location Map</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
