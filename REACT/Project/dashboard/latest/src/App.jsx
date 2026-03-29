import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import JobFeed from './components/JobFeed';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import JobDetails from './components/JobDetails';
import PostJob from './components/PostJob';
import Messages from './components/Messages';
import UserProfile from './components/UserProfile';
import Auth from './components/Auth';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing', 'dashboard', 'marketplace'

  // If we are on the landing page, render only the landing page
  if (currentView === 'landing') {
    return <LandingPage setCurrentView={setCurrentView} />;
  }

  // If we are on the auth page, render only auth page
  if (currentView === 'auth') {
    return <Auth setCurrentView={setCurrentView} />;
  }

  // Otherwise, render the internal application layout
  return (
    <div className="flex h-screen overflow-hidden bg-[#0B0F19] font-sans antialiased text-white">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      
      <div className="flex-1 flex flex-col relative h-screen overflow-hidden">
        {currentView !== 'messages' && currentView !== 'profile' && <Header />}
        
        {currentView === 'dashboard' && <Dashboard />}
        {currentView === 'marketplace' && <JobFeed />}
        {currentView === 'jobDetails' && <JobDetails />}
        {currentView === 'postJob' && <PostJob />}
        {currentView === 'messages' && <Messages />}
        {currentView === 'profile' && <UserProfile />}
      </div>
    </div>
  );
}

export default App;
