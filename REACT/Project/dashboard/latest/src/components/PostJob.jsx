import { MapPin, DollarSign, Clock, LayoutList, Text, Camera } from 'lucide-react';

const PostJob = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-[#0B0F19] px-10 py-8 text-white">
      
      <div className="max-w-4xl mx-auto rounded-[32px] border border-white/10 bg-[#0B0F19]/95 p-10 shadow-2xl shadow-slate-950/40">
         {/* Top Header */}
         <div className="mb-10 text-center">
            <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-4">
              Post a New <span className="text-[#818CF8]">Hustle</span>
            </h1>
            <p className="text-slate-400 font-medium max-w-lg mx-auto leading-relaxed">
              Describe exactly what you need help with. The more detailed you are, the faster we can match you with the perfect professional.
            </p>
         </div>

         {/* Form Container */}
         <form className="bg-[#151923] border border-[#2A3143] rounded-3xl p-8 lg:p-12 shadow-2xl space-y-8">
            
            {/* 1. Job Title */}
            <div>
               <label className="flex items-center gap-2 text-[10px] text-slate-500 font-bold mb-3 uppercase tracking-widest">
                  <Text size={14} className="text-[#818CF8]" /> Hustle Title
               </label>
               <input 
                 type="text" 
                 placeholder="e.g. Need help packing up 2-bedroom apartment" 
                 className="w-full bg-[#11131A] border border-[#2A3143] text-white text-base rounded-xl px-5 py-4 focus:outline-none focus:border-[#818CF8] focus:ring-1 focus:ring-[#818CF8] transition-colors placeholder:text-slate-600 font-medium"
               />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {/* 2. Category */}
               <div>
                  <label className="flex items-center gap-2 text-[10px] text-slate-500 font-bold mb-3 uppercase tracking-widest">
                     <LayoutList size={14} className="text-amber-500" /> Category
                  </label>
                  <div className="relative">
                     <select className="appearance-none w-full bg-[#11131A] border border-[#2A3143] text-slate-300 text-base rounded-xl px-5 py-4 focus:outline-none focus:border-[#818CF8] focus:ring-1 focus:ring-[#818CF8] transition-colors font-medium cursor-pointer">
                        <option value="" disabled selected>Select a category...</option>
                        <option value="delivery">Delivery & Assembly</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="tech">Technology</option>
                        <option value="cleaning">Cleaning</option>
                        <option value="creative">Creative / Design</option>
                        <option value="other">Other / Custom</option>
                     </select>
                     <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500 font-bold">⌄</div>
                  </div>
               </div>

               {/* 3. Location */}
               <div>
                  <label className="flex items-center gap-2 text-[10px] text-slate-500 font-bold mb-3 uppercase tracking-widest">
                     <MapPin size={14} className="text-green-500" /> Location / Zip Code
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. 90210 or 'Downtown'" 
                    className="w-full bg-[#11131A] border border-[#2A3143] text-white text-base rounded-xl px-5 py-4 focus:outline-none focus:border-[#818CF8] focus:ring-1 focus:ring-[#818CF8] transition-colors placeholder:text-slate-600 font-medium"
                  />
               </div>
            </div>

            {/* 4. Description */}
            <div>
               <label className="flex items-center gap-2 text-[10px] text-slate-500 font-bold mb-3 uppercase tracking-widest">
                  <Text size={14} className="text-[#818CF8]" /> Detailed Description & Requirements
               </label>
               <textarea 
                 rows="5"
                 placeholder="What exactly do you need? Do they need their own tools? Does it require heavy lifting? Any specific timing requirements?" 
                 className="w-full bg-[#11131A] border border-[#2A3143] text-white text-base rounded-xl px-5 py-4 focus:outline-none focus:border-[#818CF8] focus:ring-1 focus:ring-[#818CF8] transition-colors placeholder:text-slate-600 font-medium resize-none"
               ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {/* 5. Budget */}
               <div>
                  <label className="flex items-center gap-2 text-[10px] text-slate-500 font-bold mb-3 uppercase tracking-widest">
                     <DollarSign size={14} className="text-green-500" /> Estimated Payout
                  </label>
                  <div className="relative">
                     <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 font-bold">$</span>
                     <input 
                       type="number" 
                       placeholder="0.00" 
                       className="w-full bg-[#11131A] border border-[#2A3143] text-white text-base rounded-xl pl-9 pr-5 py-4 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors placeholder:text-slate-600 font-bold"
                     />
                  </div>
               </div>

               {/* 6. Time */}
               <div>
                  <label className="flex items-center gap-2 text-[10px] text-slate-500 font-bold mb-3 uppercase tracking-widest">
                     <Clock size={14} className="text-amber-500" /> Estimated Time (Hours)
                  </label>
                  <input 
                    type="number" 
                    placeholder="e.g. 2.5" 
                    className="w-full bg-[#11131A] border border-[#2A3143] text-white text-base rounded-xl px-5 py-4 focus:outline-none focus:border-[#818CF8] focus:ring-1 focus:ring-[#818CF8] transition-colors placeholder:text-slate-600 font-medium"
                  />
               </div>
            </div>

            {/* Photo Upload Placeholder */}
            <div>
               <label className="flex items-center gap-2 text-[10px] text-slate-500 font-bold mb-3 uppercase tracking-widest">
                  <Camera size={14} className="text-slate-400" /> Add Photos (Optional)
               </label>
               <div className="w-full border-2 border-dashed border-[#2A3143] hover:border-[#818CF8] bg-[#11131A] rounded-xl py-10 flex flex-col items-center justify-center transition cursor-pointer group">
                  <div className="w-12 h-12 rounded-full bg-[#1C212E] group-hover:bg-[#818CF8]/20 flex items-center justify-center mb-4 transition">
                     <Camera size={20} className="text-slate-500 group-hover:text-[#818CF8] transition" />
                  </div>
                  <p className="text-slate-300 font-bold mb-1">Click to upload or drag and drop</p>
                  <p className="text-xs text-slate-500">SVG, PNG, JPG or GIF (max. 800x400px)</p>
               </div>
            </div>

            <hr className="border-[#1F2937]/60" />

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end pt-2">
               <button type="button" className="px-8 py-4 rounded-xl font-bold bg-[#1C212E] hover:bg-[#2A3143] text-slate-300 transition">
                  Save as Draft
               </button>
               <button type="button" className="px-10 py-4 rounded-xl font-bold bg-[#818CF8] hover:bg-[#6366F1] text-white transition flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(129,140,248,0.3)]">
                  Publish Hustle
               </button>
            </div>

         </form>

      </div>
    </div>
  );
};

export default PostJob;
