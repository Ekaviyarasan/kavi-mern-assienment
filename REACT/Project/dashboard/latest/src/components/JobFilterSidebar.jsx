import { useState } from 'react';
import { ChevronDown, X, Sliders } from 'lucide-react';

const JobFilterSidebar = ({ onFilterChange, isOpen, onClose }) => {
  const [filters, setFilters] = useState({
    jobType: [],
    salaryRange: [0, 200000],
    experience: [],
    location: [],
    company: [],
    datePosted: 'any'
  });

  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'];
  const experienceLevels = ['Entry Level', 'Mid Level', 'Senior', 'Executive'];
  const locations = ['Remote', 'San Francisco', 'New York', 'Los Angeles', 'Chicago', 'Boston'];
  const companies = ['Tech Corp', 'StartUp Inc', 'Cloud Systems', 'Enterprise Solutions', 'Design Studios'];

  const handleCheckboxChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value]
    }));
  };

  const handleApplyFilters = () => {
    onFilterChange(filters);
    onClose();
  };

  const clearFilters = () => {
    setFilters({
      jobType: [],
      salaryRange: [0, 200000],
      experience: [],
      location: [],
      company: [],
      datePosted: 'any'
    });
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static inset-y-0 left-0 w-80 bg-[#1C212E] border border-[#2A3143] overflow-y-auto transition-transform duration-300 z-50 md:z-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#1C212E] border-b border-[#2A3143] p-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sliders size={20} className="text-[#818CF8]" />
            <h3 className="font-bold text-lg">Filters</h3>
          </div>
          <button
            onClick={onClose}
            className="md:hidden p-2 hover:bg-[#2A3143] rounded-lg transition"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Job Type */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center justify-between">
              Job Type
              <ChevronDown size={18} />
            </h4>
            <div className="space-y-3">
              {jobTypes.map(type => (
                <label key={type} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={filters.jobType.includes(type)}
                    onChange={() => handleCheckboxChange('jobType', type)}
                    className="w-4 h-4 rounded bg-[#151A28] border border-[#2A3143] accent-[#818CF8] cursor-pointer"
                  />
                  <span className="text-sm text-slate-300 group-hover:text-white transition">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Experience Level */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center justify-between">
              Experience Level
              <ChevronDown size={18} />
            </h4>
            <div className="space-y-3">
              {experienceLevels.map(level => (
                <label key={level} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={filters.experience.includes(level)}
                    onChange={() => handleCheckboxChange('experience', level)}
                    className="w-4 h-4 rounded bg-[#151A28] border border-[#2A3143] accent-[#818CF8] cursor-pointer"
                  />
                  <span className="text-sm text-slate-300 group-hover:text-white transition">{level}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Salary Range */}
          <div>
            <h4 className="font-semibold mb-4">Salary Range</h4>
            <div className="space-y-4">
              <input
                type="range"
                min="0"
                max="300000"
                value={filters.salaryRange[1]}
                onChange={(e) => setFilters(prev => ({
                  ...prev,
                  salaryRange: [prev.salaryRange[0], parseInt(e.target.value)]
                }))}
                className="w-full accent-[#818CF8]"
              />
              <div className="flex justify-between text-sm text-slate-400">
                <span>${filters.salaryRange[0].toLocaleString()}</span>
                <span>${filters.salaryRange[1].toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center justify-between">
              Location
              <ChevronDown size={18} />
            </h4>
            <div className="space-y-3">
              {locations.map(location => (
                <label key={location} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={filters.location.includes(location)}
                    onChange={() => handleCheckboxChange('location', location)}
                    className="w-4 h-4 rounded bg-[#151A28] border border-[#2A3143] accent-[#818CF8] cursor-pointer"
                  />
                  <span className="text-sm text-slate-300 group-hover:text-white transition">{location}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Date Posted */}
          <div>
            <h4 className="font-semibold mb-4">Date Posted</h4>
            <select
              value={filters.datePosted}
              onChange={(e) => setFilters(prev => ({ ...prev, datePosted: e.target.value }))}
              className="w-full bg-[#151A28] border border-[#2A3143] rounded-lg px-3 py-2 text-white focus:border-[#818CF8] outline-none transition"
            >
              <option value="any">Any time</option>
              <option value="24h">Last 24 hours</option>
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
            </select>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center justify-between">
              Company
              <ChevronDown size={18} />
            </h4>
            <div className="space-y-3">
              {companies.map(company => (
                <label key={company} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={filters.company.includes(company)}
                    onChange={() => handleCheckboxChange('company', company)}
                    className="w-4 h-4 rounded bg-[#151A28] border border-[#2A3143] accent-[#818CF8] cursor-pointer"
                  />
                  <span className="text-sm text-slate-300 group-hover:text-white transition">{company}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="sticky bottom-0 bg-[#1C212E] border-t border-[#2A3143] p-6 space-y-3">
          <button
            onClick={handleApplyFilters}
            className="w-full px-4 py-3 bg-[#818CF8] hover:bg-[#6366F1] rounded-lg font-semibold transition"
          >
            Apply Filters
          </button>
          <button
            onClick={clearFilters}
            className="w-full px-4 py-3 bg-[#1C212E] border border-[#2A3143] hover:border-[#818CF8] rounded-lg font-semibold transition text-slate-300"
          >
            Clear All
          </button>
        </div>
      </div>
    </>
  );
};

export default JobFilterSidebar;
