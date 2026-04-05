import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const searchHistoryKey = 'jobzenix_search_history';

const SearchHistory = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);

  const loadHistory = () => {
    const stored = JSON.parse(localStorage.getItem(searchHistoryKey) || '[]');
    setHistory(stored);
  };

  useEffect(() => {
    loadHistory();
  }, []);

  const clearHistory = () => {
    localStorage.removeItem(searchHistoryKey);
    setHistory([]);
  };

  const uniqueSearches = new Set(history.map(item => item.term)).size;
  const totalResults = history.reduce((sum, item) => sum + item.results, 0);
  const averageResults = history.length ? Math.round(totalResults / history.length) : 0;

  return (
    <div className="flex-1 overflow-y-auto bg-[#0B0F19] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <button onClick={() => navigate('/marketplace')} className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#374151] bg-[#11131A] px-4 py-2 text-sm text-slate-300 hover:bg-[#1F2937] transition">
              <ArrowLeft size={16} /> Back to Marketplace
            </button>
            <p className="text-xs uppercase tracking-[0.32em] text-green-400 font-bold mb-3">Search History</p>
            <h1 className="text-4xl font-extrabold tracking-tight">Jobzenix Search Analytics</h1>
            <p className="text-slate-400 max-w-2xl mt-3">
              Your local search history is saved in browser storage for fast review. See trends, results, and the exact queries you used.
            </p>
          </div>
          <button onClick={clearHistory} className="rounded-full bg-[#818CF8] px-5 py-3 text-sm font-semibold text-black hover:bg-[#6366F1] transition">
            Clear History
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="rounded-3xl border border-[#2A3143] bg-[#11131A] p-6">
            <p className="text-slate-400 uppercase tracking-widest text-[10px] mb-3">Total saved searches</p>
            <p className="text-3xl font-bold text-white">{history.length}</p>
          </div>
          <div className="rounded-3xl border border-[#2A3143] bg-[#11131A] p-6">
            <p className="text-slate-400 uppercase tracking-widest text-[10px] mb-3">Unique queries</p>
            <p className="text-3xl font-bold text-white">{uniqueSearches}</p>
          </div>
          <div className="rounded-3xl border border-[#2A3143] bg-[#11131A] p-6">
            <p className="text-slate-400 uppercase tracking-widest text-[10px] mb-3">Average results</p>
            <p className="text-3xl font-bold text-white">{averageResults}</p>
          </div>
        </div>

        <div className="rounded-3xl border border-[#2A3143] bg-[#11131A] p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">Full Local Search Log</h2>
              <p className="text-slate-400 text-sm mt-1">Last {history.length} queries stored in your browser.</p>
            </div>
          </div>

          {history.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-[#374151] bg-[#0B0F19] p-10 text-center text-slate-500">
              No search history saved yet. Use the Jobzenix marketplace search to start logging queries.
            </div>
          ) : (
            <div className="space-y-4">
              {history.map((item, index) => (
                <div key={`${item.term}-${item.time}-${index}`} className="rounded-3xl border border-[#2A3143] bg-[#0F172A] p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <p className="text-sm text-slate-400 uppercase tracking-widest">Query</p>
                      <p className="text-lg font-semibold text-white">{item.term}</p>
                    </div>
                    <div className="flex flex-wrap gap-4 text-slate-400 text-xs">
                      <span>{new Date(item.time).toLocaleString()}</span>
                      <span>{item.results} results</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchHistory;
