import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { jobsData } from '../data/jobsData';
import CompanyHeader from './CompanyHeader';
import CompanyStats from './CompanyStats';
import CompanyJobsSection from './CompanyJobsSection';

const Company = () => {
  const [searchParams] = useSearchParams();
  const companyId = searchParams.get('id') || 1;
  const [companyJobs, setCompanyJobs] = useState([]);
  const [company, setCompany] = useState(null);

  // Sample company data
  const companiesData = {
    1: {
      id: 1,
      name: 'Tech Innovations Ltd',
      rating: 4.8,
      reviews: 342,
      location: 'Bangalore, Karnataka',
      employees: '500-1000',
      description: 'Leading technology solutions provider with expertise in web development, mobile apps, and cloud services.',
      founded: '2015',
      specialties: ['Web Development', 'Mobile Apps', 'Cloud Services'],
      website: 'www.techinnovations.com',
      banner: 'bg-gradient-to-r from-indigo-600 to-purple-600',
      logo: '🏢'
    },
    2: {
      id: 2,
      name: 'Creative Studio Pro',
      rating: 4.6,
      reviews: 218,
      location: 'Mumbai, Maharashtra',
      employees: '50-200',
      description: 'Award-winning creative agency specializing in graphic design, branding, and digital marketing.',
      founded: '2018',
      specialties: ['Graphic Design', 'Branding', 'Digital Marketing'],
      website: 'www.creativestudiopro.com',
      banner: 'bg-gradient-to-r from-orange-500 to-pink-500',
      logo: '🎨'
    },
    3: {
      id: 3,
      name: 'Logistics Express',
      rating: 4.5,
      reviews: 542,
      location: 'Chennai, Tamil Nadu',
      employees: '1000+',
      description: 'Fastest delivery and logistics service across India with real-time tracking.',
      founded: '2012',
      specialties: ['Delivery Services', 'Courier', 'Warehouse Management'],
      website: 'www.logisticsexpress.com',
      banner: 'bg-gradient-to-r from-green-500 to-teal-500',
      logo: '🚚'
    }
  };

  useEffect(() => {
    // Get company data
    const companyData = companiesData[companyId] || companiesData[1];
    setCompany(companyData);

    // Filter jobs by company - in a real app, jobs would have companyId field
    // For demo, we'll assign jobs based on category and company
    const filtered = jobsData.slice(0, 6).map(job => ({
      ...job,
      companyId: parseInt(companyId)
    }));
    setCompanyJobs(filtered);
  }, [companyId]);

  if (!company) return <div className="text-white text-center py-12">Loading...</div>;

  return (
    <div className="flex-1 overflow-y-auto bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-[#0B0F19]/95 p-8 shadow-2xl shadow-slate-950/40">
        {/* Company Header */}
        <CompanyHeader company={company} />

        {/* Main Content */}
        <div className="px-8 pb-12">
        <div className="max-w-5xl mx-auto">
          {/* Stats Section */}
          <CompanyStats company={company} totalJobs={companyJobs.length} />

          {/* Jobs Section */}
          <CompanyJobsSection jobs={companyJobs} companyName={company.name} />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Company;
