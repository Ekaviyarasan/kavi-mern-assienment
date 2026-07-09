import { useEffect, useRef, useState } from 'react';
import {
  Mic, MicOff, Video, VideoOff, PhoneOff, MessageSquare,
  Users, Info, Settings, ShieldAlert, Hand, MoreVertical,
  Send, X, Layout, Sparkles, Keyboard, HelpCircle, AlertCircle, RefreshCw,
  Menu, Calendar, ChevronLeft, ChevronRight
} from 'lucide-react';

const ClosedCaptioning = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="14" x="3" y="5" rx="2" ry="2"/>
    <path d="M7 10h4v2H7v-2Z"/>
    <path d="M13 10h4v2h-4v-2Z"/>
  </svg>
);

const GoogleMeetRoom = ({ application, onLeave }) => {
  const videoRef = useRef(null);
  const [inCall, setInCall] = useState(false);
  
  // Extract initial code
  const getMeetingCode = () => {
    if (!application?.interviewMeetLink) return 'xxm-unfj-srs';
    try {
      const parts = application.interviewMeetLink.split('/');
      return parts[parts.length - 1] || 'xxm-unfj-srs';
    } catch {
      return 'xxm-unfj-srs';
    }
  };

  const [meetCodeInput, setMeetCodeInput] = useState(getMeetingCode());
  const [stream, setStream] = useState(null);
  const [micActive, setMicActive] = useState(true);
  const [videoActive, setVideoActive] = useState(true);
  
  // UI Panels
  const [showChat, setShowChat] = useState(true);
  const [currentTime, setCurrentTime] = useState('');
  const [currentDateString, setCurrentDateString] = useState('');
  
  // Interactive Chat State
  const [messages, setMessages] = useState([
    { sender: 'Ananya Sen (HR)', text: 'Welcome to your face-to-face interview! We will begin in a moment.', time: 'Just now' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  // Clock utility
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
      
      const options = { weekday: 'short', day: 'numeric', month: 'short' };
      setCurrentDateString(now.toLocaleDateString('en-US', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Request Webcam & Mic permissions ONLY when entering the call
  useEffect(() => {
    if (!inCall) {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
        setStream(null);
      }
      return;
    }

    let localStream = null;
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(s => {
        setStream(s);
        localStream = s;
        if (videoRef.current) {
          videoRef.current.srcObject = s;
        }
      })
      .catch(err => {
        console.error('Webcam/Microphone access failed:', err);
      });

    return () => {
      if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
      }
    };
  }, [inCall]);

  // Sync video element when videoActive changes
  useEffect(() => {
    if (videoRef.current && stream && inCall) {
      videoRef.current.srcObject = videoActive ? stream : null;
    }
  }, [videoActive, stream, inCall]);

  // Toggle Microphone
  const toggleMic = () => {
    if (stream) {
      stream.getAudioTracks().forEach(track => track.enabled = !micActive);
    }
    setMicActive(!micActive);
  };

  // Toggle Video Camera
  const toggleVideo = () => {
    if (stream) {
      stream.getVideoTracks().forEach(track => track.enabled = !videoActive);
    }
    setVideoActive(!videoActive);
  };

  // Send message in chat
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMsg = {
      sender: 'You',
      text: newMessage.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setNewMessage('');

    // Trigger mock responses
    setTimeout(() => {
      const replies = [
        { sender: 'Dr. Sanjay Roy (Interviewer)', text: 'Thank you for introducing yourself. I am ready to start the technical assessment. Can you describe your experience with React?', time: 'Just now' },
        { sender: 'Ananya Sen (HR)', text: 'Please ensure your audio is clear. We are recording this session for assessment.', time: 'Just now' },
        { sender: 'Dr. Sanjay Roy (Interviewer)', text: 'Excellent. Please prepare to screen share your browser window when prompted.', time: 'Just now' }
      ];

      const replyIndex = Math.min(Math.floor(messages.length / 2), replies.length - 1);
      setMessages(prev => [...prev, replies[replyIndex]]);
    }, 2000);
  };

  // Leave active call, return to lobby
  const handleLeaveCall = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
    setStream(null);
    setInCall(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#202124] text-white flex flex-col h-screen overflow-hidden font-sans select-none">
      
      {/* ========================================================================= */}
      {/* LOBBY / LANDING PAGE MODE */}
      {/* ========================================================================= */}
      {!inCall && (
        <div className="flex-1 flex flex-col bg-white text-slate-800 h-full overflow-hidden">
          
          {/* Header Bar */}
          <header className="px-6 py-3 flex justify-between items-center border-b border-slate-100 bg-white">
            <div className="flex items-center gap-4">
              <button onClick={onLeave} className="text-slate-600 hover:bg-slate-100 p-2 rounded-full transition flex items-center justify-center">
                <Menu size={22} />
              </button>
              {/* Google Meet Logo Icon */}
              <div className="flex items-center gap-2">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3 12.5l-4-4v4h-1v-4l-4 4V7.5l4 4v-4h1v4l4-4v9z" fill="#00c853"/>
                  <path d="M15 8v8l-3-3v3h-1v-3l-3 3V8l3 3v-3h1v3l3-3z" fill="#1565c0"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
                <span className="text-slate-700 font-medium text-xl tracking-tight flex items-center">
                  Google&nbsp;<span className="text-slate-500 font-normal">Meet</span>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-5 text-slate-600 text-sm font-normal">
              <span className="text-slate-500 text-base">{currentTime} • {currentDateString}</span>
              <HelpCircle size={20} className="hover:text-slate-800 cursor-pointer transition-colors" />
              <MessageSquare size={20} className="hover:text-slate-800 cursor-pointer transition-colors" />
              <Settings size={20} className="hover:text-slate-800 cursor-pointer transition-colors" />
              <button className="px-5 py-1.5 bg-[#E8F0FE] text-[#1A73E8] border border-transparent rounded-lg font-bold text-xs hover:bg-[#D2E3FC] transition">
                Upgrade
              </button>
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold shadow-md">
                {application?.applicantName?.charAt(0).toUpperCase() || 'U'}
              </div>
            </div>
          </header>

          {/* Main Workspace Frame (Sidebar + Content) */}
          <div className="flex-1 flex overflow-hidden">
            
            {/* Left Sidebar Menu */}
            <aside className="w-64 border-r border-slate-100 pt-4 flex flex-col justify-between bg-white">
              <div className="space-y-1 pr-4">
                {/* 1. Meetings (Active) */}
                <div className="flex items-center gap-3 px-6 py-3 bg-[#E8F0FE] text-[#1A73E8] font-bold text-sm rounded-r-full cursor-pointer transition">
                  <Calendar size={18} className="text-[#1A73E8]" />
                  <span>Meetings</span>
                </div>

                {/* 2. Calls */}
                <div className="flex items-center gap-3 px-6 py-3 text-slate-600 hover:bg-slate-50 font-semibold text-sm rounded-r-full cursor-pointer transition">
                  <Video size={18} className="text-slate-500" />
                  <span>Calls</span>
                </div>
              </div>

              {/* Extra Footer Info */}
              <div className="p-6 text-[10px] text-slate-400 space-y-1 font-mono">
                <p>Status: Offline Fallback</p>
                <p>Local Meet v1.4.2</p>
              </div>
            </aside>

            {/* Right Main Landing Content */}
            <main className="flex-1 overflow-y-auto px-12 py-16 grid grid-cols-1 xl:grid-cols-2 gap-16 items-center bg-white">
              
              {/* Left Side: Text and Inputs */}
              <div className="space-y-8 max-w-xl">
                <h1 className="text-4xl md:text-[44px] font-normal text-slate-800 leading-tight tracking-tight">
                  Video calls and meetings for everyone
                </h1>
                <p className="text-slate-500 text-lg leading-relaxed font-normal">
                  Connect, collaborate and celebrate from anywhere with Google Meet
                </p>

                {/* Meet Action Control Block */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                  <button
                    onClick={() => setInCall(true)}
                    className="px-6 py-3.5 bg-[#1A73E8] hover:bg-[#1557B0] text-white font-bold rounded-lg text-sm flex items-center justify-center gap-2 transition"
                  >
                    <Video size={18} />
                    New meeting
                  </button>

                  <div className="flex-1 relative flex items-center border border-slate-300 rounded-lg focus-within:border-[#1A73E8] focus-within:ring-1 focus-within:ring-[#1A73E8] transition bg-white px-3 py-1">
                    <Keyboard size={18} className="text-slate-400 mr-2 flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Enter a code or link"
                      value={meetCodeInput}
                      onChange={(e) => setMeetCodeInput(e.target.value)}
                      className="w-full py-2.5 text-slate-800 placeholder-slate-400 bg-transparent text-sm focus:outline-none font-medium"
                    />
                    {meetCodeInput.trim() && (
                      <button
                        onClick={() => setInCall(true)}
                        className="ml-2 text-[#1A73E8] hover:text-[#1557B0] font-bold text-sm transition"
                      >
                        Join
                      </button>
                    )}
                  </div>
                </div>

                <div className="border-t border-slate-200/80 pt-8 flex items-center gap-4">
                  <span className="text-slate-400 text-xs uppercase font-bold tracking-widest">Active Meeting Code:</span>
                  <span className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-mono font-bold border border-slate-200">
                    {meetCodeInput || 'No Code Loaded'}
                  </span>
                </div>
              </div>

              {/* Right Side: Illustration Carousel */}
              <div className="flex flex-col items-center justify-center space-y-8">
                
                {/* Simulated Meet Illustration Frame */}
                <div className="w-80 h-80 rounded-full bg-slate-50 flex items-center justify-center border border-slate-150 relative">
                  
                  {/* Decorative Meeting bubble card */}
                  <div className="absolute w-72 h-52 bg-white border border-slate-200 rounded-[24px] shadow-xl flex flex-col justify-between p-5 overflow-hidden transition-all duration-300 hover:scale-102">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-xs font-bold text-slate-400">Virtual Face-to-Face Lobby</span>
                      <span className="w-2 h-2 rounded-full bg-[#00C853] animate-pulse"></span>
                    </div>

                    {/* Circular Icon Link Illustration */}
                    <div className="flex justify-center items-center gap-3 py-4">
                      <div className="w-11 h-11 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-lg shadow-sm">👩‍💼</div>
                      
                      {/* Connection Chain Icon */}
                      <div className="w-12 h-12 rounded-full bg-[#E8F0FE] border border-blue-100 flex items-center justify-center text-blue-600 shadow-md">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                      </div>

                      <div className="w-11 h-11 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-lg shadow-sm">👨‍🏫</div>
                    </div>

                    {/* Start Action */}
                    <button
                      onClick={() => setInCall(true)}
                      className="w-full py-2.5 bg-[#1A73E8] hover:bg-[#1557B0] text-white rounded-xl text-xs font-bold transition shadow-md"
                    >
                      Enter Meeting Room
                    </button>
                  </div>

                </div>

                {/* Carousel Caption Controls */}
                <div className="text-center max-w-sm space-y-3">
                  <h3 className="font-bold text-slate-800 text-base">Get a link you can share</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Click <strong className="text-slate-700">New meeting</strong> to get a link you can send to people you want to meet with.
                  </p>

                  {/* Circle slider indicators with arrows */}
                  <div className="flex justify-center items-center gap-4 pt-2">
                    <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-slate-700 transition">
                      <ChevronLeft size={16} />
                    </button>
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#1A73E8]"></span>
                      <span className="w-2 h-2 rounded-full bg-slate-200"></span>
                      <span className="w-2 h-2 rounded-full bg-slate-200"></span>
                    </div>
                    <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-slate-700 transition">
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

              </div>

            </main>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* ACTIVE CALL / MEETING ROOM MODE */}
      {/* ========================================================================= */}
      {inCall && (
        <div className="flex-1 flex flex-col h-full bg-[#202124]">
          {/* Top Recording Banner */}
          <div className="bg-[#1a1b1c] px-6 py-3 flex justify-between items-center border-b border-[#2d2e30]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-red-400">Recording Call Live</span>
            </div>
            <div className="text-xs text-slate-400 font-medium">
              Interview for <strong className="text-white">{application?.title}</strong>
            </div>
          </div>

          {/* Video Grid Section */}
          <div className="flex-1 flex overflow-hidden relative">
            
            {/* Left Side: Video Grid */}
            <div className="flex-1 p-6 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full max-w-6xl max-h-[75vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                {/* 1. Live Candidate Stream (You) */}
                <div className="relative rounded-2xl bg-[#171717] border-2 border-indigo-500 overflow-hidden shadow-lg group">
                  {videoActive && stream ? (
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      muted
                      className="w-full h-full object-cover transform -scale-x-100"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 to-slate-900">
                      <div className="w-20 h-20 rounded-full bg-indigo-500 flex items-center justify-center text-4xl font-extrabold text-white shadow-xl mb-2">
                        {application?.applicantName?.charAt(0).toUpperCase() || 'Y'}
                      </div>
                      <p className="text-sm font-semibold text-slate-400">Camera Turned Off</p>
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2">
                    <span>You ({application?.applicantName || 'Candidate'})</span>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-black/60 p-2 rounded-full">
                    {micActive ? <Mic size={14} className="text-green-400" /> : <MicOff size={14} className="text-red-400" />}
                  </div>
                </div>

                {/* 2. HR Host (Ananya Sen) */}
                <div className="relative rounded-2xl bg-[#171717] border border-white/5 overflow-hidden shadow-lg group">
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-emerald-950 to-slate-900">
                    <div className="w-20 h-20 rounded-full bg-emerald-600 flex items-center justify-center text-4xl font-extrabold text-white shadow-xl mb-2 animate-pulse">
                      👩‍💼
                    </div>
                    <p className="text-sm font-bold text-white">Ananya Sen</p>
                    <p className="text-xs text-emerald-400 font-semibold mt-1">HR Representative</p>
                  </div>

                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold">
                    Ananya Sen (HR Host)
                  </div>

                  <div className="absolute bottom-4 right-4 bg-black/60 p-2 rounded-full">
                    <Mic size={14} className="text-green-400" />
                  </div>
                </div>

                {/* 3. Technical Interviewer (Dr. Sanjay Roy) */}
                <div className="relative rounded-2xl bg-[#171717] border border-white/5 overflow-hidden shadow-lg group ring-2 ring-emerald-500/50">
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-950 to-slate-900">
                    <div className="w-24 h-24 rounded-full bg-indigo-600/30 flex items-center justify-center animate-ping absolute pointer-events-none"></div>
                    <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center text-4xl font-extrabold text-white shadow-xl mb-2 relative z-10">
                      👨‍🏫
                    </div>
                    <p className="text-sm font-bold text-white relative z-10">Dr. Sanjay Roy</p>
                    <p className="text-xs text-indigo-300 font-semibold mt-1 relative z-10">Technical Interviewer</p>
                  </div>

                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Dr. Sanjay Roy
                  </div>

                  <div className="absolute bottom-4 right-4 bg-black/60 p-2 rounded-full">
                    <Mic size={14} className="text-green-400" />
                  </div>
                </div>

                {/* 4. Observer (Finley Lau) */}
                <div className="relative rounded-2xl bg-[#171717] border border-white/5 overflow-hidden shadow-lg group">
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-950 to-slate-900">
                    <div className="w-20 h-20 rounded-full bg-amber-600 flex items-center justify-center text-4xl font-extrabold text-white shadow-xl mb-2">
                      👳
                    </div>
                    <p className="text-sm font-bold text-white">Finley Lau</p>
                    <p className="text-xs text-slate-400 font-medium">Observer</p>
                  </div>

                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold">
                    Finley Lau
                  </div>

                  <div className="absolute bottom-4 right-4 bg-black/60 p-2 rounded-full">
                    <MicOff size={14} className="text-red-400" />
                  </div>
                </div>

                {/* 5. Coordinator (Dayo Afumba) */}
                <div className="relative rounded-2xl bg-[#171717] border border-white/5 overflow-hidden shadow-lg group">
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-rose-950 to-slate-900">
                    <div className="w-20 h-20 rounded-full bg-rose-600 flex items-center justify-center text-4xl font-extrabold text-white shadow-xl mb-2">
                      👩
                    </div>
                    <p className="text-sm font-bold text-white">Dayo Afumba</p>
                    <p className="text-xs text-slate-400 font-medium">Technical Coordinator</p>
                  </div>

                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold">
                    Dayo Afumba
                  </div>

                  <div className="absolute bottom-4 right-4 bg-black/60 p-2 rounded-full">
                    <MicOff size={14} className="text-red-400" />
                  </div>
                </div>

                {/* 6. Extra Team Members */}
                <div className="relative rounded-2xl bg-[#171717] border border-white/5 overflow-hidden shadow-lg flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#1C212E] to-slate-900">
                  <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center text-xl font-bold text-slate-300 mb-2">
                    +4
                  </div>
                  <p className="text-sm font-bold text-slate-300">Others in Call</p>
                  <p className="text-xs text-slate-500">Corporate HR Roster</p>
                </div>

              </div>
            </div>

            {/* Right Side: Chat Panel */}
            {showChat && (
              <div className="w-96 bg-[#1a1b1c] border-l border-[#2d2e30] flex flex-col h-full animate-slideIn">
                <div className="px-6 py-5 border-b border-[#2d2e30] flex justify-between items-center">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <MessageSquare size={18} className="text-indigo-400" />
                    Meeting Chat
                  </h3>
                  <button
                    onClick={() => setShowChat(false)}
                    className="text-slate-400 hover:text-white transition p-1 hover:bg-white/5 rounded-lg"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  <div className="bg-[#202124] rounded-xl p-3.5 border border-white/5 text-xs text-slate-300 leading-relaxed mb-4">
                    <p className="font-bold text-white flex items-center gap-1.5 mb-1.5">
                      <ShieldAlert size={14} className="text-indigo-400" />
                      Security Notice
                    </p>
                    Messages are private to this meeting slot and stored locally for audit purposes.
                  </div>

                  {messages.map((msg, index) => (
                    <div key={index} className={`flex flex-col ${msg.sender === 'You' ? 'items-end' : 'items-start'}`}>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-xs font-bold text-slate-400">{msg.sender}</span>
                        <span className="text-[9px] text-slate-600 font-mono">{msg.time}</span>
                      </div>
                      <div className={`px-4 py-2.5 rounded-2xl text-sm max-w-[85%] ${
                        msg.sender === 'You' 
                          ? 'bg-indigo-600 text-white rounded-tr-none' 
                          : msg.sender.includes('Interviewer') 
                          ? 'bg-indigo-900/40 border border-indigo-800/30 text-slate-200 rounded-tl-none'
                          : 'bg-[#282a2d] text-slate-200 rounded-tl-none'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendMessage} className="p-4 border-t border-[#2d2e30] bg-[#171718] flex gap-2">
                  <input
                    type="text"
                    placeholder="Send a message to everyone..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1 px-4 py-3 bg-[#202124] border border-[#2d2e30] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
                  />
                  <button
                    type="submit"
                    className="w-11 h-11 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center transition flex-shrink-0"
                  >
                    <Send size={16} />
                  </button>
                </form>
              </div>
            )}

          </div>

          {/* Bottom Toolbar Bar */}
          <div className="bg-[#171718] px-8 py-5 border-t border-[#2d2e30] flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-sm font-semibold text-slate-300">
              <span>{currentTime}</span>
              <span className="text-slate-600">|</span>
              <span className="font-mono tracking-wider">{meetCodeInput}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleMic}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition ${
                  micActive ? 'bg-[#3c4043] hover:bg-[#4c5054]' : 'bg-red-500 hover:bg-red-400'
                }`}
              >
                {micActive ? <Mic size={20} /> : <MicOff size={20} />}
              </button>

              <button
                onClick={toggleVideo}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition ${
                  videoActive ? 'bg-[#3c4043] hover:bg-[#4c5054]' : 'bg-red-500 hover:bg-red-400'
                }`}
              >
                {videoActive ? <Video size={20} /> : <VideoOff size={20} />}
              </button>

              <button className="w-12 h-12 rounded-full bg-[#3c4043] hover:bg-[#4c5054] flex items-center justify-center transition">
                <ClosedCaptioning />
              </button>

              <button className="w-12 h-12 rounded-full bg-[#3c4043] hover:bg-[#4c5054] flex items-center justify-center transition">
                <Layout size={20} />
              </button>

              <button className="w-12 h-12 rounded-full bg-[#3c4043] hover:bg-[#4c5054] flex items-center justify-center transition">
                <Hand size={20} />
              </button>

              <button className="w-12 h-12 rounded-full bg-[#3c4043] hover:bg-[#4c5054] flex items-center justify-center transition">
                <MoreVertical size={20} />
              </button>

              <button
                onClick={handleLeaveCall}
                className="w-14 h-12 bg-red-500 hover:bg-red-400 rounded-3xl flex items-center justify-center transition ml-4 shadow-lg shadow-red-500/20"
                title="Leave Call"
              >
                <PhoneOff size={22} className="text-white" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-full hover:bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition">
                <Info size={18} />
              </button>
              <button className="w-10 h-10 rounded-full hover:bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition">
                <Users size={18} />
              </button>
              <button
                onClick={() => setShowChat(!showChat)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                  showChat ? 'bg-indigo-600 text-white' : 'hover:bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <MessageSquare size={18} />
              </button>
              <button className="w-10 h-10 rounded-full hover:bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition">
                <Settings size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default GoogleMeetRoom;
