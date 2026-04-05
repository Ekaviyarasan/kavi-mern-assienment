import { 
  Zap, Banknote, Star, MoreVertical, FileText, 
  MapPin, CheckCircle2, MessageSquare, Plus
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-1 overflow-y-auto px-10 py-8 text-white relative">
      
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold mb-2 tracking-tight">Welcome back, Arun</h1>
        <p className="text-slate-400">
          You have <span className="text-green-400 font-bold">3 active jobs</span> and 12 new Jobzenix marketplace opportunities.
        </p>
      </div>

      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-[#1C212E] p-6 rounded-2xl border border-[#2A3143]">
          <div className="w-10 h-10 bg-[#818CF8]/10 rounded-xl flex items-center justify-center mb-4">
             <Zap className="text-[#818CF8]" size={20} fill="currentColor" />
          </div>
          <h3 className="font-bold text-lg mb-1">Quick Match</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Find tasks that fit your exact schedule and skills right now.
          </p>
        </div>
        
        <div className="bg-[#1C212E] p-6 rounded-2xl border border-[#2A3143]">
          <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
             <Banknote className="text-green-500" size={20} />
          </div>
          <h3 className="font-bold text-lg mb-1">Earnings</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            You earned <span className="text-green-400 font-bold">$1,240</span> this week. View breakdown.
          </p>
        </div>

        <div className="bg-[#1C212E] p-6 rounded-2xl border border-[#2A3143]">
          <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
             <Star className="text-amber-500" size={20} fill="currentColor" />
          </div>
          <h3 className="font-bold text-lg mb-1">Reputation</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            4.9/5 stars. You are in the top 5% of local service providers.
          </p>
        </div>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-8">
        
        {/* Left Column */}
        <div className="space-y-10">
           
           {/* Active Jobs */}
           <div>
              <div className="flex justify-between items-end mb-4">
                <h2 className="text-xl font-bold">Active Jobs</h2>
                <button onClick={() => navigate('/marketplace')} className="text-sm text-[#818CF8] font-semibold hover:text-[#6366F1]">View All</button>
              </div>

              <div className="space-y-4">
                {/* Active Job 1 */}
                <div onClick={() => navigate('/job-details')} className="bg-[#151923] border border-[#2A3143] rounded-2xl p-4 flex gap-6 hover:border-[#3B4255] cursor-pointer transition">
                  {/* Job Image */}
                  <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=160&h=112&fit=crop" alt="Plumbing work" className="w-40 h-28 rounded-xl flex-shrink-0 object-cover" />
                  
                  <div className="flex flex-col justify-between flex-1 py-1">
                     <div className="flex justify-between items-start">
                        <div>
                           <h3 className="text-lg font-bold mb-1">Fix Sink Leakage</h3>
                           <p className="text-sm text-slate-400">Location: North Hills Estates • Due by 5:00 PM</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                           <span className="text-[10px] font-bold tracking-widest bg-[#818CF8]/20 text-[#818CF8] px-3 py-1 rounded-full uppercase">In Progress</span>
                           <span className="text-xl font-extrabold font-mono">$120.00</span>
                        </div>
                     </div>
                     <div className="flex justify-between items-end">
                        <div className="flex items-center gap-3">
                           <div className="flex -space-x-2">
                              <div className="w-6 h-6 rounded-full bg-slate-600 border-2 border-[#151923]"></div>
                              <div className="w-6 h-6 rounded-full bg-slate-700 border-2 border-[#151923] flex items-center justify-center text-[8px] font-bold">+1</div>
                           </div>
                           <span className="text-xs text-slate-500 font-medium">Shared with 1 teammate</span>
                        </div>
                        <button className="w-8 h-8 rounded-lg bg-[#2A3143] hover:bg-[#3B4255] flex items-center justify-center transition">
                          <MoreVertical size={16} className="text-slate-400" />
                        </button>
                     </div>
                  </div>
                </div>

                {/* Active Job 2 */}
                <div onClick={() => navigate('/job-details')} className="bg-[#151923] border border-[#2A3143] rounded-2xl p-4 flex gap-6 hover:border-[#3B4255] cursor-pointer transition">
                  {/* Job Image */}
                  <img src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=160&h=112&fit=crop" alt="Mural painting" className="w-40 h-28 rounded-xl flex-shrink-0 object-cover" />
                  
                  <div className="flex flex-col justify-between flex-1 py-1">
                     <div className="flex justify-between items-start">
                        <div>
                           <h3 className="text-lg font-bold mb-1">Cafe Mural Painting</h3>
                           <p className="text-sm text-slate-400">Location: Downtown Coffee Co. • Completed 2h ago</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                           <span className="text-[10px] font-bold tracking-widest bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full uppercase">Awaiting Review</span>
                           <span className="text-xl font-extrabold font-mono">$450.00</span>
                        </div>
                     </div>
                     <div className="flex justify-between items-end">
                        <span className="text-xs text-slate-500 font-medium">Estimated payout in 24h</span>
                        <button className="w-8 h-8 rounded-lg bg-[#2A3143] hover:bg-[#3B4255] flex items-center justify-center transition">
                          <FileText size={16} className="text-slate-400" />
                        </button>
                     </div>
                  </div>
                </div>
              </div>
           </div>

           {/* Nearby Opportunities */}
           <div>
              <h2 className="text-xl font-bold mb-4">Nearby Opportunities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 
                 {/* Nearby Card 1 */}
                 <div onClick={() => navigate('/job-details')} className="bg-[#1C212E] border border-[#2A3143] p-5 rounded-2xl flex flex-col justify-between h-[140px] cursor-pointer hover:border-[#3B4255] transition">
                    <div className="flex justify-between items-center mb-2">
                       <span className="text-[10px] bg-green-500/20 text-green-400 px-3 py-1 rounded-full font-bold uppercase tracking-widest">Delivery</span>
                       <span className="font-bold font-mono">$45</span>
                    </div>
                    <div>
                       <h3 className="font-bold text-white mb-1 leading-tight">Express Courier</h3>
                       <p className="text-xs text-slate-400 leading-relaxed">Deliver a parcel from the local post office to 4th Street. Must have a vehicle.</p>
                    </div>
                 </div>

                 {/* Nearby Card 2 */}
                 <div onClick={() => navigate('/job-details')} className="bg-[#1C212E] border border-[#2A3143] p-5 rounded-2xl flex flex-col justify-between h-[140px] cursor-pointer hover:border-[#3B4255] transition">
                    <div className="flex justify-between items-center mb-2">
                       <span className="text-[10px] bg-amber-500/20 text-amber-500 px-3 py-1 rounded-full font-bold uppercase tracking-widest">Manual</span>
                       <span className="font-bold font-mono">$20/hr</span>
                    </div>
                    <div>
                       <h3 className="font-bold text-white mb-1 leading-tight">Backyard Cleanup</h3>
                       <p className="text-xs text-slate-400 leading-relaxed">Moving branches and old furniture to a dumpster. Heavy lifting required.</p>
                    </div>
                 </div>

              </div>
           </div>

        </div>

        {/* Right Column */}
        <div className="space-y-6">
           
           {/* Live Zone Card */}
           <div className="bg-green-600/40 border border-green-500/30 rounded-2xl h-48 relative overflow-hidden p-6 flex items-center">
              {/* Fake Map Grid Background */}
              <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #22c55e 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
              
              <div className="bg-[#151923]/90 backdrop-blur border border-[#2A3143] rounded-xl p-5 z-10 w-full">
                 <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs font-bold tracking-widest uppercase">Live Zone: Active</span>
                 </div>
                 <p className="text-[11px] text-slate-300 leading-relaxed">
                   12 high-demand tasks within 2 miles of your current location.
                 </p>
              </div>
           </div>

           {/* Recent Activity */}
           <div className="bg-[#151923] border border-[#2A3143] rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
              
              <div className="space-y-6 mb-8">
                 {/* Activity Item 1 */}
                 <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#818CF8]/10 flex items-center justify-center flex-shrink-0">
                       <CheckCircle2 size={16} className="text-[#818CF8]" />
                    </div>
                    <div>
                       <p className="text-sm font-semibold text-white mb-1 leading-tight">Payment released for <span className="font-bold">Logo Design</span></p>
                       <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">12:45 PM • TRANSACTION #9284</p>
                    </div>
                 </div>

                 {/* Activity Item 2 */}
                 <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                       <MessageSquare size={14} className="text-amber-500" fill="currentColor" />
                    </div>
                    <div>
                       <p className="text-sm font-semibold text-white mb-1 leading-tight">New message from <span className="font-bold">Priya Nair</span></p>
                       <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">11:20 AM • "Hey, are you still available..."</p>
                    </div>
                 </div>

                 {/* Activity Item 3 */}
                 <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                       <Star size={14} className="text-green-500" fill="currentColor" />
                    </div>
                    <div>
                       <p className="text-sm font-semibold text-white mb-1 leading-tight">You received a <span className="font-bold">5-star rating</span></p>
                       <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">YESTERDAY • "Perfect work, very professional!"</p>
                    </div>
                 </div>
              </div>

              <button className="w-full py-3 rounded-xl border border-[#2A3143] bg-[#11131A] hover:bg-[#1C212E] text-white font-bold transition text-sm">
                 Activity History
              </button>
           </div>
           
        </div>

      </div>

    </div>
  );
};

export default Dashboard;
