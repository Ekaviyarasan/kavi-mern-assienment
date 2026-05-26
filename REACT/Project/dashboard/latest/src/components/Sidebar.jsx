import { LayoutDashboard, Compass, Briefcase, MessageSquare, BarChart2, Plus, Settings, HelpCircle, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Parse route to determine active icon
  let currentView = location.pathname.replace('/', '') || 'dashboard';
  if (currentView === 'job-details') currentView = 'marketplace';
  if (currentView === 'applied-jobs' || currentView === 'candidates') currentView = 'candidates';

  return (
    <div className="w-64 flex-shrink-0 bg-white/5 h-screen flex flex-col justify-between border-r border-white/10 px-4 py-6 text-white/70 backdrop-blur-sm">
      
      {/* Top Section */}
      <div>
        <div className="mb-8 px-2">
          <div className="flex items-center gap-3">
            <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=32&h=32&fit=crop&crop=center" alt="Jobzenix Logo" className="w-8 h-8 rounded" />
            <h1 className="text-white text-xl font-bold tracking-tight">Jobzenix</h1>
          </div>
          <p className="text-[10px] tracking-widest font-semibold mt-1 uppercase text-white/40">Find Jobs in India</p>
        </div>

        <nav className="space-y-1">
          <button 
            onClick={() => navigate('/dashboard')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium ${currentView === 'dashboard' ? 'bg-white/10 text-white relative' : 'hover:bg-white/5'}`}
          >
            {currentView === 'dashboard' && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-md"></div>}
            <LayoutDashboard size={20} />
            Dashboard
          </button>
          
          <button 
            onClick={() => navigate('/marketplace')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium ${currentView === 'marketplace' ? 'bg-white/10 text-white relative' : 'hover:bg-white/5'}`}
          >
            {currentView === 'marketplace' && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-md"></div>}
            <Compass size={20} />
            Marketplace
          </button>
          
          <button 
            onClick={() => navigate('/my-gigs')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium ${currentView === 'my-gigs' ? 'bg-white/10 text-white relative' : 'hover:bg-white/5'}`}
          >
            {currentView === 'my-gigs' && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-md"></div>}
            <Briefcase size={20} />
            My Gigs
          </button>
          
          <button 
            onClick={() => navigate('/candidates')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium text-left ${currentView === 'candidates' ? 'bg-white/10 text-white relative' : 'hover:bg-white/5'}`}
          >
            {currentView === 'candidates' && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-md"></div>}
            <Briefcase size={20} />
            Candidates
          </button>
          
          <button 
            onClick={() => navigate('/messages')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium text-left ${currentView === 'messages' ? 'bg-white/10 text-white relative' : 'hover:bg-white/5'}`}
          >
            {currentView === 'messages' && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-md"></div>}
            <MessageSquare size={20} />
            Messages
          </button>
          
          <button 
            onClick={() => navigate('/profile')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium text-left ${currentView === 'profile' ? 'bg-white/10 text-white relative' : 'hover:bg-white/5'}`}
          >
            {currentView === 'profile' && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-md"></div>}
            <User size={20} />
            Profile
          </button>
          
          <button 
            onClick={() => navigate('/search-history')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium text-left mt-2 ${currentView === 'search-history' ? 'bg-white/10 text-white relative' : 'hover:bg-white/5'} border-t border-white/10 pt-4`}
          >
            {currentView === 'search-history' && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-md"></div>}
            <BarChart2 size={20} />
            Analytics
          </button>
        </nav>
      </div>

      {/* Bottom Section */}
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
  );
};

export default Sidebar;
