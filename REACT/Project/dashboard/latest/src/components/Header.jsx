import { Search, Bell, MessageSquare, User } from 'lucide-react';

const Header = () => {
  return (
    <div className="h-20 border-b border-[#1F2937]/60 bg-[#0B0F19] px-8 flex items-center justify-between sticky top-0 z-10 w-full">
      {/* Search Bar */}
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
        <input 
          type="text" 
          placeholder="Search hustles..." 
          className="w-full bg-[#151923] border border-[#1F2937]/60 text-slate-300 text-sm rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-[#6366F1] transition-colors"
        />
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-6">
        <button className="text-slate-400 hover:text-white transition">
           <Bell size={20} />
        </button>
        <button className="text-slate-400 hover:text-white transition">
           <MessageSquare size={20} />
        </button>
        
        <div className="w-px h-6 bg-[#1F2937]/80"></div>
        
        <button className="flex items-center justify-center w-8 h-8 bg-[#2A3143] rounded-full overflow-hidden ring-2 ring-transparent hover:ring-[#818CF8] transition">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="User Avatar" className="w-full h-full rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default Header;
