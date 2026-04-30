import { Users, Briefcase, Star, TrendingUp } from 'lucide-react';

const CompanyStats = ({ company, totalJobs }) => {
  const stats = [
    {
      icon: Users,
      label: 'Total Employees',
      value: company.employees,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Briefcase,
      label: 'Open Positions',
      value: totalJobs,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: Star,
      label: 'Company Rating',
      value: `${company.rating} / 5`,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10'
    },
    {
      icon: TrendingUp,
      label: 'Since',
      value: company.founded,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className={`${stat.bgColor} border border-white/20 rounded-2xl p-6 backdrop-blur-sm hover:border-white/40 transition-colors`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-xs text-white/70 font-semibold uppercase tracking-wider mb-2">
                  {stat.label}
                </p>
                <p className={`text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </p>
              </div>
              <Icon size={28} className={`${stat.color} opacity-60`} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CompanyStats;
