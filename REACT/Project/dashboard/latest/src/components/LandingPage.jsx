import { Bell, MessageSquare, User, ArrowRight, Zap, Shield, Wallet, MapPin, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50 text-gray-900 font-sans overflow-y-auto overflow-x-hidden selection:bg-emerald-500 selection:text-white relative">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-300 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-pink-300 rounded-full opacity-25 animate-ping"></div>

        {/* Additional floating elements */}
        <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-emerald-400 rounded-lg opacity-15 animate-spin" style={{animationDuration: '8s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-8 h-8 bg-purple-400 rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-cyan-400 transform rotate-45 opacity-25 animate-pulse" style={{animationDelay: '2s'}}></div>

        {/* Gradient orbs */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-emerald-200 to-purple-200 rounded-full opacity-10 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-pink-200 to-cyan-200 rounded-full opacity-15 blur-lg animate-bounce" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'float 20s ease-in-out infinite'
        }}></div>
      </div>
      
      {/* 1. Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200/60 px-8 h-20 flex items-center justify-between shadow-xl transition-all duration-300 hover:shadow-2xl">
         {/* Logo */}
         <div className="flex items-center gap-2 group">
            <h1 className="text-2xl font-bold tracking-tight cursor-pointer transition-all duration-300 bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 group-hover:from-purple-600 group-hover:to-emerald-600">
              Jobzenix
            </h1>
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse group-hover:animate-ping"></div>
         </div>

         {/* Center Links */}
         <div className="hidden md:flex gap-8 items-center text-sm font-semibold">
            <button onClick={() => navigate('/dashboard')} className="relative text-gray-700 hover:text-emerald-600 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-emerald-50 group">
              Dashboard
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => navigate('/marketplace')} className="relative text-gray-500 hover:text-gray-700 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gray-50 group">
              Marketplace
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => navigate('/marketplace')} className="relative text-gray-500 hover:text-gray-700 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gray-50 group">
              My Gigs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
         </div>

         {/* Right Actions */}
         <div className="flex items-center gap-6">
            <button onClick={() => navigate('/dashboard')} className="text-gray-500 hover:text-gray-700 transition-all duration-300 p-2 rounded-lg hover:bg-gray-50 relative group">
              <Bell size={18} className="group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="absolute inset-0 bg-emerald-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </button>
            <button onClick={() => navigate('/messages')} className="text-gray-500 hover:text-gray-700 transition-all duration-300 p-2 rounded-lg hover:bg-gray-50 relative group">
              <MessageSquare size={18} className="group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
              <span className="absolute inset-0 bg-purple-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </button>
            <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
            <button onClick={() => navigate('/auth')} className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center ring-2 hover:ring-emerald-500 ring-transparent transition-all duration-300 hover:scale-110 group">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="User Avatar" className="w-8 h-8 rounded-full group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-emerald-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </button>
         </div>
      </nav>

      <main className="pt-32 pb-20">
         
         {/* 2. Hero Section */}
         <section className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center mt-12 mb-32 relative">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
               <div className="absolute top-10 left-10 w-16 h-16 bg-emerald-200/30 rounded-full animate-float"></div>
               <div className="absolute top-20 right-20 w-12 h-12 bg-purple-200/40 rounded-lg animate-float-delayed"></div>
               <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-pink-200/50 rounded-full animate-float-slow"></div>
            </div>

            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-xs font-bold tracking-[0.2em] uppercase text-emerald-700 mb-8 animate-fade-in-up shadow-lg hover:shadow-xl transition-shadow duration-300">
               JOBZENIX TOP JOB PLATFORM
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight animate-fade-in-up animation-delay-200">
               Find Your Dream Job <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-purple-600 italic pe-2 hover:from-purple-600 hover:to-emerald-600 transition-all duration-500">in Tamil Nadu & Kerala.</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium animate-fade-in-up animation-delay-400">
               Connect with top companies across Tamil Nadu and Kerala. From startups in Chennai to corporations in Kochi, find opportunities that match your skills and aspirations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-24 animate-fade-in-up animation-delay-600">
               <button onClick={() => navigate('/marketplace')} className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(16,185,129,0.3)] transform hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                  Browse Jobs <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
               </button>
               <button onClick={() => navigate('/marketplace')} className="px-8 py-4 rounded-xl bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
                  Post a Job
                  <span className="inline-block ml-2 transform group-hover:rotate-12 transition-transform duration-300">✨</span>
               </button>
            </div>

            {/* Hero Image */}
            <div className="mb-16">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop" alt="Indian professionals working" className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl" />
            </div>

            {/* Dashboard Mockup Placeholder */}
            <div className="w-full max-w-5xl rounded-t-3xl border border-gray-200 bg-white p-4 pb-0 overflow-hidden shadow-2xl relative group hover:shadow-3xl transition-all duration-500">
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-50/30 to-cyan-50/20 z-10 pointer-events-none group-hover:from-purple-50/50 group-hover:to-cyan-50/30 transition-all duration-500"></div>
               <div className="w-full bg-gray-50 rounded-t-2xl border border-b-0 border-gray-200 h-96 p-8 relative flex flex-col gap-8 opacity-80 group-hover:opacity-95 transition-opacity duration-500">

                  {/* Top Stats Row */}
                  <div className="w-full flex gap-6">
                     <div className="h-40 bg-white border border-gray-200 rounded-xl flex-1 p-6 relative overflow-hidden group/stat hover:border-emerald-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
                        <div className="flex items-center justify-between mb-4">
                           <h4 className="text-sm font-semibold text-gray-700 group-hover/stat:text-emerald-700 transition-colors">Active Jobs</h4>
                           <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center group-hover/stat:bg-emerald-200 transition-colors">
                             <Search className="w-4 h-4 text-emerald-600" />
                           </div>
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-2 group-hover/stat:scale-110 transition-transform origin-left">24</div>
                        <div className="text-xs text-emerald-600 font-medium mb-3">+12% from last month</div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                           <div className="bg-emerald-500 h-1.5 rounded-full w-3/4 group-hover/stat:w-full transition-all duration-1000"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-emerald-50 to-emerald-100 opacity-50 group-hover/stat:opacity-70 transition-opacity"></div>
                     </div>

                     <div className="h-40 bg-white border border-gray-200 rounded-xl flex-1 p-6 relative overflow-hidden group/stat hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
                        <div className="flex items-center justify-between mb-4">
                           <h4 className="text-sm font-semibold text-gray-700 group-hover/stat:text-blue-700 transition-colors">Applications</h4>
                           <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover/stat:bg-blue-200 transition-colors">
                             <User className="w-4 h-4 text-blue-600" />
                           </div>
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-2 group-hover/stat:scale-110 transition-transform origin-left">156</div>
                        <div className="text-xs text-blue-600 font-medium mb-3">+8% from last week</div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                           <div className="bg-blue-500 h-1.5 rounded-full w-2/3 group-hover/stat:w-5/6 transition-all duration-1000"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-blue-50 to-blue-100 opacity-50 group-hover/stat:opacity-70 transition-opacity"></div>
                     </div>

                     <div className="h-40 bg-white border border-gray-200 rounded-xl flex-1 p-6 relative overflow-hidden group/stat hover:border-purple-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
                        <div className="flex items-center justify-between mb-4">
                           <h4 className="text-sm font-semibold text-gray-700 group-hover/stat:text-purple-700 transition-colors">Completed</h4>
                           <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover/stat:bg-purple-200 transition-colors">
                             <Shield className="w-4 h-4 text-purple-600" />
                           </div>
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-2 group-hover/stat:scale-110 transition-transform origin-left">89</div>
                        <div className="text-xs text-purple-600 font-medium mb-3">+15% success rate</div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                           <div className="bg-purple-500 h-1.5 rounded-full w-4/5 group-hover/stat:w-full transition-all duration-1000"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-purple-50 to-purple-100 opacity-50 group-hover/stat:opacity-70 transition-opacity"></div>
                     </div>
                  </div>

                  {/* Bottom Content Row */}
                  <div className="w-full flex gap-6">
                     {/* Recent Jobs */}
                     <div className="h-32 bg-white border border-gray-200 rounded-xl w-64 p-4 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group/jobs">
                        <h4 className="text-sm font-semibold text-gray-700 mb-3 group-hover/jobs:text-emerald-700 transition-colors">Recent Jobs</h4>
                        <div className="space-y-2">
                           <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-emerald-50 transition-colors cursor-pointer group/job">
                             <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-xs font-bold text-emerald-700">P</div>
                             <div className="flex-1">
                               <div className="text-xs font-medium text-gray-900 group-hover/job:text-emerald-800 transition-colors">Plumbing Service</div>
                               <div className="text-xs text-gray-500">Chennai • 2h ago</div>
                             </div>
                             <div className="text-xs font-semibold text-emerald-600 group-hover/job:text-emerald-700 transition-colors">₹2,500</div>
                           </div>
                           <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer group/job">
                             <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-700">W</div>
                             <div className="flex-1">
                               <div className="text-xs font-medium text-gray-900 group-hover/job:text-blue-800 transition-colors">Web Development</div>
                               <div className="text-xs text-gray-500">Kochi • 4h ago</div>
                             </div>
                             <div className="text-xs font-semibold text-blue-600 group-hover/job:text-blue-700 transition-colors">₹15,000</div>
                           </div>
                        </div>
                     </div>

                     {/* Activity Feed */}
                     <div className="h-32 bg-white border border-gray-200 rounded-xl flex-1 p-4 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group/feed">
                        <h4 className="text-sm font-semibold text-gray-700 mb-3 group-hover/feed:text-purple-700 transition-colors">Activity Feed</h4>
                        <div className="space-y-2">
                           <div className="flex items-start gap-2 p-2 rounded-lg hover:bg-emerald-50 transition-colors cursor-pointer group/activity">
                             <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 group-hover/activity:animate-ping"></div>
                             <div className="flex-1">
                               <div className="text-xs text-gray-900 group-hover/activity:text-emerald-800 transition-colors">New application received for <span className="font-medium text-emerald-600">Electrical Work</span></div>
                               <div className="text-xs text-gray-500">5 min ago</div>
                             </div>
                           </div>
                           <div className="flex items-start gap-2 p-2 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer group/activity">
                             <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 group-hover/activity:animate-pulse"></div>
                             <div className="flex-1">
                               <div className="text-xs text-gray-900 group-hover/activity:text-blue-800 transition-colors">Payment released for <span className="font-medium text-blue-600">Garden Maintenance</span></div>
                               <div className="text-xs text-gray-500">1h ago</div>
                             </div>
                           </div>
                           <div className="flex items-start gap-2 p-2 rounded-lg hover:bg-purple-50 transition-colors cursor-pointer group/activity">
                             <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 group-hover/activity:animate-bounce"></div>
                             <div className="flex-1">
                               <div className="text-xs text-gray-900 group-hover/activity:text-purple-800 transition-colors">Review received: <span className="font-medium text-purple-600">5 stars</span> for completed job</div>
                               <div className="text-xs text-gray-500">2h ago</div>
                             </div>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
            </div>

         </section>

         {/* 3. Features Section */}
         <section className="max-w-7xl mx-auto px-6 mb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               
               {/* Feature 1 */}
               <div className="bg-white border border-gray-200 rounded-3xl p-10 hover:border-emerald-300 transition flex flex-col md:h-96 shadow-lg hover:shadow-xl transform hover:-translate-y-2">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                     <Zap className="text-emerald-600" size={24} fill="currentColor" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight text-gray-900">Real-time Matching</h3>
                  <p className="text-gray-600 font-medium leading-relaxed max-w-sm">
                     Our kinetic engine connects you with vetted professionals within minutes, not hours. High precision, low friction.
                  </p>
                  <div className="mt-auto flex gap-3">
                     <span className="text-[10px] font-bold tracking-widest bg-green-100 text-green-700 px-3 py-1.5 rounded-full uppercase">Active Now</span>
                     <span className="text-[10px] font-bold tracking-widest bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full uppercase">Local Reach</span>
                  </div>
               </div>

               {/* Feature 2 */}
               <div className="bg-white border border-gray-200 rounded-3xl p-10 hover:border-emerald-300 transition flex flex-col md:h-96 shadow-lg hover:shadow-xl transform hover:-translate-y-2">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                     <Shield className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight text-gray-900">Trusted Network</h3>
                  <p className="text-gray-600 font-medium leading-relaxed max-w-sm">
                     Every hustler is identity-verified and background checked for your peace of mind.
                  </p>
               </div>

               {/* Feature 3 */}
               <div className="bg-white border border-gray-200 rounded-3xl p-10 hover:border-emerald-300 transition flex flex-col md:h-80 shadow-lg hover:shadow-xl transform hover:-translate-y-2">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                     <Wallet className="text-amber-600" size={24} fill="currentColor" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight text-gray-900">Secure Escrow</h3>
                  <p className="text-gray-600 font-medium leading-relaxed max-w-sm">
                     Payments are only released when you're 100% satisfied with the hustle.
                  </p>
               </div>

               {/* Feature 4 */}
               <div className="bg-white border border-gray-200 rounded-3xl p-10 hover:border-emerald-300 transition flex flex-col md:flex-row gap-8 md:h-80 md:col-span-1 overflow-hidden relative shadow-lg hover:shadow-xl transform hover:-translate-y-2">
                  <div className="flex-1 z-10">
                     <h3 className="text-2xl font-bold mb-4 tracking-tight text-gray-900">Hyperlocal Insights</h3>
                     <p className="text-gray-600 font-medium leading-relaxed mb-6">
                        Understand market rates in your specific neighborhood with our Berkeley Mono-powered analytics engine.
                     </p>
                     <div className="space-y-2 font-mono text-xs font-bold text-gray-700 tracking-wider">
                        <div className="flex items-center gap-2"><span className="text-emerald-600">›</span> AVG_RATE_NYC: $45.50/hr</div>
                        <div className="flex items-center gap-2"><span className="text-emerald-600">›</span> TRENDING: LANDSCAPING (+12%)</div>
                     </div>
                  </div>
                  <div className="flex-1 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center z-10 relative overflow-hidden">
                     {/* Fake Map Grid Background */}
                     <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #10B981 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
                     <MapPin size={32} className="text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10" fill="currentColor" />
                  </div>
               </div>

            </div>
         </section>

         {/* 4. Testimonials Section */} 
         <section className="border-t border-b border-gray-200 bg-gradient-to-r from-emerald-50 to-purple-50 py-32 mb-32">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center">
               
               <div>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight text-gray-900">
                     Built for the <br/>
                     <span className="text-emerald-600">Modern Worker.</span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-md leading-relaxed font-medium">
                     See why thousands of locals trust Jobzenix to power their daily tasks and professional growth.
                  </p>
               </div>

               <div className="flex flex-col sm:flex-row gap-6">
                  
                  {/* Testimonial Card 1 */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 flex-1 sm:translate-y-8 hover:-translate-y-2 transition-transform duration-300 shadow-lg">
                     <p className="text-gray-700 italic font-medium leading-relaxed mb-8">
                        "The UI is cleaner than any other marketplace I've used. I posted a job for a plumber and had three verified pros messaging me within 10 minutes."
                     </p>
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-bold ring-2 ring-emerald-200 text-emerald-700">R</div>
                        <div>
                           <p className="text-sm font-bold text-gray-900 leading-tight">Rajesh Kumar</p>
                           <p className="text-[11px] text-gray-500 font-semibold tracking-wider uppercase">Homeowner, Chennai</p>
                        </div>
                     </div>
                  </div>

                  {/* Testimonial Card 2 */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 flex-1 hover:-translate-y-2 transition-transform duration-300 shadow-lg">
                     <p className="text-gray-700 italic font-medium leading-relaxed mb-8">
                        "Finally a tool that treats gig work with the respect it deserves. The analytics help me price my services perfectly for my zip code."
                     </p>
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-xs font-bold ring-2 ring-purple-200 text-purple-700">A</div>
                        <div>
                           <p className="text-sm font-bold text-gray-900 leading-tight">Anjali Menon</p>
                           <p className="text-[11px] text-gray-500 font-semibold tracking-wider uppercase">Freelance Developer</p>
                        </div>
                     </div>
                  </div>

               </div>
               
            </div>
         </section>

         {/* 5. CTA Area */}
         <section className="max-w-4xl mx-auto px-6 text-center mb-32">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-10 text-gray-900">
               Ready to start your Jobzenix journey?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
               <button onClick={() => navigate('/auth')} className="px-8 py-4 w-full sm:w-auto rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition transform hover:scale-105 shadow-lg">
                  Get Started Now
               </button>
               <button onClick={() => navigate('/marketplace')} className="px-8 py-4 w-full sm:w-auto rounded-full bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-bold transition transform hover:scale-105 shadow-lg">
                  View All Gigs
               </button>
            </div>
         </section>

      </main>

      {/* 6. Footer */}
      <footer className="border-t border-gray-200 pt-20 pb-10 px-8 bg-gradient-to-r from-gray-50 to-emerald-50">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
               <h2 className="text-gray-900 text-lg font-bold tracking-tight mb-4">Jobzenix</h2>
               <p className="text-gray-600 text-sm font-medium leading-relaxed max-w-xs">
                  Connecting human potential to hyper-local needs across Tamil Nadu and Kerala since 2018.
               </p>
            </div>
            
            <div>
               <h4 className="text-[10px] font-bold tracking-widest text-emerald-600 uppercase mb-6">Platform</h4>
               <ul className="space-y-4 text-sm font-medium text-gray-600">
                  <li><a href="#" className="hover:text-emerald-600 transition">How it works</a></li>
                  <li><a href="#" className="hover:text-emerald-600 transition">Pricing</a></li>
                  <li><a href="#" className="hover:text-emerald-600 transition">Security</a></li>
               </ul>
            </div>

            <div>
               <h4 className="text-[10px] font-bold tracking-widest text-emerald-600 uppercase mb-6">Community</h4>
               <ul className="space-y-4 text-sm font-medium text-gray-600">
                  <li><a href="#" className="hover:text-emerald-600 transition">Success Stories</a></li>
                  <li><a href="#" className="hover:text-emerald-600 transition">Trust & Safety</a></li>
                  <li><a href="#" className="hover:text-emerald-600 transition">Help Center</a></li>
               </ul>
            </div>

            <div>
               <h4 className="text-[10px] font-bold tracking-widest text-emerald-600 uppercase mb-6">Company</h4>
               <ul className="space-y-4 text-sm font-medium text-gray-600">
                  <li><a href="#" className="hover:text-emerald-600 transition">About</a></li>
                  <li><a href="#" className="hover:text-emerald-600 transition">Privacy</a></li>
                  <li><a href="#" className="hover:text-emerald-600 transition">Terms</a></li>
               </ul>
            </div>
         </div>

         <div className="max-w-7xl mx-auto border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono font-bold tracking-widest text-gray-500 uppercase">
            <p>© 2018 Jobzenix.</p>
            <p>BUILT WITH PRECISION AT 40.7128° N, 74.0060° W</p>
         </div>
      </footer>

    </div>
  );
};

export default LandingPage;
