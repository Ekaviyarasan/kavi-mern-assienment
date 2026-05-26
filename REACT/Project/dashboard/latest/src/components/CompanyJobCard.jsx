import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, MapPin, Clock, DollarSign, ChevronRight, CheckCircle } from 'lucide-react';

const CompanyJobCard = ({ job, companyName }) => {
  const navigate = useNavigate();
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('appliedJobs');
    if (stored) {
      const appliedJobs = JSON.parse(stored);
      setApplied(appliedJobs.some(appliedJob => appliedJob.id === job.id));
    }
  }, [job.id]);

  const handleApply = (e) => {
    e.stopPropagation();
    const stored = localStorage.getItem('appliedJobs');
    let appliedJobs = stored ? JSON.parse(stored) : [];
    
    if (!appliedJobs.some(appliedJob => appliedJob.id === job.id)) {
      const appliedJob = {
        ...job,
        appliedAt: new Date().toLocaleString(),
        applicantName: 'You',
        applicationStatus: 'Applied'
      };
      appliedJobs.push(appliedJob);
      localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
      setApplied(true);
    }
  };

  return (
    <div className="bg-white/5 border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all hover:shadow-lg hover:shadow-white/10 group backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="text-xs text-white/60 font-bold tracking-widest uppercase mb-2">
            {job.category}
          </p>
          <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">
            {job.title}
          </h3>
        </div>
        {applied && (
          <CheckCircle size={20} className="text-green-500 flex-shrink-0 ml-2" />
        )}
      </div>

      {/* Description if available */}
      {job.description && (
        <p className="text-sm text-white/70 mb-4 line-clamp-2 leading-relaxed">
          {job.description}
        </p>
      )}

      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {/* Budget */}
        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
          <div className="flex items-center gap-2 mb-1">
            <DollarSign size={14} className="text-white" />
            <p className="text-xs text-white/60 font-semibold">Budget</p>
          </div>
          <p className="text-white font-bold text-sm">
            {job.budget || job.rate || '₹0'}
          </p>
        </div>

        {/* Time/Location */}
        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
          <div className="flex items-center gap-2 mb-1">
            {job.estimatedTime ? (
              <>
                <Clock size={14} className="text-white" />
                <p className="text-xs text-white/60 font-semibold">Duration</p>
              </>
            ) : (
              <>
                <MapPin size={14} className="text-white" />
                <p className="text-xs text-white/60 font-semibold">Location</p>
              </>
            )}
          </div>
          <p className="text-white font-bold text-sm">
            {job.estimatedTime || job.distance || job.location || 'Remote'}
          </p>
        </div>
      </div>

      {/* Posted Status */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/20">
        <span className="text-xs text-white/60">
          {job.status}
        </span>
        <span className="text-xs bg-white/10 text-white px-2 py-1 rounded-full border border-white/20">
          Posted by {companyName}
        </span>
      </div>

      {/* Action Button */}
      <button
        onClick={handleApply}
        disabled={applied}
        className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 text-sm
          ${applied 
            ? 'bg-white/10 text-white border border-white/30' 
            : 'bg-white text-black hover:bg-white/90 shadow-lg shadow-white/20'
          }
        `}
      >
        {applied ? (
          <>
            <CheckCircle size={16} />
            Applied
          </>
        ) : (
          <>
            Apply Now
            <ChevronRight size={16} />
          </>
        )}
      </button>
    </div>
  );
};

export default CompanyJobCard;
