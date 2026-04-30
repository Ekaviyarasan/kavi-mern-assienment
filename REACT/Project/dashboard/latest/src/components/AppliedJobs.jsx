import { useState, useEffect } from 'react';
import JobCard from './JobCard';

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    // Load applied jobs from localStorage
    const stored = localStorage.getItem('appliedJobs');
    if (stored) {
      setAppliedJobs(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="flex-1 overflow-y-auto bg-[#0B0F19] text-white p-8">
      <div className="max-w-7xl mx-auto rounded-[32px] border border-white/10 bg-[#0B0F19]/95 p-8 shadow-2xl shadow-slate-950/40">
        {/* Header Area */}
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">
            Your <span className="text-white">Applied Jobs</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Track the jobs you've applied to across India and their status.
          </p>
        </div>

        {appliedJobs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-white/60 text-lg">You haven't applied to any jobs yet.</p>
            <p className="text-white/50 mt-2">Start browsing jobs across Tamil Nadu and Kerala in the marketplace!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {appliedJobs.map(job => (
              <JobCard key={job.id} job={job} isApplied={true} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;