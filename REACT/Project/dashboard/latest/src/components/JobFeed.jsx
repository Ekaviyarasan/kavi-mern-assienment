import { jobsData } from '../data/jobsData';
import JobCard from './JobCard';

const JobFeed = ({ setCurrentView }) => {
  return (
    <div className="flex-1 overflow-y-auto bg-[#0B0F19] text-white p-8">
      
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-green-400 text-xs font-bold tracking-widest uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Live Job Feed
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">
            Discover New <span className="text-[#818CF8]">Hustles</span>
          </h1>
          
          <p className="text-slate-400 text-lg max-w-2xl">
            Real-time opportunities in your neighborhood. Curated for your skills and location.
          </p>
        </div>

        {/* Filters */}
        <div className="flex gap-3 mb-8">
          <button className="px-6 py-2 rounded-full bg-green-500 text-black font-semibold text-sm hover:bg-green-400 transition">
            All Gigs
          </button>
          <button className="px-6 py-2 rounded-full bg-[#1F2937] text-slate-300 font-medium text-sm hover:bg-[#374151] transition border border-transparent hover:border-slate-600">
            Delivery
          </button>
          <button className="px-6 py-2 rounded-full bg-[#1F2937] text-slate-300 font-medium text-sm hover:bg-[#374151] transition border border-transparent hover:border-slate-600">
            Design
          </button>
          <button className="px-6 py-2 rounded-full bg-[#1F2937] text-slate-300 font-medium text-sm hover:bg-[#374151] transition border border-transparent hover:border-slate-600">
            Tech
          </button>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {jobsData.map(job => (
            <JobCard key={job.id} job={job} setCurrentView={setCurrentView} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default JobFeed;
