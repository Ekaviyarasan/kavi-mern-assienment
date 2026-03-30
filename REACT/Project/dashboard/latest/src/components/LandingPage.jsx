import { Bell, MessageSquare, User, ArrowRight, Zap, Shield, Wallet, MapPin, Search } from 'lucide-react';

const LandingPage = ({ setCurrentView }) => {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white font-sans overflow-y-auto overflow-x-hidden selection:bg-[#818CF8] selection:text-white">
      
      {/* 1. Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0B0F19]/80 backdrop-blur-md border-b border-[#1F2937]/60 px-8 h-20 flex items-center justify-between">
         {/* Logo */}
         <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight cursor-pointer hover:text-slate-200 transition">
              TechChennaiHub
            </h1>
         </div>

         {/* Center Links */}
         <div className="hidden md:flex gap-8 items-center text-sm font-semibold">
            <button onClick={() => setCurrentView('dashboard')} className="text-white hover:text-[#818CF8] transition">Dashboard</button>
            <button onClick={() => setCurrentView('marketplace')} className="text-slate-400 hover:text-white transition">Marketplace</button>
            <button className="text-slate-400 hover:text-white transition">My Gigs</button>
         </div>

         {/* Right Actions */}
         <div className="flex items-center gap-6">
            <button className="text-slate-400 hover:text-white transition"><Bell size={18} /></button>
            <button className="text-slate-400 hover:text-white transition"><MessageSquare size={18} /></button>
            <div className="w-px h-6 bg-[#1F2937]/80"></div>
            <button className="w-8 h-8 bg-[#2A3143] rounded-full flex items-center justify-center ring-2 hover:ring-[#818CF8] ring-transparent transition">
              <User size={16} className="text-slate-300" />
            </button>
         </div>
      </nav>

      <main className="pt-32 pb-20">
         
         {/* 2. Hero Section */}
         <section className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center mt-12 mb-32">
            
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#2A3143] bg-[#151923] text-xs font-bold tracking-[0.2em] uppercase text-slate-400 mb-8">
               NEW ENTERPRISE Tech IS HERE
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
               Find Tech Help <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818CF8] to-[#C084FC] italic pe-2">Instantly.</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
               The premium network for local talent. Whether you need a hand or you're lending one, we make the connection seamless, secure, and fast.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-24">
               <button onClick={() => setCurrentView('marketplace')} className="px-8 py-4 rounded-xl bg-[#818CF8] hover:bg-[#6366F1] text-white font-bold transition flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(129,140,248,0.2)]">
                  Post a Job <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </button>
               <button onClick={() => setCurrentView('marketplace')} className="px-8 py-4 rounded-xl bg-[#1C212E] hover:bg-[#2A3143] border border-[#2A3143] text-white font-bold transition">
                  Find Work
               </button>
            </div>

            {/* Dashboard Mockup Placeholder */}
            <div className="w-full max-w-5xl rounded-t-3xl border border-[#2A3143] bg-[#151923] p-4 pb-0 overflow-hidden shadow-2xl relative">
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#0B0F19] z-10 pointer-events-none"></div>
               <div className="w-full bg-[#11131A] rounded-t-2xl border border-b-0 border-[#2A3143] h-96 p-8 relative flex flex-col gap-8 opacity-80">
                  {/* Fake UI Elements */}
                  <div className="w-full flex gap-6">
                     <div className="h-40 bg-[#1C212E] border border-[#2A3143] rounded-xl flex-1 relative overflow-hidden">
                        <svg className="absolute bottom-0 w-full h-24 text-[#818CF8]/20" viewBox="0 0 100 100" preserveAspectRatio="none">
                           <path d="M0,100 C20,80 40,90 60,60 C80,30 90,40 100,20 L100,100 Z" fill="currentColor"></path>
                        </svg>
                     </div>
                     <div className="h-40 bg-[#1C212E] border border-[#2A3143] rounded-xl flex-1 relative overflow-hidden">
                        <svg className="absolute bottom-0 w-full h-24 text-green-500/20" viewBox="0 0 100 100" preserveAspectRatio="none">
                           <path d="M0,100 C20,90 40,60 60,80 C80,100 90,70 100,50 L100,100 Z" fill="currentColor"></path>
                        </svg>
                     </div>
                     <div className="h-40 bg-[#1C212E] border border-[#2A3143] rounded-xl flex-1 relative overflow-hidden">
                        <svg className="absolute bottom-0 w-full h-24 text-amber-500/20" viewBox="0 0 100 100" preserveAspectRatio="none">
                           <path d="M0,100 C30,40 50,50 70,30 C90,10 95,20 100,10 L100,100 Z" fill="currentColor"></path>
                        </svg>
                     </div>
                  </div>
                  <div className="w-full flex gap-6">
                     <div className="h-32 bg-[#1C212E] border border-[#2A3143] rounded-xl w-64"></div>
                     <div className="h-32 bg-[#1C212E] border border-[#2A3143] rounded-xl flex-1"></div>
                  </div>
               </div>
            </div>

         </section>

         {/* 3. Features Section */}
         <section className="max-w-7xl mx-auto px-6 mb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               
               {/* Feature 1 */}
               <div className="bg-[#151923] border border-[#2A3143] rounded-3xl p-10 hover:border-[#3B4255] transition flex flex-col md:h-96">
                  <div className="w-12 h-12 bg-[#818CF8]/10 rounded-xl flex items-center justify-center mb-6">
                     <Zap className="text-[#818CF8]" size={24} fill="currentColor" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">Real-time Matching</h3>
                  <p className="text-slate-400 font-medium leading-relaxed max-w-sm">
                     Our kinetic engine connects you with vetted professionals within minutes, not hours. High precision, low friction.
                  </p>
                  <div className="mt-auto flex gap-3">
                     <span className="text-[10px] font-bold tracking-widest bg-green-500/10 text-green-400 px-3 py-1.5 rounded-full uppercase">Active Now</span>
                     <span className="text-[10px] font-bold tracking-widest bg-[#818CF8]/10 text-[#818CF8] px-3 py-1.5 rounded-full uppercase">Local Reach</span>
                  </div>
               </div>

               {/* Feature 2 */}
               <div className="bg-[#151923] border border-[#2A3143] rounded-3xl p-10 hover:border-[#3B4255] transition flex flex-col md:h-96">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                     <Shield className="text-green-500" size={24} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">Trusted Network</h3>
                  <p className="text-slate-400 font-medium leading-relaxed max-w-sm">
                     Every hustler is identity-verified and background checked for your peace of mind.
                  </p>
               </div>

               {/* Feature 3 */}
               <div className="bg-[#151923] border border-[#2A3143] rounded-3xl p-10 hover:border-[#3B4255] transition flex flex-col md:h-80">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6">
                     <Wallet className="text-amber-500" size={24} fill="currentColor" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">Secure Escrow</h3>
                  <p className="text-slate-400 font-medium leading-relaxed max-w-sm">
                     Payments are only released when you're 100% satisfied with the hustle.
                  </p>
               </div>

               {/* Feature 4 */}
               <div className="bg-[#151923] border border-[#2A3143] rounded-3xl p-10 hover:border-[#3B4255] transition flex flex-col md:flex-row gap-8 md:h-80 md:col-span-1 overflow-hidden relative">
                  <div className="flex-1 z-10">
                     <h3 className="text-2xl font-bold mb-4 tracking-tight">Hyperlocal Insights</h3>
                     <p className="text-slate-400 font-medium leading-relaxed mb-6">
                        Understand market rates in your specific neighborhood with our Berkeley Mono-powered analytics engine.
                     </p>
                     <div className="space-y-2 font-mono text-xs font-bold text-slate-300 tracking-wider">
                        <div className="flex items-center gap-2"><span className="text-[#818CF8]">›</span> AVG_RATE_NYC: $45.50/hr</div>
                        <div className="flex items-center gap-2"><span className="text-[#818CF8]">›</span> TRENDING: LANDSCAPING (+12%)</div>
                     </div>
                  </div>
                  <div className="flex-1 bg-[#11131A] border border-[#1F2937] rounded-xl flex items-center justify-center z-10 relative overflow-hidden">
                     {/* Fake Map Grid Background */}
                     <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #818CF8 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
                     <MapPin size={32} className="text-[#6366F1] drop-shadow-[0_0_15px_rgba(99,102,241,0.5)] z-10" fill="currentColor" />
                  </div>
               </div>

            </div>
         </section>

         {/* 4. Testimonials Section */}
         <section className="border-t border-b border-[#1F2937]/50 bg-[#11131A]/30 py-32 mb-32">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center">
               
               <div>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight">
                     Built for the <br/>
                     <span className="text-[#818CF8]">Modern Worker.</span>
                  </h2>
                  <p className="text-lg text-slate-400 max-w-md leading-relaxed font-medium">
                     See why thousands of locals trust Local Hustle to power their daily tasks and professional growth.
                  </p>
               </div>

               <div className="flex flex-col sm:flex-row gap-6">
                  
                  {/* Testimonial Card 1 */}
                  <div className="bg-[#151923] border border-[#2A3143] rounded-2xl p-8 flex-1 sm:translate-y-8 hover:-translate-y-2 transition-transform duration-300">
                     <p className="text-slate-300 italic font-medium leading-relaxed mb-8">
                        "The UI is cleaner than any other marketplace I've used. I posted a job for a plumber and had three verified pros messaging me within 10 minutes."
                     </p>
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold ring-2 ring-[#0B0F19]">S</div>
                        <div>
                           <p className="text-sm font-bold text-white leading-tight">Sarah Jenkins</p>
                           <p className="text-[11px] text-slate-500 font-semibold tracking-wider uppercase">Homeowner, Austin</p>
                        </div>
                     </div>
                  </div>

                  {/* Testimonial Card 2 */}
                  <div className="bg-[#151923] border border-[#2A3143] rounded-2xl p-8 flex-1 hover:-translate-y-2 transition-transform duration-300">
                     <p className="text-slate-300 italic font-medium leading-relaxed mb-8">
                        "Finally a tool that treats gig work with the respect it deserves. The analytics help me price my services perfectly for my zip code."
                     </p>
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold ring-2 ring-[#0B0F19]">M</div>
                        <div>
                           <p className="text-sm font-bold text-white leading-tight">Marcus Thorne</p>
                           <p className="text-[11px] text-slate-500 font-semibold tracking-wider uppercase">Freelance Handyman</p>
                        </div>
                     </div>
                  </div>

               </div>
               
            </div>
         </section>

         {/* 5. CTA Area */}
         <section className="max-w-4xl mx-auto px-6 text-center mb-32">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-10">
               Ready to start your Tech Journy?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
               <button onClick={() => setCurrentView('auth')} className="px-8 py-4 w-full sm:w-auto rounded-full bg-white hover:bg-slate-200 text-[#0B0F19] font-bold transition">
                  Get Started Now
               </button>
               <button onClick={() => setCurrentView('marketplace')} className="px-8 py-4 w-full sm:w-auto rounded-full bg-[#151923] hover:bg-[#1C212E] border border-[#2A3143] text-white font-bold transition">
                  View All Gigs
               </button>
            </div>
         </section>

      </main>

      {/* 6. Footer */}
      <footer className="border-t border-[#1F2937]/50 pt-20 pb-10 px-8 bg-[#0B0F19]">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
               <h2 className="text-white text-lg font-bold tracking-tight mb-4">TechChennaiHub</h2>
               <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-xs">
                  Connecting human potential to hyper-local needs since 2018.
               </p>
            </div>
            
            <div>
               <h4 className="text-[10px] font-bold tracking-widest text-[#818CF8] uppercase mb-6">Platform</h4>
               <ul className="space-y-4 text-sm font-medium text-slate-400">
                  <li><a href="#" className="hover:text-white transition">How it works</a></li>
                  <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition">Security</a></li>
               </ul>
            </div>

            <div>
               <h4 className="text-[10px] font-bold tracking-widest text-[#818CF8] uppercase mb-6">Community</h4>
               <ul className="space-y-4 text-sm font-medium text-slate-400">
                  <li><a href="#" className="hover:text-white transition">Success Stories</a></li>
                  <li><a href="#" className="hover:text-white transition">Trust & Safety</a></li>
                  <li><a href="#" className="hover:text-white transition">Help Center</a></li>
               </ul>
            </div>

            <div>
               <h4 className="text-[10px] font-bold tracking-widest text-[#818CF8] uppercase mb-6">Company</h4>
               <ul className="space-y-4 text-sm font-medium text-slate-400">
                  <li><a href="#" className="hover:text-white transition">About</a></li>
                  <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                  <li><a href="#" className="hover:text-white transition">Terms</a></li>
               </ul>
            </div>
         </div>

         <div className="max-w-7xl mx-auto border-t border-[#1F2937]/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase">
            <p>© 2018  TechChennaiHub.</p>
            <p>BUILT WITH PRECISION AT 40.7128° N, 74.0060° W</p>
         </div>
      </footer>

    </div>
  );
};

export default LandingPage;
