export const jobsData = [
  {
    id: 1,
    type: 'default',
    category: 'DELIVERY SERVICE',
    title: 'Food Delivery from Restaurant',
    status: 'JUST NOW',
    budget: '₹450.00',
    distance: '2.5 km',
    location: 'T. Nagar, Chennai',
    icon: 'Package', // Will map to Lucide icon in component
    iconBgC: 'bg-indigo-500/10',
    iconC: 'text-indigo-400'
  },
  {
    id: 2,
    type: 'details',
    category: 'CREATIVE',
    title: 'Social Media Graphics for Startup',
    status: '2 MINS AGO',
    estimatedTime: '6 Hours',
    location: 'Remote / Kochi',
    rate: '₹1,200.00',
    icon: 'PenTool',
    iconBgC: 'bg-orange-500/10',
    iconC: 'text-orange-400'
  },
  {
    id: 3,
    type: 'badges',
    category: 'MAINTENANCE',
    title: 'Office Cleaning Service',
    status: '5 MINS AGO',
    description: 'Corporate office needs deep cleaning including floors, desks and restrooms. Equipment provided.',
    budget: '₹2,500.00',
    badges: ['Physical Labor', 'Full-time', 'Immediate Start'],
    icon: 'Shovel',
    iconBgC: 'bg-green-500/10',
    iconC: 'text-green-400'
  },
  {
    id: 4,
    type: 'user',
    category: 'TECHNOLOGY',
    title: 'Website Development for E-commerce',
    status: '12 MINS AGO',
    budget: '₹8,500.00',
    user: {
      name: 'Arun K.',
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
    title: 'Courier Delivery Service',
    status: '20 MINS AGO',
    budget: '₹1,400.00',
    mapLabel: 'THIRUVANANTHAPURAM',
    details: [
      { icon: 'Clock', text: 'Urgent' },
      { icon: 'Truck', text: 'Bike/Scooter' }
    ]
  },
  {
    id: 6,
    type: 'recurring',
    category: 'TEACHING',
    title: 'Home Tuition - Class 10 Mathematics',
    status: '45 MINS AGO',
    recurringText: 'Weekly Classes (Mon-Sat)',
    budget: '₹3,000.00',
    budgetLabel: 'MONTHLY TOTAL',
    icon: 'PawPrint',
    iconBgC: 'bg-slate-800',
    iconC: 'text-slate-300'
  },
  {
    id: 7,
    type: 'default',
    category: 'MAINTENANCE',
    title: 'AC Repair Service',
    status: 'JUST NOW',
    budget: '₹800.00',
    distance: '1.8 km',
    location: 'Adyar, Chennai',
    icon: 'Package',
    iconBgC: 'bg-blue-500/10',
    iconC: 'text-blue-400'
  },
  {
    id: 8,
    type: 'details',
    category: 'CREATIVE',
    title: 'Wedding Photography',
    status: '8 MINS AGO',
    estimatedTime: 'Full Day',
    location: 'Trivandrum, Kerala',
    rate: '₹15,000.00',
    icon: 'PenTool',
    iconBgC: 'bg-purple-500/10',
    iconC: 'text-purple-400'
  },
  {
    id: 9,
    type: 'badges',
    category: 'DELIVERY SERVICE',
    title: 'Grocery Delivery',
    status: '15 MINS AGO',
    description: 'Deliver groceries from local supermarket to residential area. Multiple stops required.',
    budget: '₹600.00',
    badges: ['Part-time', 'Flexible Hours', 'Vehicle Required'],
    icon: 'Package',
    iconBgC: 'bg-green-500/10',
    iconC: 'text-green-400'
  },
  {
    id: 10,
    type: 'user',
    category: 'TECHNOLOGY',
    title: 'Mobile App Development',
    status: '25 MINS AGO',
    budget: '₹25,000.00',
    user: {
      name: 'Priya M.',
      rating: 5
    },
    icon: 'Monitor',
    iconBgC: 'bg-indigo-500/10',
    iconC: 'text-indigo-400'
  },
  {
    id: 11,
    type: 'map',
    category: 'MAINTENANCE',
    title: 'Plumbing Service',
    status: '30 MINS AGO',
    budget: '₹950.00',
    mapLabel: 'COIMBATORE',
    details: [
      { icon: 'Clock', text: 'Same Day' },
      { icon: 'Truck', text: 'Tools Provided' }
    ]
  },
  {
    id: 12,
    type: 'recurring',
    category: 'TEACHING',
    title: 'English Language Classes',
    status: '1 HOUR AGO',
    recurringText: 'Evening Classes (Tue-Thu)',
    budget: '₹4,500.00',
    budgetLabel: 'MONTHLY TOTAL',
    icon: 'PawPrint',
    iconBgC: 'bg-slate-800',
    iconC: 'text-slate-300'
  }
];
