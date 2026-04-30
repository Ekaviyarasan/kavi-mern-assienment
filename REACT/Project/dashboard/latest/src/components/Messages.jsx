import { Search, Bell, MessageSquare, User, Video, Phone, MoreVertical, FileText, Download, Plus, Smile, Send } from 'lucide-react';

const Messages = () => {
  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-[#0B0F19] text-white">
      
      {/* Top Header specific to Messages */}
      <div className="h-20 border-b border-[#1F2937]/60 px-8 flex flex-shrink-0 items-center justify-between sticky top-0 z-10 w-full bg-[#0B0F19]">
        <h1 className="text-xl font-bold tracking-tight">Messages</h1>

        {/* Right Side Actions */}
        <div className="flex items-center gap-6">
          {/* Search Bar */}
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            <input 
              type="text" 
              placeholder="Search chats..." 
              className="w-full bg-[#151923] border border-[#1F2937]/60 text-slate-300 text-sm rounded-xl pl-10 pr-4 py-2 outline-none focus:border-[#6366F1] transition-colors"
            />
          </div>
          
          <button className="text-slate-400 hover:text-white transition">
             <Bell size={20} />
          </button>
          <button className="text-slate-400 hover:text-white transition">
             <MessageSquare size={20} />
          </button>
          
          <div className="w-px h-6 bg-[#1F2937]/80"></div>
          
          <button className="flex items-center justify-center w-8 h-8 bg-[#2A3143] rounded-full overflow-hidden ring-2 ring-transparent hover:ring-[#818CF8] transition">
            <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face" alt="User Avatar" className="w-full h-full rounded-full" />
          </button>
        </div>
      </div>

      {/* Main Dual Pane Content */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* LEFT PANE: Contacts List */}
        <div className="w-80 flex-shrink-0 border-r border-[#1F2937]/60 flex flex-col bg-[#11131A] relative">
           
           <div className="flex items-center justify-between p-4 border-b border-[#1F2937]/60">
             <button className="flex-1 text-center text-xs font-bold tracking-widest text-[#818CF8] bg-[#1E1B4B]/50 py-2.5 rounded-l-lg border border-[#3B4255]">
               FOCUSED
             </button>
             <button className="flex-1 text-center text-xs font-bold tracking-widest text-slate-500 py-2.5 hover:text-slate-300 transition border-y border-r border-transparent">
               ARCHIVE
             </button>
           </div>

           <div className="flex-1 overflow-y-auto w-full">
              
              {/* Active Chat Item */}
              <div className="p-4 bg-[#1E1B4B]/20 relative cursor-pointer border-b border-[#1F2937]/40 flex gap-4">
                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#818CF8]"></div>
                 
                 <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-0.5">
                       <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=48&h=48&fit=crop&crop=face" alt="Priya Nair" className="w-full h-full rounded-full border-2 border-[#151923]" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-[#151923] rounded-full"></div>
                 </div>

                 <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <div className="flex justify-between items-center mb-1">
                       <h3 className="font-bold text-white truncate text-sm">Priya Nair</h3>
                       <span className="text-[10px] text-[#818CF8] font-bold">2m</span>
                    </div>
                    <p className="text-xs text-slate-400 truncate">The design project is looking great so fa...</p>
                 </div>
              </div>

              {/* Chat Item 2 */}
              <div className="p-4 hover:bg-[#151923] cursor-pointer border-b border-[#1F2937]/40 flex gap-4 transition">
                 <div className="relative">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face" alt="Arun Menon" className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-sm font-bold overflow-hidden border-2 border-[#151923]" />
                 </div>

                 <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <div className="flex justify-between items-center mb-1">
                       <h3 className="font-bold text-slate-300 truncate text-sm">Arun Menon</h3>
                       <span className="text-[10px] text-slate-500 font-bold">1h</span>
                    </div>
                    <p className="text-xs text-slate-500 truncate">Hey, are you still available for the bike rep...</p>
                 </div>
              </div>

              {/* Chat Item 3 */}
              <div className="p-4 hover:bg-[#151923] cursor-pointer border-b border-[#1F2937]/40 flex gap-4 transition">
                 <div className="relative">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop&crop=face" alt="Kavya Iyer" className="w-12 h-12 rounded-full bg-amber-600/20 text-amber-500 flex items-center justify-center text-sm font-bold overflow-hidden" />
                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-[#151923] rounded-full"></div>
                 </div>

                 <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <div className="flex justify-between items-center mb-1">
                       <h3 className="font-bold text-slate-300 truncate text-sm">Kavya Iyer</h3>
                       <span className="text-[10px] text-slate-500 font-bold">3h</span>
                    </div>
                    <p className="text-xs text-slate-500 truncate">Payment received! Thanks for the quick h...</p>
                 </div>
              </div>

              {/* Chat Item 4 */}
              <div className="p-4 hover:bg-[#151923] cursor-pointer flex gap-4 transition">
                 <div className="relative">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face" alt="Vikram Singh" className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-sm font-bold overflow-hidden border-2 border-[#151923]" />
                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-[#151923] rounded-full"></div>
                 </div>

                 <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <div className="flex justify-between items-center mb-1">
                       <h3 className="font-bold text-slate-300 truncate text-sm">Vikram Nair</h3>
                       <span className="text-[10px] text-slate-500 font-bold">Yesterday</span>
                    </div>
                    <p className="text-xs text-slate-500 truncate">I'll send the location details in a bit.</p>
                 </div>
              </div>

           </div>
        </div>

        {/* RIGHT PANE: Active Chat */}
        <div className="flex-1 flex flex-col bg-[#0B0F19] relative">
           
           {/* Active Chat Header */}
           <div className="h-[88px] border-b border-[#1F2937]/60 flex items-center justify-between px-8 bg-[#11131A]">
              <div className="flex items-center gap-4">
                 <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-0.5">
                       <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face" alt="Rajesh Nair" className="w-full h-full bg-[#0B0F19] rounded-full flex items-center justify-center text-xs font-bold overflow-hidden border-2 border-[#151923]" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#11131A] rounded-full"></div>
                 </div>
                 <div>
                    <h2 className="text-lg font-bold">Rajesh Nair</h2>
                    <p className="text-[10px] font-bold tracking-widest text-green-500 uppercase">Online Now</p>
                 </div>
              </div>

              <div className="flex items-center gap-6 text-slate-400">
                 <button className="hover:text-white transition"><Video size={20} fill="currentColor" /></button>
                 <button className="hover:text-white transition"><Phone size={20} fill="currentColor" /></button>
                 <button className="hover:text-white transition"><MoreVertical size={20} /></button>
              </div>
           </div>

           {/* Transcript */}
           <div className="flex-1 overflow-y-auto px-10 py-8 space-y-6">
              
              {/* Date Divider */}
              <div className="flex justify-center my-6">
                 <span className="bg-[#1C212E] text-slate-400 text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">TODAY</span>
              </div>

              {/* Message Block: Receiver */}
              <div className="flex gap-4 items-start max-w-2xl">
                 <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold overflow-hidden flex-shrink-0 mt-1">S</div>
                 <div className="flex flex-col gap-1">
                    <div className="bg-[#1C212E] border border-[#2A3143] text-slate-200 p-4 rounded-2xl rounded-tl-sm text-sm font-medium leading-relaxed">
                       Hey! I saw your portfolio on the Jobzenix marketplace. I'm looking for someone to help with some brand identity work for my new coffee shop.
                    </div>
                    <span className="text-[10px] text-slate-500 font-bold px-1">10:42 AM</span>
                 </div>
              </div>

              {/* Message Block: Sender */}
              <div className="flex gap-4 items-start max-w-2xl ml-auto justify-end">
                 <div className="flex flex-col gap-1 items-end">
                    <div className="bg-[#818CF8] bg-gradient-to-br from-[#818CF8] to-[#6366F1] text-white p-4 rounded-2xl rounded-tr-sm text-sm font-medium leading-relaxed shadow-[0_4px_15px_rgba(129,140,248,0.2)]">
                       Hi Ajith! I'd love to help with that. Coffee shops are one of my favorite niches to work in. What kind of vibe are you going for?
                    </div>
                    <span className="text-[10px] text-slate-500 font-bold px-1 flex items-center gap-1">10:45 AM <span className="text-[#818CF8]">✓✓</span></span>
                 </div>
                 <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-[#11131A] text-[10px] font-black tracking-tighter flex-shrink-0 mt-1">ME</div>
              </div>

              {/* Message Block: Receiver */}
              <div className="flex gap-4 items-start max-w-2xl">
                 <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold overflow-hidden flex-shrink-0 mt-1">S</div>
                 <div className="flex flex-col gap-1">
                    <div className="bg-[#1C212E] border border-[#2A3143] text-slate-200 p-4 rounded-2xl rounded-tl-sm text-sm font-medium leading-relaxed">
                       Think "Mid-century modern meets tropical garden." Lots of teals, woods, and organic shapes. 🌿
                    </div>
                    
                    {/* File Attachment Bubble */}
                    <div className="bg-[#151923] border border-[#2A3143] text-slate-200 p-3 rounded-xl rounded-tl-sm flex items-center justify-between gap-6 cursor-pointer hover:border-[#3B4255] transition mt-2">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-[#818CF8]/10 flex items-center justify-center flex-shrink-0">
                             <FileText size={20} className="text-[#818CF8]" fill="currentColor" />
                          </div>
                          <div>
                             <h4 className="font-bold text-sm text-white mb-0.5">Moodboard_V1.pdf</h4>
                             <p className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">2.4 MB • PDF</p>
                          </div>
                       </div>
                       <button className="text-slate-400 hover:text-white transition p-2">
                          <Download size={18} />
                       </button>
                    </div>

                    <span className="text-[10px] text-slate-500 font-bold px-1 mt-1">10:48 AM</span>
                 </div>
              </div>

              {/* Typing Indicator */}
              <div className="flex gap-4 items-center">
                 <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[8px] font-bold flex-shrink-0">S</div>
                 <div className="bg-[#1C212E] border border-[#2A3143] px-4 py-2.5 rounded-2xl rounded-tl-sm flex items-center gap-1.5 object-contain hover:cursor-default">
                    <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                 </div>
              </div>

           </div>

           {/* Message Input Container */}
           <div className="p-6 bg-[#0B0F19] border-t border-[#1F2937]/50 mt-auto">
              <div className="bg-[#151923] border border-[#2A3143] rounded-2xl p-3 flex items-center gap-4 shadow-lg focus-within:border-[#3B4255] transition">
                 <button className="w-8 h-8 rounded-full bg-[#1C212E] flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#2A3143] transition flex-shrink-0">
                    <Plus size={18} />
                 </button>
                 
                 <input 
                   type="text" 
                   placeholder="Type your message here..." 
                   className="flex-1 bg-transparent border-none text-slate-300 text-sm font-medium outline-none placeholder:text-slate-600"
                 />
                 
                 <button className="text-slate-500 hover:text-white transition flex-shrink-0 mr-2">
                    <Smile size={20} />
                 </button>
                 
                 <button className="w-12 h-10 rounded-xl bg-[#818CF8] hover:bg-[#6366F1] flex items-center justify-center text-white transition flex-shrink-0 shadow-[0_0_15px_rgba(129,140,248,0.3)]">
                    <Send size={18} className="ml-1" fill="currentColor" />
                 </button>
              </div>
           </div>

        </div>

      </div>

    </div>
  );
};

export default Messages;
