import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import JobFeed from './components/JobFeed';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import JobDetails from './components/JobDetails';
import Messages from './components/Messages';
import UserProfile from './components/UserProfile';
import AppliedJobs from './components/AppliedJobs';
import SearchHistory from './components/SearchHistory';
import Auth from './components/Auth';
import './App.css';

function ApplicationLayout({ children }) {
  const location = useLocation();
  const currentView = location.pathname.replace('/', '') || 'landing';
  const showHeader = currentView !== 'messages' && currentView !== 'profile';

  return (
    <div className="flex h-screen overflow-hidden bg-[#0B0F19] font-sans antialiased text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col relative h-screen overflow-hidden">
        {showHeader && <Header />}
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<Auth />} />

      {/* Internal App Routes wrapped in Layout */}
      <Route path="/dashboard" element={<ApplicationLayout><Dashboard /></ApplicationLayout>} />
      <Route path="/marketplace" element={<ApplicationLayout><JobFeed /></ApplicationLayout>} />
      <Route path="/job-details" element={<ApplicationLayout><JobDetails /></ApplicationLayout>} />
      <Route path="/applied-jobs" element={<ApplicationLayout><AppliedJobs /></ApplicationLayout>} />
      <Route path="/search-history" element={<ApplicationLayout><SearchHistory /></ApplicationLayout>} />
      <Route path="/messages" element={<ApplicationLayout><Messages /></ApplicationLayout>} />
      <Route path="/profile" element={<ApplicationLayout><UserProfile /></ApplicationLayout>} />
    </Routes>
  );
}

export default App;
