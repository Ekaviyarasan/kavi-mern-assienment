import { useState } from 'react';
import { Mail, Lock, User, ArrowRight, ShieldCheck } from 'lucide-react';

const Auth = ({ setCurrentView }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleAuthAction = (e) => {
    e.preventDefault();
    // In a real app, logic goes here.
    // For this prototype, instantly route the user into the primary application.
    setCurrentView('dashboard');
  };

  return (
    <div className="flex-1 flex flex-col h-screen bg-[#0B0F19] text-white relative overflow-hidden items-center justify-center p-6 selection:bg-[#818CF8] selection:text-white">
      
      {/* Background Stylings */}
      <div className="absolute top-0 w-full h-full pointer-events-none opacity-20">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-[150px]"></div>
         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[150px]"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
         
         {/* Top Branding */}
         <div className="text-center mb-10">
            <h1 className="text-3xl font-black tracking-tight mb-2">
               Local <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818CF8] to-[#C084FC]">Hustle</span>
            </h1>
            <p className="text-slate-400 font-medium">The premium network for local talent.</p>
         </div>

         {/* Form Card */}
         <div className="bg-[#11131A]/80 backdrop-blur-xl border border-[#1F2937] rounded-3xl shadow-2xl overflow-hidden shadow-[#818CF8]/5">
            
            {/* Toggle Header */}
            <div className="flex w-full border-b border-[#1F2937]/60">
               <button 
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-5 text-sm font-bold tracking-wide transition relative ${isLogin ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}
               >
                  Sign In
                  {isLogin && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#818CF8] to-purple-500"></div>}
               </button>
               <button 
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-5 text-sm font-bold tracking-wide transition relative ${!isLogin ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}
               >
                  Create Account
                  {!isLogin && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#818CF8] to-purple-500"></div>}
               </button>
            </div>

            <form onSubmit={handleAuthAction} className="p-8 space-y-6">
               
               <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-1">{isLogin ? 'Welcome back' : 'Join the network'}</h2>
                  <p className="text-sm text-slate-400">{isLogin ? 'Enter your details to access your dashboard.' : 'Start earning and hiring in your area today.'}</p>
               </div>

               {/* Full Name Input (Only on Sign Up) */}
               {!isLogin && (
                  <div className="space-y-2">
                     <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest pl-1">Full Name</label>
                     <div className="relative">
                        <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input 
                           type="text" 
                           required 
                           placeholder="Julian Vance" 
                           className="w-full bg-[#151923] border border-[#2A3143] text-white text-base rounded-xl pl-12 pr-5 py-3.5 focus:outline-none focus:border-[#818CF8] focus:ring-1 focus:ring-[#818CF8] transition-colors placeholder:text-slate-600 font-medium"
                        />
                     </div>
                  </div>
               )}

               {/* Email Input */}
               <div className="space-y-2">
                  <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest pl-1">Email Address</label>
                  <div className="relative">
                     <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                     <input 
                        type="email" 
                        required 
                        placeholder="you@example.com" 
                        className="w-full bg-[#151923] border border-[#2A3143] text-white text-base rounded-xl pl-12 pr-5 py-3.5 focus:outline-none focus:border-[#818CF8] focus:ring-1 focus:ring-[#818CF8] transition-colors placeholder:text-slate-600 font-medium"
                     />
                  </div>
               </div>

               {/* Password Input */}
               <div className="space-y-2">
                  <div className="flex justify-between items-center pr-1">
                     <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest pl-1">Password</label>
                     {isLogin && <a href="#" className="text-[10px] text-[#818CF8] hover:underline font-bold">Forgot?</a>}
                  </div>
                  <div className="relative">
                     <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                     <input 
                        type="password" 
                        required 
                        placeholder="••••••••" 
                        className="w-full bg-[#151923] border border-[#2A3143] text-white text-base rounded-xl pl-12 pr-5 py-3.5 focus:outline-none focus:border-[#818CF8] focus:ring-1 focus:ring-[#818CF8] transition-colors placeholder:text-slate-600 font-bold tracking-widest"
                     />
                  </div>
               </div>

               {/* Terms Checkbox (Only on Sign Up) */}
               {!isLogin && (
                  <div className="flex items-center gap-3 bg-[#151923] p-3 rounded-lg border border-[#1F2937]/50 mt-2">
                     <ShieldCheck size={20} className="text-[#818CF8]" />
                     <p className="text-xs text-slate-400 leading-tight">By creating an account, you agree to our <a href="#" className="text-slate-200 underline">Terms of Service</a> & <a href="#" className="text-slate-200 underline">Privacy Policy</a>.</p>
                  </div>
               )}

               {/* Submit Button */}
               <div className="pt-4">
                  <button type="submit" className="w-full py-4 rounded-xl bg-[#818CF8] hover:bg-[#6366F1] text-white font-bold transition flex items-center justify-center gap-2 group shadow-[0_4px_20px_rgba(129,140,248,0.3)]">
                     {isLogin ? 'Sign In' : 'Create Account'}
                     <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
               </div>

               {/* Back to Landing */}
               <div className="text-center pt-2">
                  <button type="button" onClick={() => setCurrentView('landing')} className="text-xs text-slate-500 hover:text-white font-bold uppercase tracking-wider transition">
                     ← Back to Home
                  </button>
               </div>

            </form>
         </div>
      </div>

    </div>
  );
};

export default Auth;
