import { 
  Package, MapPin, ChevronRight, PenTool, 
  Map, Clock, Truck, Monitor, PawPrint, Star, Bookmark
} from 'lucide-react';

const iconsMap = {
  Package: Package,
  PenTool: PenTool,
  Shovel: Package, // Map shorthand fallback
  Monitor: Monitor,
  PawPrint: PawPrint
};

const JobCard = ({ job }) => {
  const IconComponent = iconsMap[job.icon] || Package;

  return (
    <div className="bg-[#151923] border border-[#2A3143] rounded-2xl p-6 flex flex-col justify-between hover:border-[#3B4255] transition-colors relative overflow-hidden group">
      
      {/* Top Header Row */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          {job.type !== 'map' && job.icon && (
            <div className={`p-2.5 rounded-lg ${job.iconBgC}`}>
              <IconComponent className={job.iconC} size={22} />
            </div>
          )}
          
          <div>
            <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase flex items-center gap-2">
              {job.category}
              {job.status === 'JUST NOW' && (
               <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full text-[9px]">
                 • JUST NOW
               </span>
              )}
            </p>
          </div>
        </div>

        {job.status !== 'JUST NOW' && (
          <span className="text-xs text-slate-500 font-medium">{job.status}</span>
        )}
      </div>

      {/* Main Content Area based on Type */}

      {/* DEFAULT / DETAILS Type */}
      {(job.type === 'default' || job.type === 'details' || job.type === 'recurring') && (
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-4 pr-12">{job.title}</h3>
          
          {job.type === 'default' && (
            <div className="flex gap-4">
              <div className="bg-[#1C212E] p-3 rounded-xl flex-1">
                <p className="text-[10px] text-slate-500 font-bold mb-1 uppercase tracking-wider">Budget</p>
                <p className="text-white font-bold text-base">{job.budget}</p>
              </div>
              <div className="bg-[#1C212E] p-3 rounded-xl flex-1">
                <p className="text-[10px] text-slate-500 font-bold mb-1 uppercase tracking-wider">Distance</p>
                <p className="text-white font-bold text-base">{job.distance}</p>
              </div>
            </div>
          )}

          {job.type === 'details' && (
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                 <span className="text-slate-400">Estimated Time</span>
                 <span className="text-white font-semibold">{job.estimatedTime}</span>
              </div>
              <div className="flex justify-between text-sm">
                 <span className="text-slate-400">Location</span>
                 <span className="text-white font-semibold">{job.location}</span>
              </div>
              <div className="flex justify-between text-sm">
                 <span className="text-slate-400">Rate</span>
                 <span className="text-white font-semibold">{job.rate}</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* BADGES Type */}
      {job.type === 'badges' && (
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">{job.description}</p>
          <div className="flex flex-wrap gap-2">
            {job.badges.map(badge => (
              <span key={badge} className="text-[10px] bg-[#1C212E] text-slate-300 px-3 py-1 rounded-full font-semibold">
                {badge}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* USER Type */}
      {job.type === 'user' && (
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-4 pr-12">{job.title}</h3>
          <div className="flex items-center gap-3 bg-[#1C212E] p-3 rounded-xl w-max pr-6">
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xs ring-2 ring-[#0B0F19]">
              M
            </div>
            <div>
              <p className="text-sm text-white font-bold leading-tight">{job.user.name}</p>
              <div className="flex text-amber-400 text-[10px]">
                <Star size={10} fill="currentColor" />
                <Star size={10} fill="currentColor" />
                <Star size={10} fill="currentColor" />
                <Star size={10} fill="currentColor" />
                <Star size={10} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MAP Type */}
      {job.type === 'map' && (
        <div className="mb-6 px-4">
           {/* Faked map */}
           <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-600/20 to-transparent flex items-center justify-center">
             <div className="p-2 bg-[#151923] rounded-full drop-shadow-xl mt-4">
                <MapPin size={24} className="text-white" />
             </div>
             <span className="absolute bottom-6 left-6 text-[10px] font-bold tracking-widest bg-[#1A1F2D]/80 backdrop-blur-sm px-2 py-1 rounded border border-[#2A3143]">
               {job.mapLabel}
             </span>
           </div>
           
           <h3 className="text-xl font-bold text-white mt-32 mb-4">{job.title}</h3>
           
           <div className="flex gap-4">
             {job.details.map((d, i) => (
               <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                 {d.icon === 'Clock' && <Clock size={14} className="text-slate-500" />}
                 {d.icon === 'Truck' && <Truck size={14} className="text-slate-500" />}
                 {d.text}
               </div>
             ))}
           </div>
        </div>
      )}

      {/* Bottom Footer Actions */}
      <div className="mt-auto">
        {(job.type === 'default' || job.type === 'user') && (
           <div className="flex items-center justify-between">
              {job.type === 'user' && (
                <div className="text-2xl font-bold text-white">{job.budget}</div>
              )}
              {job.type === 'default' && (
                <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                  <MapPin size={12} /> {job.location}
                </div>
              )}
              
              <button className={`${job.type === 'default' ? 'w-full' : 'px-6'} py-2.5 rounded-xl bg-[#818CF8] hover:bg-[#6366F1] text-white font-bold transition flex justify-center items-center gap-2`}>
                Accept Job
                {job.type === 'default' && <ChevronRight size={16} />}
              </button>
           </div>
        )}

        {job.type === 'details' && (
           <button className="w-full py-3 rounded-xl bg-[#2A3143] hover:bg-[#3B4255] text-white font-bold transition text-sm">
             View Details
           </button>
        )}

        {job.type === 'badges' && (
           <div className="flex items-end justify-between">
             <div>
                <p className="text-[10px] text-slate-500 font-bold mb-1 uppercase tracking-wider">Budget</p>
                <p className="text-2xl font-bold text-white">{job.budget}</p>
             </div>
             <div className="flex gap-2">
                <button className="p-3 rounded-xl bg-[#2A3143] hover:bg-[#3B4255] text-slate-300 transition">
                  <Bookmark size={18} />
                </button>
                <button className="px-6 py-3 rounded-xl bg-[#818CF8] hover:bg-[#6366F1] text-white font-bold transition">
                  Accept
                </button>
             </div>
           </div>
        )}

        {job.type === 'map' && (
           <button className="w-full py-3 rounded-xl bg-[#1C212E] border border-[#2A3143] hover:bg-[#2A3143] text-white font-bold transition text-sm">
             {job.budget} • Apply Now
           </button>
        )}

        {job.type === 'recurring' && (
           <div className="bg-[#0B0F19] rounded-xl p-4 flex items-center justify-between mt-8">
             <div>
                <p className="text-[10px] text-slate-500 font-bold mb-1 uppercase tracking-wider">{job.budgetLabel}</p>
                <p className="text-xl font-bold text-green-400">{job.budget}</p>
             </div>
             <button className="w-10 h-10 rounded-full bg-[#818CF8] flex items-center justify-center text-white hover:bg-[#6366F1] transition shadow-[0_0_15px_rgba(129,140,248,0.4)]">
                 <ChevronRight size={20} />
             </button>
           </div>
        )}
      </div>

    </div>
  );
};

export default JobCard;
