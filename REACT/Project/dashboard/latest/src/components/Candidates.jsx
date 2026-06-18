import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, X } from 'lucide-react';
import { deleteApplication, getApplications } from '../lib/api';

const Candidates = () => {
  const navigate = useNavigate();
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('jobhub_user') || 'null');

    if (!storedUser) {
      navigate('/auth');
      return;
    }

    const loadApplications = async () => {
      try {
        const data = await getApplications(storedUser.email);
        setCandidates(data);
      } catch (error) {
        console.error('Unable to load applications:', error);
      }
    };

    loadApplications();
  }, [navigate]);

  const handleUnapply = async (applicationId) => {
    try {
      await deleteApplication(applicationId);
      setCandidates((prev) => prev.filter((job) => job.id !== applicationId));
    } catch (error) {
      console.error('Unable to remove application:', error);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto bg-[#0B0F19] text-white p-8">
      <div className="max-w-7xl mx-auto rounded-[32px] border border-white/10 bg-[#0B0F19]/95 p-8 shadow-2xl shadow-slate-950/40">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">Candidates</h1>
          <p className="text-white/60 text-lg max-w-2xl">
            These are the jobs you have applied to. You can unapply from any listing and keep your candidate list up to date.
          </p>
        </div>

        {candidates.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
            <p className="text-white/80 text-lg font-medium">No candidates yet.</p>
            <p className="text-white/50 mt-3 mb-6">
              Apply to jobs from the marketplace to see them here.
            </p>
            <button
              onClick={() => navigate('/marketplace')}
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-semibold transition hover:bg-white/90"
            >
              Browse Marketplace
              <ChevronRight size={18} />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {candidates.map((job) => {
              const companyLabel = job.companyName || job.company || 'Company';
              return (
                <div key={job.id} className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 transition hover:border-white/20">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <p className="text-xs text-white/60 uppercase tracking-[0.24em] font-semibold mb-2">{job.category || 'General'}</p>
                      <h2 className="text-2xl font-bold text-white leading-tight">{job.title}</h2>
                    </div>
                    <button
                      onClick={() => handleUnapply(job.id)}
                      className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white/70 hover:bg-white/10 hover:text-white transition"
                      title="Unapply"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  {job.description && (
                    <p className="text-sm text-white/70 leading-relaxed mb-5 line-clamp-3">
                      {job.description}
                    </p>
                  )}

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-white/70">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <p className="uppercase tracking-[0.24em] text-[10px] font-semibold mb-2">Budget</p>
                      <p className="font-bold text-white">{job.budget || job.rate || '₹0'}</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <p className="uppercase tracking-[0.24em] text-[10px] font-semibold mb-2">Location</p>
                      <p className="font-bold text-white">{job.location || job.distance || job.estimatedTime || 'Remote'}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.3em] text-white/50 font-semibold mb-1">Company</p>
                      <p className="text-white/80 font-medium">{companyLabel}</p>
                    </div>
                    <button
                      onClick={() => navigate('/job-details', { state: { job } })}
                      className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-semibold transition hover:bg-white/90"
                    >
                      View Details
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Candidates;
