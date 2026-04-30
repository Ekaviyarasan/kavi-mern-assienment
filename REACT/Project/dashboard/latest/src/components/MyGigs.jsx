import { useNavigate } from 'react-router-dom';
import { Briefcase, Sparkles, ArrowRight } from 'lucide-react';
import JobCard from './JobCard';
import { jobsData } from '../data/jobsData';

const MyGigs = () => {
  const navigate = useNavigate();
  const myGigs = jobsData.filter(job => [1, 4, 7].includes(job.id));
  const recommended = jobsData.filter(job => [2, 3, 6].includes(job.id));

  return (
    <div className="flex-1 overflow-y-auto bg-[#0B0F19] text-white p-8">
      <div className="max-w-7xl mx-auto rounded-[32px] border border-white/10 bg-[#0B0F19]/95 p-8 shadow-2xl shadow-slate-950/40">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-[#818CF8] font-bold mb-3">
              <Briefcase size={16} />
              My Gigs
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight mb-3">Your active gigs and recent postings</h1>
            <p className="text-white/70 max-w-2xl leading-relaxed">
              Manage your current gigs, view related marketplace listings, and keep track of your best opportunities.
            </p>
          </div>
          <button
            onClick={() => navigate('/marketplace')}
            className="inline-flex items-center gap-2 rounded-2xl bg-white text-black px-6 py-3 font-semibold hover:bg-white/90 transition"
          >
            Browse Marketplace
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_0.3fr] gap-6">
          <div className="space-y-8">
            <section className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold">Active Gigs</h2>
                  <p className="text-white/60 mt-1">Your current assignments and posts that are live.</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 border border-white/15">
                  <Sparkles size={16} /> Top picks
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {myGigs.map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </section>

            <section className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">Marketplace recommendations</h3>
              <p className="text-white/60 mb-6">Jobs selected to match your skill set and nearby demand.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recommended.map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Your summary</h3>
              <div className="grid gap-4">
                <div className="rounded-2xl bg-white/10 p-4 border border-white/10">
                  <p className="text-sm text-white/60">Total gigs posted</p>
                  <p className="text-3xl font-bold mt-2">{myGigs.length}</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 border border-white/10">
                  <p className="text-sm text-white/60">Jobs recommended</p>
                  <p className="text-3xl font-bold mt-2">{recommended.length}</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 border border-white/10">
                  <p className="text-sm text-white/60">Saved progress</p>
                  <p className="text-3xl font-bold mt-2">92%</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default MyGigs;
