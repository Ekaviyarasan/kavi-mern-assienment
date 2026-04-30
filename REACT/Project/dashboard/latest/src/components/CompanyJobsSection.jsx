import { Briefcase, AlertCircle } from 'lucide-react';
import CompanyJobCard from './CompanyJobCard';

const CompanyJobsSection = ({ jobs, companyName }) => {
  return (
    <div className="my-12">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Briefcase size={32} className="text-white" />
          <div>
            <h2 className="text-3xl font-extrabold text-white">
              Open <span className="text-white/80">Positions</span>
            </h2>
            <p className="text-white/60 text-sm mt-1">
              {jobs.length} active job{jobs.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </div>

      {/* Jobs Grid */}
      {jobs.length === 0 ? (
        <div className="bg-white/5 border border-dashed border-white/20 rounded-2xl p-12 text-center backdrop-blur-sm">
          <AlertCircle size={48} className="text-white/30 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">No Open Positions</h3>
          <p className="text-white/60">
            {companyName} doesn't have any open positions at the moment. Check back later!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {jobs.map(job => (
            <CompanyJobCard
              key={job.id}
              job={job}
              companyName={companyName}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CompanyJobsSection;
