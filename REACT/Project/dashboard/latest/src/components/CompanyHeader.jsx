import { useNavigate } from 'react-router-dom';
import { Star, MapPin, Users, Globe, ArrowLeft, Heart, Briefcase } from 'lucide-react';
import { useState } from 'react';

const CompanyHeader = ({ company }) => {
  const navigate = useNavigate();
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="relative">
      {/* Banner */}
      <div className={`${company.banner} h-40 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent"></div>
        <button
          onClick={() => navigate('/marketplace')}
          className="absolute top-4 left-4 bg-black/40 hover:bg-black/60 p-2 rounded-lg backdrop-blur-md transition-all z-10"
        >
          <ArrowLeft size={24} className="text-white" />
        </button>
      </div>

      {/* Company Info - Overlapping */}
      <div className="relative px-8 pb-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end gap-6 -mt-20 mb-8">
            {/* Logo */}
            <div className="text-8xl shadow-2xl drop-shadow-xl flex-shrink-0">
              {company.logo}
            </div>

            {/* Info */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
                {company.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center gap-1.5">
                  <Star size={18} className="text-yellow-400" fill="currentColor" />
                  <span className="text-white font-bold">{company.rating}</span>
                  <span className="text-slate-400 text-sm">({company.reviews} reviews)</span>
                </div>
                <div className="hidden md:flex h-5 w-px bg-slate-600"></div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <MapPin size={16} />
                  {company.location}
                </div>
              </div>
            </div>

            {/* Follow Button */}
            <button
              onClick={() => setIsFollowing(!isFollowing)}
              className={`py-3 px-8 rounded-xl font-semibold transition-all flex items-center gap-2 flex-shrink-0
                ${isFollowing
                  ? 'bg-[#818CF8]/20 text-[#818CF8] border border-[#818CF8]/30'
                  : 'bg-[#818CF8] text-white hover:bg-[#6366F1] shadow-lg shadow-indigo-500/20'
                }
              `}
            >
              <Heart size={18} fill={isFollowing ? 'currentColor' : 'none'} />
              {isFollowing ? 'Following' : 'Follow'}
            </button>
          </div>

          {/* Description & Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* About */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-1 h-8 bg-white rounded-full"></span>
                About Company
              </h3>
              <p className="text-white leading-relaxed text-base font-medium">
                {company.description}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="bg-white/5 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="pb-3 border-b border-white/10">
                  <p className="text-xs text-white/60 font-semibold mb-1 uppercase">FOUNDED</p>
                  <p className="text-white font-bold text-lg">{company.founded}</p>
                </div>
                <div className="pb-3 border-b border-white/10">
                  <p className="text-xs text-white/60 font-semibold mb-1 uppercase">COMPANY SIZE</p>
                  <p className="text-white font-bold text-lg">{company.employees}</p>
                </div>
                <div>
                  <p className="text-xs text-white/60 font-semibold mb-1 uppercase">WEBSITE</p>
                  <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 font-semibold transition-colors text-sm break-all underline">
                    {company.website}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Specialties */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-8 bg-white rounded-full"></span>
              Specializations
            </h3>
            <div className="flex flex-wrap gap-3">
              {company.specialties.map(specialty => (
                <div key={specialty} className="bg-white/10 border border-white/30 rounded-full px-5 py-2.5 flex items-center gap-2 hover:bg-white/15 transition-colors">
                  <Briefcase size={16} className="text-white" />
                  <span className="text-white font-semibold text-sm">{specialty}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyHeader;
