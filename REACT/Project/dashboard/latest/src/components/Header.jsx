import { Search, Bell, MessageSquare, User } from 'lucide-react';

const Header = () => {
  return (
    <div className="h-20 border-b border-white/10 bg-[#0B0F19] px-8 flex items-center justify-between sticky top-0 z-10 w-full">
      {/* Search Bar */}
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
        <input 
          type="text" 
          placeholder="Search hustles..." 
          className="w-full bg-white/5 border border-white/20 text-white text-sm rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-white/40 transition-colors placeholder-white/40"
        />
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-6">
        <button className="text-white/60 hover:text-white transition">
           <Bell size={20} />
        </button>
        <button className="text-white/60 hover:text-white transition">
           <MessageSquare size={20} />
        </button>
        
        <div className="w-px h-6 bg-white/20"></div>
        
        <button className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full overflow-hidden ring-2 ring-transparent hover:ring-white/40 transition">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="User Avatar" className="w-full h-full rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default Header;
