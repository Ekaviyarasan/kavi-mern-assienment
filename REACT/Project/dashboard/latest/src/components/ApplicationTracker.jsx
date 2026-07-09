import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Clock, CheckCircle2, AlertCircle, XCircle, Send, MessageSquare,
  Calendar, MapPin, Briefcase, TrendingUp, Filter, Search, Video
} from 'lucide-react';
import { getApplications } from '../lib/api';

const ApplicationTracker = () => {
  const navigate = useNavigate();
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem('jobhub_user') || 'null');
        const email = storedUser ? storedUser.email : '';
        const data = await getApplications(email);
        
        const mapped = (data || []).map(app => {
          const isInterview = app.applicationStatus === 'Interview';
          const isOffered = app.applicationStatus === 'Offered';
          const isRejected = app.applicationStatus === 'Rejected';
          
          let status = 'applied';
          if (isInterview) status = 'interview';
          if (isOffered) status = 'offered';
          if (isRejected) status = 'rejected';

          let nextAction = 'Under review';
          if (isInterview) {
            nextAction = `F2F Google Meet on ${new Date(app.interviewDateTime).toLocaleString()}`;
          } else if (isOffered) {
            nextAction = 'Offer received - Respond by June 30';
          } else if (isRejected) {
            nextAction = 'Application rejected';
          } else {
            nextAction = 'Awaiting HR response';
          }

          return {
            id: app.id,
            jobTitle: app.title || 'Job Role',
            company: app.companyName || 'Hiring Company',
            status: status,
            appliedDate: app.appliedAt || new Date().toISOString(),
            salary: app.budget || '₹10k - ₹15k',
            location: app.location || 'Remote',
            logo: '🏢',
            stage: isInterview ? 'face-to-face' : 'review',
            nextAction: nextAction,
            interviewMeetLink: app.interviewMeetLink,
            interviewDateTime: app.interviewDateTime,
            interviewerName: app.interviewerName
          };
        });
        
        setApplications(mapped);
      } catch (err) {
        console.error('Failed to load tracker applications:', err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'offered':
        return { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400', label: 'Offered' };
      case 'interview':
        return { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', label: 'Interview' };
      case 'applied':
        return { bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', text: 'text-yellow-400', label: 'Applied' };
      case 'rejected':
        return { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400', label: 'Rejected' };
      default:
        return { bg: 'bg-slate-500/10', border: 'border-slate-500/30', text: 'text-slate-400', label: 'Pending' };
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'offered':
        return <CheckCircle2 size={20} />;
      case 'interview':
        return <Clock size={20} />;
      case 'applied':
        return <Send size={20} />;
      case 'rejected':
        return <XCircle size={20} />;
      default:
        return <AlertCircle size={20} />;
    }
  };

  const filteredApplications = applications.filter(app => {
    const matchesStatus = filterStatus === 'all' || app.status === filterStatus;
    const matchesSearch = app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          app.company.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const stats = {
    applied: applications.filter(a => a.status === 'applied').length,
    interviews: applications.filter(a => a.status === 'interview').length,
    offered: applications.filter(a => a.status === 'offered').length,
    rejected: applications.filter(a => a.status === 'rejected').length
  };

  return (
    <div className="flex-1 overflow-y-auto px-10 py-8 bg-[#0B0F19] text-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold mb-2">Application Tracker</h1>
        <p className="text-slate-400">
          Monitor your job applications and track their progress
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
        <div className="bg-[#1C212E] rounded-xl border border-[#2A3143] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1">Total Applied</p>
              <h3 className="text-3xl font-bold">{applications.length}</h3>
            </div>
            <div className="w-12 h-12 bg-[#818CF8]/10 rounded-lg flex items-center justify-center">
              <Send className="text-[#818CF8]" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-[#1C212E] rounded-xl border border-[#2A3143] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1">Interviews</p>
              <h3 className="text-3xl font-bold text-blue-400">{stats.interviews}</h3>
            </div>
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <Clock className="text-blue-400" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-[#1C212E] rounded-xl border border-[#2A3143] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1">Offers</p>
              <h3 className="text-3xl font-bold text-green-400">{stats.offered}</h3>
            </div>
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="text-green-400" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-[#1C212E] rounded-xl border border-[#2A3143] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1">Success Rate</p>
              <h3 className="text-3xl font-bold text-green-500">
                {Math.round((stats.interviews + stats.offered) / applications.length * 100)}%
              </h3>
            </div>
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
              <TrendingUp className="text-green-500" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search by job title or company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#1C212E] border border-[#2A3143] rounded-lg pl-12 pr-4 py-3 text-white placeholder-slate-500 focus:border-[#818CF8] outline-none transition"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          {['all', 'applied', 'interview', 'offered', 'rejected'].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition ${
                filterStatus === status
                  ? 'bg-[#818CF8] text-white'
                  : 'bg-[#1C212E] border border-[#2A3143] text-slate-300 hover:border-[#818CF8]'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {filteredApplications.length > 0 ? (
          filteredApplications.map((app) => {
            const statusColor = getStatusColor(app.status);
            return (
              <div
                key={app.id}
                className="bg-[#1C212E] rounded-xl border border-[#2A3143] p-6 hover:border-[#818CF8]/50 transition"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Job Info */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-4xl">{app.logo}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{app.jobTitle}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                          <span className="flex items-center gap-1">
                            <Briefcase size={16} /> {app.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={16} /> {app.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={16} /> {new Date(app.appliedDate).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Status & Action */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`flex items-center gap-2 px-3 py-1 rounded-lg border ${statusColor.bg} ${statusColor.border}`}>
                        <span className={statusColor.text}>{getStatusIcon(app.status)}</span>
                        <span className={`font-semibold text-sm ${statusColor.text}`}>{statusColor.label}</span>
                      </div>
                      <p className="text-sm text-slate-400">{app.nextAction}</p>
                    </div>

                    {/* Salary */}
                    <p className="text-[#818CF8] font-semibold">{app.salary}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2 justify-start">
                    {app.status === 'interview' && app.interviewMeetLink && (
                      <button
                        onClick={() => navigate('/interviews')}
                        className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition text-center shadow-[0_2px_10px_rgba(16,185,129,0.2)] cursor-pointer"
                      >
                        <Video size={16} /> Join Meet
                      </button>
                    )}
                    <button className="px-6 py-2 bg-[#818CF8] hover:bg-[#6366F1] rounded-lg font-semibold text-sm transition">
                      View Details
                    </button>
                    <button className="px-6 py-2 bg-[#818CF8]/10 border border-[#818CF8]/30 text-[#818CF8] hover:bg-[#818CF8]/20 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition">
                      <MessageSquare size={16} /> Message
                    </button>
                    {app.status === 'offered' && (
                      <button className="px-6 py-2 bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 rounded-lg font-semibold text-sm transition">
                        Accept Offer
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="bg-[#1C212E] rounded-xl border border-[#2A3143] p-12 text-center">
            <AlertCircle className="mx-auto text-slate-400 mb-4" size={48} />
            <h3 className="text-xl font-bold mb-2">No Applications Found</h3>
            <p className="text-slate-400">Try adjusting your filters or search term</p>
          </div>
        )}
      </div>

      {/* Timeline Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Application Timeline</h2>
        <div className="relative">
          {applications.slice(0, 3).map((app, idx) => (
            <div key={app.id} className="flex gap-6 mb-8">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                  app.status === 'offered'
                    ? 'border-green-400 bg-green-500/10'
                    : app.status === 'rejected'
                    ? 'border-red-400 bg-red-500/10'
                    : 'border-[#818CF8] bg-[#818CF8]/10'
                }`}>
                  {getStatusIcon(app.status)}
                </div>
                {idx < 2 && <div className="w-1 h-16 bg-[#2A3143] my-2"></div>}
              </div>
              <div className="flex-1 pt-2">
                <p className="font-semibold">{app.jobTitle}</p>
                <p className="text-sm text-slate-400">{app.company}</p>
                <p className="text-xs text-slate-500 mt-1">{app.appliedDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicationTracker;
