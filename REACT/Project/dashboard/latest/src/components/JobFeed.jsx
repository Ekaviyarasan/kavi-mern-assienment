import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jobsData } from '../data/jobsData';
import JobCard from './JobCard';

const JobFeed = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Jobs');
  const [searchStats, setSearchStats] = useState({
    totalSearches: 0,
    uniqueSearches: 0,
    topSearch: '—',
    lastSearch: '—',
    lastResultCount: 0,
    avgResultCount: 0,
  });
  const navigate = useNavigate();

  const searchHistoryKey = 'jobzenix_search_history';

  const buildSearchStats = (history) => {
    const counts = history.reduce((acc, entry) => {
      acc[entry.term] = (acc[entry.term] || 0) + 1;
      return acc;
    }, {});

    const topSearch = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || '—';

    const uniqueSearches = Object.keys(counts).length;
    const averageResults = history.length ? Math.round(history.reduce((sum, entry) => sum + entry.results, 0) / history.length) : 0;

    return {
      totalSearches: history.length,
      uniqueSearches,
      topSearch,
      lastSearch: history[0]?.term || '—',
      lastResultCount: history[0]?.results || 0,
      avgResultCount: averageResults,
    };
  };

  const handleSearchSubmit = () => {
    const term = searchTerm.trim();
    if (!term) return;

    const results = jobsData.filter(job => {
      const lowerTerm = term.toLowerCase();
      const categoryMatch = job.category?.toLowerCase().includes(lowerTerm);
      const techFallback = (lowerTerm.includes('it') || lowerTerm.includes('tech') || lowerTerm.includes('technology')) && job.category === 'TECHNOLOGY';
      return job.title.toLowerCase().includes(lowerTerm) ||
        job.company?.toLowerCase().includes(lowerTerm) ||
        job.description?.toLowerCase().includes(lowerTerm) ||
        categoryMatch ||
        techFallback;
    }).length;

    const history = JSON.parse(localStorage.getItem(searchHistoryKey) || '[]');
    const updated = [{ term, time: Date.now(), results }, ...history].slice(0, 20);
    localStorage.setItem(searchHistoryKey, JSON.stringify(updated));
    setSearchStats(buildSearchStats(updated));
  };

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem(searchHistoryKey) || '[]');
    setSearchStats(buildSearchStats(history));
  }, []);

  const filteredJobs = jobsData.filter(job => {
    const lowerTerm = searchTerm.toLowerCase();
    const matchesSearch = !lowerTerm ||
      job.title.toLowerCase().includes(lowerTerm) ||
      job.company?.toLowerCase().includes(lowerTerm) ||
      job.description?.toLowerCase().includes(lowerTerm) ||
      job.category?.toLowerCase().includes(lowerTerm) ||
      ((lowerTerm.includes('it') || lowerTerm.includes('tech') || lowerTerm.includes('technology')) && job.category === 'TECHNOLOGY');
    const categoryMap = {
      'Delivery': 'DELIVERY SERVICE',
      'Creative': 'CREATIVE',
      'Tech': 'TECHNOLOGY',
      'IT': 'TECHNOLOGY',
      'Maintenance': 'MAINTENANCE',
      'Teaching': 'TEACHING'
    };
    const matchesCategory = selectedCategory === 'All Jobs' || job.category === categoryMap[selectedCategory] || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const uniqueJobs = Array.from(new Map(filteredJobs.map(job => [job.id, job])).values());
  const isShowingExtraJobs = !searchTerm.trim() && selectedCategory === 'All Jobs';

  return (
    <div className="flex-1 overflow-y-auto bg-[#0B0F19] text-white p-8">
      
      <div className="max-w-7xl mx-auto rounded-4xl border border-white/10 bg-[#0B0F19]/95 p-8 shadow-2xl shadow-slate-950/40">
        {/* Header Area */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-green-400 text-xs font-bold tracking-widest uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Live Job Feed
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">
            Discover New <span className="text-white">IT & Professional Jobs</span>
          </h1>
          
          <p className="text-white/60 text-lg max-w-2xl">
            Jobzenix real-time opportunities across Tamil Nadu and Kerala. Secure, verified roles for candidates and employers in technology and beyond.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Search IT jobs, company roles, or security-focused positions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSearchSubmit();
                }
              }}
              className="flex-1 px-4 py-3 bg-[#1F2937] border border-[#374151] rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#818CF8] focus:border-transparent"
            />
            <button
              onClick={handleSearchSubmit}
              className="px-6 py-3 rounded-lg bg-[#818CF8] hover:bg-[#6366F1] text-white font-semibold transition"
            >
              Search
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-3 mb-8">
          <button 
            onClick={() => setSelectedCategory('All Jobs')}
            className={`px-6 py-2 rounded-full font-semibold text-sm transition ${selectedCategory === 'All Jobs' ? 'bg-green-500 text-black' : 'bg-[#1F2937] text-slate-300 hover:bg-[#374151] border border-transparent hover:border-slate-600'}`}
          >
            All Jobs
          </button>
          <button 
            onClick={() => setSelectedCategory('Delivery')}
            className={`px-6 py-2 rounded-full font-medium text-sm transition ${selectedCategory === 'Delivery' ? 'bg-green-500 text-black' : 'bg-[#1F2937] text-slate-300 hover:bg-[#374151] border border-transparent hover:border-slate-600'}`}
          >
            Delivery
          </button>
          <button 
            onClick={() => setSelectedCategory('Creative')}
            className={`px-6 py-2 rounded-full font-medium text-sm transition ${selectedCategory === 'Creative' ? 'bg-green-500 text-black' : 'bg-[#1F2937] text-slate-300 hover:bg-[#374151] border border-transparent hover:border-slate-600'}`}
          >
            Creative
          </button>
          <button 
            onClick={() => setSelectedCategory('Tech')}
            className={`px-6 py-2 rounded-full font-medium text-sm transition ${selectedCategory === 'Tech' ? 'bg-green-500 text-black' : 'bg-[#1F2937] text-slate-300 hover:bg-[#374151] border border-transparent hover:border-slate-600'}`}
          >
            Tech
          </button>
          <button 
            onClick={() => setSelectedCategory('IT')}
            className={`px-6 py-2 rounded-full font-medium text-sm transition ${selectedCategory === 'IT' ? 'bg-green-500 text-black' : 'bg-[#1F2937] text-slate-300 hover:bg-[#374151] border border-transparent hover:border-slate-600'}`}
          >
            IT
          </button>
          <button 
            onClick={() => setSelectedCategory('Maintenance')}
            className={`px-6 py-2 rounded-full font-medium text-sm transition ${selectedCategory === 'Maintenance' ? 'bg-green-500 text-black' : 'bg-[#1F2937] text-slate-300 hover:bg-[#374151] border border-transparent hover:border-slate-600'}`}
          >
            Maintenance
          </button>
          <button 
            onClick={() => setSelectedCategory('Teaching')}
            className={`px-6 py-2 rounded-full font-medium text-sm transition ${selectedCategory === 'Teaching' ? 'bg-green-500 text-black' : 'bg-[#1F2937] text-slate-300 hover:bg-[#374151] border border-transparent hover:border-slate-600'}`}
          >
            Teaching
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#11131A] rounded-3xl border border-[#2A3143] p-6 text-sm">
            <p className="text-[#818CF8] uppercase tracking-widest font-bold mb-3">Total searches</p>
            <p className="text-white text-3xl font-bold">{searchStats.totalSearches}</p>
          </div>
          <div className="bg-[#11131A] rounded-3xl border border-[#2A3143] p-6 text-sm">
            <p className="text-[#818CF8] uppercase tracking-widest font-bold mb-3">Unique queries</p>
            <p className="text-white text-3xl font-bold">{searchStats.uniqueSearches}</p>
          </div>
          <div className="bg-[#11131A] rounded-3xl border border-[#2A3143] p-6 text-sm">
            <p className="text-[#818CF8] uppercase tracking-widest font-bold mb-3">Average results</p>
            <p className="text-white text-3xl font-bold">{searchStats.avgResultCount}</p>
          </div>
          <div className="bg-[#11131A] rounded-3xl border border-[#2A3143] p-6 text-sm">
            <p className="text-[#818CF8] uppercase tracking-widest font-bold mb-3">Last search</p>
            <p className="text-white text-3xl font-bold">{searchStats.lastSearch}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2 bg-[#11131A] rounded-3xl border border-[#2A3143] p-6 text-sm">
            <p className="text-[#818CF8] uppercase tracking-widest font-bold mb-3">Top search</p>
            <p className="text-slate-300 leading-relaxed text-lg font-semibold">{searchStats.topSearch}</p>
          </div>
          <div className="bg-[#11131A] rounded-3xl border border-[#2A3143] p-6 text-sm">
            <p className="text-[#818CF8] uppercase tracking-widest font-bold mb-3">Review history</p>
            <button onClick={() => navigate('/search-history')} className="w-full rounded-2xl bg-[#818CF8] px-5 py-3 text-sm font-semibold text-black hover:bg-[#6366F1] transition">
              View Full History
            </button>
          </div>
        </div>

        {/* Masonry / Grid */}
        <div className="mb-6">
          {isShowingExtraJobs ? (
            <div className="rounded-3xl border border-white/10 bg-[#11131A] p-5 text-sm text-white/70">
              <p className="font-semibold text-white mb-1">Explore extra jobs</p>
              <p>Browse extra IT and technology opportunities alongside the full marketplace feed.</p>
            </div>
          ) : (
            <div className="rounded-3xl border border-white/10 bg-[#11131A] p-5 text-sm text-white/70">
              <p className="font-semibold text-white mb-1">
                Showing {uniqueJobs.length} unique {uniqueJobs.length === 1 ? 'result' : 'results'}
                {searchTerm.trim() ? ` for "${searchTerm.trim()}"` : ''}
              </p>
              {uniqueJobs.length === 0 && (
                <p>No jobs matched your search. Try another keyword or clear the filter.</p>
              )}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {uniqueJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default JobFeed;
