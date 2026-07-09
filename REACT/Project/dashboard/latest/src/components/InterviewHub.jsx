import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Video, Calendar, Clock, User, Mail, Link, Plus, CheckCircle2,
  X, AlertCircle, RefreshCw, Briefcase, MapPin, DollarSign, ChevronRight,
  Sparkles
} from 'lucide-react';
import { getApplications, updateApplication } from '../lib/api';
import GoogleMeetRoom from './GoogleMeetRoom';

const InterviewHub = () => {
  const navigate = useNavigate();
  const [roleMode, setRoleMode] = useState('hr'); // 'hr', 'candidate', 'interviewer'
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [activeMeeting, setActiveMeeting] = useState(null);

  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);
  const [form, setForm] = useState({
    interviewDateTime: '',
    interviewMeetLink: '',
    interviewerName: 'Dr. Sanjay Roy',
    interviewerEmail: 'sanjay.roy@company.com',
    hrName: 'Ananya Sen (HR Lead)',
    hrEmail: 'ananya.sen@company.com'
  });

  // Fetch applications from the backend
  const loadData = async () => {
    setLoading(true);
    setError('');
    try {
      // Fetch all applications
      const data = await getApplications();
      setApplications(data || []);
    } catch (err) {
      console.error('Failed to load applications:', err);
      setError('Unable to load applications. Please check if backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('jobhub_user') || 'null');
    if (!user) {
      navigate('/auth');
      return;
    }
    setCurrentUser(user);
    loadData();
  }, [navigate]);

  // Open scheduling modal with auto-generated meeting link
  const openScheduleModal = (app) => {
    setSelectedApp(app);
    // Generate a mock google meet link: meet.google.com/xxx-xxxx-xxx
    const randomCode = () => Math.random().toString(36).substring(2, 6);
    const meetLink = `https://meet.google.com/${randomCode()}-${randomCode()}-${randomCode()}`;
    
    // Set interview time 1 day from now as default
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(14, 0, 0, 0);
    const defaultDateTime = tomorrow.toISOString().slice(0, 16);

    setForm({
      interviewDateTime: defaultDateTime,
      interviewMeetLink: meetLink,
      interviewerName: 'Dr. Sanjay Roy',
      interviewerEmail: 'sanjay.roy@company.com',
      hrName: `${currentUser?.fullName || 'Arun'} (HR Lead)`,
      hrEmail: currentUser?.email || 'hr@jobzenix.com'
    });
    setShowModal(true);
  };

  // Submit interview schedule to backend
  const handleScheduleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedApp) return;

    try {
      const payload = {
        applicationStatus: 'Interview',
        interviewDateTime: form.interviewDateTime,
        interviewMeetLink: form.interviewMeetLink,
        interviewerName: form.interviewerName,
        interviewerEmail: form.interviewerEmail,
        hrName: form.hrName,
        hrEmail: form.hrEmail
      };

      const updated = await updateApplication(selectedApp.id, payload);
      
      // Update local state
      setApplications(prev => prev.map(a => a.id === selectedApp.id ? updated : a));
      setShowModal(false);
      setSelectedApp(null);
    } catch (err) {
      console.error('Error scheduling interview:', err);
      alert('Failed to save interview schedule: ' + err.message);
    }
  };

  // Cancel interview
  const handleCancelInterview = async (appId) => {
    if (!window.confirm('Are you sure you want to cancel this interview?')) return;
    try {
      const payload = {
        applicationStatus: 'Applied',
        interviewDateTime: '',
        interviewMeetLink: '',
        interviewerName: '',
        interviewerEmail: '',
        hrName: '',
        hrEmail: ''
      };
      const updated = await updateApplication(appId, payload);
      setApplications(prev => prev.map(a => a.id === appId ? updated : a));
    } catch (err) {
      console.error('Error cancelling interview:', err);
      alert('Failed to cancel interview: ' + err.message);
    }
  };

  // Filter lists
  const scheduledInterviews = applications.filter(a => a.applicationStatus === 'Interview');
  const pendingApplications = applications.filter(a => a.applicationStatus !== 'Interview' && a.applicationStatus !== 'Rejected');
  
  // In candidate mode, filter by logged in user's email
  const candidateApplications = applications.filter(a => a.userEmail === currentUser?.email);

  if (activeMeeting) {
    return <GoogleMeetRoom application={activeMeeting} onLeave={() => setActiveMeeting(null)} />;
  }

  return (
    <div className="flex-1 overflow-y-auto bg-[#0B0F19] text-white p-8">
      <div className="max-w-7xl mx-auto rounded-[32px] border border-white/10 bg-[#0B0F19]/95 p-8 shadow-2xl shadow-slate-950/40">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              Live Video Meeting Mode
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">
              Face-to-Face <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818CF8] to-[#C084FC]">Interview Hub</span>
            </h1>
            <p className="text-white/60 text-base max-w-2xl">
              Schedule, manage, and join online face-to-face video & voice calls via Google Meet. Connect HR recruiters, candidates, and technical interviewers instantly.
            </p>
          </div>

          <button
            onClick={loadData}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-sm font-semibold transition"
          >
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
            Refresh
          </button>
        </div>

        {/* Role Selector Control */}
        <div className="mb-10 bg-[#151923] p-2 rounded-2xl border border-[#2A3143] inline-flex flex-wrap gap-2">
          <button
            onClick={() => setRoleMode('hr')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition ${
              roleMode === 'hr' ? 'bg-[#818CF8] text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <User size={18} />
            HR / Recruiter Mode
          </button>
          <button
            onClick={() => setRoleMode('candidate')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition ${
              roleMode === 'candidate' ? 'bg-[#818CF8] text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Briefcase size={18} />
            Employee / Candidate Mode
          </button>
          <button
            onClick={() => setRoleMode('interviewer')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition ${
              roleMode === 'interviewer' ? 'bg-[#818CF8] text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Video size={18} />
            Technical Interviewer Mode
          </button>
        </div>

        {/* Loading / Error States */}
        {loading && (
          <div className="py-20 text-center text-slate-400 flex flex-col items-center justify-center gap-3">
            <RefreshCw className="animate-spin text-indigo-400" size={36} />
            <p className="font-semibold text-lg">Syncing with database...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 mb-8 flex items-start gap-4">
            <AlertCircle className="text-red-400 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-bold text-red-400 text-lg mb-1">Server Connection Offline</h3>
              <p className="text-slate-300 mb-4">{error}</p>
              <button onClick={loadData} className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 font-semibold rounded-lg text-sm transition">
                Retry Connection
              </button>
            </div>
          </div>
        )}

        {/* Content Area */}
        {!loading && !error && (
          <div>
            
            {/* ========================================================================= */}
            {/* HR / RECRUITER VIEW */}
            {/* ========================================================================= */}
            {roleMode === 'hr' && (
              <div className="space-y-12">
                
                {/* Active Scheduled Interviews */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Video className="text-[#818CF8]" />
                    Upcoming Scheduled Face-to-Face Interviews ({scheduledInterviews.length})
                  </h2>

                  {scheduledInterviews.length === 0 ? (
                    <div className="bg-[#151923] border border-[#2A3143] rounded-[24px] p-8 text-center text-slate-400">
                      <Calendar size={48} className="mx-auto text-slate-500 mb-4" />
                      <p className="font-bold text-lg mb-1 text-white">No Interviews Scheduled</p>
                      <p className="text-sm">Find candidates in the list below and assign a Google Meet slot to get started.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {scheduledInterviews.map((app) => (
                        <div key={app.id} className="bg-gradient-to-tr from-[#151923] to-[#1C212E] border border-white/10 rounded-3xl p-6 shadow-xl relative overflow-hidden group hover:border-[#818CF8]/40 transition duration-300">
                          {/* Top Corner Badge */}
                          <div className="absolute top-0 right-0 bg-[#818CF8] text-[#0B0F19] text-[10px] font-extrabold uppercase px-4 py-1.5 rounded-bl-xl tracking-wider">
                            Face to Face (Online)
                          </div>

                          <h3 className="text-2xl font-bold mb-1 text-white">{app.title}</h3>
                          <p className="text-[#818CF8] font-bold text-sm mb-4">{app.companyName || 'Jobzenix Partner'}</p>

                          {/* Interview Schedule Details */}
                          <div className="bg-[#0B0F19]/40 border border-white/5 rounded-2xl p-4 mb-6 space-y-3">
                            <div className="flex items-center gap-3 text-sm">
                              <Calendar className="text-slate-400 flex-shrink-0" size={16} />
                              <span className="text-slate-300 font-medium">Date & Time: </span>
                              <span className="text-white font-bold">{new Date(app.interviewDateTime).toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                              <User className="text-slate-400 flex-shrink-0" size={16} />
                              <span className="text-slate-300 font-medium">Employee / Candidate: </span>
                              <span className="text-white font-bold">{app.applicantName}</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                              <Video className="text-slate-400 flex-shrink-0" size={16} />
                              <span className="text-slate-300 font-medium">Interviewer: </span>
                              <span className="text-white font-bold">{app.interviewerName} ({app.interviewerEmail})</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                              <Mail className="text-slate-400 flex-shrink-0" size={16} />
                              <span className="text-slate-300 font-medium">HR Host: </span>
                              <span className="text-white font-bold">{app.hrName || 'Ananya Sen'}</span>
                            </div>
                          </div>

                          {/* Meeting Action Bar */}
                          <div className="flex flex-col gap-2.5 w-full">
                            <a
                              href={app.interviewMeetLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full py-3 px-4 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold text-sm rounded-xl text-center flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(16,185,129,0.3)] transition"
                            >
                              <Video size={16} />
                              Launch Original Google Meet (Real Call)
                            </a>
                            <div className="flex flex-col sm:flex-row gap-2.5">
                              <button
                                onClick={() => setActiveMeeting(app)}
                                className="flex-1 py-3 px-4 bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-600/30 font-bold text-sm rounded-xl text-center flex items-center justify-center gap-2 transition cursor-pointer"
                              >
                                <Sparkles size={14} className="text-indigo-400" />
                                Open In-App Simulator (Demo)
                              </button>
                              <button
                                onClick={() => handleCancelInterview(app.id)}
                                className="py-3 px-4 bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 text-red-400 font-bold text-sm rounded-xl transition cursor-pointer"
                              >
                                Cancel Slot
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Candidate Applications Pending Schedule */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Plus className="text-green-400" />
                    Incoming Job Applications ({pendingApplications.length})
                  </h2>

                  {pendingApplications.length === 0 ? (
                    <div className="bg-[#151923] border border-[#2A3143] rounded-[24px] p-8 text-center text-slate-400">
                      <CheckCircle2 size={48} className="mx-auto text-green-400 mb-4" />
                      <p className="font-bold text-lg mb-1 text-white">All Clear!</p>
                      <p className="text-sm">There are no pending candidate applications requiring scheduling at this time.</p>
                    </div>
                  ) : (
                    <div className="bg-[#151923] border border-[#2A3143] rounded-[24px] overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="border-b border-[#2A3143] bg-white/5 text-slate-400 text-xs font-bold uppercase tracking-wider">
                              <th className="px-6 py-4">Candidate</th>
                              <th className="px-6 py-4">Job Role</th>
                              <th className="px-6 py-4">Budget / Location</th>
                              <th className="px-6 py-4 text-center">Status</th>
                              <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#2A3143]/60 text-sm">
                            {pendingApplications.map((app) => (
                              <tr key={app.id} className="hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4">
                                  <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-sm">
                                      {app.applicantName?.charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                      <p className="font-semibold text-white">{app.applicantName}</p>
                                      <p className="text-xs text-slate-400 font-mono">{app.userEmail}</p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-4">
                                  <p className="font-medium text-white">{app.title}</p>
                                  <p className="text-xs text-indigo-400 font-semibold">{app.companyName || 'Jobzenix Client'}</p>
                                </td>
                                <td className="px-6 py-4">
                                  <div className="text-white font-semibold font-mono">{app.budget || '—'}</div>
                                  <div className="text-xs text-slate-400 flex items-center gap-0.5">
                                    <MapPin size={12} /> {app.location || 'Remote'}
                                  </div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                  <span className="px-2.5 py-1 text-xs font-bold bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-lg uppercase tracking-wider">
                                    {app.applicationStatus}
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                  <button
                                    onClick={() => openScheduleModal(app)}
                                    className="px-4 py-2 bg-[#818CF8] hover:bg-[#6366F1] text-white font-bold rounded-xl text-xs transition inline-flex items-center gap-1.5"
                                  >
                                    <Calendar size={14} />
                                    Schedule Face-to-Face
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            )}

            {/* ========================================================================= */}
            {/* EMPLOYEE / CANDIDATE VIEW */}
            {/* ========================================================================= */}
            {roleMode === 'candidate' && (
              <div className="space-y-8">
                <div className="bg-[#151923] border border-[#2A3143] rounded-3xl p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Welcome, {currentUser?.fullName || 'Candidate'}</h3>
                  <p className="text-slate-400 text-sm">
                    Here is the status of your online face-to-face video interviews. You can log into your meeting links with camera (face) and microphone (voice) enabled.
                  </p>
                </div>

                {candidateApplications.length === 0 ? (
                  <div className="bg-[#151923] border border-[#2A3143] rounded-[24px] p-12 text-center text-slate-400">
                    <Briefcase size={48} className="mx-auto text-slate-500 mb-4" />
                    <p className="font-bold text-lg mb-2 text-white">No Job Applications Yet</p>
                    <p className="text-sm mb-6">Apply to some premium positions in the Marketplace to see interview status here.</p>
                    <button
                      onClick={() => navigate('/marketplace')}
                      className="px-6 py-3 bg-[#818CF8] hover:bg-[#6366F1] text-white font-bold rounded-xl text-sm transition"
                    >
                      Explore Marketplace
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {candidateApplications.map((app) => {
                      const isScheduled = app.applicationStatus === 'Interview';
                      return (
                        <div key={app.id} className="bg-[#151923] border border-[#2A3143] rounded-3xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-slate-700 transition">
                          
                          {/* Info */}
                          <div className="space-y-2 flex-1">
                            <span className={`px-2 py-0.5 text-[10px] font-extrabold uppercase border rounded-md ${
                              isScheduled 
                                ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400' 
                                : 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400'
                            }`}>
                              {isScheduled ? 'F2F Interview Scheduled' : 'Application ' + app.applicationStatus}
                            </span>
                            <h3 className="text-2xl font-bold text-white mt-2">{app.title}</h3>
                            <p className="text-slate-400 text-sm font-medium">{app.companyName || 'Jobzenix Hiring Partner'}</p>
                            
                            {isScheduled ? (
                              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-slate-400 font-medium">
                                <p className="flex items-center gap-2">
                                  <Calendar size={14} className="text-indigo-400" />
                                  <span>Time: </span>
                                  <strong className="text-white">{new Date(app.interviewDateTime).toLocaleString()}</strong>
                                </p>
                                <p className="flex items-center gap-2">
                                  <User size={14} className="text-indigo-400" />
                                  <span>Interviewer: </span>
                                  <strong className="text-white">{app.interviewerName}</strong>
                                </p>
                                <p className="flex items-center gap-2">
                                  <Mail size={14} className="text-indigo-400" />
                                  <span>HR Contact: </span>
                                  <strong className="text-white">{app.hrName}</strong>
                                </p>
                              </div>
                            ) : (
                              <p className="text-slate-500 text-xs mt-2 italic flex items-center gap-1.5">
                                <Clock size={12} />
                                The recruiter has received your application. We will update you here once the Google Meet slot is assigned.
                              </p>
                            )}
                          </div>

                          {/* Action Button */}
                          <div className="flex-shrink-0 w-full md:w-auto text-right">
                            {isScheduled ? (
                              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                                <a
                                  href={app.interviewMeetLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="py-3 px-6 bg-gradient-to-r from-[#818CF8] to-[#6366F1] text-white font-bold text-sm rounded-xl text-center inline-flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(129,140,248,0.25)] transition"
                                >
                                  <Video size={16} />
                                  Launch Original Google Meet (Real Call)
                                </a>
                                <button
                                  onClick={() => setActiveMeeting(app)}
                                  className="py-3 px-6 bg-indigo-950/40 border border-indigo-800/30 text-indigo-400 hover:bg-indigo-900/30 font-bold text-sm rounded-xl text-center inline-flex items-center justify-center gap-2 transition cursor-pointer"
                                >
                                  <Sparkles size={16} />
                                  Open In-App Simulator
                                </button>
                              </div>
                            ) : (
                              <button disabled className="w-full md:w-auto py-3 px-6 bg-[#1A1F2D] text-slate-600 font-bold text-sm rounded-xl cursor-not-allowed">
                                Awaiting Date/Time
                              </button>
                            )}
                          </div>

                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* ========================================================================= */}
            {/* INTERVIEWER VIEW */}
            {/* ========================================================================= */}
            {roleMode === 'interviewer' && (
              <div className="space-y-8">
                <div className="bg-[#151923] border border-[#2A3143] rounded-3xl p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Technical Interviewer Dashboard</h3>
                  <p className="text-slate-400 text-sm">
                    View upcoming technical assessments assigned to you. Prepare your screen share and activate video/audio permissions upon entering the Google Meet.
                  </p>
                </div>

                {scheduledInterviews.length === 0 ? (
                  <div className="bg-[#151923] border border-[#2A3143] rounded-[24px] p-8 text-center text-slate-400">
                    <Calendar size={48} className="mx-auto text-slate-500 mb-4" />
                    <p className="font-bold text-lg mb-1 text-white">No Assigned Interviews</p>
                    <p className="text-sm">There are no upcoming candidate assessments assigned to your roster.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {scheduledInterviews.map((app) => (
                      <div key={app.id} className="bg-[#151923] border border-[#2A3143] rounded-3xl p-6 hover:border-slate-700 transition flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-4">
                            <span className="px-2.5 py-1 text-[10px] font-bold bg-green-500/10 text-green-400 border border-green-500/20 rounded-lg uppercase tracking-wider">
                              Assigned Interviewer
                            </span>
                            <span className="font-mono text-sm text-[#818CF8] font-bold">{app.budget || '₹10k - ₹15k'}</span>
                          </div>

                          <h3 className="text-xl font-bold text-white mb-1">{app.title}</h3>
                          <p className="text-slate-400 text-xs mb-4 font-semibold">{app.companyName || 'Jobzenix Tech Client'}</p>

                          <div className="border-t border-[#2A3143] pt-4 mt-2 space-y-3.5 mb-6 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-500">Date/Time</span>
                              <span className="text-white font-bold">{new Date(app.interviewDateTime).toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-500">Candidate</span>
                              <span className="text-white font-semibold">{app.applicantName}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-500">HR Contact</span>
                              <span className="text-white font-semibold">{app.hrName || 'Ananya Sen'}</span>
                            </div>
                            {app.description && (
                              <div className="bg-[#0B0F19] rounded-xl p-3 border border-white/5 text-xs text-slate-400 leading-relaxed max-h-24 overflow-y-auto">
                                <span className="text-slate-500 block mb-1 uppercase font-bold text-[9px] tracking-wider">Hiring Details:</span>
                                {app.description}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-col gap-2.5 w-full">
                          <a
                            href={app.interviewMeetLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3 px-4 bg-[#818CF8] hover:bg-[#6366F1] text-white font-bold text-sm rounded-xl text-center flex items-center justify-center gap-2 transition"
                          >
                            <Video size={16} />
                            Launch Original Google Meet (Real Call)
                          </a>
                          <button
                            onClick={() => setActiveMeeting(app)}
                            className="w-full py-2.5 bg-indigo-950/40 border border-indigo-800/30 text-indigo-400 hover:bg-indigo-900/30 font-bold text-xs rounded-xl text-center flex items-center justify-center gap-1.5 transition cursor-pointer"
                          >
                            <Sparkles size={14} />
                            Open In-App Simulator
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>
        )}

      </div>

      {/* ========================================================================= */}
      {/* SCHEDULING MODAL */}
      {/* ========================================================================= */}
      {showModal && selectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#151923] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl p-8 max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => { setShowModal(false); setSelectedApp(null); }}
              className="absolute top-6 right-6 text-slate-400 hover:text-white transition p-1.5 bg-[#2A3143]/40 rounded-full"
            >
              <X size={18} />
            </button>

            <div className="mb-6">
              <span className="px-2.5 py-1 text-[10px] font-bold bg-[#818CF8]/10 text-[#818CF8] border border-[#818CF8]/20 rounded-lg uppercase tracking-wider">
                Schedule Form
              </span>
              <h2 className="text-2xl font-bold text-white mt-2">Face-to-Face Meeting Setup</h2>
              <p className="text-slate-400 text-xs mt-1">
                Configure details for the Google Meet slot. Candidate, Interviewer, and HR will receive these details instantly.
              </p>
            </div>

            <form onSubmit={handleScheduleSubmit} className="space-y-5">
              
              {/* Candidate Info (Read Only) */}
              <div className="bg-[#0B0F19] rounded-2xl p-4 border border-white/5 grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-1">Employee / Candidate</label>
                  <p className="font-semibold text-white">{selectedApp.applicantName}</p>
                </div>
                <div>
                  <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-1">Job Applied For</label>
                  <p className="font-semibold text-white truncate">{selectedApp.title}</p>
                </div>
              </div>

              {/* Date & Time Picker */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider pl-1">Date & Time</label>
                <div className="relative">
                  <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="datetime-local"
                    required
                    value={form.interviewDateTime}
                    onChange={(e) => setForm(prev => ({ ...prev, interviewDateTime: e.target.value }))}
                    className="w-full bg-[#0B0F19] border border-[#2A3143] text-white text-sm rounded-xl pl-12 pr-5 py-3 focus:outline-none focus:border-[#818CF8] transition"
                  />
                </div>
              </div>

              {/* Google Meet Link */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider pl-1">Google Meet Meeting Link</label>
                <div className="relative">
                  <Link size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="url"
                    required
                    placeholder="https://meet.google.com/abc-defg-hij"
                    value={form.interviewMeetLink}
                    onChange={(e) => setForm(prev => ({ ...prev, interviewMeetLink: e.target.value }))}
                    className="w-full bg-[#0B0F19] border border-[#2A3143] text-white text-sm rounded-xl pl-12 pr-5 py-3 focus:outline-none focus:border-[#818CF8] transition font-mono"
                  />
                </div>
                <p className="text-[10px] text-slate-500 pl-1 italic">HR can provide a customized Google Meet link allowing webcam face & microphone voice sharing.</p>
              </div>

              {/* Interviewer details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider pl-1">Interviewer Name</label>
                  <input
                    type="text"
                    required
                    value={form.interviewerName}
                    onChange={(e) => setForm(prev => ({ ...prev, interviewerName: e.target.value }))}
                    className="w-full bg-[#0B0F19] border border-[#2A3143] text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#818CF8] transition"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider pl-1">Interviewer Email</label>
                  <input
                    type="email"
                    required
                    value={form.interviewerEmail}
                    onChange={(e) => setForm(prev => ({ ...prev, interviewerEmail: e.target.value }))}
                    className="w-full bg-[#0B0F19] border border-[#2A3143] text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#818CF8] transition font-mono"
                  />
                </div>
              </div>

              {/* HR Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider pl-1">HR Representative Name</label>
                  <input
                    type="text"
                    required
                    value={form.hrName}
                    onChange={(e) => setForm(prev => ({ ...prev, hrName: e.target.value }))}
                    className="w-full bg-[#0B0F19] border border-[#2A3143] text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#818CF8] transition"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider pl-1">HR Representative Email</label>
                  <input
                    type="email"
                    required
                    value={form.hrEmail}
                    onChange={(e) => setForm(prev => ({ ...prev, hrEmail: e.target.value }))}
                    className="w-full bg-[#0B0F19] border border-[#2A3143] text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#818CF8] transition font-mono"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="pt-4 flex gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3.5 bg-[#818CF8] hover:bg-[#6366F1] text-white font-bold rounded-xl text-sm transition shadow-[0_4px_20px_rgba(129,140,248,0.25)]"
                >
                  Confirm & Schedule Face-to-Face Slot
                </button>
                <button
                  type="button"
                  onClick={() => { setShowModal(false); setSelectedApp(null); }}
                  className="px-6 py-3.5 bg-[#2A3143] hover:bg-[#3B4255] text-slate-300 font-bold rounded-xl text-sm transition"
                >
                  Cancel
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default InterviewHub;
