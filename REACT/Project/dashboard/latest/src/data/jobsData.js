export const jobsData = [
  {
    id: 1,
    type: 'default',
    category: 'DELIVERY SERVICE',
    title: 'Express Grocery Run',
    status: 'JUST NOW',
    budget: '$45.00',
    distance: '1.2 miles',
    location: 'Downtown Arts District',
    icon: 'Package', // Will map to Lucide icon in component
    iconBgC: 'bg-indigo-500/10',
    iconC: 'text-indigo-400'
  },
  {
    id: 2,
    type: 'details',
    category: 'CREATIVE',
    title: 'Logo Refresh for Local Cafe',
    status: '2 MINS AGO',
    estimatedTime: '4 Hours',
    location: 'Remote / Hybrid',
    rate: '$120.00',
    icon: 'PenTool',
    iconBgC: 'bg-orange-500/10',
    iconC: 'text-orange-400'
  },
  {
    id: 3,
    type: 'badges',
    category: 'MAINTENANCE',
    title: 'Garden Restoration Project',
    status: '5 MINS AGO',
    description: 'Large backyard needs weeding, mulching and light pruning. Tools provided on site.',
    budget: '$250.00',
    badges: ['Physical Labor', 'Weekend Only', 'High Rating Required'],
    icon: 'Shovel',
    iconBgC: 'bg-green-500/10',
    iconC: 'text-green-400'
  },
  {
    id: 4,
    type: 'user',
    category: 'TECHNOLOGY',
    title: 'Home Network Setup & Security',
    status: '12 MINS AGO',
    budget: '$85.00',
    user: {
      name: 'Marcus T.',
      rating: 5
    },
    icon: 'Monitor',
    iconBgC: 'bg-indigo-500/10',
    iconC: 'text-indigo-400'
  },
  {
    id: 5,
    type: 'map',
    category: 'DELIVERY',
    title: 'Large Furniture Pickup',
    status: '20 MINS AGO',
    budget: '$140.00',
    mapLabel: 'MISSION DISTRICT',
    details: [
      { icon: 'Clock', text: 'Immediate' },
      { icon: 'Truck', text: 'Van Needed' }
    ]
  },
  {
    id: 6,
    type: 'recurring',
    category: 'PET CARE',
    title: 'Dog Walking - 3 Golden Retrievers',
    status: '45 MINS AGO',
    recurringText: 'Recurring Weekly (Mon-Fri)',
    budget: '$300.00',
    budgetLabel: 'WEEKLY TOTAL',
    icon: 'PawPrint',
    iconBgC: 'bg-slate-800',
    iconC: 'text-slate-300'
  }
];
