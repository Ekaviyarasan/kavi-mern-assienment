import { LayoutDashboard, Compass, Briefcase, MessageSquare, BarChart2, Plus, Settings, HelpCircle, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Parse route to determine active icon
  let currentView = location.pathname.replace('/', '') || 'dashboard';
  if (currentView === 'job-details') currentView = 'marketplace';

  return (
    <div className="w-64 flex-shrink-0 bg-[#11131A] h-screen flex flex-col justify-between border-r border-[#1F2937] px-4 py-6 text-slate-400">
      
      {/* Top Section */}
      <div>
        <div className="mb-8 px-2">
          <h1 className="text-[#818CF8] text-xl font-bold tracking-tight">Local Hustle</h1>
          <p className="text-[10px] tracking-widest font-semibold mt-1 uppercase text-slate-500">Premium Gig Network</p>
        </div>

        <nav className="space-y-1">
          <button 
            onClick={() => navigate('/dashboard')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium ${currentView === 'dashboard' ? 'bg-[#1E1B4B]/50 text-[#818CF8] relative' : 'hover:bg-white/5'}`}
          >
            {currentView === 'dashboard' && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#818CF8] rounded-r-md"></div>}
            <LayoutDashboard size={20} />
            Dashboard
          </button>
          
          <button 
            onClick={() => navigate('/marketplace')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium ${currentView === 'marketplace' ? 'bg-[#1E1B4B]/50 text-[#818CF8] relative' : 'hover:bg-white/5'}`}
          >
            {currentView === 'marketplace' && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#818CF8] rounded-r-md"></div>}
            <Compass size={20} />
            Marketplace
          </button>
          
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors font-medium text-left">
            <Briefcase size={20} />
            My Gigs
          </button>
          
          <button 
            onClick={() => navigate('/messages')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium text-left ${currentView === 'messages' ? 'bg-[#1E1B4B]/50 text-[#818CF8] relative' : 'hover:bg-white/5'}`}
          >
            {currentView === 'messages' && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#818CF8] rounded-r-md"></div>}
            <MessageSquare size={20} />
            Messages
          </button>
          
          <button 
            onClick={() => navigate('/profile')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium text-left ${currentView === 'profile' ? 'bg-[#1E1B4B]/50 text-[#818CF8] relative' : 'hover:bg-white/5'}`}
          >
            {currentView === 'profile' && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#818CF8] rounded-r-md"></div>}
            <User size={20} />
            Profile
          </button>
          
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors font-medium text-left mt-2 border-t border-[#1F2937]/50 pt-4">
            <BarChart2 size={20} />
            Analytics
          </button>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="space-y-6">
        <button onClick={() => navigate('/post-job')} className="w-full bg-[#818CF8] hover:bg-[#6366F1] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors shadow-[0_0_15px_rgba(129,140,248,0.2)]">
          <Plus size={18} strokeWidth={3} />
          Post a Hustle
        </button>

        <div className="space-y-1 pt-4 border-t border-[#1F2937]/60">
          <button className="w-full flex items-center gap-3 px-3 py-2 text-sm hover:text-slate-200 transition-colors text-left">
            <Settings size={18} />
            Settings
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 text-sm hover:text-slate-200 transition-colors text-left">
            <HelpCircle size={18} />
            Help
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Sidebar;
